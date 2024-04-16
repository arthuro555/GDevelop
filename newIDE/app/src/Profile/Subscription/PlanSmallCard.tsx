import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';

import { SubscriptionPlanWithPricingSystems } from '../../Utils/GDevelopServices/Usage';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
import GDevelopThemeContext from '../../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ResponsiveLineStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/CheckCircle'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/CheckCircle.js' implicitly has an 'any' type.
import CheckCircle from '../../UI/CustomSvgIcons/CheckCircle';
// @ts-expect-error - TS6142 - Module '../../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../../UI/Paper';
import { useResponsiveWindowSize } from '../../UI/Responsive/ResponsiveWindowMeasurer';
import { selectMessageByLocale } from '../../Utils/i18n/MessageByLocale';
// @ts-expect-error - TS6142 - Module './PlanCard' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/PlanCard.tsx', but '--jsx' is not set.
import { getPlanIcon, getPlanPrices } from './PlanCard';

const styles = {
  bulletIcon: { width: 20, height: 20, marginRight: 10 },
  planPricesPaper: {
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bulletText: { flex: 1 },
} as const;

type Props = {
  subscriptionPlanWithPricingSystems: SubscriptionPlanWithPricingSystems,
  isHighlighted: boolean,
  actions?: React.ReactNode,
  isPending?: boolean,
  hidePrice?: boolean,
  background: 'medium' | 'dark'
};

const PlanSmallCard = (props: Props) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const { isMobile } = useResponsiveWindowSize();

  const planIcon = getPlanIcon({
    subscriptionPlan: props.subscriptionPlanWithPricingSystems,
    logoSize: 40,
  });

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Paper
          background={props.background}
          style={{
            paddingRight: isMobile ? 8 : 32,
            paddingLeft: !!planIcon ? 0 : isMobile ? 8 : 65,
            border: `1px solid ${gdevelopTheme.text.color.disabled}`,
            paddingTop: 16,
            paddingBottom: 16,
            ...(props.isHighlighted
              ? {
                  borderLeftWidth: 4,
                  borderLeftColor: gdevelopTheme.palette.secondary,
                }
              : {}),
          }}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column noMargin>{planIcon}</Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line noMargin justifyContent="space-between" alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <span>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <b>
                      {selectMessageByLocale(
                        i18n,
                        props.subscriptionPlanWithPricingSystems.nameByLocale
                      )}
                    </b>
                  </span>
                </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Column noMargin alignItems="flex-end">
                  {getPlanPrices({
                    pricingSystems:
                      props.subscriptionPlanWithPricingSystems.pricingSystems,
                    hidePrice: props.hidePrice,
                  })}
                </Column>
              </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text color="secondary" noMargin>
                {selectMessageByLocale(
                  i18n,
                  props.subscriptionPlanWithPricingSystems.descriptionByLocale
                )}
              </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Column noMargin>
                  {props.subscriptionPlanWithPricingSystems.bulletPointsByLocale.map(
                    (bulletPointByLocale, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Column key={index} expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Line noMargin alignItems="center">
                          {props.isHighlighted ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                            <CheckCircle
                              style={{
                                ...styles.bulletIcon,
                                color: gdevelopTheme.message.valid,
                              }}
                            />
                          ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                            <CheckCircle style={styles.bulletIcon} />
                          )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <Text style={styles.bulletText}>
                            {selectMessageByLocale(i18n, bulletPointByLocale)}
                          </Text>
                        </Line>
                      </Column>
                    )
                  )}
                </Column>
              </Line>
              {props.actions && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <ResponsiveLineStackLayout
                  expand
                  noMargin
                  alignItems="center"
                  justifyContent="flex-end"
                >
                  {props.actions}
                </ResponsiveLineStackLayout>
              )}
            </Column>
          </Line>
        </Paper>
      )}
    </I18n>
  );
};

export default PlanSmallCard;
