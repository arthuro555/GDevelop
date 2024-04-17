import * as React from 'react';

import BackgroundText from './BackgroundText';

const styles = {
  containerStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 10,
  },
} as const;

type Props = {
  style?: any;
  messageStyle?: any;
  children: React.ReactNode | null | undefined;
};

/**
 * Show a message when there is no content to display.
 * Also take a look at EmptyPlaceholder for a more visible placeholder.
 */
const EmptyMessage = (props: Props) => (
  <div style={{ ...styles.containerStyle, ...props.style }}>
    <BackgroundText style={props.messageStyle}>{props.children}</BackgroundText>
  </div>
);

export default EmptyMessage;
