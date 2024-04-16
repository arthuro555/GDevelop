// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module './Instruction' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/EventsTree/Instruction.tsx', but '--jsx' is not set.
import Instruction, { reactDndInstructionType } from './Instruction';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import { mapFor } from '../../Utils/MapFor';
import {
  isInstructionSelected,
  InstructionsListContext,
  InstructionContext,
  ParameterContext,
} from '../SelectionHandler';
// @ts-expect-error - TS6142 - Module './DropIndicator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/EventsTree/DropIndicator.tsx', but '--jsx' is not set.
import DropIndicator from './DropIndicator';
import { hasClipboardConditions, hasClipboardActions } from '../ClipboardKind';
// @ts-expect-error - TS6142 - Module '../../UI/DragAndDrop/DropTarget' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DropTarget.tsx', but '--jsx' is not set.
import { makeDropTarget } from '../../UI/DragAndDrop/DropTarget';
import { ScreenType } from '../../UI/Responsive/ScreenTypeMeasurer';
import { WindowSizeType } from '../../UI/Responsive/ResponsiveWindowMeasurer';
import { useLongTouch } from '../../Utils/UseLongTouch';
import { EventsScope } from '../../InstructionOrExpression/EventsScope.flow';

const styles = {
  addButton: {
    cursor: 'pointer',
  },
  pasteButtonContainer: {
    marginLeft: '4px',
  },
} as const;

type Props = {
  platform: gdPlatform,
  instrsList: gdInstructionsList,
  areConditions: boolean,
  onAddNewInstruction: (arg1: InstructionsListContext) => void,
  onPasteInstructions: (arg1: InstructionsListContext) => void,
  onMoveToInstruction: (destinationContext: InstructionContext) => void,
  onMoveToInstructionsList: (destinationContext: InstructionsListContext) => void,
  onInstructionClick: (arg1: InstructionContext) => void,
  onInstructionDoubleClick: (arg1: InstructionContext) => void,
  onInstructionContextMenu: (x: number, y: number, arg3: InstructionContext) => void,
  onAddInstructionContextMenu: (arg1: HTMLButtonElement, arg2: InstructionsListContext) => void,
  onParameterClick: (arg1: ParameterContext) => void,
  selection: any,
  addButtonLabel?: React.ReactNode,
  addButtonId?: string,
  className?: string,
  style?: any,
  disabled: boolean,
  renderObjectThumbnail: (arg1: string) => React.ReactElement,
  screenType: ScreenType,
  windowSize: WindowSizeType,
  scope: EventsScope,
  resourcesManager: gdResourcesManager,
  globalObjectsContainer: gdObjectsContainer,
  objectsContainer: gdObjectsContainer,
  idPrefix: string
};

const DropTarget = makeDropTarget<{
  isCondition: boolean
}>(reactDndInstructionType);

const addButtonTooltipLabelMouse = t`Right-click for quick menu`;
const addButtonTooltipLabelTouch = t`Long press for quick menu`;

