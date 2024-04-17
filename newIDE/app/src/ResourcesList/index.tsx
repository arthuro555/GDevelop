import { I18n } from '@lingui/react';

import { I18n as I18nType } from '@lingui/core';

import { t } from '@lingui/macro';

import * as React from 'react';

import { AutoSizer } from 'react-virtualized';

import SortableVirtualizedItemList from '../UI/SortableVirtualizedItemList';

import Background from '../UI/Background';

import SearchBar from '../UI/SearchBar';
import { showWarningBox } from '../UI/Messages/MessageBox';
import { filterResourcesList } from './EnumerateResources';
import { getResourceFilePathStatus } from './ResourceUtils';
import { MenuItemTemplate } from '../UI/Menu/Menu';
import { ResourceKind, allResourceKindsAndMetadata } from './ResourceSource';
import { FileMetadata } from '../ProjectsStorage';
import ResourcesLoader from '../ResourcesLoader';

import { Column, Line } from '../UI/Grid';
import { ResourcesActionsMenuBuilder } from '../ProjectsStorage';

import InfoBar from '../UI/Messages/InfoBar';

const styles = {
  listContainer: {
    flex: 1,
  },
} as const;

const getResourceName = (resource: gd.Resource) => resource.getName();

type State = {
  renamedResource: gd.Resource | null | undefined;
  searchText: string;
  resourcesWithErrors: {
    [key: string]: '' | 'error' | 'warning';
  };
  infoBarContent:
    | {
        message: React.ReactNode;
        actionLabel?: React.ReactNode;
        onActionClick?: () => void;
      }
    | null
    | undefined;
};

type Props = {
  project: gd.Project;
  selectedResource: gd.Resource | null | undefined;
  onSelectResource: (resource?: gd.Resource | null | undefined) => void;
  onDeleteResource: (resource: gd.Resource) => void;
  onRenameResource: (
    resource: gd.Resource,
    newName: string,
    cb: (arg1: boolean) => void
  ) => void;
  fileMetadata: FileMetadata | null | undefined;
  onRemoveUnusedResources: (arg1: ResourceKind) => void;
  onRemoveAllResourcesWithInvalidPath: () => void;
  getResourceActionsSpecificToStorageProvider?:
    | ResourcesActionsMenuBuilder
    | null
    | undefined;
};

export default class ResourcesList extends React.Component<Props, State> {
  sortableList: any;
  state: State = {
    renamedResource: null,
    searchText: '',
    resourcesWithErrors: {},
    infoBarContent: null,
  };

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    // The component is costly to render, so avoid any re-rendering as much
    // as possible.
    // We make the assumption that no changes to resources list is made outside
    // from the component.
    // If a change is made, the component won't notice it: you have to manually
    // call forceUpdate.

    if (
      this.state.renamedResource !== nextState.renamedResource ||
      this.state.searchText !== nextState.searchText ||
      this.state.infoBarContent !== nextState.infoBarContent
    )
      return true;

    if (
      this.props.project !== nextProps.project ||
      this.props.selectedResource !== nextProps.selectedResource
    )
      return true;

