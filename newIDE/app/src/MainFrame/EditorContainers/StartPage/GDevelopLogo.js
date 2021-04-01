// @flow
import * as React from 'react';
import ThemeConsumer from '../../../UI/Theme/ThemeConsumer';

const styles = {
  logo: {
    width: '100%',
  },
};

const GDevelopLogo = () => (
  <ThemeConsumer>
    {muiTheme => (
      <img
        src="beautiful.png"
        alt="yes that is a handsome person"
        style={styles.logo}
      />
    )}
  </ThemeConsumer>
);

export default GDevelopLogo;
