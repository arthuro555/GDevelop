// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../UI/TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField from '../../UI/TextField';
// @ts-expect-error - TS6142 - Module '.' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectsStorage/GoogleDriveStorageProvider/index.tsx', but '--jsx' is not set.
import { GoogleDriveFileOrFolder } from '.';

type Props = {
  floatingLabelText: React.ReactNode,
  value: GoogleDriveFileOrFolder | null | undefined,
  onOpenPicker: () => void
};

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'baseline',
    width: '100%',
  },
  button: {
    marginLeft: 10,
  },
  textField: {
    flex: 1,
  },
} as const;

const GoogleDriveFileOrFolderPicker = (props: Props) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <div
      style={{
        ...styles.container,
      }}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <TextField
        style={styles.textField}
        floatingLabelText={props.floatingLabelText}
        floatingLabelFixed
        type="text"
        translatableHintText={t`Choose a file or folder`}
        value={props.value ? props.value.name : ''}
        onChange={() => {}}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        label={<Trans>Choose...</Trans>}
        primary
        style={styles.button}
        onClick={props.onOpenPicker}
      />
    </div>
  );
};

export default GoogleDriveFileOrFolderPicker;
