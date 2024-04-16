import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans, t } from '@lingui/macro';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
// @ts-expect-error - TS6142 - Module '../../../../UI/Table' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Table.tsx', but '--jsx' is not set.
} from '../../../../UI/Table';
import { mapVector } from '../../../../Utils/MapFor';
import styles from './styles';
// @ts-expect-error - TS6142 - Module './VerticeRow' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectEditor/Editors/SpriteEditor/CollisionMasksEditor/VerticeRow.tsx', but '--jsx' is not set.
import VerticeRow from './VerticeRow';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
// @ts-expect-error - TS6142 - Module '../../../../UI/Accordion' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Accordion.tsx', but '--jsx' is not set.
} from '../../../../UI/Accordion';
// @ts-expect-error - TS6142 - Module '../../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../../../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../../../../UI/IconButton';
// @ts-expect-error - TS6142 - Module '../../../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line, Spacer } from '../../../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../../../UI/RaisedButtonWithSplitMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButtonWithSplitMenu.tsx', but '--jsx' is not set.
import RaisedButtonWithSplitMenu from '../../../../UI/RaisedButtonWithSplitMenu';
// @ts-expect-error - TS6142 - Module '../../../../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../../../../UI/AlertMessage';
import GDevelopThemeContext from '../../../../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS6142 - Module '../../../../UI/ScrollView' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ScrollView.tsx', but '--jsx' is not set.
import ScrollView from '../../../../UI/ScrollView';
import { addVertexOnLongestEdge } from './PolygonHelper';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../../UI/CustomSvgIcons/Add'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Add.js' implicitly has an 'any' type.
import Add from '../../../../UI/CustomSvgIcons/Add';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../../UI/CustomSvgIcons/Trash'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Trash.js' implicitly has an 'any' type.
import Trash from '../../../../UI/CustomSvgIcons/Trash';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../../UI/CustomSvgIcons/Warning'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Warning.js' implicitly has an 'any' type.
import Warning from '../../../../UI/CustomSvgIcons/Warning';

// @ts-expect-error - TS7017 - Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature.
const gd = global.gd;

type VerticesTableProps = {
  vertices: gdVectorVector2f,
  hasWarning: boolean,
  onUpdated: () => void,
  onHoverVertice: (ptr?: number | null | undefined) => void,
  onClickVertice: (ptr?: number | null | undefined) => void,
  selectedVerticePtr: number | null | undefined,
  // Sprite size is useful to make sure polygon vertices
  // are not put outside the sprite bounding box, which is not supported:
  spriteWidth: number,
  spriteHeight: number
};

const VerticesTable = (props: VerticesTableProps) => {
  const updateVerticeX = (vertice: gdVector2f, newValue: number) => {
    // Ensure the vertex stays inside the sprite bounding box.
    vertice.set_x(Math.min(props.spriteWidth, Math.max(newValue, 0)));
    props.onUpdated();
  };

  const updateVerticeY = (vertice: gdVector2f, newValue: number) => {
    // Ensure the vertex stays inside the sprite bounding box.
    vertice.set_y(Math.min(props.spriteHeight, Math.max(newValue, 0)));
    props.onUpdated();
  };

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
            <TableHeaderColumn style={styles.coordinateColumn}>
              X
            </TableHeaderColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <TableHeaderColumn style={styles.coordinateColumn}>
              Y
            </TableHeaderColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <TableRowColumn style={styles.toolColumn} />
          </TableRow>
        </TableHeader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <TableBody>
{ /* @ts-expect-error - TS7006 - Parameter 'vertice' implicitly has an 'any' type. | TS7006 - Parameter 'verticeIndex' implicitly has an 'any' type. */}
          {mapVector(props.vertices, (vertice, verticeIndex) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <VerticeRow
              key={vertice.ptr}
              parentVerticeId={props.vertices.ptr.toString()}
              onPointerEnter={() => props.onHoverVertice(vertice.ptr)}
              onPointerLeave={props.onHoverVertice}
              selected={props.selectedVerticePtr === vertice.ptr}
              onClick={() => props.onClickVertice(vertice.ptr)}
              verticeX={vertice.get_x()}
              verticeY={vertice.get_y()}
// @ts-expect-error - TS7006 - Parameter 'newValue' implicitly has an 'any' type.
              onChangeVerticeX={newValue => updateVerticeX(vertice, newValue)}
// @ts-expect-error - TS7006 - Parameter 'newValue' implicitly has an 'any' type.
              onChangeVerticeY={newValue => updateVerticeY(vertice, newValue)}
              onRemove={() => {
                gd.removeFromVectorVector2f(props.vertices, verticeIndex);
                props.onUpdated();
              }}
              canRemove={props.vertices.size() > 3}
            />
          ))}
        </TableBody>
      </Table>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Spacer />
      {props.hasWarning && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <AlertMessage kind="warning">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            The polygon is not convex. Ensure it is, otherwise the collision
            mask won't work.
          </Trans>
        </AlertMessage>
      )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          leftIcon={<Add />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Add a vertex</Trans>}
          onClick={() => {
            addVertexOnLongestEdge(props.vertices);
            props.onUpdated();
          }}
        />
      </Line>
    </Column>
  );
};

