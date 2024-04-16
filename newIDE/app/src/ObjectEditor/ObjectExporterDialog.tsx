// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../UI/HelpButton';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
import { mapFor } from '../Utils/MapFor';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Upload'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Upload.js' implicitly has an 'any' type.
import Upload from '../UI/CustomSvgIcons/Upload';
import {
  BlobDownloadUrlHolder,
  openBlobDownloadUrl,
} from '../Utils/BlobDownloadUrlHolder';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../UI/PlaceholderLoader';
import { serializeToObjectAsset } from '../Utils/Serializer';
import { showErrorBox } from '../UI/Messages/MessageBox';
import { downloadUrlsToBlobs, ItemResult } from '../Utils/BlobDownloader';
// @ts-expect-error - TS6142 - Module '../Utils/UseGenericRetryableProcessWithProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/UseGenericRetryableProcessWithProgress.tsx', but '--jsx' is not set.
import { useGenericRetryableProcessWithProgress } from '../Utils/UseGenericRetryableProcessWithProgress';
import { extractDecodedFilenameFromProjectResourceUrl } from '../Utils/GDevelopServices/Project';
import {
  archiveFiles,
  BlobFileDescriptor,
  TextFileDescriptor,
} from '../Utils/BrowserArchiver';
import ResourcesLoader from '../ResourcesLoader';

const excludedObjectType = [
  'BBText::BBText',
  'Lighting::LightObject',
  'PrimitiveDrawing::Drawer',
  'TextEntryObject::TextEntry',
  'TextInput::TextInputObject',
  'TextObject::Text',
  'Video::VideoObject',
];

type DownloadResourcesAsBlobsOptionsWithoutProgress = {
  project: gdProject,
  resourceNames: Array<string>,
  onAddBlobFile: (resourceName: string, blob: Blob) => void
};

type DownloadResourcesAsBlobsOptions = (DownloadResourcesAsBlobsOptionsWithoutProgress) & {
  onProgress: (count: number, total: number) => void
};

export const downloadResourcesAsBlobs = async ({
  project,
  resourceNames,
  onAddBlobFile,
  onProgress,
}: DownloadResourcesAsBlobsOptions) => {
  const result = {
    erroredResources: [],
  } as const;

  type ResourceToFetch = {
    resource: gdResource,
    url: string,
    filename: string
  };

  const resourcesManager = project.getResourcesManager();
  const resourcesToFetchAndUpload = resourceNames
    .map(
      (resourceName: string): ResourceToFetch | null | undefined => {
        const resource = resourcesManager.getResource(resourceName);
        const resourceFile = ResourcesLoader.getResourceFullUrl(
          project,
          resourceName,
          {}
        );
        return {
          resource,
          url: resourceFile,
          filename: extractDecodedFilenameFromProjectResourceUrl(resourceFile),
        };
      }
    )
    .filter(Boolean);

  const downloadedBlobsAndResources: Array<ItemResult<ResourceToFetch>> = await downloadUrlsToBlobs({
    urlContainers: resourcesToFetchAndUpload,
    onProgress: (count, total) => {
      onProgress(count, total * 2);
    },
  });

  downloadedBlobsAndResources.forEach(({ item, error, blob }) => {
    const { resource } = item;
    if (error || !blob) {
// @ts-expect-error - TS2339 - Property 'push' does not exist on type 'readonly []'.
      result.erroredResources.push({
        resourceName: resource.getName(),
        error: error || new Error('Unknown error during download.'),
      });
      return;
    }
    onAddBlobFile(resource.getName(), blob);
  });

  return result;
};

