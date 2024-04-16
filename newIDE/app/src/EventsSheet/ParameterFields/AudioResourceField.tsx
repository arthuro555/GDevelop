import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import ResourceSelector, {
  ResourceSelectorInterface,
// @ts-expect-error - TS6142 - Module '../../ResourcesList/ResourceSelector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/ResourceSelector.tsx', but '--jsx' is not set.
} from '../../ResourcesList/ResourceSelector';
import ResourcesLoader from '../../ResourcesLoader';
import {
  ParameterFieldProps,
  ParameterFieldInterface,
  FieldFocusFunction,
} from './ParameterFieldCommons';

export default React.forwardRef<ParameterFieldProps, ParameterFieldInterface>(function AudioResourceField(props, ref) {
  const field = React.useRef<ResourceSelectorInterface | null | undefined>(null);
  const focus: FieldFocusFunction = options => {
    if (field.current) field.current.focus(options);
  };
// @ts-expect-error - TS2322 - Type '{ focus: FieldFocusFunction; }' is not assignable to type 'ParameterFieldProps'.
  React.useImperativeHandle(ref, () => ({
    focus,
  }));

// @ts-expect-error - TS2339 - Property 'resourceManagementProps' does not exist on type 'ParameterFieldInterface'. | TS2339 - Property 'project' does not exist on type 'ParameterFieldInterface'.
  if (!props.resourceManagementProps || !props.project) {
    console.error(
      'Missing project or resourceManagementProps for AudioResourceField'
    );
    return null;
  }

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ResourceSelector
// @ts-expect-error - TS2339 - Property 'isInline' does not exist on type 'ParameterFieldInterface'.
      margin={props.isInline ? 'none' : 'dense'}
// @ts-expect-error - TS2339 - Property 'project' does not exist on type 'ParameterFieldInterface'.
      project={props.project}
// @ts-expect-error - TS2339 - Property 'resourceManagementProps' does not exist on type 'ParameterFieldInterface'.
      resourceManagementProps={props.resourceManagementProps}
      resourcesLoader={ResourcesLoader}
      resourceKind="audio"
      fullWidth
// @ts-expect-error - TS2339 - Property 'value' does not exist on type 'ParameterFieldInterface'.
      initialResourceName={props.value}
// @ts-expect-error - TS2339 - Property 'onChange' does not exist on type 'ParameterFieldInterface'.
      onChange={props.onChange}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      floatingLabelText={<Trans>Choose the audio file to use</Trans>}
// @ts-expect-error - TS2339 - Property 'onRequestClose' does not exist on type 'ParameterFieldInterface'.
      onRequestClose={props.onRequestClose}
// @ts-expect-error - TS2339 - Property 'onApply' does not exist on type 'ParameterFieldInterface'.
      onApply={props.onApply}
      ref={field}
      id={
// @ts-expect-error - TS2339 - Property 'parameterIndex' does not exist on type 'ParameterFieldInterface'.
        props.parameterIndex !== undefined
// @ts-expect-error - TS2339 - Property 'parameterIndex' does not exist on type 'ParameterFieldInterface'.
          ? `parameter-${props.parameterIndex}-audio-field`
          : undefined
      }
    />
  );
});
