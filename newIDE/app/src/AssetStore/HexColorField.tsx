import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField from '../UI/TextField';
// @ts-expect-error - TS6142 - Module '../UI/ColorField/ColorPicker' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ColorField/ColorPicker.tsx', but '--jsx' is not set.
import ColorPicker, { ColorResult } from '../UI/ColorField/ColorPicker';
import {
  RGBColor,
  hexToRGBColor,
  rgbColorToHex,
  rgbToHexNumber,
} from '../Utils/ColorTransformer';

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
  pickerNoLabel: {
    position: 'absolute',
    right: '8px',
    top: '8px',
  },
} as const;

type Props = {
  fullWidth?: boolean,
  disableAlpha?: boolean,
  id?: string,
  floatingLabelText?: string | React.ReactNode,
  helperMarkdownText?: string | null | undefined,
  onChange: (arg1: RGBColor | null) => void,
  color: RGBColor | null
};

const hexToNullableRGBColor = (color: string): RGBColor | null => {
  return /^#{0,1}[0-9a-fA-F]{6}$/.test(color) ? hexToRGBColor(color) : null;
};

const areSameColor = (color1: RGBColor | null, color2: RGBColor | null): boolean => {
  return (
    (color1 && rgbToHexNumber(color1.r, color1.g, color1.b)) !==
    (color2 && rgbToHexNumber(color2.r, color2.g, color2.b))
  );
};

/**
 * Very similar to ColorField but it uses a #123456 format.
 */
export const HexColorField = ({
  fullWidth,
  disableAlpha,
  id,
  floatingLabelText,
  helperMarkdownText,
  onChange,
  color,
}: Props) => {
  const [colorString, setColorString] = React.useState<string>(color ? rgbColorToHex(color.r, color.g, color.b) : '');

  // It keeps the inputted text if the color has not changed.
  if (areSameColor(color, hexToNullableRGBColor(colorString))) {
    setColorString(color ? rgbColorToHex(color.r, color.g, color.b) : '');
  }

  const handleTextChange = (newStringColor: string) => {
    const oldColor = hexToNullableRGBColor(colorString);
    const newColor = hexToNullableRGBColor(newStringColor);
    setColorString(newStringColor);
    if (newColor !== oldColor) {
      onChange(newColor);
    }
  };

  const handlePickerChange = (color: ColorResult) => {
    setColorString(rgbColorToHex(color.rgb.r, color.rgb.g, color.rgb.b));
    onChange(color.rgb);
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
        id={id}
        fullWidth={disableAlpha}
        floatingLabelText={floatingLabelText}
        floatingLabelFixed
        helperMarkdownText={helperMarkdownText}
        type="text"
        hintText={'#ff8844'}
        value={colorString}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
        onChange={event => handleTextChange(event.target.value)}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div style={floatingLabelText ? styles.picker : styles.pickerNoLabel}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ColorPicker
          disableAlpha={true}
          onChangeComplete={handlePickerChange}
          color={hexToNullableRGBColor(colorString)}
        />
      </div>
    </div>
  );
};
