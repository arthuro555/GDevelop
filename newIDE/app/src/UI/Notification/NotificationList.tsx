import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import { Notification } from '../../Utils/GDevelopServices/Notification';
// @ts-expect-error - TS6142 - Module '../List' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/List.tsx', but '--jsx' is not set.
import { List, ListItem } from '../List';
// @ts-expect-error - TS6142 - Module './NotificationListItem' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Notification/NotificationListItem.tsx', but '--jsx' is not set.
import NotificationListItem from './NotificationListItem';
// @ts-expect-error - TS6142 - Module '../LeftLoader' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LeftLoader.tsx', but '--jsx' is not set.
import LeftLoader from '../LeftLoader';
// @ts-expect-error - TS6142 - Module '../Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../Grid';
// @ts-expect-error - TS6142 - Module '../Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../Text';
// @ts-expect-error - TS6142 - Module '../FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../FlatButton';
// @ts-expect-error - TS6142 - Module '../TextButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextButton.tsx', but '--jsx' is not set.
import TextButton from '../TextButton';
// @ts-expect-error - TS6142 - Module '../ScrollView' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ScrollView.tsx', but '--jsx' is not set.
import ScrollView from '../ScrollView';

type Props = {
  notifications: Notification[],
  onMarkAllAsRead: () => Promise<void>,
  canMarkAllAsRead: boolean,
  onMarkNotificationAsSeen: (arg1: Notification) => Promise<void>,
  onCloseNotificationList: () => void
};

const notificationsPreviewCount = 5;

const NotificationList = ({
  notifications,
  onMarkAllAsRead,
  canMarkAllAsRead,
  onMarkNotificationAsSeen,
  onCloseNotificationList,
}: Props) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [showAll, setShowAll] = React.useState<boolean>(false);

  const markAllAsRead = React.useCallback(
    async () => {
      setIsLoading(true);
      try {
        await onMarkAllAsRead();
      } catch (error: any) {
        console.error(
          'An error occurred while marking all notifications as seen:',
          error
        );
      } finally {
        setIsLoading(false);
      }
    },
    [onMarkAllAsRead]
  );

  const markNotificationAsSeen = React.useCallback(
    async (notification: Notification) => {
      try {
        await onMarkNotificationAsSeen(notification);
      } catch (error: any) {
        console.error(
          'An error occurred while marking notification as seen:',
          error
        );
      }
    },
    [onMarkNotificationAsSeen]
  );

  const notificationsToDisplay = showAll
    ? notifications
    : notifications.slice(0, notificationsPreviewCount);
  const shouldShowLoadMoreButton =
    notifications.length > notificationsPreviewCount && !showAll;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Column noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line justifyContent="space-between" alignItems="center" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Notifications</Trans>
            </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <LeftLoader isLoading={isLoading}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <FlatButton
                primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Mark all as read</Trans>}
                disabled={!canMarkAllAsRead}
                onClick={markAllAsRead}
              />
            </LeftLoader>
          </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ScrollView autoHideScrollbar>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <List>
                {notificationsToDisplay.length > 0 ? (
                  notificationsToDisplay.map(notification => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <NotificationListItem
                      key={notification.id}
                      notification={notification}
                      onCloseNotificationList={onCloseNotificationList}
                      onMarkNotificationAsSeen={() => {
                        markNotificationAsSeen(notification);
                      }}
                    />
                  ))
                ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <ListItem
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    primaryText={<Trans>You have 0 notifications.</Trans>}
                  />
                )}
              </List>
              {shouldShowLoadMoreButton && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <TextButton
                  secondary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Load more...</Trans>}
                  onClick={() => setShowAll(true)}
                />
              )}
            </Column>
          </ScrollView>
        </Column>
      )}
    </I18n>
  );
};

export default NotificationList;
