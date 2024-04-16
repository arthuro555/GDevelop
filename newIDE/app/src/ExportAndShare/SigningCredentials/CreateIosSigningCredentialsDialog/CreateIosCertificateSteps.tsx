import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans, t } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, LineStackLayout } from '../../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../../UI/LeftLoader' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LeftLoader.tsx', but '--jsx' is not set.
import LeftLoader from '../../../UI/LeftLoader';
import { openBlobDownloadUrl } from '../../../Utils/BlobDownloadUrlHolder';
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
import useAlertDialog from '../../../UI/Alert/useAlertDialog';
import { AuthenticatedUser } from '../../../Profile/AuthenticatedUserContext';
import { signingCredentialApi } from '../../../Utils/GDevelopServices/Build';
// @ts-expect-error - TS6142 - Module '../../../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../../../UI/SemiControlledTextField';

export const getBase64FromFile = async (file: File) => {
  return new Promise((resolve: (result: Promise<string> | string) => void, reject: (error?: any) => void) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result !== 'string')
        throw new Error('Unexpected result when reading file.');

      const base64String = reader.result.split(',')[1];
      if (!base64String) {
        reject(new Error('Could not read base64 content from the file.'));
        return;
      }
      resolve(base64String);
    };
    reader.onerror = error: ProgressEvent => {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
};

const styles = {
  appleIcon: {
    width: 32,
    height: 32,
  },
} as const;

type Props = {
  authenticatedUser: AuthenticatedUser
};

export const CreateIosCertificateSteps = ({
  authenticatedUser,
}: Props) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
// @ts-expect-error - TS2339 - Property 'showConfirmation' does not exist on type 'void'.
  const { showConfirmation } = useAlertDialog();
  const userId = authenticatedUser.profile
    ? authenticatedUser.profile.id
    : null;

  const [commonName, setCommonName] = React.useState('');
  const [countryName, setCountryName] = React.useState('');
  const [certificateRequestUuid, setCertificateRequestUuid] = React.useState(
    ''
  );
  const [csrPem, setCsrPem] = React.useState('');
  const [
    isCertificateSigningRequestLoading,
    setIsCertificateSigningRequestLoading,
  ] = React.useState(false);
  const [
    certificateSigningRequestError,
    setCertificateSigningRequestError,
  ] = React.useState<Error | null | undefined>(null);

  const onCreateSigningRequest = React.useCallback(
    async () => {
      if (!userId) return;

      try {
        setIsCertificateSigningRequestLoading(true);
        setCertificateSigningRequestError(null);
        const {
          certificateRequestUuid,
          csrPem,
        } = await signingCredentialApi.createCertificateSigningRequest(
          authenticatedUser.getAuthorizationHeader,
          userId,
          {
            commonName: commonName || 'Unspecified',
            countryName: countryName || 'US',
          }
        );
        setCertificateRequestUuid(certificateRequestUuid);
        setCsrPem(csrPem);
      } catch (error: any) {
        console.error(
          'Error while creating certificate signing request:',
          error
        );
        setCertificateSigningRequestError(error);
      } finally {
        setIsCertificateSigningRequestLoading(false);
      }
    },
    [authenticatedUser.getAuthorizationHeader, userId, commonName, countryName]
  );

  const [wasCertificateGenerated, setWasCertificateGenerated] = React.useState(
    false
  );
  const [certificateError, setCertificateError] = React.useState<Error | null | undefined>(null);
  const [isCertificateLoading, setIsCertificateLoading] = React.useState(false);
  const [
    lastUploadedProvisioningProfileName,
    setLastUploadedProvisioningProfileName,
  ] = React.useState('');

  const [
    mobileProvisionError,
    setMobileProvisionError,
  ] = React.useState<Error | null | undefined>(null);
  const [
    isMobileProvisionLoading,
    setIsMobileProvisionLoading,
  ] = React.useState(false);

  const onUploadCertificate = React.useCallback(
    async (certificateFile: File) => {
      if (!userId) return;

      try {
        setWasCertificateGenerated(false);
        setIsCertificateLoading(true);

        const certificateAsBase64 = await getBase64FromFile(certificateFile);
        const {
          certificateSerial,
          certificateKind,
        } = await signingCredentialApi.uploadCertificate(
          authenticatedUser.getAuthorizationHeader,
          userId,
          {
            certificateAsBase64,
          }
        );
        if (certificateKind === 'unknown') {
          const answer = await showConfirmation({
            title: t`Unknown certificate type`,
            message: t`This certificate type is unknown and might not work when building the app. Are you sure you want to continue?`,
            level: 'warning',
            confirmButtonLabel: t`Continue`,
            dismissButtonLabel: t`Cancel`,
          });
          if (!answer) return;
        }
        await signingCredentialApi.createCertificateP12(
          authenticatedUser.getAuthorizationHeader,
          userId,
          {
            certificateSerial,
            certificateKind,
            certificateRequestUuid,
          }
        );

        setWasCertificateGenerated(true);
      } catch (err: any) {
        setCertificateError(err);
      } finally {
        setIsCertificateLoading(false);
      }
    },
    [
      authenticatedUser.getAuthorizationHeader,
      certificateRequestUuid,
      showConfirmation,
      userId,
    ]
  );

  const onUploadMobileProvision = React.useCallback(
    async (mobileProvisionFile: File) => {
      if (!userId) return;

      try {
        setLastUploadedProvisioningProfileName('');
        setIsMobileProvisionLoading(true);

        const mobileProvisionAsBase64 = await getBase64FromFile(
          mobileProvisionFile
        );
        const { name } = await signingCredentialApi.uploadMobileProvision(
          authenticatedUser.getAuthorizationHeader,
          userId,
          {
            mobileProvisionAsBase64,
          }
        );
        setLastUploadedProvisioningProfileName(name);
      } catch (err: any) {
        setMobileProvisionError(err);
      } finally {
        setIsMobileProvisionLoading(false);
      }
    },
    [authenticatedUser.getAuthorizationHeader, userId]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <AlertMessage
        kind="info"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        renderLeftIcon={() => <Apple style={styles.appleIcon} />}
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
          You need a Apple Developer account to create a certificate.
        </Trans>
      </AlertMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Trans>1) Create a Certificate Signing Request and a Certificate</Trans>
      </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <MarkdownText
        isStandaloneText
        allowParagraphs
        translatableSource={t`Create a certificate signing request that will be asked by Apple to generate a full certificate.`}
      />

