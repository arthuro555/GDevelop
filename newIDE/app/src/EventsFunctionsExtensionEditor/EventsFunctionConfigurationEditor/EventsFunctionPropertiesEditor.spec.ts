// @ts-expect-error - TS6142 - Module './EventsFunctionPropertiesEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsFunctionsExtensionEditor/EventsFunctionConfigurationEditor/EventsFunctionPropertiesEditor.tsx', but '--jsx' is not set.
import {getSentenceErrorText} from './EventsFunctionPropertiesEditor';
const gd: libGDevelop = global.gd;

const makeFakeI18n = (fakeI18n: undefined): I18nType => ({
// @ts-expect-error - TS2698 - Spread types may only be created from object types.
  ...fakeI18n,
// @ts-expect-error - TS7006 - Parameter 'message' implicitly has an 'any' type.
  _: message => message.id,
});

// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
describe('EventsFunctionPropertiesEditor', () => {
// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  describe('getSentenceErrorText', () => {
// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    test('returns an error message if there are extra parameters (free function)', () => {
      const eventsFunction = new gd.EventsFunction();
      eventsFunction.setSentence(
        'This is using _PARAM3_ (which is unexpected) and _PARAM2_ but forgot the first parameter and mistakenly used _PARAM0_.'
      );
      {
        const newParameter = new gd.ParameterMetadata();
        newParameter.setType('expression');
        eventsFunction.getParameters().push_back(newParameter);
        newParameter.delete();
      }
      {
        const newParameter = new gd.ParameterMetadata();
        newParameter.setType('string');
        eventsFunction.getParameters().push_back(newParameter);
        newParameter.delete();
      }

      const errorText = getSentenceErrorText(
// @ts-expect-error - TS2554 - Expected 1 arguments, but got 0.
        makeFakeI18n(),
        null,
        null,
        eventsFunction
      );

      eventsFunction.delete();
      expect(errorText).toMatchInlineSnapshot(
        `"The sentence is probably missing this/these parameter(s): _PARAM1_ - The sentence displays one or more wrongs parameters: _PARAM3_, _PARAM0_"`
      );
    });
// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    test('returns an error message if there are extra parameters (behavior function)', () => {
      const eventsFunction = new gd.EventsFunction();
      const eventsBasedBehavior = new gd.EventsBasedBehavior();
      eventsFunction.setSentence(
        'This is using _PARAM2_ (which is unexpected) and _PARAM1_ but forgot the first parameter.'
      );
      {
        const newParameter = new gd.ParameterMetadata();
        newParameter.setType('expression');
        eventsFunction.getParameters().push_back(newParameter);
        newParameter.delete();
      }
      {
        const newParameter = new gd.ParameterMetadata();
        newParameter.setType('string');
        eventsFunction.getParameters().push_back(newParameter);
        newParameter.delete();
      }

      const errorText = getSentenceErrorText(
// @ts-expect-error - TS2554 - Expected 1 arguments, but got 0.
        makeFakeI18n(),
        eventsBasedBehavior,
        null,
        eventsFunction
      );

      eventsFunction.delete();
      expect(errorText).toMatchInlineSnapshot(
        `"The sentence is probably missing this/these parameter(s): _PARAM0_ - The sentence displays one or more wrongs parameters: _PARAM2_"`
      );
    });
  });
});
