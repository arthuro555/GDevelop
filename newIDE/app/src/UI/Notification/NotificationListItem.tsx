import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import { Notification } from '../../Utils/GDevelopServices/Notification';
// @ts-expect-error - TS6142 - Module '../List' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/List.tsx', but '--jsx' is not set.
import { ListItem } from '../List';
import { getRelativeOrAbsoluteDisplayDate } from '../../Utils/DateDisplay';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../CustomSvgIcons/CoinOutline'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/CoinOutline.js' implicitly has an 'any' type.
import CoinOutline from '../CustomSvgIcons/CoinOutline';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../CustomSvgIcons/Annotation'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Annotation.js' implicitly has an 'any' type.
import Annotation from '../CustomSvgIcons/Annotation';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../CustomSvgIcons/Gaming'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Gaming.js' implicitly has an 'any' type.
import Gaming from '../CustomSvgIcons/Gaming';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../CustomSvgIcons/Cart'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Cart.js' implicitly has an 'any' type.
import Cart from '../CustomSvgIcons/Cart';
import { shortenString } from '../../Utils/StringHelpers';
import GDevelopThemeContext from '../Theme/GDevelopThemeContext';
import RouterContext, {
  RouteArguments,
// @ts-expect-error - TS6142 - Module '../../MainFrame/RouterContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/RouterContext.tsx', but '--jsx' is not set.
} from '../../MainFrame/RouterContext';

const notificationTypeToIcon = {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  'credits-drop': <CoinOutline />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  'one-game-feedback-received': <Annotation />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  'multiple-game-feedback-received': <Annotation />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  'claimable-asset-pack': <Cart />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  'game-sessions-achievement': <Gaming />,
} as const;

const getNotificationPrimaryTextByType = (notification: Notification): React.ReactElement | null => {
  if (
    notification.type === 'credits-drop' &&
    notification.data.reason.startsWith('subscription')
  ) {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Trans>
        You received {notification.data.creditsAmount} credits thanks to your
        subscription
      </Trans>
    );
  }
  if (notification.type === 'one-game-feedback-received') {
    if (notification.data.playerName) {
      // Prevent prettier formatting that puts the first double quote at the end of the
      // previous line, adding a white space between the double quote and the comment.
      // prettier-ignore
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Trans>
          Player {notification.data.playerName} left a feedback message on
          {notification.data.gameName}:
          "{shortenString(notification.data.comment, 25)}..."
        </Trans>
      );
    } else {
      // Prevent prettier formatting that puts the first double quote at the end of the
      // previous line, adding a white space between the double quote and the comment.
      // prettier-ignore
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Trans>
          Your game {notification.data.gameName} received a feedback message:
          "{shortenString(notification.data.comment, 25)}..."
        </Trans>
      );
    }
  }
  if (notification.type === 'multiple-game-feedback-received') {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Trans>
        Your game {notification.data.gameName} received
        {notification.data.count} feedback messages
      </Trans>
    );
  }
  if (notification.type === 'claimable-asset-pack') {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Trans>
        The asset pack {notification.data.privateAssetPackName} is now
        available, go claim it in the shop!
      </Trans>
    );
  }
  if (notification.type === 'game-sessions-achievement') {
// @ts-expect-error - TS2339 - Property 'gameCount' does not exist on type '{ achievementId: string; sessionsCount: number; gameCount: 1; period: "year"; gameId: string; gameName: string; } | { achievementId: string; sessionsCount: number; gameCount: number; period: "year"; } | { ...; }'.
    if (notification.data.gameCount === 1) {
// @ts-expect-error - TS2339 - Property 'gameId' does not exist on type '{ achievementId: string; sessionsCount: number; gameCount: 1; period: "year"; gameId: string; gameName: string; } | { achievementId: string; sessionsCount: number; gameCount: number; period: "year"; } | { ...; }'. | TS2339 - Property 'gameName' does not exist on type '{ achievementId: string; sessionsCount: number; gameCount: 1; period: "year"; gameId: string; gameName: string; } | { achievementId: string; sessionsCount: number; gameCount: number; period: "year"; } | { ...; }'.
      if (notification.data.gameId && notification.data.gameName) {
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>
{ /* @ts-expect-error - TS2339 - Property 'gameName' does not exist on type '{ achievementId: string; sessionsCount: number; gameCount: 1; period: "year"; gameId: string; gameName: string; } | { achievementId: string; sessionsCount: number; gameCount: number; period: "year"; } | { ...; }'. */}
            Your game {notification.data.gameName} was played more than
            {notification.data.sessionsCount} times!
          </Trans>
        );
      } else return null; // should not happen.
    }
// @ts-expect-error - TS2339 - Property 'allGames' does not exist on type '{ achievementId: string; sessionsCount: number; gameCount: 1; period: "year"; gameId: string; gameName: string; } | { achievementId: string; sessionsCount: number; gameCount: number; period: "year"; } | { ...; }'.
    if (notification.data.allGames) {
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Trans>
          All your games were played more than {notification.data.sessionsCount}
          times in total!
        </Trans>
      );
    }
