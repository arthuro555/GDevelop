// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
import Fuse from 'fuse.js';

import * as React from 'react';
import {
  createTree,
  InstructionOrExpressionTreeNode,
  findInTree,
} from '../../InstructionOrExpression/CreateTree';
import {
  enumerateAllInstructions,
  enumerateFreeInstructions,
} from '../../InstructionOrExpression/EnumerateInstructions';
import {
  EnumeratedInstructionMetadata,
  filterEnumeratedInstructionOrExpressionMetadataByScope,
} from '../../InstructionOrExpression/EnumeratedInstructionOrExpressionMetadata';
// @ts-expect-error - TS6142 - Module '../../UI/List' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/List.tsx', but '--jsx' is not set.
import { List, ListItemRefType, ListItem } from '../../UI/List';
// @ts-expect-error - TS6142 - Module '../../UI/SearchBar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SearchBar.tsx', but '--jsx' is not set.
import SearchBar, { SearchBarInterface } from '../../UI/SearchBar';
// @ts-expect-error - TS6142 - Module '../../UI/ScrollView' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ScrollView.tsx', but '--jsx' is not set.
import ScrollView, { ScrollViewInterface } from '../../UI/ScrollView';
// @ts-expect-error - TS6142 - Module '../../UI/Tabs' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Tabs.tsx', but '--jsx' is not set.
import { Tabs } from '../../UI/Tabs';
// @ts-expect-error - TS6142 - Module '../../UI/Subheader' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Subheader.tsx', but '--jsx' is not set.
import Subheader from '../../UI/Subheader';
import {
  enumerateObjectsAndGroups,
  ObjectWithContext,
  GroupWithContext,
} from '../../ObjectsList/EnumerateObjects';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ResponsiveLineStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module './SelectorListItems/SelectorGroupObjectsListItem' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/InstructionEditor/SelectorListItems/SelectorGroupObjectsListItem.tsx', but '--jsx' is not set.
import { renderGroupObjectsListItem } from './SelectorListItems/SelectorGroupObjectsListItem';
// @ts-expect-error - TS6142 - Module './SelectorListItems/SelectorObjectListItem' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/InstructionEditor/SelectorListItems/SelectorObjectListItem.tsx', but '--jsx' is not set.
import { renderObjectListItem } from './SelectorListItems/SelectorObjectListItem';
// @ts-expect-error - TS6142 - Module './SelectorListItems/SelectorInstructionOrExpressionListItem' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/InstructionEditor/SelectorListItems/SelectorInstructionOrExpressionListItem.tsx', but '--jsx' is not set.
import { renderInstructionOrExpressionListItem } from './SelectorListItems/SelectorInstructionOrExpressionListItem';
// @ts-expect-error - TS6142 - Module './SelectorListItems/SelectorInstructionsTreeListItem' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/InstructionEditor/SelectorListItems/SelectorInstructionsTreeListItem.tsx', but '--jsx' is not set.
import { renderInstructionOrExpressionTree } from './SelectorListItems/SelectorInstructionsTreeListItem';
// @ts-expect-error - TS6142 - Module '../../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../../UI/EmptyMessage';
import {
  getObjectOrObjectGroupListItemValue,
  getInstructionListItemValue,
} from './SelectorListItems/Keys';
import { EventsScope } from '../../InstructionOrExpression/EventsScope.flow';
import {
  SearchResult,
  tuneMatches,
  sharedFuseConfiguration,
  getFuseSearchQueryForSimpleArray,
  getFuseSearchQueryForMultipleKeys,
} from '../../UI/Search/UseSearchStructuredItem';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Add'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Add.js' implicitly has an 'any' type.
import Add from '../../UI/CustomSvgIcons/Add';
import getObjectByName from '../../Utils/GetObjectByName';
import {
  enumerateFoldersInContainer,
  getObjectsInFolder,
} from '../../ObjectsList/EnumerateObjectFolderOrObject';
// @ts-expect-error - TS6142 - Module './SelectorListItems/FolderListItem' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/InstructionEditor/SelectorListItems/FolderListItem.tsx', but '--jsx' is not set.
import { renderFolderListItem } from './SelectorListItems/FolderListItem';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';

