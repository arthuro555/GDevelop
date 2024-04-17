import { Trans } from '@lingui/macro';

import { I18n } from '@lingui/react';

import { I18n as I18nType } from '@lingui/core';

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

import { List, ListItemRefType, ListItem } from '../../UI/List';

import SearchBar, { SearchBarInterface } from '../../UI/SearchBar';

import ScrollView, { ScrollViewInterface } from '../../UI/ScrollView';

import { Tabs } from '../../UI/Tabs';

import Subheader from '../../UI/Subheader';
import {
  enumerateObjectsAndGroups,
  ObjectWithContext,
  GroupWithContext,
} from '../../ObjectsList/EnumerateObjects';

import RaisedButton from '../../UI/RaisedButton';

import { ResponsiveLineStackLayout } from '../../UI/Layout';

import { renderGroupObjectsListItem } from './SelectorListItems/SelectorGroupObjectsListItem';

import { renderObjectListItem } from './SelectorListItems/SelectorObjectListItem';

import { renderInstructionOrExpressionListItem } from './SelectorListItems/SelectorInstructionOrExpressionListItem';

import { renderInstructionOrExpressionTree } from './SelectorListItems/SelectorInstructionsTreeListItem';

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

import { Column, Line } from '../../UI/Grid';

import Add from '../../UI/CustomSvgIcons/Add';
import getObjectByName from '../../Utils/GetObjectByName';
import {
  enumerateFoldersInContainer,
  getObjectsInFolder,
} from '../../ObjectsList/EnumerateObjectFolderOrObject';

import { renderFolderListItem } from './SelectorListItems/FolderListItem';

import Text from '../../UI/Text';

const DISPLAYED_INSTRUCTIONS_MAX_LENGTH = 20;
export const styles = {
  noObjectsText: { opacity: 0.7 },
  indentedListItem: { paddingLeft: 45 },
} as const;

export type TabName = 'objects' | 'free-instructions';

const moveDeprecatedInstructionsDown = (
  results: Array<SearchResult<EnumeratedInstructionMetadata>>
) => {
  const deprecatedResults = results.filter((result) =>
    result.item.fullGroupName.includes('deprecated')
  );
  const notDeprecatedResults = results.filter(
    (result) => !result.item.fullGroupName.includes('deprecated')
  );
  return [...notDeprecatedResults, ...deprecatedResults];
};

type State = {
  searchText: string;
  searchResults: {
    objects: Array<SearchResult<ObjectWithContext>>;
    groups: Array<SearchResult<GroupWithContext>>;
    instructions: Array<SearchResult<EnumeratedInstructionMetadata>>;
    folders: Array<
      SearchResult<{
        path: string;
        folder: gd.ObjectFolderOrObject;
        global: boolean;
      }>
    >;
  };
};

type Props = {
  project: gd.Project;
  globalObjectsContainer: gd.ObjectsContainer;
  objectsContainer: gd.ObjectsContainer;
  scope: EventsScope;
  currentTab: TabName;
  onChangeTab: (arg1: TabName) => void;
  isCondition: boolean;
  focusOnMount?: boolean;
  chosenInstructionType: string | null | undefined;
  onChooseInstruction: (
    type: string,
    arg2: EnumeratedInstructionMetadata
  ) => void;
  chosenObjectName: string | null | undefined;
  onChooseObject: (objectName: string) => void;
  onSearchStartOrReset?: () => void;
  style?: any;
  onClickMore?: () => void;
  i18n: I18nType;
};

const iconSize = 24;
const getGroupIconSrc = (key: string) => {
  return gd.JsPlatform.get()
    .getInstructionOrExpressionGroupMetadata(key)
    .getIcon();
};

export default class InstructionOrObjectSelector extends React.PureComponent<
  Props,
  State