const addSpacesToPascalCase = (pascalCaseName: string): string => {
  let name = pascalCaseName
    .replace(/([A-Z]+|\d+)/g, ' $1')
    .replace(/_(\w)/g, (match, $1) => ' ' + $1.toUpperCase())
    .replace(/_/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  name = name.charAt(0) === ' ' ? name.substring(1) : name;
  return name;
};

type EnumeratedObject = {
  object: gdObject,
  path: string
};

const enumerateAllObjects = (
  objectTreeItem: gdObjectFolderOrObject,
  folderPath: string,
  allObjects: Array<EnumeratedObject>
) => {
  if (objectTreeItem.isFolder()) {
// @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type.
    mapFor(0, objectTreeItem.getChildrenCount(), i => {
      enumerateAllObjects(
        objectTreeItem.getChildAt(i),
        folderPath + objectTreeItem.getFolderName() + '/',
        allObjects
      );
    });
  } else {
    allObjects.push({ object: objectTreeItem.getObject(), path: folderPath });
  }
};

const enumerateAllObjectsOfScene = (
  scene: gdLayout,
  folderPath: string,
  allObjects: Array<EnumeratedObject>
) => {
  const objectTreeItem = scene.getRootFolder();
// @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type.
  mapFor(0, objectTreeItem.getChildrenCount(), i => {
    enumerateAllObjects(objectTreeItem.getChildAt(i), folderPath, allObjects);
  });
};

const zipAssets = async (
  project: gdProject,
  enumeratedObjects: Array<EnumeratedObject>,
  ensureDownloadResourcesAsBlobsIsDone: (options: DownloadResourcesAsBlobsOptionsWithoutProgress) => Promise<void>,
): Promise<Blob | null> => {
  const blobFiles = new Map<string, BlobFileDescriptor>();
  const textFiles: Array<TextFileDescriptor> = [];

  try {
    await Promise.all(
      enumeratedObjects.map(async ({ object, path }) => {
        const usedResourceNames: Array<string> = [];
        const serializedObject = serializeToObjectAsset(
          project,
          object,
          addSpacesToPascalCase(object.getName()),
          usedResourceNames
        );

        // Download resources to blobs and update the resources.
        const blobByResourceName: Map<string, Blob> = new Map();
        await ensureDownloadResourcesAsBlobsIsDone({
          project,
          resourceNames: usedResourceNames,
          onAddBlobFile: (resourceName: string, blob: Blob) => {
            blobByResourceName.set(resourceName, blob);
          },
        });

        const resourcesManager = project.getResourcesManager();
        for (const [resourceName, blob] of blobByResourceName) {
          const resource = resourcesManager.getResource(resourceName);
          const resourceFile = 'resources/' + resource.getFile();
          blobFiles.set(resourceFile, { filePath: resourceFile, blob });
        }

        textFiles.push({
          text: JSON.stringify(serializedObject, null, 2),
          filePath: 'objects/' + path + object.getName() + '.asset.json',
        });
      })
    );

    const zippedAssetsBlob = await archiveFiles({
      textFiles,
      blobFiles: [...blobFiles.values()],
      basePath: '',
      onProgress: (count: number, total: number) => {},
    });
    return zippedAssetsBlob;
  } catch (rawError: any) {
    showErrorBox({
      message: 'Unable to export your assets because of an internal error.',
      rawError,
      errorId: 'download-file-save-as-dialog-error',
    });
    return null;
  }
};

type Props = {
  project: gdProject,
  layout: gdLayout,
  onClose: () => void
};

const ObjectExporterDialog = ({
  project,
  layout: scene,
  onClose,
}: Props) => {
  const [
    zippedSceneAssetsBlob,
    setZippedSceneAssetsBlob,
  ] = React.useState<Blob | null | undefined>(null);
  const {
    ensureProcessIsDone: ensureDownloadResourcesAsBlobsIsDone,
    renderProcessDialog,
  } = useGenericRetryableProcessWithProgress<DownloadResourcesAsBlobsOptionsWithoutProgress>({
    onDoProcess: React.useCallback(
// @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'onProgress' implicitly has an 'any' type.
      (options, onProgress) =>
        downloadResourcesAsBlobs({ ...options, onProgress }),
      []
    ),
  });
  React.useEffect(
    () => {
      (async () => {
        setZippedSceneAssetsBlob(null);

        const enumeratedObjects: Array<EnumeratedObject> = [];
        enumerateAllObjectsOfScene(scene, '', enumeratedObjects);
        enumeratedObjects.filter(
          ({ object }) => !excludedObjectType.includes(object.getType())
        );
        const zippedLayerAssetsBlob = await zipAssets(
          project,
          enumeratedObjects,
          ensureDownloadResourcesAsBlobsIsDone
        );
        setZippedSceneAssetsBlob(zippedLayerAssetsBlob);
      })();

      return () => {
        setZippedSceneAssetsBlob(null);
      };
    },
    [project, ensureDownloadResourcesAsBlobsIsDone, scene]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>Export {scene.getName()} assets</Trans>}
      secondaryActions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <HelpButton
          key="free-pack-help"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Submit a free pack</Trans>}
          helpPagePath="/community/contribute-to-the-assets-store"
        />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <HelpButton
          key="paid-pack-help"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Submit a paid pack</Trans>}
          helpPagePath="/community/sell-asset-pack-store/"
        />,
      ]}
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Close</Trans>}
          keyboardFocused={true}
          onClick={onClose}
          key="close"
        />,
      ]}
      open
      onRequestClose={onClose}
      maxWidth="sm"
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ColumnStackLayout expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            Export the scene objects to a file and learn more about the
            submission process in the documentation.
          </Trans>
        </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column alignItems="center">
          {zippedSceneAssetsBlob ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <BlobDownloadUrlHolder blob={zippedSceneAssetsBlob}>
              {blobDownloadUrl => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  icon={<Upload />}
                  primary
                  onClick={() =>
                    openBlobDownloadUrl(
                      blobDownloadUrl,
                      scene.getName() + '.gdo'
                    )
                  }
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Export as a pack</Trans>}
                />
              )}
            </BlobDownloadUrlHolder>
          ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <PlaceholderLoader />
          )}
        </Column>
      </ColumnStackLayout>
      {renderProcessDialog()}
    </Dialog>
  );
};

export default ObjectExporterDialog;
