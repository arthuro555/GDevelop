import { Trans } from '@lingui/macro';

import { t } from '@lingui/macro';
import * as React from 'react';
import Fuse from 'fuse.js';

import { List, ListItemRefType } from '../../../UI/List';

import SearchBar, { SearchBarInterface } from '../../../UI/SearchBar';
import { EnumeratedInstructionOrExpressionMetadata } from '../../../InstructionOrExpression/EnumeratedInstructionOrExpressionMetadata';
import {
  TreeNode,
  findInTree,
} from '../../../InstructionOrExpression/CreateTree';

import { renderInstructionOrExpressionListItem } from '../SelectorListItems/SelectorInstructionOrExpressionListItem';

import { renderInstructionOrExpressionTree } from '../SelectorListItems/SelectorInstructionsTreeListItem';

import EmptyMessage from '../../../UI/EmptyMessage';

import ScrollView, { ScrollViewInterface } from '../../../UI/ScrollView';

import { Line } from '../../../UI/Grid';

import RaisedButton from '../../../UI/RaisedButton';
import {
  getInstructionListItemValue,
  getInstructionOrExpressionIdentifier,
} from '../SelectorListItems/Keys';

import { ResponsiveLineStackLayout } from '../../../UI/Layout';
import {
  tuneMatches,
  SearchResult,
  sharedFuseConfiguration,
  getFuseSearchQueryForMultipleKeys,
} from '../../../UI/Search/UseSearchStructuredItem';

import Add from '../../../UI/CustomSvgIcons/Add';

const getGroupIconSrc = (key: string) => {
  return gd.JsPlatform.get()
    .getInstructionOrExpressionGroupMetadata(key)
    .getIcon();
};

type Props<T> = {
  focusOnMount?: boolean;
  instructionsInfo: Array<T>;
  instructionsInfoTree: TreeNode<T>;
  selectedType: string;
  onChoose: (type: string, arg2: T) => void;
  iconSize: number;
  useSubheaders?: boolean;
  searchPlaceholderObjectName?: string | null | undefined;
  searchPlaceholderIsCondition?: boolean | null | undefined;
  helpPagePath?: string | null | undefined;
  style?: any;
  onClickMore?: () => void;
  id?: string | null | undefined;
};

const InstructionOrExpressionSelector = <
  T extends EnumeratedInstructionOrExpressionMetadata,
>({
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
}: Props<T>) => {
  const searchBarRef = React.useRef<SearchBarInterface | null | undefined>(
    null
  );
  const scrollViewRef = React.useRef<ScrollViewInterface | null | undefined>(
    null
  );
  const selectedItemRef = React.useRef<ListItemRefType | null | undefined>(
    null
  );
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
  const initialInstructionTypePathRef = React.useRef<
    string[] | null | undefined
  >(findInTree(instructionsInfoTree, selectedType));

  const displayedInstructionsList: Array<SearchResult<T>> =
    !!searchText && searchApi
      ? searchApi
          .search(
            getFuseSearchQueryForMultipleKeys(searchText, [
              'displayedName',
              'fullGroupName',
            ])
          )
          .map((result) => ({
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
      {/* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ScrollView autoHideScrollbar ref={scrollViewRef}>
        {hasResults && (
          <List>
            {searchText ? (
              displayedInstructionsList.map(
                ({
                  item: enumeratedInstructionOrExpressionMetadata,
                  matches,
                }) =>
                  renderInstructionOrExpressionListItem({
                    instructionOrExpressionMetadata:
                      enumeratedInstructionOrExpressionMetadata,
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
                  <ResponsiveLineStackLayout justifyContent="center">
                    <RaisedButton
                      primary
                      icon={<Add />}
                      onClick={onClickMore}
                      label={<Trans>Add a new behavior to the object</Trans>}
                    />
                  </ResponsiveLineStackLayout>
                )}
              </>
            )}
          </List>
        )}
        {!hasResults && (
          <Line>
            <EmptyMessage>
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
