import { Trans } from '@lingui/macro';

import * as React from 'react';
import ResourceSelector, {
  ResourceSelectorInterface,
} from '../../ResourcesList/ResourceSelector';
import ResourcesLoader from '../../ResourcesLoader';
import {
  ParameterFieldProps,
  ParameterFieldInterface,
  FieldFocusFunction,
} from './ParameterFieldCommons';

const ImageResourceField = React.forwardRef<
  ParameterFieldProps,
  ParameterFieldInterface
>((props, ref) => {
  const field = React.useRef<ResourceSelectorInterface | null | undefined>(
    null
  );
  const focus: FieldFocusFunction = (options) => {
    if (field.current) field.current.focus(options);
  };
  // @ts-expect-error - TS2322 - Type '{ focus: FieldFocusFunction; }' is not assignable to type 'ParameterFieldProps'.
  React.useImperativeHandle(ref, () => ({
    focus,
  }));

  // @ts-expect-error - TS2339 - Property 'resourceManagementProps' does not exist on type 'ParameterFieldInterface'. | TS2339 - Property 'project' does not exist on type 'ParameterFieldInterface'.
  if (!props.resourceManagementProps || !props.project) {
    console.error(
      'Missing project or resourceManagementProps for ImageResourceField'
    );
    return null;
  }

  return (
    <ResourceSelector
      // @ts-expect-error - TS2339 - Property 'isInline' does not exist on type 'ParameterFieldInterface'.
      margin={props.isInline ? 'none' : 'dense'}
      // @ts-expect-error - TS2339 - Property 'project' does not exist on type 'ParameterFieldInterface'.
      project={props.project}
      // @ts-expect-error - TS2339 - Property 'resourceManagementProps' does not exist on type 'ParameterFieldInterface'.
      resourceManagementProps={props.resourceManagementProps}
      resourcesLoader={ResourcesLoader}
      resourceKind="image"
      fullWidth
      // @ts-expect-error - TS2339 - Property 'value' does not exist on type 'ParameterFieldInterface'.
      initialResourceName={props.value}
      // @ts-expect-error - TS2339 - Property 'onChange' does not exist on type 'ParameterFieldInterface'.
      onChange={props.onChange}
      floatingLabelText={<Trans>Choose the image file to use</Trans>}
      // @ts-expect-error - TS2339 - Property 'onRequestClose' does not exist on type 'ParameterFieldInterface'.
      onRequestClose={props.onRequestClose}
      // @ts-expect-error - TS2339 - Property 'onApply' does not exist on type 'ParameterFieldInterface'.
      onApply={props.onApply}
// @ts-expect-error - TS2322 - Type 'MutableRefObject<ResourceSelectorInterface | null | undefined>' is not assignable to type 'Ref<ResourceSelectorInterface> | undefined'.
      ref={field}
    />
  );
});

export default ImageResourceField;
