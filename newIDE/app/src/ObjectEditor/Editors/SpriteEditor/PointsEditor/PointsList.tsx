import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
// @ts-expect-error - TS6142 - Module '../../../../UI/Table' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Table.tsx', but '--jsx' is not set.
} from '../../../../UI/Table';
import newNameGenerator from '../../../../Utils/NewNameGenerator';
import { mapVector } from '../../../../Utils/MapFor';
import Window from '../../../../Utils/Window';
import useForceUpdate from '../../../../Utils/UseForceUpdate';
// @ts-expect-error - TS6142 - Module '../../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line, Spacer } from '../../../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module './PointRow' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectEditor/Editors/SpriteEditor/PointsEditor/PointRow.tsx', but '--jsx' is not set.
import PointRow from './PointRow';
import styles from './styles';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../../UI/CustomSvgIcons/Add'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Add.js' implicitly has an 'any' type.
import Add from '../../../../UI/CustomSvgIcons/Add';
const gd: libGDevelop = global.gd;

type PointsListBodyProps = {
  pointsContainer: gdSprite,
  onPointsUpdated: () => void,
  onHoverPoint: (pointName?: string | null | undefined) => void,
  onSelectPoint: (pointName: string) => void,
  onRenamedPoint: (oldName: string, newName: string) => void,
  selectedPointName: string | null | undefined,
  spriteSize: [number, number]
};

const PointsListBody = (props: PointsListBodyProps) => {
  const [nameErrors, setNameErrors] = React.useState({});
  const { pointsContainer, onHoverPoint } = props;
  const forceUpdate = useForceUpdate();

  const onPointsUpdated = () => {
    forceUpdate();
    props.onPointsUpdated();
  };

  const updateOriginPointX = newValue: number => {
    pointsContainer.getOrigin().setX(newValue);
    onPointsUpdated();
  };

  const updateOriginPointY = newValue: number => {
    pointsContainer.getOrigin().setY(newValue);
    onPointsUpdated();
  };

  const updateCenterPointX = newValue: number => {
    pointsContainer.getCenter().setX(newValue);
    onPointsUpdated();
  };

  const updateCenterPointY = newValue: number => {
    pointsContainer.getCenter().setY(newValue);
    onPointsUpdated();
  };

  const updatePointX = (point: gdPoint, newValue: number) => {
    point.setX(newValue);
    onPointsUpdated();
  };

  const updatePointY = (point: gdPoint, newValue: number) => {
    point.setY(newValue);
    onPointsUpdated();
  };

  const onPointerLeave = React.useCallback(() => onHoverPoint(null), [
    onHoverPoint,
  ]);

  const nonDefaultPoints = pointsContainer.getAllNonDefaultPoints();
// @ts-expect-error - TS7006 - Parameter 'point' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
  const pointsRows = mapVector(nonDefaultPoints, (point, i) => {
    const pointName = point.getName();

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <PointRow
        key={`point-${point.ptr}`}
        pointX={point.getX()}
        pointY={point.getY()}
// @ts-expect-error - TS7006 - Parameter 'newValue' implicitly has an 'any' type.
        onChangePointX={newValue => updatePointX(point, newValue)}
// @ts-expect-error - TS7006 - Parameter 'newValue' implicitly has an 'any' type.
        onChangePointY={newValue => updatePointY(point, newValue)}
        pointName={pointName}
        selected={pointName === props.selectedPointName}
        nameError={nameErrors[pointName]}
        onChangePointName={(newName: string) => {
          if (pointName === newName) return;
          if (!newName) return;

          let success = true;
          if (pointsContainer.hasPoint(newName)) {
            success = false;
          } else {
            const oldName = point.getName();
            point.setName(newName);
            props.onRenamedPoint(oldName, newName);
            if (props.selectedPointName === pointName) {
              props.onSelectPoint(newName);
            }
            onPointsUpdated();
          }

          setNameErrors(old => ({ ...old, [pointName]: !success }));
        }}
        onPointerEnter={props.onHoverPoint}
        onPointerLeave={onPointerLeave}
        onClick={props.onSelectPoint}
        onRemove={() => {
          const answer = Window.showConfirmDialog(
            "Are you sure you want to remove this point? This can't be undone."
          );
          if (!answer) return;

          pointsContainer.delPoint(pointName);
          onPointsUpdated();
        }}
      />
    );
  });

  const originPoint = pointsContainer.getOrigin();
  const centerPoint = pointsContainer.getCenter();

  const originRow = (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <PointRow
      key={'origin-point-row'}
      pointName="Origin"
      pointX={originPoint.getX()}
      pointY={originPoint.getY()}
      onChangePointX={updateOriginPointX}
      onChangePointY={updateOriginPointY}
      onPointerEnter={props.onHoverPoint}
      onPointerLeave={onPointerLeave}
      onClick={props.onSelectPoint}
      selected={'Origin' === props.selectedPointName}
    />
  );

  const isDefaultCenterPoint = pointsContainer.isDefaultCenterPoint();
  const centerRow = (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <PointRow
      key={'center-point-row'}
      pointName="Center"
      isAutomatic={isDefaultCenterPoint}
      pointX={
        isDefaultCenterPoint ? props.spriteSize[0] / 2 : centerPoint.getX()
      }
      pointY={
        isDefaultCenterPoint ? props.spriteSize[1] / 2 : centerPoint.getY()
      }
      onChangePointX={updateCenterPointX}
      onChangePointY={updateCenterPointY}
      onPointerEnter={props.onHoverPoint}
      onPointerLeave={onPointerLeave}
      onClick={props.onSelectPoint}
      selected={'Center' === props.selectedPointName}
      onEdit={
        pointsContainer.isDefaultCenterPoint()
          ? () => {
              pointsContainer.setDefaultCenterPoint(false);
              onPointsUpdated();
            }
          : null
      }
      onRemove={
        !pointsContainer.isDefaultCenterPoint()
          ? () => {
              pointsContainer.setDefaultCenterPoint(true);
              onPointsUpdated();
            }
          : null
      }
    />
  );

  return <TableBody>{[originRow, centerRow, ...pointsRows]}</TableBody>;
