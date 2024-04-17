import { Trans, t } from '@lingui/macro';
import * as React from 'react';

import TextField, { TextFieldInterface } from '../TextField';

import ColorPicker, { ColorResult } from './ColorPicker';
import {
  rgbStringAndAlphaToRGBColor,
  rgbColorToRGBString,
} from '../../Utils/ColorTransformer';

const styles = {
  container: {
    position: 'relative',
    display: 'inline-block',
  },
  picker: {
    position: 'absolute',
    right: '8px',
    top: '19px',
  },
} as const;

type Props = {
  fullWidth?: boolean;
  disableAlpha?: boolean;
  id?: string;
  floatingLabelText?: string | React.ReactNode;
  helperMarkdownText?: string | null | undefined;
  onChange: (arg1: string, arg2?: number | null | undefined) => void;
  color: string;
  alpha?: number;
  disabled?: boolean;
};

const ColorField = ({
  fullWidth,
  disableAlpha,
  id,
  floatingLabelText,
  helperMarkdownText,
  onChange,
  color,
  alpha,
  disabled,
}: Props) => {
  const [colorValue, setColorValue] = React.useState<string>(color);
  // alpha can be equal to 0, so we have to check if it is not undefined
  const [alphaValue, setAlphaValue] = React.useState<number>(
    !disableAlpha && alpha !== undefined ? alpha : 1
  );
  const textFieldRef = React.useRef<TextFieldInterface | null | undefined>(
    null
  );

  const handleChange = (newColor: string, newAlpha: number) => {
    setColorValue(newColor);
    setAlphaValue(newAlpha);
  };

  const handleBlur = () => {
    // change alpha value to be within allowed limits (0-1)
    // @ts-expect-error - TS2345 - Argument of type 'number' is not assignable to parameter of type 'string'.
    let newAlpha = parseFloat(alphaValue);
    if (newAlpha < 0) newAlpha = 0;
    if (newAlpha > 1) newAlpha = 1;
    setAlphaValue(newAlpha);
    onChange(colorValue, newAlpha);
  };

  const handlePickerChange = (color: ColorResult) => {
    const rgbString = rgbColorToRGBString(color.rgb);
    const newAlpha = disableAlpha ? 1 : color.rgb.a;
    setColorValue(rgbString);
    if (newAlpha) setAlphaValue(newAlpha);
    onChange(rgbString, newAlpha);
  };

  return (
    <div
      style={{
        ...styles.container,
        width: fullWidth ? '100%' : undefined,
      }}
    >
      <TextField
        id={id}
        fullWidth={disableAlpha}
        style={!disableAlpha ? { width: '70%' } : undefined}
        floatingLabelText={floatingLabelText}
        floatingLabelFixed={!disabled}
        helperMarkdownText={helperMarkdownText}
        type="text"
        translatableHintText={disabled ? null : t`R;G;B, like 100;200;180`}
        value={colorValue}
        // @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
        onChange={(event) => handleChange(event.target.value, alphaValue)}
        onBlur={handleBlur}
        ref={textFieldRef}
        disabled={disabled}
      />
      {!disableAlpha && (
        <TextField
          id={`${id || ''}-alpha`}
          floatingLabelText={<Trans>Alpha</Trans>}
          floatingLabelFixed
          style={{ width: '30%' }}
          translatableHintText={t`Number between 0 and 1`}
          value={alphaValue.toString()}
          onChange={(event, newAlphaValue) =>
            handleChange(colorValue, parseFloat(newAlphaValue))
          }
          onBlur={handleBlur}
          ref={textFieldRef}
          type="number"
          step={0.1}
          disabled={disabled}
        />
      )}
      <div style={styles.picker}>
        <ColorPicker
          disableAlpha={disableAlpha}
          onChangeComplete={handlePickerChange}
          color={rgbStringAndAlphaToRGBColor(colorValue, alphaValue)}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default ColorField;
