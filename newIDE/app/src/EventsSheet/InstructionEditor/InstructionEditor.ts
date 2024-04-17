import * as React from 'react';

import { I18n as I18nType } from '@lingui/core';
import {
  enumerateObjectAndBehaviorsInstructions,
  getObjectParameterIndex,
} from '../../InstructionOrExpression/EnumerateInstructions';
import {
  createTree,
  InstructionTreeNode,
} from '../../InstructionOrExpression/CreateTree';
import {
  EnumeratedInstructionMetadata,
  filterEnumeratedInstructionOrExpressionMetadataByScope,
} from '../../InstructionOrExpression/EnumeratedInstructionOrExpressionMetadata';
import { EventsScope } from '../../InstructionOrExpression/EventsScope.flow';

/** Helper to get the gd.InstructionMetadata of an instruction. */
export const getInstructionMetadata = ({
  instructionType,
  isCondition,
  project,
}: {
  instructionType: string;
  isCondition: boolean;
  project: gd.Project;
}): gd.InstructionMetadata | null | undefined => {
  if (!instructionType) return null;

  return isCondition
    ? gd.MetadataProvider.getConditionMetadata(
        project.getCurrentPlatform(),
        instructionType
      )
    : gd.MetadataProvider.getActionMetadata(
        project.getCurrentPlatform(),
        instructionType
      );
};

type Parameters = {
  project: gd.Project;
  instruction: gd.Instruction;
  isCondition: boolean;
  isNewInstruction: boolean;
  scope: EventsScope;
  globalObjectsContainer: gd.ObjectsContainer;
  objectsContainer: gd.ObjectsContainer;
  i18n: I18nType;
};

type InstructionEditorState = {
  chosenObjectName: string | null | undefined;
  chosenObjectInstructionsInfo:
    | Array<EnumeratedInstructionMetadata>
    | null
    | undefined;
  chosenObjectInstructionsInfoTree: InstructionTreeNode | null | undefined;
};

type InstructionEditorSetters = {
  /** Select an instruction - which can be a free or an object instruction. */
  chooseInstruction: (type: string) => InstructionEditorState & {
    instruction: gd.Instruction;
  };
  /** Select an object, so that then this object specific instructions can be searched and selected. */
  chooseObject: (objectName: string) => InstructionEditorState & {
    instruction: gd.Instruction;
  };
  /** Select an instruction for the currently selected object. */
  chooseObjectInstruction: (type: string) => InstructionEditorState & {
    instruction: gd.Instruction;
  };
};

const findInstruction = (
  list: Array<EnumeratedInstructionMetadata>,
  instructionType: string
): EnumeratedInstructionMetadata | null | undefined => {
  return list.find(({ type }) => type === instructionType);
};

/** React Hook handling the state of an instruction editor. */
export const useInstructionEditor = ({
  instruction,
  isCondition,
  project,
  isNewInstruction,
  scope,
  globalObjectsContainer,
  objectsContainer,
  i18n,
}: Parameters): [InstructionEditorState, InstructionEditorSetters] => {
  const getChosenObjectState = (
    objectName: string,
    discardInstructionTypeIfNotInObjectInstructions: boolean
  ): InstructionEditorState => {
    const chosenObjectInstructionsInfo =
      filterEnumeratedInstructionOrExpressionMetadataByScope(
        enumerateObjectAndBehaviorsInstructions(
          isCondition,
          globalObjectsContainer,
          objectsContainer,
          objectName,
          i18n
        ),
        scope
      );

    // As we changed to a new object, verify if the instruction is still valid for this object. If not,
    // discard the chosen instruction - this is to avoid the user creating invalid instructions.
    if (
      instruction.getType() &&
      discardInstructionTypeIfNotInObjectInstructions
    ) {
      const instructionMetadata = findInstruction(
        chosenObjectInstructionsInfo,
        instruction.getType()
      );
      if (!instructionMetadata) {
        instruction.setType('');
      }
    }

    return {
      chosenObjectName: objectName,
      chosenObjectInstructionsInfo,
      chosenObjectInstructionsInfoTree: createTree(
        chosenObjectInstructionsInfo
      ),
    };
  };

  const getInitialState = (): InstructionEditorState => {
    if (!isNewInstruction) {
      // Check if the instruction is an object/behavior instruction. If yes
      // select the object, which is the first parameter of the instruction.
      const instructionType: string = instruction.getType();
      const instructionMetadata = isCondition
        ? gd.MetadataProvider.getConditionMetadata(
            project.getCurrentPlatform(),
            instructionType
          )
        : gd.MetadataProvider.getActionMetadata(
            project.getCurrentPlatform(),
            instructionType
          );
      const objectParameterIndex = getObjectParameterIndex(instructionMetadata);
      if (objectParameterIndex !== -1) {
        return getChosenObjectState(
          instruction.getParameter(objectParameterIndex).getPlainString(),
          false /* Even if the instruction is invalid for the object, show it as it's what we have already */
        );
      }
    }

    // We're either making a new instruction or editing a free instruction.
    return {
      chosenObjectName: null,
      chosenObjectInstructionsInfo: null,
      chosenObjectInstructionsInfoTree: null,
    };
  };

  const [state, setState] = React.useState(getInitialState);

  const chooseObject = (objectName: string) => {
    const newState = getChosenObjectState(objectName, true);
    setState(newState);
    return {
      instruction,
      ...newState,
    };
  };

  const chooseObjectInstruction = (type: string) => {
    instruction.setType(type);
    if (state.chosenObjectName) {
      const newState = getChosenObjectState(state.chosenObjectName, true);
      setState(newState);
      return {
        instruction,
        ...newState,
      };
    }

    return {
      instruction,
      ...state,
    };
  };

  const chooseInstruction = (type: string) => {
    instruction.setType(type);
    const newState = {
      chosenObjectName: null,
      chosenObjectInstructionsInfo: null,
      chosenObjectInstructionsInfoTree: null,
    } as const;
    setState({
      chosenObjectName: null,
      chosenObjectInstructionsInfo: null,
      chosenObjectInstructionsInfoTree: null,
    });

    return {
      instruction,
      ...newState,
    };
  };

  return [
    state,
    {
      chooseInstruction,
      chooseObject,
      chooseObjectInstruction,
    },
  ];
};
