import React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';

// @ts-expect-error - TS6142 - Module '../AssetStore/ExtensionStore/ExtensionInstallDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ExtensionStore/ExtensionInstallDialog.tsx', but '--jsx' is not set.
import ExtensionInstallDialog from '../AssetStore/ExtensionStore/ExtensionInstallDialog';
import EventsFunctionsExtensionsContext from '../EventsFunctionsExtensionsLoader/EventsFunctionsExtensionsContext';
import { ExtensionShortHeader } from '../Utils/GDevelopServices/Extension';
import { installExtension } from '../AssetStore/ExtensionStore/InstallExtension';

type Props = {
  project: gdProject,
  onClose: () => void,
  extensionShortHeader: ExtensionShortHeader,
  extensionName: string,
  onInstallExtension: (arg1: ExtensionShortHeader) => void,
  onOpenEventsFunctionsExtension: (arg1: string) => void
};

function InstalledExtensionDetails({
  project,
  onClose,
  extensionShortHeader,
  extensionName,
  onInstallExtension,
  onOpenEventsFunctionsExtension,
}: Props) {
  const [isInstalling, setIsInstalling] = React.useState<boolean>(false);
  const eventsFunctionsExtensionsState = React.useContext(
    EventsFunctionsExtensionsContext
  );

  const installOrUpdateExtension = async (i18n: I18nType) => {
    setIsInstalling(true);
    try {
      onInstallExtension(extensionShortHeader);
      await installExtension(
        i18n,
        project,
        eventsFunctionsExtensionsState,
        extensionShortHeader
      );
    } finally {
      setIsInstalling(false);
    }
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ExtensionInstallDialog
          project={project}
          isInstalling={isInstalling}
          onClose={onClose}
          onInstall={() => installOrUpdateExtension(i18n)}
          extensionShortHeader={extensionShortHeader}
          onEdit={() => {
            onOpenEventsFunctionsExtension(extensionName);
            onClose();
          }}
        />
      )}
    </I18n>
  );
}

export default InstalledExtensionDetails;
