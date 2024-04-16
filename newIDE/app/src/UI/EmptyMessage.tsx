import * as React from 'react';
// @ts-expect-error - TS6142 - Module './BackgroundText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/BackgroundText.tsx', but '--jsx' is not set.
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
  style?: any,
  messageStyle?: any,
  children: React.ReactNode | null | undefined
};

/**
 * Show a message when there is no content to display.
 * Also take a look at EmptyPlaceholder for a more visible placeholder.
 */
const EmptyMessage = (props: Props) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <div style={{ ...styles.containerStyle, ...props.style }}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <BackgroundText style={props.messageStyle}>{props.children}</BackgroundText>
  </div>
);

export default EmptyMessage;
