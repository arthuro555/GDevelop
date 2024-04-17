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

import SceneIcon from '../../UI/CustomSvgIcons/Scene';

export default React.forwardRef<ParameterFieldInterface, ParameterFieldProps>(
  function SceneVariableField(props: ParameterFieldProps, ref) {
    const field = React.useRef<VariableFieldInterface>(null);
    const [editorOpen, setEditorOpen] = React.useState(false);
    const focus: FieldFocusFunction = (options) => {
      if (field.current) field.current.focus(options);
    };

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

    const variablesContainers = React.useMemo(() => {
      return layout ? [layout.getVariables()] : [];
    }, [layout]);

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
              ? `parameter-${props.parameterIndex}-scene-variable-field`
              : undefined
          }
        />
        {editorOpen && layout && project && (
          <VariablesEditorDialog
            project={project}
            title={<Trans>{layout.getName()} variables</Trans>}
            open
            variablesContainer={layout.getVariables()}
            onCancel={() => setEditorOpen(false)}
            onApply={() => {
              setEditorOpen(false);
              if (field.current) field.current.updateAutocompletions();
            }}
            emptyPlaceholderTitle={<Trans>Add your first scene variable</Trans>}
            emptyPlaceholderDescription={
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
  }
);

export const renderInlineSceneVariable = (
  props: ParameterInlineRendererProps
// @ts-expect-error - TS2345 - Argument of type 'MemoExoticComponent<(props: SvgIconProps<"svg", {}>) => Element>' is not assignable to parameter of type '(arg1: SvgIconProps<"svg", {}>) => ReactElement<{ children?: ReactNode; color?: "inherit" | "primary" | "secondary" | "action" | "disabled" | "error" | undefined; ... 4 more ...; viewBox?: string | undefined; } & CommonProps<...> & Pick<...>, string | JSXElementConstructor<...>>'.
) => renderVariableWithIcon(props, SceneIcon, 'scene variable');
