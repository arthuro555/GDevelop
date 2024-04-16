// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
import Popover from '@material-ui/core/Popover';
import * as React from 'react';
import { ResourceManagementProps } from '../../ResourcesList/ResourceSource';
import {
  useInstructionEditor,
  getInstructionMetadata,
} from './InstructionEditor';
import InstructionOrObjectSelector, {
  TabName,
// @ts-expect-error - TS6142 - Module './InstructionOrObjectSelector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/InstructionEditor/InstructionOrObjectSelector.tsx', but '--jsx' is not set.
} from './InstructionOrObjectSelector';
// @ts-expect-error - TS6142 - Module './InstructionOrExpressionSelector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/InstructionEditor/InstructionOrExpressionSelector/index.tsx', but '--jsx' is not set.
import InstructionOrExpressionSelector from './InstructionOrExpressionSelector';
import { EventsScope } from '../../InstructionOrExpression/EventsScope.flow';
// @ts-expect-error - TS6142 - Module '../../UI/Responsive/SelectColumns' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Responsive/SelectColumns.tsx', but '--jsx' is not set.
import { SelectColumns } from '../../UI/Responsive/SelectColumns';
import useForceUpdate from '../../Utils/UseForceUpdate';
import { setupInstructionParameters } from '../../InstructionOrExpression/SetupInstructionParameters';
// @ts-expect-error - TS6142 - Module '../../UI/TextButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextButton.tsx', but '--jsx' is not set.
import TextButton from '../../UI/TextButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Paste'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Paste.js' implicitly has an 'any' type.
import Paste from '../../UI/CustomSvgIcons/Paste';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';

const styles = {
  fullHeightSelector: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '400px',
    width: '400px',
  },
} as const;

type StepName = 'object-or-free-instructions' | 'object-instructions';

type Props = {
  project: gdProject,
  scope: EventsScope,
  globalObjectsContainer: gdObjectsContainer,
  objectsContainer: gdObjectsContainer,
  instruction: gdInstruction,
  isCondition: boolean,
  resourceManagementProps: ResourceManagementProps,
  style?: any,
  anchorEl: HTMLElement | null | undefined,
  isNewInstruction: boolean,
  onCancel: () => void,
  onSubmit: () => void,
  open: boolean,
  openInstructionOrExpression: (extension: gdPlatformExtension, type: string) => void,
  i18n: I18nType,
  canPasteInstructions: boolean // Unused,
  onPasteInstructions: () => void // Unused
};

/**
 * An instruction editor in a popover.
 * Does not show the parameters for the instruction.
 */
const InstructionEditorMenu = ({
  project,
  globalObjectsContainer,
  objectsContainer,
  onCancel,
  open,
  instruction,
  isCondition,
  isNewInstruction,
  anchorEl,
  scope,
  onSubmit,
  canPasteInstructions,
  onPasteInstructions,
  i18n,
}: Props) => {
  const forceUpdate = useForceUpdate();
  const [
    instructionEditorState,
    instructionEditorSetters,
  ] = useInstructionEditor({
    instruction,
    isCondition,
    project,
    isNewInstruction,
    scope,
    globalObjectsContainer,
    objectsContainer,
    i18n,
  });
  const {
    chosenObjectName,
    chosenObjectInstructionsInfo,
    chosenObjectInstructionsInfoTree,
  } = instructionEditorState;
  const {
    chooseInstruction,
    chooseObject,
    chooseObjectInstruction,
  } = instructionEditorSetters;
  // As we're in a context menu, always start from 'object-or-free-instructions' step and with 'objects' tab.
  const [step, setStep] = React.useState<StepName>('object-or-free-instructions');
  const [
    currentInstructionOrObjectSelectorTab,
    setCurrentInstructionOrObjectSelectorTab,
  ] = React.useState<TabName>('objects');
  const instructionType: string = instruction.getType();

  const submitInstruction = ({
    instruction,
    chosenObjectName,
  }: {
    instruction: gdInstruction,
    chosenObjectName: string | null | undefined
  }) => {
    // Before submitting the instruction, ensure that we set the default
    // parameters, notably the object and behavior name.
    const instructionMetadata = getInstructionMetadata({
      instructionType: instruction.getType(),
      isCondition,
      project,
    });
    if (instructionMetadata) {
      setupInstructionParameters(
        globalObjectsContainer,
        objectsContainer,
        instruction,
        instructionMetadata,
        chosenObjectName
      );
    }
    onSubmit();
  };

  const renderInstructionOrObjectSelector = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <InstructionOrObjectSelector
          key="instruction-or-object-selector"
          style={styles.fullHeightSelector}
          project={project}
          scope={scope}
          currentTab={currentInstructionOrObjectSelectorTab}
          onChangeTab={setCurrentInstructionOrObjectSelectorTab}
          globalObjectsContainer={globalObjectsContainer}
          objectsContainer={objectsContainer}
          isCondition={isCondition}
          chosenInstructionType={
            !chosenObjectName ? instructionType : undefined
          }
          onChooseInstruction={(instructionType: string) => {
            const { instruction, chosenObjectName } = chooseInstruction(
              instructionType
            );
            submitInstruction({ instruction, chosenObjectName });
          }}
          chosenObjectName={chosenObjectName}
// @ts-expect-error - TS7006 - Parameter 'chosenObjectName' implicitly has an 'any' type.
          onChooseObject={chosenObjectName => {
            chooseObject(chosenObjectName);
            setStep('object-instructions');
          }}
          focusOnMount={!instructionType}
          onSearchStartOrReset={forceUpdate}
          i18n={i18n}
        />
      )}
    </I18n>
  );

  const renderObjectInstructionSelector = () =>
    chosenObjectInstructionsInfoTree && chosenObjectInstructionsInfo ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <InstructionOrExpressionSelector
        key="object-instruction-selector"
        style={styles.fullHeightSelector}
        instructionsInfo={chosenObjectInstructionsInfo}
        instructionsInfoTree={chosenObjectInstructionsInfoTree}
        iconSize={24}
        onChoose={(instructionType: string) => {
          const { instruction, chosenObjectName } = chooseObjectInstruction(
            instructionType
          );
          submitInstruction({ instruction, chosenObjectName });
        }}
        selectedType={instructionType}
        useSubheaders
        focusOnMount={!instructionType}
        searchPlaceholderObjectName={chosenObjectName}
        searchPlaceholderIsCondition={isCondition}
      />
    ) : null;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Popover
      open={open}
      onClose={onCancel}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SelectColumns
            columnsRenderer={{
              'instruction-or-object-selector': renderInstructionOrObjectSelector,
              'object-instruction-selector': renderObjectInstructionSelector,
            }}
            getColumns={() => {
              if (step === 'object-or-free-instructions') {
                return [
                  {
                    columnName: 'instruction-or-object-selector',
                  },
                ];
              } else {
                return [
                  {
                    columnName: 'object-instruction-selector',
                  },
                ];
              }
            }}
          />
        </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line noMargin justifyContent="flex-end">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TextButton
            label={
              isCondition ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>Paste condition(s)</Trans>
              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>Paste action(s)</Trans>
              )
            }
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            icon={<Paste />}
            disabled={!canPasteInstructions}
            onClick={() => onPasteInstructions()}
          />
        </Line>
      </Column>
    </Popover>
  );
};

export default InstructionEditorMenu;
