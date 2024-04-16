// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Toggle' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Toggle.tsx', but '--jsx' is not set.
import Toggle from '../../UI/Toggle';
import { mapFor } from '../../Utils/MapFor';
// @ts-expect-error - TS6142 - Module '../../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../../UI/EmptyMessage';
import ParameterRenderingService from '../ParameterRenderingService';
// @ts-expect-error - TS6142 - Module '../../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../../UI/HelpButton';
import { ResourceManagementProps } from '../../ResourcesList/ResourceSource';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line, Spacer } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module '../../UI/DismissableAlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DismissableAlertMessage.tsx', but '--jsx' is not set.
import DismissableAlertMessage from '../../UI/DismissableAlertMessage';
import Window from '../../Utils/Window';
import { getExtraInstructionInformation } from '../../Hints';
import DismissableTutorialMessage from '../../Hints/DismissableTutorialMessage';
import { isAnEventFunctionMetadata } from '../../EventsFunctionsExtensionsLoader';
import { EventsScope } from '../../InstructionOrExpression/EventsScope.flow';
import { getObjectParameterIndex } from '../../InstructionOrExpression/EnumerateInstructions';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
import { getInstructionMetadata } from './InstructionEditor';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../UI/Layout';
import { setupInstructionParameters } from '../../InstructionOrExpression/SetupInstructionParameters';
// @ts-expect-error - TS6142 - Module '../../UI/ScrollView' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ScrollView.tsx', but '--jsx' is not set.
import ScrollView from '../../UI/ScrollView';
import { getInstructionTutorialIds } from '../../Utils/GDevelopServices/Tutorial';
import useForceUpdate from '../../Utils/UseForceUpdate';
import GDevelopThemeContext from '../../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
import {
  ParameterFieldInterface,
  FieldFocusFunction,
} from '../ParameterFields/ParameterFieldCommons';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Edit'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Edit.js' implicitly has an 'any' type.
import Edit from '../../UI/CustomSvgIcons/Edit';

const gd: libGDevelop = global.gd;

const styles = {
  // When displaying the empty message, center the message:
  emptyContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  parametersContainer: {
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
    paddingTop: 6,
    flexShrink: 0,
  },
  invertToggle: {
    marginTop: 8,
  },
  description: {
    whiteSpace: 'pre-wrap',
  },
} as const;

export type InstructionParametersEditorInterface = {
  focus: FieldFocusFunction
};

type Props = {
  project: gdProject,
  scope: EventsScope,
  globalObjectsContainer: gdObjectsContainer,
  objectsContainer: gdObjectsContainer,
  objectName?: string | null | undefined,
  instruction: gdInstruction,
  isCondition: boolean,
  focusOnMount?: boolean,
  resourceManagementProps: ResourceManagementProps,
  style?: any,
  openInstructionOrExpression: (extension: gdPlatformExtension, type: string) => void,
  noHelpButton?: boolean
};

const isParameterVisible = (
  parameterMetadata: gdParameterMetadata,
  parameterIndex: number,
  objectParameterIndex?: number | null
) => {
  // Hide parameters that are used only for code generation
  if (parameterMetadata.isCodeOnly()) return false;

  // For objects, hide the first object parameter, which is by convention the object name.
  if (parameterIndex === objectParameterIndex) return false;

  return true;
};

