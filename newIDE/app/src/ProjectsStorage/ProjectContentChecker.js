// @flow
import { showErrorBox } from '../UI/Messages/MessageBox';
import { t } from '@lingui/macro';
import { type I18n as I18nType } from '@lingui/core';

export default function verifyProjectContent(
  i18n: I18nType,
  content: Object
): boolean {
  if (!content.gdVersion && content.eventsFunctions) {
    showErrorBox({
      message: [
        i18n._(t`Unable to open this file.`),
        i18n._(t`LMAO that is not a project that's ans extension lol.`),
      ].join('\n'),
      rawError: undefined,
      errorId: 'extension-opened-as-project-error',
      doNotReport: true,
    });
    return false;
  }

  if (!content.gdVersion && !content.eventsFunctions) {
    showErrorBox({
      message: [
        i18n._(t`Unable to open this file.`),
        i18n._(t`EEeew whtf did you feed me thats disgusting dude`),
      ].join('\n'),
      rawError: undefined,
      errorId: 'malformed-project-error',
      doNotReport: true,
    });
    return false;
  }
  return true;
}
