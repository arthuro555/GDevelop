import * as React from 'react';
// @ts-expect-error - TS6142 - Module './Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, LargeSpacer, Line } from './Grid';
// @ts-expect-error - TS6142 - Module './Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from './Text';
// @ts-expect-error - TS6142 - Module './Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { LineStackLayout } from './Layout';
// @ts-expect-error - TS6142 - Module './FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from './FlatButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module './ImageTileGrid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ImageTileGrid.tsx', but '--jsx' is not set.
import ImageTileGrid, { ImageTileComponent } from './ImageTileGrid';
import {
  useResponsiveWindowSize,
  WindowSizeType,
} from './Responsive/ResponsiveWindowMeasurer';

type ImageTileRowProps = {
  title: React.ReactNode,
  isLoading?: boolean,
  description?: React.ReactNode,
  items: Array<ImageTileComponent>,
  onShowAll?: () => void,
  showAllIcon?: React.ReactNode,
  getLimitFromWindowSize: (windowSize: WindowSizeType, isLandscape: boolean) => number,
  getColumnsFromWindowSize: (windowSize: WindowSizeType, isLandscape: boolean) => number,
  seeAllLabel?: React.ReactNode,
  margin?: 'dense'
};

const ImageTileRow = ({
  title,
  description,
  isLoading,
  items,
  onShowAll,
  showAllIcon,
  getLimitFromWindowSize,
  getColumnsFromWindowSize,
  seeAllLabel,
  margin,
}: ImageTileRowProps) => {
  const { isMobile } = useResponsiveWindowSize();

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <LineStackLayout
        justifyContent="space-between"
        alignItems="center"
        noMargin
        expand
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="section-title">{title}</Text>
        </Column>
        {showAllIcon && onShowAll && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <FlatButton
              onClick={onShowAll}
              label={
                isMobile ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>Browse</Trans> // Short label on mobile.
                ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  seeAllLabel || <Trans>See all</Trans>
                )
              }
              rightIcon={showAllIcon}
            />
          </Column>
        )}
      </LineStackLayout>
      {description && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text noMargin>{description}</Text>
        </Line>
      )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      {margin === 'dense' ? null : <LargeSpacer />}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ImageTileGrid
        items={items}
        isLoading={isLoading}
        getLimitFromWindowSize={getLimitFromWindowSize}
        getColumnsFromWindowSize={getColumnsFromWindowSize}
      />
    </>
  );
};

export default ImageTileRow;
