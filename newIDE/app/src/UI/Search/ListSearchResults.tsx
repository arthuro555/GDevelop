// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../PlaceholderLoader';
// @ts-expect-error - TS6142 - Module '../PlaceholderError' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderError.tsx', but '--jsx' is not set.
import PlaceholderError from '../PlaceholderError';
// @ts-expect-error - TS6142 - Module '../ErrorBoundary' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ErrorBoundary.tsx', but '--jsx' is not set.
import ErrorBoundary from '../ErrorBoundary';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'react-virtualized'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/react-virtualized/dist/commonjs/index.js' implicitly has an 'any' type.
import { AutoSizer, Grid } from 'react-virtualized';
// @ts-expect-error - TS6142 - Module '../EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../EmptyMessage';

type Props<SearchItem> = {
  disableAutoTranslate?: boolean,
  searchItems: Array<SearchItem> | null | undefined,
  getSearchItemUniqueId: (item: SearchItem) => string,
  renderSearchItem: (item: SearchItem, onHeightComputed: (arg1: number) => void) => React.ReactElement,
  error: Error | null | undefined,
  onRetry: () => void
};

const styles = {
  container: { flex: 1 },
  grid: {
    overflowX: 'hidden',
  },
} as const;

const ESTIMATED_ROW_HEIGHT = 90;

/** A virtualized list of search results, caching the searched item heights. */
export const ListSearchResults = <SearchItem extends unknown>(
  {
    disableAutoTranslate,
    searchItems,
    getSearchItemUniqueId,
    renderSearchItem,
    error,
    onRetry,
  }: Props<SearchItem>,
) => {
  const grid = React.useRef<Grid | null | undefined>(null);

  // Height of each item is initially unknown. When rendered, the items
  // are reporting their heights and we cache these values.
  const cachedHeightsForWidth = React.useRef(0);
  const cachedHeights = React.useRef({});
  const onItemHeightComputed = React.useCallback(
// @ts-expect-error - TS7006 - Parameter 'searchItem' implicitly has an 'any' type. | TS7006 - Parameter 'height' implicitly has an 'any' type.
    (searchItem, height) => {
      const uniqueId = getSearchItemUniqueId(searchItem);
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'.
      if (cachedHeights.current[uniqueId] === height) return false;

// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'.
      cachedHeights.current[uniqueId] = height;
      return true;
    },
    [getSearchItemUniqueId]
  );
  const getRowHeight = React.useCallback(
// @ts-expect-error - TS7031 - Binding element 'index' implicitly has an 'any' type.
    ({ index }) => {
      if (!searchItems || !searchItems[index]) return ESTIMATED_ROW_HEIGHT;

      const searchItem = searchItems[index];
      return (
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'.
        cachedHeights.current[getSearchItemUniqueId(searchItem)] ||
        ESTIMATED_ROW_HEIGHT
      );
    },
    [searchItems, getSearchItemUniqueId]
  );

  // Render an item, and update the cached height when it's reported
  const renderRow = React.useCallback(
// @ts-expect-error - TS7031 - Binding element 'key' implicitly has an 'any' type. | TS7031 - Binding element 'rowIndex' implicitly has an 'any' type. | TS7031 - Binding element 'style' implicitly has an 'any' type.
    ({ key, rowIndex, style }) => {
      if (!searchItems) return null;

      const searchItem = searchItems[rowIndex];
      if (!searchItem) return null;

      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <div key={key} style={style}>
          {renderSearchItem(searchItem, height => {
            const heightWasUpdated = onItemHeightComputed(searchItem, height);
            if (heightWasUpdated && grid.current) {
              grid.current.recomputeGridSize(0, rowIndex);
            }
          })}
        </div>
      );
    },
    [searchItems, onItemHeightComputed, renderSearchItem]
  );

  if (!searchItems) {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    if (!error) return <PlaceholderLoader />;
    else {
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <PlaceholderError onRetry={onRetry}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            Can't load the results. Verify your internet connection or retry
            later.
          </Trans>
        </PlaceholderError>
      );
    }
  } else if (searchItems.length === 0) {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Trans>
          No results returned for your search. Try something else or typing at
          least 2 characters.
        </Trans>
      </EmptyMessage>
    );
  }

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ErrorBoundary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      componentTitle={<Trans>Search results</Trans>}
      scope="list-search-result"
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div
        style={styles.container}
        className={disableAutoTranslate ? 'notranslate' : ''}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <AutoSizer>
{ /* @ts-expect-error - TS7031 - Binding element 'width' implicitly has an 'any' type. | TS7031 - Binding element 'height' implicitly has an 'any' type. */}
          {({ width, height }) => {
            // Reset the cached heights in case the width changed.
            if (cachedHeightsForWidth.current !== width) {
              cachedHeights.current = {};
              cachedHeightsForWidth.current = width;
            }

            return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Grid
// @ts-expect-error - TS7006 - Parameter 'el' implicitly has an 'any' type.
                ref={el => {
                  if (el) {
                    // Ensure the grid is recomputed for heights once it is rendered.
                    el.recomputeGridSize(0, 0);
                  }
                  grid.current = el;
                }}
                width={width}
                height={height}
                columnCount={1}
                columnWidth={width}
                rowHeight={getRowHeight}
                rowCount={searchItems.length}
                cellRenderer={renderRow}
                style={styles.grid}
              />
            );
          }}
        </AutoSizer>
      </div>
    </ErrorBoundary>
  );
};
