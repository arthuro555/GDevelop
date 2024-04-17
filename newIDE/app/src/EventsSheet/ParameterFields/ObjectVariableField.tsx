import { Trans } from '@lingui/macro';
import * as React from 'react';
import { ParameterInlineRendererProps } from './ParameterInlineRenderer.flow';
import VariableField, {
  renderVariableWithIcon,
  VariableFieldInterface,
} from './VariableField';

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

import ObjectIcon from '../../UI/CustomSvgIcons/Object';

// TODO Move this function to the ObjectsContainersList class.
const getObjectOrGroupVariablesContainers = (
  globalObjectsContainer: gd.ObjectsContainer,
  objectsContainer: gd.ObjectsContainer,
  objectName: string
): Array<gd.VariablesContainer> => {
  const object = getObjectByName(
    globalObjectsContainer,
    objectsContainer,
    objectName
  );
  const variablesContainers: Array<gd.VariablesContainer> = [];
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

export default React.forwardRef<ParameterFieldInterface, ParameterFieldProps>(
  function ObjectVariableField(props: ParameterFieldProps, ref) {
    const field = React.useRef<VariableFieldInterface | null | undefined>(null);
    const [editorOpen, setEditorOpen] = React.useState(false);
    const focus: FieldFocusFunction = (options) => {
      if (field.current) field.current.focus(options);
    };

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
    const variablesContainers = React.useMemo<Array<gd.VariablesContainer>>(
      () =>
        objectName
          ? getObjectOrGroupVariablesContainers(
              globalObjectsContainer,
              objectsContainer,
              objectName
            )
          : [],
      [objectName, globalObjectsContainer, objectsContainer]
    );

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
      <React.Fragment>
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
            <VariablesEditorDialog
              project={project}
              title={<Trans>Object Variables</Trans>}
              open={editorOpen}
              variablesContainer={variablesContainers[0]}
              emptyPlaceholderTitle={
                <Trans>Add your first object variable</Trans>
              }
              emptyPlaceholderDescription={
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
  }
);

export const renderInlineObjectVariable = (
  props: ParameterInlineRendererProps
) => renderVariableWithIcon(props, ObjectIcon, 'object variable');
