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
  searchItems: Array<SearchItem> | null | undefined,
  renderSearchItem: (item: SearchItem, size: number) => React.ReactElement,
  spacing: number,
  error: Error | null | undefined,
  onRetry: () => void,
  baseSize: number,
  // If true, the grid will take the whole height of the container without scroll,
  // so make sure to limit the number of items to a reasonable number for performance.
  noScroll?: boolean,
  noResultPlaceholder?: React.ReactNode
};

const styles = {
  container: { flex: 1 },
  grid: { overflowX: 'hidden' },
} as const;

export type BoxSearchResultsInterface = {
  getScrollPosition: () => number,
  scrollToPosition: (y: number) => void
};

export const BoxSearchResults = React.forwardRef<
// $FlowFixMe The generic type can't pass through.
Props<SearchItem>, BoxSearchResultsInterface>((
  {
    searchItems,
    renderSearchItem,
    spacing,
    error,
    onRetry,
    baseSize,
    noResultPlaceholder,
    noScroll,
  }: Props<SearchItem>,
  ref
) => {
  const grid = React.useRef<Grid | null | undefined>(null);
// @ts-expect-error - TS2740 - Type '{ getScrollPosition: () => any; scrollToPosition: (y: number) => void; }' is missing the following properties from type 'Props<SearchItem>': searchItems, renderSearchItem, spacing, error, and 2 more.
  React.useImperativeHandle(ref, () => ({
    /**
     * Return the scroll position.
     */
    getScrollPosition: () => {
      const scrollViewElement = grid.current;
      if (!scrollViewElement) return 0;

      // TODO Find a clean way to get the scroll position.
      // Using the internal state of a component is hacky.
      // Grid probably doesn't expose the scroll position
      // because it became irrelevant when the dimensions change.
      // Though, it's easier to use it and the chance that the Grid is
      // resized is low.
      return scrollViewElement.state.scrollTop;
    },
    scrollToPosition: (y: number) => {
      const scrollViewElement = grid.current;
      if (!scrollViewElement) return;

      scrollViewElement.scrollToPosition({ scrollLeft: 0, scrollTop: y });
    },
  }));

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
      noResultPlaceholder || (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            No results returned for your search. Try something else, browse
            the categories or create your object from scratch!
          </Trans>
        </EmptyMessage>
      )
    );
  }

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ErrorBoundary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      componentTitle={<Trans>Search results</Trans>}
      scope="box-search-result"
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div style={styles.container}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <AutoSizer>
{ /* @ts-expect-error - TS7031 - Binding element 'width' implicitly has an 'any' type. | TS7031 - Binding element 'height' implicitly has an 'any' type. */}
          {({ width, height }) => {
            const columnCount = Math.max(
              Math.floor((width - 5) / baseSize),
              1
            );
            const columnWidth = Math.max(Math.floor(width / columnCount), 30);
            const rowCount = Math.max(
              1,
              Math.ceil(searchItems.length / columnCount)
            );
            const rowHeight = columnWidth; // Square items.
            const gridHeight = noScroll ? rowHeight * rowCount : height;
            const gridWidth = width;

// @ts-expect-error - TS7031 - Binding element 'columnIndex' implicitly has an 'any' type. | TS7031 - Binding element 'key' implicitly has an 'any' type. | TS7031 - Binding element 'rowIndex' implicitly has an 'any' type. | TS7031 - Binding element 'style' implicitly has an 'any' type.
            function cellRenderer({ columnIndex, key, rowIndex, style }) {
              const indexInList = rowIndex * columnCount + columnIndex;
              const searchItem =
// @ts-expect-error - TS2533 - Object is possibly 'null' or 'undefined'.
                indexInList < searchItems.length
// @ts-expect-error - TS2533 - Object is possibly 'null' or 'undefined'.
                  ? searchItems[indexInList]
                  : null;

              return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <div
                  key={key}
                  style={{
                    ...style,
                    left: style.left + spacing / 2,
                    top: style.top + spacing / 2,
                    width: style.width - spacing,
                    height: style.height - spacing,
                  }}
                >
                  {searchItem
                    ? renderSearchItem(searchItem, columnWidth - spacing)
                    : null}
                </div>
              );
            }

            return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Grid
                ref={grid}
                width={gridWidth}
                height={gridHeight}
                columnCount={columnCount}
                columnWidth={columnWidth}
                rowHeight={rowHeight}
                rowCount={rowCount}
                cellRenderer={cellRenderer}
                style={styles.grid}
              />
            );
          }}
        </AutoSizer>
      </div>
    </ErrorBoundary>
  );
});
