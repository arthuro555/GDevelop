import * as React from 'react';
import type { ExampleShortHeader } from '../Utils/GDevelopServices/Example';
// @ts-expect-error - TS6142 - Module '../Utils/GDevelopServices/Shop' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/Shop.tsx', but '--jsx' is not set.
import type { PrivateGameTemplateListingData } from '../Utils/GDevelopServices/Shop';
// @ts-expect-error - TS6142 - Module '../AssetStore/ExampleStore/ExampleStoreDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ExampleStore/ExampleStoreDialog.tsx', but '--jsx' is not set.
import ExampleStoreDialog from '../AssetStore/ExampleStore/ExampleStoreDialog';
// @ts-expect-error - TS6142 - Module '../AssetStore/ExampleStore/ExampleDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ExampleStore/ExampleDialog.tsx', but '--jsx' is not set.
import { ExampleDialog } from '../AssetStore/ExampleStore/ExampleDialog';
// @ts-expect-error - TS6142 - Module '../AssetStore/PrivateGameTemplates/PrivateGameTemplateInformationDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/PrivateGameTemplates/PrivateGameTemplateInformationDialog.tsx', but '--jsx' is not set.
import PrivateGameTemplateInformationDialog from '../AssetStore/PrivateGameTemplates/PrivateGameTemplateInformationDialog';
// @ts-expect-error - TS6142 - Module '../AssetStore/PrivateGameTemplates/PrivateGameTemplateStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/PrivateGameTemplates/PrivateGameTemplateStoreContext.tsx', but '--jsx' is not set.
import { PrivateGameTemplateStoreContext } from '../AssetStore/PrivateGameTemplates/PrivateGameTemplateStoreContext';
import AuthenticatedUserContext from '../Profile/AuthenticatedUserContext';

type Props = {
  isProjectOpening: boolean,
  onOpenNewProjectSetupDialog: () => void
};

const useExampleOrGameTemplateDialogs = ({
  isProjectOpening,
  onOpenNewProjectSetupDialog,
}: Props) => {
  const [
    exampleStoreDialogOpen,
    setExampleStoreDialogOpen,
  ] = React.useState<boolean>(false);
  const [
    selectedExampleShortHeader,
    setSelectedExampleShortHeader,
  ] = React.useState<ExampleShortHeader | null | undefined>(null);
  const [
    selectedPrivateGameTemplate,
    setSelectedPrivateGameTemplate,
  ] = React.useState<{
    privateGameTemplateListingData: PrivateGameTemplateListingData,
    /**
     * At the moment, only MainFrame uses this hook and handles the selected private
     * game template in both build and store sections in this single variable.
     * But the store section handles the preview of the game template content (unlike
     * the build section that needs this hook to open the information dialog) so we
     * let the possibility to select a game template without opening the dialog
     * (This selected game template is then used by the NewProjectSetupDialog to use).
     */
    openDialog: boolean
  } | null | undefined>(null);

  const { receivedGameTemplates } = React.useContext(AuthenticatedUserContext);
  const { privateGameTemplateListingDatas } = React.useContext(
    PrivateGameTemplateStoreContext
  );

  const closeExampleStoreDialog = React.useCallback(
    ({
      deselectExampleAndGameTemplate,
    }: {
      deselectExampleAndGameTemplate: boolean
    }) => {
      setExampleStoreDialogOpen(false);
      if (deselectExampleAndGameTemplate) {
        setSelectedExampleShortHeader(null);
        setSelectedPrivateGameTemplate(null);
      }
    },
    [setExampleStoreDialogOpen]
  );
  const openExampleStoreDialog = React.useCallback(
    () => {
      setExampleStoreDialogOpen(true);
    },
    [setExampleStoreDialogOpen]
  );

  const privateGameTemplateListingDatasFromSameCreator: Array<PrivateGameTemplateListingData> | null | undefined = React.useMemo(
    () => {
      if (
        !selectedPrivateGameTemplate ||
        !privateGameTemplateListingDatas ||
        !receivedGameTemplates
      )
        return null;

      const receivedGameTemplateIds = receivedGameTemplates.map(
        template => template.id
      );

      return privateGameTemplateListingDatas
        .filter(
// @ts-expect-error - TS7006 - Parameter 'template' implicitly has an 'any' type.
          template =>
            template.sellerId ===
              selectedPrivateGameTemplate.privateGameTemplateListingData
                .sellerId &&
            !receivedGameTemplateIds.includes(template.sellerId)
        )
// @ts-expect-error - TS7006 - Parameter 'template1' implicitly has an 'any' type. | TS7006 - Parameter 'template2' implicitly has an 'any' type.
        .sort((template1, template2) =>
          template1.name.localeCompare(template2.name)
        );
    },
    [
      selectedPrivateGameTemplate,
      privateGameTemplateListingDatas,
      receivedGameTemplates,
    ]
  );

  const renderExampleOrGameTemplateDialogs = () => {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <>
        {exampleStoreDialogOpen && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ExampleStoreDialog
            open
            onClose={() =>
              closeExampleStoreDialog({ deselectExampleAndGameTemplate: true })
            }
            isProjectOpening={isProjectOpening}
            selectedExampleShortHeader={selectedExampleShortHeader}
            selectedPrivateGameTemplateListingData={
              selectedPrivateGameTemplate
                ? selectedPrivateGameTemplate.privateGameTemplateListingData
                : null
            }
            onSelectExampleShortHeader={setSelectedExampleShortHeader}
// @ts-expect-error - TS7006 - Parameter 'privateGameTemplateListingData' implicitly has an 'any' type.
            onSelectPrivateGameTemplateListingData={privateGameTemplateListingData =>
              privateGameTemplateListingData
                ? setSelectedPrivateGameTemplate({
                    privateGameTemplateListingData,
                    openDialog: true,
                  })
                : setSelectedPrivateGameTemplate(null)
            }
            onOpenNewProjectSetupDialog={onOpenNewProjectSetupDialog}
          />
        )}
        {!!selectedExampleShortHeader && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ExampleDialog
            isOpening={isProjectOpening}
            exampleShortHeader={selectedExampleShortHeader}
            onOpen={onOpenNewProjectSetupDialog}
            onClose={() => setSelectedExampleShortHeader(null)}
          />
        )}
        {!!selectedPrivateGameTemplate &&
          selectedPrivateGameTemplate.openDialog && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <PrivateGameTemplateInformationDialog
              privateGameTemplateListingData={
                selectedPrivateGameTemplate.privateGameTemplateListingData
              }
              onCreateWithGameTemplate={onOpenNewProjectSetupDialog}
// @ts-expect-error - TS7006 - Parameter 'privateGameTemplateListingData' implicitly has an 'any' type.
              onGameTemplateOpen={privateGameTemplateListingData =>
                setSelectedPrivateGameTemplate({
                  privateGameTemplateListingData,
                  openDialog: true,
                })
              }
              onClose={() => setSelectedPrivateGameTemplate(null)}
              privateGameTemplateListingDatasFromSameCreator={
                privateGameTemplateListingDatasFromSameCreator
              }
            />
          )}
      </>
    );
  };
  return {
    selectedExampleShortHeader,
    selectedPrivateGameTemplateListingData: selectedPrivateGameTemplate
      ? selectedPrivateGameTemplate.privateGameTemplateListingData
      : null,
    closeExampleStoreDialog,
    openExampleStoreDialog,
    onSelectExampleShortHeader: setSelectedExampleShortHeader,
    onSelectPrivateGameTemplate: setSelectedPrivateGameTemplate,
    renderExampleOrGameTemplateDialogs,
  };
};

export default useExampleOrGameTemplateDialogs;
