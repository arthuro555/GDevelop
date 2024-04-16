import * as React from 'react';

// @ts-expect-error - TS6142 - Module '../../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../../../UI/ImageTileGrid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ImageTileGrid.tsx', but '--jsx' is not set.
import ImageTileGrid from '../../../../UI/ImageTileGrid';
import { WindowSizeType } from '../../../../UI/Responsive/ResponsiveWindowMeasurer';
import {
  itemsWithJustImage,
  itemsWithOverlay,
  itemsWithTitleAndDescription,
} from './data';

export default {
  title: 'UI Building Blocks/ImageTile/ImageTileGrid',
  component: ImageTileGrid,
  decorators: [paperDecorator],
};

const getColumnsFromWindowSize = (windowSize: WindowSizeType) => {
  switch (windowSize) {
    case 'small':
      return 1;
    case 'medium':
      return 3;
    case 'large':
    default:
      return 5;
  }
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ImageTileGrid
    items={itemsWithJustImage}
    getColumnsFromWindowSize={getColumnsFromWindowSize}
  />
);

export const WithTitleAndDescription = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ImageTileGrid
    items={itemsWithTitleAndDescription}
    getColumnsFromWindowSize={getColumnsFromWindowSize}
  />
);

export const WithOverlay = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ImageTileGrid
    items={itemsWithOverlay}
    getColumnsFromWindowSize={getColumnsFromWindowSize}
  />
);
