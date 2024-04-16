// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'react-measure'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/react-measure/dist/index.cjs.js' implicitly has an 'any' type.
import Measure from 'react-measure';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line, Spacer } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../../UI/SelectOption';
import { mapVector, mapFor } from '../../Utils/MapFor';
// @ts-expect-error - TS6142 - Module '../../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../../UI/HelpButton';
// @ts-expect-error - TS6142 - Module '../../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../../UI/SemiControlledTextField';
// @ts-expect-error - TS6142 - Module '../../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../../UI/EmptyMessage';
import { ParametersIndexOffsets } from '../../EventsFunctionsExtensionsLoader';
import { MessageDescriptor } from '../../Utils/i18n/MessageDescriptor.flow';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ResponsiveLineStackLayout, ColumnStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../UI/DismissableAlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DismissableAlertMessage.tsx', but '--jsx' is not set.
import DismissableAlertMessage from '../../UI/DismissableAlertMessage';
// @ts-expect-error - TS6142 - Module '../../UI/SemiControlledAutoComplete' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledAutoComplete.tsx', but '--jsx' is not set.
import SemiControlledAutoComplete from '../../UI/SemiControlledAutoComplete';
// @ts-expect-error - TS6142 - Module './ValueTypeEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsFunctionsExtensionEditor/EventsFunctionConfigurationEditor/ValueTypeEditor.tsx', but '--jsx' is not set.
import ValueTypeEditor from './ValueTypeEditor';
// @ts-expect-error - TS6142 - Module '../../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../../UI/AlertMessage';
import useForceUpdate from '../../Utils/UseForceUpdate';
// @ts-expect-error - TS6142 - Module '../../UI/Checkbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Checkbox.tsx', but '--jsx' is not set.
import Checkbox from '../../UI/Checkbox';
// @ts-expect-error - TS6142 - Module '../../EventsFunctionsExtensionEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsFunctionsExtensionEditor/index.tsx', but '--jsx' is not set.
import { ExtensionItemConfigurationAttribute } from '../../EventsFunctionsExtensionEditor';

const gd: libGDevelop = global.gd;

type Props = {
  project: gdProject,
  eventsFunction: gdEventsFunction,
  eventsBasedBehavior: gdEventsBasedBehavior | null | undefined,
  eventsBasedObject: gdEventsBasedObject | null | undefined,
  eventsFunctionsContainer: gdEventsFunctionsContainer | null | undefined,
  helpPagePath?: string,
  onConfigurationUpdated?: (arg1?: ExtensionItemConfigurationAttribute | null | undefined) => void,
  renderConfigurationHeader?: () => React.ReactElement,
  freezeEventsFunctionType?: boolean,
  getFunctionGroupNames?: () => string[]
};

export const getSentenceErrorText = (
  i18n: I18nType,
  eventsBasedBehavior: gdEventsBasedBehavior | null | undefined,
  eventsBasedObject: gdEventsBasedObject | null | undefined,
  eventsFunction: gdEventsFunction
) => {
  const sentence = eventsFunction.getSentence();
  if (!sentence)
    return i18n._(
      t`Enter the sentence that will be displayed in the events sheet`
    );

  const parametersIndexOffset = eventsBasedBehavior
    ? ParametersIndexOffsets.BehaviorFunction
    : eventsBasedObject
    ? ParametersIndexOffsets.ObjectFunction
    : ParametersIndexOffsets.FreeFunction;

  const type = eventsFunction.getFunctionType();
  const param0isImplicit =
    (eventsBasedBehavior || eventsBasedObject) &&
    type === gd.EventsFunction.ExpressionAndCondition;
  const missingParameters = mapVector(
    eventsFunction.getParameters(),
// @ts-expect-error - TS7006 - Parameter 'parameter' implicitly has an 'any' type. | TS7006 - Parameter 'index' implicitly has an 'any' type.
    (parameter, index) => {
      if (parameter.getValueTypeMetadata().isBehavior()) {
        // Behaviors are usually not shown in sentences.
        return null;
      }
      if (index === 0 && param0isImplicit) {
        return null;
      }

      const expectedString = `_PARAM${index + parametersIndexOffset}_`;
      if (sentence.indexOf(expectedString) === -1) return expectedString;

      return null;
    }
  ).filter(Boolean);

  const parametersLength = eventsFunction.getParameters().size();
  const paramsMatches = sentence.matchAll(/_PARAM(\d+)_/g);
  const nonExpectedParameters: Array<string> = [];
  for (const paramsMatch of paramsMatches) {
    const paramIndex = parseInt(paramsMatch[1], 10);
    if (
      paramIndex - parametersIndexOffset >= parametersLength ||
      paramIndex - parametersIndexOffset < 0
    ) {
      nonExpectedParameters.push(paramsMatch[0]);
    }
  }

  if (missingParameters.length || nonExpectedParameters.length) {
    return [
      missingParameters.length
        ? i18n._(t`The sentence is probably missing this/these parameter(s):`) +
          ' ' +
          missingParameters.join(', ')
        : null,
      nonExpectedParameters.length
        ? i18n._(t`The sentence displays one or more wrongs parameters:`) +
          ' ' +
          nonExpectedParameters.join(', ')
        : null,
    ]
      .filter(Boolean)
      .join(' - ');
  }

  return undefined;
};

