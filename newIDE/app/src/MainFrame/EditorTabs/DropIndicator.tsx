import * as React from 'react';
import GDevelopThemeContext from '../../UI/Theme/GDevelopThemeContext';

const styles = {
  columnDropIndicator: {
    borderRight: '1px solid',
    borderLeft: '1px solid',
    width: 8,
    marginLeft: '-1px',
    height: '100%',
    boxSizing: 'border-box',
  },
} as const;

export function ColumnDropIndicator() {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <div
      style={{
        ...styles.columnDropIndicator,
        backgroundColor: gdevelopTheme.dropIndicator.canDrop,
        borderColor: gdevelopTheme.dropIndicator.border,
      }}
    />
  );
}
