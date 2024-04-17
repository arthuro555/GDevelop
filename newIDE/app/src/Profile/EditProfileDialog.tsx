import { Trans, t } from '@lingui/macro';

import * as React from 'react';

import { I18n } from '@lingui/react';

import { I18n as I18nType } from '@lingui/core';

import FlatButton from '../UI/FlatButton';

import Dialog, { DialogPrimaryButton } from '../UI/Dialog';
import {
  EditForm,
  AuthError,
  Profile,
} from '../Utils/GDevelopServices/Authentication';
import {
  communityLinksConfig,
  donateLinkConfig,
  discordUsernameConfig,
  UsernameAvailability,
  CommunityLinkType,
} from '../Utils/GDevelopServices/User';
import {
  hasValidSubscriptionPlan,
  Subscription,
} from '../Utils/GDevelopServices/Usage';

import LeftLoader from '../UI/LeftLoader';

import { ColumnStackLayout, LineStackLayout } from '../UI/Layout';
import {
  isUsernameValid,
  UsernameField,
  usernameFormatErrorMessage,
  usernameAvailabilityErrorMessage,
} from './UsernameField';

import TextField from '../UI/TextField';

import Checkbox from '../UI/Checkbox';

import Text from '../UI/Text';

import TextButton from '../UI/TextButton';
import useAlertDialog from '../UI/Alert/useAlertDialog';

import Form from '../UI/Form';

type Props = {
  profile: Profile;
  subscription: Subscription | null | undefined;
  onClose: () => void;
  onEdit: (form: EditForm) => Promise<void>;
  onDelete: () => Promise<void>;
  actionInProgress: boolean;
  error: AuthError | null | undefined;
};

export const getUsernameErrorText = (error?: AuthError | null) => {
  if (!error) return undefined;

  if (error.code === 'auth/username-used')
    return usernameAvailabilityErrorMessage;
  if (error.code === 'auth/malformed-username')
    return usernameFormatErrorMessage;
  return undefined;
};

const CommunityLinkLine = ({
  id,
  value,
  onChange,
  disabled,
  translatableHintText,
}: {
  id: CommunityLinkType;
  value: string;
  onChange: (e: any, value: string) => void;
  disabled: boolean;
  translatableHintText?: string;
}) => {
  const config = communityLinksConfig[id];

  return (
    <LineStackLayout noMargin alignItems="center">
      {config.icon}
      <TextField
        value={value}
        fullWidth
        translatableHintText={translatableHintText}
        onChange={onChange}
        disabled={disabled}
        errorText={
// @ts-expect-error - TS2339 - Property 'getFormattingError' does not exist on type '{ readonly icon: Element; readonly getFormattingError: (value: string) => Element | undefined; readonly maxLength: 150; } | { readonly icon: Element; readonly getFormattingError: (value: string) => Element | undefined; readonly maxLength: 150; } | ... 7 more ... | { ...; }'.
          config.getFormattingError
// @ts-expect-error - TS2339 - Property 'getFormattingError' does not exist on type '{ readonly icon: Element; readonly getFormattingError: (value: string) => Element | undefined; readonly maxLength: 150; } | { readonly icon: Element; readonly getFormattingError: (value: string) => Element | undefined; readonly maxLength: 150; } | ... 7 more ... | { ...; }'.
            ? config.getFormattingError(value)
            : undefined
        }
        maxLength={config.maxLength}
        startAdornment={
          // @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          config.prefix ? <Text noMargin>{config.prefix}</Text> : undefined
        }
      />
    </LineStackLayout>
  );
};

