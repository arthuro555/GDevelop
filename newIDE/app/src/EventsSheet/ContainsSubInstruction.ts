export const containsSubInstructions = (
  instruction: gd.Instruction,
  instructionsList: gd.InstructionsList
) => {
  const subInstructionsList = instruction.getSubInstructions();
  if (gd.compare(subInstructionsList, instructionsList)) return true;

  for (let i = 0; i < subInstructionsList.size(); ++i) {
    const subInstruction = subInstructionsList.get(i);
    if (containsSubInstructions(subInstruction, instructionsList)) return true;
  }

  return false;
};
