import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../Utils/GDevelopServices/Shop' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/Shop.tsx', but '--jsx' is not set.
import { PrivateGameTemplateListingData } from '../../Utils/GDevelopServices/Shop';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module './PrivateGameTemplateInformationPage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/PrivateGameTemplates/PrivateGameTemplateInformationPage.tsx', but '--jsx' is not set.
import PrivateGameTemplateInformationPage from './PrivateGameTemplateInformationPage';

type Props = {
  privateGameTemplateListingData: PrivateGameTemplateListingData,
  privateGameTemplateListingDatasFromSameCreator: Array<PrivateGameTemplateListingData> | null | undefined,
  onGameTemplateOpen: (arg1: PrivateGameTemplateListingData) => void,
  onCreateWithGameTemplate: (arg1: PrivateGameTemplateListingData) => void,
  onClose: () => void
};

const PrivateGameTemplateInformationDialog = ({
  privateGameTemplateListingData,
  privateGameTemplateListingDatasFromSameCreator,
  onGameTemplateOpen,
  onCreateWithGameTemplate,
  onClose,
}: Props) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
      title={null} // Handled by the content.
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
          key="close"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Back</Trans>}
          primary={false}
          onClick={onClose}
        />,
      ]}
      open
      onRequestClose={onClose}
      minHeight="lg"
      flexColumnBody
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <PrivateGameTemplateInformationPage
        privateGameTemplateListingData={privateGameTemplateListingData}
        privateGameTemplateListingDatasFromSameCreator={
          privateGameTemplateListingDatasFromSameCreator
        }
        onGameTemplateOpen={onGameTemplateOpen}
        onCreateWithGameTemplate={onCreateWithGameTemplate}
      />
    </Dialog>
  );
};

export default PrivateGameTemplateInformationDialog;
