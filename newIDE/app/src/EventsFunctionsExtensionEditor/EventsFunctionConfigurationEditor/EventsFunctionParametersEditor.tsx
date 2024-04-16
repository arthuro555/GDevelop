// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line, Spacer } from '../../UI/Grid';
import { mapVector } from '../../Utils/MapFor';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../../UI/IconButton';
// @ts-expect-error - TS6142 - Module '../../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../../UI/EmptyMessage';
// @ts-expect-error - TS6142 - Module '../../UI/Menu/ElementWithMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Menu/ElementWithMenu.tsx', but '--jsx' is not set.
import ElementWithMenu from '../../UI/Menu/ElementWithMenu';
// @ts-expect-error - TS6142 - Module '../../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../../UI/HelpButton';
// @ts-expect-error - TS6142 - Module '../../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../../UI/SemiControlledTextField';
// @ts-expect-error - TS6142 - Module '../../UI/MiniToolbar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/MiniToolbar.tsx', but '--jsx' is not set.
import MiniToolbar, { MiniToolbarText } from '../../UI/MiniToolbar';
import { ParametersIndexOffsets } from '../../EventsFunctionsExtensionsLoader';
// @ts-expect-error - TS6142 - Module '../../UI/DismissableAlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DismissableAlertMessage.tsx', but '--jsx' is not set.
import DismissableAlertMessage from '../../UI/DismissableAlertMessage';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../UI/Layout';
import { getLastObjectParameterObjectType } from '../../EventsSheet/ParameterFields/ParameterMetadataTools';
import newNameGenerator from '../../Utils/NewNameGenerator';
// @ts-expect-error - TS6142 - Module './ValueTypeEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsFunctionsExtensionEditor/EventsFunctionConfigurationEditor/ValueTypeEditor.tsx', but '--jsx' is not set.
import ValueTypeEditor from './ValueTypeEditor';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/ThreeDotsMenu'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ThreeDotsMenu.js' implicitly has an 'any' type.
import ThreeDotsMenu from '../../UI/CustomSvgIcons/ThreeDotsMenu';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Add'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Add.js' implicitly has an 'any' type.
import Add from '../../UI/CustomSvgIcons/Add';
import useForceUpdate from '../../Utils/UseForceUpdate';

const gd: libGDevelop = global.gd;

type Props = {
  project: gdProject,
  eventsFunction: gdEventsFunction,
  eventsBasedBehavior: gdEventsBasedBehavior | null | undefined,
  eventsBasedObject: gdEventsBasedObject | null | undefined,
  eventsFunctionsContainer: gdEventsFunctionsContainer | null | undefined,
  onParametersUpdated: () => void,
  helpPagePath?: string,
  freezeParameters?: boolean,
  onMoveFreeEventsParameter?: (
    eventsFunction: gdEventsFunction,
    oldIndex: number,
    newIndex: number,
    done: () => void,
  ) => void,
  onMoveBehaviorEventsParameter?: (
    eventsBasedBehavior: gdEventsBasedBehavior,
    eventsFunction: gdEventsFunction,
    oldIndex: number,
    newIndex: number,
    done: (arg1: boolean) => void,
  ) => void,
  onMoveObjectEventsParameter?: (
    eventsBasedObject: gdEventsBasedObject,
    eventsFunction: gdEventsFunction,
    oldIndex: number,
    newIndex: number,
    done: (arg1: boolean) => void,
  ) => void
};

const styles = {
  parametersContainer: {
    flex: 1,
  },
} as const;

