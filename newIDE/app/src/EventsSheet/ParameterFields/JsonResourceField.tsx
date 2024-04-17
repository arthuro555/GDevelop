import * as React from 'react';

import { Trans } from '@lingui/macro';
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
  function JsonResourceField(props, ref) {
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
        'Missing project or resourceManagementProps for JsonResourceField'
      );
      return null;
    }

    return (
      <ResourceSelector
        margin={props.isInline ? 'none' : 'dense'}
        project={props.project}
        resourceManagementProps={props.resourceManagementProps}
        resourcesLoader={ResourcesLoader}
        resourceKind="json"
        fullWidth
        initialResourceName={props.value}
        onChange={props.onChange}
        floatingLabelText={<Trans>Choose the json file to use</Trans>}
        onRequestClose={props.onRequestClose}
        onApply={props.onApply}
// @ts-expect-error - TS2322 - Type 'MutableRefObject<ResourceSelectorInterface | null | undefined>' is not assignable to type 'Ref<ResourceSelectorInterface> | undefined'.
        ref={field}
      />
    );
  }
);
