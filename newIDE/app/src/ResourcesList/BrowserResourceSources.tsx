// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t, Trans} from '@lingui/macro';
import * as React from 'react';
import {
  ChooseResourceOptions,
  ResourceSourceComponentProps,
  ResourceSource,
  allResourceKindsAndMetadata,
} from './ResourceSource';
// @ts-expect-error - TS6142 - Module '../AssetStore/ResourceStore' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ResourceStore/index.tsx', but '--jsx' is not set.
import { ResourceStore } from '../AssetStore/ResourceStore';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'path-browserify'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/path-browserify/index.js' implicitly has an 'any' type.
import path from 'path-browserify';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, TextFieldWithButtonLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../UI/SemiControlledTextField';
import { useDebounce } from '../Utils/UseDebounce';
import axios from 'axios';
// @ts-expect-error - TS6142 - Module '../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module './FileToCloudProjectResourceUploader' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/FileToCloudProjectResourceUploader.tsx', but '--jsx' is not set.
import { FileToCloudProjectResourceUploader } from './FileToCloudProjectResourceUploader';
import {
  extractDecodedFilenameWithExtensionFromPublicAssetResourceUrl,
  isPublicAssetResourceUrl,
} from '../Utils/GDevelopServices/Asset';

type ResourceStoreChooserProps = {
  options: ChooseResourceOptions,
  onChooseResources: (resources: Array<gdResource>) => void,
  createNewResource: () => gdResource
};

const ResourceStoreChooser = ({
  options,
  onChooseResources,
  createNewResource,
}: ResourceStoreChooserProps) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ResourceStore
// @ts-expect-error - TS7006 - Parameter 'resource' implicitly has an 'any' type.
      onChoose={resource => {
        const chosenResourceUrl = resource.url;
        const newResource = createNewResource();
        newResource.setFile(chosenResourceUrl);
        const resourceCleanedName = isPublicAssetResourceUrl(chosenResourceUrl)
          ? extractDecodedFilenameWithExtensionFromPublicAssetResourceUrl(
              chosenResourceUrl
            )
          : path.basename(chosenResourceUrl);
        newResource.setName(resourceCleanedName);
        newResource.setOrigin('gdevelop-asset-store', chosenResourceUrl);

        onChooseResources([newResource]);
      }}
      resourceKind={options.resourceKind}
    />
  );
};

export const UrlChooser = ({
  options,
  onChooseResources,
  createNewResource,
}: ResourceStoreChooserProps) => {
  const [inputValue, setInputValue] = React.useState('');
  const [error, setError] = React.useState<Error | null | undefined>(null);
  const [urlsErroredBooleanArray, setUrlsErroredBooleanArray] = React.useState<boolean[]>([]);
  const hasErroredUrls = !!urlsErroredBooleanArray.filter(Boolean).length;

  const validateInputValue = useDebounce(async (inputValue: string) => {
    const urls = options.multiSelection
      ? inputValue.split('\n').filter(Boolean)
      : [inputValue];
    setError(null);
    setUrlsErroredBooleanArray([]);

    try {
      const responses = await Promise.all(
        urls.map(async url => {
          return await axios.get(url, {
            timeout: 1000,
            validateStatus: status => true,
          });
        })
      );

      setUrlsErroredBooleanArray(
        responses.map(
          response => !(response.status >= 200 && response.status < 400)
        )
      );
    } catch (error: any) {
      setError(error);
    }
  }, 500);

  React.useEffect(
    () => {
      validateInputValue(inputValue);
    },
    [inputValue, validateInputValue]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ColumnStackLayout noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <TextFieldWithButtonLayout
// @ts-expect-error - TS7006 - Parameter 'style' implicitly has an 'any' type.
          renderButton={style => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <RaisedButton
              onClick={() => {
                const urls = options.multiSelection
                  ? inputValue.split('\n').filter(Boolean)
                  : [inputValue];

                onChooseResources(
                  urls.map(url => {
                    const newResource = createNewResource();
                    newResource.setFile(url);
                    newResource.setName(path.basename(url));
                    newResource.setOrigin('url', url);

                    return newResource;
                  })
                );
              }}
              primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Choose</Trans>}
              style={style}
              disabled={!!error || hasErroredUrls}
            />
          )}
          renderTextField={() => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <SemiControlledTextField
              floatingLabelText={
                options.multiSelection ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>Resource(s) URL(s) (one per line)</Trans>
                ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>Resource URL</Trans>
                )
              }
              value={inputValue}
              onChange={setInputValue}
              multiline={options.multiSelection}
              rows={1}
              rowsMax={5}
              fullWidth
              errorText={
                error ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>
                    There was an error verifying the URL(s). Please check they
                    are correct.
                  </Trans>
                ) : hasErroredUrls ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>
                    Unable to verify URLs{' '}
                    {urlsErroredBooleanArray
                      .map((isErrored, index) => {
                        if (isErrored) return '#' + (index + 1);
                        return null;
                      })
                      .filter(Boolean)
                      .join(', ')}
                    . Please check they are correct.
                  </Trans>
                ) : null
              }
            />
          )}
        />
      </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <AlertMessage kind="warning">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Trans>
          The URLs must be public and stay accessible while you work on this
          project - they won't be stored inside the project file. When exporting
          a game, the resources pointed by these URLs will be downloaded and
          stored inside the game.
        </Trans>
      </AlertMessage>
    </ColumnStackLayout>
  );
};

// @ts-expect-error - TS2322 - Type '{ name: string; displayName: any; displayTab: string; kind: "audio" | "image" | "font" | "video" | "json" | "tilemap" | "tileset" | "bitmapFont" | "model3D" | "atlas" | "spine"; renderComponent: (props: ResourceSourceComponentProps) => Element; }[]' is not assignable to type 'ResourceSource[]'.
const browserResourceSources: Array<ResourceSource> = [
  ...allResourceKindsAndMetadata.map(({ kind, createNewResource }) => ({
    name: `upload-${kind}`,
    displayName: t`File(s) from your device`,
    displayTab: 'import',
    kind,
    renderComponent: (props: ResourceSourceComponentProps) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <FileToCloudProjectResourceUploader
        createNewResource={createNewResource}
        onChooseResources={props.onChooseResources}
        options={props.options}
        fileMetadata={props.fileMetadata}
        getStorageProvider={props.getStorageProvider}
        key={`url-chooser-${kind}`}
        automaticallyOpenInput={!!props.automaticallyOpenIfPossible}
      />
    ),
  })),
  ...allResourceKindsAndMetadata.map(({ kind, createNewResource }) => ({
    name: `resource-store-${kind}`,
    displayName: t`Choose from asset store`,
    displayTab: 'standalone',
    kind,
    renderComponent: (props: ResourceSourceComponentProps) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <ResourceStoreChooser
        createNewResource={createNewResource}
        onChooseResources={props.onChooseResources}
        options={props.options}
        key={`resource-store-${kind}`}
      />
    ),
  })),
  ...allResourceKindsAndMetadata.map(({ kind, createNewResource }) => ({
    name: `url-chooser-${kind}`,
    displayName: t`Use a public URL`,
    displayTab: 'import-advanced',
    kind,
    renderComponent: (props: ResourceSourceComponentProps) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <UrlChooser
        createNewResource={createNewResource}
        onChooseResources={props.onChooseResources}
        options={props.options}
        key={`url-chooser-${kind}`}
      />
    ),
  })),
];

export default browserResourceSources;
