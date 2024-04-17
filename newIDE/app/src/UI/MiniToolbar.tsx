import * as React from 'react';

import Text from './Text';

const style = {
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 8,
  paddingRight: 8,
} as const;

type MiniToolbarProps = {
  justifyContent?: 'flex-start' | 'flex-end' | 'center';
  noPadding?: boolean;
  children: React.ReactNode;
};

const MiniToolbar = ({
  justifyContent,
  children,
  noPadding,
}: MiniToolbarProps) => (
  <div
    style={{
      ...style,
      ...(noPadding ? { padding: 0 } : {}),
      height: 32,
      justifyContent,
    }}
  >
    {children}
  </div>
);

const firstChildToolbarTextStyle = {
  marginRight: 4,
} as const;
const toolbarTextStyle = {
  marginLeft: 4,
  marginRight: 4,
} as const;

type MiniToolbarTextProps = {
  firstChild?: boolean;
  children: React.ReactNode;
};

export const MiniToolbarText = ({
  children,
  firstChild,
}: MiniToolbarTextProps) => (
  <Text
    noShrink
    style={firstChild ? firstChildToolbarTextStyle : toolbarTextStyle}
  >
    {children}
  </Text>
);

export default MiniToolbar;