const getFullNameHintText = (type: EventsFunction_FunctionType, expressionType: gdValueTypeMetadata): MessageDescriptor => {
  if (type === gd.EventsFunction.Condition) {
    return t`Example: Is flashing`;
  } else if (type === gd.EventsFunction.Expression) {
    return expressionType.isNumber()
      ? t`Example: Remaining life`
      : t`Example: Equipped shield name`;
  }

  return t`Example: Flash the object`;
};

const getDescriptionHintText = (type: EventsFunction_FunctionType, expressionType: gdValueTypeMetadata): MessageDescriptor => {
  if (type === gd.EventsFunction.Condition) {
    return t`Example: Check if the object is flashing.`;
  } else if (type === gd.EventsFunction.Expression) {
    return expressionType.isNumber()
      ? t`Example: Return the number of remaining lives for the player.`
      : t`Example: Return the name of the shield equipped by the player.`;
  }
  return t`Example: Make the object flash for 5 seconds.`;
};

export const EventsFunctionPropertiesEditor = ({
  project,
  eventsFunction,
  freezeEventsFunctionType,
  onConfigurationUpdated,
  helpPagePath,
  renderConfigurationHeader,
  eventsBasedBehavior,
  eventsBasedObject,
  getFunctionGroupNames,
  eventsFunctionsContainer,
}: Props) => {
  const forceUpdate = useForceUpdate();
  const [containerWidth, setContainerWidth] = React.useState<number | null | undefined>(null);

  const type = eventsFunction.getFunctionType();
  const isABehaviorLifecycleEventsFunction =
    !!eventsBasedBehavior &&
    !eventsBasedObject &&
    gd.MetadataDeclarationHelper.isBehaviorLifecycleEventsFunction(
      eventsFunction.getName()
    );
  if (isABehaviorLifecycleEventsFunction) {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Trans>
          This is a "lifecycle method". It will be called automatically by the
          game engine for each instance living on the scene having the behavior.
        </Trans>
      </EmptyMessage>
    );
  }

  const isAnObjectLifecycleEventsFunction =
    !!eventsBasedObject &&
    !eventsBasedBehavior &&
    gd.MetadataDeclarationHelper.isObjectLifecycleEventsFunction(
      eventsFunction.getName()
    );
  if (isAnObjectLifecycleEventsFunction) {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Trans>
          This is a "lifecycle method". It will be called automatically by the
          game engine for each instance living on the scene.
        </Trans>
      </EmptyMessage>
    );
  }

  const isAnExtensionLifecycleEventsFunction =
    !eventsBasedBehavior &&
    !eventsBasedObject &&
    gd.MetadataDeclarationHelper.isExtensionLifecycleEventsFunction(
      eventsFunction.getName()
    );
  if (isAnExtensionLifecycleEventsFunction) {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <DismissableAlertMessage
          kind="info"
          identifier="lifecycle-events-function-included-only-if-extension-used"
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            For the lifecycle functions to be executed, you need the extension
            to be used in the game, either by having at least one action,
            condition or expression used, or a behavior of the extension added
            to an object. Otherwise, the extension won't be included in the
            game.
          </Trans>
        </DismissableAlertMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            This is a "lifecycle function". It will be called automatically by
            the game engine. It has no parameters. Only global objects can be
            used as the events will be run for all scenes in your game.
          </Trans>
        </EmptyMessage>
      </Column>
    );
  }

  const getterFunction =
    eventsFunctionsContainer &&
    type === gd.EventsFunction.ActionWithOperator &&
    eventsFunctionsContainer.hasEventsFunctionNamed(
      eventsFunction.getGetterName()
    )
      ? eventsFunctionsContainer.getEventsFunction(
          eventsFunction.getGetterName()
        )
      : null;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ColumnStackLayout expand noMargin>
          {renderConfigurationHeader ? renderConfigurationHeader() : null}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Measure
            bounds