export default function InstructionsList({
  platform,
  addButtonId,
  addButtonLabel,
  areConditions,
  className,
  instrsList,
  onAddNewInstruction,
  onPasteInstructions,
  onMoveToInstruction,
  onMoveToInstructionsList,
  onInstructionClick,
  onInstructionContextMenu,
  onInstructionDoubleClick,
  onAddInstructionContextMenu,
  onParameterClick,
  selection,
  style,
  disabled,
  renderObjectThumbnail,
  screenType,
  windowSize,
  scope,
  resourcesManager,
  globalObjectsContainer,
  objectsContainer,
  idPrefix,
}: Props) {
  const [canPaste, setCanPaste] = React.useState(false);

  const addNewInstruction = React.useCallback(
    () => {
      if (onAddNewInstruction)
        onAddNewInstruction({
          instrsList,
          isCondition: areConditions,
        });
    },
    [onAddNewInstruction, instrsList, areConditions]
  );

  const pasteInstructions = React.useCallback(
    () => {
      onPasteInstructions({
        instrsList,
        isCondition: areConditions,
      });
    },
    [onPasteInstructions, instrsList, areConditions]
  );

// @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type.
  const instructions = mapFor(0, instrsList.size(), i => {
    const instruction = instrsList.get(i);
    const instructionContext = {
      isCondition: areConditions,
      instrsList: instrsList,
      instruction,
      indexInList: i,
    } as const;

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Instruction
        platform={platform}
        instruction={instruction}
        isCondition={areConditions}
        key={instruction.ptr}
        selected={isInstructionSelected(selection, instruction)}
        onMoveToInstruction={() => onMoveToInstruction(instructionContext)}
        onClick={() => onInstructionClick(instructionContext)}
        onDoubleClick={() => onInstructionDoubleClick(instructionContext)}
// @ts-expect-error - TS7006 - Parameter 'x' implicitly has an 'any' type. | TS7006 - Parameter 'y' implicitly has an 'any' type.
        onContextMenu={(x, y) =>
          onInstructionContextMenu(x, y, instructionContext)
        }
// @ts-expect-error - TS7006 - Parameter 'domEvent' implicitly has an 'any' type. | TS7006 - Parameter 'parameterIndex' implicitly has an 'any' type.
        onParameterClick={(domEvent, parameterIndex) =>
          onParameterClick({
            isCondition: instructionContext.isCondition,
            instrsList: instructionContext.instrsList,
            instruction: instructionContext.instruction,
            indexInList: instructionContext.indexInList,
            parameterIndex,
            domEvent,
          })
        }
        selection={selection}
        onAddNewSubInstruction={onAddNewInstruction}
        onPasteSubInstructions={onPasteInstructions}
        onMoveToSubInstruction={onMoveToInstruction}
        onMoveToSubInstructionsList={onMoveToInstructionsList}
        onSubInstructionClick={onInstructionClick}
        onSubInstructionDoubleClick={onInstructionDoubleClick}
        onSubInstructionContextMenu={onInstructionContextMenu}
        onAddSubInstructionContextMenu={onAddInstructionContextMenu}
        onSubParameterClick={onParameterClick}
        disabled={disabled}
        renderObjectThumbnail={renderObjectThumbnail}
        screenType={screenType}
        windowSize={windowSize}
        scope={scope}
        resourcesManager={resourcesManager}
        globalObjectsContainer={globalObjectsContainer}
        objectsContainer={objectsContainer}
        id={`${idPrefix}-${areConditions ? 'condition' : 'action'}-${i}`}
      />
    );
  });

  // Note: might be worth fixing this warning:
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const instructionsListContext = {
    instrsList,
    isCondition: areConditions,
  } as const;

  const addButton = React.useRef<HTMLButtonElement | null | undefined>(null);
  const addButtonDefaultLabel = areConditions ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Trans>Add condition</Trans>
  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Trans>Add action</Trans>
  );
  const addButtonTooltipLabel =
    screenType === 'touch'
      ? addButtonTooltipLabelTouch
      : addButtonTooltipLabelMouse;

  const longTouchForContextMenuProps = useLongTouch(
    React.useCallback(
      event => {
        addButton.current &&
          onAddInstructionContextMenu(
            addButton.current,
            instructionsListContext
          );
      },
      [onAddInstructionContextMenu, instructionsListContext, addButton]
    )
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <DropTarget
// @ts-expect-error - TS7006 - Parameter 'draggedItem' implicitly has an 'any' type.
          canDrop={draggedItem => draggedItem.isCondition === areConditions}
          drop={() => {
            onMoveToInstructionsList({
              isCondition: areConditions,
              instrsList: instrsList,
            });
          }}
        >
{ /* @ts-expect-error - TS7031 - Binding element 'connectDropTarget' implicitly has an 'any' type. | TS7031 - Binding element 'isOver' implicitly has an 'any' type. | TS7031 - Binding element 'canDrop' implicitly has an 'any' type. */}
          {({ connectDropTarget, isOver, canDrop }) =>
            connectDropTarget(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <div
                className={className}
                style={style}
                id={`${idPrefix}-${areConditions ? 'conditions' : 'actions'}`}
              >
                {instructions}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                {isOver && <DropIndicator canDrop={canDrop} />}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <span
                  onPointerEnter={() => {
                    setCanPaste(
                      (areConditions && hasClipboardConditions()) ||
                        (!areConditions && hasClipboardActions())
                    );
                  }}
                  onPointerLeave={() => {
                    setCanPaste(false);
                  }}
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <button
                    style={styles.addButton}
                    className="add-link"
                    onClick={addNewInstruction}
                    onContextMenu={e => {
                      e.stopPropagation();
                      onAddInstructionContextMenu(
                        e.currentTarget,
                        instructionsListContext
                      );
                    }}
                    {...longTouchForContextMenuProps}
// @ts-expect-error - TS2322 - Type 'MutableRefObject<HTMLButtonElement | null | undefined>' is not assignable to type 'LegacyRef<HTMLButtonElement> | undefined'.
                    ref={addButton}
                    id={
                      addButtonId ||
                      `${
                        areConditions
                          ? 'add-condition-button'
                          : 'add-action-button'
                      }${instructions.length === 0 ? '-empty' : ''}`
                    }
                    title={i18n._(addButtonTooltipLabel)}
                  >
                    {addButtonLabel || addButtonDefaultLabel}
                  </button>
                  {canPaste && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <span style={styles.pasteButtonContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <button
                        style={styles.addButton}
                        className="add-link"
                        onClick={pasteInstructions}
                      >
                        {areConditions ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          <Trans>(or paste conditions)</Trans>
                        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          <Trans>(or paste actions)</Trans>
                        )}
                      </button>
                    </span>
                  )}
                </span>
              </div>
            )
          }
        </DropTarget>
      )}
    </I18n>
  );
}
