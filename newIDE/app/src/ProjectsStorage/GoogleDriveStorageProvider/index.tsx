// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t} from '@lingui/macro';
import * as React from 'react';
import {
  StorageProvider,
  FileMetadata,
  SaveAsLocation,
} from '../index';
import { serializeToJSON } from '../../Utils/Serializer';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/GoogleDrive'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/GoogleDrive.js' implicitly has an 'any' type.
import GoogleDrive from '../../UI/CustomSvgIcons/GoogleDrive';
// @ts-expect-error - TS6142 - Module './GoogleDriveSaveAsDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectsStorage/GoogleDriveStorageProvider/GoogleDriveSaveAsDialog.tsx', but '--jsx' is not set.
import GoogleDriveSaveAsDialog from './GoogleDriveSaveAsDialog';
import { MessageDescriptor } from '../../Utils/i18n/MessageDescriptor.flow';
import { AppArguments } from '../../Utils/Window';
import { loadScript } from '../../Utils/LoadScript';
const isDev = process.env.NODE_ENV === 'development';

const DEVELOPER_KEY = isDev
  ? 'AIzaSyDH3UNpxzIpcTyd6aMCWI5oNFSptG_BhOc'
  : 'AIzaSyDJYQmzLCfjXnNImDa1X_cDTWjl2BOrcM4';
const CLIENT_ID = isDev
  ? '28563107180-bd29h9f3og4h1632m94nv6hat2igrej6.apps.googleusercontent.com'
  : '44882707384-3t4tubr3fbht87sbtdp7u5mlo45k5uku.apps.googleusercontent.com';
const APP_ID = isDev ? '28563107180' : '44882707384'; // This is the first part of CLIENT_ID.
const DISCOVERY_DOCS = [
  'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
];
const SCOPE =
  'https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.install';

let apisLoaded = false;
// @ts-expect-error - TS7034 - Variable 'apisLoadingPromise' implicitly has type 'any' in some locations where its type cannot be determined.
let apisLoadingPromise = null;

/**
 * Load Google Drive APIs. Return a fulfilled promise when done.
 */
const initializeApis = (): Promise<void> => {
  if (apisLoaded) {
    return Promise.resolve();
  }

// @ts-expect-error - TS7005 - Variable 'apisLoadingPromise' implicitly has an 'any' type.
  if (apisLoadingPromise) {
    // Only do a single initialization attempt at a given time.
// @ts-expect-error - TS7005 - Variable 'apisLoadingPromise' implicitly has an 'any' type.
    return apisLoadingPromise;
  }

  apisLoadingPromise = loadScript('https://apis.google.com/js/api:client.js')
    .then(() => {
// @ts-expect-error - TS7017 - Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature.
      const gapi = global.gapi;
      if (!gapi) {
        throw new Error(
          'No gapi global object found after loading Google Drive API script'
        );
      }

      return new Promise((resolve, reject: (error?: any) => void) => {
        gapi.load('client:auth2:picker', {
          callback: () => {
            const auth2LoadPromise = gapi.auth2.init({
              apiKey: DEVELOPER_KEY,
              clientId: CLIENT_ID,
              discoveryDocs: DISCOVERY_DOCS,
              scope: SCOPE,
            });

            gapi.client.setApiKey(DEVELOPER_KEY);
            const driveLoadPromise = gapi.client.load('drive', 'v3');

            resolve(Promise.all([auth2LoadPromise, driveLoadPromise]));
          },
          onerror: () => {
            reject(
              new Error(
                'Unable to load auth2 and picker APIs for Google Drive.'
              )
            );
          },
        });
      });
    })
    .then(() => {
      apisLoaded = true;
      apisLoadingPromise = null;
    })
    .catch(error => {
      console.error('Error while loading Google Drive APIs:', error);
      apisLoadingPromise = null;

      throw error;
    });

  return apisLoadingPromise;
};

type GoogleUser = {
  getAuthResponse: () => {
    access_token: string,
    error?: Error | null | undefined
  }
};

let isAuthenticated = false;

/**
 * Sign in the user to Google Drive, returning the user object after a successful sign up
 * (or if the user is already signed in).
 */