{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <LineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SemiControlledTextField
          fullWidth
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          floatingLabelText={<Trans>Company name or full name</Trans>}
          value={commonName}
// @ts-expect-error - TS7006 - Parameter 'text' implicitly has an 'any' type.
          onChange={text => setCommonName(text)}
          maxLength={64}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SemiControlledTextField
          fullWidth
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          floatingLabelText={<Trans>Country name</Trans>}
          value={countryName}
// @ts-expect-error - TS7006 - Parameter 'text' implicitly has an 'any' type.
          onChange={text => setCountryName(text)}
          maxLength={64}
        />
      </LineStackLayout>

{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <LineStackLayout noMargin justifyContent="flex-end">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <LeftLoader isLoading={isCertificateSigningRequestLoading}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <RaisedButton
            primary={!certificateRequestUuid}
            disabled={isCertificateSigningRequestLoading}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Create a signing request</Trans>}
            onClick={onCreateSigningRequest}
          />
        </LeftLoader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <RaisedButton
          primary={!!certificateRequestUuid && !wasCertificateGenerated}
          disabled={!csrPem}
          onClick={() =>
            openBlobDownloadUrl(
              'data:text/plain;charset=utf-8,' + encodeURIComponent(csrPem),
              'request.csr'
            )
          }
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Download the request file</Trans>}
        />
      </LineStackLayout>

      {certificateSigningRequestError && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <AlertMessage kind="error">
          An error occured while generating the Certificate Signing Request.
        </AlertMessage>
      )}

{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Trans>2) Upload the Certificate generated by Apple</Trans>
      </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <MarkdownText
        isStandaloneText
        allowParagraphs
        translatableSource={t`Go to [Apple Developer Certificates list](https://developer.apple.com/account/resources/certificates/list) and click on the + button. Choose **Apple Distribution** (for app store) or **Apple Development** (for testing on device). When requested, upload the request file you downloaded.`}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <MarkdownText
        isStandaloneText
        allowParagraphs
        translatableSource={t`Download the certificate file (.cer) generated by Apple and upload it here. GDevelop will keep it securely stored.`}
      />

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
              disabled={!certificateRequestUuid || isCertificateLoading}
              onChange={event => {
// @ts-expect-error - TS2531 - Object is possibly 'null'.
                const file = event.currentTarget.files[0] || null;
                setCertificateError(null);
                if (file) onUploadCertificate(file);
              }}
            />
          </Column>
        </Line>
      </Paper>

      {certificateError && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <AlertMessage kind="error">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>An error occured while generating the certificate.</Trans>
        </AlertMessage>
      )}
      {wasCertificateGenerated && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <AlertMessage kind="valid">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            The certificate was properly generated. Don't forget to create and
            upload a provisioning profile associated to it.
          </Trans>
        </AlertMessage>
      )}

{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Trans>3) Upload one or more Mobile Provisioning Profiles</Trans>
      </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <MarkdownText
        isStandaloneText
        allowParagraphs
        translatableSource={t`Go to [Apple Developer Profiles list](https://developer.apple.com/account/resources/profiles/list) and click on the + button. Choose **App Store Connect** or **iOS App Development**. Then, choose *Xcode iOS Wildcard App ID*, then the certificate you created earlier. For development, you can choose [the devices you registered](https://developer.apple.com/help/account/register-devices/register-a-single-device/). Finish by downloading the generated file and upload it here so it can be stored securely by GDevelop.`}
      />

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
              disabled={isMobileProvisionLoading}
              onChange={event => {
// @ts-expect-error - TS2531 - Object is possibly 'null'.
                const file = event.currentTarget.files[0] || null;
                setMobileProvisionError(null);
                if (file) onUploadMobileProvision(file);
              }}
            />
          </Column>
        </Line>
      </Paper>

      {mobileProvisionError && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <AlertMessage kind="error">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            An error occured while storing the provisioning profile.
          </Trans>
        </AlertMessage>
      )}
      {lastUploadedProvisioningProfileName && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <AlertMessage kind="valid">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            The provisioning profile was properly stored (
            {lastUploadedProvisioningProfileName}). If you properly uploaded the
            certificate before, it can now be used.
          </Trans>
        </AlertMessage>
      )}
    </ColumnStackLayout>
  );
};
