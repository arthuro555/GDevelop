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
import EventsRootVariablesFinder from '../../Utils/EventsRootVariablesFinder';

import GlobalIcon from '../../UI/CustomSvgIcons/Publish';

export default React.forwardRef<ParameterFieldInterface, ParameterFieldProps>(
  function GlobalVariableField(props: ParameterFieldProps, ref) {
    const field = React.useRef<VariableFieldInterface | null | undefined>(null);
    const [editorOpen, setEditorOpen] = React.useState(false);
    const focus: FieldFocusFunction = (options) => {
      if (field.current) field.current.focus(options);
    };

    React.useImperativeHandle(ref, () => ({
      focus,
    }));

    const { project, scope } = props;

    const onComputeAllVariableNames = () =>
      project
        ? EventsRootVariablesFinder.findAllGlobalVariables(
            project.getCurrentPlatform(),
            project
          )
        : [];

    const variablesContainers = React.useMemo(() => {
      return project ? [project.getVariables()] : [];
    }, [project]);

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
        />
        {editorOpen && project && (
          <VariablesEditorDialog
            project={project}
            title={<Trans>Global Variables</Trans>}
            open={editorOpen}
            variablesContainer={project.getVariables()}
            onCancel={() => setEditorOpen(false)}
            onApply={() => {
              setEditorOpen(false);
              if (field.current) field.current.updateAutocompletions();
            }}
            emptyPlaceholderTitle={
              <Trans>Add your first global variable</Trans>
            }
            emptyPlaceholderDescription={
              <Trans>
                These variables hold additional information on a project.
              </Trans>
            }
            helpPagePath={'/all-features/variables/global-variables'}
            onComputeAllVariableNames={onComputeAllVariableNames}
            preventRefactoringToDeleteInstructions
          />
        )}
      </React.Fragment>
    );
  }
);

export const renderInlineGlobalVariable = (
  props: ParameterInlineRendererProps
) => renderVariableWithIcon(props, GlobalIcon, 'global variable');
