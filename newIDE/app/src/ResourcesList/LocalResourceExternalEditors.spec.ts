import {makeTestProject} from '../fixtures/TestProject';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../Utils/OptionalRequire'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/OptionalRequire.js' implicitly has an 'any' type.
import optionalRequire from '../Utils/OptionalRequire';
import path from 'path';
import {
  downloadUrlsToBlobs,
  convertBlobToDataURL,
} from '../Utils/BlobDownloader';
import { downloadAndPrepareExternalEditorBase64Resources } from './LocalResourceExternalEditors';
const gd: libGDevelop = global.gd;

jest.mock('../Utils/BlobDownloader');
jest.mock('../Utils/OptionalRequire');

const mockFn = (fn: any): jest.MockedFunction<any> => fn;

const classicUrl = 'https://www.example.com/file-to-download.png';
const localFile = 'some/local-file.png';

const makeTestProjectWithResourcesToDownload = () => {
// @ts-expect-error - TS2339 - Property 'project' does not exist on type 'void'.
  const { project } = makeTestProject(gd);

  {
    const newResource = new gd.ImageResource();
    newResource.setName('MyResourceToDownload');
    newResource.setFile(classicUrl);
    project.getResourcesManager().addResource(newResource);
    newResource.delete();
  }
  {
    const newResource = new gd.ImageResource();
    newResource.setName('MyLocalFile');
    newResource.setFile(localFile);
    project.getResourcesManager().addResource(newResource);
    newResource.delete();
  }

  return project;
};

// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
describe('LocalResourceExternalEditors', () => {
// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  describe('downloadAndPrepareExternalEditorBase64Resources', () => {
// @ts-expect-error - TS7034 - Variable 'project' implicitly has type 'any' in some locations where its type cannot be determined.
    let project = null;
    beforeEach(() => {
      mockFn(downloadUrlsToBlobs).mockReset();
      mockFn(optionalRequire.mockFs.promises.readFile).mockReset();
    });
    afterEach(() => {
// @ts-expect-error - TS7005 - Variable 'project' implicitly has an 'any' type. | TS7005 - Variable 'project' implicitly has an 'any' type.
      if (project) project.delete();
      project = null;
    });
// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    test('Can download files or read local files', async () => {
      project = makeTestProjectWithResourcesToDownload();

      // Mock the successful download of a resource.
      mockFn(downloadUrlsToBlobs).mockImplementation(
// @ts-expect-error - TS7031 - Binding element 'urlContainers' implicitly has an 'any' type.
        async ({ urlContainers }) => {
// @ts-expect-error - TS7006 - Parameter 'urlContainer' implicitly has an 'any' type.
          return urlContainers.map(urlContainer => ({
            error: null,
            blob: { content: 'fake-blob' },
            item: urlContainer,
          }));
        }
      );
      mockFn(convertBlobToDataURL).mockImplementation(async () => {
        return 'data:fake/data-url;base64,0123456789ABCDEF';
      });

      // Mock the reading of a local file.
      mockFn(optionalRequire.mockFs.promises.readFile).mockImplementation(
        async () => 'somefakecontent'
      );

      const result = await downloadAndPrepareExternalEditorBase64Resources({
        project,
        resourceNames: ['NotExisting', 'MyResourceToDownload', 'MyLocalFile'],
      });

      // Check that the file were downloaded/read.
      expect(optionalRequire.mockFs.promises.readFile).toHaveBeenCalledWith(
        path.resolve('some/local-file.png')
      );
      expect(result).toMatchInlineSnapshot(`
        Array [
          Object {
            "dataUrl": "",
            "name": "NotExisting",
          },
          Object {
            "dataUrl": "data:fake/data-url;base64,0123456789ABCDEF",
            "localFilePath": undefined,
            "name": "MyResourceToDownload",
          },
          Object {
            "dataUrl": "data:text/plain;base64,somefakecontent",
            "localFilePath": "some/local-file.png",
            "name": "MyLocalFile",
          },
        ]
      `);
    });
  });
});
