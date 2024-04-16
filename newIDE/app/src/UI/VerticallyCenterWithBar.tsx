import * as React from 'react';
import GDevelopThemeContext from './Theme/GDevelopThemeContext';

const styles = {
  container: {
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'stretch',
    alignItems: 'center',
  },
  verticalBar: {
    flex: 1,
  },
  childrenContainer: {
    flex: 0,
  },
} as const;

type Props = {
  children: React.ReactNode
};

const VerticallyCenterWithBar = (props: Props) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <div style={styles.container}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div
        style={{
          ...styles.verticalBar,
          borderLeft: `1px solid ${gdevelopTheme.palette.secondary}`,
        }}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div style={styles.childrenContainer}>{props.children}</div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div
        style={{
          ...styles.verticalBar,
          borderLeft: `1px solid ${gdevelopTheme.palette.secondary}`,
        }}
      />
    </div>
  );
};

export default VerticallyCenterWithBar;