export const authenticate = (): Promise<GoogleUser> => {
  return initializeApis().then(() => {
// @ts-expect-error - TS7017 - Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature.
    const gapi = global.gapi;
    const googleAuth = gapi.auth2.getAuthInstance();
    if (isAuthenticated && googleAuth.isSignedIn.get()) {
      return googleAuth.currentUser.get();
    }

    isAuthenticated = false;
// @ts-expect-error - TS7006 - Parameter 'authenticated' implicitly has an 'any' type.
    googleAuth.isSignedIn.listen(authenticated => {
      console.info('Authenticated with Google APIs: ', authenticated);
      isAuthenticated = authenticated;
    });
    return googleAuth
      .signIn({ scope: SCOPE })
      .then((googleUser: GoogleUser) => {
        if (
          !googleUser.getAuthResponse() ||
          googleUser.getAuthResponse().error
        ) {
          console.error(
            'OAuth2 error while sign in:',
            googleUser.getAuthResponse()
              ? googleUser.getAuthResponse().error
              : 'No AuthResponse'
          );
          throw new Error('Authentication error');
        }

        isAuthenticated = true;
        return googleUser;
      });
  });
};

/**
 * Update a JSON file, given its file id.
 */
export const patchJsonFile = (fileId: string, googleUser: GoogleUser, content: string): Promise<void> => {
  return fetch(`https://www.googleapis.com/upload/drive/v3/files/${fileId}`, {
    method: 'PATCH',
    headers: new Headers({
      Authorization: `Bearer ${googleUser.getAuthResponse().access_token}`,
      'Content-Type': 'application/json',
    }),
    body: content,
  }).then(res => {
    if (res.status !== 200) {
      if (res.status === 401) {
        isAuthenticated = false;
      }

      throw res;
    }
  });
};

/**
 * Create a new empty JSON file, returning its fileid.
 */
export const createNewJsonFile = (parentId: string, name: string): Promise<string> => {
// @ts-expect-error - TS7017 - Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature.
  const gapi = global.gapi;

  return gapi.client.drive.files
    .create({
      'content-type': 'application/json',
      uploadType: 'multipart',
      name: name,
      parents: [parentId],
      mimeType: 'application/json',
      fields: 'id, name, kind, size',
    })
// @ts-expect-error - TS7006 - Parameter 'apiResponse' implicitly has an 'any' type.
    .then(apiResponse => {
      return apiResponse.result.id;
    });
};

/**
 * Information about a file or folder picked by the user.
 */
export type GoogleDriveFileOrFolder = {
  type: 'FOLDER',
  id: string,
  name: string
} | {
  type: 'FILE',
  id: string,
  name: string,
  parentId: string
};

export type GoogleDriveFilePickerOptions = {
  selectFolderEnabled: boolean,
  showUploadView: boolean
};

/**
 * Display a file picker as a modal, resolving with the selected file or folder,
 * if any.
 *
 * The picker dialog is not playing nice with material-ui dialogs or overlays. They should
 * not be displayed when the picker is on screen.
 */
