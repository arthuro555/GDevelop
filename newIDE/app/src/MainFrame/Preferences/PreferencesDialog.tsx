// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t, Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/core';

import React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../../UI/LocalFolderPicker' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LocalFolderPicker/index.tsx', but '--jsx' is not set.
import LocalFolderPicker from '../../UI/LocalFolderPicker';
// @ts-expect-error - TS6142 - Module '../../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../../UI/SelectOption';
// @ts-expect-error - TS6142 - Module '../../UI/Toggle' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Toggle.tsx', but '--jsx' is not set.
import Toggle from '../../UI/Toggle';
// @ts-expect-error - TS6142 - Module '../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line, Spacer } from '../../UI/Grid';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/Theme/ThemeRegistry'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Theme/ThemeRegistry.js' implicitly has an 'any' type.
import { themes } from '../../UI/Theme/ThemeRegistry';
import { getAllThemes } from '../../CodeEditor/Theme';
import Window from '../../Utils/Window';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../Utils/OptionalRequire'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/OptionalRequire.js' implicitly has an 'any' type.
import optionalRequire from '../../Utils/OptionalRequire';
// @ts-expect-error - TS6142 - Module './PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from './PreferencesContext';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, ResponsiveLineStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../UI/Tabs' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Tabs.tsx', but '--jsx' is not set.
import { Tabs } from '../../UI/Tabs';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../KeyboardShortcuts/ShortcutsList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/KeyboardShortcuts/ShortcutsList.tsx', but '--jsx' is not set.
import ShortcutsList from '../../KeyboardShortcuts/ShortcutsList';
// @ts-expect-error - TS6142 - Module './LanguageSelector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/LanguageSelector.tsx', but '--jsx' is not set.
import LanguageSelector from './LanguageSelector';
// @ts-expect-error - TS6142 - Module '../../UI/Link' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Link.tsx', but '--jsx' is not set.
import Link from '../../UI/Link';
import { useResponsiveWindowSize } from '../../UI/Responsive/ResponsiveWindowMeasurer';
import { adaptAcceleratorString } from '../../UI/AcceleratorString';
import { getElectronAccelerator } from '../../KeyboardShortcuts';
import defaultShortcuts from '../../KeyboardShortcuts/DefaultShortcuts';
// @ts-expect-error - TS6142 - Module '../../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module '../../UI/ErrorBoundary' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ErrorBoundary.tsx', but '--jsx' is not set.
import ErrorBoundary from '../../UI/ErrorBoundary';
const electron = optionalRequire('electron');

type Props = {
  i18n: I18n,
  onClose: (
    options: {
      languageDidChange: boolean
    },
  ) => void
};

