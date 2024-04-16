import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t, Trans } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
import { useResponsiveWindowSize } from '../../../../UI/Responsive/ResponsiveWindowMeasurer';
import GDevelopThemeContext from '../../../../UI/Theme/GDevelopThemeContext';
import { SubscriptionPlanWithPricingSystems } from '../../../../Utils/GDevelopServices/Usage';
// @ts-expect-error - TS6142 - Module '../../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../../../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../../../../UI/Paper';
import {
  ColumnStackLayout,
  ResponsiveLineStackLayout,
// @ts-expect-error - TS6142 - Module '../../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
} from '../../../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../../UI/Text';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../../UI/CustomSvgIcons/CheckCircle'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/CheckCircle.js' implicitly has an 'any' type.
import CheckCircle from '../../../../UI/CustomSvgIcons/CheckCircle';
// @ts-expect-error - TS6142 - Module '../../../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../../../UI/RaisedButton';
import Window from '../../../../Utils/Window';
import { selectMessageByLocale } from '../../../../Utils/i18n/MessageByLocale';

const styles = {
  bulletIcon: { width: 20, height: 20, marginRight: 10 },
  bulletText: { flex: 1 },
  planRecommendationThumbnail: { maxWidth: 350, flex: 1 },
  planRecommendationContainer: { borderRadius: 8, maxWidth: 850, padding: 8 },
} as const;

const planImages = {
  individual: {
    path: 'res/plan-individual.svg',
    alt: t`Red hero taking care of their diamond`,
  },
  education: {
    path: 'res/plan-education.svg',
    alt: t`Red hero sharing knowledge with pink cloud students`,
  },
  professional: {
    path: 'res/plan-professional.svg',
    alt: t`Red and Green heroes running side by side carrying their diamonds`,
  },
} as const;

const planDetailsById = {
  silver: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    title: <Trans>GDevelop's Silver plan</Trans>,
    description: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Trans>Unlock GDevelop's features to build more and faster.</Trans>
    ),
    image: planImages.individual,
    link: 'https://gdevelop.io/pricing/individual',
  },
  gold: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    title: <Trans>GDevelop's Gold plan</Trans>,
    description: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Trans>Unlock GDevelop's features to build more and faster.</Trans>
    ),
    image: planImages.individual,
    link: 'https://gdevelop.io/pricing/individual',
  },
  education: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    title: <Trans>GDevelop's Education plan</Trans>,
    description: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Trans>
        For universities, extra curricular classes and summer camps.
      </Trans>
    ),
    image: planImages.education,
    link: 'https://gdevelop.io/pricing/education',
  },
  startup: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    title: <Trans>GDevelop's Startup plan</Trans>,
    description: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Trans>
        Get the most out of GDevelop and get your games out in no time.
      </Trans>
    ),
    image: planImages.professional,
    link: 'https://gdevelop.io/pricing/business',
  },
  business: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    title: <Trans>GDevelop's Business plan</Trans>,
    description: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Trans>
        Get the most out of GDevelop and get your games out in no time.
      </Trans>
    ),
    image: planImages.professional,
    link: 'https://gdevelop.io/pricing/business',
  },
} as const;

const PlanRecommendationRow = ({
  recommendationPlanId,
  subscriptionPlansWithPricingSystems,
  i18n,
}: {
  recommendationPlanId: string,
  subscriptionPlansWithPricingSystems: SubscriptionPlanWithPricingSystems[],
  i18n: I18nType
}) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const { isMobile } = useResponsiveWindowSize();
  const planToUse =
    recommendationPlanId === 'silver'
      ? 'gdevelop_silver'
      : recommendationPlanId === 'gold'
      ? 'gdevelop_gold'
      : recommendationPlanId === 'education'
      ? 'gdevelop_education'
      : recommendationPlanId === 'startup' ||
        recommendationPlanId === 'business'
      ? 'gdevelop_startup'
      : null;
  if (!planToUse) return null;

  const plan = subscriptionPlansWithPricingSystems.find(
    plan => plan.id === planToUse
  );
  if (!plan) return null;

// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ readonly silver: { readonly title: Element; readonly description: Element; readonly image: { readonly path: "res/plan-individual.svg"; readonly alt: any; }; readonly link: "https://gdevelop.io/pricing/individual"; }; readonly gold: { ...; }; readonly education: { ...; }; readonly startup: { ...; }; readonly busine...'.
  const planDetails = planDetailsById[recommendationPlanId];

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Line justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Paper
        background="dark"
        style={{
          ...styles.planRecommendationContainer,
          border: `1px solid ${gdevelopTheme.palette.secondary}`,
        }}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResponsiveLineStackLayout noColumnMargin noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <img
            src={planDetails.image.path}
            alt={i18n._(planDetails.image.alt)}
            style={styles.planRecommendationThumbnail}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ColumnStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text
                noMargin
                align={isMobile ? 'center' : 'left'}
                size="section-title"
              >
                {planDetails.title}
              </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text align={isMobile ? 'center' : 'left'}>
                {planDetails.description}
              </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <div style={{ padding: `0 20px` }}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <ColumnStackLayout noMargin>
                  {plan.bulletPointsByLocale.map(
                    (bulletPointByLocale, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Column key={index} expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Line noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <CheckCircle
                            style={{
                              ...styles.bulletIcon,
                              color: gdevelopTheme.message.valid,
                            }}
                          />

{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <Text style={styles.bulletText} size="body2" noMargin>
                            {selectMessageByLocale(i18n, bulletPointByLocale)}
                          </Text>
                        </Line>
                      </Column>
                    )
                  )}
                </ColumnStackLayout>
              </div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <RaisedButton
                  primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Learn More</Trans>}
                  onClick={() => Window.openExternalURL(planDetails.link)}
                />
              </Column>
            </ColumnStackLayout>
          </Line>
        </ResponsiveLineStackLayout>
      </Paper>
    </Line>
  );
};
export default PlanRecommendationRow;
