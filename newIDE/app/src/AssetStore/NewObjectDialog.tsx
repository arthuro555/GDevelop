// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t, Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../UI/HelpButton';
// @ts-expect-error - TS6142 - Module '../UI/Tabs' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Tabs.tsx', but '--jsx' is not set.
import { Tabs } from '../UI/Tabs';
// @ts-expect-error - TS6142 - Module '.' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/index.tsx', but '--jsx' is not set.
import { AssetStore, AssetStoreInterface } from '.';
import { ResourceManagementProps } from '../ResourcesList/ResourceSource';
import { sendAssetAddedToProject } from '../Utils/Analytics/EventSender';
// @ts-expect-error - TS6142 - Module '../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from '../MainFrame/Preferences/PreferencesContext';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module './AssetStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/AssetStoreContext.tsx', but '--jsx' is not set.
import { AssetStoreContext } from './AssetStoreContext';
// @ts-expect-error - TS6142 - Module './AssetPackInstallDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/AssetPackInstallDialog.tsx', but '--jsx' is not set.
import AssetPackInstallDialog from './AssetPackInstallDialog';
import { EnumeratedObjectMetadata } from '../ObjectsList/EnumerateObjects';
import {
  installRequiredExtensions,
  installPublicAsset,
  checkRequiredExtensionsUpdate,
  checkRequiredExtensionsUpdateForAssets,
} from './InstallAsset';
import {
  Asset,
  AssetShortHeader,
  getPublicAsset,
  isPrivateAsset,
} from '../Utils/GDevelopServices/Asset';
import { ExtensionShortHeader } from '../Utils/GDevelopServices/Extension';
import EventsFunctionsExtensionsContext from '../EventsFunctionsExtensionsLoader/EventsFunctionsExtensionsContext';
import Window from '../Utils/Window';
import PrivateAssetsAuthorizationContext from './PrivateAssets/PrivateAssetsAuthorizationContext';
import useAlertDialog from '../UI/Alert/useAlertDialog';
import { useResponsiveWindowSize } from '../UI/Responsive/ResponsiveWindowMeasurer';
import { enumerateAssetStoreIds } from './EnumerateAssetStoreIds';
import PromisePool from '@supercharge/promise-pool';
// @ts-expect-error - TS6142 - Module './NewObjectFromScratch' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/NewObjectFromScratch.tsx', but '--jsx' is not set.
import NewObjectFromScratch from './NewObjectFromScratch';
// @ts-expect-error - TS6142 - Module './AssetsList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/AssetsList.tsx', but '--jsx' is not set.
import { getAssetShortHeadersToDisplay } from './AssetsList';
// @ts-expect-error - TS6142 - Module '../UI/ErrorBoundary' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ErrorBoundary.tsx', but '--jsx' is not set.
import ErrorBoundary from '../UI/ErrorBoundary';

const isDev = Window.isDev();

export const useExtensionUpdateAlertDialog = () => {
// @ts-expect-error - TS2339 - Property 'showConfirmation' does not exist on type 'void'.
  const { showConfirmation } = useAlertDialog();
  return async (outOfDateExtensionShortHeaders: Array<ExtensionShortHeader>): Promise<boolean> => {
    return await showConfirmation({
      title: t`Extension update`,
      message: t`Before installing this asset, it's strongly recommended to update these extensions${'\n\n - ' +
        outOfDateExtensionShortHeaders
          .map(extension => extension.fullName)
          .join('\n\n - ') +
        '\n\n'}Do you want to update it now ?`,
      confirmButtonLabel: t`Update the extension`,
      dismissButtonLabel: t`Skip the update`,
    });
  };
};

