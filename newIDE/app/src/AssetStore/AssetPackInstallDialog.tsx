import * as React from 'react';
import {
  AssetShortHeader,
  PublicAssetPack,
  PrivateAssetPack,
  isPrivateAsset,
} from '../Utils/GDevelopServices/Asset';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t, Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/TextButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextButton.tsx', but '--jsx' is not set.
import TextButton from '../UI/TextButton';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButtonWithSplitMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButtonWithSplitMenu.tsx', but '--jsx' is not set.
import RaisedButtonWithSplitMenu from '../UI/RaisedButtonWithSplitMenu';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../UI/Grid';
import {
  checkRequiredExtensionsUpdateForAssets,
  installRequiredExtensions,
  installPublicAsset,
} from './InstallAsset';
import EventsFunctionsExtensionsContext from '../EventsFunctionsExtensionsLoader/EventsFunctionsExtensionsContext';
import { showErrorBox } from '../UI/Messages/MessageBox';
// @ts-expect-error - TS6142 - Module '../UI/LinearProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LinearProgress.tsx', but '--jsx' is not set.
import LinearProgress from '../UI/LinearProgress';
import PrivateAssetsAuthorizationContext from './PrivateAssets/PrivateAssetsAuthorizationContext';
import { ResourceManagementProps } from '../ResourcesList/ResourceSource';
import PromisePool from '@supercharge/promise-pool';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../UI/Layout';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { mapFor } from '../Utils/MapFor';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// @ts-expect-error - TS6142 - Module '../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../UI/AlertMessage';
import {
  useExtensionUpdateAlertDialog,
  useFetchAssets,
// @ts-expect-error - TS6142 - Module './NewObjectDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/NewObjectDialog.tsx', but '--jsx' is not set.
} from './NewObjectDialog';
import { InstallAssetOutput } from './InstallAsset';

// We limit the number of assets that can be installed at once to avoid
// timeouts especially with premium packs.
const MAX_ASSETS_TO_INSTALL = 200;

type Props = {
  assetPack: PublicAssetPack | PrivateAssetPack | null,
  assetShortHeaders: Array<AssetShortHeader>,
  addedAssetIds: Set<string>,
  onClose: () => void,
  onAssetsAdded: () => void,
  project: gdProject,
  objectsContainer: gdObjectsContainer | null | undefined,
  onObjectsAddedFromAssets: (objects: Array<gdObject>) => void,
  resourceManagementProps: ResourceManagementProps,
  canInstallPrivateAsset: () => boolean
};

