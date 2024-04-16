// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../../UI/HelpButton';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
import EventsFunctionsExtensionsContext, {
  EventsFunctionsExtensionsState,
} from '../../EventsFunctionsExtensionsLoader/EventsFunctionsExtensionsContext';
import Window from '../../Utils/Window';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Upload'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Upload.js' implicitly has an 'any' type.
import Upload from '../../UI/CustomSvgIcons/Upload';

const exportExtension = async (
  eventsFunctionsExtensionsState: EventsFunctionsExtensionsState,
  eventsFunctionsExtension: gdEventsFunctionsExtension
) => {
  const eventsFunctionsExtensionWriter = eventsFunctionsExtensionsState.getEventsFunctionsExtensionWriter();
  if (!eventsFunctionsExtensionWriter) {
    // This won't happen in practice because this view can't be reached from the web-app.
    throw new Error(
      "The extension can't be exported because it's not supported by the web-app."
    );
  }
  const pathOrUrl = await eventsFunctionsExtensionWriter.chooseEventsFunctionExtensionFile(
    eventsFunctionsExtension.getName()
  );

  if (!pathOrUrl) return;

  await eventsFunctionsExtensionWriter.writeEventsFunctionsExtension(
    eventsFunctionsExtension,
    pathOrUrl
  );
};

const openGitHubIssue = () => {
  Window.openExternalURL(
    'https://github.com/GDevelopApp/GDevelop-extensions/issues/new?assignees=&labels=%E2%9C%A8+New+extension&template=new-extension.yml&title=New+extension%3A+%3Ctitle%3E'
  );
};

type Props = {
  eventsFunctionsExtension: gdEventsFunctionsExtension,
  onClose: () => void
};

const ExtensionExporterDialog = (props: Props) => {
  const eventsFunctionsExtensionsState = React.useContext(
    EventsFunctionsExtensionsContext
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>Export extension</Trans>}
      secondaryActions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <HelpButton key="help" helpPagePath="/extensions/share-extension/" />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Submit to the community</Trans>}
          onClick={openGitHubIssue}
        />,
      ]}
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Close</Trans>}
          keyboardFocused={true}
          onClick={() => {
            props.onClose();
          }}
          key="close"
        />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <DialogPrimaryButton
          key="export"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          icon={<Upload />}
          primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Export to a file</Trans>}
          onClick={() => {
            exportExtension(
              eventsFunctionsExtensionsState,
              props.eventsFunctionsExtension
            );
          }}
        />,
      ]}
      open
      onRequestClose={props.onClose}
      maxWidth="sm"
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              You can export the extension to a file to easily import it in
              another project. If your extension is providing useful and
              reusable functions or behaviors, consider sharing it with the
              GDevelop community!
            </Trans>
          </Text>
        </Line>
      </Column>
    </Dialog>
  );
};

export default ExtensionExporterDialog;
