import {extractDecodedFilenameWithExtensionFromPublicAssetResourceUrl} from './Asset';

// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
describe('Asset service', () => {
// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  describe('extractDecodedFilenameWithExtensionFromPublicAssetResourceUrl', () => {
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    it('throws if not the right URL format', () => {
      expect(() =>
        extractDecodedFilenameWithExtensionFromPublicAssetResourceUrl(
          'https://private-assets.gdevelop.io/a9fe5bce-de39-4147-a669-93fc5cd69632/file-to-download.png?token=1234567890'
        )
      ).toThrow();
    });
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    it('works if file has an extension', () => {
      expect(
        extractDecodedFilenameWithExtensionFromPublicAssetResourceUrl(
          'https://asset-resources.gdevelop.io/public-resources/Pack name/b540a2c4b3a4d9a856819eb522473380fa98291e2f59fcf8905d99649a5b179b_file-to-download.png'
        )
      ).toStrictEqual('file-to-download.png');
    });
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    it('works if file has no extension', () => {
      expect(
        extractDecodedFilenameWithExtensionFromPublicAssetResourceUrl(
          'https://asset-resources.gdevelop.io/public-resources/Pack name/b540a2c4b3a4d9a856819eb522473380fa98291e2f59fcf8905d99649a5b179b_file-to-download'
        )
      ).toStrictEqual('file-to-download');
    });
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    it('works if url is encoded', () => {
      expect(
        extractDecodedFilenameWithExtensionFromPublicAssetResourceUrl(
          'https://asset-resources.gdevelop.io/public-resources/Pack%20name/b540a2c4b3a4d9a856819eb522473380fa98291e2f59fcf8905d99649a5b179b_file%20to%20download.png'
        )
      ).toStrictEqual('file to download.png');
    });
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    it('works if url is not encoded', () => {
      expect(
        extractDecodedFilenameWithExtensionFromPublicAssetResourceUrl(
          'https://asset-resources.gdevelop.io/public-resources/Pack name/b540a2c4b3a4d9a856819eb522473380fa98291e2f59fcf8905d99649a5b179b_file to download.png'
        )
      ).toStrictEqual('file to download.png');
    });
  });
});
