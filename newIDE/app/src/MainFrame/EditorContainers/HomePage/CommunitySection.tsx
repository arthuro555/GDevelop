import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../UI/Text';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import Window from '../../../Utils/Window';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/Discord'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Discord.js' implicitly has an 'any' type.
import Discord from '../../../UI/CustomSvgIcons/Discord';
// @ts-expect-error - TS6142 - Module '../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../../UI/Layout';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/YouTube'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/YouTube.js' implicitly has an 'any' type.
import YouTube from '../../../UI/CustomSvgIcons/YouTube';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/Messages'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Messages.js' implicitly has an 'any' type.
import Messages from '../../../UI/CustomSvgIcons/Messages';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/Reddit'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Reddit.js' implicitly has an 'any' type.
import Reddit from '../../../UI/CustomSvgIcons/Reddit';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/Twitter'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Twitter.js' implicitly has an 'any' type.
import Twitter from '../../../UI/CustomSvgIcons/Twitter';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/Facebook'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Facebook.js' implicitly has an 'any' type.
import Facebook from '../../../UI/CustomSvgIcons/Facebook';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/TikTok'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/TikTok.js' implicitly has an 'any' type.
import TikTok from '../../../UI/CustomSvgIcons/TikTok';
// @ts-expect-error - TS6142 - Module './SectionContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/SectionContainer.tsx', but '--jsx' is not set.
import SectionContainer, { SectionRow } from './SectionContainer';
// @ts-expect-error - TS6142 - Module '../../../UI/List' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/List.tsx', but '--jsx' is not set.
import { ListItem } from '../../../UI/List';
import List from '@material-ui/core/List';
// @ts-expect-error - TS6142 - Module '../../../UI/ErrorBoundary' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ErrorBoundary.tsx', but '--jsx' is not set.
import ErrorBoundary from '../../../UI/ErrorBoundary';
// @ts-expect-error - TS6142 - Module '../../../AnnouncementsFeed' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AnnouncementsFeed/index.tsx', but '--jsx' is not set.
import { AnnouncementsFeed } from '../../../AnnouncementsFeed';
// @ts-expect-error - TS6142 - Module '../../../AnnouncementsFeed/AnnouncementsFeedContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AnnouncementsFeed/AnnouncementsFeedContext.tsx', but '--jsx' is not set.
import { AnnouncementsFeedContext } from '../../../AnnouncementsFeed/AnnouncementsFeedContext';
// @ts-expect-error - TS6142 - Module '../../../Promotions/PromotionsSlideshow' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Promotions/PromotionsSlideshow.tsx', but '--jsx' is not set.
import PromotionsSlideshow from '../../../Promotions/PromotionsSlideshow';
// @ts-expect-error - TS6142 - Module './CommunitySection/UserAndGameLeaderboards' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/CommunitySection/UserAndGameLeaderboards.tsx', but '--jsx' is not set.
import { UserAndGameLeaderboards } from './CommunitySection/UserAndGameLeaderboards';

const styles = {
  list: {
    width: '100%',
  },
} as const;

const communityItems = [
  {
    onClick: () => Window.openExternalURL('https://forum.gdevelop.io'),
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <Messages fontSize="small" />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    label: <Trans>GDevelop Forums</Trans>,
  },
  {
    onClick: () =>
      Window.openExternalURL('https://www.youtube.com/c/GDevelopApp'),
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <YouTube fontSize="small" htmlColor="#FF0000" />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    label: <Trans>YouTube</Trans>,
  },
  {
    onClick: () => Window.openExternalURL('https://discord.gg/gdevelop'),
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <Discord fontSize="small" htmlColor="#5865F2" />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    label: <Trans>Discord</Trans>,
  },
  {
    onClick: () => Window.openExternalURL('https://www.reddit.com/r/gdevelop'),
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <Reddit fontSize="small" htmlColor="#FF5700" />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    label: <Trans>Reddit</Trans>,
  },
  {
    onClick: () => Window.openExternalURL('https://twitter.com/GDevelopApp'),
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <Twitter fontSize="small" htmlColor="#1DA1F2" />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    label: <Trans>Twitter</Trans>,
  },
  {
    onClick: () =>
      Window.openExternalURL('https://www.facebook.com/GDevelopApp'),
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <Facebook fontSize="small" htmlColor="#4267B2" />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    label: <Trans>Facebook</Trans>,
  },
  {
    onClick: () => Window.openExternalURL('https://www.tiktok.com/@gdevelop'),
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <TikTok fontSize="small" color="inherit" />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    label: <Trans>TikTok</Trans>,
  },
];

const CommunitySection = () => {
  const { announcements } = React.useContext(AnnouncementsFeedContext);

  const shouldDisplayAnnouncementsTitle =
    announcements && announcements.length > 0;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <SectionContainer title={<Trans>Community</Trans>} showUrgentAnnouncements>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SectionRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ColumnStackLayout noMargin expand>
          {shouldDisplayAnnouncementsTitle && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Text size="title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>News and announcements</Trans>
            </Text>
          )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <PromotionsSlideshow />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <AnnouncementsFeed canClose={false} level="normal" />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Rankings</Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <UserAndGameLeaderboards />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Join the conversation</Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <List style={styles.list}>
            {communityItems.map((item, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <ListItem
                leftIcon={item.icon}
                key={index}
                primaryText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Text noMargin size="body">
                    {item.label}
                  </Text>
                }
                onClick={item.onClick}
              />
            ))}
          </List>
        </ColumnStackLayout>
      </SectionRow>
    </SectionContainer>
  );
};

const CommunitySectionWithErrorBoundary = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ErrorBoundary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    componentTitle={<Trans>Community section</Trans>}
    scope="start-page-community"
  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <CommunitySection />
  </ErrorBoundary>
);

export default CommunitySectionWithErrorBoundary;
