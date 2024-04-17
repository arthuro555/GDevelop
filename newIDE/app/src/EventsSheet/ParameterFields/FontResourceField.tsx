import { Trans } from '@lingui/macro';

import React from 'react';
import ResourceSelector, {
  ResourceSelectorInterface,
} from '../../ResourcesList/ResourceSelector';
import ResourcesLoader from '../../ResourcesLoader';
import {
  ParameterFieldProps,
  ParameterFieldInterface,
  FieldFocusFunction,
} from './ParameterFieldCommons';

export default React.forwardRef<ParameterFieldInterface, ParameterFieldProps>(
  function FontResourceField(props: ParameterFieldProps, ref) {
    const field = React.useRef<ResourceSelectorInterface | null | undefined>(
      null
    );
    const focus: FieldFocusFunction = (options) => {
      if (field.current) field.current.focus(options);
    };

    React.useImperativeHandle(ref, () => ({
      focus,
    }));

    if (!props.resourceManagementProps || !props.project) {
      console.error(
        'Missing project or resourceManagementProps for FontResourceField'
      );
      return null;
    }

    return (
      <ResourceSelector
        margin={props.isInline ? 'none' : 'dense'}
        project={props.project}
        resourceManagementProps={props.resourceManagementProps}
        resourcesLoader={ResourcesLoader}
        resourceKind="font"
        fullWidth
        initialResourceName={props.value}
        onChange={props.onChange}
        floatingLabelText={<Trans>Choose the font file to use</Trans>}
        onRequestClose={props.onRequestClose}
        onApply={props.onApply}
// @ts-expect-error - TS2322 - Type 'MutableRefObject<ResourceSelectorInterface | null | undefined>' is not assignable to type 'Ref<ResourceSelectorInterface> | undefined'.
        ref={field}
      />
    );
  }
);
