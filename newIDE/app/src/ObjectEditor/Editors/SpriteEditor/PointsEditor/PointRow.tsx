import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../../../UI/Table' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Table.tsx', but '--jsx' is not set.
import { TableRow, TableRowColumn } from '../../../../UI/Table';
// @ts-expect-error - TS6142 - Module '../../../../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../../../../UI/IconButton';
// @ts-expect-error - TS6142 - Module '../../../../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../../../../UI/SemiControlledTextField';
import { roundTo } from '../../../../Utils/Mathematics';
// @ts-expect-error - TS6142 - Module '../../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column } from '../../../../UI/Grid';
import GDevelopThemeContext from '../../../../UI/Theme/GDevelopThemeContext';
import styles from './styles';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../../UI/CustomSvgIcons/Trash'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Trash.js' implicitly has an 'any' type.
import Trash from '../../../../UI/CustomSvgIcons/Trash';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../../UI/CustomSvgIcons/Edit'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Edit.js' implicitly has an 'any' type.
import Edit from '../../../../UI/CustomSvgIcons/Edit';

const POINT_COORDINATE_PRECISION = 4;

type Props = {
  pointName: string,
  nameError?: boolean,
  onChangePointName?: (newName: string) => void,
  onRemove?: (ev?: any) => void | null | undefined,
  onEdit?: (ev?: any) => void | null | undefined,
  onClick: (pointName: string) => void,
  onPointerEnter: (pointName?: string | null | undefined) => void,
  onPointerLeave: (pointName?: string | null | undefined) => void,
  selected: boolean,
  pointX: number,
  pointY: number,
  onChangePointX: (value: number) => void,
  onChangePointY: (value: number) => void,
  isAutomatic?: boolean
};

const PointRow = ({
  pointX,
  pointY,
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
      onClick={() => props.onClick(props.pointName)}
      onPointerEnter={() => props.onPointerEnter(props.pointName)}
      onPointerLeave={props.onPointerLeave}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <TableRowColumn style={styles.nameColumn}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SemiControlledTextField
          margin="none"
          inputStyle={
            props.selected
              ? { color: gdevelopTheme.listItem.selectedTextColor }
              : undefined
          }
          value={props.pointName}
          id={props.pointName}
          fullWidth
          errorText={props.nameError ? 'This name is already taken' : undefined}
          disabled={!props.onChangePointName}
          commitOnBlur
          onChange={props.onChangePointName || (newName: any => {})}
        />
      </TableRowColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <TableRowColumn style={styles.coordinateColumn} padding="none">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledTextField
            margin="none"
            inputStyle={
              props.selected
                ? { color: gdevelopTheme.listItem.selectedTextColor }
                : undefined
            }
            value={roundTo(pointX, POINT_COORDINATE_PRECISION).toString()}
            type="number"
            step={0.5}
            id="point-x"
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={value => {
              const valueAsNumber = parseFloat(value);
              if (!isNaN(valueAsNumber)) props.onChangePointX(valueAsNumber);
            }}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
            onBlur={event => {
              props.onChangePointX(parseFloat(event.currentTarget.value) || 0);
            }}
            disabled={props.isAutomatic}
          />
        </Column>
      </TableRowColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <TableRowColumn style={styles.coordinateColumn} padding="none">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledTextField
            margin="none"
            inputStyle={
              props.selected
                ? { color: gdevelopTheme.listItem.selectedTextColor }
                : undefined
            }
            value={roundTo(pointY, POINT_COORDINATE_PRECISION).toString()}
            type="number"
            step={0.5}
            id="point-y"
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={value => {
              const valueAsNumber = parseFloat(value);
              if (!isNaN(valueAsNumber)) props.onChangePointY(valueAsNumber);
            }}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
            onBlur={event => {
              props.onChangePointY(parseFloat(event.currentTarget.value) || 0);
            }}
            disabled={props.isAutomatic}
          />
        </Column>
      </TableRowColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <TableRowColumn style={styles.toolColumn}>
        {!!props.onRemove && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <IconButton size="small" onClick={props.onRemove}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trash />
          </IconButton>
        )}
        {!!props.onEdit && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <IconButton size="small" onClick={props.onEdit}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Edit />
          </IconButton>
        )}
      </TableRowColumn>
    </TableRow>
  );
};

export default PointRow;
