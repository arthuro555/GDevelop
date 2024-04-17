import { makeTestProject } from '../../fixtures/TestProject';
import path from 'path';
import { moveAllLocalResourcesToCloudResources } from './LocalResourceMover';
import { readLocalFileToFile } from '../../Utils/LocalFileUploader';
import {
  getCredentialsForCloudProject,
  uploadProjectResourceFiles,
} from '../../Utils/GDevelopServices/Project';
import { MoveAllProjectResourcesOptions } from './index';

jest.mock('../../Utils/LocalFileUploader');
jest.mock('../../Utils/GDevelopServices/Project');

const mockFn = (fn: any): jest.MockedFunction<any> => fn;

const makeTestProjectWithResourcesToUpload = () => {
  // @ts-expect-error - TS2339 - Property 'project' does not exist on type 'void'.
  const { project } = makeTestProject(gd);

  {
    const newResource = new gd.ImageResource();
    newResource.setName('MyResourceAlreadyAsUrl');
    newResource.setFile('http://example/file-to-download.png');
    project.getResourcesManager().addResource(newResource);
    newResource.delete();
  }

  {
    const newResource = new gd.ImageResource();
    newResource.setName('MyLocalResource');
    newResource.setFile('some-local-file.png');
    project.getResourcesManager().addResource(newResource);
    newResource.delete();
  }

  {
    const newResource = new gd.ImageResource();
    newResource.setName('MySecondLocalResource');
    newResource.setFile('another-local-file.png');
    project.getResourcesManager().addResource(newResource);
    newResource.delete();
  }

  return project;
};

const makeMoveAllLocalResourcesToCloudResourcesOptions = (
  project: gd.Project // $FlowFixMe - unused property were not mocked.
): // @ts-expect-error - TS2322 - Type '{ project: gd.Project; onProgress: any; oldFileMetadata: { fileIdentifier: string; }; newFileMetadata: { fileIdentifier: string; }; }' is not assignable to type 'MoveAllProjectResourcesOptions'.
MoveAllProjectResourcesOptions => ({
  project,
  onProgress: jest.fn(),
  oldFileMetadata: { fileIdentifier: 'fake-project-file.json' },
  newFileMetadata: { fileIdentifier: 'new-fake-identifier' },
});

