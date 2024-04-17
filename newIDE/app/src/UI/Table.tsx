import * as React from 'react';
import MUITable from '@material-ui/core/Table';
import MUITableBody from '@material-ui/core/TableBody';
import MUITableCell from '@material-ui/core/TableCell';
import MUITableHead from '@material-ui/core/TableHead';
import MUITableRow from '@material-ui/core/TableRow';

type TableCellCommonProps = {
  children?: React.ReactNode; // Content for the cell,
  style?: {
    height?: number;
    width?: number | string;
    paddingLeft?: number;
    paddingRight?: number;
    textAlign?: string;
    wordBreak?: 'break-word';
  };
};

type TableProps = {
  children: React.ReactNode; // Should be TableHeader, TableBody or TableFooter
};

/**
 * A Table based on Material-UI Table.
 * See https://material-ui.com/components/tables/
 */
export class Table extends React.Component<TableProps, Record<any, any>> {
  render() {
    return <MUITable size="small" {...this.props} />;
  }
}

type TableBodyProps = {
  children?: React.ReactNode; // Should be TableRow
};

/**
 * A TableBody based on Material-UI TableBody.
 */
export class TableBody extends React.Component<
  TableBodyProps,
  Record<any, any>
> {
  render() {
    return <MUITableBody {...this.props} />;
  }
}

type TableHeaderProps = {
  children: React.ReactNode; // Should be a TableRow
};

/**
 * A TableHeader based on Material-UI TableHead.
 */
export class TableHeader extends React.Component<
  TableHeaderProps,
  Record<any, any>
> {
  render() {
    return <MUITableHead {...this.props} />;
  }
}

type TableHeaderColumnProps = TableCellCommonProps & {
  padding?: 'none';
};

/**
 * A TableHeaderColumn based on Material-UI TableCell.
 */
export class TableHeaderColumn extends React.Component<
  TableHeaderColumnProps,
  Record<any, any>
> {
  render() {
    // @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2322 - Type '{ children?: ReactNode; style?: { height?: number | undefined; width?: string | number | undefined; paddingLeft?: number | undefined; paddingRight?: number | undefined; textAlign?: string | undefined; wordBreak?: "break-word" | undefined; } | undefined; padding?: "none" | undefined; }' is not assignable to type 'TableCellProps'.
    return <MUITableCell {...this.props} />;
  }
}

type TableRowProps = {
  children: React.ReactNode;
  style?: {
    backgroundColor: string;
  };
  onPointerEnter?: () => void;
  onPointerLeave?: () => void;
  onClick?: () => void;
};

/**
 * A TableRow based on Material-UI TableRow.
 */
export class TableRow extends React.Component<TableRowProps, Record<any, any>> {
  render() {
    return <MUITableRow {...this.props} />;
  }
}

type TableRowColumnProps = TableCellCommonProps & {
  padding?: 'none';
};

/**
 * A TableRowColumn based on Material-UI TableRowColumn.
 */
export class TableRowColumn extends React.Component<
  TableRowColumnProps,
  Record<any, any>
> {
  render() {
    // @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2322 - Type '{ children?: ReactNode; style?: { height?: number | undefined; width?: string | number | undefined; paddingLeft?: number | undefined; paddingRight?: number | undefined; textAlign?: string | undefined; wordBreak?: "break-word" | undefined; } | undefined; padding?: "none" | undefined; }' is not assignable to type 'TableCellProps'.
    return <MUITableCell {...this.props} />;
  }
}