const gd: libGDevelop = global.gd;

const DISPLAYED_INSTRUCTIONS_MAX_LENGTH = 20;
export const styles = {
  noObjectsText: { opacity: 0.7 },
  indentedListItem: { paddingLeft: 45 },
} as const;

export type TabName = 'objects' | 'free-instructions';

const moveDeprecatedInstructionsDown = (
  results: Array<SearchResult<EnumeratedInstructionMetadata>>
) => {
  const deprecatedResults = results.filter(result =>
    result.item.fullGroupName.includes('deprecated')
  );
  const notDeprecatedResults = results.filter(
    result => !result.item.fullGroupName.includes('deprecated')
  );
  return [...notDeprecatedResults, ...deprecatedResults];
};

type State = {
  searchText: string,
  searchResults: {
    objects: Array<SearchResult<ObjectWithContext>>,
    groups: Array<SearchResult<GroupWithContext>>,
    instructions: Array<SearchResult<EnumeratedInstructionMetadata>>,
    folders: Array<SearchResult<{
      path: string,
      folder: gdObjectFolderOrObject,
      global: boolean
    }>>
  }
};

type Props = {
  project: gdProject,
  globalObjectsContainer: gdObjectsContainer,
  objectsContainer: gdObjectsContainer,
  scope: EventsScope,
  currentTab: TabName,
  onChangeTab: (arg1: TabName) => void,
  isCondition: boolean,
  focusOnMount?: boolean,
  chosenInstructionType: string | null | undefined,
  onChooseInstruction: (type: string, arg2: EnumeratedInstructionMetadata) => void,
  chosenObjectName: string | null | undefined,
  onChooseObject: (objectName: string) => void,
  onSearchStartOrReset?: () => void,
  style?: any,
  onClickMore?: () => void,
  i18n: I18nType
};

const iconSize = 24;
const getGroupIconSrc = (key: string) => {
  return gd.JsPlatform.get()
    .getInstructionOrExpressionGroupMetadata(key)
    .getIcon();
};

export default class InstructionOrObjectSelector extends React.PureComponent<Props, State> {
  state = {
    searchText: '',
    searchResults: { objects: [], groups: [], instructions: [], folders: [] },
  };
  _searchBar = React.createRef<SearchBarInterface>();
  _scrollView = React.createRef<ScrollViewInterface>();
  _selectedItem = React.createRef<ListItemRefType>();

  // Free instructions, to be displayed in a tab next to the objects.
  freeInstructionsInfo: Array<EnumeratedInstructionMetadata> = filterEnumeratedInstructionOrExpressionMetadataByScope(
    enumerateFreeInstructions(this.props.isCondition, this.props.i18n),
    this.props.scope
  );
  freeInstructionsInfoTree: InstructionOrExpressionTreeNode = createTree(
    this.freeInstructionsInfo
  );
  initialInstructionTypePath = findInTree(
    this.freeInstructionsInfoTree,
    this.props.chosenInstructionType
  );

  instructionSearchApi = null;
  objectSearchApi = null;
  groupSearchApi = null;
  folderSearchApi = null;

  reEnumerateInstructions = (i18n: I18nType) => {
    this.freeInstructionsInfo = filterEnumeratedInstructionOrExpressionMetadataByScope(
      enumerateFreeInstructions(this.props.isCondition, i18n),
      this.props.scope
    );
    this.freeInstructionsInfoTree = createTree(this.freeInstructionsInfo);
    this.forceUpdate();
  };

  // All the instructions, to be used when searching, so that the search is done
  // across all the instructions (including object and behaviors instructions).
  allInstructionsInfo: Array<EnumeratedInstructionMetadata> = filterEnumeratedInstructionOrExpressionMetadataByScope(
    enumerateAllInstructions(this.props.isCondition, this.props.i18n),
    this.props.scope
  );

