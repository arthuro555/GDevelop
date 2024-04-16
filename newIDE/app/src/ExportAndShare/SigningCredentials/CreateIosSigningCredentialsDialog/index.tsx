import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../../../UI/Dialog';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import { AuthenticatedUser } from '../../../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module './CreateIosCertificateSteps' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/SigningCredentials/CreateIosSigningCredentialsDialog/CreateIosCertificateSteps.tsx', but '--jsx' is not set.
import { CreateIosCertificateSteps } from './CreateIosCertificateSteps';
// @ts-expect-error - TS6142 - Module '../../../UI/Tabs' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Tabs.tsx', but '--jsx' is not set.
import { Tabs } from '../../../UI/Tabs';
// @ts-expect-error - TS6142 - Module './CreateAuthKeySteps' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/SigningCredentials/CreateIosSigningCredentialsDialog/CreateAuthKeySteps.tsx', but '--jsx' is not set.
import { CreateAuthKeySteps } from './CreateAuthKeySteps';

type Props = {
  authenticatedUser: AuthenticatedUser,
  onClose: () => void,
  initialTab: string
};

export const CreateIosSigningCredentialsDialog = ({
  onClose,
  initialTab,
  authenticatedUser,
}: Props) => {
  const [currentTab, setCurrentTab] = React.useState<string>(initialTab);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
      open
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>Create iOS certificate</Trans>}
      flexColumnBody
      maxWidth="md"
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
          key="close"
          primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Close</Trans>}
          onClick={onClose}
        />,
      ]}
      fixedContent={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Tabs
          value={currentTab}
          onChange={setCurrentTab}
          options={[
            {
              value: 'apple-certificate',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label: <Trans>New Apple Certificate/Profile</Trans>,
            },
            {
              value: 'apple-auth-key',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label: <Trans>New Auth Key (App Store upload)</Trans>,
            },
          ]}
        />
      }
      onRequestClose={onClose}
    >
      {currentTab === 'apple-certificate' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <CreateIosCertificateSteps authenticatedUser={authenticatedUser} />
      )}
      {currentTab === 'apple-auth-key' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <CreateAuthKeySteps authenticatedUser={authenticatedUser} />
      )}
    </Dialog>
  );
};
