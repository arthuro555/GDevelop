import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import { MessageDescriptor } from '../Utils/i18n/MessageDescriptor.flow';
import GDevelopThemeContext from './Theme/GDevelopThemeContext';

// We support a subset of the props supported by Material-UI v0.x MenuItem
// They should be self descriptive - refer to Material UI docs otherwise.
type Props = {
  value: string | number | boolean,
  label: MessageDescriptor | React.ReactNode,
  disabled?: boolean,
  shouldNotTranslate?: boolean
};

/**
 * A native select option to be used with `SelectField`.
 */
const SelectOption = (props: Props) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <option
// @ts-expect-error - TS2322 - Type 'string | number | boolean' is not assignable to type 'string | number | readonly string[] | undefined'.
          value={props.value}
          disabled={props.disabled}
          style={{
            color: gdevelopTheme.text.color.primary,
            backgroundColor: gdevelopTheme.palette.canvasColor,
          }}
        >
          {props.shouldNotTranslate ? props.label : i18n._(props.label)}
        </option>
      )}
    </I18n>
  );
};

export default SelectOption;
