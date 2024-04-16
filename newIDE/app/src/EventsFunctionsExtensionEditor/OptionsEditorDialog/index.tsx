// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../../UI/HelpButton';
import EventsFunctionsExtensionsContext from '../../EventsFunctionsExtensionsLoader/EventsFunctionsExtensionsContext';
// @ts-expect-error - TS6142 - Module './ExtensionOptionsEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsFunctionsExtensionEditor/OptionsEditorDialog/ExtensionOptionsEditor.tsx', but '--jsx' is not set.
import { ExtensionOptionsEditor } from './ExtensionOptionsEditor';
// @ts-expect-error - TS6142 - Module '../../UI/Tabs' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Tabs.tsx', but '--jsx' is not set.
import { Tabs } from '../../UI/Tabs';
// @ts-expect-error - TS6142 - Module './ExtensionDependenciesEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsFunctionsExtensionEditor/OptionsEditorDialog/ExtensionDependenciesEditor.tsx', but '--jsx' is not set.
import { ExtensionDependenciesEditor } from './ExtensionDependenciesEditor';
// @ts-expect-error - TS6142 - Module './ExtensionExporterDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsFunctionsExtensionEditor/OptionsEditorDialog/ExtensionExporterDialog.tsx', but '--jsx' is not set.
import ExtensionExporterDialog from './ExtensionExporterDialog';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../../UI/Grid';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Upload'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Upload.js' implicitly has an 'any' type.
import Upload from '../../UI/CustomSvgIcons/Upload';

type TabName = 'options' | 'dependencies';

type Props = {
  eventsFunctionsExtension: gdEventsFunctionsExtension,
  onClose: () => void,
  open: boolean
};

export default function OptionsEditorDialog({
  eventsFunctionsExtension,
  onClose,
  open,
}: Props) {
  const [currentTab, setCurrentTab] = React.useState<TabName>('options');
  const [isLoading, setIsLoading] = React.useState(false);
  const [exportDialogOpen, setExportDialogOpen] = React.useState(false);

  const eventsFunctionsExtensionsState = React.useContext(
    EventsFunctionsExtensionsContext
  );
  const eventsFunctionsExtensionWriter = eventsFunctionsExtensionsState.getEventsFunctionsExtensionWriter();

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>{eventsFunctionsExtension.getName()} options</Trans>}
      secondaryActions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <HelpButton key="help" helpPagePath="/extensions/create" />,
        eventsFunctionsExtensionWriter ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            leftIcon={<Upload />}
            key="export"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Export extension</Trans>}
            onClick={() => {
              setExportDialogOpen(true);
            }}
            disabled={isLoading}
          />
        ) : null,
      ]}
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Close</Trans>}
          primary={true}
          keyboardFocused={true}
          onClick={onClose}
          disabled={isLoading}
          key={'close'}
        />,
      ]}
      open={open}
      fixedContent={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Tabs
          value={currentTab}
          onChange={setCurrentTab}
          options={[
            {
              value: 'options',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label: <Trans>Options</Trans>,
            },
            {
              value: 'dependencies',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label: <Trans>Dependencies</Trans>,
            },
          ]}
        />
      }
      cannotBeDismissed={isLoading}
      onRequestClose={isLoading ? () => {} : onClose}
    >
      {currentTab === 'options' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ExtensionOptionsEditor
            eventsFunctionsExtension={eventsFunctionsExtension}
            onLoadChange={setIsLoading}
            isLoading={isLoading}
          />
        </Line>
      )}
      {currentTab === 'dependencies' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ExtensionDependenciesEditor
            eventsFunctionsExtension={eventsFunctionsExtension}
          />
        </Line>
      )}
      {exportDialogOpen && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ExtensionExporterDialog
          eventsFunctionsExtension={eventsFunctionsExtension}
          onClose={() => setExportDialogOpen(false)}
        />
      )}
    </Dialog>
  );
}
