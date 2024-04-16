import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../Grid';
import GDevelopThemeContext from '../Theme/GDevelopThemeContext';

const styles = {
  columnContainer: {
    display: 'flex',
  },
} as const;

type Props<TColumnName> = {
// @ts-expect-error - TS2344 - Type 'TColumnName' does not satisfy the constraint 'string | number | symbol'.
  columnsRenderer: Partial<Record<TColumnName, () => React.ReactElement>>,
  getColumns: () => Array<{
    columnName: TColumnName,
    ratio?: number
  }>
};

const columnsPadding = 4;

export const SelectColumns = ({
  columnsRenderer,
  getColumns,
}: Props<string>) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const columns = getColumns();
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Line noMargin expand>
      {columns.map(({ columnName }, index) => {
        const columnRenderer = columnsRenderer[columnName];
        const columnRatio = columns[index].ratio || 1;
        if (!columnRenderer) return null;
        const isFirst = index === 0;
        const isLast = index === columns.length - 1;
        // Handle padding between columns, depending on the column ratio.
        // This is to avoid having the border jump when switching between columns.
        const paddingLeft = isFirst
          ? 0
          : columnRatio > 1
          ? columnsPadding * (columnRatio + 1)
          : columnsPadding;
        const paddingRight = isLast
          ? 0
          : columnRatio > 1
          ? columnsPadding * (columnRatio + 1)
          : columnsPadding;
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <div
            style={{
              ...styles.columnContainer,
              flex: columnRatio,
              paddingLeft,
              paddingRight,
              borderRight: !isLast
                ? `2px solid ${gdevelopTheme.dialog.separator}`
                : undefined,
            }}
            key={columnName}
          >
            {columnRenderer()}
          </div>
        );
      })}
    </Line>
  );
};
