// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';

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
  type: 'export' | 'create-game' | 'default-workspace',
  value: string,
  onChange: (arg1: string) => void,
  defaultPath?: string,
  fullWidth?: boolean
};

type TitleAndMessage = {
  title: string,
  message: string
};

const LocalFolderPicker = ({
  type,
  value,
  onChange,
  defaultPath,
  fullWidth,
}: Props) => {
  // Use an internal state to avoid validating the value when the user
  // is typing in the text field. This allows typing a "/" without the
  // formatting kicking in.
  const [textValue, setTextValue] = React.useState(value);
  const onChooseFolder = async ({
    title,
    message,
  }: TitleAndMessage) => {
    if (!dialog || !electron) return;

    const browserWindow = remote.getCurrentWindow();
    const { filePaths } = await dialog.showOpenDialog(browserWindow, {
      title,
      properties: ['openDirectory', 'createDirectory'],
      message,
      defaultPath: defaultPath,
    });

    if (!filePaths || !filePaths.length) return;

    const filePath = filePaths[0];
    onChange(filePath);
    setTextValue(filePath);
  };

  const onBlur = () => {
    onChange(textValue);
  };

  const getTitleAndMessage = (i18n: I18nType): TitleAndMessage => {
    if (type === 'export') {
      return {
        title: i18n._(t`Choose an export folder`),
        message: i18n._(t`Choose where to export the game`),
      };
    }
    if (type === 'default-workspace') {
      return {
        title: i18n._(t`Choose a workspace folder`),
        message: i18n._(t`Choose where to create your projects`),
      };
    }
    return {
      title: i18n._(t`Choose a folder for the new game`),
      message: i18n._(t`Choose where to create the game`),
    };
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => {
        const titleAndMessage = getTitleAndMessage(i18n);
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
              hintText={titleAndMessage.title}
              value={textValue}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
              onChange={(event, value) => setTextValue(value)}
              onBlur={onBlur}
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Choose folder</Trans>}
              style={styles.button}
              onClick={() => onChooseFolder(titleAndMessage)}
            />
          </div>
        );
      }}
    </I18n>
  );
};

export default LocalFolderPicker;
