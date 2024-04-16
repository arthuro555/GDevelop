import * as React from 'react';
// @ts-expect-error - TS6142 - Module './Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Spacer, Line, Column, LargeSpacer } from './Grid';
import { useResponsiveWindowSize } from './Responsive/ResponsiveWindowMeasurer';

type TextFieldWithButtonLayoutProps = {
  renderTextField: () => React.ReactElement,
  renderButton: (
    style: {
      marginTop?: number,
      marginBottom?: number,
      marginLeft?: number,
      marginRight?: number,
      margin?: number,
      flexShrink?: 0
    },
  ) => React.ReactElement,
  margin?: 'none' | 'dense',
  noFloatingLabelText?: boolean
};

const buttonCommonStyles = {
  // Ensure the button is not shrinked, even if the text field
  // (in particular with a long helper text) is large.
  flexShrink: 0,
} as const;

const textFieldWithButtonLayoutStyles = {
  filledTextFieldWithLabelRightButtonMargins: {
    ...buttonCommonStyles,
    marginTop: 15, // Properly align with the text field (only dense "filled" text fields supported)
    marginLeft: 8,
  },
  filledTextFieldWithoutLabelRightButtonMargins: {
    ...buttonCommonStyles,
    marginTop: 6, // Properly align with the text field (only dense "filled" text fields supported)
    marginLeft: 8,
  },
  standardTextFieldWithLabelRightButtonMargins: {
    ...buttonCommonStyles,
    marginTop: 17, // Properly align with the text field (only "standard" text fields with margin "none" supported)
    marginLeft: 8,
  },
  standardTextFieldWithoutLabelRightButtonMargins: {
    ...buttonCommonStyles,
    marginTop: 0, // Properly align with the text field (only "standard" text fields with margin "none" supported)
    marginLeft: 8,
  },
} as const;

/**
 * Position a button on the right of a TextField.
 */
export const TextFieldWithButtonLayout = ({
  margin,
  noFloatingLabelText,
  renderTextField,
  renderButton,
}: TextFieldWithButtonLayoutProps) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ResponsiveLineStackLayout
      alignItems="flex-start" // Align from the top to stay at the same position when error/multiline
      expand
      noMargin
    >
      {renderTextField()}
      {renderButton(
        margin === 'none'
          ? noFloatingLabelText
            ? textFieldWithButtonLayoutStyles.standardTextFieldWithoutLabelRightButtonMargins
            : textFieldWithButtonLayoutStyles.standardTextFieldWithLabelRightButtonMargins
          : noFloatingLabelText
          ? textFieldWithButtonLayoutStyles.filledTextFieldWithoutLabelRightButtonMargins
          : textFieldWithButtonLayoutStyles.filledTextFieldWithLabelRightButtonMargins
      )}
    </ResponsiveLineStackLayout>
  );
};

type LineStackLayoutProps = {
  id?: string,
  alignItems?: string,
  justifyContent?: string,
  expand?: boolean,
  noMargin?: boolean,
  children: React.ReactNode,
  useLargeSpacer?: boolean,
  overflow?: 'hidden' // allows children Text components to use text ellipsis when they are too long
};

export const LineStackLayout = ({
  id,
  alignItems,
  justifyContent,
  expand,
  noMargin,
  children,
  useLargeSpacer,
  overflow,
}: LineStackLayoutProps) => {
  let isFirstChild = true;
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Line
      id={id}
      alignItems={alignItems}
      justifyContent={justifyContent}
      expand={expand}
      noMargin={noMargin}
      overflow={overflow}
    >
      {React.Children.map(children, (child, index) => {
        if (!child) return null;

        const addSpacers = !isFirstChild;
        isFirstChild = false;

        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            {addSpacers && (useLargeSpacer ? <LargeSpacer /> : <Spacer />)}
            {child}
          </React.Fragment>
        );
      })}
    </Line>
  );
};

type ResponsiveLineStackLayoutProps = {
  id?: string,
  alignItems?: string,
  justifyContent?: string,
  expand?: boolean,
  /** Prefer `noColumnMargin` if needed. */
  noMargin?: boolean,
  /** Remove the margin on the left and right of the column, when the layout is shown as a single column. */
  noColumnMargin?: boolean,
  /** Do not measure window width in case parent component is in smaller component */
  forceMobileLayout?: boolean,
  noResponsiveLandscape?: boolean,
  useLargeSpacer?: boolean,
  children: React.ReactNode
};

export const ResponsiveLineStackLayout = ({
  id,
  alignItems,
  justifyContent,
  expand,
  noMargin,
  noColumnMargin,
  forceMobileLayout,
  noResponsiveLandscape,
  useLargeSpacer,
  children,
}: ResponsiveLineStackLayoutProps) => {
  const { isMobile, isLandscape } = useResponsiveWindowSize();
  const assumeMobileScreen = forceMobileLayout || isMobile;
  const shouldPreventSwitchingToColumn = noResponsiveLandscape && isLandscape;
  const shouldSwitchToColumn =
    assumeMobileScreen && !shouldPreventSwitchingToColumn;

  return shouldSwitchToColumn ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ColumnStackLayout
      id={id}
      noMargin={noMargin || noColumnMargin}
      expand
      useLargeSpacer={useLargeSpacer}
    >
      {children}
    </ColumnStackLayout>
  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <LineStackLayout
      id={id}
      alignItems={alignItems}
      justifyContent={justifyContent}
      expand={expand}
      noMargin={noMargin}
      useLargeSpacer={useLargeSpacer}
    >
      {children}
    </LineStackLayout>
  );
};

type ColumnStackLayoutProps = {
  id?: string,
  alignItems?: string,
  justifyContent?: string,
  expand?: boolean,
  noMargin?: boolean,
  children: React.ReactNode,
  noOverflowParent?: boolean,
  useFullHeight?: boolean,
  useLargeSpacer?: boolean
};

export const ColumnStackLayout = ({
  id,
  alignItems,
  justifyContent,
  expand,
  noMargin,
  children,
  noOverflowParent,
  useFullHeight,
  useLargeSpacer,
}: ColumnStackLayoutProps) => {
  let isFirstChild = true;
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column
      id={id}
      alignItems={alignItems}
      justifyContent={justifyContent}
      expand={expand}
      noMargin={noMargin}
      noOverflowParent={noOverflowParent}
      useFullHeight={useFullHeight}
    >
      {React.Children.map(children, (child, index) => {
        if (!child) return null;

        const addSpacers = !isFirstChild;
        isFirstChild = false;

        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            {addSpacers && (useLargeSpacer ? <LargeSpacer /> : <Spacer />)}
            {child}
          </React.Fragment>
        );
      })}
    </Column>
  );
};
