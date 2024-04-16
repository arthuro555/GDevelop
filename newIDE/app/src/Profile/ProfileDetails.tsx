// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans, t} from '@lingui/macro';

import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../UI/Grid';
import {
  ColumnStackLayout,
  LineStackLayout,
  ResponsiveLineStackLayout,
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
} from '../UI/Layout';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../UI/PlaceholderLoader';
import { getGravatarUrl } from '../UI/GravatarUrl';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS6142 - Module '../UI/PlaceholderError' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderError.tsx', but '--jsx' is not set.
import PlaceholderError from '../UI/PlaceholderError';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../Utils/GDevelopServices/Shop' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/Shop.tsx', but '--jsx' is not set.
import { PrivateAssetPackListingData } from '../Utils/GDevelopServices/Shop';
import Window from '../Utils/Window';
import { GDevelopGamesPlatform } from '../Utils/GDevelopServices/ApiConfigs';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Coffee'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Coffee.js' implicitly has an 'any' type.
import Coffee from '../UI/CustomSvgIcons/Coffee';
import { GridList } from '@material-ui/core';
import {
  useResponsiveWindowSize,
  WindowSizeType,
} from '../UI/Responsive/ResponsiveWindowMeasurer';
import { sendAssetPackOpened } from '../Utils/Analytics/EventSender';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/ShareExternal'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ShareExternal.js' implicitly has an 'any' type.
import ShareExternal from '../UI/CustomSvgIcons/ShareExternal';
// @ts-expect-error - TS6142 - Module '../UI/Link' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Link.tsx', but '--jsx' is not set.
import Link from '../UI/Link';
import {
  communityLinksConfig,
  CommunityLinks,
  syncDiscordUsername,
// @ts-expect-error - TS6142 - Module '../Utils/GDevelopServices/User' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/User.tsx', but '--jsx' is not set.
} from '../Utils/GDevelopServices/User';
// @ts-expect-error - TS6142 - Module '../AssetStore/ShopTiles' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ShopTiles.tsx', but '--jsx' is not set.
import { PrivateAssetPackTile } from '../AssetStore/ShopTiles';
import AuthenticatedUserContext from './AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../UI/IconButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Refresh'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Refresh.js' implicitly has an 'any' type.
import Refresh from '../UI/CustomSvgIcons/Refresh';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Check'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Check.js' implicitly has an 'any' type.
import Check from '../UI/CustomSvgIcons/Check';
// @ts-expect-error - TS6142 - Module '../UI/MarkdownText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/MarkdownText.tsx', but '--jsx' is not set.
import { MarkdownText } from '../UI/MarkdownText';
import useAlertDialog from '../UI/Alert/useAlertDialog';
import {
  canBenefitFromDiscordRole,
  Subscription,
} from '../Utils/GDevelopServices/Usage';
import { extractGDevelopApiErrorStatusAndCode } from '../Utils/GDevelopServices/Errors';

const getAssetPackColumnsFromWidth = (
  windowSize: WindowSizeType,
  isLandscape: boolean
) => {
  switch (windowSize) {
    case 'small':
      return isLandscape ? 4 : 1;
    case 'medium':
      return 3;
    case 'large':
    case 'xlarge':
      return 4;
    default:
      return 3;
  }
};

const styles = {
  grid: {
    margin: 0, // Remove the default margin of the grid.
    // Remove the scroll capability of the grid, the scroll view handles it.
    overflow: 'unset',
  },
} as const;

const CommunityLinksLines = ({
  isAuthenticatedUserProfile,
  communityLinks,
}: {
  isAuthenticatedUserProfile: boolean,
  communityLinks: Array<{
    url: string | null | undefined,
    icon: React.ReactNode
  }>
}) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ColumnStackLayout expand noMargin>
    {communityLinks.map(({ url, icon }, index) =>
      url ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <LineStackLayout noMargin alignItems="center" key={index}>
          {icon}
          {isAuthenticatedUserProfile ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Text noMargin>{url}</Text>
          ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Link href={url} onClick={() => Window.openExternalURL(url)}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text noMargin color="inherit">
                {url}
              </Text>
            </Link>
          )}
        </LineStackLayout>
      ) : null
    )}
  </ColumnStackLayout>
);

