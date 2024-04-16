import LocalFileSystem from './LocalFileSystem';
import path from 'path';

// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
describe('LocalFileSystem', () => {
// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  describe('file content storing and reading', () => {
// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    test('it can mark files to be copied from an URL as to be downloaded', () => {
      const localFileSystem = new LocalFileSystem({
        downloadUrlsToLocalFiles: true,
      });

      localFileSystem.copyFile(
        'http://file.com/from/url',
        '/folder/downloaded-file'
      );
      expect(localFileSystem.getAllUrlFilesIn('/')).toEqual([
        {
          filePath: '/folder/downloaded-file',
          url: 'http://file.com/from/url',
        },
      ]);
      expect(localFileSystem.getAllUrlFilesIn('/folder/')).toEqual([
        {
          filePath: '/folder/downloaded-file',
          url: 'http://file.com/from/url',
        },
      ]);
      expect(localFileSystem.getAllUrlFilesIn('/another-folder/')).toEqual([]);

      // Check that backslashes are normalized to slashes, so that paths can be using both on Windows:
      expect(localFileSystem.getAllUrlFilesIn('\\')).toEqual([
        {
          filePath: '/folder/downloaded-file',
          url: 'http://file.com/from/url',
        },
      ]);
      expect(localFileSystem.getAllUrlFilesIn('/folder\\')).toEqual([
        {
          filePath: '/folder/downloaded-file',
          url: 'http://file.com/from/url',
        },
      ]);
    });
  });

// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  describe('file path manipulation', () => {
// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    test('it can make a path relative to another', () => {
      const localFileSystem = new LocalFileSystem({
        downloadUrlsToLocalFiles: true,
      });

      expect(localFileSystem.makeRelative('/folder/file1', '/folder')).toBe(
        'file1'
      );
      expect(localFileSystem.makeRelative('/folder/file1', '/')).toBe(
        'folder/file1'
      );
    });
// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    test('it does not make URL relative to another one (on the same domain)', () => {
      const localFileSystem = new LocalFileSystem({
        downloadUrlsToLocalFiles: true,
      });

      expect(
        localFileSystem.makeRelative(
          'http://test.com/path/to/file1',
          'http://test.com/path/'
        )
      ).toBe('http://test.com/path/to/file1');
    });
// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    test('it does not make URL relative to another one (not on the same domain)', () => {
      const localFileSystem = new LocalFileSystem({
        downloadUrlsToLocalFiles: true,
      });

      expect(
        localFileSystem.makeRelative(
          'http://test.com/url1',
          'http://test2.com/url1'
        )
      ).toBe('http://test.com/url1');
    });
// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    test('it can make a path absolute', () => {
      const localFileSystem = new LocalFileSystem({
        downloadUrlsToLocalFiles: true,
      });

      expect(localFileSystem.makeAbsolute('subfolder/file1', '/folder')).toBe(
        path.resolve('/folder', 'subfolder/file1').replace(/\\/g, '/')
      );
      expect(localFileSystem.makeAbsolute('/folder/file2', '/')).toBe(
        path.resolve('/', '/folder/file2').replace(/\\/g, '/')
      );
    });
  });
});
