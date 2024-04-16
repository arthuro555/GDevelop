// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import {I18n as I18nType} from '@lingui/core';
import { showErrorBox } from '../../UI/Messages/MessageBox';
import {
  getExtension,
  ExtensionShortHeader,
  BehaviorShortHeader,
} from '../../Utils/GDevelopServices/Extension';
import { addSerializedExtensionsToProject } from '../InstallAsset';
import { EventsFunctionsExtensionsState } from '../../EventsFunctionsExtensionsLoader/EventsFunctionsExtensionsContext';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
import Window from '../../Utils/Window';

/**
 * Download and add the extension in the project.
 */
export const installExtension = async (
  i18n: I18nType,
  project: gdProject,
  eventsFunctionsExtensionsState: EventsFunctionsExtensionsState,
  extensionShortHeader: ExtensionShortHeader | BehaviorShortHeader,
): Promise<boolean> => {
  try {
    const serializedExtension = await getExtension(extensionShortHeader);
    await addSerializedExtensionsToProject(
      eventsFunctionsExtensionsState,
      project,
      [serializedExtension]
    );

    return true;
  } catch (rawError: any) {
    showErrorBox({
      message: i18n._(
        t`Unable to download and install the extension. Verify that your internet connection is working or try again later.`
      ),
      rawError,
      errorId: 'download-extension-error',
    });
    return false;
  }
};

/**
 * Open a dialog to choose an extension and install it in the project.
 */
export const importExtension = async (
  i18n: I18nType,
  eventsFunctionsExtensionsState: EventsFunctionsExtensionsState,
  project: gdProject,
): Promise<boolean> => {
  const eventsFunctionsExtensionOpener = eventsFunctionsExtensionsState.getEventsFunctionsExtensionOpener();
  if (!eventsFunctionsExtensionOpener) return false;

  try {
    const pathOrUrl = await eventsFunctionsExtensionOpener.chooseEventsFunctionExtensionFile();
    if (!pathOrUrl) return false;

    const serializedExtension = await eventsFunctionsExtensionOpener.readEventsFunctionExtensionFile(
      pathOrUrl
    );

    if (project.hasEventsFunctionsExtensionNamed(serializedExtension.name)) {
      const answer = Window.showConfirmDialog(
        i18n._(
          t`An extension with this name already exists in the project. Importing this extension will replace it: are you sure you want to continue?`
        )
      );
      if (!answer) return false;
    }

    await addSerializedExtensionsToProject(
      eventsFunctionsExtensionsState,
      project,
      [serializedExtension],
      false
    );
    return true;
  } catch (rawError: any) {
    showErrorBox({
      message: i18n._(
        t`An error happened while loading this extension. Please check that it is a proper extension file and compatible with this version of GDevelop`
      ),
      rawError,
      errorId: 'extension-loading-error',
    });
    return false;
  }
};
