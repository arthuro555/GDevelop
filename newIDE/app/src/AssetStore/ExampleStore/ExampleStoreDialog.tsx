// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../AssetStore/ExampleStore' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ExampleStore/index.tsx', but '--jsx' is not set.
import { ExampleStore } from '../../AssetStore/ExampleStore';
// @ts-expect-error - TS6142 - Module '../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
import { ExampleShortHeader } from '../../Utils/GDevelopServices/Example';
// @ts-expect-error - TS6142 - Module '../../Utils/GDevelopServices/Shop' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/Shop.tsx', but '--jsx' is not set.
import { PrivateGameTemplateListingData } from '../../Utils/GDevelopServices/Shop';

export type ExampleStoreDialogProps = {
  open: boolean,
  onClose: () => void,
  selectedExampleShortHeader: ExampleShortHeader | null | undefined,
  selectedPrivateGameTemplateListingData: PrivateGameTemplateListingData | null | undefined,
  onSelectExampleShortHeader: (exampleShortHeader?: ExampleShortHeader | null | undefined) => void,
  onSelectPrivateGameTemplateListingData: (
    privateGameTemplateListingData?: PrivateGameTemplateListingData | null | undefined,
  ) => void,
  onOpenNewProjectSetupDialog: () => void,
  isProjectOpening: boolean
};

const ExampleStoreDialog = ({
  open,
  onClose,
  selectedExampleShortHeader,
  selectedPrivateGameTemplateListingData,
  onSelectExampleShortHeader,
  onSelectPrivateGameTemplateListingData,
  onOpenNewProjectSetupDialog,
  isProjectOpening,
}: ExampleStoreDialogProps) => {
  const actions = React.useMemo(
    () => [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <FlatButton
        key="close"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        label={<Trans>Close</Trans>}
        primary={false}
        onClick={onClose}
      />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <DialogPrimaryButton
        key="create-blank"
        id="create-blank-project-button"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        label={<Trans>Create a blank project</Trans>}
        primary
        onClick={onOpenNewProjectSetupDialog}
      />,
    ],
    [onClose, onOpenNewProjectSetupDialog]
  );

  if (!open) return null;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          title={<Trans>Create a new project</Trans>}
          actions={actions}
          onRequestClose={onClose}
          onApply={onOpenNewProjectSetupDialog}
          open={open}
          fullHeight
          flexColumnBody
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ExampleStore
            focusOnMount
            isOpening={isProjectOpening}
            onOpenNewProjectSetupDialog={onOpenNewProjectSetupDialog}
            onSelectExampleShortHeader={onSelectExampleShortHeader}
            onSelectPrivateGameTemplateListingData={
              onSelectPrivateGameTemplateListingData
            }
            selectedExampleShortHeader={selectedExampleShortHeader}
            selectedPrivateGameTemplateListingData={
              selectedPrivateGameTemplateListingData
            }
          />
        </Dialog>
      )}
    </I18n>
  );
};

export default ExampleStoreDialog;
