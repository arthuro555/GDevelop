// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'path-browserify'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/path-browserify/index.js' implicitly has an 'any' type.
import path from 'path-browserify';
import {
  allResourceKindsAndMetadata,
  ChooseResourceOptions,
  ResourceKind,
} from './ResourceSource';
import AuthenticatedUserContext from '../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, LineStackLayout } from '../UI/Layout';
import {
  UploadedProjectResourceFiles,
  uploadProjectResourceFiles,
  PROJECT_RESOURCE_MAX_SIZE_IN_BYTES,
} from '../Utils/GDevelopServices/Project';
import { StorageProvider, FileMetadata } from '../ProjectsStorage';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Column } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/LinearProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LinearProgress.tsx', but '--jsx' is not set.
import LinearProgress from '../UI/LinearProgress';
// @ts-expect-error - TS6142 - Module '../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../UI/Paper';
import GDevelopThemeContext from '../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';

type FileToCloudProjectResourceUploaderProps = {
  options: ChooseResourceOptions,
  fileMetadata: FileMetadata | null | undefined,
  getStorageProvider: () => StorageProvider,
  onChooseResources: (resources: Array<gdResource>) => void,
  createNewResource: () => gdResource,
  automaticallyOpenInput: boolean
};

const resourceKindToInputAcceptedMimes = {
  audio: ['audio/aac', 'audio/x-wav', 'audio/mpeg', 'audio/mp3', 'audio/ogg'],
  image: ['image/jpeg', 'image/png', 'image/webp'],
  font: ['font/ttf', 'font/otf'],
  video: ['video/mp4', 'video/webm'],
  json: ['application/json'],
  tilemap: ['application/json'],
  tileset: ['application/json'],
  bitmapFont: [],
  model3D: [
    'file',
    // The following mime type is not handled by Safari. The verification will be handled
    // after the files have been picked.
    // 'model/gltf-binary'
  ],
  atlas: [],
  spine: ['application/json'],
} as const;

const getAcceptedExtensions = (resourceKind: ResourceKind, withLeadingDot: boolean = true): string[] => {
  const resourceKindMetadata =
    allResourceKindsAndMetadata.find(({ kind }) => kind === resourceKind) ||
    null;
  if (!resourceKindMetadata) return [];
// @ts-expect-error - TS2322 - Type 'string[] | readonly ["aac", "wav", "mp3", "ogg"] | readonly ["png", "jpg", "jpeg", "webp"] | readonly ["ttf", "otf"] | readonly ["mp4", "webm"] | readonly ["json"] | readonly ["json", "ldtk", "tmj"] | readonly ["json", "tsj"] | readonly ["fnt", "xml"] | readonly [...] | readonly [...]' is not assignable to type 'string[]'.
  return withLeadingDot
    ? resourceKindMetadata.fileExtensions.map(extension => '.' + extension)
    : resourceKindMetadata.fileExtensions;
};

const getAcceptedMimeTypes = (resourceKind: ResourceKind): string[] => {
// @ts-expect-error - TS2322 - Type 'readonly [] | readonly ["audio/aac", "audio/x-wav", "audio/mpeg", "audio/mp3", "audio/ogg"] | readonly ["image/jpeg", "image/png", "image/webp"] | readonly ["font/ttf", "font/otf"] | readonly ["video/mp4", "video/webm"] | readonly [...] | readonly [...]' is not assignable to type 'string[]'.
  return resourceKindToInputAcceptedMimes[resourceKind] || [];
};

export const getInputAcceptedMimesAndExtensions = (
  resourceKind: ResourceKind
) => {
  const acceptedExtensions = getAcceptedExtensions(resourceKind);
  const acceptedMimes = getAcceptedMimeTypes(resourceKind);

  return [...acceptedMimes, ...acceptedExtensions].join(',');
};

