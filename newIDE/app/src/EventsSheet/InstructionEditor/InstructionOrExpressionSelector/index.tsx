// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
import * as React from 'react';
import Fuse from 'fuse.js';

// @ts-expect-error - TS6142 - Module '../../../UI/List' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/List.tsx', but '--jsx' is not set.
import { List, ListItemRefType } from '../../../UI/List';
// @ts-expect-error - TS6142 - Module '../../../UI/SearchBar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SearchBar.tsx', but '--jsx' is not set.
import SearchBar, { SearchBarInterface } from '../../../UI/SearchBar';
import { EnumeratedInstructionOrExpressionMetadata } from '../../../InstructionOrExpression/EnumeratedInstructionOrExpressionMetadata';
import {
  TreeNode,
  findInTree,
} from '../../../InstructionOrExpression/CreateTree';
// @ts-expect-error - TS6142 - Module '../SelectorListItems/SelectorInstructionOrExpressionListItem' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/InstructionEditor/SelectorListItems/SelectorInstructionOrExpressionListItem.tsx', but '--jsx' is not set.
import { renderInstructionOrExpressionListItem } from '../SelectorListItems/SelectorInstructionOrExpressionListItem';
// @ts-expect-error - TS6142 - Module '../SelectorListItems/SelectorInstructionsTreeListItem' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/InstructionEditor/SelectorListItems/SelectorInstructionsTreeListItem.tsx', but '--jsx' is not set.
import { renderInstructionOrExpressionTree } from '../SelectorListItems/SelectorInstructionsTreeListItem';
// @ts-expect-error - TS6142 - Module '../../../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../../../UI/EmptyMessage';
// @ts-expect-error - TS6142 - Module '../../../UI/ScrollView' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ScrollView.tsx', but '--jsx' is not set.
import ScrollView, { ScrollViewInterface } from '../../../UI/ScrollView';
// @ts-expect-error - TS6142 - Module '../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../../UI/RaisedButton';
import {
  getInstructionListItemValue,
  getInstructionOrExpressionIdentifier,
} from '../SelectorListItems/Keys';
// @ts-expect-error - TS6142 - Module '../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ResponsiveLineStackLayout } from '../../../UI/Layout';
import {
  tuneMatches,
  SearchResult,
  sharedFuseConfiguration,
  getFuseSearchQueryForMultipleKeys,
} from '../../../UI/Search/UseSearchStructuredItem';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/Add'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Add.js' implicitly has an 'any' type.
import Add from '../../../UI/CustomSvgIcons/Add';
const gd: libGDevelop = global.gd;

const getGroupIconSrc = (key: string) => {
  return gd.JsPlatform.get()
    .getInstructionOrExpressionGroupMetadata(key)
    .getIcon();
};

type Props<T> = {
  focusOnMount?: boolean,
  instructionsInfo: Array<T>,
  instructionsInfoTree: TreeNode<T>,
  selectedType: string,
  onChoose: (type: string, arg2: T) => void,
  iconSize: number,
  useSubheaders?: boolean,
  searchPlaceholderObjectName?: string | null | undefined,
  searchPlaceholderIsCondition?: boolean | null | undefined,
  helpPagePath?: string | null | undefined,
  style?: any,
  onClickMore?: () => void,
  id?: string | null | undefined
};