const EditProfileDialog = ({
  profile,
  subscription,
  onClose,
  onEdit,
  onDelete,
  actionInProgress,
  error,
}: Props) => {
  const { showDeleteConfirmation, showAlert } = useAlertDialog();

  const communityLinks = profile.communityLinks || {};
  const [username, setUsername] = React.useState(profile.username || '');
  const [description, setDescription] = React.useState(
    profile.description || ''
  );
  const [donateLink, setDonateLink] = React.useState(profile.donateLink || '');
  const [discordUsername, setDiscordUsername] = React.useState(
    profile.discordUsername || ''
  );
  const [personalWebsiteLink, setPersonalWebsiteLink] = React.useState(
    communityLinks.personalWebsiteLink || ''
  );
  const [personalWebsite2Link, setPersonalWebsite2Link] = React.useState(
    communityLinks.personalWebsite2Link || ''
  );
  const [twitterUsername, setTwitterUsername] = React.useState(
    communityLinks.twitterUsername || ''
  );
  const [facebookUsername, setFacebookUsername] = React.useState(
    communityLinks.facebookUsername || ''
  );
  const [youtubeUsername, setYoutubeUsername] = React.useState(
    communityLinks.youtubeUsername || ''
  );
  const [tiktokUsername, setTiktokUsername] = React.useState(
    communityLinks.tiktokUsername || ''
  );
  const [instagramUsername, setInstagramUsername] = React.useState(
    communityLinks.instagramUsername || ''
  );
  const [redditUsername, setRedditUsername] = React.useState(
    communityLinks.redditUsername || ''
  );
  const [snapchatUsername, setSnapchatUsername] = React.useState(
    communityLinks.snapchatUsername || ''
  );
  const [discordServerLink, setDiscordServerLink] = React.useState(
    communityLinks.discordServerLink || ''
  );
  const [getGameStatsEmail, setGetGameStatsEmail] = React.useState(
    !!profile.getGameStatsEmail
  );
  const [getNewsletterEmail, setGetNewsletterEmail] = React.useState(
    !!profile.getNewsletterEmail
  );
  const [usernameAvailability, setUsernameAvailability] = React.useState<
    UsernameAvailability | null | undefined
  >(null);
  const [isValidatingUsername, setIsValidatingUsername] =
    React.useState<boolean>(false);

  const personalWebsiteError =
    communityLinksConfig.personalWebsiteLink.getFormattingError(
      personalWebsiteLink
    );
  const personalWebsite2Error =
    communityLinksConfig.personalWebsite2Link.getFormattingError(
      personalWebsite2Link
    );
  const discordServerLinkError =
    communityLinksConfig.discordServerLink.getFormattingError(
      discordServerLink
    );
  const donateLinkError = donateLinkConfig.getFormattingError(donateLink);
  const tiktokUsernameError =
    communityLinksConfig.tiktokUsername.getFormattingError(tiktokUsername);

  const hasFormattingError =
    personalWebsiteError ||
    personalWebsite2Error ||
    discordServerLinkError ||
    donateLinkError ||
    tiktokUsernameError;

  const canEdit =
    !actionInProgress &&
    isUsernameValid(username, { allowEmpty: false }) &&
    !isValidatingUsername &&
    (!usernameAvailability || usernameAvailability.isAvailable) &&
    !hasFormattingError;

  const edit = async () => {
    if (!canEdit) return;
    await onEdit({
      username,
      description,
      getGameStatsEmail,
      getNewsletterEmail,
      donateLink,
      discordUsername,
      communityLinks: {
        personalWebsiteLink,
        personalWebsite2Link,
        twitterUsername,
        facebookUsername,
        youtubeUsername,
        tiktokUsername,
        instagramUsername,
        redditUsername,
        snapchatUsername,
        discordServerLink,
      },
    });
  };

  const canDelete = !actionInProgress;

  const onDeleteAccount = React.useCallback(
    async (i18n: I18nType) => {
      if (!canDelete) return;

      if (hasValidSubscriptionPlan(subscription)) {
        await showAlert({
          title: t`You have an active subscription`,
          message: t`You can't delete your account while you have an active subscription. Please cancel your subscription first.`,
        });
        return;
      }

      const answer = await showDeleteConfirmation({
        title: t`Delete account`,
        message: t`Before you go, make sure that you've unpublished all your games on gd.games. Otherwise they will stay visible to the community. Are you sure you want to permanently delete your account? This action cannot be undone.`,
        confirmButtonLabel: t`Delete account`,
        confirmText: profile.email,
        fieldMessage: t`Type your email to confirm`,
      });
      if (!answer) return;
      await onDelete();
    },
    [
      canDelete,
      onDelete,
      profile.email,
      subscription,
      showDeleteConfirmation,
      showAlert,
    ]
  );

  const actions = [
    <FlatButton
      label={<Trans>Back</Trans>}
      disabled={actionInProgress}
      key="back"
      primary={false}
      onClick={onClose}
    />,

    <LeftLoader isLoading={actionInProgress} key="edit">
      <DialogPrimaryButton
        label={<Trans>Save</Trans>}
        primary
        disabled={!canEdit}
        onClick={edit}
      />
    </LeftLoader>,
  ];

  const secondaryActions = [
    <TextButton
      label={<Trans>Delete my account</Trans>}
      disabled={actionInProgress}
      key="delete"
      onClick={onDeleteAccount}
    />,
  ];

  return (
    <I18n>
      {({ i18n }) => (
        <Dialog
          title={<Trans>Edit your GDevelop profile</Trans>}
          actions={actions}
          secondaryActions={secondaryActions}
          maxWidth="sm"
          cannotBeDismissed={actionInProgress}
          onRequestClose={onClose}
          onApply={edit}
          open
        >
          <Form onSubmit={edit} autoComplete="on" name="editProfile">
            <ColumnStackLayout noMargin>
              <UsernameField
                initialUsername={profile.username}
                value={username}
                onChange={(e, value) => {
                  setUsername(value);
                }}
                errorText={getUsernameErrorText(error)}
                onAvailabilityChecked={setUsernameAvailability}
                onAvailabilityCheckLoading={setIsValidatingUsername}
                isValidatingUsername={isValidatingUsername}
                disabled={actionInProgress}
              />
              <TextField
                value={discordUsername}
                floatingLabelText={<Trans>Discord username</Trans>}
                fullWidth
                translatableHintText={t`Your Discord username`}
                // @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
                onChange={(e, value) => {
                  setDiscordUsername(value);
                }}
                disabled={actionInProgress}
                maxLength={discordUsernameConfig.maxLength}
                helperMarkdownText={i18n._(
                  t`Add your Discord username to get access to a dedicated channel if you have a Gold or Pro subscription! Join the [GDevelop Discord](https://discord.gg/gdevelop).`
                )}
              />
              <TextField
                value={description}
                floatingLabelText={<Trans>Bio</Trans>}
                fullWidth
                multiline
                rows={3}
                rowsMax={5}
                translatableHintText={t`What are you using GDevelop for?`}
                // @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
                onChange={(e, value) => {
                  setDescription(value);
                }}
                disabled={actionInProgress}
                floatingLabelFixed
                maxLength={10000}
              />
              <CommunityLinkLine
                id="personalWebsiteLink"
                value={personalWebsiteLink}
// @ts-expect-error - TS2322 - Type 'MessageDescriptor' is not assignable to type 'string'.
                translatableHintText={t`Personal website, itch.io page, etc.`}
                onChange={(e, value) => {
                  setPersonalWebsiteLink(value);
                }}
                disabled={actionInProgress}
              />
              <CommunityLinkLine
                id="personalWebsite2Link"
                value={personalWebsite2Link}
// @ts-expect-error - TS2322 - Type 'MessageDescriptor' is not assignable to type 'string'.
                translatableHintText={t`Another personal website, newgrounds.com page, etc.`}
                onChange={(e, value) => {
                  setPersonalWebsite2Link(value);
                }}
                disabled={actionInProgress}
              />
              <CommunityLinkLine
                id="twitterUsername"
                value={twitterUsername}
// @ts-expect-error - TS2322 - Type 'MessageDescriptor' is not assignable to type 'string'.
                translatableHintText={t`username`}
                onChange={(e, value) => {
                  setTwitterUsername(value);
                }}
                disabled={actionInProgress}
              />
              <CommunityLinkLine
                id="facebookUsername"
                value={facebookUsername}
// @ts-expect-error - TS2322 - Type 'MessageDescriptor' is not assignable to type 'string'.
                translatableHintText={t`username`}
                onChange={(e, value) => {
                  setFacebookUsername(value);
                }}
                disabled={actionInProgress}
              />
              <CommunityLinkLine
                id="youtubeUsername"
                value={youtubeUsername}
// @ts-expect-error - TS2322 - Type 'MessageDescriptor' is not assignable to type 'string'.
                translatableHintText={t`username`}
                onChange={(e, value) => {
                  setYoutubeUsername(value);
                }}
                disabled={actionInProgress}
              />
              <CommunityLinkLine
                id="tiktokUsername"
                value={tiktokUsername}
// @ts-expect-error - TS2322 - Type 'MessageDescriptor' is not assignable to type 'string'.
                translatableHintText={t`username`}
                onChange={(e, value) => {
                  setTiktokUsername(value);
                }}
                disabled={actionInProgress}
              />
              <CommunityLinkLine
                id="instagramUsername"
                value={instagramUsername}
// @ts-expect-error - TS2322 - Type 'MessageDescriptor' is not assignable to type 'string'.
                translatableHintText={t`username`}
                onChange={(e, value) => {
                  setInstagramUsername(value);
                }}
                disabled={actionInProgress}
              />
              <CommunityLinkLine
                id="redditUsername"
                value={redditUsername}
// @ts-expect-error - TS2322 - Type 'MessageDescriptor' is not assignable to type 'string'.
                translatableHintText={t`username`}
                onChange={(e, value) => {
                  setRedditUsername(value);
                }}
                disabled={actionInProgress}
              />
              <CommunityLinkLine
                id="snapchatUsername"
                value={snapchatUsername}
// @ts-expect-error - TS2322 - Type 'MessageDescriptor' is not assignable to type 'string'.
                translatableHintText={t`username`}
                onChange={(e, value) => {
                  setSnapchatUsername(value);
                }}
                disabled={actionInProgress}
              />
              <CommunityLinkLine
                id="discordServerLink"
                value={discordServerLink}
// @ts-expect-error - TS2322 - Type 'MessageDescriptor' is not assignable to type 'string'.
                translatableHintText={t`Discord server, e.g: https://discord.gg/...`}
                onChange={(e, value) => {
                  setDiscordServerLink(value);
                }}
                disabled={actionInProgress}
              />
              <TextField
                value={donateLink}
                floatingLabelText={<Trans>Donate link</Trans>}
                fullWidth
                translatableHintText={t`Do you have a Patreon? Ko-fi? Paypal?`}
                // @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
                onChange={(e, value) => {
                  setDonateLink(value);
                }}
                disabled={actionInProgress}
                floatingLabelFixed
                helperMarkdownText={i18n._(
                  t`Add a link to your donation page. It will be displayed on your gd.games profile and game pages.`
                )}
                errorText={donateLinkError}
                maxLength={donateLinkConfig.maxLength}
              />
              <Checkbox
                label={<Trans>I want to receive the GDevelop Newsletter</Trans>}
                checked={getNewsletterEmail}
                onCheck={(e, value) => {
                  setGetNewsletterEmail(value);
                }}
                disabled={actionInProgress}
              />
              <Checkbox
                label={
                  <Trans>I want to receive weekly stats about my games</Trans>
                }
                checked={getGameStatsEmail}
                onCheck={(e, value) => {
                  setGetGameStatsEmail(value);
                }}
                disabled={actionInProgress}
              />
            </ColumnStackLayout>
          </Form>
        </Dialog>
      )}
    </I18n>
  );
};

export default EditProfileDialog;
