// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField from '../TextField';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../Utils/OptionalRequire'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/OptionalRequire.js' implicitly has an 'any' type.
import optionalRequire from '../../Utils/OptionalRequire';
// @ts-expect-error - TS6142 - Module '../FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../FlatButton';
const electron = optionalRequire('electron');
const remote = optionalRequire('@electron/remote');
const dialog = remote ? remote.dialog : null;

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'baseline',
  },
  button: {
    marginLeft: 10,
  },
  textField: {
    flex: 1,
  },
} as const;

type Props = {
  value: string,
  onChange: (arg1: string) => void,
  title: string,
  message: string,
  defaultPath?: string,
  fullWidth?: boolean,
  filters: Array<{
    name: string,
    extensions: Array<string>
  }>
};

const LocalFilePicker = ({
  value,
  onChange,
  title,
  message,
  defaultPath,
  fullWidth,
  filters,
}: Props) => {
  const onChooseFolder = async () => {
    if (!dialog || !electron) return;

    const browserWindow = remote.getCurrentWindow();
    const { filePath } = await dialog.showSaveDialog(browserWindow, {
      title: title,
      filters: filters,
      message: message,
      defaultPath: defaultPath,
    });
    onChange(filePath || '');
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <div
      style={{
        ...styles.container,
        width: fullWidth ? '100%' : undefined,
      }}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <TextField
        margin="dense"
        style={styles.textField}
        type="text"
        translatableHintText={t`Choose a file`}
        value={value}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
        onChange={(event, value) => onChange(value)}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        label={<Trans>Choose</Trans>}
        style={styles.button}
        onClick={onChooseFolder}
      />
    </div>
  );
};

export default LocalFilePicker;
