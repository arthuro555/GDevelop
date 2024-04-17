import * as React from 'react';

const style = {
  display: 'flex',
} as const;

type Props = {
  children: React.ReactNode;
  height: number | string;
  alignItems?: 'center';
  justifyContent?: 'center';
};

const FixedHeightFlexContainer = ({
  children,
  height,
  alignItems,
  justifyContent,
}: Props) => (
  <div style={{ ...style, height, alignItems, justifyContent }}>{children}</div>
);

export default FixedHeightFlexContainer;