export const FileToCloudProjectResourceUploader = ({
  options,
  fileMetadata,
  getStorageProvider,
  onChooseResources,
  createNewResource,
  automaticallyOpenInput,
}: FileToCloudProjectResourceUploaderProps) => {
  const inputRef = React.useRef<HTMLInputElement | null | undefined>(null);
  const hasAutomaticallyOpenedInput = React.useRef(false);
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const authenticatedUser = React.useContext(AuthenticatedUserContext);
  const [error, setError] = React.useState<Error | null | undefined>(null);
  const [isUploading, setIsUploading] = React.useState(false);
  const [selectedFiles, setSelectedFiles] = React.useState<File[]>([]);
  const [filteredOutFiles, setFilteredOutFiles] = React.useState<File[]>([]);
  const hasSelectedFiles = selectedFiles.length > 0;
  const storageProvider = React.useMemo(getStorageProvider, [
    getStorageProvider,
  ]);
  const cloudProjectId = fileMetadata ? fileMetadata.fileIdentifier : null;
  const [uploadProgress, setUploadProgress] = React.useState(0);
  const onUpload = React.useCallback(
    async () => {
      const input = inputRef.current;
      if (!input) return;
      if (!cloudProjectId) return;

      try {
        setIsUploading(true);
        setError(null);
        setUploadProgress(0);
        const results: UploadedProjectResourceFiles = await uploadProjectResourceFiles(
          authenticatedUser,
          cloudProjectId,
          selectedFiles,
          (current: number, total: number) => {
            setUploadProgress((current / total) * 100);
          }
        );
        const erroredResults = results.filter(({ error }) => !!error);
        const okResults = results.filter(({ url }) => !!url);
        if (erroredResults.length) {
          throw erroredResults[0];
        } else if (okResults.length) {
          onChooseResources(
            okResults.map(({ url, resourceFile }) => {
              const newResource = createNewResource();
              newResource.setFile(url || '');
              newResource.setName(resourceFile.name);
              newResource.setOrigin('cloud-project-resource', url || '');

              return newResource;
            })
          );
        }
      } catch (error: any) {
        setError(error);
      } finally {
        setIsUploading(false);
      }
    },
    [
      selectedFiles,
      authenticatedUser,
      onChooseResources,
      createNewResource,
      cloudProjectId,
    ]
  );

  const invalidFiles = selectedFiles
    .map(file => {
      if (file.size > PROJECT_RESOURCE_MAX_SIZE_IN_BYTES) {
        return {
          filename: file.name,
          error: 'too-large',
        };
      }
      return null;
    })
    .filter(Boolean);

  const canUploadWithThisStorageProvider =
    storageProvider.internalName === 'Cloud' && !!fileMetadata;
  const isConnected = !!authenticatedUser.authenticated;
  const canChooseFiles =
    !isUploading && isConnected && canUploadWithThisStorageProvider;

  // Automatically open the input once, at the first render, if asked.
  React.useLayoutEffect(
    () => {
      if (automaticallyOpenInput && !hasAutomaticallyOpenedInput.current) {
        hasAutomaticallyOpenedInput.current = true;
        if (inputRef.current) inputRef.current.click();
      }
    },
    [automaticallyOpenInput]
  );

  // Start uploading after choosing some files (if there are no errors and
  // if no error happened during the last upload attempt).
  const canUploadFiles =
    !isUploading &&
    canChooseFiles &&
    hasSelectedFiles &&
    invalidFiles.length === 0;
  React.useEffect(
    () => {
      if (canUploadFiles && !error) {
        onUpload();
      }
    },
    [canUploadFiles, onUpload, error]
  );

  const shouldValidateFilePostPicking = React.useMemo(
    () => {
      const acceptedMimeTypes = getAcceptedMimeTypes(options.resourceKind);
      // Safari does not use file extensions to filter files pre-picking and
      // Safari also does not recognize all mime types. So if the only accepted
      // mime type is 'file', the file validation should happen post-picking.
      return acceptedMimeTypes.length === 1 && acceptedMimeTypes[0] === 'file';
    },
    [options.resourceKind]
  );

  const validateFilePostPicking = React.useCallback(
    (file: File) => {
      const acceptedExtensions = getAcceptedExtensions(
        options.resourceKind,
        false
      );
      return acceptedExtensions.includes(
        path.extname(file.name).replace(/^\./, '')
      );
    },
    [options.resourceKind]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ColumnStackLayout noMargin>
      {!isConnected ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <AlertMessage kind="warning">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            Your need to first create your account, or login, to upload your own
            resources.
          </Trans>
        </AlertMessage>
      ) : !canUploadWithThisStorageProvider ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <AlertMessage kind="warning">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            Your need to first save your game on GDevelop Cloud to upload your
            own resources.
          </Trans>
        </AlertMessage>
      ) : null}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Paper variant="outlined" background="medium">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <input
              accept={getInputAcceptedMimesAndExtensions(options.resourceKind)}
              style={{
                color: gdevelopTheme.text.color.primary,
              }}
              multiple={options.multiSelection}
              type="file"
// @ts-expect-error - TS2322 - Type 'MutableRefObject<HTMLInputElement | null | undefined>' is not assignable to type 'LegacyRef<HTMLInputElement> | undefined'.
              ref={inputRef}
              disabled={!canChooseFiles}
              onChange={event => {
                const files: Array<File> = [];
                const newFilteredOutFiles: Array<File> = [];
// @ts-expect-error - TS2531 - Object is possibly 'null'.
                for (let i = 0; i < event.currentTarget.files.length; i++) {
// @ts-expect-error - TS2531 - Object is possibly 'null'.
                  const selectedFile = event.currentTarget.files[i];
                  if (
                    !shouldValidateFilePostPicking ||
                    validateFilePostPicking(selectedFile)
                  ) {
                    files.push(selectedFile);
                  } else {
                    newFilteredOutFiles.push(selectedFile);
                  }
                }
                setFilteredOutFiles(newFilteredOutFiles);
                setSelectedFiles(files);

                // Remove the previous error, if any, to let a new upload attempt be triggered.
                setError(null);
              }}
            />
            {filteredOutFiles.length > 0 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <AlertMessage kind="warning">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>
                  The following file(s) cannot be used for this kind of object:{' '}
                  {filteredOutFiles.map(file => file.name).join(', ')}
                </Trans>
              </AlertMessage>
            )}
          </Column>
        </Line>
      </Paper>
      {invalidFiles.map(erroredFile => {
        if (erroredFile.error === 'too-large')
          return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <AlertMessage kind="error">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                The file {erroredFile.filename} is too large. Use files that are
                smaller for your game: each must be less than{' '}
                {PROJECT_RESOURCE_MAX_SIZE_IN_BYTES / 1000 / 1000} MB.
              </Trans>
            </AlertMessage>
          );

        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <AlertMessage kind="error">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>The file {erroredFile.filename} is invalid.</Trans>
          </AlertMessage>
        );
      })}
      {error && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <AlertMessage kind="error">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            There was an error while uploading some resources. Verify your
            internet connection or try again later.
          </Trans>
        </AlertMessage>
      )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <LineStackLayout alignItems="center" justifyContent="stretch" expand>
        {isUploading ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <LinearProgress value={uploadProgress} variant="determinate" />
        ) : null}
      </LineStackLayout>
      {error && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Line noMargin expand justifyContent="flex-end">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <RaisedButton
            primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Retry</Trans>}
            onClick={onUpload}
          />
        </Line>
      )}
    </ColumnStackLayout>
  );
};
