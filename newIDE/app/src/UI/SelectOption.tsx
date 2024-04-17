import * as React from 'react';

import { I18n } from '@lingui/react';
import { MessageDescriptor } from '../Utils/i18n/MessageDescriptor.flow';
import GDevelopThemeContext from './Theme/GDevelopThemeContext';

// We support a subset of the props supported by Material-UI v0.x MenuItem
// They should be self descriptive - refer to Material UI docs otherwise.
type Props = {
  value: string | number | boolean;
  label: MessageDescriptor | React.ReactNode;
  disabled?: boolean;
  shouldNotTranslate?: boolean;
};

/**
 * A native select option to be used with `SelectField`.
 */
const SelectOption = (props: Props) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);

  return (
    <I18n>
      {({ i18n }) => (
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