  componentDidMount() {
    if (this._selectedItem.current && this._scrollView.current) {
      this._scrollView.current.scrollTo(this._selectedItem.current);
    }
    const { allObjectsList, allGroupsList } = enumerateObjectsAndGroups(
      this.props.globalObjectsContainer,
      this.props.objectsContainer
    );

    const allFolders = [
      ...enumerateFoldersInContainer(this.props.globalObjectsContainer).map(
        folderWithPath => ({ ...folderWithPath, global: true })
      ),
      ...enumerateFoldersInContainer(this.props.objectsContainer).map(
        folderWithPath => ({ ...folderWithPath, global: false })
      ),
    ];

// @ts-expect-error - TS2322 - Type 'Fuse<EnumeratedInstructionMetadata>' is not assignable to type 'null'.
    this.instructionSearchApi = new Fuse(this.allInstructionsInfo, {
      ...sharedFuseConfiguration,
      keys: [
        { name: 'displayedName', weight: 5 },
        { name: 'fullGroupName', weight: 1 },
        { name: 'description', weight: 3 },
      ],
    });
// @ts-expect-error - TS2322 - Type 'Fuse<ObjectWithContext>' is not assignable to type 'null'.
    this.objectSearchApi = new Fuse(allObjectsList, {
      ...sharedFuseConfiguration,
      getFn: (item, property) => item.object.getName(),
      keys: ['name'], // Not used as we only use the name of the object
    });
// @ts-expect-error - TS2322 - Type 'Fuse<GroupWithContext>' is not assignable to type 'null'.
    this.groupSearchApi = new Fuse(allGroupsList, {
      ...sharedFuseConfiguration,
      getFn: (item, property) => item.group.getName(),
      keys: ['name'], // Not used as we only use the name of the group
    });
// @ts-expect-error - TS2322 - Type 'Fuse<{ global: boolean; path: string; folder: gdObjectFolderOrObject; }>' is not assignable to type 'null'.
    this.folderSearchApi = new Fuse(allFolders, {
      ...sharedFuseConfiguration,
      getFn: (item, property) => item.path,
      keys: ['name'], // Not used as we only use the path to the folder
    });
  }

  _search = (searchText: string) => {
    if (searchText === '') return;

    const extendedSearchText = getFuseSearchQueryForSimpleArray(searchText);

    this.setState({
      searchResults: {
        objects: this.objectSearchApi
// @ts-expect-error - TS2339 - Property 'search' does not exist on type 'never'. | TS7006 - Parameter 'result' implicitly has an 'any' type.
          ? this.objectSearchApi.search(extendedSearchText).map(result => ({
              item: result.item,
              matches: tuneMatches(result, searchText),
            }))
          : [],
        groups: this.groupSearchApi
// @ts-expect-error - TS2339 - Property 'search' does not exist on type 'never'. | TS7006 - Parameter 'result' implicitly has an 'any' type.
          ? this.groupSearchApi.search(extendedSearchText).map(result => ({
              item: result.item,
              matches: tuneMatches(result, searchText),
            }))
          : [],
        folders: this.folderSearchApi
// @ts-expect-error - TS2339 - Property 'search' does not exist on type 'never'. | TS7006 - Parameter 'result' implicitly has an 'any' type.
          ? this.folderSearchApi.search(extendedSearchText).map(result => ({
              item: result.item,
              matches: tuneMatches(result, searchText),
            }))
          : [],
        instructions: this.instructionSearchApi
          ? moveDeprecatedInstructionsDown(
              this.instructionSearchApi
// @ts-expect-error - TS2339 - Property 'search' does not exist on type 'never'.
                .search(
                  getFuseSearchQueryForMultipleKeys(searchText, [
                    'displayedName',
                    'fullGroupName',
                    'description',
                  ])
                )
// @ts-expect-error - TS7006 - Parameter 'result' implicitly has an 'any' type.
                .map(result => ({
                  item: result.item,
                  matches: tuneMatches(result, searchText),
                }))
            )
          : [],
      },
    });
  };