// @ts-expect-error - TS2339 - Property 'gameCount' does not exist on type '{ achievementId: string; sessionsCount: number; gameCount: 1; period: "year"; gameId: string; gameName: string; } | { achievementId: string; sessionsCount: number; gameCount: number; period: "year"; } | { ...; }'.
    const { gameCount } = notification.data;
    if (Number.isInteger(gameCount)) {
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Trans>
          {gameCount} of your games were played more than
          {notification.data.sessionsCount} times in total!
        </Trans>
      );
    }
  }
  return null;
};

const getNotificationClickCallback = (
  {
    notification,
    addRouteArguments,
    onCloseNotificationList,
    onMarkNotificationAsSeen,
  }: {
    notification: Notification,
    addRouteArguments: (arg1: RouteArguments) => void,
    onCloseNotificationList: () => void,
    onMarkNotificationAsSeen: () => void
  },
): (() => void) | null => {
  if (notification.type === 'credits-drop') return null;
  if (
    notification.type === 'one-game-feedback-received' ||
    notification.type === 'multiple-game-feedback-received'
  ) {
    return () => {
      addRouteArguments({
        'initial-dialog': 'games-dashboard',
        'game-id': notification.data.gameId,
        'games-dashboard-tab': 'feedback',
      });
      onMarkNotificationAsSeen();
      onCloseNotificationList();
    };
  }
  if (notification.type === 'claimable-asset-pack') {
    return () => {
      addRouteArguments({
        'initial-dialog': 'store',
        'asset-pack': notification.data.privateAssetPackId,
      });
      onMarkNotificationAsSeen();
      onCloseNotificationList();
    };
  }
  if (notification.type === 'game-sessions-achievement') {
// @ts-expect-error - TS2339 - Property 'gameCount' does not exist on type '{ achievementId: string; sessionsCount: number; gameCount: 1; period: "year"; gameId: string; gameName: string; } | { achievementId: string; sessionsCount: number; gameCount: number; period: "year"; } | { ...; }'.
    if (notification.data.gameCount === 1) {
// @ts-expect-error - TS2339 - Property 'gameId' does not exist on type '{ achievementId: string; sessionsCount: number; gameCount: 1; period: "year"; gameId: string; gameName: string; } | { achievementId: string; sessionsCount: number; gameCount: number; period: "year"; } | { ...; }'. | TS2339 - Property 'gameName' does not exist on type '{ achievementId: string; sessionsCount: number; gameCount: 1; period: "year"; gameId: string; gameName: string; } | { achievementId: string; sessionsCount: number; gameCount: number; period: "year"; } | { ...; }'.
      const { gameId, gameName } = notification.data;
      if (gameId && gameName) {
        return () => {
          addRouteArguments({
            'initial-dialog': 'games-dashboard',
            'game-id': gameId,
            'games-dashboard-tab': 'analytics',
          });
          onMarkNotificationAsSeen();
          onCloseNotificationList();
        };
      } else return null; // should not happen.
    }
    if (
// @ts-expect-error - TS2339 - Property 'gameCount' does not exist on type '{ achievementId: string; sessionsCount: number; gameCount: 1; period: "year"; gameId: string; gameName: string; } | { achievementId: string; sessionsCount: number; gameCount: number; period: "year"; } | { ...; }'.
      notification.data.gameCount === 'all' ||
// @ts-expect-error - TS2339 - Property 'gameCount' does not exist on type '{ achievementId: string; sessionsCount: number; gameCount: 1; period: "year"; gameId: string; gameName: string; } | { achievementId: string; sessionsCount: number; gameCount: number; period: "year"; } | { ...; }'.
      Number.isInteger(notification.data.gameCount)
    ) {
      return () => {
        addRouteArguments({
          'initial-dialog': 'games-dashboard',
          'games-dashboard-tab': 'analytics',
        });
        onMarkNotificationAsSeen();
        onCloseNotificationList();
      };
    }
  }
  return null;
};

type Props = {
  notification: Notification,
  onCloseNotificationList: () => void,
  onMarkNotificationAsSeen: () => void
};

const NotificationListItem = ({
  notification,
  onCloseNotificationList,
  onMarkNotificationAsSeen,
}: Props) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const { addRouteArguments } = React.useContext(RouterContext);
  const onClickNotification = getNotificationClickCallback({
    notification,
    addRouteArguments,
    onMarkNotificationAsSeen,
    onCloseNotificationList,
  });
  const primaryText = getNotificationPrimaryTextByType(notification);
  if (!primaryText) return null;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ListItem
          primaryText={primaryText}
          secondaryText={getRelativeOrAbsoluteDisplayDate({
            i18n,
            dateAsNumber: notification.createdAt,
            sameDayFormat: 'timeAgo',
            sameWeekFormat: 'timeAgo',
            dayBeforeFormat: 'yesterday',
            relativeLimit: 'currentWeek',
          })}
          onClick={onClickNotification}
          leftIcon={notificationTypeToIcon[notification.type]}
          displayDot={!notification.seenAt}
          dotColor={gdevelopTheme.notification.badgeColor}
          isGreyed={!!notification.seenAt}
          secondaryTextSize="body-small"
        />
      )}
    </I18n>
  );
};

export default NotificationListItem;