const InstructionParametersEditor = React.forwardRef<Props, InstructionParametersEditorInterface>((
  {
// @ts-expect-error - TS2339 - Property 'instruction' does not exist on type 'InstructionParametersEditorInterface'.
    instruction,
// @ts-expect-error - TS2339 - Property 'project' does not exist on type 'InstructionParametersEditorInterface'.
    project,
// @ts-expect-error - TS2339 - Property 'globalObjectsContainer' does not exist on type 'InstructionParametersEditorInterface'.
    globalObjectsContainer,
// @ts-expect-error - TS2339 - Property 'objectsContainer' does not exist on type 'InstructionParametersEditorInterface'.
    objectsContainer,
// @ts-expect-error - TS2339 - Property 'noHelpButton' does not exist on type 'InstructionParametersEditorInterface'.
    noHelpButton,
// @ts-expect-error - TS2339 - Property 'objectName' does not exist on type 'InstructionParametersEditorInterface'.
    objectName,
// @ts-expect-error - TS2339 - Property 'isCondition' does not exist on type 'InstructionParametersEditorInterface'.
    isCondition,
// @ts-expect-error - TS2339 - Property 'scope' does not exist on type 'InstructionParametersEditorInterface'.
    scope,
// @ts-expect-error - TS2339 - Property 'focusOnMount' does not exist on type 'InstructionParametersEditorInterface'.
    focusOnMount,
// @ts-expect-error - TS2339 - Property 'style' does not exist on type 'InstructionParametersEditorInterface'.
    style,
// @ts-expect-error - TS2339 - Property 'openInstructionOrExpression' does not exist on type 'InstructionParametersEditorInterface'.
    openInstructionOrExpression,
// @ts-expect-error - TS2339 - Property 'resourceManagementProps' does not exist on type 'InstructionParametersEditorInterface'.
    resourceManagementProps,
  },
  ref
) => {
  const firstVisibleField = React.useRef<ParameterFieldInterface | null | undefined>(null);
  const [isDirty, setIsDirty] = React.useState<boolean>(false);
  const {
    palette: { type: paletteType },
  } = React.useContext(GDevelopThemeContext);

  const forceUpdate = useForceUpdate();

  const focus: FieldFocusFunction = React.useCallback(
    options => {
      // Verify that there is a field to focus.
      if (
        getVisibleParametersCount(
          getInstructionMetadata({
            instructionType: instruction.getType(),
            isCondition,
            project,
          }),
          objectName
        ) !== 0
      ) {
        if (firstVisibleField.current && firstVisibleField.current.focus) {
          firstVisibleField.current.focus(options);
        }
      }
    },
    [project, objectName, instruction, isCondition]
  );

// @ts-expect-error - TS2740 - Type '{ focus: FieldFocusFunction; }' is missing the following properties from type 'Props': project, scope, globalObjectsContainer, objectsContainer, and 4 more.
  React.useImperativeHandle(ref, () => ({
    focus,
  }));

  const getVisibleParametersCount = (
    instructionMetadata?: gdInstructionMetadata | null,
    objectName?: string | null
  ) => {
    if (!instructionMetadata) return 0;

    const objectParameterIndex = objectName
      ? getObjectParameterIndex(instructionMetadata)
      : -1;

// @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type.
    return mapFor(0, instructionMetadata.getParametersCount(), i => {
      if (!instructionMetadata) return false;
      const parameterMetadata = instructionMetadata.getParameter(i);

      return isParameterVisible(parameterMetadata, i, objectParameterIndex);
// @ts-expect-error - TS7006 - Parameter 'isVisible' implicitly has an 'any' type.
    }).filter(isVisible => isVisible).length;
  };

  const openExtension = (i18n: I18nType) => {
    if (isDirty) {
      const answer = Window.showConfirmDialog(
        i18n._(
          t`You've made some changes here. Are you sure you want to discard them and open the function?`
        )
      );
      if (!answer) return;
    }

    const instructionType = instruction.getType();
    if (!instructionType) return null;

    const extension = isCondition
      ? gd.MetadataProvider.getExtensionAndConditionMetadata(
          project.getCurrentPlatform(),
          instructionType
        ).getExtension()
      : gd.MetadataProvider.getExtensionAndActionMetadata(
          project.getCurrentPlatform(),
          instructionType
        ).getExtension();

    openInstructionOrExpression(extension, instructionType);
  };

  const renderEmpty = () => {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    return <div style={{ ...styles.emptyContainer, ...style }} />;
  };

  React.useEffect(
    () => {
      if (focusOnMount) {
        const timeoutId = setTimeout(() => {
          focus();
        }, 300); // Let the time to the dialog that is potentially containing the InstructionParametersEditor to finish its transition.
        return () => clearTimeout(timeoutId);
      }
    },
    [focus, focusOnMount]
  );

  const instructionType = instruction.getType();
  const instructionMetadata = getInstructionMetadata({
    instructionType,
    isCondition,
    project,
  });
  if (!instructionMetadata) return renderEmpty();

  const helpPage = instructionMetadata.getHelpPath();
  const instructionExtraInformation = getExtraInstructionInformation(
    instructionType
  );
  const tutorialIds = getInstructionTutorialIds(instructionType);
  const objectParameterIndex = objectName
    ? getObjectParameterIndex(instructionMetadata)
    : -1;

  setupInstructionParameters(
    globalObjectsContainer,
    objectsContainer,
    instruction,
    instructionMetadata,
    objectName
  );

  // For some reason, iconFileName can sometimes be undefined. see https://github.com/4ian/GDevelop/issues/5958.
  const iconFilename = instructionMetadata.getIconFilename() || '';
  const shouldInvertGrayScale =
    paletteType === 'dark' &&
    (iconFilename.startsWith('data:image/svg+xml') ||
      iconFilename.includes('_black'));

  let parameterFieldIndex = 0;
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ScrollView autoHideScrollbar>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line alignItems="flex-start">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <img
                src={iconFilename}
                alt=""
                style={{
                  ...styles.icon,
                  filter: shouldInvertGrayScale
                    ? 'grayscale(1) invert(1)'
                    : undefined,
                }}
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text style={styles.description}>
                  {instructionMetadata.getDescription()}
                </Text>
              </Column>
            </Line>
            {instructionExtraInformation && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Line>
                {instructionExtraInformation.identifier === undefined ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <AlertMessage kind={instructionExtraInformation.kind}>
                    {i18n._(instructionExtraInformation.message)}
                  </AlertMessage>
                ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <DismissableAlertMessage
                    kind={instructionExtraInformation.kind}
                    identifier={instructionExtraInformation.identifier}
                  >
                    {i18n._(instructionExtraInformation.message)}
                  </DismissableAlertMessage>
                )}
              </Line>
            )}
            {tutorialIds.length ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <ColumnStackLayout expand>
                  {tutorialIds.map(tutorialId => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <DismissableTutorialMessage
                      key={tutorialId}
                      tutorialId={tutorialId}
                    />
                  ))}
                </ColumnStackLayout>
              </Line>
            ) : null}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <div
              key={instructionType}
              style={styles.parametersContainer}
              id="instruction-parameters-container"
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type. */}
                {mapFor(0, instructionMetadata.getParametersCount(), i => {
                  const parameterMetadata = instructionMetadata.getParameter(
                    i
                  );
                  if (
                    !isParameterVisible(
                      parameterMetadata,
                      i,
                      objectParameterIndex
                    )
                  )
                    return null;

                  const parameterMetadataType = parameterMetadata.getType();
                  const ParameterComponent = ParameterRenderingService.getParameterComponent(
                    parameterMetadataType
                  );

                  // Track the field count on screen, to affect the ref to the
                  // first visible field.
                  const isFirstVisibleParameterField =
                    parameterFieldIndex === 0;
                  parameterFieldIndex++;

                  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <ParameterComponent
                      instructionMetadata={instructionMetadata}
                      instruction={instruction}
                      parameterMetadata={parameterMetadata}
                      parameterIndex={i}
                      value={instruction.getParameter(i).getPlainString()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
                      onChange={value => {
                        if (
                          instruction.getParameter(i).getPlainString() !==
                          value
                        ) {
                          instruction.setParameter(i, value);
                          setIsDirty(true);
                          forceUpdate();
                        }
                      }}
                      project={project}
                      scope={scope}
                      globalObjectsContainer={globalObjectsContainer}
                      objectsContainer={objectsContainer}
                      key={i}
                      parameterRenderingService={ParameterRenderingService}
                      resourceManagementProps={resourceManagementProps}
// @ts-expect-error - TS7006 - Parameter 'field' implicitly has an 'any' type.
                      ref={field => {
                        if (isFirstVisibleParameterField) {
                          firstVisibleField.current = field;
                        }
                      }}
                    />
                  );
                })}
              </ColumnStackLayout>
              {getVisibleParametersCount(instructionMetadata, objectName) ===
                0 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>There is nothing to configure.</Trans>
                </EmptyMessage>
              )}
              {isCondition && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Toggle
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Invert condition</Trans>}
                  labelPosition="right"
                  toggled={instruction.isInverted()}
                  style={styles.invertToggle}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'enabled' implicitly has an 'any' type.
                  onToggle={(e, enabled) => {
                    instruction.setInverted(enabled);
                    forceUpdate();
                  }}
                />
              )}
              {instructionMetadata.isOptionallyAsync() && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Toggle
                  label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>
                      Wait for the action to end before executing the actions
                      (and subevents) following it
                    </Trans>
                  }
                  labelPosition="right"
                  toggled={instruction.isAwaited()}
                  style={styles.invertToggle}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'enabled' implicitly has an 'any' type.
                  onToggle={(e, enabled) => {
                    instruction.setAwaited(enabled);
                    forceUpdate();
                  }}
                />
              )}
              {isAnEventFunctionMetadata(instructionMetadata) && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <FlatButton
                    key={'open-extension'}
                    label={
                      isCondition ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <Trans>Edit this condition events</Trans>
                      ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <Trans>Edit this action events</Trans>
                      )
                    }
                    onClick={() => {
                      openExtension(i18n);
                    }}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    leftIcon={<Edit />}
                  />
                </Line>
              )}
            </div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line>
              {!noHelpButton && helpPage && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <HelpButton
                  helpPagePath={instructionMetadata.getHelpPath()}
                  label={
                    isCondition ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>Help for this condition</Trans>
                    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>Help for this action</Trans>
                    )
                  }
                />
              )}
            </Line>
          </Column>
        </ScrollView>
      )}
    </I18n>
  );
});

export default InstructionParametersEditor;
