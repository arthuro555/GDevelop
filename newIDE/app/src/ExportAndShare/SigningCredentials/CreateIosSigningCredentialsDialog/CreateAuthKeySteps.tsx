import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans, t } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, LineStackLayout } from '../../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../../../UI/Paper';
// @ts-expect-error - TS6142 - Module '../../../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../../../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module '../../../UI/MarkdownText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/MarkdownText.tsx', but '--jsx' is not set.
import { MarkdownText } from '../../../UI/MarkdownText';
// @ts-expect-error - TS6142 - Module '../../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../../UI/FlatButton';
import Window from '../../../Utils/Window';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/Apple'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Apple.js' implicitly has an 'any' type.
import Apple from '../../../UI/CustomSvgIcons/Apple';
import GDevelopThemeContext from '../../../UI/Theme/GDevelopThemeContext';
import { AuthenticatedUser } from '../../../Profile/AuthenticatedUserContext';
import { signingCredentialApi } from '../../../Utils/GDevelopServices/Build';
// @ts-expect-error - TS6142 - Module '../../../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../../../UI/SemiControlledTextField';
// @ts-expect-error - TS6142 - Module '../../../UI/LeftLoader' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LeftLoader.tsx', but '--jsx' is not set.
import LeftLoader from '../../../UI/LeftLoader';
// @ts-expect-error - TS6142 - Module '../../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module './CreateIosCertificateSteps' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/SigningCredentials/CreateIosSigningCredentialsDialog/CreateIosCertificateSteps.tsx', but '--jsx' is not set.
import { getBase64FromFile } from './CreateIosCertificateSteps';

type Props = {
  authenticatedUser: AuthenticatedUser
};

export const CreateAuthKeySteps = ({
  authenticatedUser,
}: Props) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const userId = authenticatedUser.profile
    ? authenticatedUser.profile.id
    : null;

  const [authKeyFile, setAuthKeyFile] = React.useState<File | null | undefined>(null);
  const [name, setName] = React.useState('');
  const [apiKey, setApiKey] = React.useState('');
  const [apiIssuer, setApiIssuer] = React.useState('');

  const [lastUploadedApiKey, setLastUploadedApiKey] = React.useState<string | null | undefined>(null);
  const [isAuthKeyLoading, setIsAuthKeyLoading] = React.useState(false);
  const [authKeyError, setAuthKeyError] = React.useState<Error | null | undefined>(null);

  const onUploadAuthKey = React.useCallback(
    async () => {
      if (!userId || !authKeyFile) return;

      try {
        setIsAuthKeyLoading(true);
        setLastUploadedApiKey(null);
        setAuthKeyError(null);
        const appleAuthKeyP8AsBase64 = await getBase64FromFile(authKeyFile);
        await signingCredentialApi.uploadAuthKey(
          authenticatedUser.getAuthorizationHeader,
          userId,
          {
            name,
            appleAuthKeyP8AsBase64,
            appleApiKey: apiKey,
            appleApiIssuer: apiIssuer,
          }
        );
        setLastUploadedApiKey(apiKey);
      } catch (err: any) {
        setAuthKeyError(err);
      } finally {
        setIsAuthKeyLoading(false);
      }
    },
    [
      apiIssuer,
      apiKey,
      authKeyFile,
      name,
      authenticatedUser.getAuthorizationHeader,
      userId,
    ]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <AlertMessage
        kind="info"
        renderLeftIcon={() => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Apple
            style={{
              width: 32,
              height: 32,
            }}
          />
        )}
        renderRightButton={() => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Open Apple Developer</Trans>}
            onClick={() =>
              Window.openExternalURL('https://developer.apple.com/account')
            }
          />
        )}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Trans>
          You need a Apple Developer account to create an API key that will
          automatically publish your app.
        </Trans>
      </AlertMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <MarkdownText
        isStandaloneText
        allowParagraphs
        translatableSource={t`Create an API key on the [App Store Connect API page](https://appstoreconnect.apple.com/access/integrations/api). Give it a name and **administrator** rights. Download the "Auth Key" file and upload it here along with the required information you can find on the page.`}
      />

{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SemiControlledTextField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        floatingLabelText={<Trans>Name (optional)</Trans>}
        value={name}
        onChange={setName}
        fullWidth
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <LineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SemiControlledTextField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          floatingLabelText={<Trans>API key given by Apple</Trans>}
          hintText="XXXXXXXXXX"
          value={apiKey}
          onChange={setApiKey}
          fullWidth
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SemiControlledTextField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          floatingLabelText={<Trans>API Issuer given by Apple</Trans>}
          hintText="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
          value={apiIssuer}
          onChange={setApiIssuer}
          fullWidth
        />
      </LineStackLayout>
      {/* // TODO: factor in a UI component ? */}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Paper variant="outlined" background="medium">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <input
// @ts-expect-error - TS2322 - Type 'string[]' is not assignable to type 'string'.
              accept={['*/*']}
              style={{
                color: gdevelopTheme.text.color.primary,
              }}
              multiple={false}
              type="file"
              disabled={!apiKey || !apiIssuer || isAuthKeyLoading}
              onChange={event => {
// @ts-expect-error - TS2531 - Object is possibly 'null'.
                setAuthKeyFile(event.currentTarget.files[0] || null);
              }}
            />
          </Column>
        </Line>
      </Paper>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line noMargin justifyContent="flex-end">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <LeftLoader isLoading={isAuthKeyLoading}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <RaisedButton
            primary
            disabled={isAuthKeyLoading || !authKeyFile || !apiIssuer || !apiKey}
            onClick={() => {
              onUploadAuthKey();
            }}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Send the Auth Key</Trans>}
          />
        </LeftLoader>
      </Line>

      {authKeyError && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <AlertMessage kind="error">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>An error occured while storing the auth key.</Trans>
        </AlertMessage>
      )}
      {lastUploadedApiKey && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <AlertMessage kind="valid">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            The auth key {lastUploadedApiKey} was properly stored. It can now be
            used to automatically upload your app to the app store - verify
            you've declared an app for it.
          </Trans>
        </AlertMessage>
      )}
    </ColumnStackLayout>
  );
};