type DisplayedProfile = {
  id: string,
  readonly email?: string // the "+" allows handling both public and private profile,
  username: string | null | undefined,
  description: string | null | undefined,
  donateLink: string | null | undefined,
  discordUsername: string | null | undefined,
  readonly isEmailAutogenerated?: boolean // the "+" allows handling both public and private profile,
  readonly communityLinks?: CommunityLinks // the "+" allows handling both public and private profile
};

type Props = {
  profile: DisplayedProfile | null | undefined,
  subscription?: Subscription | null | undefined,
  isAuthenticatedUserProfile?: boolean,
  error?: Error | null | undefined,
  onRetry?: () => void,
  onOpenChangeEmailDialog?: () => void,
  onOpenEditProfileDialog?: () => void,
  assetPacksListingDatas?: Array<PrivateAssetPackListingData> | null | undefined,
  onAssetPackOpen?: (assetPack: PrivateAssetPackListingData) => void
};

const ProfileDetails = ({
  profile,
  subscription,
  isAuthenticatedUserProfile,
  error,
  onRetry,
  onOpenChangeEmailDialog,
  onOpenEditProfileDialog,
  assetPacksListingDatas,
  onAssetPackOpen,
}: Props) => {
  const email = profile ? profile.email : null;
  const donateLink = profile ? profile.donateLink : null;
  const discordUsername = profile ? profile.discordUsername : null;
  const communityLinks = (profile && profile.communityLinks) || {};
  const personalWebsiteLink = communityLinks
    ? communityLinks.personalWebsiteLink
    : null;
  const personalWebsite2Link = profile
    ? communityLinks.personalWebsite2Link
    : null;
  const twitterUsername = profile ? communityLinks.twitterUsername : null;
  const facebookUsername = profile ? communityLinks.facebookUsername : null;
  const youtubeUsername = profile ? communityLinks.youtubeUsername : null;
  const tiktokUsername = profile ? communityLinks.tiktokUsername : null;
  const instagramUsername = profile ? communityLinks.instagramUsername : null;
  const redditUsername = profile ? communityLinks.redditUsername : null;
  const snapchatUsername = profile ? communityLinks.snapchatUsername : null;
  const discordServerLink = profile ? communityLinks.discordServerLink : null;
  const { windowSize, isLandscape } = useResponsiveWindowSize();
  const { receivedAssetPacks } = React.useContext(AuthenticatedUserContext);
  const { getAuthorizationHeader } = React.useContext(AuthenticatedUserContext);
// @ts-expect-error - TS2339 - Property 'showAlert' does not exist on type 'void'.
  const { showAlert } = useAlertDialog();

  const [
    discordUsernameSyncStatus,
    setDiscordUsernameSyncStatus,
  ] = React.useState<null | 'syncing' | 'success'>(null);

  const onSyncDiscordUsername = React.useCallback(
    async () => {
      if (!profile) return;
      setDiscordUsernameSyncStatus('syncing');
      try {
        await syncDiscordUsername(getAuthorizationHeader, profile.id);
        setDiscordUsernameSyncStatus('success');
      } catch (error: any) {
        console.error('Error while syncing discord username:', error);
        const extractedStatusAndCode = extractGDevelopApiErrorStatusAndCode(
          error
        );
        if (
          extractedStatusAndCode &&
          extractedStatusAndCode.status === 400 &&
          extractedStatusAndCode.code ===
            'discord-role-update/discord-user-not-found'
        ) {
          showAlert({
            title: t`Discord user not found`,
            message: t`Ensure you don't have any typo in your username and that you have joined the GDevelop Discord server.`,
          });
          return;
        }
        showAlert({
          title: t`Discord username sync failed`,
          message: t`Something went wrong while syncing your Discord username. Please try again later.`,
        });
      } finally {
        // Wait a bit to avoid spam and allow showing the success icon.
        setTimeout(() => setDiscordUsernameSyncStatus(null), 3000);
      }
    },
    [getAuthorizationHeader, profile, showAlert]
  );

  const assetPackTiles = React.useMemo(
    () => {
      if (
        !onAssetPackOpen ||
        !assetPacksListingDatas ||
        !assetPacksListingDatas.length
      )
        return null;

      const privateAssetPackStandAloneTiles: Array<React.ReactNode> = [];
      const privateOwnedAssetPackStandAloneTiles: Array<React.ReactNode> = [];
      const privateAssetPackBundleTiles: Array<React.ReactNode> = [];
      const privateOwnedAssetPackBundleTiles: Array<React.ReactNode> = [];

      assetPacksListingDatas.forEach(assetPackListingData => {
        const isPackOwned =
          !!receivedAssetPacks &&
          !!receivedAssetPacks.find(
            pack => pack.id === assetPackListingData.id
          );
        const tile = (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <PrivateAssetPackTile
            assetPackListingData={assetPackListingData}
            onSelect={() => {
              sendAssetPackOpened({
                assetPackName: assetPackListingData.name,
                assetPackId: assetPackListingData.id,
                assetPackTag: null,
                assetPackKind: 'private',
                source: 'author-profile',
              });
              onAssetPackOpen(assetPackListingData);
            }}
            owned={isPackOwned}
            key={assetPackListingData.id}
          />
        );
        if (
          assetPackListingData.includedListableProductIds &&
          !!assetPackListingData.includedListableProductIds.length
        ) {
          if (isPackOwned) {
            privateOwnedAssetPackBundleTiles.push(tile);
          } else {
            privateAssetPackBundleTiles.push(tile);
          }
        } else {
          if (isPackOwned) {
            privateOwnedAssetPackStandAloneTiles.push(tile);
          } else {
            privateAssetPackStandAloneTiles.push(tile);
          }
        }
      });

      const allTiles = [
        ...privateOwnedAssetPackBundleTiles, // Display owned bundles first.
        ...privateAssetPackBundleTiles, // Then non-owned bundles.
        ...privateOwnedAssetPackStandAloneTiles, // Then owned packs.
        ...privateAssetPackStandAloneTiles, // Then non-owned packs.
      ];

      return allTiles;
    },
    [assetPacksListingDatas, onAssetPackOpen, receivedAssetPacks]
  );

  const canUserBenefitFromDiscordRole = canBenefitFromDiscordRole(subscription);

  if (error)
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <PlaceholderError onRetry={onRetry}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Trans>
          Unable to load the profile, please verify your internet connection or
          try again later.
        </Trans>
      </PlaceholderError>
    );

  if (!profile || (!isAuthenticatedUserProfile && !assetPacksListingDatas)) {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    return <PlaceholderLoader />;
  }

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Avatar src={getGravatarUrl(email || '', { size: 40 })} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ColumnStackLayout noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ResponsiveLineStackLayout justifyContent="space-between" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text
                size="block-title"
                allowBrowserAutoTranslate={!profile.username}
                style={{
                  opacity: profile.username ? 1.0 : 0.5,
                }}
              >
                {profile.username ||
                  (isAuthenticatedUserProfile
                    ? i18n._(t`Edit your profile to pick a username!`)
                    : i18n._(t`No username`))}
              </Text>
              {profile.id &&
              !isAuthenticatedUserProfile &&
              !!donateLink && ( // Only show on Public Profile.
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    label={<Trans>Buy me a coffee</Trans>}
                    primary
                    onClick={() => Window.openExternalURL(donateLink)}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    icon={<Coffee />}
                  />
                )}
            </ResponsiveLineStackLayout>
            {isAuthenticatedUserProfile && email && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text noMargin size="body-small">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>Email</Trans>
                </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text>{email}</Text>
              </Column>
            )}
            {(isAuthenticatedUserProfile || !!discordUsername) && ( // Always show on private profile.
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <LineStackLayout noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text noMargin size="body-small">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>Discord username</Trans>
                  </Text>
                  {isAuthenticatedUserProfile &&
                    canUserBenefitFromDiscordRole &&
                    !!discordUsername && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <IconButton
                        onClick={onSyncDiscordUsername}
                        disabled={discordUsernameSyncStatus !== null}
                        tooltip={t`Sync your role on GDevelop's Discord server`}
                        size="small"
                      >
                        {discordUsernameSyncStatus === 'success' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          <Check fontSize="small" />
                        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          <Refresh fontSize="small" />
                        )}
                      </IconButton>
                    )}
                </LineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text>
                  {!isAuthenticatedUserProfile ? (
                    discordUsername
                  ) : !discordUsername ? (
                    !canUserBenefitFromDiscordRole ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <MarkdownText
                        translatableSource={t`No discord username defined. Add it and get a Gold, Pro or Education subscription to claim your role on the [GDevelop Discord](https://discord.gg/gdevelop).`}
                      />
                    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <MarkdownText
                        translatableSource={t`No discord username defined. Add it to claim your role on the [GDevelop Discord](https://discord.gg/gdevelop).`}
                      />
                    )
                  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <>
                      {discordUsername}
                      {!canUserBenefitFromDiscordRole && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <>
                          {' - '}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <MarkdownText
                            translatableSource={t`Get a Gold or Pro subscription to claim your role on the [GDevelop Discord](https://discord.gg/gdevelop).`}
                          />
                        </>
                      )}
                    </>
                  )}
                </Text>
              </Column>
            )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text noMargin size="body-small">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>Bio</Trans>
              </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                {profile.description || <Trans>No bio defined.</Trans>}
              </Text>
            </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <CommunityLinksLines
              communityLinks={[
                {
                  url: personalWebsiteLink,
                  icon: communityLinksConfig.personalWebsiteLink.icon,
                },
                {
                  url: personalWebsite2Link,
                  icon: communityLinksConfig.personalWebsite2Link.icon,
                },
                {
                  url: twitterUsername
                    ? communityLinksConfig.twitterUsername.prefix +
                      twitterUsername
                    : undefined,
                  icon: communityLinksConfig.twitterUsername.icon,
                },
                {
                  url: facebookUsername
                    ? communityLinksConfig.facebookUsername.prefix +
                      facebookUsername
                    : undefined,
                  icon: communityLinksConfig.facebookUsername.icon,
                },
                {
                  url: youtubeUsername
                    ? communityLinksConfig.youtubeUsername.prefix +
                      youtubeUsername
                    : undefined,
                  icon: communityLinksConfig.youtubeUsername.icon,
                },
                {
                  url: tiktokUsername
                    ? communityLinksConfig.tiktokUsername.prefix +
                      tiktokUsername
                    : undefined,
                  icon: communityLinksConfig.tiktokUsername.icon,
                },
                {
                  url: instagramUsername
                    ? communityLinksConfig.instagramUsername.prefix +
                      instagramUsername
                    : undefined,
                  icon: communityLinksConfig.instagramUsername.icon,
                },
                {
                  url: redditUsername
                    ? communityLinksConfig.redditUsername.prefix +
                      redditUsername
                    : undefined,
                  icon: communityLinksConfig.redditUsername.icon,
                },
                {
                  url: snapchatUsername
                    ? communityLinksConfig.snapchatUsername.prefix +
                      snapchatUsername
                    : undefined,
                  icon: communityLinksConfig.snapchatUsername.icon,
                },
                {
                  url: discordServerLink,
                  icon: communityLinksConfig.discordServerLink.icon,
                },
              ]}
              isAuthenticatedUserProfile={!!isAuthenticatedUserProfile}
            />
            {isAuthenticatedUserProfile && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text noMargin size="body-small">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>Donate link</Trans>
                </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text>{donateLink || <Trans>No link defined.</Trans>}</Text>
              </Column>
            )}
            {isAuthenticatedUserProfile && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <ResponsiveLineStackLayout justifyContent="flex-start" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Edit my profile</Trans>}
                  primary
                  onClick={onOpenEditProfileDialog}
                />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Change my email</Trans>}
                  onClick={onOpenChangeEmailDialog}
                  disabled={profile.isEmailAutogenerated}
                />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Access public profile</Trans>}
                  onClick={() =>
                    Window.openExternalURL(
                      GDevelopGamesPlatform.getUserPublicProfileUrl(
                        profile.id,
                        profile.username
                      )
                    )
                  }
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  leftIcon={<ShareExternal />}
                />
              </ResponsiveLineStackLayout>
            )}
            {!isAuthenticatedUserProfile && assetPackTiles && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <ColumnStackLayout expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>Asset packs</Trans>
                  </Text>
                </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Line expand noMargin justifyContent="start">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <GridList
                    cols={getAssetPackColumnsFromWidth(windowSize, isLandscape)}
                    cellHeight="auto"
                    spacing={4}
                    style={styles.grid}
                  >
                    {assetPackTiles}
                  </GridList>
                </Line>
              </ColumnStackLayout>
            )}
          </ColumnStackLayout>
        </ResponsiveLineStackLayout>
      )}
    </I18n>
  );
};

export default ProfileDetails;
