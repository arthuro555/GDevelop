import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t, Trans } from '@lingui/macro';
import TranslateIcon from '@material-ui/icons/Translate';
// @ts-expect-error - TS6142 - Module '../../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { LineStackLayout } from '../../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../../UI/User/UserChip' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/User/UserChip.tsx', but '--jsx' is not set.
import UserChip from '../../../UI/User/UserChip';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/ProjectManager'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ProjectManager.js' implicitly has an 'any' type.
import ProjectManagerIcon from '../../../UI/CustomSvgIcons/ProjectManager';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/Floppy'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Floppy.js' implicitly has an 'any' type.
import FloppyIcon from '../../../UI/CustomSvgIcons/Floppy';
import Window from '../../../Utils/Window';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../Utils/OptionalRequire'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/OptionalRequire.js' implicitly has an 'any' type.
import optionalRequire from '../../../Utils/OptionalRequire';
// @ts-expect-error - TS6142 - Module '../../../UI/TextButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextButton.tsx', but '--jsx' is not set.
import TextButton from '../../../UI/TextButton';
// @ts-expect-error - TS6142 - Module '../../../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../../../UI/IconButton';
import { isNativeMobileApp } from '../../../Utils/Platform';
// @ts-expect-error - TS6142 - Module '../../../UI/User/NotificationChip' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/User/NotificationChip.tsx', but '--jsx' is not set.
import NotificationChip from '../../../UI/User/NotificationChip';
import { useResponsiveWindowSize } from '../../../UI/Responsive/ResponsiveWindowMeasurer';
const electron = optionalRequire('electron');

type Props = {
  hasProject: boolean,
  onOpenProjectManager: () => void,
  onOpenProfile: () => void,
  onOpenLanguageDialog: () => void,
  onSave: () => Promise<void>,
  canSave: boolean
};

export const HomePageHeader = ({
  hasProject,
  onOpenProjectManager,
  onOpenProfile,
  onOpenLanguageDialog,
  onSave,
  canSave,
}: Props) => {
  const { isMobile } = useResponsiveWindowSize();

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <LineStackLayout
          justifyContent="space-between"
          alignItems="center"
          noMargin
          expand
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <IconButton
                size="small"
                id="main-toolbar-project-manager-button"
                onClick={onOpenProjectManager}
                tooltip={t`Project Manager`}
                color="default"
                disabled={!hasProject}
              >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <ProjectManagerIcon />
              </IconButton>
              {!!hasProject && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <IconButton
                  size="small"
                  id="main-toolbar-save-button"
                  onClick={onSave}
                  tooltip={t`Save project`}
                  color="default"
                  disabled={!canSave}
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <FloppyIcon />
                </IconButton>
              )}
            </Line>
          </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <LineStackLayout noMargin alignItems="center">
              {!electron && !isNativeMobileApp() && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Get the app</Trans>}
                  onClick={() =>
                    Window.openExternalURL('https://gdevelop.io/download')
                  }
                />
              )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <UserChip onOpenProfile={onOpenProfile} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <NotificationChip />
              {isMobile ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <IconButton size="small" onClick={onOpenLanguageDialog}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <TranslateIcon fontSize="small" />
                </IconButton>
              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <TextButton
                  label={i18n.language.toUpperCase()}
                  onClick={onOpenLanguageDialog}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  icon={<TranslateIcon fontSize="small" />}
                />
              )}
            </LineStackLayout>
          </Column>
        </LineStackLayout>
      )}
    </I18n>
  );
};