const PreferencesDialog = ({
  i18n,
  onClose,
}: Props) => {
  const { isMobile } = useResponsiveWindowSize();
  const [currentTab, setCurrentTab] = React.useState('preferences');
  const [languageDidChange, setLanguageDidChange] = React.useState<boolean>(false);
  const {
    values,
    setThemeName,
    setCodeEditorThemeName,
    setAutoDownloadUpdates,
    showAllAlertMessages,
    showAllTutorialHints,
    showAllAnnouncements,
    setAutoDisplayChangelog,
    setEventsSheetShowObjectThumbnails,
    setAutosaveOnPreview,
    setUseGDJSDevelopmentWatcher,
    setEventsSheetUseAssignmentOperators,
    getDefaultEditorMosaicNode,
    setDefaultEditorMosaicNode,
    setAutoOpenMostRecentProject,
    resetShortcutsToDefault,
    setShortcutForCommand,
    setIsMenuBarHiddenInPreview,
    setBackdropClickBehavior,
    setResourcesImporationBehavior,
    setIsAlwaysOnTopInPreview,
    setEventsSheetCancelInlineParameter,
    setShowCommunityExtensions,
    setShowEventBasedObjectsEditor,
    setShowDeprecatedInstructionWarning,
    setUse3DEditor,
    setNewProjectsDefaultFolder,
    setUseShortcutToClosePreviewWindow,
    setWatchProjectFolderFilesForLocalProjects,
  } = React.useContext(PreferencesContext);

  const initialUse3DEditor = React.useRef<boolean>(values.use3DEditor);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>Preferences</Trans>}
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
          key="close"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Close</Trans>}
          primary={false}
          onClick={() => onClose({ languageDidChange })}
        />,
      ]}
      onRequestClose={() => onClose({ languageDidChange })}
      open
      maxWidth="sm"
      fixedContent={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Tabs
          value={currentTab}
          onChange={setCurrentTab}
          options={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            { value: 'preferences', label: <Trans>Preferences</Trans> },
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            { value: 'shortcuts', label: <Trans>Keyboard Shortcuts</Trans> },
            ...(electron
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              ? [{ value: 'folders', label: <Trans>Folders</Trans> }]
              : []),
          ]}
          // Enforce scroll on very small screens, because the tabs have long names.
          variant={isMobile ? 'scrollable' : undefined}
        />
      }
    >
      {currentTab === 'preferences' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Language</Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <LanguageSelector
            onLanguageChanged={() => {
              setLanguageDidChange(true);
            }}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Appearance</Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SelectField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              floatingLabelText={<Trans>UI Theme</Trans>}
              value={values.themeName}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
              onChange={(e, i, value: string) => setThemeName(value)}
              fullWidth
            >
              {Object.keys(themes).map(themeName => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <SelectOption
                  value={themeName}
                  label={themeName}
                  key={themeName}
                />
              ))}
            </SelectField>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SelectField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              floatingLabelText={<Trans>Code editor Theme</Trans>}
              value={values.codeEditorThemeName}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
              onChange={(e, i, value: string) => setCodeEditorThemeName(value)}
              fullWidth
            >
              {getAllThemes().map(codeEditorTheme => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <SelectOption
                  value={codeEditorTheme.themeName}
                  label={codeEditorTheme.name}
                  key={codeEditorTheme.themeName}
                />
              ))}
            </SelectField>
          </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                You can contribute and{' '}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Link
                  href={
                    'https://github.com/4ian/GDevelop/blob/master/newIDE/README-themes.md'
                  }
                  onClick={() =>
                    Window.openExternalURL(
                      'https://github.com/4ian/GDevelop/blob/master/newIDE/README-themes.md'
                    )
                  }
                >
                  create your own themes
                </Link>
                .
              </Trans>
            </Text>
          </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Layouts</Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Reset Scene Editor layout</Trans>}
              onClick={() => setDefaultEditorMosaicNode('scene-editor', null)}
              disabled={!getDefaultEditorMosaicNode('scene-editor')}
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Reset Scene Editor (small window) layout</Trans>}
              onClick={() =>
                setDefaultEditorMosaicNode('scene-editor-small', null)
              }
              disabled={!getDefaultEditorMosaicNode('scene-editor-small')}
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Reset Debugger layout</Trans>}
              onClick={() => setDefaultEditorMosaicNode('debugger', null)}
              disabled={!getDefaultEditorMosaicNode('debugger')}
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Reset Resource Editor layout</Trans>}
              onClick={() =>
                setDefaultEditorMosaicNode('resources-editor', null)
              }
              disabled={!getDefaultEditorMosaicNode('resources-editor')}
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Reset Extension Editor layout</Trans>}
              onClick={() =>
                setDefaultEditorMosaicNode(
                  'events-functions-extension-editor',
                  null
                )
              }
              disabled={
                !getDefaultEditorMosaicNode('events-functions-extension-editor')
              }
            />
          </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Dialogs</Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SelectField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Dialog backdrop click behavior</Trans>}
            value={values.backdropClickBehavior}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
            onChange={(e, i, value: string) => setBackdropClickBehavior(value)}
            fullWidth
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SelectOption value="cancel" label={t`Cancel changes`} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SelectOption value="apply" label={t`Apply changes`} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SelectOption value="nothing" label={t`Do nothing`} />
          </SelectField>
          {!!electron && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <SelectField
              floatingLabelText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>
                  Importing resources outside from the project folder
                </Trans>
              }
              value={values.resourcesImporationBehavior}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
              onChange={(e, i, value: string) =>
                setResourcesImporationBehavior(value)
              }
              fullWidth
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <SelectOption
                value="import"
                label={t`Copy them into the project folder`}
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <SelectOption
                value="relative"
                label={t`Keep their original location`}
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <SelectOption value="ask" label={t`Ask every time`} />
            </SelectField>
          )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Updates</Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Toggle
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'check' implicitly has an 'any' type.
            onToggle={(e, check) => setAutoDownloadUpdates(check)}
            toggled={values.autoDownloadUpdates}
            labelPosition="right"
            label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Auto download and install updates (recommended)</Trans>
            }
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Toggle
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'check' implicitly has an 'any' type.
            onToggle={(e, check) => setAutoDisplayChangelog(check)}
            toggled={values.autoDisplayChangelog}
            labelPosition="right"
            label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>
                Display What's New when a new version is launched (recommended)
              </Trans>
            }
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Events Sheet</Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Toggle
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'check' implicitly has an 'any' type.
            onToggle={(e, check) => setEventsSheetShowObjectThumbnails(check)}
            toggled={values.eventsSheetShowObjectThumbnails}
            labelPosition="right"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Display object thumbnails in Events Sheets</Trans>}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Toggle
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'check' implicitly has an 'any' type.
            onToggle={(e, check) => setEventsSheetUseAssignmentOperators(check)}
            toggled={values.eventsSheetUseAssignmentOperators}
            labelPosition="right"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Display assignment operators in Events Sheets</Trans>}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SelectField
            floatingLabelText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>
                Escape key behavior when editing an parameter inline
              </Trans>
            }
            value={values.eventsSheetCancelInlineParameter}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
            onChange={(e, i, value: string) => {
              setEventsSheetCancelInlineParameter(value);
            }}
            fullWidth
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SelectOption value="cancel" label={t`Cancel changes`} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SelectOption value="apply" label={t`Apply changes`} />
          </SelectField>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Embedded help and tutorials</Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Reset hidden embedded explanations</Trans>}
                onClick={() => showAllAlertMessages()}
                disabled={!Object.keys(values.hiddenAlertMessages).length}
              />
            </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Reset hidden embedded tutorials</Trans>}
                onClick={() => showAllTutorialHints()}
                disabled={!Object.keys(values.hiddenTutorialHints).length}
              />
            </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Reset hidden announcements</Trans>}
                onClick={() => showAllAnnouncements()}
                disabled={!Object.keys(values.hiddenAnnouncements).length}
              />
            </Line>
          </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Advanced</Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Toggle
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'check' implicitly has an 'any' type.
            onToggle={(e, check) => setAutosaveOnPreview(check)}
            toggled={values.autosaveOnPreview}
            labelPosition="right"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Auto-save project on Preview</Trans>}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Toggle
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'check' implicitly has an 'any' type.
            onToggle={(e, check) => setAutoOpenMostRecentProject(check)}
            toggled={values.autoOpenMostRecentProject}
            labelPosition="right"
            label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>
                Automatically re-open the project edited during last session
              </Trans>
            }
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Toggle
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'check' implicitly has an 'any' type.
            onToggle={(e, check) => setShowCommunityExtensions(check)}
            toggled={values.showCommunityExtensions}
            labelPosition="right"
            label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>
                Show community (non reviewed) extensions in the list of
                extensions
              </Trans>
            }
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Toggle
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'check' implicitly has an 'any' type.
            onToggle={(e, check) => setShowEventBasedObjectsEditor(check)}
            toggled={values.showEventBasedObjectsEditor}
            labelPosition="right"
            label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>
                Show custom objects in the extension editor (experimental)
              </Trans>
            }
          />
          {!!electron && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Toggle
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'check' implicitly has an 'any' type.
              onToggle={(e, check) =>
                setWatchProjectFolderFilesForLocalProjects(check)
              }
              toggled={values.watchProjectFolderFilesForLocalProjects}
              labelPosition="right"
              label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>
                  Watch the project folder for file changes in order to refresh
                  the resources used in the editor (images, 3D models, fonts,
                  etc.)
                </Trans>
              }
            />
          )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Toggle
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'check' implicitly has an 'any' type.
            onToggle={(e, check) => setShowDeprecatedInstructionWarning(check)}
            toggled={values.showDeprecatedInstructionWarning}
            labelPosition="right"
            label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Show a warning on deprecated actions and conditions</Trans>
            }
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Toggle
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'check' implicitly has an 'any' type.
            onToggle={(e, check) => setUse3DEditor(check)}
            toggled={values.use3DEditor}
            labelPosition="right"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Show objects in 3D in the scene editor</Trans>}
          />
          {initialUse3DEditor.current !== values.use3DEditor && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <AlertMessage kind="info">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                For the 3D change to take effect, close and reopen all currently
                opened scenes.
              </Trans>
            </AlertMessage>
          )}
          {electron && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <ColumnStackLayout expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Toggle
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'check' implicitly has an 'any' type.
                  onToggle={(e, check) => setIsMenuBarHiddenInPreview(check)}
                  toggled={values.isMenuBarHiddenInPreview}
                  labelPosition="right"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Hide the menu bar in the preview window</Trans>}
                />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Toggle
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'check' implicitly has an 'any' type.
                  onToggle={(e, check) => setIsAlwaysOnTopInPreview(check)}
                  toggled={values.isAlwaysOnTopInPreview}
                  labelPosition="right"
                  label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>
                      Always display the preview window on top of the editor
                    </Trans>
                  }
                />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Toggle
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'check' implicitly has an 'any' type.
                  onToggle={(e, check) =>
                    setUseShortcutToClosePreviewWindow(check)
                  }
                  toggled={values.useShortcutToClosePreviewWindow}
                  labelPosition="right"
                  label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>
                      Enable "Close project" shortcut (
                      {adaptAcceleratorString(
                        getElectronAccelerator(
                          values.userShortcutMap['CLOSE_PROJECT'] ||
                            defaultShortcuts['CLOSE_PROJECT']
                        )
                      )}
                      ) to close preview window
                    </Trans>
                  }
                />
              </ColumnStackLayout>
            </>
          )}
          {Window.isDev() && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Toggle
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'check' implicitly has an 'any' type.
              onToggle={(e, check) => setUseGDJSDevelopmentWatcher(check)}
              toggled={values.useGDJSDevelopmentWatcher}
              labelPosition="right"
              label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>
                  Watch changes in game engine (GDJS) sources and auto import
                  them (dev only)
                </Trans>
              }
            />
          )}
        </ColumnStackLayout>
      )}
      {currentTab === 'shortcuts' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Line expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ShortcutsList
              i18n={i18n}
              userShortcutMap={values.userShortcutMap}
              onEdit={setShortcutForCommand}
              onReset={resetShortcutsToDefault}
            />
          </Column>
        </Line>
      )}
      {electron && currentTab === 'folders' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <LocalFolderPicker
            fullWidth
            value={values.newProjectsDefaultFolder}
            onChange={setNewProjectsDefaultFolder}
            type="default-workspace"
          />
        </ColumnStackLayout>
      )}
    </Dialog>
  );
};

const PreferencesDialogWithErrorBoundary = (props: Props) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ErrorBoundary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    componentTitle={<Trans>Preferences</Trans>}
    scope="preferences"
    onClose={() => props.onClose({ languageDidChange: false })}
  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <PreferencesDialog {...props} />
  </ErrorBoundary>
);

export default PreferencesDialogWithErrorBoundary;
