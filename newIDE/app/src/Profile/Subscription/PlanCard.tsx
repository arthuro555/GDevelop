import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';

import {
  SubscriptionPlan,
  SubscriptionPlanWithPricingSystems,
  SubscriptionPlanPricingSystem,
} from '../../Utils/GDevelopServices/Usage';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line, Spacer } from '../../UI/Grid';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import GDevelopThemeContext from '../../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/CheckCircle'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/CheckCircle.js' implicitly has an 'any' type.
import CheckCircle from '../../UI/CustomSvgIcons/CheckCircle';
// @ts-expect-error - TS6142 - Module '../../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../../UI/Paper';
import { useResponsiveWindowSize } from '../../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Icons/Silver'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/Icons/Silver.js' implicitly has an 'any' type.
import Silver from './Icons/Silver';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Icons/Gold'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/Icons/Gold.js' implicitly has an 'any' type.
import Gold from './Icons/Gold';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Icons/Startup'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/Icons/Startup.js' implicitly has an 'any' type.
import Startup from './Icons/Startup';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Icons/Business'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/Icons/Business.js' implicitly has an 'any' type.
import Business from './Icons/Business';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Icons/Education'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/Icons/Education.js' implicitly has an 'any' type.
import Education from './Icons/Education';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/GDevelopGLogo'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/GDevelopGLogo.js' implicitly has an 'any' type.
import GDevelopGLogo from '../../UI/CustomSvgIcons/GDevelopGLogo';
import { selectMessageByLocale } from '../../Utils/i18n/MessageByLocale';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/HotMessage/DiscountFlame'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HotMessage/DiscountFlame.js' implicitly has an 'any' type.
import DiscountFlame from '../../UI/HotMessage/DiscountFlame';

const styles = {
  bulletIcon: { width: 20, height: 20, marginRight: 10 },
  planPricesPaper: {
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bulletText: { flex: 1 },
  discountedPrice: { textDecoration: 'line-through', opacity: 0.7 },
  discountContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: '4px 8px',
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
  },
} as const;

const formatPricingSystemPriceAndCurrency = (
  pricingSystem: SubscriptionPlanPricingSystem
) => {
  if (pricingSystem.currency === 'USD') {
    return `$${pricingSystem.amountInCents / 100}`;
  }
  return `${pricingSystem.amountInCents / 100}${
    pricingSystem.currency === 'EUR' ? '€' : pricingSystem.currency
  }`;
};

const getPlanPrice = (pricingSystem: SubscriptionPlanPricingSystem): React.ReactElement => {
  const price = (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <b>{formatPricingSystemPriceAndCurrency(pricingSystem)}</b>
    </Column>
  );

  if (pricingSystem.period === 'week') {
    if (pricingSystem.periodCount === 1) {
      if (pricingSystem.isPerUser) {
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Text key="week" noMargin color="primary">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>{price} per seat, each week</Trans>
          </Text>
        );
      } else {
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Text key="week" noMargin color="primary">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>{price} per week</Trans>
          </Text>
        );
      }
    } else {
      if (pricingSystem.isPerUser) {
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Text key="week" noMargin color="primary">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              {price} per seat, every {pricingSystem.periodCount} weeks
            </Trans>
          </Text>
        );
      } else {
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Text key="week" noMargin color="primary">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              {price} every {pricingSystem.periodCount} weeks
            </Trans>
          </Text>
        );
      }
    }
  } else if (pricingSystem.period === 'month') {
    if (pricingSystem.periodCount === 1) {
      if (pricingSystem.isPerUser) {
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Text key="month" noMargin color="primary">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>{price} per seat, each month</Trans>
          </Text>
        );
      } else {
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Text key="month" noMargin color="primary">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>{price} per month</Trans>
          </Text>
        );
      }
    } else {
      if (pricingSystem.isPerUser) {
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Text key="month" noMargin color="primary">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              {price} per seat, every {pricingSystem.periodCount} months
            </Trans>
          </Text>
        );
      } else {
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Text key="month" noMargin color="primary">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              {price} every {pricingSystem.periodCount} months
            </Trans>
          </Text>
        );
      }
    }
  } else {
    if (pricingSystem.periodCount === 1) {
      if (pricingSystem.isPerUser) {
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Text key="year" noMargin color="primary">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>{price} per seat, each year</Trans>
          </Text>
        );
      } else {
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Text key="year" noMargin color="primary">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>{price} per year</Trans>
          </Text>
        );
      }
    } else {
      if (pricingSystem.isPerUser) {
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Text key="year" noMargin color="primary">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              {price} per seat, every {pricingSystem.periodCount} years
            </Trans>
          </Text>
        );
      } else {
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Text key="year" noMargin color="primary">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              {price} every {pricingSystem.periodCount} years
            </Trans>
          </Text>
        );
      }
    }
  }
};

