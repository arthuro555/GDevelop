import React from 'react';
import GDevelopThemeContext from '../UI/Theme/GDevelopThemeContext';

const ToolbarSeparator = () => {
  const theme = React.useContext(GDevelopThemeContext);
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <span
      style={{
        height: 32,
        marginLeft: 3,
        marginRight: 3,
        borderLeftStyle: 'solid',
        borderLeftWidth: 1,
        borderColor: theme.toolbar.separatorColor,
      }}
    />
  );
};

export default ToolbarSeparator;
