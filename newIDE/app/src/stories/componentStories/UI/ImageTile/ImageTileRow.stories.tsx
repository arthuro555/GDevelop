import * as React from 'react';

// @ts-expect-error - TS6142 - Module '../../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../../../UI/ImageTileRow' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ImageTileRow.tsx', but '--jsx' is not set.
import ImageTileRow from '../../../../UI/ImageTileRow';
import { WindowSizeType } from '../../../../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../../UI/CustomSvgIcons/Add'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Add.js' implicitly has an 'any' type.
import Add from '../../../../UI/CustomSvgIcons/Add';
import {
  itemsWithJustImage,
  itemsWithOverlay,
  itemsWithTitleAndDescription,
} from './data';

export default {
  title: 'UI Building Blocks/ImageTile/ImageTileRow',
  component: ImageTileRow,
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
  <ImageTileRow
    items={itemsWithJustImage}
    title="Recommended templates"
    onShowAll={() => {}}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    showAllIcon={<Add fontSize="small" />}
    getColumnsFromWindowSize={getColumnsFromWindowSize}
    getLimitFromWindowSize={getColumnsFromWindowSize}
  />
);

export const Loading = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ImageTileRow
    items={itemsWithJustImage}
    isLoading
    title="Recommended templates"
    onShowAll={() => {}}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    showAllIcon={<Add fontSize="small" />}
    getColumnsFromWindowSize={getColumnsFromWindowSize}
    getLimitFromWindowSize={getColumnsFromWindowSize}
  />
);

export const WithDescription = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ImageTileRow
    items={itemsWithJustImage}
    title="Recommended templates"
    description="This is a description for the templates"
    onShowAll={() => {}}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    showAllIcon={<Add fontSize="small" />}
    getColumnsFromWindowSize={getColumnsFromWindowSize}
    getLimitFromWindowSize={getColumnsFromWindowSize}
  />
);

export const WithTitleAndDescription = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ImageTileRow
    items={itemsWithTitleAndDescription}
    title="Recommended templates"
    onShowAll={() => {}}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    showAllIcon={<Add fontSize="small" />}
    getColumnsFromWindowSize={getColumnsFromWindowSize}
    getLimitFromWindowSize={getColumnsFromWindowSize}
  />
);

export const WithOverlay = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ImageTileRow
    items={itemsWithOverlay}
    title="Recommended templates"
    onShowAll={() => {}}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    showAllIcon={<Add fontSize="small" />}
    getColumnsFromWindowSize={getColumnsFromWindowSize}
    getLimitFromWindowSize={getColumnsFromWindowSize}
  />
);

export const WithNoCroppingOnMobile = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ImageTileRow
    items={itemsWithJustImage}
    title="Recommended templates"
    onShowAll={() => {}}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    showAllIcon={<Add fontSize="small" />}
    getColumnsFromWindowSize={getColumnsFromWindowSize}
    getLimitFromWindowSize={() => 5}
  />
);
