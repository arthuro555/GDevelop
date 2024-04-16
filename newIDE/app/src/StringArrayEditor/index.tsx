// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ResponsiveLineStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Column } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../UI/SemiControlledTextField';
import { IconButton } from '@material-ui/core';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Add'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Add.js' implicitly has an 'any' type.
import Add from '../UI/CustomSvgIcons/Add';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Trash'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Trash.js' implicitly has an 'any' type.
import Trash from '../UI/CustomSvgIcons/Trash';

type StringArrayEditorProps = {
  extraInfo: Array<string>,
  setExtraInfo: (arg1: Array<string>) => void,
  disabled?: boolean
};

const StringArrayEditor = ({
  extraInfo,
  setExtraInfo,
  disabled,
}: StringArrayEditorProps) => {
  const updateExtraInfo = () => setExtraInfo(extraInfo);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column justifyContent="flex-end" expand noMargin>
        {extraInfo.map((item, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Line
            key={index}
            justifyContent="flex-end"
            expand
            alignItems="center"
            noMargin
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SemiControlledTextField
              disabled={disabled}
              commitOnBlur
              value={item}
// @ts-expect-error - TS7006 - Parameter 'text' implicitly has an 'any' type.
              onChange={text => {
                extraInfo[index] = text;
                updateExtraInfo();
              }}
              fullWidth
            />
{ /* @ts-expect-error - TS2769 - No overload matches this call. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <IconButton
              disabled={disabled}
              tooltip={t`Delete option`}
              onClick={() => {
                extraInfo.splice(index, 1);
                updateExtraInfo();
              }}
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trash />
            </IconButton>
          </Line>
        ))}

{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line justifyContent="flex-end" expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <RaisedButton
            disabled={disabled}
            primary
            onClick={() => {
              extraInfo.push('New Option');
              updateExtraInfo();
            }}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Add a new option</Trans>}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            icon={<Add />}
          />
        </Line>
      </Column>
    </ResponsiveLineStackLayout>
  );
};

export default StringArrayEditor;
