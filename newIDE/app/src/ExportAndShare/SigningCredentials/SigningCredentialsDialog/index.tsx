import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../../../UI/Dialog';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import { AuthenticatedUser } from '../../../Profile/AuthenticatedUserContext';
import {
  getUserSigningCredentials,
  SigningCredential,
} from '../../../Utils/GDevelopServices/Build';
// @ts-expect-error - TS6142 - Module '../CreateIosSigningCredentialsDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/SigningCredentials/CreateIosSigningCredentialsDialog/index.tsx', but '--jsx' is not set.
import { CreateIosSigningCredentialsDialog } from '../CreateIosSigningCredentialsDialog';
// @ts-expect-error - TS6142 - Module '../../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../../../UI/HelpButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/Add'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Add.js' implicitly has an 'any' type.
import Add from '../../../UI/CustomSvgIcons/Add';
// @ts-expect-error - TS6142 - Module '../../../UI/Tabs' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Tabs.tsx', but '--jsx' is not set.
import { Tabs } from '../../../UI/Tabs';
// @ts-expect-error - TS6142 - Module './AppleCertificatesList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/SigningCredentials/SigningCredentialsDialog/AppleCertificatesList.tsx', but '--jsx' is not set.
import { AppleCertificatesList } from './AppleCertificatesList';
// @ts-expect-error - TS6142 - Module './AppleAuthKeysList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/SigningCredentials/SigningCredentialsDialog/AppleAuthKeysList.tsx', but '--jsx' is not set.
import { AppleAuthKeysList } from './AppleAuthKeysList';

type UseGetUserSigningCredentialsOutput = {
  signingCredentials: Array<SigningCredential> | null,
  onRefreshSigningCredentials: () => Promise<void>,
  error: Error | null
};

export const useGetUserSigningCredentials = (authenticatedUser: AuthenticatedUser): UseGetUserSigningCredentialsOutput => {
  const [
    signingCredentials,
    setSigningCredentials,
  ] = React.useState<Array<SigningCredential> | null>(null);
  const [error, setError] = React.useState<Error | null>(null);

  const userId = authenticatedUser.profile
    ? authenticatedUser.profile.id
    : null;

  const onRefreshSigningCredentials = React.useCallback(
    async () => {
      if (!userId) return;

      try {
        setError(null);
        const signingCredentials = await getUserSigningCredentials(
          authenticatedUser.getAuthorizationHeader,
          userId
        );
        setSigningCredentials(signingCredentials);
      } catch (error: any) {
        console.error('Unable to load signing credentials:', error);
        setError(error);
      }
    },
    [authenticatedUser.getAuthorizationHeader, userId]
  );

  React.useEffect(
    () => {
      onRefreshSigningCredentials();
    },
    [onRefreshSigningCredentials]
  );

  return {
    signingCredentials,
    onRefreshSigningCredentials,
    error,
  };
};

type Props = {
  signingCredentials: Array<SigningCredential> | null,
  authenticatedUser: AuthenticatedUser,
  error: Error | null,
  onRefreshSigningCredentials: () => Promise<void>,
  onClose: () => void
};

export const SigningCredentialsDialog = ({
  authenticatedUser,
  onClose,
  signingCredentials,
  error,
  onRefreshSigningCredentials,
}: Props) => {
  const [currentTab, setCurrentTab] = React.useState<string>('apple-certificate');
  const [
    createIosSigningCredentialsOpenWithTab,
    setCreateIosSigningCredentialsOpenWithTab,
  ] = React.useState<string | null | undefined>(null);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
      open
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>Signing Credentials</Trans>}
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
      secondaryActions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <HelpButton key="help" helpPagePath="/publishing/ios" />,
        signingCredentials && signingCredentials.length > 0 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <RaisedButton
            key="add-new"
            primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            icon={<Add />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Add new</Trans>}
            onClick={() =>
              setCreateIosSigningCredentialsOpenWithTab(currentTab)
            }
          />
        ) : null,
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
              label: <Trans>Apple Certificates & Profiles</Trans>,
            },
            {
              value: 'apple-auth-key',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label: <Trans>Auth Key (App Store upload)</Trans>,
            },
          ]}
        />
      }
      onRequestClose={onClose}
    >
      {currentTab === 'apple-certificate' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <AppleCertificatesList
          authenticatedUser={authenticatedUser}
          signingCredentials={signingCredentials}
          error={error}
          onRefreshSigningCredentials={onRefreshSigningCredentials}
          onAddNew={() => setCreateIosSigningCredentialsOpenWithTab(currentTab)}
        />
      )}
      {currentTab === 'apple-auth-key' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <AppleAuthKeysList
          authenticatedUser={authenticatedUser}
          signingCredentials={signingCredentials}
          error={error}
          onRefreshSigningCredentials={onRefreshSigningCredentials}
          onAddNew={() => setCreateIosSigningCredentialsOpenWithTab(currentTab)}
        />
      )}
      {createIosSigningCredentialsOpenWithTab && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <CreateIosSigningCredentialsDialog
          authenticatedUser={authenticatedUser}
          initialTab={createIosSigningCredentialsOpenWithTab}
          onClose={() => {
            setCreateIosSigningCredentialsOpenWithTab(null);
            onRefreshSigningCredentials();
          }}
        />
      )}
    </Dialog>
  );
};