const extrapolateMonthlyPricingSystemToYearlyBasis = (monthlyPricingSystem: SubscriptionPlanPricingSystem): SubscriptionPlanPricingSystem => ({
  ...monthlyPricingSystem,
  amountInCents: monthlyPricingSystem.amountInCents * 12,
  period: 'year',
});

export const getPlanPrices = (
  {
    pricingSystems,
    hidePrice,
  }: {
    pricingSystems: SubscriptionPlanPricingSystem[],
    hidePrice?: boolean
  },
): React.ReactElement | null => {
  if (hidePrice) return null;
  if (pricingSystems.length > 0) {
    const displayedPricingSystems = pricingSystems
      .map((pricingSystem, index) => [
        index !== 0 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Text noMargin size="body2" color="primary">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>or</Trans>
          </Text>
        ) : null,
        getPlanPrice(pricingSystem),
      ])
      .flat();

// @ts-expect-error - TS2739 - Type '(Element | null)[]' is missing the following properties from type 'ReactElement<any, string | JSXElementConstructor<any>>': type, props, key
    return displayedPricingSystems;
  }

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Text noMargin color="primary">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Trans>Free</Trans>
    </Text>
  );
};

export const getPlanIcon = (
  {
    subscriptionPlan,
    logoSize,
  }: {
    subscriptionPlan: SubscriptionPlan | SubscriptionPlanWithPricingSystems,
    logoSize: number
  },
): React.ReactElement => {
  const GDEVELOP_LOGO_PADDING = 10;
  // The plan logos are bigger than the GDevelop logo because they contain a glow effect,
  // so we increase the size.
  const PLAN_LOGO_SIZE = logoSize + 2 * GDEVELOP_LOGO_PADDING;

  switch (subscriptionPlan.id) {
    case 'gdevelop_silver':
    case 'gdevelop_indie': // legacy
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Silver
          style={{
            width: PLAN_LOGO_SIZE,
            height: PLAN_LOGO_SIZE,
          }}
        />
      );
    case 'gdevelop_gold':
    case 'gdevelop_pro': // legacy
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Gold
          style={{
            width: PLAN_LOGO_SIZE,
            height: PLAN_LOGO_SIZE,
          }}
        />
      );
    case 'gdevelop_education':
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Education
          style={{
            width: PLAN_LOGO_SIZE,
            height: PLAN_LOGO_SIZE,
          }}
        />
      );
    case 'gdevelop_startup':
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Startup
          style={{
            width: PLAN_LOGO_SIZE,
            height: PLAN_LOGO_SIZE,
          }}
        />
      );
    case 'gdevelop_enterprise':
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Business
          style={{
            width: PLAN_LOGO_SIZE,
            height: PLAN_LOGO_SIZE,
          }}
        />
      );
    default:
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <GDevelopGLogo
          style={{
            width: logoSize,
            height: logoSize,
            padding: GDEVELOP_LOGO_PADDING,
          }}
        />
      );
  }
};