const showFilePicker = (
  {
    selectFolderEnabled,
    showUploadView,
  }: GoogleDriveFilePickerOptions,
): Promise<GoogleDriveFileOrFolder | null | undefined> => {
  return authenticate().then(googleUser => {
    const google = global.google;

    return new Promise(resolve => {
// @ts-expect-error - TS7034 - Variable 'picker' implicitly has type 'any' in some locations where its type cannot be determined.
      let picker = null;
// @ts-expect-error - TS2339 - Property 'picker' does not exist on type 'typeof google'.
      const pickerBuilder = new google.picker.PickerBuilder()
        .addView(
// @ts-expect-error - TS2339 - Property 'picker' does not exist on type 'typeof google'.
          new google.picker.DocsView()
            .setIncludeFolders(true)
            .setSelectFolderEnabled(selectFolderEnabled)
        )
        .setOAuthToken(googleUser.getAuthResponse().access_token)
        .setDeveloperKey(DEVELOPER_KEY)
        .setAppId(APP_ID) // App ID is required to correctly identify files created with the app.
// @ts-expect-error - TS7006 - Parameter 'data' implicitly has an 'any' type.
        .setCallback(data => {
          if (
// @ts-expect-error - TS2339 - Property 'picker' does not exist on type 'typeof google'. | TS2339 - Property 'picker' does not exist on type 'typeof google'.
            data[google.picker.Response.ACTION] === google.picker.Action.PICKED
          ) {
// @ts-expect-error - TS2339 - Property 'picker' does not exist on type 'typeof google'.
            const doc = data[google.picker.Response.DOCUMENTS][0];
// @ts-expect-error - TS2339 - Property 'picker' does not exist on type 'typeof google'.
            const id: string = doc[google.picker.Document.ID];
// @ts-expect-error - TS2339 - Property 'picker' does not exist on type 'typeof google'.
            const name: string = doc[google.picker.Document.NAME];
// @ts-expect-error - TS2339 - Property 'picker' does not exist on type 'typeof google'.
            const parentId: string = doc[google.picker.Document.PARENT_ID];
            if (
// @ts-expect-error - TS2339 - Property 'picker' does not exist on type 'typeof google'.
              doc[google.picker.Document.TYPE] ===
// @ts-expect-error - TS2339 - Property 'picker' does not exist on type 'typeof google'.
                google.picker.Type.LOCATION ||
// @ts-expect-error - TS2339 - Property 'picker' does not exist on type 'typeof google'.
              doc[google.picker.Document.MIME_TYPE] ===
                'application/vnd.google-apps.folder'
            ) {
              resolve({ id, name, type: 'FOLDER' });
            } else {
              resolve({ id, name, type: 'FILE', parentId });
            }
// @ts-expect-error - TS7005 - Variable 'picker' implicitly has an 'any' type. | TS7005 - Variable 'picker' implicitly has an 'any' type.
            if (picker) picker.dispose();
          } else if (
// @ts-expect-error - TS2339 - Property 'picker' does not exist on type 'typeof google'. | TS2339 - Property 'picker' does not exist on type 'typeof google'.
            data[google.picker.Response.ACTION] === google.picker.Action.CANCEL
          ) {
            resolve(null);
// @ts-expect-error - TS7005 - Variable 'picker' implicitly has an 'any' type. | TS7005 - Variable 'picker' implicitly has an 'any' type.
            if (picker) picker.dispose();
          }
        });
      if (showUploadView) {
        pickerBuilder.addView(
// @ts-expect-error - TS2339 - Property 'picker' does not exist on type 'typeof google'.
          new google.picker.DocsUploadView().setIncludeFolders(true)
        );
      }

      picker = pickerBuilder.build();

      picker.setVisible(true);
      const pickerElements = document.getElementsByClassName('picker-dialog');
      for (var i = 0; i < pickerElements.length; ++i) {
// @ts-expect-error - TS2339 - Property 'style' does not exist on type 'Element'.
        pickerElements[i].style.zIndex = '5000'; // Higher than Material UI modals
      }
    });
  });
};

/**
 * A storage that is using Google Drive to open and store files.
 */
