// @ts-expect-error - TS6142 - Module './Shop' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/Shop.tsx', but '--jsx' is not set.
import {extractDecodedFilenameWithExtensionFromProductAuthorizedUrl} from './Shop';

// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
describe('Shop service', () => {
// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  describe('extractDecodedFilenameFromProductAuthorizedUrl', () => {
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    it('works if asset file has an extension', () => {
      expect(
        extractDecodedFilenameWithExtensionFromProductAuthorizedUrl(
          'https://private-assets.gdevelop.io/a9fe5bce-de39-4147-a669-93fc5cd69632/file-to-download.png?token=1234567890'
        )
      ).toStrictEqual('file-to-download.png');
    });
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    it('works if game template file has an extension', () => {
      expect(
        extractDecodedFilenameWithExtensionFromProductAuthorizedUrl(
          'https://private-game-templates.gdevelop.io/a9fe5bce-de39-4147-a669-93fc5cd69632/file-to-download.png?token=1234567890'
        )
      ).toStrictEqual('file-to-download.png');
    });
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    it('works if file has no extension', () => {
      expect(
        extractDecodedFilenameWithExtensionFromProductAuthorizedUrl(
          'https://private-assets.gdevelop.io/a9fe5bce-de39-4147-a669-93fc5cd69632/file-to-download?token=1234567890'
        )
      ).toStrictEqual('file-to-download');
    });
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    it('works if url is encoded', () => {
      expect(
        extractDecodedFilenameWithExtensionFromProductAuthorizedUrl(
          'https://private-game-templates.gdevelop.io/a9fe5bce-de39-4147-a669-93fc5cd69632/file%20to%20download.png?token=1234567890'
        )
      ).toStrictEqual('file to download.png');
    });
  });
});
