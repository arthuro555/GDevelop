// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/PlaceholderError' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderError.tsx', but '--jsx' is not set.
import PlaceholderError from '../UI/PlaceholderError';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../UI/PlaceholderLoader';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
import { selectMessageByLocale } from '../Utils/i18n/MessageByLocale';
import Window from '../Utils/Window';
// @ts-expect-error - TS6142 - Module './AnnouncementsFeedContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AnnouncementsFeed/AnnouncementsFeedContext.tsx', but '--jsx' is not set.
import { AnnouncementsFeedContext } from './AnnouncementsFeedContext';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from '../MainFrame/Preferences/PreferencesContext';
// @ts-expect-error - TS6142 - Module '../UI/MarkdownText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/MarkdownText.tsx', but '--jsx' is not set.
import { MarkdownText } from '../UI/MarkdownText';
// @ts-expect-error - TS6142 - Module '../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../UI/Paper';
import { getAnnouncementContent } from './AnnouncementFormatting';
// @ts-expect-error - TS6142 - Module '../MainFrame/RouterContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/RouterContext.tsx', but '--jsx' is not set.
import RouterContext from '../MainFrame/RouterContext';
import { useResponsiveWindowSize } from '../UI/Responsive/ResponsiveWindowMeasurer';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const styles = {
  markdownContainer: {
    transition: 'transform 0.3s ease-in-out',
  },
} as const;

const useStylesForClickableContainer = () =>
  makeStyles(theme =>
    createStyles({
      root: {
        '&:hover': {
          transform: 'scale(1.02)',
        },
        '&:focus': {
          transform: 'scale(1.02)',
          outline: 'none',
        },
      },
    })
  )();

type AnnouncementsFeedProps = {
  level?: 'urgent' | 'normal',
  canClose?: boolean,
  addMargins?: boolean,
  hideLoader?: boolean
};

export const AnnouncementsFeed = ({
  level,
  canClose,
  addMargins,
  hideLoader,
}: AnnouncementsFeedProps) => {
  const {
    announcements,
    error,
    fetchAnnouncementsAndPromotions,
  } = React.useContext(AnnouncementsFeedContext);
  const { values, showAnnouncement } = React.useContext(PreferencesContext);
  const { navigateToRoute } = React.useContext(RouterContext);
  const { isMobile } = useResponsiveWindowSize();

  const classesForClickableContainer = useStylesForClickableContainer();

  if (error) {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <PlaceholderError onRetry={fetchAnnouncementsAndPromotions}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Trans>
          Can't load the announcements. Verify your internet connection or try
          again later.
        </Trans>
      </PlaceholderError>
    );
  } else if (!announcements) {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    return hideLoader ? null : <PlaceholderLoader />;
  }

  const properLevelAnnouncements = level
// @ts-expect-error - TS7006 - Parameter 'announcement' implicitly has an 'any' type.
    ? announcements.filter(announcement => announcement.level === level)
    : announcements;

  const displayedAnnouncements = canClose
// @ts-expect-error - TS7006 - Parameter 'announcement' implicitly has an 'any' type.
    ? properLevelAnnouncements.filter(announcement => {
        return !values.hiddenAnnouncements[announcement.id];
      })
    : properLevelAnnouncements;

  if (!displayedAnnouncements.length) return null;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Paper square background="dark">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line noMargin={!addMargins}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ColumnStackLayout noMargin={!addMargins} expand>
{ /* @ts-expect-error - TS7006 - Parameter 'announcement' implicitly has an 'any' type. | TS7006 - Parameter 'index' implicitly has an 'any' type. */}
              {displayedAnnouncements.map((announcement, index) => {
                const { buttonLabelByLocale, buttonUrl } = announcement;
                const {
                  title,
                  desktopMessage,
                  mobileMessage,
                  desktopRouteNavigationParams,
                  mobileRouteNavigationParams,
                  isClickableContent,
                } = getAnnouncementContent(i18n, announcement);

                const onClick =
                  desktopRouteNavigationParams && !isMobile
                    ? () =>
                        navigateToRoute(
                          desktopRouteNavigationParams.route,
                          desktopRouteNavigationParams.params
                        )
                    : mobileRouteNavigationParams && isMobile
                    ? () =>
                        navigateToRoute(
                          mobileRouteNavigationParams.route,
                          mobileRouteNavigationParams.params
                        )
                    : undefined;

                return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <AlertMessage
                    kind={announcement.type}
                    renderRightButton={
                      buttonLabelByLocale && buttonUrl
                        ? () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                            <RaisedButton
                              label={selectMessageByLocale(
                                i18n,
                                buttonLabelByLocale
                              )}
                              onClick={() => Window.openExternalURL(buttonUrl)}
                            />
                          )
                        : null
                    }
                    onHide={
                      canClose
                        ? () => {
                            showAnnouncement(announcement.id, false);
                          }
                        : null
                    }
                    hideButtonSize="small"
                    key={announcement.id}
                    markdownImageOnly={!title}
                  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    {title ? <Text size="block-title">{title}</Text> : null}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <div
                      onClick={onClick}
                      className={
                        isClickableContent
                          ? classesForClickableContainer.root
                          : undefined
                      }
                      style={styles.markdownContainer}
                    >
                      {isMobile ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <MarkdownText
                          source={mobileMessage}
                          allowParagraphs={false}
                        />
                      ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <MarkdownText
                          source={desktopMessage}
                          allowParagraphs={false}
                        />
                      )}
                    </div>
                  </AlertMessage>
                );
              })}
            </ColumnStackLayout>
          </Line>
        </Paper>
      )}
    </I18n>
  );
};
