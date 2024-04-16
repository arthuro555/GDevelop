// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import {I18n} from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from '../MainFrame/Preferences/PreferencesContext';
// @ts-expect-error - TS6142 - Module '../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../UI/AlertMessage';
import Window from '../Utils/Window';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
import { Tutorial } from '../Utils/GDevelopServices/Tutorial';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Video'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Video.js' implicitly has an 'any' type.
import Video from '../UI/CustomSvgIcons/Video';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Book'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Book.js' implicitly has an 'any' type.
import Book from '../UI/CustomSvgIcons/Book';

type Props = {
  tutorial: Tutorial
};

/**
 * Show a link to a tutorial that can be permanently hidden. Hidden tutorials
 * will be stored in preferences.
 */
const TutorialMessage = ({
  tutorial,
}: Props) => {
  const { showTutorialHint } = React.useContext(PreferencesContext);
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <AlertMessage
          kind={'info'}
          children={tutorial.title}
          renderLeftIcon={() => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <img
              alt=""
              style={{
                width: 128,
                borderRadius: 4,
                aspectRatio: '16 / 9',
              }}
              src={tutorial.thumbnailUrl}
            />
          )}
          renderRightButton={() => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              icon={tutorial.type === 'video' ? <Video /> : <Book />}
              label={
                tutorial.type === 'video' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>Watch tutorial</Trans>
                ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>Read tutorial</Trans>
                )
              }
              onClick={() => {
                Window.openExternalURL(tutorial.link);
              }}
            />
          )}
          onHide={() => {
            showTutorialHint(tutorial.id, false);
          }}
        />
      )}
    </I18n>
  );
};

export default TutorialMessage;