export const EventsFunctionParametersEditor = ({
  project,
  eventsFunction,
  eventsBasedBehavior,
  eventsBasedObject,
  eventsFunctionsContainer,
  onParametersUpdated,
  helpPagePath,
  freezeParameters,
  onMoveFreeEventsParameter,
  onMoveBehaviorEventsParameter,
  onMoveObjectEventsParameter,
}: Props) => {
  const [
    longDescriptionShownIndexes,
    setLongDescriptionShownIndexes,
  ] = React.useState<{
    [key: number]: boolean
  }>({});

  const forceUpdate = useForceUpdate();

  const addParameterAt = React.useCallback(
    (index: number) => {
      const parameters = eventsFunction.getParameters();
// @ts-expect-error - TS7006 - Parameter 'parameterMetadata' implicitly has an 'any' type.
      const existingParameterNames = mapVector(parameters, parameterMetadata =>
        parameterMetadata.getName()
      );
      const newParameter = new gd.ParameterMetadata();
      newParameter.setType('objectList');
      const newName = newNameGenerator('Parameter', name =>
        existingParameterNames.includes(name)
      );
      newParameter.setName(newName);
      parameters.insertIntoVectorParameterMetadata(index, newParameter);
      newParameter.delete();
      forceUpdate();
      onParametersUpdated();
    },
    [eventsFunction, forceUpdate, onParametersUpdated]
  );

  const addParameter = React.useCallback(
    () => {
      const parameters = eventsFunction.getParameters();
      addParameterAt(parameters.size());
    },
    [addParameterAt, eventsFunction]
  );

  const removeParameter = React.useCallback(
    (index: number) => {
      const parameters = eventsFunction.getParameters();

      gd.removeFromVectorParameterMetadata(parameters, index);
      forceUpdate();
      onParametersUpdated();
    },
    [eventsFunction, forceUpdate, onParametersUpdated]
  );

  const addLongDescription = React.useCallback(
    (index: number) => {
      // Show the long description field
      setLongDescriptionShownIndexes({
        ...longDescriptionShownIndexes,
        [index]: true,
      });
    },
    [longDescriptionShownIndexes]
  );

  const removeLongDescription = React.useCallback(
    (index: number) => {
      const parameters = eventsFunction.getParameters();
      const parameter = parameters.at(index);

      // Reset the long description and hide the field
      parameter.setLongDescription('');
      setLongDescriptionShownIndexes({
        ...longDescriptionShownIndexes,
        [index]: false,
      });
    },
    [eventsFunction, longDescriptionShownIndexes]
  );

  const moveParameters = React.useCallback(
    (oldIndex: number, newIndex: number) => {
      const parameters = eventsFunction.getParameters();

      if (eventsBasedBehavior) {
        if (onMoveBehaviorEventsParameter)
          onMoveBehaviorEventsParameter(
            eventsBasedBehavior,
            eventsFunction,
            oldIndex,
            newIndex,
            isDone => {
              if (!isDone) return;
              gd.swapInVectorParameterMetadata(parameters, oldIndex, newIndex);
              forceUpdate();
              onParametersUpdated();
            }
          );
      } else if (eventsBasedObject) {
        if (onMoveObjectEventsParameter)
          onMoveObjectEventsParameter(
            eventsBasedObject,
            eventsFunction,
            oldIndex,
            newIndex,
            isDone => {
              if (!isDone) return;
              gd.swapInVectorParameterMetadata(parameters, oldIndex, newIndex);
              forceUpdate();
              onParametersUpdated();
            }
          );
      } else {
        if (onMoveFreeEventsParameter)
          onMoveFreeEventsParameter(
            eventsFunction,
            oldIndex,
            newIndex,
// @ts-expect-error - TS7006 - Parameter 'isDone' implicitly has an 'any' type. | TS2345 - Argument of type '(isDone: any) => void' is not assignable to parameter of type '() => void'.
            isDone => {
              if (!isDone) return;
              gd.swapInVectorParameterMetadata(parameters, oldIndex, newIndex);
              forceUpdate();
              onParametersUpdated();
            }
          );
      }
    },
    [
      eventsBasedBehavior,
      eventsBasedObject,
      eventsFunction,
      forceUpdate,
      onMoveBehaviorEventsParameter,
      onMoveFreeEventsParameter,
      onMoveObjectEventsParameter,
      onParametersUpdated,
    ]
  );

  const parameters =
    eventsFunctionsContainer &&
    eventsFunction.getFunctionType() === gd.EventsFunction.ActionWithOperator
      ? eventsFunction.getParametersForEvents(eventsFunctionsContainer)
      : eventsFunction.getParameters();

  const firstParameterIndex = eventsBasedBehavior
    ? 2
    : eventsBasedObject
    ? 1
    : 0;
  const isParameterDisabled = index: number => {
    return (
      eventsFunction.getFunctionType() ===
        gd.EventsFunction.ActionWithOperator ||
      freezeParameters ||
      index < firstParameterIndex
    );
  };
  // The first two parameters of a behavior method should not be changed at all,
  // so we even hide their description and type to avoid cluttering the interface.
  // Same thing for an object which has mandatory Object parameter.
  const typeShownFirstIndex = firstParameterIndex;
  const isParameterTypeShown = index: number => {
    return index >= typeShownFirstIndex;
  };
  // The first two parameters of a behavior method should not be changed at all,
  // so we even hide their description and type to avoid cluttering the interface.
  // Same thing for an object which has mandatory Object parameter.
  const labelShownFirstIndex =
    firstParameterIndex +
    (eventsFunction.getFunctionType() === gd.EventsFunction.ActionWithOperator
      ? 1
      : 0);

  const isParameterDescriptionShown = React.useCallback(
// @ts-expect-error - TS7006 - Parameter 'index' implicitly has an 'any' type.
    index => {
      return index >= labelShownFirstIndex;
    },
    [labelShownFirstIndex]
  );

  const isParameterLongDescriptionShown = React.useCallback(
// @ts-expect-error - TS7006 - Parameter 'parameter' implicitly has an 'any' type. | TS7006 - Parameter 'index' implicitly has an 'any' type.
    (parameter, index): boolean => {
      return (
        isParameterDescriptionShown(index) &&
        (!!parameter.getLongDescription() ||
          !!longDescriptionShownIndexes[index])
      );
    },
    [isParameterDescriptionShown, longDescriptionShownIndexes]
  );

  const parametersIndexOffset = eventsBasedBehavior
    ? ParametersIndexOffsets.BehaviorFunction
    : eventsBasedObject
    ? ParametersIndexOffsets.ObjectFunction
    : ParametersIndexOffsets.FreeFunction;

  const isABehaviorLifecycleEventsFunction =
    !!eventsBasedBehavior &&
    gd.MetadataDeclarationHelper.isBehaviorLifecycleEventsFunction(
      eventsFunction.getName()
    );
  if (isABehaviorLifecycleEventsFunction) {
    return (
      <EmptyMessage>
        <Trans>
          This is a "lifecycle method". It will be called automatically by the
          game engine and has two parameters: "Object" (the object the behavior
          is acting on) and "Behavior" (the behavior itself).
        </Trans>
      </EmptyMessage>
    );
  }
  const isAnExtensionLifecycleEventsFunction =
    !eventsBasedBehavior &&
    gd.MetadataDeclarationHelper.isExtensionLifecycleEventsFunction(
      eventsFunction.getName()
    );
  if (isAnExtensionLifecycleEventsFunction) {
    return (
      <Column noMargin>
        <DismissableAlertMessage
          kind="info"
          identifier="lifecycle-events-function-included-only-if-extension-used"
        >
          <Trans>
            For the lifecycle functions to be executed, you need the extension
            to be used in the game, either by having at least one action,
            condition or expression used, or a behavior of the extension added
            to an object. Otherwise, the extension won't be included in the
            game.
          </Trans>
        </DismissableAlertMessage>
        <EmptyMessage>
          <Trans>
            This is a "lifecycle function". It will be called automatically by
            the game engine. It has no parameters. Only global objects can be
            used as the events will be run for all scenes in your game.
          </Trans>
        </EmptyMessage>
      </Column>
    );
  }

  return (
    <I18n>
      {({ i18n }) => (
        <Column noMargin expand>
          <Line noMargin>
            <div style={styles.parametersContainer}>
              {mapVector(
                parameters,
                (parameter: gdParameterMetadata, i: number) => (
                  <React.Fragment key={i}>
                    <MiniToolbar noPadding>
                      <MiniToolbarText firstChild>
                        <Trans>Parameter #{i + parametersIndexOffset}:</Trans>
                      </MiniToolbarText>
                      <Column expand noMargin>
                        <SemiControlledTextField
                          commitOnBlur
                          margin="none"
                          translatableHintText={t`Enter the parameter name (mandatory)`}
                          value={parameter.getName()}
                          onChange={text => {
                            parameter.setName(gd.Project.getSafeName(text));
                            forceUpdate();
                            onParametersUpdated();
                          }}
                          disabled={isParameterDisabled(i)}
                          fullWidth
                        />
                      </Column>
                      <ElementWithMenu
                        element={
                          <IconButton>
                            <ThreeDotsMenu />
                          </IconButton>
                        }
                        buildMenuTemplate={(i18n: I18nType) => [
                          {
                            label: i18n._(t`Delete`),
                            enabled: !isParameterDisabled(i),
                            click: () => removeParameter(i),
                          },
                          {
                            label: i18n._(t`Add a parameter below`),
                            enabled: !isParameterDisabled(i),
                            click: () => addParameterAt(i + 1),
                          },
                          { type: 'separator' },
                          {
                            label: i18n._(t`Add a Long Description`),
                            enabled: !isParameterDisabled(i),
                            visible: !isParameterLongDescriptionShown(
                              parameter,
                              i
                            ),
                            click: () => addLongDescription(i),
                          },
                          {
                            label: i18n._(t`Remove the Long Description`),
                            enabled: !isParameterDisabled(i),
                            visible: isParameterLongDescriptionShown(
                              parameter,
                              i
                            ),
                            click: () => removeLongDescription(i),
                          },
                          {
                            label: i18n._(t`Move up`),
                            click: () => moveParameters(i, i - 1),
                            enabled:
                              !isParameterDisabled(i) &&
                              i - 1 >= 0 &&
                              !isParameterDisabled(i - 1),
                          },
                          {
                            label: i18n._(t`Move down`),
                            click: () => moveParameters(i, i + 1),
                            enabled:
                              !isParameterDisabled(i) &&
                              i + 1 < parameters.size() &&
                              !isParameterDisabled(i + 1),
                          },
                        ]}
                      />
                    </MiniToolbar>
                    <Line>
                      <ColumnStackLayout expand noMargin>
                        <ValueTypeEditor
                          project={project}
                          valueTypeMetadata={parameter.getValueTypeMetadata()}
                          disabled={isParameterDisabled(i)}
                          isTypeSelectorShown={isParameterTypeShown(i)}
                          onTypeUpdated={() => onParametersUpdated()}
                          getLastObjectParameterObjectType={() =>
                            getLastObjectParameterObjectType(parameters, i)
                          }
                        />
                        {isParameterDescriptionShown(i) && (
                          <SemiControlledTextField
                            commitOnBlur
                            floatingLabelText={<Trans>Label</Trans>}
                            floatingLabelFixed
                            value={parameter.getDescription()}
                            onChange={text => {
                              parameter.setDescription(text);
                              forceUpdate();
                            }}
                            fullWidth
                            disabled={
                              /* When parameter are freezed, long description (if shown) can always be changed */
                              isParameterDisabled(i) && !freezeParameters
                            }
                          />
                        )}
                        {isParameterLongDescriptionShown(parameter, i) && (
                          <SemiControlledTextField
                            commitOnBlur
                            floatingLabelText={<Trans>Long description</Trans>}
                            floatingLabelFixed
                            value={parameter.getLongDescription()}
                            onChange={text => {
                              parameter.setLongDescription(text);
                              forceUpdate();
                            }}
                            multiline
                            fullWidth
                            disabled={
                              /* When parameter are freezed, long description (if shown) can always be changed */
                              isParameterDisabled(i) && !freezeParameters
                            }
                          />
                        )}
                      </ColumnStackLayout>
                    </Line>
                  </React.Fragment>
                )
              )}
              {parameters.size() === 0 ? (
                <EmptyMessage>
                  <Trans>No parameters for this function.</Trans>
                </EmptyMessage>
              ) : null}
              <Column>
                <Line justifyContent="flex-end" expand>
                  {!freezeParameters && (
                    <RaisedButton
                      primary
                      label={<Trans>Add a parameter</Trans>}
                      onClick={addParameter}
                      icon={<Add />}
                      disabled={
                        eventsFunction.getFunctionType() ===
                        gd.EventsFunction.ActionWithOperator
                      }
                    />
                  )}
                </Line>
              </Column>
            </div>
          </Line>
          {helpPagePath ? (
            <Line>
              <HelpButton helpPagePath={helpPagePath} />
            </Line>
          ) : (
            <Spacer />
          )}
        </Column>
      )}
    </I18n>
  );
// @ts-expect-error - TS1128 - Declaration or statement expected.
};
