// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../../UI/Dialog';
import Window from '../../Utils/Window';
// @ts-expect-error - TS6142 - Module './PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from './PreferencesContext';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS6142 - Module './LanguageSelector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/LanguageSelector.tsx', but '--jsx' is not set.
import LanguageSelector from './LanguageSelector';

type Props = {
  open: boolean,
  onClose: (
    options: {
      languageDidChange: boolean
    },
  ) => void
};

const LanguageDialog = ({
  open,
  onClose,
}: Props) => {
  const { values } = React.useContext(PreferencesContext);

  const [languageDidChange, setLanguageDidChange] = React.useState<boolean>(false);

  if (!open) return null;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => {
        const isLoadingLanguage =
          i18n.language !== values.language.replace('_', '-');

        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            title={<Trans>Language</Trans>}
            actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <FlatButton
                label={
                  isLoadingLanguage ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>Loading...</Trans>
                  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>Close</Trans>
                  )
                }
                primary={false}
                onClick={() => {
                  onClose({ languageDidChange });
                }}
                disabled={isLoadingLanguage}
                key="close"
              />,
            ]}
            secondaryActions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Report a wrong translation</Trans>}
                key="report-wrong-translation"
                primary={false}
                onClick={() =>
                  Window.openExternalURL(
                    'https://github.com/4ian/GDevelop/issues/969'
                  )
                }
              />,
            ]}
            cannotBeDismissed={isLoadingLanguage}
            onRequestClose={() => onClose({ languageDidChange })}
            open={open}
            maxWidth="sm"
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <LanguageSelector
              onLanguageChanged={() => setLanguageDidChange(true)}
            />
          </Dialog>
        );
      }}
    </I18n>
  );
};
export default LanguageDialog;
