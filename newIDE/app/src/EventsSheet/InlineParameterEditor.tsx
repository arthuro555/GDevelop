import * as React from 'react';
// @ts-expect-error - TS6142 - Module './InlinePopover' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/InlinePopover.tsx', but '--jsx' is not set.
import InlinePopover from './InlinePopover';
import ParameterRenderingService from './ParameterRenderingService';
import { ResourceManagementProps } from '../ResourcesList/ResourceSource';
import { EventsScope } from '../InstructionOrExpression/EventsScope.flow';
import { setupInstructionParameters } from '../InstructionOrExpression/SetupInstructionParameters';
import { getObjectParameterIndex } from '../InstructionOrExpression/EnumerateInstructions';
import { ParameterFieldInterface } from './ParameterFields/ParameterFieldCommons';
import Drawer from '@material-ui/core/Drawer';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../UI/Grid';
import { isNativeMobileApp } from '../Utils/Platform';
import {
  getAvoidSoftKeyboardStyle,
  useSoftKeyboardBottomOffset,
} from '../UI/MobileSoftKeyboard';
const gd: libGDevelop = global.gd;

type Props = {
  project: gdProject,
  scope: EventsScope,
  globalObjectsContainer: gdObjectsContainer,
  objectsContainer: gdObjectsContainer,
  open: boolean,
  onRequestClose: () => void,
  onApply: () => void,
  onChange: (arg1: string) => void,
  instruction: gdInstruction | null | undefined,
  isCondition: boolean,
  parameterIndex: number,
  anchorEl: any | null | undefined,
  resourceManagementProps: ResourceManagementProps
};

const InlineParameterEditor = ({
  project,
  scope,
  globalObjectsContainer,
  objectsContainer,
  open,
  onRequestClose,
  onApply,
  onChange,
  instruction,
  isCondition,
  parameterIndex,
  anchorEl,
  resourceManagementProps,
}: Props) => {
  const [
    parameterMetadata,
    setParameterMetadata,
  ] = React.useState<gdParameterMetadata | null | undefined>(null);
  const [
    instructionMetadata,
    setInstructionMetadata,
  ] = React.useState<gdInstructionMetadata | null | undefined>(null);
  const [ParameterComponent, setParameterComponent] = React.useState<any>(null);
  const field = React.useRef<ParameterFieldInterface | null | undefined>(null);

  const softKeyboardBottomOffset = useSoftKeyboardBottomOffset();

  const unload = () => {
    setParameterMetadata(null);
    setInstructionMetadata(null);
    setParameterComponent(null);
  };

  const loadComponentFromInstruction = React.useCallback(
    () => {
      if (!instruction) return unload();

      const type = instruction.getType();
      const instructionMetadata = isCondition
        ? gd.MetadataProvider.getConditionMetadata(
            project.getCurrentPlatform(),
            type
          )
        : gd.MetadataProvider.getActionMetadata(
            project.getCurrentPlatform(),
            type
          );

      if (parameterIndex >= instructionMetadata.getParametersCount())
        return unload();

      const parameterMetadata = instructionMetadata.getParameter(
        parameterIndex
      );
      const ParameterComponent = ParameterRenderingService.getParameterComponent(
        parameterMetadata.getType()
      );
      setParameterComponent(ParameterComponent);
      setParameterMetadata(parameterMetadata);
      setInstructionMetadata(instructionMetadata);
      // Give a bit of time for the popover to mount itself
      setTimeout(() => {
        // We select the whole text when the inline field opens, for easier editing.
        if (field.current) field.current.focus({ selectAll: true });
      }, 10);
    },
    [instruction, isCondition, parameterIndex, project]
  );

  React.useEffect(
    () => {
      if (open && instruction) {
        loadComponentFromInstruction();
      }
    },
    [open, instruction, loadComponentFromInstruction]
  );

  const onParameterEdited = React.useCallback(
    () => {
      // When the parameter is done being edited, ensure the instruction parameters
      // are properly set up. For example, it's possible that the object name was
      // changed, and so the associated behavior should be updated.
      if (instruction && instructionMetadata) {
        const objectParameterIndex = getObjectParameterIndex(
          instructionMetadata
        );
        setupInstructionParameters(
          globalObjectsContainer,
          objectsContainer,
          instruction,
          instructionMetadata,
          objectParameterIndex !== -1
            ? instruction.getParameter(objectParameterIndex).getPlainString()
            : null
        );
      }

      onApply();
    },
    [
      instruction,
      instructionMetadata,
      onApply,
      objectsContainer,
      globalObjectsContainer,
    ]
  );

  if (
    !ParameterComponent ||
    !open ||
    !instruction ||
    !parameterMetadata ||
    !instructionMetadata
  )
    return null;

  const parameterComponent = (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ParameterComponent
      instruction={instruction}
      instructionMetadata={instructionMetadata}
      parameterMetadata={parameterMetadata}
      parameterIndex={parameterIndex}
      value={instruction.getParameter(parameterIndex).getPlainString()}
      onChange={onChange}
      onRequestClose={onRequestClose}
      onApply={onParameterEdited}
      project={project}
      scope={scope}
      globalObjectsContainer={globalObjectsContainer}
      objectsContainer={objectsContainer}
      key={instruction.ptr}
      ref={field}
      parameterRenderingService={ParameterRenderingService}
      isInline
      resourceManagementProps={resourceManagementProps}
    />
  );

  if (isNativeMobileApp()) {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Drawer
        anchor={'bottom'}
        open={true}
        onClose={onApply}
        transitionDuration={0}
        PaperProps={{
          style: {
            ...getAvoidSoftKeyboardStyle(softKeyboardBottomOffset),
            paddingBottom: 40,
            maxWidth: 600,
            margin: 'auto',
          },
        }}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line>{parameterComponent}</Line>
        </Column>
      </Drawer>
    );
  }

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <InlinePopover
      open={true}
      anchorEl={anchorEl}
      onRequestClose={onRequestClose}
      onApply={onParameterEdited}
    >
      {parameterComponent}
    </InlinePopover>
  );
};

export default InlineParameterEditor;
