// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../UI/SelectOption';
import {
  enumerateObjectTypes,
  EnumeratedObjectMetadata,
} from '../ObjectsList/EnumerateObjects';

type Props = {
  project: gdProject,
  floatingLabelText?: React.ReactNode,
  value: string,
  onChange: (arg1: string) => void,
  disabled?: boolean,
  allowedObjectTypes?: Array<string> | null | undefined
};
type State = {
  objectMetadata: Array<EnumeratedObjectMetadata>
};

export default class ObjectTypeSelector extends React.Component<Props, State> {
  state = {
    objectMetadata: enumerateObjectTypes(this.props.project),
  };

  render() {
    const {
      disabled,
      value,
      onChange,
      floatingLabelText,
      allowedObjectTypes,
    } = this.props;
    const { objectMetadata } = this.state;

    const isDisabled = (type: string) => {
      if (!allowedObjectTypes) return false;

      return allowedObjectTypes.indexOf(type) === -1;
    };

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <SelectField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        floatingLabelText={floatingLabelText || <Trans>Object type</Trans>}
        value={value}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
        onChange={(e, i, value: string) => {
          onChange(value);
        }}
        disabled={disabled}
        fullWidth
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SelectOption
          value=""
          label={t`Any object`}
          disabled={isDisabled('')}
        />
        {objectMetadata.map((metadata: EnumeratedObjectMetadata) => {
          if (metadata.name === '') {
            // Base object is an "abstract" object
            return null;
          }

          return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <SelectOption
              key={metadata.name}
              value={metadata.name}
              label={metadata.fullName}
              disabled={isDisabled(metadata.name)}
            />
          );
        })}
      </SelectField>
    );
  }
}
