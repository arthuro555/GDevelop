// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans, t} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';

import AuthenticatedUserContext from '../Profile/AuthenticatedUserContext';
import {
  ColumnStackLayout,
  LineStackLayout,
  ResponsiveLineStackLayout,
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
} from '../UI/Layout';
import {
  buyGameFeaturing,
  listGameFeaturings,
  Game,
  MarketingPlan,
  GameFeaturing,
} from '../Utils/GDevelopServices/Game';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module '../UI/Link' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Link.tsx', but '--jsx' is not set.
import Link from '../UI/Link';
import Window from '../Utils/Window';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Icons/Basic'. '/home/arthuro555/code/GDevelop/newIDE/app/src/MarketingPlans/Icons/Basic.js' implicitly has an 'any' type.
import Basic from './Icons/Basic';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Icons/Pro'. '/home/arthuro555/code/GDevelop/newIDE/app/src/MarketingPlans/Icons/Pro.js' implicitly has an 'any' type.
import Pro from './Icons/Pro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Icons/Premium'. '/home/arthuro555/code/GDevelop/newIDE/app/src/MarketingPlans/Icons/Premium.js' implicitly has an 'any' type.
import Premium from './Icons/Premium';
import GDevelopThemeContext from '../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/CheckCircle'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/CheckCircle.js' implicitly has an 'any' type.
import CheckCircle from '../UI/CustomSvgIcons/CheckCircle';
import useAlertDialog from '../UI/Alert/useAlertDialog';
import { selectMessageByLocale } from '../Utils/i18n/MessageByLocale';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../UI/PlaceholderLoader';
// @ts-expect-error - TS6142 - Module '../UI/PlaceholderError' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderError.tsx', but '--jsx' is not set.
import PlaceholderError from '../UI/PlaceholderError';
// @ts-expect-error - TS6142 - Module '../AssetStore/CreditsPackages/CreditsPackageStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/CreditsPackages/CreditsPackageStoreContext.tsx', but '--jsx' is not set.
import { CreditsPackageStoreContext } from '../AssetStore/CreditsPackages/CreditsPackageStoreContext';
// @ts-expect-error - TS6142 - Module './MarketingPlansStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MarketingPlans/MarketingPlansStoreContext.tsx', but '--jsx' is not set.
import { MarketingPlansStoreContext } from './MarketingPlansStoreContext';

const styles = {
  campaign: {
    display: 'flex',
    flex: 1,
    borderRadius: 8,
    padding: 16,
  },
  titleContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  bulletPointsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  bulletIcon: { width: 20, height: 20, marginRight: 10 },
  iconStyle: { width: 40, height: 40 },
} as const;

const getIconForMarketingPlan = (marketingPlan: MarketingPlan) => {
  switch (marketingPlan.id) {
    case 'featuring-basic':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <Basic style={styles.iconStyle} />;
    case 'featuring-pro':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <Pro style={styles.iconStyle} />;
    case 'featuring-premium':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <Premium style={styles.iconStyle} />;
    default:
      return null;
  }
};

type Props = {
  game: Game
};