// @ts-expect-error - TS7006 - Parameter 'contentRect' implicitly has an 'any' type.
            onResize={contentRect => {
              setContainerWidth(contentRect.bounds.width);
            }}
          >
{ /* @ts-expect-error - TS7031 - Binding element 'contentRect' implicitly has an 'any' type. | TS7031 - Binding element 'measureRef' implicitly has an 'any' type. */}
            {({ contentRect, measureRef }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <div ref={measureRef}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <ColumnStackLayout expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <ResponsiveLineStackLayout
                    alignItems="center"
                    noMargin
                    forceMobileLayout={!!containerWidth && containerWidth < 650}
                  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Line alignItems="center" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <SelectField
                        value={type}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        floatingLabelText={<Trans>Function type</Trans>}
                        fullWidth
                        disabled={!!freezeEventsFunctionType}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
                        onChange={(e, i, valueString: string) => {
                          const value: EventsFunction_FunctionType = valueString;
                          eventsFunction.setFunctionType(value);
                          if (onConfigurationUpdated)
                            onConfigurationUpdated('type');
                          forceUpdate();
                        }}
                      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <SelectOption
                          value={gd.EventsFunction.Action}
                          label={t`Action`}
                        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <SelectOption
                          value={gd.EventsFunction.Condition}
                          label={t`Condition`}
                        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <SelectOption
                          value={gd.EventsFunction.Expression}
                          label={t`Expression`}
                        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <SelectOption
                          value={gd.EventsFunction.ExpressionAndCondition}
                          label={t`Expression and condition`}
                        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <SelectOption
                          value={gd.EventsFunction.ActionWithOperator}
                          label={t`Action with operator`}
                        />
                      </SelectField>
                    </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Column expand noMargin>
                      {type === gd.EventsFunction.ActionWithOperator ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <SelectField
                          value={
                            (getterFunction && getterFunction.getName()) || ''
                          }
                          floatingLabelText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                            <Trans>Related expression and condition</Trans>
                          }
                          fullWidth
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
                          onChange={(e, i, value: string) => {
                            eventsFunction.setGetterName(value);
                            if (onConfigurationUpdated)
                              onConfigurationUpdated();
                            forceUpdate();
                          }}
                        >
                          {eventsFunctionsContainer
                            ? mapFor(
                                0,
                                eventsFunctionsContainer.getEventsFunctionsCount(),
// @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type.
                                i => {
                                  const eventsFunction = eventsFunctionsContainer.getEventsFunctionAt(
                                    i
                                  );

                                  return (
                                    eventsFunction.getFunctionType() ===
                                      gd.EventsFunction
                                        .ExpressionAndCondition && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                      <SelectOption
                                        key={eventsFunction.getName()}
                                        value={eventsFunction.getName()}
                                        label={
                                          eventsFunction.getFullName() ||
                                          eventsFunction.getName()
                                        }
                                      />
                                    )
                                  );
                                }
                              )
                            : []}
                        </SelectField>
                      ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <SemiControlledTextField
                          commitOnBlur
                          floatingLabelText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                            <Trans>Full name displayed in editor</Trans>
                          }
                          translatableHintText={getFullNameHintText(
                            type,
                            eventsFunction.getExpressionType()
                          )}
                          value={eventsFunction.getFullName()}
// @ts-expect-error - TS7006 - Parameter 'text' implicitly has an 'any' type.
                          onChange={text => {
                            eventsFunction.setFullName(text);
                            if (onConfigurationUpdated)
                              onConfigurationUpdated();
                            forceUpdate();
                          }}
                          fullWidth
                        />
                      )}
                    </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Column expand noMargin>
                      {type === gd.EventsFunction.ActionWithOperator ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <SemiControlledTextField
                          disabled
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          floatingLabelText={<Trans>Group name</Trans>}
                          fullWidth
                          value={
                            getterFunction ? getterFunction.getGroup() : ''
                          }
// @ts-expect-error - TS7006 - Parameter 'text' implicitly has an 'any' type.
                          onChange={text => {}}
                        />
                      ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <SemiControlledAutoComplete
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          floatingLabelText={<Trans>Group name</Trans>}
                          hintText={t`Leave it empty to use the default group for this extension.`}
                          fullWidth
                          value={eventsFunction.getGroup()}
// @ts-expect-error - TS7006 - Parameter 'text' implicitly has an 'any' type.
                          onChange={text => {
                            eventsFunction.setGroup(text);
                            if (onConfigurationUpdated)
                              onConfigurationUpdated();
                            forceUpdate();
                          }}
                          dataSource={
                            getFunctionGroupNames
                              ? getFunctionGroupNames().map(name => ({
                                  text: name,
                                  value: name,
                                }))
                              : []
                          }
                          openOnFocus={true}
                        />
                      )}
                    </Column>
                  </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Line noMargin>
                    {type === gd.EventsFunction.ActionWithOperator ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <SemiControlledTextField
                        disabled
                        commitOnBlur
                        floatingLabelText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          <Trans>Description, displayed in editor</Trans>
                        }
                        fullWidth
                        multiline
                        value={
                          getterFunction
                            ? 'Change ' + getterFunction.getDescription()
                            : ''
                        }
