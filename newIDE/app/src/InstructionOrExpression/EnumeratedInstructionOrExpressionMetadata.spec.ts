import {filterEnumeratedInstructionOrExpressionMetadataByScope} from './EnumeratedInstructionOrExpressionMetadata';
import { enumerateAllInstructions } from './EnumerateInstructions';

const gd: libGDevelop = global.gd;

const makeFakeI18n = (fakeI18n: undefined): I18nType => ({
// @ts-expect-error - TS2698 - Spread types may only be created from object types.
  ...fakeI18n,
// @ts-expect-error - TS7006 - Parameter 'message' implicitly has an 'any' type.
  _: message => message.id,
});

// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
describe('EnumeratedInstructionOrExpressionMetadata', () => {
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('can hide actions that are not relevant to layouts', () => {
    const project = new gd.ProjectHelper.createNewGDJSProject();
    const layout = new gd.Layout();

    const instructions = filterEnumeratedInstructionOrExpressionMetadataByScope(
// @ts-expect-error - TS2554 - Expected 1 arguments, but got 0.
      enumerateAllInstructions(false, makeFakeI18n()),
      { project, layout }
    );

    expect(instructions.length).toBeGreaterThan(0);
    // The action is NOT in the list.
    expect(instructions).toEqual(
      expect.not.arrayContaining([
        expect.objectContaining({
          displayedName: 'Set number return value',
          fullGroupName: 'Advanced/Event functions',
          type: 'SetReturnNumber',
        }),
      ])
    );

    layout.delete();
  });

// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('can show actions that are only relevant for functions', () => {
    const project = new gd.ProjectHelper.createNewGDJSProject();
    const eventsFunctionsExtension = new gd.EventsFunctionsExtension();
    const eventsFunction = new gd.EventsFunction();

    const instructions = filterEnumeratedInstructionOrExpressionMetadataByScope(
// @ts-expect-error - TS2554 - Expected 1 arguments, but got 0.
      enumerateAllInstructions(false, makeFakeI18n()),
      {
        project,
        eventsFunctionsExtension,
        eventsFunction,
      }
    );

    expect(instructions.length).toBeGreaterThan(0);
    // The action is in the list.
    expect(instructions).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          displayedName: 'Set number return value',
          fullGroupName: 'Advanced/Event functions',
          type: 'SetReturnNumber',
        }),
      ])
    );

    eventsFunctionsExtension.delete();
    eventsFunction.delete();
  });
});
