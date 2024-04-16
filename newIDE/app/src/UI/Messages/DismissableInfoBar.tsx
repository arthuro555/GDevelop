// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import PreferencesContext, {
  AlertMessageIdentifier,
// @ts-expect-error - TS6142 - Module '../../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
} from '../../MainFrame/Preferences/PreferencesContext';
import { useScreenType } from '../Responsive/ScreenTypeMeasurer';
import GDevelopThemeContext from '../Theme/GDevelopThemeContext';
import InAppTutorialContext from '../../InAppTutorial/InAppTutorialContext';

type Props = {
  identifier: AlertMessageIdentifier,
  message: React.ReactNode,
  touchScreenMessage?: React.ReactNode,
  show: boolean
};

const DismissableInfoBar = ({
  identifier,
  show,
  touchScreenMessage,
  message,
}: Props) => {
  const { currentlyRunningInAppTutorial } = React.useContext(
    InAppTutorialContext
  );
  const preferences = React.useContext(PreferencesContext);
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const screenType = useScreenType();

  return !!currentlyRunningInAppTutorial ? null : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Snackbar
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
      open={show && !preferences.values.hiddenAlertMessages[identifier]}
      message={
        screenType === 'touch' && touchScreenMessage
          ? touchScreenMessage
          : message
      }
      action={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Button
          color={
            gdevelopTheme.palette.type === 'light' ? 'secondary' : 'primary'
          }
          size="small"
          onClick={() => {
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
            preferences.showAlertMessage(identifier, false);
          }}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>Got it</Trans>
        </Button>
      }
    />
  );
};

export default DismissableInfoBar;