// @ts-expect-error - TS7006 - Parameter 'text' implicitly has an 'any' type.
                        onChange={text => {}}
                      />
                    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <SemiControlledTextField
                        commitOnBlur
                        floatingLabelText={
                          type === gd.EventsFunction.ExpressionAndCondition ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                            <Trans>
                              Description, displayed in editor (automatically
                              prefixed by "Compare" or "Return")
                            </Trans>
                          ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                            <Trans>Description, displayed in editor</Trans>
                          )
                        }
                        translatableHintText={getDescriptionHintText(
                          type,
                          eventsFunction.getExpressionType()
                        )}
                        fullWidth
                        multiline
                        value={eventsFunction.getDescription()}
// @ts-expect-error - TS7006 - Parameter 'text' implicitly has an 'any' type.
                        onChange={text => {
                          eventsFunction.setDescription(text);
                          if (onConfigurationUpdated) onConfigurationUpdated();
                          forceUpdate();
                        }}
                      />
                    )}
                  </Line>
                  {type === gd.EventsFunction.ActionWithOperator ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <SemiControlledTextField
                        disabled
                        commitOnBlur
                        floatingLabelText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          <Trans>Sentence in Events Sheet</Trans>
                        }
                        fullWidth
                        value={
                          getterFunction
                            ? 'Change ' +
                              getterFunction.getSentence() +
                              (eventsBasedBehavior || eventsBasedObject
                                ? ' of _PARAM0_'
                                : '') +
                              ': [...]'
                            : ''
                        }
// @ts-expect-error - TS7006 - Parameter 'text' implicitly has an 'any' type.
                        onChange={text => {}}
                      />
                    </Line>
                  ) : (
                    (type === gd.EventsFunction.Action ||
                      type === gd.EventsFunction.Condition ||
                      type === gd.EventsFunction.ExpressionAndCondition) && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <SemiControlledTextField
                          commitOnBlur
                          floatingLabelText={
                            eventsBasedBehavior &&
                            type ===
                              gd.EventsFunction.ExpressionAndCondition ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                              <Trans>
                                Sentence in Events Sheet (automatically suffixed
                                by "of _PARAM0_")
                              </Trans>
                            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                              <Trans>Sentence in Events Sheet</Trans>
                            )
                          }
                          translatableHintText={t`Note: write _PARAMx_ for parameters, e.g: Flash _PARAM1_ for 5 seconds`}
                          fullWidth
                          value={eventsFunction.getSentence()}
// @ts-expect-error - TS7006 - Parameter 'text' implicitly has an 'any' type.
                          onChange={text => {
                            eventsFunction.setSentence(text);
                            if (onConfigurationUpdated)
                              onConfigurationUpdated();
                            forceUpdate();
                          }}
                          errorText={getSentenceErrorText(
                            i18n,
                            eventsBasedBehavior,
                            eventsBasedObject,
                            eventsFunction
                          )}
                        />
                      </Line>
                    )
                  )}
                  {eventsFunction.isExpression() && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <ValueTypeEditor
                      isExpressionType
                      project={project}
                      valueTypeMetadata={eventsFunction.getExpressionType()}
                      isTypeSelectorShown={true}
                      onTypeUpdated={() => {
                        if (onConfigurationUpdated) onConfigurationUpdated();
                      }}
                      getLastObjectParameterObjectType={() => ''}
                    />
                  )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    label={<Trans>Private</Trans>}
                    checked={eventsFunction.isPrivate()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
                    onCheck={(e, checked) => {
                      eventsFunction.setPrivate(checked);
                      if (onConfigurationUpdated)
                        onConfigurationUpdated('isPrivate');
                      forceUpdate();
                    }}
                  />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    label={<Trans>Asynchronous</Trans>}
                    checked={eventsFunction.isAsync()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
                    onCheck={(e, checked) => {
                      eventsFunction.setAsync(checked);
                      if (onConfigurationUpdated)
                        onConfigurationUpdated('isAsync');
                      forceUpdate();
                    }}
                  />
                  {eventsFunction.isAsync() && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <AlertMessage kind="info">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Trans>
                        This is an asynchronous action, meaning that the actions
                        and sub-events following it will wait for it to end.
                        Don't forget to use the action "End asynchronous
                        function" to mark the end of the action.
                      </Trans>
                    </AlertMessage>
                  )}
                  {helpPagePath ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <HelpButton helpPagePath={helpPagePath} />
                    </Line>
                  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Spacer />
                  )}
                </ColumnStackLayout>
              </div>
            )}
          </Measure>
        </ColumnStackLayout>
      )}
    </I18n>
  );
};
