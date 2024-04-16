// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module './GoogleDriveFileOrFolderPicker' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectsStorage/GoogleDriveStorageProvider/GoogleDriveFileOrFolderPicker.tsx', but '--jsx' is not set.
import GoogleDriveFileOrFolderPicker from './GoogleDriveFileOrFolderPicker';
import {
  GoogleDriveFileOrFolder,
  GoogleDriveFilePickerOptions,
// @ts-expect-error - TS6142 - Module '.' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectsStorage/GoogleDriveStorageProvider/index.tsx', but '--jsx' is not set.
} from '.';
// @ts-expect-error - TS6142 - Module '../../UI/TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField from '../../UI/TextField';
// @ts-expect-error - TS6142 - Module '../../UI/LeftLoader' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LeftLoader.tsx', but '--jsx' is not set.
import LeftLoader from '../../UI/LeftLoader';
// @ts-expect-error - TS6142 - Module '../../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../../UI/AlertMessage';

type Props = {
  onCancel: () => void,
  onSave: (
    arg1: {
      selectedFileOrFolder: GoogleDriveFileOrFolder,
      newFileName: string
    },
  ) => Promise<void>,
  onShowFilePicker: (arg1: GoogleDriveFilePickerOptions) => Promise<GoogleDriveFileOrFolder | null | undefined>
};

/**
 * A "Save as" dialog for Google Drive, allowing to pick a file to overwrite or a folder
 * and a new filename where to save the game.
 */
const GoogleDriveSaveAsDialog = (props: Props) => {
  const [selectedFileOrFolder, setSelectedFileOrFolder] = React.useState(
    (null as GoogleDriveFileOrFolder | null | undefined)
  );
  const [newFileName, setNewFileName] = React.useState('');
  const [saving, setSaving] = React.useState(false);
  const [saveError, setSaveError] = React.useState((null as Error | null | undefined));
  const [pickerError, setPickerError] = React.useState((null as Error | null | undefined));
  const [dialogHidden, hideDialog] = React.useState(false);

  const canSave = () => {
    if (saving) return;
    if (!selectedFileOrFolder) return;

    return selectedFileOrFolder.type === 'FOLDER' ? !!newFileName : true;
  };
  const save = () => {
    if (!canSave() || !selectedFileOrFolder) return;

    setSaveError(null);
    setSaving(true);
    props
      .onSave({
        selectedFileOrFolder,
        newFileName,
      })
      .catch(error => {
        setSaveError(error);
        setSaving(false);
      });
  };
  const canCancel = () => !saving;
  const cancel = () => {
    if (!canCancel()) return;

    props.onCancel();
  };
  const openPicker = () => {
    hideDialog(true);
    setPickerError(null);
    props
      .onShowFilePicker({ selectFolderEnabled: true, showUploadView: false })
      .then(selectedFileOrFolder => {
        setSelectedFileOrFolder(selectedFileOrFolder);
        hideDialog(false);
      })
      .catch(error => {
        setPickerError(error);
        hideDialog(false);
      });
  };

  // Hide the dialog while the picker is opened, as it does not play nice with material-ui's
  // Dialog.
  if (dialogHidden) {
    return null;
  }

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>Save on Google Drive</Trans>}
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
          key="cancel"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Cancel</Trans>}
          primary={false}
          disabled={!canCancel()}
          onClick={props.onCancel}
        />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <LeftLoader key="save" isLoading={saving}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <DialogPrimaryButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Save</Trans>}
            primary
            disabled={!canSave()}
            onClick={save}
          />
        </LeftLoader>,
      ]}
      cannotBeDismissed={saving}
      onRequestClose={cancel}
      onApply={save}
      open
      maxWidth="sm"
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <GoogleDriveFileOrFolderPicker
            floatingLabelText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Google Drive folder or existing file to overwrite</Trans>
            }
            value={selectedFileOrFolder}
            onOpenPicker={openPicker}
          />
        </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line>
          {selectedFileOrFolder && selectedFileOrFolder.type === 'FOLDER' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <TextField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              floatingLabelText={<Trans>New file name</Trans>}
              floatingLabelFixed
              type="text"
              translatableHintText={t`YourGame.json`}
              value={newFileName}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type. | TS7006 - Parameter 'newFileName' implicitly has an 'any' type.
              onChange={(event, newFileName) => setNewFileName(newFileName)}
              fullWidth
            />
          ) : null}
        </Line>
        {saveError && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <AlertMessage kind="error">
              There was an error when saving your game. Verify that you have the
              rights on the folder or file that you selected and try again.
            </AlertMessage>
          </Line>
        )}
        {pickerError && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <AlertMessage kind="error">
              There was an error when selecting a file or folder from Google
              Drive. Try again later or verify that you are properly connected
              to Google Drive.
            </AlertMessage>
          </Line>
        )}
      </Column>
    </Dialog>
  );
};

export default GoogleDriveSaveAsDialog;