type PolygonSectionProps = {
  polygon: gdPolygon2d,
  onUpdated: () => void,
  onRemove: () => void,
  onHoverVertice: (ptr?: number | null | undefined) => void,
  onClickVertice: (ptr?: number | null | undefined) => void,
  selectedVerticePtr: number | null | undefined,
  // Sprite size is useful to make sure polygon vertices
  // are not put outside the sprite bounding box, which is not supported:
  spriteWidth: number,
  spriteHeight: number
};

const PolygonSection = (props: PolygonSectionProps) => {
  const theme = React.useContext(GDevelopThemeContext);
  const warningColor = theme.message.warning;

  const vertices = props.polygon.getVertices();
  const verticesCount = vertices.size();
  const isConvex = props.polygon.isConvex();

  const polygonActions = [
    isConvex ? null : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <IconButton
        key="not-convex"
        size="small"
        tooltip={t`Polygon is not convex!`}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Warning style={{ color: warningColor }} />
      </IconButton>
    ),
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <IconButton
      key="delete-mask"
      size="small"
// @ts-expect-error - TS7006 - Parameter 'ev' implicitly has an 'any' type.
      onClick={ev => {
        ev.stopPropagation();
        props.onRemove();
      }}
      tooltip={t`Delete collision mask`}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Trash />
    </IconButton>,
  ];

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Accordion defaultExpanded>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <AccordionHeader actions={polygonActions}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text displayInlineAsSpan>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          {verticesCount === 3 && <Trans>Triangle</Trans>}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          {verticesCount === 4 && <Trans>Quadrilateral</Trans>}
          {verticesCount >= 5 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>Polygon with {verticesCount} vertices</Trans>
          )}
        </Text>
      </AccordionHeader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <AccordionBody disableGutters>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <VerticesTable
          vertices={vertices}
          hasWarning={!isConvex}
          onHoverVertice={props.onHoverVertice}
          onClickVertice={props.onClickVertice}
          selectedVerticePtr={props.selectedVerticePtr}
          onUpdated={props.onUpdated}
          spriteWidth={props.spriteWidth}
          spriteHeight={props.spriteHeight}
        />
      </AccordionBody>
    </Accordion>
  );
};

type PolygonsListProps = {
  polygons: gdVectorPolygon2d,
  onPolygonsUpdated: () => void,
  onSetFullImageCollisionMask: () => Promise<void>,
  onSetAutomaticallyAdaptCollisionMasks: () => Promise<void>,
  onHoverVertice: (ptr?: number | null | undefined) => void,
  onClickVertice: (ptr?: number | null | undefined) => void,
  selectedVerticePtr: number | null | undefined,
  // Sprite size is useful to make sure polygon vertices
  // are not put outside the sprite bounding box, which is not supported:
  spriteSize: [number, number]
};

const PolygonsList = (props: PolygonsListProps) => {
  const {
    polygons,
    spriteSize,
    onPolygonsUpdated,
    onSetFullImageCollisionMask,
    onSetAutomaticallyAdaptCollisionMasks,
    onHoverVertice,
    onClickVertice,
    selectedVerticePtr,
  } = props;

  const [spriteWidth, spriteHeight] = spriteSize;
  const addCollisionMask = React.useCallback(
    () => {
      const newPolygon = gd.Polygon2d.createRectangle(
        spriteWidth,
        spriteHeight
      );
      newPolygon.move(spriteWidth / 2, spriteHeight / 2);
      polygons.push_back(newPolygon);
      onPolygonsUpdated();
    },
    [spriteHeight, spriteWidth, polygons, onPolygonsUpdated]
  );

  const onRemovePolygon = React.useCallback(
    (index: number) => {
      gd.removeFromVectorPolygon2d(polygons, index);
      if (polygons.size() === 0) {
        onSetFullImageCollisionMask();
      }
      onPolygonsUpdated();
    },
    [polygons, onPolygonsUpdated, onSetFullImageCollisionMask]
  );

  React.useEffect(
    () => {
      if (polygons.size() === 0) {
        addCollisionMask();
      }
    },
    [polygons, addCollisionMask]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column noMargin expand useFullHeight>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ScrollView>
{ /* @ts-expect-error - TS7006 - Parameter 'polygon' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type. */}
          {mapVector(polygons, (polygon, i) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <PolygonSection
              key={`polygon-${i}`}
              polygon={polygon}
              onUpdated={onPolygonsUpdated}
              onRemove={() => onRemovePolygon(i)}
              onHoverVertice={onHoverVertice}
              onClickVertice={onClickVertice}
              selectedVerticePtr={selectedVerticePtr}
              spriteWidth={spriteWidth}
              spriteHeight={spriteHeight}
            />
          ))}
        </ScrollView>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line alignItems="center" justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <RaisedButtonWithSplitMenu
              primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              icon={<Add />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Add collision mask</Trans>}
              onClick={addCollisionMask}
// @ts-expect-error - TS7006 - Parameter 'i18n' implicitly has an 'any' type.
              buildMenuTemplate={i18n => [
                {
                  label: i18n._(t`Reset to automatic collision mask`),
                  click: onSetAutomaticallyAdaptCollisionMasks,
                },
                {
                  label: i18n._(t`Use full image as collision mask`),
                  click: onSetFullImageCollisionMask,
                },
              ]}
            />
          </Line>
        </Column>
      </Column>
    </React.Fragment>
  );
};

export default PolygonsList;
