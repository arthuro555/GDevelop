// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '.' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ExtensionStore/index.tsx', but '--jsx' is not set.
import { ExtensionStore } from '.';
import EventsFunctionsExtensionsContext from '../../EventsFunctionsExtensionsLoader/EventsFunctionsExtensionsContext';
// @ts-expect-error - TS6142 - Module '../../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../../UI/HelpButton';
import { importExtension, installExtension } from './InstallExtension';
// @ts-expect-error - TS6142 - Module '../../UI/Messages/DismissableInfoBar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Messages/DismissableInfoBar.tsx', but '--jsx' is not set.
import DismissableInfoBar from '../../UI/Messages/DismissableInfoBar';
import { ExtensionShortHeader } from '../../Utils/GDevelopServices/Extension';
import AuthenticatedUserContext from '../../Profile/AuthenticatedUserContext';
import {
  addCreateBadgePreHookIfNotClaimed,
  TRIVIAL_FIRST_EXTENSION,
} from '../../Utils/GDevelopServices/Badge';
import { useResponsiveWindowSize } from '../../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Download'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Download.js' implicitly has an 'any' type.
import Download from '../../UI/CustomSvgIcons/Download';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Add'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Add.js' implicitly has an 'any' type.
import Add from '../../UI/CustomSvgIcons/Add';
// @ts-expect-error - TS6142 - Module '../../UI/ErrorBoundary' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ErrorBoundary.tsx', but '--jsx' is not set.
import ErrorBoundary from '../../UI/ErrorBoundary';

type Props = {
  project: gdProject,
  onClose: () => void,
  onInstallExtension: (arg1: ExtensionShortHeader) => void,
  onExtensionInstalled?: (extensionShortHeader?: ExtensionShortHeader) => void,
  onCreateNew?: () => void
};

/**
 * Allows to browse and install events based extensions.
 */
const ExtensionsSearchDialog = ({
  project,
  onClose,
  onInstallExtension,
  onExtensionInstalled,
  onCreateNew,
}: Props) => {
  const { isMobile } = useResponsiveWindowSize();
  const [isInstalling, setIsInstalling] = React.useState(false);
  const [extensionWasInstalled, setExtensionWasInstalled] = React.useState(
    false
  );
  const eventsFunctionsExtensionsState = React.useContext(
    EventsFunctionsExtensionsContext
  );
  const authenticatedUser = React.useContext(AuthenticatedUserContext);

  const installDisplayedExtension = addCreateBadgePreHookIfNotClaimed(
    authenticatedUser,
    TRIVIAL_FIRST_EXTENSION,
    installExtension
  );

  const installOrImportExtension = async (
    i18n: I18nType,
    extensionShortHeader?: ExtensionShortHeader
  ) => {
    setIsInstalling(true);
    try {
      let wasExtensionInstalledOrImported;
      if (!!extensionShortHeader) {
        onInstallExtension(extensionShortHeader);
        wasExtensionInstalledOrImported = await installDisplayedExtension(
          i18n,
          project,
          eventsFunctionsExtensionsState,
          extensionShortHeader
        );
      } else {
        wasExtensionInstalledOrImported = await importExtension(
          i18n,
          eventsFunctionsExtensionsState,
          project
        );
      }

      if (wasExtensionInstalledOrImported) {
        setExtensionWasInstalled(true);
        if (onExtensionInstalled) onExtensionInstalled();
        return true;
      }

      return false;
    } finally {
      setIsInstalling(false);
    }
  };

  const eventsFunctionsExtensionOpener = eventsFunctionsExtensionsState.getEventsFunctionsExtensionOpener();

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          title={<Trans>Search for New Extensions</Trans>}
          id="extension-search-dialog"
          fullHeight
          actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <FlatButton
              id="close-button"
              key="close"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Close</Trans>}
              primary
              onClick={onClose}
              disabled={isInstalling}
            />,
          ]}
          secondaryActions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <HelpButton key="help" helpPagePath="/extensions/search" />,
            eventsFunctionsExtensionOpener ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                leftIcon={<Download />}
                key="import"
                label={
                  isMobile ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>Import</Trans>
                  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>Import extension</Trans>
                  )
                }
                onClick={() => {
                  installOrImportExtension(i18n);
                }}
                disabled={isInstalling}
              />
            ) : null,
            onCreateNew ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <FlatButton
                key="create-new"
                onClick={onCreateNew}
                label={
                  isMobile ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>Create</Trans>
                  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>Create a new extension</Trans>
                  )
                }
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                leftIcon={<Add />}
              />
            ) : null,
          ]}
          flexBody
          open
          cannotBeDismissed={isInstalling}
          onRequestClose={onClose}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ExtensionStore
            isInstalling={isInstalling}
// @ts-expect-error - TS7006 - Parameter 'extensionShortHeader' implicitly has an 'any' type.
            onInstall={async extensionShortHeader =>
              installOrImportExtension(i18n, extensionShortHeader)
            }
            project={project}
            showOnlyWithBehaviors={false}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <DismissableInfoBar
            identifier="extension-installed-explanation"
            message={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>
                The extension was added to the project. You can now use it in
                the list of actions/conditions and, if it's a behavior, in the
                list of behaviors for an object.
              </Trans>
            }
            show={extensionWasInstalled}
          />
        </Dialog>
      )}
    </I18n>
  );
};

const ExtensionsSearchDialogWithErrorBoundary = (props: Props) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ErrorBoundary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    componentTitle={<Trans>Extensions search</Trans>}
    scope="extensions-search-dialog"
    onClose={props.onClose}
  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ExtensionsSearchDialog {...props} />
  </ErrorBoundary>
);

export default ExtensionsSearchDialogWithErrorBoundary;
