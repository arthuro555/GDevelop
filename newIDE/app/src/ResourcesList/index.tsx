// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import {I18n} from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'react-virtualized'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/react-virtualized/dist/commonjs/index.js' implicitly has an 'any' type.
import { AutoSizer } from 'react-virtualized';
// @ts-expect-error - TS6142 - Module '../UI/SortableVirtualizedItemList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SortableVirtualizedItemList/index.tsx', but '--jsx' is not set.
import SortableVirtualizedItemList from '../UI/SortableVirtualizedItemList';
// @ts-expect-error - TS6142 - Module '../UI/Background' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Background.tsx', but '--jsx' is not set.
import Background from '../UI/Background';
// @ts-expect-error - TS6142 - Module '../UI/SearchBar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SearchBar.tsx', but '--jsx' is not set.
import SearchBar from '../UI/SearchBar';
import { showWarningBox } from '../UI/Messages/MessageBox';
import { filterResourcesList } from './EnumerateResources';
import { getResourceFilePathStatus } from './ResourceUtils';
import { MenuItemTemplate } from '../UI/Menu/Menu.flow';
import {
  ResourceKind,
  allResourceKindsAndMetadata,
} from './ResourceSource';
import { FileMetadata } from '../ProjectsStorage';
import ResourcesLoader from '../ResourcesLoader';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../UI/Grid';
import { ResourcesActionsMenuBuilder } from '../ProjectsStorage';
// @ts-expect-error - TS6142 - Module '../UI/Messages/InfoBar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Messages/InfoBar.tsx', but '--jsx' is not set.
import InfoBar from '../UI/Messages/InfoBar';

const styles = {
  listContainer: {
    flex: 1,
  },
} as const;

const getResourceName = (resource: gdResource) => resource.getName();

type State = {
  renamedResource: gdResource | null | undefined,
  searchText: string,
  resourcesWithErrors: {
    [key: string]: '' | 'error' | 'warning'
  },
  infoBarContent: {
    message: React.ReactNode,
    actionLabel?: React.ReactNode,
    onActionClick?: () => void
  } | null | undefined
};

type Props = {
  project: gdProject,
  selectedResource: gdResource | null | undefined,
  onSelectResource: (resource?: gdResource | null | undefined) => void,
  onDeleteResource: (resource: gdResource) => void,
  onRenameResource: (resource: gdResource, newName: string, cb: (arg1: boolean) => void) => void,
  fileMetadata: FileMetadata | null | undefined,
  onRemoveUnusedResources: (arg1: ResourceKind) => void,
  onRemoveAllResourcesWithInvalidPath: () => void,
  getResourceActionsSpecificToStorageProvider?: ResourcesActionsMenuBuilder | null | undefined
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

  _deleteResource = (resource: gdResource) => {
    this.props.onDeleteResource(resource);
  };

  _editName = (resource?: gdResource | null) => {
    this.setState(
      {
        renamedResource: resource,
      },
      () => {
        if (this.sortableList) this.sortableList.forceUpdateGrid();
      }
    );
  };

  _getResourceThumbnail = (resource: gdResource) => {
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

  _rename = (resource: gdResource, newName: string) => {
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

    this.props.onRenameResource(resource, newName, doRename => {
      if (!doRename) return;
      resource.setName(newName);
      this.forceUpdate();
    });
  };

  _moveSelectionTo = (destinationResource: gdResource) => {
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

  _renderResourceMenuTemplate = (i18n: I18nType) => (resource: gdResource, _index: number): Array<MenuItemTemplate> => {
    const {
      getResourceActionsSpecificToStorageProvider,
      fileMetadata,
    } = this.props;
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
                allResourceKindsAndMetadata.forEach(resourceKindAndMetadata => {
                  this.props.onRemoveUnusedResources(
                    resourceKindAndMetadata.kind
                  );
                });
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
    resourceNames.forEach(resourceName => {
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
      message: React.ReactNode,
      actionLabel?: React.ReactNode,
      onActionClick?: () => void
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
      .map(resourceName => resourcesManager.getResource(resourceName));
    const filteredList = filterResourcesList(allResourcesList, searchText);

    // Force List component to be mounted again if project
    // has been changed. Avoid accessing to invalid objects that could
    // crash the app.
    const listKey = project.ptr;

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Background>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SearchBar
              value={searchText}
              onRequestSearch={() => {}}
// @ts-expect-error - TS7006 - Parameter 'text' implicitly has an 'any' type.
              onChange={text =>
                this.setState({
                  searchText: text,
                })
              }
              placeholder={t`Search resources`}
            />
          </Column>
        </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <div style={styles.listContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <AutoSizer>
{ /* @ts-expect-error - TS7031 - Binding element 'height' implicitly has an 'any' type. | TS7031 - Binding element 'width' implicitly has an 'any' type. */}
            {({ height, width }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
                {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <SortableVirtualizedItemList
                    key={listKey}
// @ts-expect-error - TS7006 - Parameter 'sortableList' implicitly has an 'any' type.
                    ref={sortableList => (this.sortableList = sortableList)}
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