const AssetPackInstallDialog = ({
  assetPack,
  assetShortHeaders,
  addedAssetIds,
  onClose,
  onAssetsAdded,
  project,
  objectsContainer,
  onObjectsAddedFromAssets,
  canInstallPrivateAsset,
  resourceManagementProps,
}: Props) => {
  const missingAssetShortHeaders = assetShortHeaders.filter(
    assetShortHeader => !addedAssetIds.has(assetShortHeader.id)
  );
  const allAssetsInstalled = missingAssetShortHeaders.length === 0;
  const noAssetsInstalled =
    !allAssetsInstalled &&
    missingAssetShortHeaders.length === assetShortHeaders.length;
  const isInstallingTooManyAssets =
    assetShortHeaders.length > MAX_ASSETS_TO_INSTALL;

  const [
    areAssetsBeingInstalled,
    setAreAssetsBeingInstalled,
  ] = React.useState<boolean>(false);
  const hasPrivateAssets = React.useMemo(
    () =>
      assetShortHeaders.some(assetShortHeader =>
        isPrivateAsset(assetShortHeader)
      ),
    [assetShortHeaders]
  );
  const canUserInstallPrivateAsset = React.useMemo(
    () => canInstallPrivateAsset(),
    [canInstallPrivateAsset]
  );

  const eventsFunctionsExtensionsState = React.useContext(
    EventsFunctionsExtensionsContext
  );
  const { installPrivateAsset } = React.useContext(
    PrivateAssetsAuthorizationContext
  );

  const fetchAssets = useFetchAssets();
  const showExtensionUpdateConfirmation = useExtensionUpdateAlertDialog();

  const [selectedLayoutName, setSelectedLayoutName] = React.useState<string>('');
// @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type.
  const layoutNames = mapFor(0, project.getLayoutsCount(), i => {
    return project.getLayoutAt(i).getName();
  });
  const sceneChooser = objectsContainer ? null : ( // The objects container where to add assets objects is already given.
    // Give the choice to the user to choose where to add assets objects.
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Trans>Choose where to add the assets:</Trans>
      </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <RadioGroup
        aria-label="Associated scene"
        name="associated-layout"
        value={selectedLayoutName}
        onChange={event => setSelectedLayoutName(event.target.value)}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <FormControlLabel
          value={''}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          control={<Radio color="secondary" />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Global objects in the project</Trans>}
          disabled={areAssetsBeingInstalled}
        />
{ /* @ts-expect-error - TS7006 - Parameter 'name' implicitly has an 'any' type. */}
        {layoutNames.map(name => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <FormControlLabel
            key={name}
            value={name}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            control={<Radio color="secondary" />}
            label={name}
            disabled={areAssetsBeingInstalled}
          />
        ))}
      </RadioGroup>
    </ColumnStackLayout>
  );
  const targetObjectsContainer: gdObjectsContainer =
    objectsContainer ||
    (project.hasLayoutNamed(selectedLayoutName)
      ? project.getLayout(selectedLayoutName)
      : project);

  const onInstallAssets = React.useCallback(
    async (assetShortHeaders: Array<AssetShortHeader>) => {
      if (!assetShortHeaders || !assetShortHeaders.length) return;
      if (assetShortHeaders.length > MAX_ASSETS_TO_INSTALL) return;

      setAreAssetsBeingInstalled(true);
      try {
        const assets = await fetchAssets(assetShortHeaders);
        const requiredExtensionInstallation = await checkRequiredExtensionsUpdateForAssets(
          {
            assets,
            project,
          }
        );
        const shouldUpdateExtension =
          requiredExtensionInstallation.outOfDateExtensionShortHeaders.length >
            0 &&
          (await showExtensionUpdateConfirmation(
            requiredExtensionInstallation.outOfDateExtensionShortHeaders
          ));
        await installRequiredExtensions({
          requiredExtensionInstallation,
          shouldUpdateExtension,
          eventsFunctionsExtensionsState,
          project,
        });

        // Use a pool to avoid installing an unbounded amount of assets at the same time.
        const { results, errors } = await PromisePool.withConcurrency(6)
          .for(assets)
          .process<InstallAssetOutput>(async asset => {
// @ts-expect-error - TS2345 - Argument of type 'unknown' is not assignable to parameter of type 'AssetShortHeader | Asset'.
            const installOutput = isPrivateAsset(asset)
              ? await installPrivateAsset({
// @ts-expect-error - TS2322 - Type 'unknown' is not assignable to type 'Asset'.
                  asset,
                  project,
                  objectsContainer: targetObjectsContainer,
                })
              : await installPublicAsset({
// @ts-expect-error - TS2322 - Type 'unknown' is not assignable to type 'Asset'.
                  asset,
                  project,
                  objectsContainer: targetObjectsContainer,
                });

            if (!installOutput) {
              throw new Error('Unable to install the asset.');
            }

            return installOutput;
          });

        if (errors.length) {
          throw new Error(
            'Error(s) while installing assets. The first error is: ' +
              errors[0].message
          );
        }

        onObjectsAddedFromAssets(
          results.map(installOutput => installOutput.createdObjects).flat()
        );

        await resourceManagementProps.onFetchNewlyAddedResources();

        setAreAssetsBeingInstalled(false);
        onAssetsAdded();
      } catch (error: any) {
        setAreAssetsBeingInstalled(false);
        console.error('Error while installing the assets', error);
        showErrorBox({
          message:
            'There was an error while installing the assets. Verify your internet connection or try again later.',
          rawError: error,
          errorId: 'install-asset-pack-error',
        });
      }
    },
    [
      fetchAssets,
      project,
      showExtensionUpdateConfirmation,
      eventsFunctionsExtensionsState,
      onObjectsAddedFromAssets,
      resourceManagementProps,
      onAssetsAdded,
      installPrivateAsset,
      targetObjectsContainer,
    ]
  );

  const dialogContent =
    hasPrivateAssets && !canUserInstallPrivateAsset
      ? {
          actionButton: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <RaisedButton
              key="continue"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Add the assets</Trans>}
              primary
              disabled
              onClick={() => {}}
            />
          ),
          onApply: () => {},
          content: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <AlertMessage kind="warning">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                You need to save this project as a cloud project to install
                premium assets. Please save your project and try again.
              </Trans>
            </AlertMessage>
          ),
        }
      : isInstallingTooManyAssets
      ? {
          actionButton: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <RaisedButton
              key="continue"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Add the assets</Trans>}
              primary
              disabled
              onClick={() => {}}
            />
          ),
          onApply: () => {},
          content: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <AlertMessage kind="warning">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                You can only install up to {MAX_ASSETS_TO_INSTALL} assets at
                once. Try filtering the assets you would like to install, or
                install them one by one.
              </Trans>
            </AlertMessage>
          ),
        }
      : areAssetsBeingInstalled
      ? {
          actionButton: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <TextButton
              key="loading"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Please wait...</Trans>}
              disabled
              onClick={() => {}}
            />
          ),
          onApply: () => {},
          content: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>Installing assets...</Trans>
              </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <LinearProgress />
              </Line>
            </>
          ),
        }
      : allAssetsInstalled
      ? {
          actionButton: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <RaisedButton
              key="install-again"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Install again</Trans>}
              primary={false}
              onClick={() => onInstallAssets(assetShortHeaders)}
            />
          ),
          onApply: () => onInstallAssets(assetShortHeaders),
          content: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                You already have these {assetShortHeaders.length} assets
                installed, do you want to add them again?
              </Trans>
            </Text>
          ),
        }
      : noAssetsInstalled
      ? {
          actionButton: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <RaisedButton
              key="continue"
              label={
                assetShortHeaders.length > 1 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>Add the assets</Trans>
                ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>Add asset</Trans>
                )
              }
              primary
              onClick={() => onInstallAssets(assetShortHeaders)}
            />
          ),
          onApply: () => onInstallAssets(assetShortHeaders),
          content: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Text>
              {assetShortHeaders.length > 1 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>
                  You're about to add {assetShortHeaders.length} assets.
                </Trans>
              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>You're about to add 1 asset.</Trans>
              )}
            </Text>
          ),
        }
      : {
          actionButton: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <RaisedButtonWithSplitMenu
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Install the missing assets</Trans>}
              key="install-missing"
              primary
              onClick={() => {
                onInstallAssets(missingAssetShortHeaders);
              }}
