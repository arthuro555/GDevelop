// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import * as React from 'react';
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

// @ts-expect-error - TS2345 - Argument of type '(props: ParameterFieldProps, ref: ForwardedRef<ParameterFieldProps>) => Element | null' is not assignable to parameter of type 'ForwardRefRenderFunction<ParameterFieldProps, ParameterFieldInterface>'.
export default React.forwardRef<ParameterFieldProps, ParameterFieldInterface>(function AtlasResourceField(props: ParameterFieldProps, ref) {
  const field = React.useRef<ResourceSelectorInterface | null | undefined>(null);
  const focus: FieldFocusFunction = options => {
    if (field.current) field.current.focus(options);
  };
// @ts-expect-error - TS2322 - Type '{ focus: FieldFocusFunction; }' is not assignable to type 'ParameterFieldProps'.
  React.useImperativeHandle(ref, () => ({
    focus,
  }));

  if (!props.resourceManagementProps || !props.project) {
    console.error(
      'Missing project or resourceManagementProps for AtlasResourceField'
    );
    return null;
  }

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ResourceSelector
      margin={props.isInline ? 'none' : 'dense'}
      project={props.project}
      resourceManagementProps={props.resourceManagementProps}
      resourcesLoader={ResourcesLoader}
      resourceKind="atlas"
      fullWidth
      initialResourceName={props.value}
      onChange={props.onChange}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      floatingLabelText={<Trans>Choose the atlas file (.atlas) to use</Trans>}
      onRequestClose={props.onRequestClose}
      onApply={props.onApply}
      ref={field}
    />
  );
});
