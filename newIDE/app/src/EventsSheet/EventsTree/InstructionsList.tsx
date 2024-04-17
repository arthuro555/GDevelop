import { Trans } from '@lingui/macro';

import { t } from '@lingui/macro';
import * as React from 'react';

import Instruction, { reactDndInstructionType } from './Instruction';

import { I18n } from '@lingui/react';
import { mapFor } from '../../Utils/MapFor';
import {
  isInstructionSelected,
  InstructionsListContext,
  InstructionContext,
  ParameterContext,
} from '../SelectionHandler';

import DropIndicator from './DropIndicator';
import { hasClipboardConditions, hasClipboardActions } from '../ClipboardKind';

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
  platform: gd.Platform;
  instrsList: gd.InstructionsList;
  areConditions: boolean;
  onAddNewInstruction: (arg1: InstructionsListContext) => void;
  onPasteInstructions: (arg1: InstructionsListContext) => void;
  onMoveToInstruction: (destinationContext: InstructionContext) => void;
  onMoveToInstructionsList: (
    destinationContext: InstructionsListContext
  ) => void;
  onInstructionClick: (arg1: InstructionContext) => void;
  onInstructionDoubleClick: (arg1: InstructionContext) => void;
  onInstructionContextMenu: (
    x: number,
    y: number,
    arg3: InstructionContext
  ) => void;
  onAddInstructionContextMenu: (
    arg1: HTMLButtonElement,
    arg2: InstructionsListContext
  ) => void;
  onParameterClick: (arg1: ParameterContext) => void;
  selection: any;
  addButtonLabel?: React.ReactNode;
  addButtonId?: string;
  className?: string;
  style?: any;
  disabled: boolean;
  renderObjectThumbnail: (arg1: string) => React.ReactElement;
  screenType: ScreenType;
  windowSize: WindowSizeType;
  scope: EventsScope;
  resourcesManager: gd.ResourcesManager;
  globalObjectsContainer: gd.ObjectsContainer;
  objectsContainer: gd.ObjectsContainer;
  idPrefix: string;
};

const DropTarget = makeDropTarget<{
  isCondition: boolean;
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

  const addNewInstruction = React.useCallback(() => {
    if (onAddNewInstruction)
      onAddNewInstruction({
        instrsList,
        isCondition: areConditions,
      });
  }, [onAddNewInstruction, instrsList, areConditions]);

  const pasteInstructions = React.useCallback(() => {
    onPasteInstructions({
      instrsList,
      isCondition: areConditions,
    });
  }, [onPasteInstructions, instrsList, areConditions]);

  const instructions = mapFor(0, instrsList.size(), (i) => {
    const instruction = instrsList.get(i);
    const instructionContext = {
      isCondition: areConditions,
      instrsList: instrsList,
      instruction,
      indexInList: i,
    } as const;

    return (
      <Instruction
        platform={platform}
        instruction={instruction}
        isCondition={areConditions}
        key={instruction.ptr}
        selected={isInstructionSelected(selection, instruction)}
        onMoveToInstruction={() => onMoveToInstruction(instructionContext)}
        onClick={() => onInstructionClick(instructionContext)}
        onDoubleClick={() => onInstructionDoubleClick(instructionContext)}
        onContextMenu={(x, y) =>
          onInstructionContextMenu(x, y, instructionContext)
        }
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

  const addButton = React.useRef<HTMLButtonElement>(null);
  const addButtonDefaultLabel = areConditions ? (
    <Trans>Add condition</Trans>
  ) : (
    <Trans>Add action</Trans>
  );
  const addButtonTooltipLabel =
    screenType === 'touch'
      ? addButtonTooltipLabelTouch
      : addButtonTooltipLabelMouse;

  const longTouchForContextMenuProps = useLongTouch(
    React.useCallback(
      (event) => {
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
    <I18n>
      {({ i18n }) => (
        <DropTarget
          canDrop={(draggedItem) => draggedItem.isCondition === areConditions}
          drop={() => {
            onMoveToInstructionsList({
              isCondition: areConditions,
              instrsList: instrsList,
            });
          }}
        >
          {({ connectDropTarget, isOver, canDrop }) =>
            connectDropTarget(
              <div
                className={className}
                style={style}
                id={`${idPrefix}-${areConditions ? 'conditions' : 'actions'}`}
              >
                {instructions}
                {isOver && <DropIndicator canDrop={canDrop} />}
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
{ /* @ts-expect-error - TS2322 - Type '{ children: {}; ref: RefObject<HTMLButtonElement>; id: string; title: string; onTouchStart: (event: TouchEvent) => void; onTouchMove: (event: TouchEvent) => void; ... 4 more ...; onContextMenu: (e: MouseEvent<...>) => void; }' is not assignable to type 'DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>'. */}
                  <button
                    style={styles.addButton}
                    className="add-link"
                    onClick={addNewInstruction}
                    onContextMenu={(e) => {
                      e.stopPropagation();
                      onAddInstructionContextMenu(
                        e.currentTarget,
                        instructionsListContext
                      );
                    }}
                    {...longTouchForContextMenuProps}
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
                    <span style={styles.pasteButtonContainer}>
                      <button
                        style={styles.addButton}
                        className="add-link"
                        onClick={pasteInstructions}
                      >
                        {areConditions ? (
                          <Trans>(or paste conditions)</Trans>
                        ) : (
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
