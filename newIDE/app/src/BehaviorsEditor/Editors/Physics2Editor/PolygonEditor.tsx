import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import {
  Table,
  TableRow,
  TableRowColumn,
  TableBody,
  TableHeader,
  TableHeaderColumn,
// @ts-expect-error - TS6142 - Module '../../../UI/Table' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Table.tsx', but '--jsx' is not set.
} from '../../../UI/Table';
// @ts-expect-error - TS6142 - Module '../../../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../../../UI/SemiControlledTextField';
// @ts-expect-error - TS6142 - Module '../../../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../../../UI/IconButton';
import GDevelopThemeContext from '../../../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/AddCircle'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/AddCircle.js' implicitly has an 'any' type.
import AddCircle from '../../../UI/CustomSvgIcons/AddCircle';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/Trash'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Trash.js' implicitly has an 'any' type.
import Trash from '../../../UI/CustomSvgIcons/Trash';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/Warning'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Warning.js' implicitly has an 'any' type.
import Warning from '../../../UI/CustomSvgIcons/Warning';
import Tooltip from '@material-ui/core/Tooltip';

export type Vertex = {
  x: number,
  y: number
};

type Props = {
  vertices: Array<Vertex>,
  onChangeVertexX: (newValue: number, index: number) => void,
  onChangeVertexY: (newValue: number, index: number) => void,
  onAdd: () => void,
  onRemove: (index: number) => void
};

const PolygonEditor = ({
  vertices,
  onChangeVertexX,
  onChangeVertexY,
  onAdd,
  onRemove,
}: Props) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const isPolygonConvex = (vertices: Array<Vertex>) => {
    // Get edges
    let edges: Array<{
      x: number,
      y: number
    }> = [];
    let v1 = null;
    let v2 = null;
    for (let i = 0; i < vertices.length; i++) {
      v1 = vertices[i];
      if (i + 1 >= vertices.length) v2 = vertices[0];
      else v2 = vertices[i + 1];
      edges.push({ x: v2.x - v1.x, y: v2.y - v1.y });
    }

    // Check convexity
    if (edges.length < 3) return false;

    const zProductIsPositive =
      edges[0].x * edges[0 + 1].y - edges[0].y * edges[0 + 1].x > 0;

    for (let i = 1; i < edges.length - 1; ++i) {
      let zCrossProduct =
        edges[i].x * edges[i + 1].y - edges[i].y * edges[i + 1].x;
      let zCrossProductIsPositive = zCrossProduct > 0;
      if (zCrossProductIsPositive !== zProductIsPositive) return false;
    }

    let lastZCrossProduct =
      edges[edges.length - 1].x * edges[0].y -
      edges[edges.length - 1].y * edges[0].x;
    let lastZCrossProductIsPositive = lastZCrossProduct > 0;
    if (lastZCrossProductIsPositive !== zProductIsPositive) return false;

    // Check for repeated vertices (would crash Box2D during the game)
    for (let i = 0; i < vertices.length - 1; ++i) {
      for (let j = i + 1; j < vertices.length; ++j) {
        if (vertices[i].x === vertices[j].x && vertices[i].y === vertices[j].y)
          return false;
      }
    }

    // Check if all vertices are aligned (would crash Box2D during the game)
    let alignedX = true;
    let alignedY = true;
    for (let i = 0; i < vertices.length - 1; ++i) {
      if (vertices[i].x !== vertices[i + 1].x) alignedX = false;
      if (vertices[i].y !== vertices[i + 1].y) alignedY = false;
    }
    if (alignedX || alignedY) return false;

    return true;
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Table>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <TableHeader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <TableRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TableHeaderColumn />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TableHeaderColumn>X</TableHeaderColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TableHeaderColumn>Y</TableHeaderColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TableRowColumn />
        </TableRow>
      </TableHeader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <TableBody>
        {vertices.map((value, index) => {
          return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <TableRow
              key={`vertexRow${index}`}
              style={{
                backgroundColor: gdevelopTheme.list.itemsBackgroundColor,
              }}
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <TableRowColumn>
                {!isPolygonConvex(vertices) && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Tooltip title={<Trans>The polygon is not convex</Trans>}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Warning />
                  </Tooltip>
                )}
              </TableRowColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <TableRowColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SemiControlledTextField
                  margin="none"
                  fullWidth
                  value={value.x.toString(10)}
// @ts-expect-error - TS7006 - Parameter 'newValue' implicitly has an 'any' type.
                  onChange={newValue =>
                    onChangeVertexX(parseFloat(newValue) || 0, index)
                  }
                  type="number"
                />
              </TableRowColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <TableRowColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SemiControlledTextField
                  margin="none"
                  fullWidth
                  value={value.y.toString(10)}
// @ts-expect-error - TS7006 - Parameter 'newValue' implicitly has an 'any' type.
                  onChange={newValue =>
                    onChangeVertexY(parseFloat(newValue) || 0, index)
                  }
                  type="number"
                />
              </TableRowColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <TableRowColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <IconButton size="small" onClick={() => onRemove(index)}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trash />
                </IconButton>
              </TableRowColumn>
            </TableRow>
          );
        })}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <TableRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TableRowColumn />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TableRowColumn />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TableRowColumn />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TableRowColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <IconButton onClick={onAdd} size="small">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <AddCircle />
            </IconButton>
          </TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default PolygonEditor;
