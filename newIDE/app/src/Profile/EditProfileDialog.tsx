// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans, t} from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
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
// @ts-expect-error - TS6142 - Module '../Utils/GDevelopServices/User' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/User.tsx', but '--jsx' is not set.
} from '../Utils/GDevelopServices/User';
import {
  hasValidSubscriptionPlan,
  Subscription,
} from '../Utils/GDevelopServices/Usage';
// @ts-expect-error - TS6142 - Module '../UI/LeftLoader' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LeftLoader.tsx', but '--jsx' is not set.
import LeftLoader from '../UI/LeftLoader';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, LineStackLayout } from '../UI/Layout';
import {
  isUsernameValid,
  UsernameField,
  usernameFormatErrorMessage,
  usernameAvailabilityErrorMessage,
// @ts-expect-error - TS6142 - Module './UsernameField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/UsernameField.tsx', but '--jsx' is not set.
} from './UsernameField';
// @ts-expect-error - TS6142 - Module '../UI/TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField from '../UI/TextField';
// @ts-expect-error - TS6142 - Module '../UI/Checkbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Checkbox.tsx', but '--jsx' is not set.
import Checkbox from '../UI/Checkbox';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module '../UI/TextButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextButton.tsx', but '--jsx' is not set.
import TextButton from '../UI/TextButton';
import useAlertDialog from '../UI/Alert/useAlertDialog';
// @ts-expect-error - TS6142 - Module '../UI/Form' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Form.tsx', but '--jsx' is not set.
import Form from '../UI/Form';

type Props = {
  profile: Profile,
  subscription: Subscription | null | undefined,
  onClose: () => void,
  onEdit: (form: EditForm) => Promise<void>,
  onDelete: () => Promise<void>,
  actionInProgress: boolean,
  error: AuthError | null | undefined
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
  id: CommunityLinkType,
  value: string,
  onChange: (e: any, value: string) => void,
  disabled: boolean,
  translatableHintText?: string
}) => {
  const config = communityLinksConfig[id];

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <LineStackLayout noMargin alignItems="center">
      {config.icon}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <TextField
        value={value}
        fullWidth
        translatableHintText={translatableHintText}
        onChange={onChange}
        disabled={disabled}
        errorText={
          config.getFormattingError
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
// @ts-expect-error - TS2339 - Property 'showDeleteConfirmation' does not exist on type 'void'. | TS2339 - Property 'showAlert' does not exist on type 'void'.
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
  const [
    usernameAvailability,
    setUsernameAvailability,
  ] = React.useState<UsernameAvailability | null | undefined>(null);
  const [
    isValidatingUsername,
    setIsValidatingUsername,
  ] = React.useState<boolean>(false);

  const personalWebsiteError = communityLinksConfig.personalWebsiteLink.getFormattingError(
    personalWebsiteLink
  );
  const personalWebsite2Error = communityLinksConfig.personalWebsite2Link.getFormattingError(
    personalWebsite2Link
  );
  const discordServerLinkError = communityLinksConfig.discordServerLink.getFormattingError(
    discordServerLink
  );
  const donateLinkError = donateLinkConfig.getFormattingError(donateLink);
  const tiktokUsernameError = communityLinksConfig.tiktokUsername.getFormattingError(
    tiktokUsername
  );

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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      label={<Trans>Back</Trans>}
      disabled={actionInProgress}
      key="back"
      primary={false}
      onClick={onClose}
    />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <LeftLoader isLoading={actionInProgress} key="edit">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <DialogPrimaryButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        label={<Trans>Save</Trans>}
        primary
        disabled={!canEdit}
        onClick={edit}
      />
    </LeftLoader>,
  ];

  const secondaryActions = [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <TextButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      label={<Trans>Delete my account</Trans>}
      disabled={actionInProgress}
      key="delete"
      onClick={onDeleteAccount}
    />,
  ];

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          title={<Trans>Edit your GDevelop profile</Trans>}
          actions={actions}
          secondaryActions={secondaryActions}
          maxWidth="sm"
          cannotBeDismissed={actionInProgress}
          onRequestClose={onClose}
          onApply={edit}
          open
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Form onSubmit={edit} autoComplete="on" name="editProfile">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <UsernameField
                initialUsername={profile.username}
                value={username}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
                onChange={(e, value) => {
                  setUsername(value);
                }}
                errorText={getUsernameErrorText(error)}
                onAvailabilityChecked={setUsernameAvailability}
                onAvailabilityCheckLoading={setIsValidatingUsername}
                isValidatingUsername={isValidatingUsername}
                disabled={actionInProgress}
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <TextField
                value={discordUsername}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
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
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <TextField
                value={description}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
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
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <CommunityLinkLine
                id="personalWebsiteLink"
                value={personalWebsiteLink}
                translatableHintText={t`Personal website, itch.io page, etc.`}
                onChange={(e, value) => {
                  setPersonalWebsiteLink(value);
                }}
                disabled={actionInProgress}
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <CommunityLinkLine
                id="personalWebsite2Link"
                value={personalWebsite2Link}
                translatableHintText={t`Another personal website, newgrounds.com page, etc.`}
                onChange={(e, value) => {
                  setPersonalWebsite2Link(value);
                }}
                disabled={actionInProgress}
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <CommunityLinkLine
                id="twitterUsername"
                value={twitterUsername}
                translatableHintText={t`username`}
                onChange={(e, value) => {
                  setTwitterUsername(value);
                }}
                disabled={actionInProgress}
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <CommunityLinkLine
                id="facebookUsername"
                value={facebookUsername}
                translatableHintText={t`username`}
                onChange={(e, value) => {
                  setFacebookUsername(value);
                }}
                disabled={actionInProgress}
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <CommunityLinkLine
                id="youtubeUsername"
                value={youtubeUsername}
                translatableHintText={t`username`}
                onChange={(e, value) => {
                  setYoutubeUsername(value);
                }}
                disabled={actionInProgress}
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <CommunityLinkLine
                id="tiktokUsername"
                value={tiktokUsername}
                translatableHintText={t`username`}
                onChange={(e, value) => {
                  setTiktokUsername(value);
                }}
                disabled={actionInProgress}
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <CommunityLinkLine
                id="instagramUsername"
                value={instagramUsername}
                translatableHintText={t`username`}
                onChange={(e, value) => {
                  setInstagramUsername(value);
                }}
                disabled={actionInProgress}
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <CommunityLinkLine
                id="redditUsername"
                value={redditUsername}
                translatableHintText={t`username`}
                onChange={(e, value) => {
                  setRedditUsername(value);
                }}
                disabled={actionInProgress}
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <CommunityLinkLine
                id="snapchatUsername"
                value={snapchatUsername}
                translatableHintText={t`username`}
                onChange={(e, value) => {
                  setSnapchatUsername(value);
                }}
                disabled={actionInProgress}
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <CommunityLinkLine
                id="discordServerLink"
                value={discordServerLink}
                translatableHintText={t`Discord server, e.g: https://discord.gg/...`}
                onChange={(e, value) => {
                  setDiscordServerLink(value);
                }}
                disabled={actionInProgress}
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <TextField
                value={donateLink}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
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
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>I want to receive the GDevelop Newsletter</Trans>}
                checked={getNewsletterEmail}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
                onCheck={(e, value) => {
                  setGetNewsletterEmail(value);
                }}
                disabled={actionInProgress}
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Checkbox
                label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>I want to receive weekly stats about my games</Trans>
                }
                checked={getGameStatsEmail}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
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
