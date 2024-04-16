import * as React from 'react';
// @ts-expect-error - TS6142 - Module './FiltersChooser' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Search/FiltersChooser.tsx', but '--jsx' is not set.
import { ChosenCategory } from './FiltersChooser';
import {
  ExtensionShortHeader,
  BehaviorShortHeader,
} from '../../Utils/GDevelopServices/Extension';
// @ts-expect-error - TS6142 - Module '../../AssetStore/BehaviorStore/BehaviorStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/BehaviorStore/BehaviorStoreContext.tsx', but '--jsx' is not set.
import { SearchableBehaviorMetadata } from '../../AssetStore/BehaviorStore/BehaviorStoreContext';
// @ts-expect-error - TS6142 - Module '../../Utils/GDevelopServices/Shop' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/Shop.tsx', but '--jsx' is not set.
import { PrivateGameTemplateListingData } from '../../Utils/GDevelopServices/Shop';
import { ExampleShortHeader } from '../../Utils/GDevelopServices/Example';
import shuffle from 'lodash/shuffle';
import Fuse from 'fuse.js';

type SearchableItem = ExtensionShortHeader | ExampleShortHeader | BehaviorShortHeader | SearchableBehaviorMetadata | PrivateGameTemplateListingData;

export type SearchMatch = {
  key: string,
  indices: number[][],
  value: string
};
export type SearchResult<T> = {
  item: T,
  matches: SearchMatch[]
};

type SearchOptions = {
  searchText: string,
  chosenItemCategory?: string,
  chosenCategory: ChosenCategory | null | undefined,
  chosenFilters: Set<string>,
  excludedTiers: Set<string>,
  defaultFirstSearchItemIds: Array<string>,
  shuffleResults?: boolean
};

export const sharedFuseConfiguration = {
  minMatchCharLength: 1,
  threshold: 0.35,
  includeMatches: true,
  ignoreLocation: true,
  useExtendedSearch: true,
  findAllMatches: true,
} as const;

/**
 * This helper allows creating the search query for a search within a simple array of strings.
 */
export const getFuseSearchQueryForSimpleArray = (searchText: string) => {
  const tokenisedSearchQuery = searchText.trim().split(' ');
  return `'${tokenisedSearchQuery.join(" '")}`;
};

/**
 * This helper allows creating the search query for searching within an array of
 * objects with multiple keys.
 * If we don't use this, the search will only be done on one of the keys.
 * See https://github.com/krisk/Fuse/issues/235#issuecomment-850269634
 */
export const getFuseSearchQueryForMultipleKeys = (
  searchText: string,
  keys: Array<string>
) => {
  const tokenisedSearchQuery = searchText.trim().split(' ');
  const searchQuery: {
    $or: Fuse.Expression[]
  }[] = tokenisedSearchQuery.map((searchToken: string) => {
    const orFields: Fuse.Expression[] = keys.map(key => ({
      [key]: searchToken,
    }));

    return {
      $or: orFields,
    };
  });

  return {
    $or: searchQuery,
  };
};

const tuneMatchIndices = (match: SearchMatch, searchText: string) => {
  const lowerCaseSearchText = searchText.toLowerCase();
  return match.indices
    .map(index => {
      const lowerCaseMatchedText = match.value
        .slice(index[0], index[1] + 1)
        .toLowerCase();
      // if exact match, return indices untouched
      if (lowerCaseMatchedText === lowerCaseSearchText) return index;
      const indexOfSearchTextInMatchedText = lowerCaseMatchedText.indexOf(
        lowerCaseSearchText
      );

      // if searched text is not in match returned by the fuzzy search
      // ("too" could be matched when searching for "ot"),
      // return nothing
      if (indexOfSearchTextInMatchedText === -1) return undefined;

      // when searched text is included in matched text, changes indices
      // to highlight only the part that matches exactly
      return [
        index[0] + indexOfSearchTextInMatchedText,
        index[0] + indexOfSearchTextInMatchedText + searchText.length - 1,
      ];
    })
    .filter(Boolean);
};

export const tuneMatches = <T>(result: SearchResult<T>, searchText: string) => result.matches.map<SearchMatch>(match => ({
  key: match.key,
  value: match.value,
  indices: tuneMatchIndices(match, searchText),
}));

