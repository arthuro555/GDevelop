import * as React from 'react';
import PreferencesContext, {
  AlertMessageIdentifier,
// @ts-expect-error - TS6142 - Module '../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
} from '../MainFrame/Preferences/PreferencesContext';
// @ts-expect-error - TS6142 - Module './AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from './AlertMessage';
import Window from '../Utils/Window';

type Props = {
  kind: 'info' | 'warning',
  children: React.ReactNode,
  identifier: AlertMessageIdentifier
};

/**
 * Show an alert that can be permanently hidden. Hidden messages
 * will be stored in preferences.
 */
const DismissableAlertMessage = ({
  identifier,
  kind,
  children,
}: Props) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <PreferencesContext.Consumer>
{ /* @ts-expect-error - TS7031 - Binding element 'values' implicitly has an 'any' type. | TS7031 - Binding element 'showAlertMessage' implicitly has an 'any' type. */}
    {({ values, showAlertMessage }) =>
      !values.hiddenAlertMessages[identifier] && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <AlertMessage
          kind={kind}
          children={children}
          onHide={() => {
            const answer = Window.showConfirmDialog(
              "Are you sure you want to hide this hint? You won't see it again, unless you re-activate it from the preferences."
            );

            if (!answer) return;

            showAlertMessage(identifier, false);
          }}
        />
      )
    }
  </PreferencesContext.Consumer>
);

export default DismissableAlertMessage;
