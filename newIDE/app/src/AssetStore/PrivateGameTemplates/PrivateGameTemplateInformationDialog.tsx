import * as React from 'react';

import { PrivateGameTemplateListingData } from '../../Utils/GDevelopServices/Shop';

import { Trans } from '@lingui/macro';

import Dialog from '../../UI/Dialog';

import FlatButton from '../../UI/FlatButton';

import PrivateGameTemplateInformationPage from './PrivateGameTemplateInformationPage';

type Props = {
  privateGameTemplateListingData: PrivateGameTemplateListingData;
  privateGameTemplateListingDatasFromSameCreator:
    | Array<PrivateGameTemplateListingData>
    | null
    | undefined;
  onGameTemplateOpen: (arg1: PrivateGameTemplateListingData) => void;
  onCreateWithGameTemplate: (arg1: PrivateGameTemplateListingData) => void;
  onClose: () => void;
};

const PrivateGameTemplateInformationDialog = ({
  privateGameTemplateListingData,
  privateGameTemplateListingDatasFromSameCreator,
  onGameTemplateOpen,
  onCreateWithGameTemplate,
  onClose,
}: Props) => {
  return (
    <Dialog
      title={null} // Handled by the content.
      actions={[
        <FlatButton
          key="close"
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
