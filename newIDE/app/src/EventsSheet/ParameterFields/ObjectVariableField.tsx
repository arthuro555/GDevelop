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
import { getLastObjectParameterValue } from './ParameterMetadataTools';
import EventsRootVariablesFinder from '../../Utils/EventsRootVariablesFinder';
import getObjectByName from '../../Utils/GetObjectByName';
import getObjectGroupByName from '../../Utils/GetObjectGroupByName';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Object'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Object.js' implicitly has an 'any' type.
import ObjectIcon from '../../UI/CustomSvgIcons/Object';

// TODO Move this function to the ObjectsContainersList class.
const getObjectOrGroupVariablesContainers = (
  globalObjectsContainer: gdObjectsContainer,
  objectsContainer: gdObjectsContainer,
  objectName: string,
): Array<gdVariablesContainer> => {
  const object = getObjectByName(
    globalObjectsContainer,
    objectsContainer,
    objectName
  );
  const variablesContainers: Array<gdVariablesContainer> = [];
  if (object) {
    variablesContainers.push(object.getVariables());
  } else {
    const group = getObjectGroupByName(
      globalObjectsContainer,
      objectsContainer,
      objectName
    );
    if (group) {
      for (const subObjectName of group.getAllObjectsNames().toJSArray()) {
        const subObject = getObjectByName(
          globalObjectsContainer,
          objectsContainer,
          subObjectName
        );
        if (subObject) {
          variablesContainers.push(subObject.getVariables());
        }
      }
    }
  }
  return variablesContainers;
};

// @ts-expect-error - TS2345 - Argument of type '(props: ParameterFieldProps, ref: ForwardedRef<ParameterFieldProps>) => Element' is not assignable to parameter of type 'ForwardRefRenderFunction<ParameterFieldProps, ParameterFieldInterface>'.
export default React.forwardRef<ParameterFieldProps, ParameterFieldInterface>(function ObjectVariableField(props: ParameterFieldProps, ref) {
  const field = React.useRef<VariableFieldInterface | null | undefined>(null);
  const [editorOpen, setEditorOpen] = React.useState(false);
  const focus: FieldFocusFunction = options => {
    if (field.current) field.current.focus(options);
  };
// @ts-expect-error - TS2322 - Type '{ focus: FieldFocusFunction; }' is not assignable to type 'ParameterFieldProps'.
  React.useImperativeHandle(ref, () => ({
    focus,
  }));

  const {
    project,
    globalObjectsContainer,
    objectsContainer,
    scope,
    instructionMetadata,
    instruction,
    expressionMetadata,
    expression,
    parameterIndex,
  } = props;

  const objectName = getLastObjectParameterValue({
    instructionMetadata,
    instruction,
    expressionMetadata,
    expression,
    parameterIndex,
  });

  const { layout } = scope;
  const object = objectName
    ? getObjectByName(globalObjectsContainer, objectsContainer, objectName)
    : null;
  const variablesContainers = React.useMemo<Array<gdVariablesContainer>>(() =>
    objectName
      ? getObjectOrGroupVariablesContainers(
          globalObjectsContainer,
          objectsContainer,
          objectName
        )
      : [], [objectName, globalObjectsContainer, objectsContainer]);

  const onComputeAllVariableNames = () =>
    project && layout && object
      ? EventsRootVariablesFinder.findAllObjectVariables(
          project.getCurrentPlatform(),
          project,
          layout,
          object
        )
      : [];

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
            ? `parameter-${props.parameterIndex}-object-variable-field`
            : undefined
        }
      />
      {editorOpen &&
        // There is no variable editor for groups.
        variablesContainers.length === 1 &&
        project && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <VariablesEditorDialog
            project={project}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            title={<Trans>Object Variables</Trans>}
            open={editorOpen}
            variablesContainer={variablesContainers[0]}
            emptyPlaceholderTitle={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Add your first object variable</Trans>
            }
            emptyPlaceholderDescription={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>
                These variables hold additional information on an object.
              </Trans>
            }
            helpPagePath={'/all-features/variables/object-variables'}
            onComputeAllVariableNames={onComputeAllVariableNames}
            onCancel={() => setEditorOpen(false)}
            onApply={() => {
              setEditorOpen(false);
              if (field.current) field.current.updateAutocompletions();
            }}
            preventRefactoringToDeleteInstructions
          />
        )}
    </React.Fragment>
  );
});

export const renderInlineObjectVariable = (
  props: ParameterInlineRendererProps
) => renderVariableWithIcon(props, ObjectIcon, 'object variable');