export const useFetchAssets = () => {
  const { environment } = React.useContext(AssetStoreContext);

  const { fetchPrivateAsset } = React.useContext(
    PrivateAssetsAuthorizationContext
  );

  return async (assetShortHeaders: Array<AssetShortHeader>): Promise<Array<Asset>> => {
    const fetchedAssets = await PromisePool.withConcurrency(6)
      .for(assetShortHeaders)
      .process<Asset>(async assetShortHeader => {
        const asset = isPrivateAsset(assetShortHeader)
          ? await fetchPrivateAsset(assetShortHeader, {
              environment,
            })
          : await getPublicAsset(assetShortHeader, { environment });
        if (!asset) {
          throw new Error(
            'Unable to install the asset because it could not be fetched.'
          );
        }
        return asset;
      });
    if (fetchedAssets.errors.length) {
      throw new Error(
        'Error(s) while installing assets. The first error is: ' +
          fetchedAssets.errors[0].message
      );
    }
    const assets = fetchedAssets.results;
    return assets;
  };
};

type Props = {
  project: gdProject,
  layout: gdLayout | null | undefined,
  objectsContainer: gdObjectsContainer,
  resourceManagementProps: ResourceManagementProps,
  onClose: () => void,
  onCreateNewObject: (type: string) => void,
  onObjectsAddedFromAssets: (arg1: Array<gdObject>) => void,
  canInstallPrivateAsset: () => boolean
};