export default {
  internalName: 'GoogleDrive',
  name: t`Google Drive`,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  renderIcon: props => <GoogleDrive fontSize={props.size} />,
  getFileMetadataFromAppArguments: (appArguments: AppArguments) => {
    if (appArguments.state) {
      try {
        // See "state" argument passed by Google Drive API:
        // https://developers.google.com/drive/api/v3/enable-sdk#construct
        const googleDriveState = JSON.parse(appArguments.state);
        if (googleDriveState.ids && googleDriveState.ids[0]) {
          return {
            fileIdentifier: googleDriveState.ids[0],
          };
        }
      } catch (e: any) {
        console.warn(
          "Error while trying to parse the Google Drive 'ids' in 'state' from the app arguments."
        );
      }
    }

    return null;
  },
  createOperations: ({ setDialog, closeDialog }) => {
    initializeApis().catch(() => {
      // Ignore error as we'll retry later.
    });

    return {
      doesInitialOpenRequireUserInteraction: true, // Authentication will open a popup, requiring user interaction
      onOpen: (fileMetadata: FileMetadata): Promise<{
        content: any
      }> => {
        const fileId = fileMetadata.fileIdentifier;

        return authenticate()
          .then(googleUser =>
            fetch(
              `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`,
              {
                method: 'GET',
                headers: new Headers({
                  Authorization: `Bearer ${
                    googleUser.getAuthResponse().access_token
                  }`,
                }),
              }
            )
          )
          .then(
            response => {
              return response.text().then(
                fileContent => {
                  return new Promise((resolve: (
                    result: Promise<{
                      content: any
                    }> | {
                      content: any
                    },
                  ) => void, reject: (error?: any) => void) => {
                    try {
                      const dataObject = JSON.parse(fileContent);
                      return resolve({
                        content: dataObject,
                      });
                    } catch (ex: any) {
                      return reject(fileId + ' is a corrupted/malformed file.');
                    }
                  });
                },
                error => {
                  console.error(
                    'Error while reading the file from Google Drive API: ',
                    error
                  );
                  throw error;
                }
              );
            },
            error => {
              console.error(
                'Error while fetching the file from Google Drive API: ',
                error
              );
              throw error;
            }
          );
      },
      onOpenWithPicker: (): Promise<FileMetadata | null | undefined> => {
        return authenticate()
          .then(googleUser =>
            showFilePicker({ selectFolderEnabled: false, showUploadView: true })
          )
          .then(googleDriveFileOrFolder => {
            if (!googleDriveFileOrFolder) {
              return null;
            }

            return {
              fileIdentifier: googleDriveFileOrFolder.id,
            };
          });
      },
      onSaveProject: (project: gdProject, fileMetadata: FileMetadata) => {
        const fileId = fileMetadata.fileIdentifier;
        const newFileMetadata = {
          ...fileMetadata,
          lastModifiedDate: Date.now(),
        } as const;

        const content = serializeToJSON(project);
        return authenticate()
          .then(googleUser => patchJsonFile(fileId, googleUser, content))
          .then(() => ({
            wasSaved: true,
            fileMetadata: newFileMetadata,
          }));
      },
      onChooseSaveProjectAsLocation: ({
        project,
        fileMetadata,
      }: {
        project: gdProject,
        fileMetadata: FileMetadata | null | undefined
      }) => {
        return new Promise(resolve => {
          setDialog(() => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <GoogleDriveSaveAsDialog
              onShowFilePicker={showFilePicker}
              onCancel={() => {
                closeDialog();
                resolve({ saveAsLocation: null });
              }}
// @ts-expect-error - TS7031 - Binding element 'selectedFileOrFolder' implicitly has an 'any' type. | TS7031 - Binding element 'newFileName' implicitly has an 'any' type.
              onSave={async ({ selectedFileOrFolder, newFileName }) => {
                await authenticate();
                if (selectedFileOrFolder.type === 'FOLDER') {
                  const newFileId = await createNewJsonFile(
                    selectedFileOrFolder.id,
                    newFileName
                  );
                  resolve({
                    saveAsLocation: {
                      fileIdentifier: newFileId,
                    },
                  });
                } else {
                  resolve({
                    saveAsLocation: {
                      fileIdentifier: selectedFileOrFolder.id,
                    },
                  });
                }
              }}
            />
          ));
        });
      },
      onSaveProjectAs: async (
        project: gdProject,
        saveAsLocation: SaveAsLocation | null | undefined,
        options
      ) => {
        if (!saveAsLocation)
          throw new Error('A location was not chosen before saving as.');
        const { fileIdentifier } = saveAsLocation;
        if (!fileIdentifier)
          throw new Error('A file was not chosen before saving as.');

        const content = serializeToJSON(project);
        options.onStartSaving();

        const googleUser = await authenticate();
        const newFileMetadata = { fileIdentifier } as const;
        await options.onMoveResources({ newFileMetadata });
        await patchJsonFile(fileIdentifier, googleUser, content);

        closeDialog();
        return {
          wasSaved: true,
          fileMetadata: newFileMetadata,
        };
      },
      getOpenErrorMessage: (error: Error): MessageDescriptor => {
        if (!apisLoaded) {
          return t`Google Drive could not be loaded. Check that you are not offline and have a proper internet connection, then try again.`;
        }

        return t`Check that you don't have any blocked popup (if so, allow them and retry) and that you have the authorization for reading the file you're trying to access.`;
      },
    };
  },
} as StorageProvider;
