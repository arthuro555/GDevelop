import React from 'react';
// @ts-expect-error - TS6142 - Module '../../../../UI/Table' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Table.tsx', but '--jsx' is not set.
import { TableRow, TableRowColumn } from '../../../../UI/Table';
// @ts-expect-error - TS6142 - Module '../../../../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../../../../UI/IconButton';
// @ts-expect-error - TS6142 - Module '../../../../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../../../../UI/SemiControlledTextField';
import styles from './styles';
import { roundTo } from '../../../../Utils/Mathematics';
import GDevelopThemeContext from '../../../../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../../UI/CustomSvgIcons/Trash'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Trash.js' implicitly has an 'any' type.
import Trash from '../../../../UI/CustomSvgIcons/Trash';

const VERTEX_COORDINATE_PRECISION = 4;

type Props = {
  parentVerticeId: string,
  canRemove: boolean,
  onRemove: () => void,
  onClick: () => void,
  selected?: boolean,
  verticeX: number,
  verticeY: number,
  onChangeVerticeX: (value: number) => void,
  onChangeVerticeY: (value: number) => void,
  onPointerEnter: () => void,
  onPointerLeave: () => void
};

const VerticeRow = ({
  verticeX,
  verticeY,
  parentVerticeId,
  ...props
}: Props) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <TableRow
      style={{
        backgroundColor: props.selected
          ? gdevelopTheme.listItem.selectedBackgroundColor
          : gdevelopTheme.list.itemsBackgroundColor,
      }}
      onPointerEnter={props.onPointerEnter}
      onPointerLeave={props.onPointerLeave}
      onClick={props.onClick}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <TableRowColumn style={styles.coordinateColumn}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SemiControlledTextField
          margin="none"
          inputStyle={
            props.selected
              ? { color: gdevelopTheme.listItem.selectedTextColor }
              : undefined
          }
          value={roundTo(verticeX, VERTEX_COORDINATE_PRECISION).toString()}
          type="number"
          step={0.5}
          id="vertice-x"
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
          onChange={value => {
            const valueAsNumber = parseFloat(value);
            if (!isNaN(valueAsNumber)) props.onChangeVerticeX(valueAsNumber);
          }}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
          onBlur={event => {
            props.onChangeVerticeX(parseFloat(event.currentTarget.value) || 0);
          }}
        />
      </TableRowColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <TableRowColumn style={styles.coordinateColumn}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SemiControlledTextField
          margin="none"
          inputStyle={
            props.selected
              ? { color: gdevelopTheme.listItem.selectedTextColor }
              : undefined
          }
          value={roundTo(verticeY, VERTEX_COORDINATE_PRECISION).toString()}
          type="number"
          step={0.5}
          id="vertice-y"
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
          onChange={value => {
            const valueAsNumber = parseFloat(value);
            if (!isNaN(valueAsNumber)) props.onChangeVerticeY(valueAsNumber);
          }}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
          onBlur={event => {
            props.onChangeVerticeY(parseFloat(event.currentTarget.value) || 0);
          }}
        />
      </TableRowColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <TableRowColumn style={styles.toolColumn}>
        {!!props.onRemove && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <IconButton
            size="small"
            onClick={props.onRemove}
            disabled={!props.canRemove}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trash />
          </IconButton>
        )}
      </TableRowColumn>
    </TableRow>
  );
};

export default VerticeRow;