/**
 * Filter a list of items according to the chosen category
 * and the chosen filters.
 */
export const filterSearchResults = <SearchItem extends SearchableItem>(
  searchResults: Array<SearchResult<SearchItem>> | null | undefined,
  chosenItemCategory: string | null | undefined,
  chosenCategory: ChosenCategory | null | undefined,
  chosenFilters: Set<string>,
  excludedTiers: Set<string>,
): Array<SearchResult<SearchItem>> | null | undefined => {
  if (!searchResults) return null;

  const startTime = performance.now();
  const filteredSearchResults = searchResults
    .filter(({ item }) => {
      if (!chosenItemCategory) return true; // No category chosen, return all items.
// @ts-expect-error - TS2339 - Property 'category' does not exist on type 'SearchItem'.
      if (!item.category) return false; // Item has no category, it cannot be in the chosen category.
// @ts-expect-error - TS2339 - Property 'category' does not exist on type 'SearchItem'.
      return item.category === chosenItemCategory;
    })
    .filter(({ item }) => {
      if (!chosenCategory) return true;

      const hasChosenCategoryTag =
        // If the chosen category is a container of tags, not a real tag, then
        // skip checking if the item has it.
        chosenCategory.node.isTagContainerOnly ||
// @ts-expect-error - TS2339 - Property 'tags' does not exist on type 'SearchItem'. | TS2339 - Property 'tags' does not exist on type 'SearchItem'. | TS7006 - Parameter 'tag' implicitly has an 'any' type.
        (item.tags && item.tags.some(tag => tag === chosenCategory.node.name));
      if (!hasChosenCategoryTag) return false; // Item is not in the selected category
      for (const parentNode of chosenCategory.parentNodes) {
        if (parentNode.isTagContainerOnly) {
          // The parent is a container of tags, not a real tag. No need
          // to check if the item has it.
          return true;
        }

        const hasParentCategoryTag =
// @ts-expect-error - TS2339 - Property 'tags' does not exist on type 'SearchItem'. | TS2339 - Property 'tags' does not exist on type 'SearchItem'. | TS7006 - Parameter 'tag' implicitly has an 'any' type.
          item.tags && item.tags.some(tag => tag === parentNode.name);
        if (!hasParentCategoryTag) return false; // Item is not in the parent(s) of the selected category
      }

      return true;
    })
    .filter(({ item }) => {
// @ts-expect-error - TS2339 - Property 'tier' does not exist on type 'SearchItem'. | TS2339 - Property 'tier' does not exist on type 'SearchItem'.
      const passTier = !item.tier || !excludedTiers.has(item.tier);
      // When checking the chosen filters, we ignore the case.
      // Particularly useful when multiple items are being searched but are not
      // in the same repository, so the tags/categories are not always the same case.
      const lowerCaseChosenFilters = new Set(
        [...chosenFilters].map(filter => filter.toLowerCase())
      );
      const passChosenFilters =
        lowerCaseChosenFilters.size === 0 ||
// @ts-expect-error - TS2339 - Property 'tags' does not exist on type 'SearchItem'.
        (item.tags &&
// @ts-expect-error - TS2339 - Property 'tags' does not exist on type 'SearchItem'. | TS7006 - Parameter 'tag' implicitly has an 'any' type.
          item.tags.some(tag =>
            lowerCaseChosenFilters.has(tag.toLowerCase())
          )) ||
// @ts-expect-error - TS2339 - Property 'categories' does not exist on type 'SearchItem'.
        (item.categories &&
// @ts-expect-error - TS2339 - Property 'categories' does not exist on type 'SearchItem'. | TS7006 - Parameter 'category' implicitly has an 'any' type.
          item.categories.some(category =>
            lowerCaseChosenFilters.has(category.toLowerCase())
          ));

      return passTier && passChosenFilters;
    });

  const totalTime = performance.now() - startTime;
  console.info(
    `Filtered items by category/filters/tier in ${totalTime.toFixed(3)}ms.`
  );
  return filteredSearchResults;
};

/**
 * Allow to efficiently search and filters items.
 *
 * This instantiates a search API, indexes the specified items,
 * then returns the results of the search (according to the
 * search text and the chosen category/filters).
 */
