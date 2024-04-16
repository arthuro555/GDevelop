// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import {I18n as I18nType} from '@lingui/core';
import { selectMessageByLocale } from './MessageByLocale';

const makeFakeI18n = (
  fakeI18n: {
    language: string
  },
): I18nType => fakeI18n;

// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
describe('MessageByLocale', () => {
// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  describe('selectMessageByLocale', () => {
// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    test('select the proper message according to the language', () => {
      expect(
        selectMessageByLocale(makeFakeI18n({ language: 'en' }), {
          en: 'Test',
        })
      ).toBe('Test');
      expect(
        selectMessageByLocale(makeFakeI18n({ language: 'en' }), {
          en: 'Test',
          fr: 'Test2',
        })
      ).toBe('Test');
      expect(
        selectMessageByLocale(makeFakeI18n({ language: 'fr' }), {
          en: 'Test',
          fr: 'Test2',
        })
      ).toBe('Test2');
    });
// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    test('fallback to the same language even if not fully qualifying for the region', () => {
      expect(
        selectMessageByLocale(makeFakeI18n({ language: 'pt-br' }), {
          'pt-pt': 'Message 1',
          'pt-br': 'Message 2',
        })
      ).toBe('Message 2');
      expect(
        selectMessageByLocale(makeFakeI18n({ language: 'pt-OTHER' }), {
          'pt-pt': 'Message 1',
          pt: 'Message 2',
        })
      ).toBe('Message 2');
      expect(
        selectMessageByLocale(makeFakeI18n({ language: 'pt-pt' }), {
          'pt-pt': 'Message 1',
          pt: 'Message 1',
        })
      ).toBe('Message 1');
    });
// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    test('fallback to english or the only language available', () => {
      expect(
        selectMessageByLocale(makeFakeI18n({ language: 'en' }), {
          fr: 'Only this is available.',
        })
      ).toBe('Only this is available.');
      expect(
        selectMessageByLocale(makeFakeI18n({ language: 'pt-BR' }), {
          en: 'Test',
          fr: 'Test2',
        })
      ).toBe('Test');
      expect(
        selectMessageByLocale(makeFakeI18n({ language: 'pt-OTHER' }), {
          'pt-pt': 'Message 1',
          'pt-br': 'Message 2',
          en: 'Message 3',
        })
      ).toBe('Message 3');
      expect(selectMessageByLocale(makeFakeI18n({ language: 'fr' }), {})).toBe(
        ''
      );
    });
// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    test('handles type errors gracefully', () => {
      expect(
        // $FlowExpectedError
// @ts-expect-error - TS2345 - Argument of type 'string' is not assignable to parameter of type 'MessageByLocale'.
        selectMessageByLocale(makeFakeI18n({ language: 'fr' }), 'Test')
      ).toBe('Test');

      expect(selectMessageByLocale(makeFakeI18n({ language: 'fr' }), 0)).toBe(
        ''
      );

      expect(selectMessageByLocale(makeFakeI18n({ language: 'fr' }), 123)).toBe(
        ''
      );

      expect(selectMessageByLocale(makeFakeI18n({ language: 'fr' }), [])).toBe(
        ''
      );
      expect(
        // $FlowExpectedError
// @ts-expect-error - TS2345 - Argument of type 'null' is not assignable to parameter of type 'MessageByLocale'.
        selectMessageByLocale(makeFakeI18n({ language: 'fr' }), null)
      ).toBe('');
      expect(
        // $FlowExpectedError
// @ts-expect-error - TS2345 - Argument of type 'undefined' is not assignable to parameter of type 'MessageByLocale'.
        selectMessageByLocale(makeFakeI18n({ language: 'fr' }), undefined)
      ).toBe('');
      expect(
        // $FlowExpectedError
// @ts-expect-error - TS2345 - Argument of type 'boolean' is not assignable to parameter of type 'MessageByLocale'.
        selectMessageByLocale(makeFakeI18n({ language: 'fr' }), false)
      ).toBe('');
      expect(
        // $FlowExpectedError
// @ts-expect-error - TS2345 - Argument of type 'boolean' is not assignable to parameter of type 'MessageByLocale'.
        selectMessageByLocale(makeFakeI18n({ language: 'fr' }), true)
      ).toBe('');
    });
  });
});
