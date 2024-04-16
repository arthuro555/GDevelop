import * as React from 'react';
// @ts-expect-error - TS6142 - Module './TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField from './TextField';
import {
  shouldCloseOrCancel,
  shouldValidate,
} from './KeyboardShortcuts/InteractionKeys';
import { MessageDescriptor } from '../Utils/i18n/MessageDescriptor.flow';
// @ts-expect-error - TS6142 - Module './IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from './IconButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './CustomSvgIcons/Check'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Check.js' implicitly has an 'any' type.
import CheckIcon from './CustomSvgIcons/Check';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './CustomSvgIcons/Cross'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Cross.js' implicitly has an 'any' type.
import CrossIcon from './CustomSvgIcons/Cross';

type Props = {
  value: string,
  callback: (newValue: string) => Promise<void>,
  callbackErrorText: React.ReactNode,
  emptyErrorText?: React.ReactNode,
  onCancel: () => void,
  // TextField props
  autoFocus?: 'desktop' | 'desktopAndMobileDevices',
  maxLength?: number,
  margin?: 'none' | 'dense',
  translatableHintText?: MessageDescriptor
};

const AsyncSemiControlledTextField = ({
  value,
  callback,
  callbackErrorText,
  emptyErrorText,
  onCancel,
  ...textFieldProps
}: Props) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [errorText, setErrorText] = React.useState<React.ReactNode | null | undefined>(null);
  const [newValue, setNewValue] = React.useState<string>(value);

  const onFinishEditingValue = async () => {
    const cleanedNewValue = newValue.trim();
    if (emptyErrorText && !cleanedNewValue) {
      setErrorText(emptyErrorText);
      return;
    }
    if (cleanedNewValue === value) {
      return;
    }
    setIsLoading(true);
    try {
      await callback(cleanedNewValue);
    } catch (error: any) {
      console.error(error);
      setErrorText(callbackErrorText);
    } finally {
      setIsLoading(false);
    }
  };

  const onChangeValue = React.useCallback(
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter '_value' implicitly has an 'any' type.
    (e, _value) => {
      if (errorText) {
        setErrorText(null);
      }
      setNewValue(_value);
    },
    [errorText]
  );

  const cancel = React.useCallback(
    () => {
      setNewValue(value);
      onCancel();
    },
    [value, onCancel]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <TextField
      value={newValue}
      disabled={isLoading}
      onChange={onChangeValue}
      errorText={errorText}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
      onKeyUp={event => {
        if (shouldValidate(event)) {
          onFinishEditingValue();
        } else if (shouldCloseOrCancel(event)) {
          event.stopPropagation();
          cancel();
        }
      }}
      endAdornment={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <IconButton
            edge="end"
            onClick={cancel}
            disabled={isLoading}
            size="small"
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <CrossIcon />
          </IconButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <IconButton
            edge="end"
            onClick={onFinishEditingValue}
            disabled={isLoading}
            size="small"
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <CheckIcon />
          </IconButton>
        </>
      }
      type="text"
      {...textFieldProps}
    />
  );
};

export default AsyncSemiControlledTextField;