// @ts-expect-error - TS1128 - Declaration or statement expected.
};

type PointsListProps = {
  pointsContainer: gdSprite,
  onPointsUpdated: () => void,
  onHoverPoint: (pointName?: string | null | undefined) => void,
  onSelectPoint: (pointName?: string | null | undefined) => void,
  onRenamedPoint: (oldName: string, newName: string) => void,
  selectedPointName: string | null | undefined,
  spriteSize: [number, number]
};

const PointsList = (props: PointsListProps) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Table>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <TableHeader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TableRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <TableHeaderColumn style={styles.nameColumn}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Point name</Trans>
            </TableHeaderColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <TableHeaderColumn style={styles.coordinateColumn} padding="none">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column>X</Column>
            </TableHeaderColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <TableHeaderColumn style={styles.coordinateColumn} padding="none">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column>Y</Column>
            </TableHeaderColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <TableHeaderColumn style={styles.toolColumn} />
          </TableRow>
        </TableHeader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2786 - 'PointsListBody' cannot be used as a JSX component. */}
        <PointsListBody
          pointsContainer={props.pointsContainer}
          onHoverPoint={props.onHoverPoint}
          onSelectPoint={props.onSelectPoint}
          selectedPointName={props.selectedPointName}
          onPointsUpdated={props.onPointsUpdated}
          onRenamedPoint={props.onRenamedPoint}
          spriteSize={props.spriteSize}
        />
      </Table>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line alignItems="center" justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <RaisedButton
          primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          icon={<Add />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Add a point</Trans>}
          onClick={() => {
            const name = newNameGenerator('Point', name =>
              props.pointsContainer.hasPoint(name)
            );
            const point = new gd.Point(name);
            props.pointsContainer.addPoint(point);
            point.delete();
            props.onSelectPoint(name);
            props.onPointsUpdated();
          }}
        />
      </Line>
    </Column>
  );
};

export default PointsList;