  render() {
    const {
      style,
      globalObjectsContainer,
      objectsContainer,
      project,
      chosenInstructionType,
      onChooseInstruction,
      chosenObjectName,
      onChooseObject,
      isCondition,
      currentTab,
      onChangeTab,
      onSearchStartOrReset,
      onClickMore,
    } = this.props;
    const { searchText, searchResults } = this.state;

    // If the global objects container is not the project, consider that we're
    // not in the events of a layout or an external events sheet - but in an extension.
    const isOutsideLayout = globalObjectsContainer !== project;

    const { allObjectsList, allGroupsList } = enumerateObjectsAndGroups(
      globalObjectsContainer,
      objectsContainer
    );
    const isSearching = !!searchText;

// @ts-expect-error - TS7034 - Variable 'filteredObjectsList' implicitly has type 'any[]' in some locations where its type cannot be determined.
    let filteredObjectsList = [];
// @ts-expect-error - TS7034 - Variable 'displayedObjectGroupsList' implicitly has type 'any[]' in some locations where its type cannot be determined.
    let displayedObjectGroupsList = [];
    let filteredInstructionsList: Array<SearchResult<EnumeratedInstructionMetadata>> = [];
// @ts-expect-error - TS7034 - Variable 'filteredFoldersList' implicitly has type 'any[]' in some locations where its type cannot be determined.
    let filteredFoldersList = [];

    if (isSearching) {
      filteredObjectsList = searchResults.objects;
      displayedObjectGroupsList = searchResults.groups;
      filteredInstructionsList = searchResults.instructions;
      filteredFoldersList = searchResults.folders;
    } else {
      filteredObjectsList = allObjectsList.map(object => ({
        item: object,
        matches: [],
      }));
      displayedObjectGroupsList = allGroupsList.map(object => ({
        item: object,
        matches: [],
      }));
    }
    const displayedInstructionsList = filteredInstructionsList.slice(
      0,
      DISPLAYED_INSTRUCTIONS_MAX_LENGTH
    );

    const remainingResultsCount = isSearching
      ? Math.max(
          filteredInstructionsList.length - DISPLAYED_INSTRUCTIONS_MAX_LENGTH,
          0
        )
      : 0;

    const hasResults =
      !isSearching ||
      !!filteredObjectsList.length ||
      !!displayedObjectGroupsList.length ||
      !!displayedInstructionsList.length ||
// @ts-expect-error - TS7005 - Variable 'filteredFoldersList' implicitly has an 'any[]' type.
      !!filteredFoldersList;

    const onSubmitSearch = () => {
      if (!isSearching) return;

      if (filteredObjectsList.length > 0) {
// @ts-expect-error - TS7005 - Variable 'filteredObjectsList' implicitly has an 'any[]' type.
        onChooseObject(filteredObjectsList[0].item.object.getName());
      } else if (displayedObjectGroupsList.length > 0) {
// @ts-expect-error - TS7005 - Variable 'displayedObjectGroupsList' implicitly has an 'any[]' type.
        onChooseObject(displayedObjectGroupsList[0].item.group.getName());
      } else if (displayedInstructionsList.length > 0) {
        onChooseInstruction(
          displayedInstructionsList[0].item.type,
          displayedInstructionsList[0].item
        );
      }
    };

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
        {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <div
            id="instruction-or-object-selector"
            style={{
              // Important for the component to not take the full height in a dialog,
              // allowing to let the scrollview do its job.
              minHeight: 0,
              ...style,
            }}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SearchBar
              id="search-bar"
              value={searchText}
// @ts-expect-error - TS7006 - Parameter 'searchText' implicitly has an 'any' type.
              onChange={searchText => {
                const oldSearchText = this.state.searchText;
                if (!!searchText) this._search(searchText);
                this.setState({
                  searchText,
                });

                // Notify if needed that we started or cleared a search
                if (
                  (!oldSearchText && searchText) ||
                  (oldSearchText && !searchText)
                ) {
                  if (onSearchStartOrReset) onSearchStartOrReset();
                }
              }}
              onRequestSearch={onSubmitSearch}
              ref={this._searchBar}
              autoFocus={this.props.focusOnMount ? 'desktop' : undefined}
              placeholder={
                isCondition
                  ? t`Search objects or conditions`
                  : t`Search objects or actions`
              }
            />
            {!isSearching && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Column expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Tabs
                    value={currentTab}
                    onChange={onChangeTab}
                    options={[
                      {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        label: <Trans>Objects</Trans>,
                        value: 'objects',
                      },
                      {
                        label: isCondition ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          <Trans>Other conditions</Trans>
                        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          <Trans>Other actions</Trans>
                        ),
                        value: 'free-instructions',
                      },
                    ]}
                  />
                </Column>
              </Line>
            )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ScrollView ref={this._scrollView} autoHideScrollbar>
              {hasResults && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <List>
                  {(isSearching || currentTab === 'objects') && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <React.Fragment>
{ /* @ts-expect-error - TS7005 - Variable 'filteredObjectsList' implicitly has an 'any[]' type. */}
                      {filteredObjectsList.map(
                        ({ item: objectWithContext, matches }, index) =>
                          renderObjectListItem({
                            project: project,
                            objectWithContext: objectWithContext,
                            iconSize: iconSize,
                            onClick: () =>
                              onChooseObject(
                                objectWithContext.object.getName()
                              ),
                            matchesCoordinates: matches.length
                              ? matches[0].indices // Only field for objects is their name
                              : [],
                            selectedValue: chosenObjectName
                              ? getObjectOrObjectGroupListItemValue(
                                  chosenObjectName
                                )
                              : undefined,
                            id: 'object-item-' + index,
                            data: {
                              objectName: objectWithContext.object.getName(),
                            },
                          })
                      )}

                      {displayedObjectGroupsList.length > 0 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <Subheader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <Trans>Object groups</Trans>
                        </Subheader>
                      )}
{ /* @ts-expect-error - TS7005 - Variable 'displayedObjectGroupsList' implicitly has an 'any[]' type. */}
                      {displayedObjectGroupsList.map(
                        ({ item: groupWithContext, matches }) => {
                          const results: Array<any | React.ReactElement<any>> = [];

                          results.push(
                            renderGroupObjectsListItem({
                              groupWithContext,
                              iconSize,
                              onClick: () =>
                                onChooseObject(
                                  groupWithContext.group.getName()
                                ),
                              matchesCoordinates: matches.length
                                ? matches[0].indices // Only field for groups is their name
                                : [],
                              selectedValue: chosenObjectName
                                ? getObjectOrObjectGroupListItemValue(
                                    chosenObjectName
                                  )
                                : undefined,
                            })
                          );
                          if (isSearching) {
                            const { group, global } = groupWithContext;
                            const groupName = group.getName();
                            const objectsInGroup = group
                              .getAllObjectsNames()
                              .toJSArray()
// @ts-expect-error - TS7006 - Parameter 'objectName' implicitly has an 'any' type.
                              .map(objectName => {
                                // A global object group can contain scene objects so we cannot use
                                // the group context to get directly get the object knowing the
                                // appropriate container.
                                const object = getObjectByName(
                                  globalObjectsContainer,
                                  objectsContainer,
                                  objectName
                                );
                                if (!object) return null;

                                return renderObjectListItem({
                                  project,
                                  objectWithContext: {
                                    object,
                                    global,
                                  },
                                  keyPrefix: `group-${groupName}`,
                                  withIndent: true,
                                  iconSize,
                                  onClick: () => onChooseObject(objectName),
                                  matchesCoordinates: [],
                                  selectedValue: chosenObjectName
                                    ? getObjectOrObjectGroupListItemValue(
                                        chosenObjectName
                                      )
                                    : undefined,
                                });
                              })
                              .filter(Boolean);
                            if (objectsInGroup.length === 0) {
                              results.push(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                <ListItem
                                  key={`${group.getName()}-empty`}
                                  primaryText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                    <Text style={styles.noObjectsText} noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                      <Trans>No objects in the group</Trans>
                                    </Text>
                                  }
                                  style={styles.indentedListItem}
                                />
                              );
                            } else {
                              results.push(...objectsInGroup);
                            }
                          }
                          return results;
                        }
                      )}
                      {filteredFoldersList.length > 0 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <Subheader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <Trans>Folders</Trans>
                        </Subheader>
                      )}
{ /* @ts-expect-error - TS7005 - Variable 'filteredFoldersList' implicitly has an 'any[]' type. */}
                      {filteredFoldersList.map(
                        ({ item: folderWithPath, matches }) => {
                          const results: Array<React.ReactElement<any> | any> = [];

                          results.push(
                            renderFolderListItem({
                              folderWithPath,
                              iconSize,
                              matchesCoordinates: matches.length
                                ? matches[0].indices
                                : [],
                            })
                          );
                          const objectsInFolder = getObjectsInFolder(
                            folderWithPath.folder
                          );
                          if (objectsInFolder.length === 0) {
                            results.push(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                              <ListItem
                                key={`${folderWithPath.path}-empty`}
                                primaryText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                  <Text style={styles.noObjectsText} noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                    <Trans>No objects in the folder</Trans>
                                  </Text>
                                }
                                style={styles.indentedListItem}
                              />
                            );
                          } else {
                            results.push(
                              ...objectsInFolder.map(object =>
                                renderObjectListItem({
                                  project,
                                  selectedValue: chosenObjectName
                                    ? getObjectOrObjectGroupListItemValue(
                                        chosenObjectName
                                      )
                                    : undefined,
                                  keyPrefix: `folder-${folderWithPath.path}`,
                                  iconSize,
                                  matchesCoordinates: [],
                                  objectWithContext: {
                                    object,
                                    global: folderWithPath.global,
                                  },
                                  withIndent: true,
                                  onClick: () =>
                                    onChooseObject(object.getName()),
                                })
                              )
                            );
                          }

                          return results;
                        }
                      )}
                    </React.Fragment>
                  )}
                  {isSearching && displayedInstructionsList.length > 0 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Subheader>
                      {isCondition ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <Trans>Conditions</Trans>
                      ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <Trans>Actions</Trans>
                      )}
                    </Subheader>
                  )}
                  {isSearching &&
                    displayedInstructionsList.map(
                      ({ item: instructionMetadata, matches }) =>
                        renderInstructionOrExpressionListItem({
                          instructionOrExpressionMetadata: instructionMetadata,
                          iconSize: iconSize,
                          id: `instruction-item-${instructionMetadata.type.replace(
                            /:/g,
                            '-'
                          )}`,
                          onClick: () =>
                            onChooseInstruction(
                              instructionMetadata.type,
                              instructionMetadata
                            ),
                          selectedValue: chosenInstructionType
                            ? getInstructionListItemValue(chosenInstructionType)
                            : undefined,
                          matches,
                        })
                    )}
                  {!isSearching && currentTab === 'free-instructions' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <>
                      {renderInstructionOrExpressionTree({
                        instructionTreeNode: this.freeInstructionsInfoTree,
                        onChoose: onChooseInstruction,
                        iconSize,
                        useSubheaders: true,
                        selectedValue: chosenInstructionType
                          ? getInstructionListItemValue(chosenInstructionType)
                          : undefined,
                        initiallyOpenedPath: this.initialInstructionTypePath,
                        selectedItemRef: this._selectedItem,
                        getGroupIconSrc,
                      })}
                      {onClickMore && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <ResponsiveLineStackLayout justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <RaisedButton
                            primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                            icon={<Add />}
                            onClick={onClickMore}
                            label={
                              isCondition ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                <Trans>
                                  Search for new conditions in extensions
                                </Trans>
                              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                <Trans>
                                  Search for new actions in extensions
                                </Trans>
                              )
                            }
                          />
                        </ResponsiveLineStackLayout>
                      )}
                    </>
                  )}
                  {remainingResultsCount > 0 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <ListItem
                      primaryText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <Trans>And {remainingResultsCount} more results.</Trans>
                      }
                      disabled
                      secondaryText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <Trans>
                          Refine your search with more specific keyword to see
                          them.
                        </Trans>
                      }
                    />
                  )}
                </List>
              )}
              {!isSearching &&
                currentTab === 'objects' &&
                !allObjectsList.length && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <EmptyMessage>
                    {isOutsideLayout ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>
                        There are no objects. Objects will appear if you add
                        some as parameters.
                      </Trans>
                    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>
                        There is no object in your game or in this scene. Start
                        by adding an new object in the scene editor, using the
                        objects list.
                      </Trans>
                    )}
                  </EmptyMessage>
                )}
              {!hasResults && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>
                    Nothing corresponding to your search. Choose an object first
                    or browse the list of actions/conditions.
                  </Trans>
                </EmptyMessage>
              )}
            </ScrollView>
          </div>
        )}
      </I18n>
    );
  }
}
