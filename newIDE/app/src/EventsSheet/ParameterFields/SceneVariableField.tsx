// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
import { ParameterInlineRendererProps } from './ParameterInlineRenderer.flow';
import VariableField, {
  renderVariableWithIcon,
  VariableFieldInterface,
// @ts-expect-error - TS6142 - Module './VariableField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/VariableField.tsx', but '--jsx' is not set.
} from './VariableField';
// @ts-expect-error - TS6142 - Module '../../VariablesList/VariablesEditorDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/VariablesList/VariablesEditorDialog.tsx', but '--jsx' is not set.
import VariablesEditorDialog from '../../VariablesList/VariablesEditorDialog';
import {
  ParameterFieldProps,
  ParameterFieldInterface,
  FieldFocusFunction,
} from './ParameterFieldCommons';
import EventsRootVariablesFinder from '../../Utils/EventsRootVariablesFinder';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Scene'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Scene.js' implicitly has an 'any' type.
import SceneIcon from '../../UI/CustomSvgIcons/Scene';

// @ts-expect-error - TS2345 - Argument of type '(props: ParameterFieldProps, ref: ForwardedRef<ParameterFieldProps>) => Element' is not assignable to parameter of type 'ForwardRefRenderFunction<ParameterFieldProps, ParameterFieldInterface>'.
export default React.forwardRef<ParameterFieldProps, ParameterFieldInterface>(function SceneVariableField(props: ParameterFieldProps, ref) {
  const field = React.useRef<VariableFieldInterface | null | undefined>(null);
  const [editorOpen, setEditorOpen] = React.useState(false);
  const focus: FieldFocusFunction = options => {
    if (field.current) field.current.focus(options);
  };
// @ts-expect-error - TS2322 - Type '{ focus: FieldFocusFunction; }' is not assignable to type 'ParameterFieldProps'.
  React.useImperativeHandle(ref, () => ({
    focus,
  }));

  const { project, scope } = props;
  const { layout } = scope;

  const onComputeAllVariableNames = React.useCallback(
    () =>
      project && layout
        ? EventsRootVariablesFinder.findAllLayoutVariables(
            project.getCurrentPlatform(),
            project,
            layout
          )
        : [],
    [project, layout]
  );

  const variablesContainers = React.useMemo(
    () => {
      return layout ? [layout.getVariables()] : [];
    },
    [layout]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <VariableField
        variablesContainers={variablesContainers}
        parameterMetadata={props.parameterMetadata}
        value={props.value}
        onChange={props.onChange}
        isInline={props.isInline}
        onRequestClose={props.onRequestClose}
        onApply={props.onApply}
        ref={field}
        onOpenDialog={() => setEditorOpen(true)}
        globalObjectsContainer={props.globalObjectsContainer}
        objectsContainer={props.objectsContainer}
        scope={scope}
        id={
          props.parameterIndex !== undefined
            ? `parameter-${props.parameterIndex}-scene-variable-field`
            : undefined
        }
      />
      {editorOpen && layout && project && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <VariablesEditorDialog
          project={project}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          title={<Trans>{layout.getName()} variables</Trans>}
          open
          variablesContainer={layout.getVariables()}
          onCancel={() => setEditorOpen(false)}
          onApply={() => {
            setEditorOpen(false);
            if (field.current) field.current.updateAutocompletions();
          }}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          emptyPlaceholderTitle={<Trans>Add your first scene variable</Trans>}
          emptyPlaceholderDescription={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>
              These variables hold additional information on a scene.
            </Trans>
          }
          helpPagePath={'/all-features/variables/scene-variables'}
          onComputeAllVariableNames={onComputeAllVariableNames}
          preventRefactoringToDeleteInstructions
        />
      )}
    </React.Fragment>
  );
});

export const renderInlineSceneVariable = (
  props: ParameterInlineRendererProps
) => renderVariableWithIcon(props, SceneIcon, 'scene variable');
