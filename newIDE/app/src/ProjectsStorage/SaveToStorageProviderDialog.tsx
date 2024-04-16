import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';

// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/List' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/List.tsx', but '--jsx' is not set.
import { List } from '../UI/List';

// @ts-expect-error - TS6142 - Module './StorageProviderListItem' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectsStorage/StorageProviderListItem.tsx', but '--jsx' is not set.
import StorageProviderListItem from './StorageProviderListItem';
import { StorageProvider } from '.';

type Props = {
  storageProviders: Array<StorageProvider>,
  onChooseProvider: (arg1: StorageProvider) => void,
  onClose: () => void
};

const SaveToStorageProviderDialog = ({
  onClose,
  storageProviders,
  onChooseProvider,
}: Props) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>Choose where to save the project to</Trans>}
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Cancel</Trans>}
          key="close"
          primary={false}
          onClick={onClose}
        />,
      ]}
      onRequestClose={onClose}
      open
      maxWidth="sm"
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <List useGap>
        {storageProviders
          .filter(storageProvider => !storageProvider.hiddenInSaveDialog)
          .map(storageProvider => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <StorageProviderListItem
              key={storageProvider.internalName}
              onChooseProvider={onChooseProvider}
              storageProvider={storageProvider}
            />
          ))}
      </List>
    </Dialog>
  );
};

export default SaveToStorageProviderDialog;
