import {containsSubInstructions} from './ContainsSubInstruction';
const gd: libGDevelop = global.gd;

// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
describe('ContainsSubInstructions', () => {
  const insertInstruction = (list: gdInstructionsList, type: string) => {
    const instruction = new gd.Instruction();
    instruction.setType(type);
    list.insert(instruction, list.size());
    instruction.delete();
  };

// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('can tell if a list is part of the (nested) sub instructions of an instruction', () => {
    const list = new gd.InstructionsList();

    insertInstruction(list, 'Type1');
    insertInstruction(list.get(0).getSubInstructions(), 'Type1.1');
    insertInstruction(list.get(0).getSubInstructions(), 'Type1.2');
    insertInstruction(
      list
        .get(0)
        .getSubInstructions()
        .get(1)
        .getSubInstructions(),
      'Type1.2.1'
    );
    insertInstruction(list, 'Type2');
    insertInstruction(list, 'Type3');
    insertInstruction(list.get(2).getSubInstructions(), 'Type3.1');

    expect(
      containsSubInstructions(list.get(0), list.get(0).getSubInstructions())
    ).toBe(true);
    expect(
      containsSubInstructions(list.get(1), list.get(0).getSubInstructions())
    ).toBe(false);
    expect(
      containsSubInstructions(list.get(2), list.get(0).getSubInstructions())
    ).toBe(false);

    expect(
      containsSubInstructions(list.get(0), list.get(2).getSubInstructions())
    ).toBe(false);
    expect(
      containsSubInstructions(list.get(1), list.get(2).getSubInstructions())
    ).toBe(false);
    expect(
      containsSubInstructions(list.get(2), list.get(2).getSubInstructions())
    ).toBe(true);

    expect(
      containsSubInstructions(
        list.get(0),
        list
          .get(0)
          .getSubInstructions()
          .get(1)
          .getSubInstructions()
      )
    ).toBe(true);
    expect(
      containsSubInstructions(
        list.get(1),
        list
          .get(0)
          .getSubInstructions()
          .get(1)
          .getSubInstructions()
      )
    ).toBe(false);
    expect(
      containsSubInstructions(
        list.get(2),
        list
          .get(0)
          .getSubInstructions()
          .get(1)
          .getSubInstructions()
      )
    ).toBe(false);

    list.delete();
  });
});