function NewObjectDialog({
  project,
  layout,
  objectsContainer,
  resourceManagementProps,
  onClose,
  onCreateNewObject,
  onObjectsAddedFromAssets,
  canInstallPrivateAsset,
}: Props) {
  const { isMobile } = useResponsiveWindowSize();
  const {
    setNewObjectDialogDefaultTab,
    getNewObjectDialogDefaultTab,
  } = React.useContext(PreferencesContext);
  const [currentTab, setCurrentTab] = React.useState(
    getNewObjectDialogDefaultTab()
  );

  React.useEffect(() => setNewObjectDialogDefaultTab(currentTab), [
    setNewObjectDialogDefaultTab,
    currentTab,
  ]);

  const {
    assetShortHeadersSearchResults,
    shopNavigationState,
    environment,
    setEnvironment,
  } = React.useContext(AssetStoreContext);
  const {
    openedAssetPack,
    openedAssetShortHeader,
    selectedFolders,
  } = shopNavigationState.getCurrentPage();
  const [
    isAssetPackDialogInstallOpen,
    setIsAssetPackDialogInstallOpen,
  ] = React.useState(false);
  // Avoid memoizing the result of enumerateAssetStoreIds, as it does not get updated
  // when adding assets.
  const existingAssetStoreIds = enumerateAssetStoreIds(
    project,
    objectsContainer
  );
  const [
    isAssetBeingInstalled,
    setIsAssetBeingInstalled,
  ] = React.useState<boolean>(false);
  const [
    selectedCustomObjectEnumeratedMetadata,
    setSelectedCustomObjectEnumeratedMetadata,
  ] = React.useState<EnumeratedObjectMetadata | null | undefined>(null);
  const eventsFunctionsExtensionsState = React.useContext(
    EventsFunctionsExtensionsContext
  );
  const isAssetAddedToScene =
    openedAssetShortHeader &&
    existingAssetStoreIds.has(openedAssetShortHeader.id);
  const { installPrivateAsset } = React.useContext(
    PrivateAssetsAuthorizationContext
  );
// @ts-expect-error - TS2339 - Property 'showAlert' does not exist on type 'void'.
  const { showAlert } = useAlertDialog();

  const fetchAssets = useFetchAssets();
  const showExtensionUpdateConfirmation = useExtensionUpdateAlertDialog();

  const onInstallAsset = React.useCallback(
// @ts-expect-error - TS7006 - Parameter 'assetShortHeader' implicitly has an 'any' type.
    async (assetShortHeader): Promise<boolean> => {
      if (!assetShortHeader) return false;
      setIsAssetBeingInstalled(true);
      try {
        const isPrivate = isPrivateAsset(assetShortHeader);
        if (isPrivate) {
          const canUserInstallPrivateAsset = await canInstallPrivateAsset();
          if (!canUserInstallPrivateAsset) {
            await showAlert({
              title: t`Save your project`,
              message: t`You need to save this project as a cloud project to install this asset. Please save your project and try again.`,
            });
            setIsAssetBeingInstalled(false);
            return false;
          }
        }
        const assets = await fetchAssets([assetShortHeader]);
        const asset = assets[0];
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
        const installOutput = isPrivate
          ? await installPrivateAsset({
              asset,
              project,
              objectsContainer,
            })
          : await installPublicAsset({
              asset,
              project,
              objectsContainer,
            });
        if (!installOutput) {
          throw new Error('Unable to install private Asset.');
        }
        sendAssetAddedToProject({
          id: assetShortHeader.id,
          name: assetShortHeader.name,
          assetPackName: openedAssetPack ? openedAssetPack.name : null,
          assetPackTag: openedAssetPack ? openedAssetPack.tag : null,
          assetPackId:
            openedAssetPack && openedAssetPack.id ? openedAssetPack.id : null,
          assetPackKind: isPrivate ? 'private' : 'public',
        });

        onObjectsAddedFromAssets(installOutput.createdObjects);

        await resourceManagementProps.onFetchNewlyAddedResources();
        setIsAssetBeingInstalled(false);
        return true;
      } catch (error: any) {
        console.error('Error while installing the asset:', error);
        showAlert({
          title: t`Could not install the asset`,
          message: t`There was an error while installing the asset "${
            assetShortHeader.name
          }". Verify your internet connection or try again later.`,
        });
        setIsAssetBeingInstalled(false);
        return false;
      }
    },
    [
      fetchAssets,
      project,
      showExtensionUpdateConfirmation,
      installPrivateAsset,
      eventsFunctionsExtensionsState,
      objectsContainer,
      openedAssetPack,
      resourceManagementProps,
      canInstallPrivateAsset,
      showAlert,
      onObjectsAddedFromAssets,
    ]
  );

  const onInstallEmptyCustomObject = React.useCallback(
    async () => {
      const requiredExtensions =
        selectedCustomObjectEnumeratedMetadata &&
        selectedCustomObjectEnumeratedMetadata.requiredExtensions;
      if (!selectedCustomObjectEnumeratedMetadata || !requiredExtensions)
        return;
      try {
        setIsAssetBeingInstalled(true);
        const requiredExtensionInstallation = await checkRequiredExtensionsUpdate(
          {
            requiredExtensions,
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

        onCreateNewObject(selectedCustomObjectEnumeratedMetadata.name);
      } catch (error: any) {
        console.error('Error while creating the object:', error);
        showAlert({
          title: t`Could not create the object`,
          message: t`There was an error while creating the object "${
            selectedCustomObjectEnumeratedMetadata.fullName
          }". Verify your internet connection or try again later.`,
        });
      } finally {
        setIsAssetBeingInstalled(false);
      }
    },
    [
      selectedCustomObjectEnumeratedMetadata,
      onCreateNewObject,
      project,
      showExtensionUpdateConfirmation,
      eventsFunctionsExtensionsState,
      showAlert,
    ]
  );

  const displayedAssetShortHeaders = React.useMemo(
    () => {
      return assetShortHeadersSearchResults
        ? getAssetShortHeadersToDisplay(
            assetShortHeadersSearchResults,
            selectedFolders
          )
        : [];
    },
    [assetShortHeadersSearchResults, selectedFolders]
  );

  const mainAction =
    currentTab === 'asset-store' ? (
      openedAssetPack ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <RaisedButton
          key="add-all-assets"
          primary
          label={
            displayedAssetShortHeaders.length === 1 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Add this asset to my scene</Trans>
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Add these assets to my scene</Trans>
            )
          }
          onClick={() => setIsAssetPackDialogInstallOpen(true)}
          disabled={
            !displayedAssetShortHeaders ||
            displayedAssetShortHeaders.length === 0
          }
        />
      ) : openedAssetShortHeader ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <RaisedButton
          key="add-asset"
          primary={!isAssetAddedToScene}
          label={
            isAssetBeingInstalled ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Adding...</Trans>
            ) : isAssetAddedToScene ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Add again</Trans>
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Add to the scene</Trans>
            )
          }
          onClick={async () => {
            onInstallAsset(openedAssetShortHeader);
          }}
          disabled={isAssetBeingInstalled}
          id="add-asset-button"
        />
      ) : isDev ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <RaisedButton
          key="show-dev-assets"
          label={
            environment === 'staging' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Show live assets</Trans>
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Show staging assets</Trans>
            )
          }
          onClick={() => {
            setEnvironment(environment === 'staging' ? 'live' : 'staging');
          }}
        />
      ) : null
    ) : !!selectedCustomObjectEnumeratedMetadata &&
      currentTab === 'new-object' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <RaisedButton
        key="skip-and-create"
        label={
          !isAssetBeingInstalled ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>Skip and create from scratch</Trans>
          ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>Adding...</Trans>
          )
        }
        primary
        onClick={onInstallEmptyCustomObject}
        id="skip-and-create-button"
        disabled={isAssetBeingInstalled}
      />
    ) : null;

  const assetStore = React.useRef<AssetStoreInterface | null | undefined>(null);
  const handleClose = React.useCallback(
    () => {
      assetStore.current && assetStore.current.onClose();
      onClose();
    },
    [onClose]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            title={<Trans>New object</Trans>}
            secondaryActions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <HelpButton helpPagePath="/objects" key="help" />,
            ]}
            actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <FlatButton
                key="close"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Close</Trans>}
                primary={false}
                onClick={handleClose}
                id="close-button"
              />,
              mainAction,
            ]}
            onRequestClose={handleClose}
            onApply={
              openedAssetPack
                ? () => setIsAssetPackDialogInstallOpen(true)
                : openedAssetShortHeader
                ? async () => {
                    await onInstallAsset(openedAssetShortHeader);
                  }
                : undefined
            }
            open
            flexBody
            fullHeight
            id="new-object-dialog"
            fixedContent={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Tabs
                value={currentTab}
                onChange={setCurrentTab}
                options={[
                  {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    label: <Trans>Asset Store</Trans>,
                    value: 'asset-store',
                    id: 'asset-store-tab',
                  },
                  {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    label: <Trans>New object from scratch</Trans>,
                    value: 'new-object',
                    id: 'new-object-from-scratch-tab',
                  },
                ]}
                // Enforce scroll on mobile, because the tabs have long names.
                variant={isMobile ? 'scrollable' : undefined}
              />
            }
          >
            {currentTab === 'asset-store' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <AssetStore ref={assetStore} hideGameTemplates />
            )}
            {currentTab === 'new-object' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <NewObjectFromScratch
                onCreateNewObject={onCreateNewObject}
                onCustomObjectSelected={
                  setSelectedCustomObjectEnumeratedMetadata
                }
                selectedCustomObject={selectedCustomObjectEnumeratedMetadata}
// @ts-expect-error - TS7006 - Parameter 'assetShortHeader' implicitly has an 'any' type.
                onInstallAsset={async assetShortHeader => {
                  const result = await onInstallAsset(assetShortHeader);
                  if (result) {
                    handleClose();
                  }
                }}
                isAssetBeingInstalled={isAssetBeingInstalled}
                project={project}
                i18n={i18n}
              />
            )}
          </Dialog>
          {isAssetPackDialogInstallOpen &&
            displayedAssetShortHeaders &&
            openedAssetPack && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <AssetPackInstallDialog
                assetPack={openedAssetPack}
                assetShortHeaders={displayedAssetShortHeaders}
                addedAssetIds={existingAssetStoreIds}
                onClose={() => setIsAssetPackDialogInstallOpen(false)}
                onAssetsAdded={() => {
                  setIsAssetPackDialogInstallOpen(false);
                }}
                project={project}
                objectsContainer={objectsContainer}
                onObjectsAddedFromAssets={onObjectsAddedFromAssets}
                canInstallPrivateAsset={canInstallPrivateAsset}
                resourceManagementProps={resourceManagementProps}
              />
            )}
        </>
      )}
    </I18n>
  );
}

const NewObjectDialogWithErrorBoundary = (props: Props) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ErrorBoundary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    componentTitle={<Trans>New Object dialog</Trans>}
    scope="new-object-dialog"
    onClose={props.onClose}
  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <NewObjectDialog {...props} />
  </ErrorBoundary>
);

export default NewObjectDialogWithErrorBoundary;
