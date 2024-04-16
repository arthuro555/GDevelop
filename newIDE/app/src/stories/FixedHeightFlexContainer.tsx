import * as React from 'react';

const style = {
  display: 'flex',
} as const;

type Props = {
  children: React.ReactNode,
  height: number | string,
  alignItems?: 'center',
  justifyContent?: 'center'
};

const FixedHeightFlexContainer = ({
  children,
  height,
  alignItems,
  justifyContent,
}: Props) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <div style={{ ...style, height, alignItems, justifyContent }}>{children}</div>
);

export default FixedHeightFlexContainer;
