// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t, Trans} from '@lingui/macro';
import React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
import {
  ExtensionShortHeader,
  ExtensionHeader,
  BehaviorShortHeader,
  getExtensionHeader,
  isCompatibleWithExtension,
} from '../../Utils/GDevelopServices/Extension';
// @ts-expect-error - TS6142 - Module '../../UI/LeftLoader' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LeftLoader.tsx', but '--jsx' is not set.
import LeftLoader from '../../UI/LeftLoader';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../../UI/PlaceholderLoader';
// @ts-expect-error - TS6142 - Module '../../UI/PlaceholderError' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderError.tsx', but '--jsx' is not set.
import PlaceholderError from '../../UI/PlaceholderError';
// @ts-expect-error - TS6142 - Module '../../UI/MarkdownText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/MarkdownText.tsx', but '--jsx' is not set.
import { MarkdownText } from '../../UI/MarkdownText';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../../UI/AlertMessage';
import { getIDEVersion } from '../../Version';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
import { Divider } from '@material-ui/core';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../UI/IconContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconContainer.tsx', but '--jsx' is not set.
import { IconContainer } from '../../UI/IconContainer';
// @ts-expect-error - TS6142 - Module '../../UI/User/UserPublicProfileChip' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/User/UserPublicProfileChip.tsx', but '--jsx' is not set.
import { UserPublicProfileChip } from '../../UI/User/UserPublicProfileChip';
import Window from '../../Utils/Window';
import { useExtensionUpdate } from './UseExtensionUpdates';
// @ts-expect-error - TS6142 - Module '../../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../../UI/HelpButton';
import useAlertDialog from '../../UI/Alert/useAlertDialog';

export const useOutOfDateAlertDialog = () => {
// @ts-expect-error - TS2339 - Property 'showConfirmation' does not exist on type 'void'.
  const { showConfirmation } = useAlertDialog();
  return async (): Promise<boolean> => {
    return await showConfirmation({
      title: t`Outdated extension`,
      message: t`The extension installed in this project is not up to date.
      Consider upgrading it before reporting any issue.`,
      confirmButtonLabel: t`Close`,
      dismissButtonLabel: t`Report anyway`,
    });
  };
};

const getTransformedDescription = (extensionHeader: ExtensionHeader) => {
  if (
    extensionHeader.description.substr(
      0,
      extensionHeader.shortDescription.length
    ) === extensionHeader.shortDescription
  ) {
    return extensionHeader.description.substr(
      extensionHeader.shortDescription.length
    );
  }

  return extensionHeader.description;
};

type Props = {
  extensionShortHeader: ExtensionShortHeader | BehaviorShortHeader,
  isInstalling: boolean,
  onClose: () => void,
  onInstall?: () => Promise<void>,
  onEdit?: () => void,
  project: gdProject
};