> {
  state = {
    searchText: '',
    searchResults: { objects: [], groups: [], instructions: [], folders: [] },
  };
  _searchBar = React.createRef<SearchBarInterface>();
  _scrollView = React.createRef<ScrollViewInterface>();
  _selectedItem = React.createRef<ListItemRefType>();

  // Free instructions, to be displayed in a tab next to the objects.
  freeInstructionsInfo: Array<EnumeratedInstructionMetadata> =
    filterEnumeratedInstructionOrExpressionMetadataByScope(
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
    this.freeInstructionsInfo =
      filterEnumeratedInstructionOrExpressionMetadataByScope(
        enumerateFreeInstructions(this.props.isCondition, i18n),
        this.props.scope
      );
    this.freeInstructionsInfoTree = createTree(this.freeInstructionsInfo);
    this.forceUpdate();
  };

  // All the instructions, to be used when searching, so that the search is done
  // across all the instructions (including object and behaviors instructions).
  allInstructionsInfo: Array<EnumeratedInstructionMetadata> =
    filterEnumeratedInstructionOrExpressionMetadataByScope(
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
        (folderWithPath) => ({ ...folderWithPath, global: true })
      ),
      ...enumerateFoldersInContainer(this.props.objectsContainer).map(
        (folderWithPath) => ({ ...folderWithPath, global: false })
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
    // @ts-expect-error - TS2322 - Type 'Fuse<{ global: boolean; path: string; folder: gd.ObjectFolderOrObject; }>' is not assignable to type 'null'.
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
          ? // @ts-expect-error - TS2339 - Property 'search' does not exist on type 'never'. | TS7006 - Parameter 'result' implicitly has an 'any' type.
            this.objectSearchApi.search(extendedSearchText).map((result) => ({
              item: result.item,
              matches: tuneMatches(result, searchText),
            }))
          : [],
        groups: this.groupSearchApi
          ? // @ts-expect-error - TS2339 - Property 'search' does not exist on type 'never'. | TS7006 - Parameter 'result' implicitly has an 'any' type.
            this.groupSearchApi.search(extendedSearchText).map((result) => ({
              item: result.item,
              matches: tuneMatches(result, searchText),
            }))
          : [],
        folders: this.folderSearchApi
          ? // @ts-expect-error - TS2339 - Property 'search' does not exist on type 'never'. | TS7006 - Parameter 'result' implicitly has an 'any' type.
            this.folderSearchApi.search(extendedSearchText).map((result) => ({
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
                .map((result) => ({
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
    let filteredInstructionsList: Array<
      SearchResult<EnumeratedInstructionMetadata>
    > = [];
    // @ts-expect-error - TS7034 - Variable 'filteredFoldersList' implicitly has type 'any[]' in some locations where its type cannot be determined.
    let filteredFoldersList = [];

    if (isSearching) {
      filteredObjectsList = searchResults.objects;
      displayedObjectGroupsList = searchResults.groups;
      filteredInstructionsList = searchResults.instructions;
      filteredFoldersList = searchResults.folders;
    } else {
      filteredObjectsList = allObjectsList.map((object) => ({
        item: object,
        matches: [],
      }));
      displayedObjectGroupsList = allGroupsList.map((object) => ({
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
      <I18n>
        {({ i18n }) => (
          <div
            id="instruction-or-object-selector"
            style={{
              // Important for the component to not take the full height in a dialog,
              // allowing to let the scrollview do its job.
              minHeight: 0,
              ...style,
            }}
          >
            <SearchBar
              id="search-bar"
              value={searchText}
              onChange={(searchText) => {
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
              <Line>
                <Column expand noMargin>
                  <Tabs
                    value={currentTab}
                    onChange={onChangeTab}
                    options={[
                      {
                        label: <Trans>Objects</Trans>,
                        value: 'objects',
                      },
                      {
                        label: isCondition ? (
                          <Trans>Other conditions</Trans>
                        ) : (
                          <Trans>Other actions</Trans>
                        ),
                        value: 'free-instructions',
                      },
                    ]}
                  />
                </Column>
              </Line>
            )}
            <ScrollView ref={this._scrollView} autoHideScrollbar>
              {hasResults && (
                <List>
                  {(isSearching || currentTab === 'objects') && (
                    <React.Fragment>
                      {/* @ts-expect-error - TS7005 - Variable 'filteredObjectsList' implicitly has an 'any[]' type. */}
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
                        <Subheader>
                          <Trans>Object groups</Trans>
                        </Subheader>
                      )}
                      {/* @ts-expect-error - TS7005 - Variable 'displayedObjectGroupsList' implicitly has an 'any[]' type. */}
                      {displayedObjectGroupsList.map(
                        ({ item: groupWithContext, matches }) => {
                          const results: Array<any | React.ReactElement<any>> =
                            [];

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
                              .map((objectName) => {
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
                                <ListItem
                                  key={`${group.getName()}-empty`}
                                  primaryText={
                                    <Text style={styles.noObjectsText} noMargin>
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
                        <Subheader>
                          <Trans>Folders</Trans>
                        </Subheader>
                      )}
                      {/* @ts-expect-error - TS7005 - Variable 'filteredFoldersList' implicitly has an 'any[]' type. */}
                      {filteredFoldersList.map(
                        ({ item: folderWithPath, matches }) => {
                          const results: Array<React.ReactElement<any> | any> =
                            [];

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
                              <ListItem
                                key={`${folderWithPath.path}-empty`}
                                primaryText={
                                  <Text style={styles.noObjectsText} noMargin>
                                    <Trans>No objects in the folder</Trans>
                                  </Text>
                                }
                                style={styles.indentedListItem}
                              />
                            );
                          } else {
                            results.push(
                              ...objectsInFolder.map((object) =>
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
                    <Subheader>
                      {isCondition ? (
                        <Trans>Conditions</Trans>
                      ) : (
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
                        <ResponsiveLineStackLayout justifyContent="center">
                          <RaisedButton
                            primary
                            icon={<Add />}
                            onClick={onClickMore}
                            label={
                              isCondition ? (
                                <Trans>
                                  Search for new conditions in extensions
                                </Trans>
                              ) : (
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
                    <ListItem
                      primaryText={
                        <Trans>And {remainingResultsCount} more results.</Trans>
                      }
                      disabled
                      secondaryText={
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
                  <EmptyMessage>
                    {isOutsideLayout ? (
                      <Trans>
                        There are no objects. Objects will appear if you add
                        some as parameters.
                      </Trans>
                    ) : (
                      <Trans>
                        There is no object in your game or in this scene. Start
                        by adding an new object in the scene editor, using the
                        objects list.
                      </Trans>
                    )}
                  </EmptyMessage>
                )}
              {!hasResults && (
                <EmptyMessage>
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
