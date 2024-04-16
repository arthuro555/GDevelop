import React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { LineStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Visa'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Visa.js' implicitly has an 'any' type.
import Visa from '../../UI/CustomSvgIcons/Visa';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/MasterCard'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/MasterCard.js' implicitly has an 'any' type.
import MasterCard from '../../UI/CustomSvgIcons/MasterCard';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Paypal'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Paypal.js' implicitly has an 'any' type.
import Paypal from '../../UI/CustomSvgIcons/Paypal';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import GDevelopThemeContext from '../../UI/Theme/GDevelopThemeContext';

const styles = {
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4px 8px',
    borderRadius: 8,
  },
} as const;

// @ts-expect-error - TS7031 - Binding element 'children' implicitly has an 'any' type.
const LogoContainer = ({ children }) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <div
      style={{
        ...styles.logoContainer,
        background: gdevelopTheme.palette.secondary,
      }}
    >
      {children}
    </div>
  );
};

const SecureCheckout = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <LineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Trans>Secure Checkout:</Trans>
      </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <LogoContainer>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Paypal />
      </LogoContainer>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <LogoContainer>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Visa />
      </LogoContainer>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <LogoContainer>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <MasterCard />
      </LogoContainer>
    </LineStackLayout>
  );
};

export default SecureCheckout;
