import * as React from 'react';
// @ts-expect-error - TS6142 - Module './Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from './Paper';

type Props = {
  children: React.ReactNode,
  showOnTop?: boolean
};

const PlaceholderMessage = (props: Props) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: props.showOnTop ? 9999 : undefined, // Ensure it's above most things
      }}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Paper
        elevation={3}
        style={{
          padding: 10,
          width: '100%', // Make it take full width, especially on mobile.
          maxWidth: 600, // But not too big for desktop.
        }}
        background="dark"
      >
        {props.children}
      </Paper>
    </div>
  );
};

export default PlaceholderMessage;