const getYearlyDiscountDisplayText = (subscriptionPlanWithPricingSystems: SubscriptionPlanWithPricingSystems): string | null => {
  const monthlyPricingSystem = subscriptionPlanWithPricingSystems.pricingSystems.find(
    pricingSystem => pricingSystem.period === 'month'
  );
  const yearlyPricingSystem = subscriptionPlanWithPricingSystems.pricingSystems.find(
    pricingSystem => pricingSystem.period === 'year'
  );
  if (!monthlyPricingSystem || !yearlyPricingSystem) return null;

  return (
    '-' +
    ((
      100 -
      (yearlyPricingSystem.amountInCents /
        (monthlyPricingSystem.amountInCents * 12)) *
        100
    ).toFixed(0) +
      '%')
  );
};

type Props = {
  subscriptionPlanWithPricingSystems: SubscriptionPlanWithPricingSystems,
  isHighlighted: boolean,
  actions?: React.ReactNode,
  isPending?: boolean,
  periodToDisplay: 'year' | 'month',
  background: 'medium' | 'dark'
};

const PlanCard = (props: Props) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const { isMobile } = useResponsiveWindowSize();

  const planIcon = getPlanIcon({
    subscriptionPlan: props.subscriptionPlanWithPricingSystems,
    logoSize: 25,
  });
  const mainPricingSystem = props.subscriptionPlanWithPricingSystems.pricingSystems.find(
    pricingSystem => pricingSystem.period === props.periodToDisplay
  );
  const otherPricingSystem =
    props.periodToDisplay === 'year'
      ? props.subscriptionPlanWithPricingSystems.pricingSystems.find(
          pricingSystem => pricingSystem.period === 'month'
        )
      : null;

  const yearlyDiscountDisplayText =
    props.periodToDisplay === 'year'
      ? getYearlyDiscountDisplayText(props.subscriptionPlanWithPricingSystems)
      : null;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Paper
          background={props.background}
          style={{
            padding: isMobile ? 8 : 16,
            border: `1px solid ${gdevelopTheme.text.color.disabled}`,
            maxWidth: isMobile ? undefined : 350,
            minWidth: 280,
            display: 'flex',
            flex: 1,
            position: 'relative',
            ...(props.isHighlighted
              ? {
                  borderTopWidth: 5,
                  borderTopColor: gdevelopTheme.palette.secondary,
                }
              : {}),
          }}
        >
          {yearlyDiscountDisplayText && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <span
              style={{
                ...styles.discountContainer,
                backgroundColor: gdevelopTheme.message.hot.backgroundColor,
                color: gdevelopTheme.message.hot.color,
              }}
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <DiscountFlame fontSize="small" />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text color="inherit" noMargin>
                {yearlyDiscountDisplayText}
              </Text>
            </span>
          )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column expand noMargin alignItems="stretch">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column noMargin alignItems="center">
              {planIcon}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <ColumnStackLayout
                noMargin
                justifyContent="space-between"
                alignItems="center"
              >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text size="block-title" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <span style={{ textTransform: 'uppercase' }}>
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
                <Text size="section-title" noMargin align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <div style={{ minHeight: 82 }}>
                    {selectMessageByLocale(
                      i18n,
                      props.subscriptionPlanWithPricingSystems
                        .descriptionByLocale
                    )}
                  </div>
                </Text>
              </ColumnStackLayout>
            </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line expand alignItems="flex-start">
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
            {mainPricingSystem && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Paper background="light" style={styles.planPricesPaper}>
                {otherPricingSystem && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <span style={styles.discountedPrice}>
                    {getPlanPrices({
                      pricingSystems: [
                        extrapolateMonthlyPricingSystemToYearlyBasis(
                          otherPricingSystem
                        ),
                      ],
                    })}
                  </span>
                )}
                {getPlanPrices({
                  pricingSystems: [mainPricingSystem],
                })}
              </Paper>
            )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Spacer />
            {props.actions && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <ColumnStackLayout
                noMargin
                alignItems="center"
                justifyContent="flex-end"
              >
                {props.actions}
              </ColumnStackLayout>
            )}
          </Column>
        </Paper>
      )}
    </I18n>
  );
};

export default PlanCard;
