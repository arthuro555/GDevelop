import {
  addGDevelopResourceJwtTokenToUrl,
  cleanGDevelopResourceJwtToken,
  extractDecodedFilenameFromProjectResourceUrl,
  extractProjectUuidFromProjectResourceUrl,
  storeGDevelopResourceJwtToken,
} from './Project';

// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
describe('Project service', () => {
// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  describe('extractDecodedFilenameFromProjectResourceUrl', () => {
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    it('extracts filename from a gdevelop.io bucket URL', () => {
      expect(
        extractDecodedFilenameFromProjectResourceUrl(
          'https://project-resources.gdevelop.io/a9fe5bce-de39-4147-a669-93fc5cd69632/resources/6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea-Happy'
        )
      ).toBe('Pea-Happy');
      expect(
        extractDecodedFilenameFromProjectResourceUrl(
          'https://project-resources.gdevelop.io/a9fe5bce-de39-4147-a669-93fc5cd69632/resources/6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea-Happy.png'
        )
      ).toBe('Pea-Happy.png');
      expect(
        extractDecodedFilenameFromProjectResourceUrl(
          'https://project-resources.gdevelop.io/a9fe5bce-de39-4147-a669-93fc5cd69632/resources/6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea-Happy?some=parameter'
        )
      ).toBe('Pea-Happy');
      expect(
        extractDecodedFilenameFromProjectResourceUrl(
          'https://project-resources.gdevelop.io/a9fe5bce-de39-4147-a669-93fc5cd69632/resources/6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea-Happy.png?some=parameter'
        )
      ).toBe('Pea-Happy.png');
    });
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    it('extracts filename from a gdevelop.io bucket URL, and handles sub folders', () => {
      expect(
        extractDecodedFilenameFromProjectResourceUrl(
          'https://project-resources.gdevelop.io/a9fe5bce-de39-4147-a669-93fc5cd69632/resources/some/other-folder/1/2/_/6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea-Happy'
        )
      ).toBe('Pea-Happy');
      expect(
        extractDecodedFilenameFromProjectResourceUrl(
          'https://project-resources.gdevelop.io/a9fe5bce-de39-4147-a669-93fc5cd69632/resources/some/other-folder/1/2/_/6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea-Happy.png'
        )
      ).toBe('Pea-Happy.png');
      expect(
        extractDecodedFilenameFromProjectResourceUrl(
          'https://project-resources.gdevelop.io/a9fe5bce-de39-4147-a669-93fc5cd69632/resources/some/other-folder/1/2/_/6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea-Happy?some=parameter'
        )
      ).toBe('Pea-Happy');
      expect(
        extractDecodedFilenameFromProjectResourceUrl(
          'https://project-resources.gdevelop.io/a9fe5bce-de39-4147-a669-93fc5cd69632/resources/some/other-folder/1/2/_/6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea-Happy.png?some=parameter'
        )
      ).toBe('Pea-Happy.png');
    });
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    it('extracts filename from a gdevelop.io bucket URL, if encoded', () => {
      expect(
        extractDecodedFilenameFromProjectResourceUrl(
          'https://project-resources.gdevelop.io/a9fe5bce-de39-4147-a669-93fc5cd69632/resources/some/other%20folder/1/2/_/6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea%20Happy'
        )
      ).toBe('Pea Happy');
      expect(
        extractDecodedFilenameFromProjectResourceUrl(
          'https://project-resources.gdevelop.io/a9fe5bce-de39-4147-a669-93fc5cd69632/resources/some/other%20folder/1/2/_/6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea%20Happy.png'
        )
      ).toBe('Pea Happy.png');
    });
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    it('just extracts the filename from an URL which is not from GDevelop Cloud (or not valid)', () => {
      expect(
        extractDecodedFilenameFromProjectResourceUrl('example.com/test.png')
      ).toBe('test.png');
      expect(
        extractDecodedFilenameFromProjectResourceUrl('example.com/test')
      ).toBe('test');

      // In case the resources buckets are used, but the URL is not valid,
      // we can't extract the filename without the hash. So we take everything.
      expect(
        extractDecodedFilenameFromProjectResourceUrl(
          'https://project-resources.gdevelop.io/whatever/some/other-folder/1/2/_/6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea-Happy.png'
        )
      ).toBe(
        '6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea-Happy.png'
      );
      expect(
        extractDecodedFilenameFromProjectResourceUrl(
          'https://project-resources.gdevelop.io/whatever/some/other-folder/1/2/_/6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea-Happy.png?some=parameter'
        )
      ).toBe(
        '6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea-Happy.png?some=parameter'
      );
    });
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    it('just extracts the filename from an URL which is not from GDevelop Cloud, if encoded', () => {
      expect(
        extractDecodedFilenameFromProjectResourceUrl(
          'example.com/test%20file.png'
        )
      ).toBe('test file.png');
      expect(
        extractDecodedFilenameFromProjectResourceUrl('example.com/test%20file')
      ).toBe('test file');
      expect(
        extractDecodedFilenameFromProjectResourceUrl(
          'https://project-resources.gdevelop.io/whatever/some/other%20folder/1/2/_/6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea%20Happy.png'
        )
      ).toBe(
        '6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea Happy.png'
      );
    });
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    it('returns the name given if its not a URL', () => {
      expect(extractDecodedFilenameFromProjectResourceUrl('test.png')).toBe(
        'test.png'
      );
      expect(
        extractDecodedFilenameFromProjectResourceUrl('test.png?what')
      ).toBe('test.png?what');
      expect(extractDecodedFilenameFromProjectResourceUrl('test%20.png')).toBe(
        'test%20.png'
      );
    });
  });
// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  describe('extractProjectUuidFromProjectResourceUrl', () => {
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    it('gives the project UUID from an URL', () => {
      expect(
        extractProjectUuidFromProjectResourceUrl(
          'https://project-resources.gdevelop.io/a9fe5bce-de39-4147-a669-93fc5cd69632/resources/6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea-Happy.png?some=parameter'
        )
      ).toBe('a9fe5bce-de39-4147-a669-93fc5cd69632');
      expect(
        extractProjectUuidFromProjectResourceUrl(
          'https://project-resources.gdevelop.io/a9fe5bce-de39-4147-a669-93fc5cd69632/6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea-Happy.png?some=parameter'
        )
      ).toBe(null);
      expect(
        extractProjectUuidFromProjectResourceUrl('https://example.com')
      ).toBe(null);
      expect(extractProjectUuidFromProjectResourceUrl('example')).toBe(null);
    });
  });
// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  describe('addGDevelopResourceJwtTokenToUrl', () => {
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    it('add the token if one is stored in memory', () => {
      storeGDevelopResourceJwtToken('123');
      expect(
        addGDevelopResourceJwtTokenToUrl(
          'https://project-resources.gdevelop.io/a9fe5bce-de39-4147-a669-93fc5cd69632/resources/6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea-Happy.png?some=parameter'
        )
      ).toBe(
        'https://project-resources.gdevelop.io/a9fe5bce-de39-4147-a669-93fc5cd69632/resources/6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea-Happy.png?some=parameter&gd_resource_token=123'
      );
      expect(
        addGDevelopResourceJwtTokenToUrl(
          'https://project-resources.gdevelop.io/a9fe5bce-de39-4147-a669-93fc5cd69632/resources/6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea-Happy.png'
        )
      ).toBe(
        'https://project-resources.gdevelop.io/a9fe5bce-de39-4147-a669-93fc5cd69632/resources/6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea-Happy.png?gd_resource_token=123'
      );

      expect(
        addGDevelopResourceJwtTokenToUrl(
          '/a9fe5bce-de39-4147-a669-93fc5cd69632/resources/6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea-Happy.png?some=parameter'
        )
      ).toBe(
        '/a9fe5bce-de39-4147-a669-93fc5cd69632/resources/6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea-Happy.png?some=parameter&gd_resource_token=123'
      );
      expect(
        addGDevelopResourceJwtTokenToUrl(
          '/a9fe5bce-de39-4147-a669-93fc5cd69632/resources/6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea-Happy.png'
        )
      ).toBe(
        '/a9fe5bce-de39-4147-a669-93fc5cd69632/resources/6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea-Happy.png?gd_resource_token=123'
      );

      cleanGDevelopResourceJwtToken();
      expect(
        addGDevelopResourceJwtTokenToUrl(
          'https://project-resources.gdevelop.io/a9fe5bce-de39-4147-a669-93fc5cd69632/resources/6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea-Happy.png?some=parameter'
        )
      ).toBe(
        'https://project-resources.gdevelop.io/a9fe5bce-de39-4147-a669-93fc5cd69632/resources/6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea-Happy.png?some=parameter'
      );
      expect(
        addGDevelopResourceJwtTokenToUrl(
          'https://project-resources.gdevelop.io/a9fe5bce-de39-4147-a669-93fc5cd69632/resources/6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea-Happy.png'
        )
      ).toBe(
        'https://project-resources.gdevelop.io/a9fe5bce-de39-4147-a669-93fc5cd69632/resources/6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea-Happy.png'
      );

      expect(
        addGDevelopResourceJwtTokenToUrl(
          '/a9fe5bce-de39-4147-a669-93fc5cd69632/resources/6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea-Happy.png?some=parameter'
        )
      ).toBe(
        '/a9fe5bce-de39-4147-a669-93fc5cd69632/resources/6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea-Happy.png?some=parameter'
      );
      expect(
        addGDevelopResourceJwtTokenToUrl(
          '/a9fe5bce-de39-4147-a669-93fc5cd69632/resources/6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea-Happy.png'
        )
      ).toBe(
        '/a9fe5bce-de39-4147-a669-93fc5cd69632/resources/6ef87bc678921eb4bfa2d04e5dc6a16b75f7b239f3163d0c5efe64d4cc501711-Pea-Happy.png'
      );
    });
  });
});
