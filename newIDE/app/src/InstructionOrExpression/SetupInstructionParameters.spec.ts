import {enumerateObjectAndBehaviorsInstructions, enumerateFreeInstructions} from './EnumerateInstructions';
import { setupInstructionParameters } from './SetupInstructionParameters';
const gd: libGDevelop = global.gd;

const makeFakeI18n = (fakeI18n: undefined): I18nType => ({
// @ts-expect-error - TS2698 - Spread types may only be created from object types.
  ...fakeI18n,
// @ts-expect-error - TS7006 - Parameter 'message' implicitly has an 'any' type.
  _: message => message.id,
});

// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
describe('setupInstructionParameters', () => {
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('sets the proper number of parameters', () => {
    const project = new gd.ProjectHelper.createNewGDJSProject();
    const layout = project.insertNewLayout('Scene', 0);
    const objectName = 'MySpriteObject';
    layout.insertNewObject(project, 'Sprite', objectName, 0);

    // Simulate that we select an instruction
    const enumeratedInstructions = enumerateFreeInstructions(
      false,
// @ts-expect-error - TS2554 - Expected 1 arguments, but got 0.
      makeFakeI18n()
    );
    const playMusicInstruction = enumeratedInstructions.find(
      enumeratedInstruction => enumeratedInstruction.type === 'PlayMusic'
    );

    if (!playMusicInstruction) {
      throw new Error('PlayMusic action was not found');
    }

    const instruction = new gd.Instruction();
    setupInstructionParameters(
      project,
      layout,
      instruction,
      playMusicInstruction.metadata
    );

    // Check that parameters were created
    expect(instruction.getParametersCount()).toBe(5);
    expect(instruction.getParameter(0).getPlainString()).toBe('');
    expect(instruction.getParameter(1).getPlainString()).toBe('');
    expect(instruction.getParameter(2).getPlainString()).toBe('');
    expect(instruction.getParameter(3).getPlainString()).toBe('');
    expect(instruction.getParameter(4).getPlainString()).toBe('');
  });

// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('sets the proper number of parameters and the object name', () => {
    const project = new gd.ProjectHelper.createNewGDJSProject();
    const layout = project.insertNewLayout('Scene', 0);
    const objectName = 'MySpriteObject';
    const behaviorName = 'Animation';
    layout.insertNewObject(project, 'Sprite', objectName, 0);

    // Simulate that we select an instruction for the object
    const enumeratedInstructions = enumerateObjectAndBehaviorsInstructions(
      false,
      project,
      layout,
      objectName,
// @ts-expect-error - TS2554 - Expected 1 arguments, but got 0.
      makeFakeI18n()
    );
    const setAnimationNameInstruction = enumeratedInstructions.find(
      enumeratedInstruction =>
        enumeratedInstruction.type ===
        'AnimatableCapability::AnimatableBehavior::SetName'
    );

    if (!setAnimationNameInstruction) {
      throw new Error('SetAnimationName action was not found');
    }

    const instruction = new gd.Instruction();
    setupInstructionParameters(
      project,
      layout,
      instruction,
      setAnimationNameInstruction.metadata,
      objectName
    );

    // Check that parameters were created and the object name set
    expect(instruction.getParametersCount()).toBe(4);
    expect(instruction.getParameter(0).getPlainString()).toBe(objectName);
    expect(instruction.getParameter(1).getPlainString()).toBe(behaviorName);
    // Operator
    expect(instruction.getParameter(2).getPlainString()).toBe('');
    // Operand
    expect(instruction.getParameter(3).getPlainString()).toBe('');
  });

// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('sets the proper parameters for a behavior', () => {
    const project = new gd.ProjectHelper.createNewGDJSProject();
    const layout = project.insertNewLayout('Scene', 0);
    const objectName = 'MySpriteObject';
    const object = layout.insertNewObject(project, 'Sprite', objectName, 0);
    object.addNewBehavior(
      project,
      'PlatformBehavior::PlatformerObjectBehavior',
      'PlatformerObject'
    );

    // Simulate that we select an instruction of the object behavior
    const enumeratedInstructions = enumerateObjectAndBehaviorsInstructions(
      false,
      project,
      layout,
      objectName,
// @ts-expect-error - TS2554 - Expected 1 arguments, but got 0.
      makeFakeI18n()
    );
    const jumpSpeedInstruction = enumeratedInstructions.find(
      enumeratedInstruction =>
        enumeratedInstruction.type === 'PlatformBehavior::JumpSpeed'
    );

    if (!jumpSpeedInstruction) {
      throw new Error('PlatformBehavior::JumpSpeed action was not found');
    }

    const instruction = new gd.Instruction();
    setupInstructionParameters(
      project,
      layout,
      instruction,
      jumpSpeedInstruction.metadata,
      objectName
    );

    // Check that parameters were created, the object name and behavior set
    expect(instruction.getParametersCount()).toBe(4);
    expect(instruction.getParameter(0).getPlainString()).toBe(objectName);
    expect(instruction.getParameter(1).getPlainString()).toBe(
      'PlatformerObject'
    );
    expect(instruction.getParameter(2).getPlainString()).toBe(''); // In the future, this could be set to a default value.
    expect(instruction.getParameter(3).getPlainString()).toBe('');
  });

// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('sets the proper parameters for a behavior, selecting the first behavior if multiple', () => {
    const project = new gd.ProjectHelper.createNewGDJSProject();
    const layout = project.insertNewLayout('Scene', 0);
    const objectName = 'MySpriteObject';
    const object = layout.insertNewObject(project, 'Sprite', objectName, 0);
    object.addNewBehavior(
      project,
      'PlatformBehavior::PlatformerObjectBehavior',
      'FirstPlatformerObject'
    );
    object.addNewBehavior(
      project,
      'PlatformBehavior::PlatformerObjectBehavior',
      'OtherPlatformerObject'
    );

    // Simulate that we select an instruction of the object behavior
    const enumeratedInstructions = enumerateObjectAndBehaviorsInstructions(
      false,
      project,
      layout,
      objectName,
// @ts-expect-error - TS2554 - Expected 1 arguments, but got 0.
      makeFakeI18n()
    );
    const jumpSpeedInstruction = enumeratedInstructions.find(
      enumeratedInstruction =>
        enumeratedInstruction.type === 'PlatformBehavior::JumpSpeed'
    );

    if (!jumpSpeedInstruction) {
      throw new Error('PlatformBehavior::JumpSpeed action was not found');
    }

    const instruction = new gd.Instruction();
    setupInstructionParameters(
      project,
      layout,
      instruction,
      jumpSpeedInstruction.metadata,
      objectName
    );

    // Check that parameters were created, the object name and behavior set
    expect(instruction.getParametersCount()).toBe(4);
    expect(instruction.getParameter(0).getPlainString()).toBe(objectName);
    expect(instruction.getParameter(1).getPlainString()).toBe(
      'FirstPlatformerObject'
    );
  });

// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('sets the proper parameters for a behavior, changing it if a wrong behavior name is entered', () => {
    const project = new gd.ProjectHelper.createNewGDJSProject();
    const layout = project.insertNewLayout('Scene', 0);
    const objectName = 'MySpriteObject';
    const object = layout.insertNewObject(project, 'Sprite', objectName, 0);
    object.addNewBehavior(
      project,
      'PlatformBehavior::PlatformerObjectBehavior',
      'FirstPlatformerObject'
    );
    object.addNewBehavior(
      project,
      'PlatformBehavior::PlatformerObjectBehavior',
      'OtherPlatformerObject'
    );

    // Simulate that we select an instruction of the object behavior
    const enumeratedInstructions = enumerateObjectAndBehaviorsInstructions(
      false,
      project,
      layout,
      objectName,
// @ts-expect-error - TS2554 - Expected 1 arguments, but got 0.
      makeFakeI18n()
    );
    const jumpSpeedInstruction = enumeratedInstructions.find(
      enumeratedInstruction =>
        enumeratedInstruction.type === 'PlatformBehavior::JumpSpeed'
    );

    if (!jumpSpeedInstruction) {
      throw new Error('PlatformBehavior::JumpSpeed action was not found');
    }

    const instruction = new gd.Instruction();
    instruction.setParametersCount(4);
    instruction.setParameter(0, objectName);
    instruction.setParameter(1, 'WrongName');
    setupInstructionParameters(
      project,
      layout,
      instruction,
      jumpSpeedInstruction.metadata,
      objectName
    );

    // Check that parameters were created, the object name and behavior set
    expect(instruction.getParametersCount()).toBe(4);
    expect(instruction.getParameter(0).getPlainString()).toBe(objectName);
    expect(instruction.getParameter(1).getPlainString()).toBe(
      'FirstPlatformerObject'
    );
  });

// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('sets the proper parameters for a behavior, letting an existing behavior name if it is valid', () => {
    const project = new gd.ProjectHelper.createNewGDJSProject();
    const layout = project.insertNewLayout('Scene', 0);
    const objectName = 'MySpriteObject';
    const object = layout.insertNewObject(project, 'Sprite', objectName, 0);
    object.addNewBehavior(
      project,
      'PlatformBehavior::PlatformerObjectBehavior',
      'FirstPlatformerObject'
    );
    object.addNewBehavior(
      project,
      'PlatformBehavior::PlatformerObjectBehavior',
      'OtherPlatformerObject'
    );

    // Simulate that we select an instruction of the object behavior
    const enumeratedInstructions = enumerateObjectAndBehaviorsInstructions(
      false,
      project,
      layout,
      objectName,
// @ts-expect-error - TS2554 - Expected 1 arguments, but got 0.
      makeFakeI18n()
    );
    const jumpSpeedInstruction = enumeratedInstructions.find(
      enumeratedInstruction =>
        enumeratedInstruction.type === 'PlatformBehavior::JumpSpeed'
    );

    if (!jumpSpeedInstruction) {
      throw new Error('PlatformBehavior::JumpSpeed action was not found');
    }

    const instruction = new gd.Instruction();
    instruction.setParametersCount(4);
    instruction.setParameter(0, objectName);
    instruction.setParameter(1, 'OtherPlatformerObject');
    setupInstructionParameters(
      project,
      layout,
      instruction,
      jumpSpeedInstruction.metadata,
      objectName
    );

    // Check that parameters were created, the object name and behavior set
    expect(instruction.getParametersCount()).toBe(4);
    expect(instruction.getParameter(0).getPlainString()).toBe(objectName);
    expect(instruction.getParameter(1).getPlainString()).toBe(
      'OtherPlatformerObject'
    );
  });
});
