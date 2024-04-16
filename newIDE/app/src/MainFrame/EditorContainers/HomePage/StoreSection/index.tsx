import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../SectionContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/SectionContainer.tsx', but '--jsx' is not set.
import SectionContainer from '../SectionContainer';
// @ts-expect-error - TS6142 - Module '../../../../AssetStore' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/index.tsx', but '--jsx' is not set.
import { AssetStore } from '../../../../AssetStore';
// @ts-expect-error - TS6142 - Module '../../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../../../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../../../UI/RaisedButton';
import { ResourceManagementProps } from '../../../../ResourcesList/ResourceSource';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../../../../AssetStore/AssetStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/AssetStoreContext.tsx', but '--jsx' is not set.
import { AssetStoreContext } from '../../../../AssetStore/AssetStoreContext';
// @ts-expect-error - TS6142 - Module '../../../../AssetStore/AssetPackInstallDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/AssetPackInstallDialog.tsx', but '--jsx' is not set.
import AssetPackInstallDialog from '../../../../AssetStore/AssetPackInstallDialog';
import { enumerateAssetStoreIds } from '../../../../AssetStore/EnumerateAssetStoreIds';
// @ts-expect-error - TS6142 - Module '../../../../Utils/GDevelopServices/Shop' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/Shop.tsx', but '--jsx' is not set.
import { PrivateGameTemplateListingData } from '../../../../Utils/GDevelopServices/Shop';
// @ts-expect-error - TS6142 - Module '../../../../UI/ErrorBoundary' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ErrorBoundary.tsx', but '--jsx' is not set.
import ErrorBoundary from '../../../../UI/ErrorBoundary';
// @ts-expect-error - TS6142 - Module '../../../../AssetStore/AssetsList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/AssetsList.tsx', but '--jsx' is not set.
import { getAssetShortHeadersToDisplay } from '../../../../AssetStore/AssetsList';

type Props = {
  project: gdProject | null | undefined,
  resourceManagementProps: ResourceManagementProps,
  canInstallPrivateAsset: () => boolean,
  onOpenPrivateGameTemplateListingData: (privateGameTemplateListingData: PrivateGameTemplateListingData) => void
};

const StoreSection = ({
  project,
  resourceManagementProps,
  canInstallPrivateAsset,
  onOpenPrivateGameTemplateListingData,
}: Props) => {
  const [
    isAssetPackDialogInstallOpen,
    setIsAssetPackDialogInstallOpen,
  ] = React.useState(false);
  const {
    assetShortHeadersSearchResults,
    shopNavigationState,
  } = React.useContext(AssetStoreContext);
  const {
    openedAssetPack,
    openedAssetShortHeader,
    selectedFolders,
  } = shopNavigationState.getCurrentPage();

  const displayedAssetShortHeaders = React.useMemo(
    () => {
      return openedAssetShortHeader
        ? [openedAssetShortHeader]
        : assetShortHeadersSearchResults
        ? getAssetShortHeadersToDisplay(
            assetShortHeadersSearchResults,
            selectedFolders
          )
        : [];
    },
    [openedAssetShortHeader, assetShortHeadersSearchResults, selectedFolders]
  );

  const existingAssetStoreIds = React.useMemo(
    () => {
      if (!project || !isAssetPackDialogInstallOpen) {
        return new Set<string>();
      }

      return enumerateAssetStoreIds(project);
    },
    [
      project,
      // Force recompute existing installed asset ids when the dialog to install them is
      // opened/closed, so that this list of ids is always up-to-date (but not recomputed at each render,
      // just when you're likely to need it).
      isAssetPackDialogInstallOpen,
    ]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <SectionContainer
      title={null /* Give the asset store the full space to display */}
      flexBody
      noScroll
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <AssetStore
        onOpenPrivateGameTemplateListingData={
          onOpenPrivateGameTemplateListingData
        }
        displayPromotions
      />
      {(openedAssetPack || openedAssetShortHeader) && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Line justifyContent="flex-end">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <RaisedButton
            primary
            onClick={() => {
              if (!project) {
                return; // TODO: create a project, await, and then show dialog.
              }

              setIsAssetPackDialogInstallOpen(true);
            }}
            disabled={!project || !displayedAssetShortHeaders.length}
            label={
              project ? (
                openedAssetShortHeader ||
                displayedAssetShortHeaders.length === 1 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>Add this asset to the project</Trans>
                ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>Add these assets to the project</Trans>
                )
              ) : openedAssetShortHeader ||
                displayedAssetShortHeaders.length === 1 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>Create a project first to add this asset</Trans>
              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>
                  Create a project first to add assets from the asset store
                </Trans>
              )
            }
          />
        </Line>
      )}
      {project &&
        isAssetPackDialogInstallOpen &&
        !!displayedAssetShortHeaders.length && (
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
            objectsContainer={null}
            onObjectsAddedFromAssets={() => {}}
            canInstallPrivateAsset={canInstallPrivateAsset}
            resourceManagementProps={resourceManagementProps}
          />
        )}
    </SectionContainer>
  );
};

const StoreSectionWithErrorBoundary = (props: Props) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ErrorBoundary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    componentTitle={<Trans>Shop section</Trans>}
    scope="start-page-shop"
  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <StoreSection {...props} />
  </ErrorBoundary>
);

export default StoreSectionWithErrorBoundary;
