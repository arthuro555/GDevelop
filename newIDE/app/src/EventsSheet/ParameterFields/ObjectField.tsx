import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'classnames'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/classnames/index.js' implicitly has an 'any' type.
import classNames from 'classnames';
import { ParameterInlineRendererProps } from './ParameterInlineRenderer.flow';
import ObjectSelector, {
  ObjectSelectorInterface,
} from '../../ObjectsList/ObjectSelector';
import {
  ParameterFieldProps,
  ParameterFieldInterface,
  FieldFocusFunction,
} from './ParameterFieldCommons';

import { Trans } from '@lingui/macro';
import { nameAndIconContainer } from '../EventsTree/ClassNames';
import InAppTutorialContext from '../../InAppTutorial/InAppTutorialContext';

export const getRequiredBehaviorTypes = (
  platform: gd.Platform,
  functionMetadata: gd.InstructionMetadata | gd.ExpressionMetadata,
  parameterIndex: number
) => {
  const requiredBehaviorTypes: Array<string> = [];
  for (
    let index = parameterIndex + 1;
    index < functionMetadata.getParametersCount();
    index++
  ) {
    const behaviorParameter = functionMetadata.getParameter(index);
    if (behaviorParameter.getType() !== 'behavior') {
      break;
    }
    const behaviorType = behaviorParameter.getExtraInfo();
    const behaviorMetadata = gd.MetadataProvider.getBehaviorMetadata(
      platform,
      behaviorType
    );
    if (behaviorMetadata.isHidden()) {
      requiredBehaviorTypes.push(behaviorType);
    }
  }
  return requiredBehaviorTypes;
};

export default React.forwardRef<ParameterFieldInterface, ParameterFieldProps>(
  function ObjectField(props: ParameterFieldProps, ref) {
    const { currentlyRunningInAppTutorial } =
      React.useContext(InAppTutorialContext);
    const field = React.useRef<ObjectSelectorInterface | null | undefined>(
      null
    );
    const focus: FieldFocusFunction = (options) => {
      // Prevent focus of field if an in-app tutorial is running because
      // the popper of the tooltip and the popper of the semi controlled
      // autocomplete's dropdown are conflicting.
      if (field.current && !currentlyRunningInAppTutorial)
        field.current.focus(options);
    };

    React.useImperativeHandle(ref, () => ({
      focus,
    }));

    const {
      project,
      parameterMetadata,
      parameterIndex,
      instructionMetadata,
      expressionMetadata,
    } = props;

    const description = parameterMetadata
      ? parameterMetadata.getDescription()
      : undefined;

    const longDescription = parameterMetadata
      ? parameterMetadata.getLongDescription()
      : undefined;

    const allowedObjectType = parameterMetadata
      ? parameterMetadata.getExtraInfo()
      : undefined;

    const requiredBehaviorTypes = React.useMemo(() => {
      const functionMetadata = instructionMetadata || expressionMetadata;
      if (!project || !functionMetadata || parameterIndex === undefined) {
        return [];
      }
      return getRequiredBehaviorTypes(
        project.getCurrentPlatform(),
        functionMetadata,
        parameterIndex
      );
    }, [expressionMetadata, instructionMetadata, parameterIndex, project]);

    return (
      <ObjectSelector
        margin={props.isInline ? 'none' : 'dense'}
        project={project}
        value={props.value}
        onChange={props.onChange}
        onRequestClose={props.onRequestClose}
        onApply={props.onApply}
        // Some instructions apply to all objects BUT not some objects
        // lacking a specific capability offered by a default behavior.
        allowedObjectType={allowedObjectType}
        requiredBehaviorTypes={requiredBehaviorTypes}
        globalObjectsContainer={props.globalObjectsContainer}
        objectsContainer={props.objectsContainer}
        floatingLabelText={description}
        helperMarkdownText={longDescription}
        id={
          parameterIndex !== undefined
            ? `parameter-${parameterIndex}-object-selector`
            : undefined
        }
        fullWidth
        errorTextIfInvalid={
          allowedObjectType || requiredBehaviorTypes.length > 0 ? (
            <Trans>The object does not exist or can't be used here.</Trans>
          ) : (
            <Trans>Enter the name of an object.</Trans>
          )
        }
        openOnFocus={
          !props.value /* Only force showing the list if no object is entered, see https://github.com/4ian/GDevelop/issues/859 */
        }
// @ts-expect-error - TS2322 - Type 'MutableRefObject<ObjectSelectorInterface | null | undefined>' is not assignable to type 'Ref<ObjectSelectorInterface> | undefined'.
        ref={field}
      />
    );
  }
);

export const renderInlineObjectWithThumbnail = ({
  value,
  parameterMetadata,
  renderObjectThumbnail,
  expressionIsValid,
  InvalidParameterValue,
  MissingParameterValue,
}: ParameterInlineRendererProps) => {
  if (!value && !parameterMetadata.isOptional()) {
    return <MissingParameterValue />;
  }

  return (
    <span
      title={value}
      className={classNames({
        [nameAndIconContainer]: true,
      })}
    >
      {renderObjectThumbnail(value)}
      {expressionIsValid ? (
        value
      ) : (
        <InvalidParameterValue>{value}</InvalidParameterValue>
      )}
    </span>
  );
};
