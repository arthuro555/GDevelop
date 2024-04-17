import * as React from 'react';

import { Trans } from '@lingui/macro';

import { t } from '@lingui/macro';
import {
  ParameterFieldProps,
  ParameterFieldInterface,
  FieldFocusFunction,
} from './ParameterFieldCommons';
import { ParameterInlineRendererProps } from './ParameterInlineRenderer.flow';

import SelectField, { SelectFieldInterface } from '../../UI/SelectField';

import SelectOption from '../../UI/SelectOption';

export default React.forwardRef<ParameterFieldInterface, ParameterFieldProps>(
  function MouseField(props: ParameterFieldProps, ref) {
    const field = React.useRef<SelectFieldInterface | null | undefined>(null);
    const focus: FieldFocusFunction = (options) => {
      if (field.current) field.current.focus(options);
    };

    React.useImperativeHandle(ref, () => ({
      focus,
    }));

    const { parameterMetadata, value } = props;
    const description = parameterMetadata
      ? parameterMetadata.getDescription()
      : undefined;

    return (
      <SelectField
        margin={props.isInline ? 'none' : 'dense'}
        fullWidth
        floatingLabelText={description}
        helperMarkdownText={
          parameterMetadata ? parameterMetadata.getLongDescription() : undefined
        }
        value={value}
        ref={field}
        onChange={(e, i, value) => props.onChange(value)}
        translatableHintText={t`Choose a mouse button`}
      >
        <SelectOption value="Left" label={t`Left (primary)`} />
        <SelectOption value="Right" label={t`Right (secondary)`} />
        <SelectOption
          value="Middle"
          label={t`Middle (Auxiliary button, usually the wheel button)`}
        />
        <SelectOption
          value="Back"
          label={t`Back (Additional button, typically the Browser Back button)`}
        />
        <SelectOption
          value="Forward"
          label={t`Forward (Additional button, typically the Browser Forward button)`}
        />
      </SelectField>
    );
  }
);

export const renderInlineMouse = ({
  value,
  InvalidParameterValue,
}: ParameterInlineRendererProps) => {
  return value ? (
    value
  ) : (
    <InvalidParameterValue isEmpty>
      <Trans>Choose a mouse button</Trans>
    </InvalidParameterValue>
  );
};