const MarketingPlans = ({
  game,
}: Props) => {
  const { profile, limits, getAuthorizationHeader } = React.useContext(
    AuthenticatedUserContext
  );
  const { openCreditsPackageDialog, openCreditsUsageDialog } = React.useContext(
    CreditsPackageStoreContext
  );
  const {
    marketingPlans,
    error: marketingPlansError,
    fetchMarketingPlans,
  } = React.useContext(MarketingPlansStoreContext);
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
// @ts-expect-error - TS2339 - Property 'showAlert' does not exist on type 'void'.
  const { showAlert } = useAlertDialog();
  const [gameFeaturings, setGameFeaturings] = React.useState<GameFeaturing[] | null>(null);
  const [gameFeaturingsError, setGameFeaturingsError] = React.useState<Error | null | undefined>(null);

  const {
    activeBasicFeaturing,
    activeProFeaturing,
    activePremiumFeaturing,
  }: {
    activeBasicFeaturing: GameFeaturing | null | undefined,
    activeProFeaturing: GameFeaturing | null | undefined,
    activePremiumFeaturing: GameFeaturing | null | undefined
  } = React.useMemo(
    () => {
      if (!gameFeaturings)
        return {
          activeBasicFeaturing: null,
          activeProFeaturing: null,
          activePremiumFeaturing: null,
        };

      const activeGameFeaturings = gameFeaturings.filter(
        gameFeaturing => gameFeaturing.expiresAt > Date.now() / 1000
      );
      return {
        activeBasicFeaturing: activeGameFeaturings.filter(
          gameFeaturing => gameFeaturing.featuring === 'games-platform-home'
        )[0],
        activeProFeaturing: activeGameFeaturings.filter(
          gameFeaturing => gameFeaturing.featuring === 'socials-newsletter'
        )[0],
        activePremiumFeaturing: activeGameFeaturings.filter(
          gameFeaturing => gameFeaturing.featuring === 'gdevelop-banner'
        )[0],
      };
    },
    [gameFeaturings]
  );

  const getActiveFeaturing = React.useCallback(
    (marketingPlan: MarketingPlan) => {
      switch (marketingPlan.id) {
        case 'featuring-basic':
          return activeBasicFeaturing;
        case 'featuring-pro':
          return activeProFeaturing;
        case 'featuring-premium':
          return activePremiumFeaturing;
        default:
          return null;
      }
    },
    [activeBasicFeaturing, activePremiumFeaturing, activeProFeaturing]
  );

  const getMarketingPlanPrice = React.useCallback(
    (marketingPlan: MarketingPlan) => {
      if (!profile || !limits) return null;

      const prices = limits.credits.prices;
      const usagePrice = prices[marketingPlan.id];
      if (!usagePrice) return null;

      return usagePrice.priceInCredits;
    },
    [limits, profile]
  );

  React.useEffect(
    () => {
      fetchMarketingPlans();
    },
    [fetchMarketingPlans]
  );

  const fetchGameFeaturings = React.useCallback(
    async () => {
      if (!profile) return;
      try {
        setGameFeaturingsError(null);
        const gameFeaturings = await listGameFeaturings(
          getAuthorizationHeader,
          {
            gameId: game.id,
            userId: profile.id,
          }
        );
        setGameFeaturings(gameFeaturings);
      } catch (error: any) {
        console.error(
          'An error occurred while fetching game featurings.',
          error
        );
        setGameFeaturingsError(error);
      }
    },
    [game, getAuthorizationHeader, profile]
  );

  React.useEffect(
    () => {
      fetchGameFeaturings();
    },
    [fetchGameFeaturings]
  );

  const onPurchase = React.useCallback(
    async (i18n: I18nType, marketingPlan: MarketingPlan) => {
      if (!profile || !limits) return;

      const { id, nameByLocale } = marketingPlan;
      const planCreditsAmount = getMarketingPlanPrice(marketingPlan);
      if (!planCreditsAmount) return;

      const translatedName = selectMessageByLocale(i18n, nameByLocale);

      const activeFeaturing = getActiveFeaturing(marketingPlan);
      if (
        activeFeaturing &&
        (marketingPlan.id === 'featuring-pro' ||
          marketingPlan.id === 'featuring-premium')
      ) {
        await showAlert({
          title: t`Featuring already active`,
          message: t`You already have an active ${translatedName} featuring for your game ${
            game.gameName
          }. Check your emails or discord, we will get in touch with you to get the campaign up!`,
        });
        return;
      }

      const currentCreditsAmount = limits.credits.userBalance.amount;
      if (currentCreditsAmount < planCreditsAmount) {
        openCreditsPackageDialog({
          missingCredits: planCreditsAmount - currentCreditsAmount,
        });
        return;
      }

      openCreditsUsageDialog({
        title: activeFeaturing ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>Extend Featuring</Trans>
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>Get Featuring</Trans>
        ),
        message: activeFeaturing ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>
            You are about to use {planCreditsAmount} credits to extend the game
            featuring {translatedName} for your game {game.gameName} and push it
            to the top of gd.games. Continue?
          </Trans>
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>
            You are about to use {planCreditsAmount} credits to purchase the
            game featuring {translatedName} for your game {game.gameName}.
            Continue?
          </Trans>
        ),
        onConfirm: async () => {
          await buyGameFeaturing(getAuthorizationHeader, {
            gameId: game.id,
            usageType: id,
            userId: profile.id,
          });
          await fetchGameFeaturings();
        },
        successMessage:
          marketingPlan.id === 'featuring-basic' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>
              🎉 Congrats on getting the {translatedName} featuring for your
              game {game.gameName}! Ensure that your game is public and you have
              configured a thumbnail for gd.games. This can take a few minutes
              for your game to be visible on the platform.
            </Trans>
          ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>
              🎉 Congrats on getting the {translatedName} featuring for your
              game {game.gameName}. We will get in touch with you to get the
              campaign up!
            </Trans>
          ),
      });
    },
    [
      game,
      getAuthorizationHeader,
      limits,
      profile,
      showAlert,
      getActiveFeaturing,
      fetchGameFeaturings,
      openCreditsPackageDialog,
      openCreditsUsageDialog,
      getMarketingPlanPrice,
    ]
  );

  const getRequirementsErrors = (marketingPlan: MarketingPlan) => {
    const requirementsErrors: Array<React.ReactElement<any>> = [];
    if (marketingPlan.id === 'featuring-basic') {
      if (!game.thumbnailUrl) {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        requirementsErrors.push(<Trans>You don't have a thumbnail</Trans>);
      }
      if (!game.publicWebBuildId) {
        requirementsErrors.push(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>Your game does not have a public build</Trans>
        );
      }
      if (!game.discoverable) {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        requirementsErrors.push(<Trans>Your game is not discoverable</Trans>);
      }
    }

    return requirementsErrors;
  };

  const getActiveMessage = ({
    marketingPlan,
    activeFeaturing,
    i18n,
    hasErrors,
  }: {
    marketingPlan: MarketingPlan,
    activeFeaturing: GameFeaturing,
    i18n: I18nType,
    hasErrors: boolean
  }) => {
    if (hasErrors) {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <Trans>Fix those issues to get the campaign up!</Trans>;
    }

    return activeFeaturing.featuring === 'games-platform-home' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Trans>Active until {i18n.date(activeFeaturing.expiresAt * 1000)}</Trans>
    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Trans>Active, we will get in touch to get the campaign up!</Trans>
    );
  };

  if (!profile || !limits) return null;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) =>
        marketingPlansError || gameFeaturingsError ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <PlaceholderError
            onRetry={() => {
              fetchMarketingPlans();
              fetchGameFeaturings();
            }}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              Error while loading the marketing plans. Verify your internet
              connection or try again later.
            </Trans>
          </PlaceholderError>
        ) : !marketingPlans ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <PlaceholderLoader />
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text color="secondary" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                Get ready-made packs to make your game visible to the GDevelop
                community.{' '}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Link
                  href="https://wiki.gdevelop.io/gdevelop5/interface/games-dashboard/marketing"
                  onClick={() =>
                    Window.openExternalURL(
                      'https://wiki.gdevelop.io/gdevelop5/interface/games-dashboard/marketing'
                    )
                  }
                >
                  Read more
                </Link>{' '}
                about how they increase your views.
              </Trans>
            </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ResponsiveLineStackLayout noColumnMargin>
{ /* @ts-expect-error - TS7006 - Parameter 'marketingPlan' implicitly has an 'any' type. */}
              {marketingPlans.map(marketingPlan => {
                const {
                  id,
                  nameByLocale,
                  descriptionByLocale,
                  bulletPointsByLocale,
                } = marketingPlan;
                const planCreditsAmount = getMarketingPlanPrice(marketingPlan);
                if (!planCreditsAmount) {
                  console.error(
                    `Could not find price for marketing plan ${id}, hiding it.`
                  );
                  return null;
                }
                const activeFeaturing = getActiveFeaturing(marketingPlan);
                const requirementsErrors = activeFeaturing
                  ? getRequirementsErrors(marketingPlan)
                  : [];
                const hasErrors = requirementsErrors.length > 0;
                return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <div
                    style={{
                      ...styles.campaign,
                      border: activeFeaturing
                        ? `2px solid ${gdevelopTheme.message.valid}`
                        : `1px solid ${gdevelopTheme.palette.secondary}`,
                    }}
                    key={id}
                  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <ColumnStackLayout
                      alignItems="center"
                      justifyContent="space-between"
                      noMargin
                      expand
                    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <div style={styles.titleContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <LineStackLayout
                          justifyContent="space-between"
                          alignItems="flex-start"
                          expand
                        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <LineStackLayout noMargin alignItems="flex-start">
                            {getIconForMarketingPlan(marketingPlan)}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                            <Text size="sub-title">
                              {selectMessageByLocale(i18n, nameByLocale)}
                            </Text>
                          </LineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <Text size="body-small" color="secondary">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                            <Trans>{planCreditsAmount} credits</Trans>
                          </Text>
                        </LineStackLayout>
                      </div>

{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <div style={styles.bulletPointsContainer}>
                        {hasErrors
                          ? requirementsErrors.map((error, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                              <Column key={index} expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                <Line noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                  <CheckCircle
                                    style={{
                                      ...styles.bulletIcon,
                                      color: gdevelopTheme.message.error,
                                    }}
                                  />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                  <Text style={{ flex: 1 }}>{error}</Text>
                                </Line>
                              </Column>
                            ))
                          : bulletPointsByLocale.map(
// @ts-expect-error - TS7006 - Parameter 'bulletPointByLocale' implicitly has an 'any' type. | TS7006 - Parameter 'index' implicitly has an 'any' type.
                              (bulletPointByLocale, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                <Column key={index} expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                  <Line noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                    <CheckCircle
                                      style={{
                                        ...styles.bulletIcon,
                                        ...(activeFeaturing
                                          ? {
                                              color:
                                                gdevelopTheme.message.valid,
                                            }
                                          : {}),
                                      }}
                                    />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                    <Text style={{ flex: 1 }}>
                                      {selectMessageByLocale(
                                        i18n,
                                        bulletPointByLocale
                                      )}
                                    </Text>
                                  </Line>
                                </Column>
                              )
                            )}
                      </div>

{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Column
                        noMargin
                        alignItems="flex-start"
                        expand
                        justifyContent="flex-end"
                      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Text
                          size="body-small"
                          noMargin
                          color="secondary"
                          align="left"
                        >
                          {activeFeaturing
                            ? getActiveMessage({
                                activeFeaturing,
                                marketingPlan,
                                i18n,
                                hasErrors,
                              })
                            : selectMessageByLocale(i18n, descriptionByLocale)}
                        </Text>
                      </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <RaisedButton
                        primary={!activeFeaturing}
                        onClick={() => onPurchase(i18n, marketingPlan)}
                        label={
                          !gameFeaturings ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                            <Trans>Loading...</Trans>
                          ) : activeFeaturing ? (
                            activeFeaturing.featuring ===
                            'games-platform-home' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                              <Trans>Extend</Trans>
                            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                              <Trans>Activated</Trans>
                            )
                          ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                            <Trans>Purchase</Trans>
                          )
                        }
                        fullWidth
                        disabled={!gameFeaturings}
                      />
                    </ColumnStackLayout>
                  </div>
                );
              })}
            </ResponsiveLineStackLayout>
          </ColumnStackLayout>
        )
      }
    </I18n>
  );
};

export default MarketingPlans;
