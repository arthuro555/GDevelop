import * as React from 'react';
import Popover from '@material-ui/core/Popover';
import AuthenticatedUserContext from '../../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../IconButton';
// @ts-expect-error - TS6142 - Module '../Notification/NotificationList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Notification/NotificationList.tsx', but '--jsx' is not set.
import NotificationList from '../Notification/NotificationList';
// @ts-expect-error - TS6142 - Module '../Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../Paper';
// @ts-expect-error - TS6142 - Module '../Badge' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Badge.tsx', but '--jsx' is not set.
import Badge from '../Badge';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../CustomSvgIcons/Bell'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Bell.js' implicitly has an 'any' type.
import Bell from '../CustomSvgIcons/Bell';
import {
  markNotificationsAsSeen,
  Notification,
} from '../../Utils/GDevelopServices/Notification';
import GDevelopThemeContext from '../Theme/GDevelopThemeContext';

const styles = {
  notificationListContainer: {
    padding: 16,
    display: 'flex',
    maxWidth: 400,
    minWidth: 300,
  },
  popoverPaper: { overflowY: 'hidden', maxHeight: '80%', display: 'flex' },
} as const;

type Props = Record<any, any>;

const NotificationChip = (props: Props) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const {
    notifications,
    profile,
    getAuthorizationHeader,
    onRefreshNotifications,
  } = React.useContext(AuthenticatedUserContext);
  const [anchorEl, setAnchorEl] = React.useState<any>(null);
  const isThereASingleUnseenNotification = React.useMemo<boolean>(() =>
    !!notifications &&
    notifications.some(notification => !notification.seenAt), [notifications]);

  const onMarkAllAsRead = React.useCallback(
    async () => {
      if (!notifications || !profile) return;

      const mostRecentNotification = notifications[0];
      if (!mostRecentNotification) return;

      await markNotificationsAsSeen(getAuthorizationHeader, {
        allStartingFromNotificationId: mostRecentNotification.id,
        userId: profile.id,
      });
      await onRefreshNotifications();
    },
    [notifications, profile, getAuthorizationHeader, onRefreshNotifications]
  );

  const onMarkNotificationAsSeen = React.useCallback(
    async (notification: Notification) => {
      if (!profile || notification.seenAt) return;

      await markNotificationsAsSeen(getAuthorizationHeader, {
        notificationIds: [notification.id],
        userId: profile.id,
      });
      await onRefreshNotifications();
    },
    [profile, getAuthorizationHeader, onRefreshNotifications]
  );

  const onCloseNotificationList = React.useCallback(() => {
    setAnchorEl(null);
  }, []);

  if (!profile || !notifications) return null;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <IconButton
        size="small"
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type.
        onClick={e => {
          setAnchorEl(e.currentTarget);
        }}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Badge
          variant="dot"
          overlap="circle"
          invisible={!isThereASingleUnseenNotification}
          forcedColor={gdevelopTheme.notification.badgeColor}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Bell color="secondary" />
        </Badge>
      </IconButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        PaperProps={{ style: styles.popoverPaper }}
        onClose={onCloseNotificationList}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Paper style={styles.notificationListContainer} background="light">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <NotificationList
            notifications={notifications}
            onMarkAllAsRead={onMarkAllAsRead}
            onMarkNotificationAsSeen={onMarkNotificationAsSeen}
            canMarkAllAsRead={isThereASingleUnseenNotification}
            onCloseNotificationList={onCloseNotificationList}
          />
        </Paper>
      </Popover>
    </>
  );
};

export default NotificationChip;