export const useSearchStructuredItem = <SearchItem extends SearchableItem>(
  searchItemsById: {
    [key: string]: SearchItem
  } | null | undefined,
  {
    searchText,
    chosenItemCategory,
    chosenCategory,
    chosenFilters,
    excludedTiers,
    defaultFirstSearchItemIds,
    shuffleResults = true,
  }: SearchOptions,
): Array<{
  item: SearchItem,
  matches: SearchMatch[]
}> | null | undefined => {
  const searchApiRef = React.useRef<any | null | undefined>(null);
  const [searchResults, setSearchResults] = React.useState<Array<{
    item: SearchItem,
    matches: SearchMatch[]
  }> | null | undefined>(null);
  // Keep in memory a list of all the items, shuffled for
  // easing random discovery of items when no search is done.
  const orderedSearchResults: Array<SearchResult<SearchItem>> | null = React.useMemo(
    () => {
      if (!searchItemsById || !Object.keys(searchItemsById).length) return null;

      const alreadyOrderedIds = new Set<string>(defaultFirstSearchItemIds);
      const nonOrderedIds = Object.keys(searchItemsById).filter(
        id => !alreadyOrderedIds.has(id)
      );

      // Return the ordered results first, and shuffle the rest.
      return [
        ...defaultFirstSearchItemIds,
        ...(shuffleResults ? shuffle(nonOrderedIds) : nonOrderedIds),
      ].map(id => ({
        item: searchItemsById[id],
        matches: [],
      }));
    },
    [searchItemsById, defaultFirstSearchItemIds, shuffleResults]
  );

  // Index items that have been loaded.
  React.useEffect(
    () => {
      if (!searchItemsById) {
        // Nothing to index - yet.
        return;
      }

      const startTime = performance.now();
      if (searchApiRef.current) {
        searchApiRef.current = null;
      }

      try {
        const newSearchApi = new Fuse(Object.values(searchItemsById), {
          keys: [
            { name: 'name', weight: 2 },
            { name: 'fullName', weight: 5 },
            { name: 'shortDescription', weight: 1 },
            { name: 'tags', weight: 4 },
          ],
          minMatchCharLength: 2,
          threshold: 0.35,
          includeMatches: true,
          ignoreLocation: true,
          useExtendedSearch: true,
          findAllMatches: true,
        });

        const totalTime = performance.now() - startTime;
        console.info(
          `Indexed ${
            Object.keys(searchItemsById).length
          } items in ${totalTime.toFixed(3)}ms.`
        );
        searchApiRef.current = newSearchApi;
      } catch (error: any) {
        console.error('Error while indexing items: ', error);
      }
    },
    [searchItemsById]
  );

  // Update the search results according to the items, search term
  // chosen category and chosen filters.
  const searchApi = searchApiRef.current;
  React.useEffect(
    () => {
      let discardSearch = false;
      if (!searchText) {
        setSearchResults(
          filterSearchResults(
            orderedSearchResults,
            chosenItemCategory,
            chosenCategory,
            chosenFilters,
            excludedTiers
          )
        );
      } else {
        if (!searchItemsById || !searchApi) {
          console.info(
            'Search for items skipped because items are not ready - will be retried when ready'
          );
          return;
        }

        const startTime = performance.now();
        const results = searchApi.search(
          getFuseSearchQueryForMultipleKeys(searchText, [
            'name',
            'fullName',
            'shortDescription',
            'tags',
          ])
        );
        const totalTime = performance.now() - startTime;
        console.info(
          `Found ${results.length} items in ${totalTime.toFixed(3)}ms.`
        );
        if (discardSearch) {
          console.info(
            'Discarding search results as a new search was launched.'
          );
          return;
        }
        setSearchResults(
          filterSearchResults(
// @ts-expect-error - TS7006 - Parameter 'result' implicitly has an 'any' type.
            results.map(result => ({
              item: result.item,
              matches: tuneMatches(result, searchText),
            })),
            chosenItemCategory,
            chosenCategory,
            chosenFilters,
            excludedTiers
          )
        );
      }

      return () => {
        // Effect is being destroyed - meaning that a new search was launched.
        // Cancel this one.
        discardSearch = true;
      };
    },
    [
      orderedSearchResults,
      searchItemsById,
      searchText,
      chosenItemCategory,
      chosenCategory,
      chosenFilters,
      searchApi,
      excludedTiers,
    ]
  );

  return searchResults;
};
