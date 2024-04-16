import {sanitizeFilename} from './Filename';

// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
describe('Filename', () => {
// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  describe('sanitizeFilename', () => {
// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    test('sanitize filenames', () => {
      expect(sanitizeFilename('test.png')).toBe('test.png');
      expect(sanitizeFilename('test123.png')).toBe('test123.png');
      expect(sanitizeFilename('testé.png')).toBe('testé.png');
      expect(sanitizeFilename('testé 汉字.png')).toBe('testé 汉字.png');
      expect(sanitizeFilename('testé 汉字')).toBe('testé 汉字');
      expect(sanitizeFilename('../testé 汉字.png')).toBe('.._testé 汉字.png');
      expect(sanitizeFilename('../\ntesté** 汉字.png')).toBe(
        '..__testé__ 汉字.png'
      );
      expect(sanitizeFilename('..')).toBe('_');
      expect(sanitizeFilename('.')).toBe('_');
    });
  });
});
