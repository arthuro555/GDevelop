import * as React from 'react';

const styles = {
  row: {
    display: 'flex',
  },
  cell: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 4,
    paddingRight: 4,
  },
} as const;

type TreeTableRowProps = {
  id?: string,
  children: React.ReactNode,
  /* Allow to specify a different alignment than the default (centered). */
  alignItems?: 'flex-start' | null | undefined
};

export const TreeTableRow = (props: TreeTableRowProps) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <div
      id={props.id}
      style={{
        ...styles.row,
// @ts-expect-error - TS2322 - Type '"flex-start" | null | undefined' is not assignable to type 'AlignItems | undefined'.
        alignItems: props.alignItems,
      }}
    >
      {props.children}
    </div>
  );
};

type TreeTableCellProps = {
  style?: any,
  expand?: boolean,
  children?: React.ReactNode
};

export const TreeTableCell = (props: TreeTableCellProps) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <div
    style={{
      ...styles.cell,
      flex: props.expand ? 1 : undefined,
      ...props.style,
    }}
  >
    {props.children}
  </div>
);