const InstructionOrExpressionSelector = <T extends EnumeratedInstructionOrExpressionMetadata>(
  {
    focusOnMount,
    instructionsInfo,
    instructionsInfoTree,
    selectedType,
    onChoose,
    iconSize,
    useSubheaders,
    searchPlaceholderObjectName,
    searchPlaceholderIsCondition,
    helpPagePath,
    style,
    onClickMore,
    id,
  }: Props<T>,
) => {
  const searchBarRef = React.useRef<SearchBarInterface | null | undefined>(null);
  const scrollViewRef = React.useRef<ScrollViewInterface | null | undefined>(null);
  const selectedItemRef = React.useRef<ListItemRefType | null | undefined>(null);
  const [searchText, setSearchText] = React.useState<string>('');
  const searchApi = React.useMemo(
    () =>
      new Fuse(instructionsInfo, {
        ...sharedFuseConfiguration,
        keys: [
          { name: 'displayedName', weight: 2 },
          { name: 'fullGroupName', weight: 1 },
        ],
      }),
    [instructionsInfo]
  );
  const initialInstructionTypePathRef = React.useRef<string[] | null | undefined>(findInTree(instructionsInfoTree, selectedType));

  const displayedInstructionsList: Array<SearchResult<T>> =
    !!searchText && searchApi
      ? searchApi
          .search(
            getFuseSearchQueryForMultipleKeys(searchText, [
              'displayedName',
              'fullGroupName',
            ])
          )
          .map(result => ({
            item: result.item,
// @ts-expect-error - TS2345 - Argument of type 'FuseResult<T>' is not assignable to parameter of type 'SearchResult<T>'.
            matches: tuneMatches(result, searchText),
          }))
      : [];
  const hasResults = !searchText || !!displayedInstructionsList.length;

  const onSubmitSearch = () => {
    if (!displayedInstructionsList.length) return;

    onChoose(
      displayedInstructionsList[0].item.type,
      displayedInstructionsList[0].item
    );
  };

  React.useEffect(
    () => {
      if (selectedItemRef.current && scrollViewRef.current) {
        scrollViewRef.current.scrollTo(selectedItemRef.current);
      }
    },
    // When the component is mounted, if an item is already selected
    // (this happens when a user edits an existing instruction), auto scroll
    // to the item in the list.
    []
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <div
      style={{
        // Important for the component to not take the full height in a dialog,
        // allowing to let the scrollview do its job.
        minHeight: 0,
        ...style,
      }}
// @ts-expect-error - TS2322 - Type 'string | null | undefined' is not assignable to type 'string | undefined'.
      id={id}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SearchBar
        value={searchText}
        onChange={setSearchText}
        onRequestSearch={onSubmitSearch}
        placeholder={
          searchPlaceholderObjectName
            ? searchPlaceholderIsCondition
              ? t`Search ${searchPlaceholderObjectName} conditions`
              : t`Search ${searchPlaceholderObjectName} actions`
            : undefined
        }
        helpPagePath={helpPagePath}
        ref={searchBarRef}
        autoFocus={focusOnMount ? 'desktop' : undefined}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ScrollView autoHideScrollbar ref={scrollViewRef}>
        {hasResults && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <List>
            {searchText ? (
              displayedInstructionsList.map(
                ({
                  item: enumeratedInstructionOrExpressionMetadata,
                  matches,
                }) =>
                  renderInstructionOrExpressionListItem({
                    instructionOrExpressionMetadata: enumeratedInstructionOrExpressionMetadata,
                    id: getInstructionOrExpressionIdentifier(
                      enumeratedInstructionOrExpressionMetadata
                    ),
                    iconSize: iconSize,
                    onClick: () =>
                      onChoose(
                        enumeratedInstructionOrExpressionMetadata.type,
                        enumeratedInstructionOrExpressionMetadata
                      ),
                    matches,
                    selectedValue: getInstructionListItemValue(selectedType),
                  })
              )
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <>
                {renderInstructionOrExpressionTree({
                  instructionTreeNode: instructionsInfoTree,
                  iconSize,
                  onChoose,
                  useSubheaders,
                  selectedValue: getInstructionListItemValue(selectedType),
                  initiallyOpenedPath: initialInstructionTypePathRef.current,
                  selectedItemRef: selectedItemRef,
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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      label={<Trans>Add a new behavior to the object</Trans>}
                    />
                  </ResponsiveLineStackLayout>
                )}
              </>
            )}
          </List>
        )}
        {!hasResults && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                Nothing corresponding to your search. Try browsing the list
                instead.
              </Trans>
            </EmptyMessage>
          </Line>
        )}
      </ScrollView>
    </div>
  );
};

export default InstructionOrExpressionSelector;