const ExtensionInstallDialog = ({
  extensionShortHeader,
  isInstalling,
  onClose,
  onInstall,
  onEdit,
  project,
}: Props) => {
  const isAlreadyInstalled: boolean = project.hasEventsFunctionsExtensionNamed(
    extensionShortHeader.name
  );

  const installedExtension = isAlreadyInstalled
    ? project.getEventsFunctionsExtension(extensionShortHeader.name)
    : null;

  const isFromStore = installedExtension
    ? installedExtension.getOriginName() === 'gdevelop-extension-store'
    : false;

  const extensionUpdate = useExtensionUpdate(project, extensionShortHeader);

  const [error, setError] = React.useState<Error | null | undefined>(null);
  const [
    extensionHeader,
    setExtensionHeader,
  ] = React.useState<ExtensionHeader | null | undefined>(null);

  const loadExtensionheader = React.useCallback(
    () => {
      setError(null);
      getExtensionHeader(extensionShortHeader).then(
        extensionHeader => {
          setExtensionHeader(extensionHeader);
        },
        error => {
          setError(error);
        }
      );
    },
    [extensionShortHeader]
  );

  React.useEffect(() => loadExtensionheader(), [loadExtensionheader]);

  const isCompatible = isCompatibleWithExtension(
    getIDEVersion(),
    extensionShortHeader
  );

  const canInstallExtension = !isInstalling && isCompatible;
  const onInstallExtension = React.useCallback(
    () => {
      if (canInstallExtension && onInstall) {
        if (isAlreadyInstalled) {
          let dialogText =
            'This extension is already in your project, this will install the latest version. You may have to do some adaptations to make sure your game still works. Do you want to continue?';
          if (!isFromStore)
            dialogText =
              'An other extension with the same name is already in your project. Installing this extension will overwrite your current extension. Do you want to continue?';

          const answer = Window.showConfirmDialog(dialogText);
          if (!answer) return;
          onInstall();
        } else {
          onInstall();
        }
      }
    },
    [onInstall, canInstallExtension, isAlreadyInstalled, isFromStore]
  );

  const showOutOfDateAlert = useOutOfDateAlertDialog();
  const onUserReportIssue = React.useCallback(
    async () => {
      if (extensionUpdate) {
        const shouldNotReportIssue = await showOutOfDateAlert();
        if (shouldNotReportIssue) {
          return;
        }
      }
      Window.openExternalURL(
        `https://github.com/GDevelopApp/GDevelop-extensions/issues/new` +
          `?assignees=&labels=&template=bug-report.md&title=[${
            extensionShortHeader.name
          }] Issue short description`
      );
    },
    [extensionShortHeader.name, extensionUpdate, showOutOfDateAlert]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
      title={extensionShortHeader.fullName}
      id="install-extension-dialog"
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
          key="close"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Back</Trans>}
          primary={false}
          onClick={onClose}
          disabled={isInstalling}
        />,
        onInstall ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <LeftLoader isLoading={isInstalling} key="install">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <DialogPrimaryButton
              id="install-extension-button"
              label={
                !isCompatible ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>Not compatible</Trans>
                ) : isAlreadyInstalled ? (
                  isFromStore ? (
                    extensionUpdate ? (
                      extensionShortHeader.tier === 'community' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <Trans>Update (could break the project)</Trans>
                      ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <Trans>Update</Trans>
                      )
                    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>Re-install</Trans>
                    )
                  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>Replace existing extension</Trans>
                  )
                ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>Install in project</Trans>
                )
              }
              primary
              onClick={onInstallExtension}
              disabled={!canInstallExtension}
            />
          </LeftLoader>
        ) : null,
      ]}
      secondaryActions={[
        onEdit ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <FlatButton
            key="edit-extension"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Open in editor</Trans>}
            onClick={onEdit}
          />
        ) : (
          undefined
        ),
        isAlreadyInstalled ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <FlatButton
            key="report-extension"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Report an issue</Trans>}
            onClick={() => onUserReportIssue()}
          />
        ) : (
          undefined
        ),
        extensionHeader && extensionHeader.helpPath ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <HelpButton
            key="help-button"
            helpPagePath={extensionHeader.helpPath}
          />
        ) : (
          undefined
        ),
      ].filter(Boolean)}
      open
      cannotBeDismissed={isInstalling}
      onRequestClose={onClose}
      onApply={onInstall ? onInstallExtension : onClose}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ColumnStackLayout expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line alignItems="flex-start" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <IconContainer
            alt={extensionShortHeader.fullName}
            src={extensionShortHeader.previewIconUrl}
            size={64}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text noMargin size="body2">
              {extensionUpdate && installedExtension ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>{`Version ${installedExtension.getVersion()} (${
                  extensionShortHeader.version
                } available)`}</Trans>
              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>{`Version ${extensionShortHeader.version}`}</Trans>
              )}
            </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <div style={{ flexWrap: 'wrap' }}>
                {extensionShortHeader.authors &&
                  extensionShortHeader.authors.map(author => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <UserPublicProfileChip
                      user={author}
                      key={author.id}
                      isClickable
                    />
                  ))}
              </div>
            </Line>
          </Column>
        </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text noMargin>
          {extensionHeader
            ? extensionHeader.shortDescription
// @ts-expect-error - TS2339 - Property 'shortDescription' does not exist on type 'ExtensionShortHeader | BehaviorShortHeader'.
            : extensionShortHeader.shortDescription || ''}
        </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Divider />
        {extensionHeader && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <MarkdownText
            source={getTransformedDescription(extensionHeader)}
            isStandaloneText
          />
        )}
        {extensionShortHeader.tier === 'community' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <AlertMessage kind="warning">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              This is an extension made by a community member — but not reviewed
              by the GDevelop extension team. As such, we can't guarantee it
              meets all the quality standards of official extensions. It could
              also not be compatible with older GDevelop versions. In case of
              doubt, contact the author to know more about what the extension
              does or inspect its content before using it.
            </Trans>
          </AlertMessage>
        )}
        {!isCompatible && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <AlertMessage kind="error">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              Unfortunately, this extension requires a newer version of GDevelop
              to work. Update GDevelop to be able to use this extension in your
              project.
            </Trans>
          </AlertMessage>
        )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        {!extensionHeader && !error && <PlaceholderLoader />}
        {!extensionHeader && error && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <PlaceholderError onRetry={loadExtensionheader}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              Can't load the extension registry. Verify your internet connection
              or try again later.
            </Trans>
          </PlaceholderError>
        )}
      </ColumnStackLayout>
    </Dialog>
  );
};

export default ExtensionInstallDialog;