describe('LocalResourceMover', () => {
  beforeEach(() => {
    mockFn(readLocalFileToFile).mockReset();
    mockFn(getCredentialsForCloudProject).mockReset();
    mockFn(uploadProjectResourceFiles).mockReset();
  });

  test('load resources and upload them', async () => {
    // Simulate reading and uploading files without issues.
    // @ts-expect-error - TS7006 - Parameter 'filePath' implicitly has an 'any' type.
    mockFn(readLocalFileToFile).mockImplementation(async (filePath) => {
      return {
        name: 'fake-file-for-' + filePath,
        originalFilePath: filePath,
        size: 10,
      };
    });
    mockFn(getCredentialsForCloudProject).mockResolvedValue(undefined);
    mockFn(uploadProjectResourceFiles).mockImplementation(
      // @ts-expect-error - TS7006 - Parameter 'authenticatedUser' implicitly has an 'any' type. | TS7006 - Parameter 'cloudProjectId' implicitly has an 'any' type. | TS7006 - Parameter 'files' implicitly has an 'any' type.
      async (authenticatedUser, cloudProjectId, files) => {
        // @ts-expect-error - TS7006 - Parameter 'file' implicitly has an 'any' type.
        return files.map((file) => ({
          url: 'fake-url-for-' + file.name,
          error: null,
        }));
      }
    );

    // Launch the resources mover.
    const project = makeTestProjectWithResourcesToUpload();
    const options = makeMoveAllLocalResourcesToCloudResourcesOptions(project);
    const fetchedResources =
      await moveAllLocalResourcesToCloudResources(options);

    // Check local resources were read.
    expect(readLocalFileToFile).toHaveBeenCalledWith(
      path.resolve('some-local-file.png')
    );
    expect(readLocalFileToFile).toHaveBeenCalledWith(
      path.resolve('another-local-file.png')
    );

    // Check local resources were uploaded
    expect(mockFn(uploadProjectResourceFiles).mock.calls[0][1]).toBe(
      'new-fake-identifier'
    );
    expect(mockFn(uploadProjectResourceFiles).mock.calls[0][2]).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          originalFilePath: path.resolve('some-local-file.png'),
        }),
        expect.objectContaining({
          originalFilePath: path.resolve('another-local-file.png'),
        }),
      ])
    );

    // Check no error is reported.
    expect(fetchedResources).toMatchInlineSnapshot(`
      Object {
        "erroredResources": Array [],
      }
    `);

    // Check local resources were updated with the URL they were uploaded to.
    expect(
      project.getResourcesManager().getResource('MyLocalResource').getFile()
    ).toBe(
      'fake-url-for-fake-file-for-' +
        path.resolve('some-local-file.png').replace(/\\/g, '/')
    );
    expect(
      project
        .getResourcesManager()
        .getResource('MySecondLocalResource')
        .getFile()
    ).toBe(
      'fake-url-for-fake-file-for-' +
        path.resolve('another-local-file.png').replace(/\\/g, '/')
    );
    expect(
      project
        .getResourcesManager()
        .getResource('MyResourceAlreadyAsUrl')
        .getFile()
    ).toBe('http://example/file-to-download.png');
  });

  test('load resources and upload them in chunks if too big', async () => {
    // Simulate reading 300MB files.
    // @ts-expect-error - TS7006 - Parameter 'filePath' implicitly has an 'any' type.
    mockFn(readLocalFileToFile).mockImplementation(async (filePath) => {
      return {
        name: 'fake-file-for-' + filePath,
        originalFilePath: filePath,
        size:
          filePath.includes('some-local-file.png') ||
          filePath.includes('another-local-file.png')
            ? 300 * 1000 * 1000
            : 10,
      };
    });
    mockFn(getCredentialsForCloudProject).mockResolvedValue(undefined);
    mockFn(uploadProjectResourceFiles).mockImplementation(
      // @ts-expect-error - TS7006 - Parameter 'authenticatedUser' implicitly has an 'any' type. | TS7006 - Parameter 'cloudProjectId' implicitly has an 'any' type. | TS7006 - Parameter 'files' implicitly has an 'any' type.
      async (authenticatedUser, cloudProjectId, files) => {
        // @ts-expect-error - TS7006 - Parameter 'file' implicitly has an 'any' type.
        return files.map((file) => ({
          url: 'fake-url-for-' + file.name,
          error: null,
        }));
      }
    );

    // Launch the resources mover.
    const project = makeTestProjectWithResourcesToUpload();
    const options = makeMoveAllLocalResourcesToCloudResourcesOptions(project);
    const fetchedResources =
      await moveAllLocalResourcesToCloudResources(options);

    // Check local resources were read.
    expect(readLocalFileToFile).toHaveBeenCalledWith(
      path.resolve('some-local-file.png')
    );
    expect(readLocalFileToFile).toHaveBeenCalledWith(
      path.resolve('another-local-file.png')
    );

    // Check local resources were uploaded
    expect(uploadProjectResourceFiles).toHaveBeenCalledTimes(3);
    expect(mockFn(uploadProjectResourceFiles).mock.calls[1][1]).toBe(
      'new-fake-identifier'
    );
    expect(mockFn(uploadProjectResourceFiles).mock.calls[1][2]).toEqual([
      {
        name: expect.any(String),
        originalFilePath: path.resolve('some-local-file.png'),
        size: 300 * 1000 * 1000,
      },
    ]);
    expect(mockFn(uploadProjectResourceFiles).mock.calls[2][1]).toBe(
      'new-fake-identifier'
    );
    expect(mockFn(uploadProjectResourceFiles).mock.calls[2][2]).toEqual([
      {
        name: expect.any(String),
        originalFilePath: path.resolve('another-local-file.png'),
        size: 300 * 1000 * 1000,
      },
    ]);

    // Check no error is reported.
    expect(fetchedResources).toMatchInlineSnapshot(`
      Object {
        "erroredResources": Array [],
      }
    `);

    // Check local resources were updated with the URL they were uploaded to.
    expect(
      project.getResourcesManager().getResource('MyLocalResource').getFile()
    ).toBe(
      'fake-url-for-fake-file-for-' +
        path.resolve('some-local-file.png').replace(/\\/g, '/')
    );
    expect(
      project
        .getResourcesManager()
        .getResource('MySecondLocalResource')
        .getFile()
    ).toBe(
      'fake-url-for-fake-file-for-' +
        path.resolve('another-local-file.png').replace(/\\/g, '/')
    );
    expect(
      project
        .getResourcesManager()
        .getResource('MyResourceAlreadyAsUrl')
        .getFile()
    ).toBe('http://example/file-to-download.png');
  });

  test('load resources and report an error if read fails', async () => {
    // Simulate an error when reading a file.
    // @ts-expect-error - TS7006 - Parameter 'filePath' implicitly has an 'any' type.
    mockFn(readLocalFileToFile).mockImplementation(async (filePath) => {
      if (filePath.includes('another-local-file.png'))
        throw new Error('fake-reading-error');

      return {
        name: 'fake-file-for-' + filePath,
        originalFilePath: filePath,
        size: 10,
      };
    });
    mockFn(getCredentialsForCloudProject).mockResolvedValue(undefined);
    mockFn(uploadProjectResourceFiles).mockImplementation(
      // @ts-expect-error - TS7006 - Parameter 'authenticatedUser' implicitly has an 'any' type. | TS7006 - Parameter 'cloudProjectId' implicitly has an 'any' type. | TS7006 - Parameter 'files' implicitly has an 'any' type.
      async (authenticatedUser, cloudProjectId, files) => {
        // @ts-expect-error - TS7006 - Parameter 'file' implicitly has an 'any' type.
        return files.map((file) => {
          return {
            url: 'fake-url-for-' + file.name,
            error: null,
          };
        });
      }
    );

    // Launch the resources mover.
    const project = makeTestProjectWithResourcesToUpload();
    const options = makeMoveAllLocalResourcesToCloudResourcesOptions(project);
    const fetchedResources =
      await moveAllLocalResourcesToCloudResources(options);

    // Check local resources were read.
    expect(readLocalFileToFile).toHaveBeenCalledWith(
      path.resolve('some-local-file.png')
    );
    expect(readLocalFileToFile).toHaveBeenCalledWith(
      path.resolve('another-local-file.png')
    );

    // Check only the local resources without errors were uploaded.
    expect(mockFn(uploadProjectResourceFiles).mock.calls[0][1]).toBe(
      'new-fake-identifier'
    );
    expect(mockFn(uploadProjectResourceFiles).mock.calls[0][2]).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          originalFilePath: path.resolve('some-local-file.png'),
        }),
      ])
    );

    // Check the error is reported.
    expect(fetchedResources.erroredResources).toHaveLength(1);
    expect(fetchedResources.erroredResources[0].resourceName).toBe(
      'MySecondLocalResource'
    );

    // Check local resources were updated with the URL they were uploaded to,
    // except if they could not be read.
    expect(
      project.getResourcesManager().getResource('MyLocalResource').getFile()
    ).toBe(
      'fake-url-for-fake-file-for-' +
        path.resolve('some-local-file.png').replace(/\\/g, '/')
    );
    expect(
      project
        .getResourcesManager()
        .getResource('MySecondLocalResource')
        .getFile()
    ).toBe('another-local-file.png');
    expect(
      project
        .getResourcesManager()
        .getResource('MyResourceAlreadyAsUrl')
        .getFile()
    ).toBe('http://example/file-to-download.png');
  });
});