// @ts-expect-error - TS7006 - Parameter 'i18n' implicitly has an 'any' type.
              buildMenuTemplate={i18n => [
                {
                  label: i18n._(t`Install all the assets`),
                  click: () => onInstallAssets(assetShortHeaders),
                },
              ]}
            />
          ),
          onApply: () => onInstallAssets(missingAssetShortHeaders),
          content: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                You already have{' '}
                {assetShortHeaders.length - missingAssetShortHeaders.length}{' '}
                asset(s) in your scene. Do you want to add the remaining{' '}
                {missingAssetShortHeaders.length} one(s)?
              </Trans>
            </Text>
          ),
        };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={assetPack ? assetPack.name : <Trans>Assets</Trans>}
      maxWidth="sm"
      open
      onRequestClose={() => {
        if (!areAssetsBeingInstalled) onClose();
      }}
      cannotBeDismissed
      actions={[
        // Installing a list of assets is not cancelable, so we hide the button while installing.
        !areAssetsBeingInstalled ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <TextButton
            key="cancel"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Cancel</Trans>}
            onClick={onClose}
          />
        ) : null,
        dialogContent.actionButton,
      ]}
      onApply={dialogContent.onApply}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column noMargin>
        {dialogContent.content}
        {sceneChooser}
      </Column>
    </Dialog>
  );
};

export default AssetPackInstallDialog;