    return false;
  }

  _deleteResource = (resource: gd.Resource) => {
    this.props.onDeleteResource(resource);
  };

  _editName = (resource?: gd.Resource | null) => {
    this.setState(
      {
        renamedResource: resource,
      },
      () => {
        if (this.sortableList) this.sortableList.forceUpdateGrid();
      }
    );
  };

  _getResourceThumbnail = (resource: gd.Resource) => {
    switch (resource.getKind()) {
      case 'image':
        return ResourcesLoader.getResourceFullUrl(
          this.props.project,
          resource.getName(),
          {}
        );
      case 'audio':
        return 'res/actions/music24.png';
      case 'json':
      case 'tilemap':
      case 'tileset':
      case 'spine':
        return 'res/actions/fichier24.png';
      case 'video':
        return 'JsPlatform/Extensions/videoicon24.png';
      case 'font':
        return 'res/actions/font24.png';
      case 'bitmapFont':
        return 'JsPlatform/Extensions/bitmapfont32.png';
      case 'model3D':
        return 'JsPlatform/Extensions/3d_model.svg';
      default:
        return 'res/unknown32.png';
    }
  };

  _rename = (resource: gd.Resource, newName: string) => {
    const { project } = this.props;
    this.setState({
      renamedResource: null,
    });

    if (resource.getName() === newName) return;

    if (project.getResourcesManager().hasResource(newName)) {
      showWarningBox('Another resource with this name already exists', {
        delayToNextTick: true,
      });
      return;
    }

    this.props.onRenameResource(resource, newName, (doRename) => {
      if (!doRename) return;
      resource.setName(newName);
      this.forceUpdate();
    });
  };

  _moveSelectionTo = (destinationResource: gd.Resource) => {
    const { project, selectedResource } = this.props;
    if (!selectedResource) return;

    const resourcesManager = project.getResourcesManager();
    resourcesManager.moveResource(
      resourcesManager.getResourcePosition(selectedResource.getName()),
      resourcesManager.getResourcePosition(destinationResource.getName())
    );
    this.forceUpdateList();
  };

  forceUpdateList = () => {
    this.forceUpdate();
    if (this.sortableList) this.sortableList.forceUpdateGrid();
  };

  _renderResourceMenuTemplate =
    (i18n: I18nType) =>
    (resource: gd.Resource, _index: number): Array<MenuItemTemplate> => {
      const { getResourceActionsSpecificToStorageProvider, fileMetadata } =
        this.props;
      let menu = [
        {
          label: i18n._(t`Rename`),
          click: () => this._editName(resource),
        },
        {
          label: i18n._(t`Delete`),
          click: () => this._deleteResource(resource),
        },
        { type: 'separator' },
        {
          label: i18n._(t`Remove unused...`),
          submenu: allResourceKindsAndMetadata
            .map(({ displayName, kind }) => ({
              label: i18n._(displayName),
              click: () => {
                this.props.onRemoveUnusedResources(kind);
              },
            }))
            .concat([
              {
                label: i18n._(t`Resources (any kind)`),
                click: () => {
                  allResourceKindsAndMetadata.forEach(
                    (resourceKindAndMetadata) => {
                      this.props.onRemoveUnusedResources(
                        resourceKindAndMetadata.kind
                      );
                    }
                  );
                },
              },
            ]),
        },
      ];
      if (getResourceActionsSpecificToStorageProvider && fileMetadata) {
        menu.push({ type: 'separator' });
        menu = menu.concat(
          // @ts-expect-error - TS2769 - No overload matches this call.
          getResourceActionsSpecificToStorageProvider({
            project: this.props.project,
            fileMetadata,
            resource,
            i18n,
            informUser: this.openInfoBar,
            updateInterface: () => this.forceUpdateList(),
            cleanUserSelectionOfResources: () =>
              this.props.onSelectResource(null),
          })
        );
      }
      // @ts-expect-error - TS2322 - Type '({ label: any; click: () => void; type?: undefined; submenu?: undefined; } | { type: string; label?: undefined; click?: undefined; submenu?: undefined; } | { label: any; submenu: { label: any; click: () => void; }[]; click?: undefined; type?: undefined; })[]' is not assignable to type 'MenuItemTemplate[]'.
      return menu;
    };

  checkMissingPaths = () => {
    const { project } = this.props;
    const resourcesManager = project.getResourcesManager();
    const resourceNames = resourcesManager.getAllResourceNames().toJSArray();
    const resourcesWithErrors: Record<string, any> = {};
    // @ts-expect-error - TS7006 - Parameter 'resourceName' implicitly has an 'any' type.
    resourceNames.forEach((resourceName) => {
      resourcesWithErrors[resourceName] = getResourceFilePathStatus(
        project,
        resourceName
      );
    });
    this.setState({ resourcesWithErrors });
    this.forceUpdateList();
  };

  openInfoBar = (
    infoBarContent?: {
      message: React.ReactNode;
      actionLabel?: React.ReactNode;
      onActionClick?: () => void;
    } | null
  ) => {
    this.setState({ infoBarContent });
  };

  componentDidMount() {
    this.checkMissingPaths();
  }

  render() {
    const { project, selectedResource, onSelectResource } = this.props;
    const { searchText, infoBarContent } = this.state;

    const resourcesManager = project.getResourcesManager();
    const allResourcesList = resourcesManager
      .getAllResourceNames()
      .toJSArray()
      // @ts-expect-error - TS7006 - Parameter 'resourceName' implicitly has an 'any' type.
      .map((resourceName) => resourcesManager.getResource(resourceName));
    const filteredList = filterResourcesList(allResourcesList, searchText);

    // Force List component to be mounted again if project
    // has been changed. Avoid accessing to invalid objects that could
    // crash the app.
    const listKey = project.ptr;

    return (
      <Background>
        <Line>
          <Column expand>
            <SearchBar
              value={searchText}
              onRequestSearch={() => {}}
              onChange={(text) =>
                this.setState({
                  searchText: text,
                })
              }
              placeholder={t`Search resources`}
            />
          </Column>
        </Line>
        <div style={styles.listContainer}>
          <AutoSizer>
            {({ height, width }) => (
              <I18n>
                {({ i18n }) => (
                  <SortableVirtualizedItemList
                    key={listKey}
                    ref={(sortableList) => (this.sortableList = sortableList)}
                    fullList={filteredList}
                    width={width}
                    height={height}
                    getItemName={getResourceName}
                    getItemThumbnail={this._getResourceThumbnail}
                    selectedItems={selectedResource ? [selectedResource] : []}
                    onItemSelected={onSelectResource}
                    renamedItem={this.state.renamedResource}
                    onRename={this._rename}
                    onMoveSelectionToItem={this._moveSelectionTo}
                    buildMenuTemplate={this._renderResourceMenuTemplate(i18n)}
                    erroredItems={this.state.resourcesWithErrors}
                    reactDndType="GD_RESOURCE"
                  />
                )}
              </I18n>
            )}
          </AutoSizer>
        </div>
        {!!infoBarContent && (
          // @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <InfoBar
            duration={7000}
            visible
            hide={() => this.setState({ infoBarContent: null })}
            {...infoBarContent}
          />
        )}
      </Background>
    );
  }
}
