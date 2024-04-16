import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans, t } from '@lingui/macro';
import { AuthenticatedUser } from '../../Profile/AuthenticatedUserContext';
import {
  TargetName,
  BuildSigningOptions,
  SigningCredential,
  AppleCertificateSigningCredential,
  AppleAuthKeySigningCredential,
  filterAppleCertificateSigningCredentials,
  filterAppleAuthKeySigningCredentials,
} from '../../Utils/GDevelopServices/Build';
// @ts-expect-error - TS6142 - Module '../../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../../UI/SelectField';
import {
  SigningCredentialsDialog,
  useGetUserSigningCredentials,
// @ts-expect-error - TS6142 - Module './SigningCredentialsDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/SigningCredentials/SigningCredentialsDialog/index.tsx', but '--jsx' is not set.
} from './SigningCredentialsDialog';
// @ts-expect-error - TS6142 - Module '../../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../../UI/SelectOption';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, LineStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';

const styles = {
  button: {
    flexShrink: 0,
  },
  raisedButton: {
    flexShrink: 0,
  },
} as const;

const filterSigningCredentialsForTarget = (
  signingCredentials: Array<SigningCredential> | null,
  targets: Array<TargetName>
) => {
  if (!signingCredentials) return null;

  return signingCredentials.filter(signingCredential => {
    if (signingCredential.type === 'apple-certificate') {
      if (
        !targets.includes('iosAppStore') &&
        !targets.includes('iosDevelopment')
      ) {
        // Not an iOS build: Apple certificates are not usable.
        return false;
      }

      if (
        signingCredential.kind === 'development' &&
        !targets.includes('iosDevelopment')
      ) {
        // Not an iOS development build: Apple development certificates are not usable.
        return false;
      }
      if (
        signingCredential.kind === 'distribution' &&
        !targets.includes('iosAppStore')
      ) {
        // Not an iOS distribution build: Apple distribution certificates are not usable.
        return false;
      }

      return true;
    }

    if (signingCredential.type === 'apple-auth-key') {
      // Apple Auth Keys are only for distribution on App Store Connect.
      return targets.includes('iosAppStore');
    }

    return false;
  });
};

const formatBuildSigningOptionsForMobileProvision = (
  buildSigningOptions: BuildSigningOptions | null,
  signingCredentials: Array<SigningCredential> | null,
  value: string,
): BuildSigningOptions | null => {
  const appleCertificateSigningCredentials = filterAppleCertificateSigningCredentials(
    signingCredentials
  );
  if (!appleCertificateSigningCredentials) return buildSigningOptions;

  for (const signingCredential of appleCertificateSigningCredentials) {
    for (const provisioningProfile of signingCredential.provisioningProfiles) {
      if (provisioningProfile.uuid === value) {
        return {
          ...buildSigningOptions,
          certificateSerial: signingCredential.certificateSerial,
          mobileProvisionUuid: provisioningProfile.uuid,
        };
      }
    }
  }

  return buildSigningOptions;
};

const isEquivalentBuildSigningOptions = (
  buildSigningOptions1: BuildSigningOptions | null,
  buildSigningOptions2: BuildSigningOptions | null
) => {
  return (
    JSON.stringify(buildSigningOptions1) ===
    JSON.stringify(buildSigningOptions2)
  );
};

const formatBuildSigningOptionsForAuthKey = (
  buildSigningOptions: BuildSigningOptions | null,
  targets: Array<TargetName>,
  apiKey: string | null,
): BuildSigningOptions | null => {
  if (!buildSigningOptions) return buildSigningOptions;

  if (
    // No API key set: remove it.
    !apiKey ||
    // Not signing for the app store, so no deployment of App Store Connect (no Auth Key).
    (!targets.includes('iosAppStore') && buildSigningOptions.authKeyApiKey)
  ) {
    const {
      authKeyApiKey,
      ...buildSigningOptionsWithoutApiKey
    } = buildSigningOptions;
    return buildSigningOptionsWithoutApiKey;
  }

  return {
    ...buildSigningOptions,
    authKeyApiKey: apiKey,
  };
};

const isBuildSigningOptionsMobileProvisionValid = (
  signingCredentials: Array<AppleCertificateSigningCredential>,
  buildSigningOptions: BuildSigningOptions
) => {
  for (const signingCredential of signingCredentials) {
    if (
      signingCredential.certificateSerial !==
      buildSigningOptions.certificateSerial
    )
      continue;

    for (const provisioningProfile of signingCredential.provisioningProfiles) {
      if (
        provisioningProfile.uuid === buildSigningOptions.mobileProvisionUuid
      ) {
        return true;
      }
    }
  }

  return false;
};

const isBuildSigningOptionsAuthKeyValid = (
  signingCredentials: Array<AppleAuthKeySigningCredential>,
  targets: Array<TargetName>,
  buildSigningOptions: BuildSigningOptions
) => {
  // If not deploying to the app store, having an auth key is invalid (and so
  // will be removed).
  if (!targets.includes('iosAppStore') && buildSigningOptions.authKeyApiKey)
    return false;

  for (const signingCredential of signingCredentials) {
    if (signingCredential.apiKey === buildSigningOptions.authKeyApiKey)
      return true;
  }

  return false;
};

const getDefaultOrValidBuildSigningOptionsFor = (
  buildSigningOptions: BuildSigningOptions | null,
  signingCredentials: Array<SigningCredential> | null,
  targets: Array<TargetName>,
): BuildSigningOptions | null => {
  const appleCertificateSigningCredentials = filterAppleCertificateSigningCredentials(
    signingCredentials
  );
  const appleAuthKeySigningCredentials = filterAppleAuthKeySigningCredentials(
    signingCredentials
  );
  if (!appleCertificateSigningCredentials) {
    // No signing credentials yet (which means they can be loading),
    // don't touch the current build signing options.
    return buildSigningOptions;
  }

  if (!appleCertificateSigningCredentials.length) {
    // No signing credentials at all, so no valid build options can be set.
    return null;
  }

  let newBuildSigningOptions: BuildSigningOptions | null = buildSigningOptions;
  if (
    !newBuildSigningOptions ||
    !isBuildSigningOptionsMobileProvisionValid(
      appleCertificateSigningCredentials,
      newBuildSigningOptions
    )
  ) {
    // If there is no choice made, or the choice is not valid, choose the first credentials
    // instead.
    newBuildSigningOptions = formatBuildSigningOptionsForMobileProvision(
      newBuildSigningOptions,
      signingCredentials,
      appleCertificateSigningCredentials[0].provisioningProfiles[0]
        ? appleCertificateSigningCredentials[0].provisioningProfiles[0].uuid
        : ''
    );
  }

  if (
    appleAuthKeySigningCredentials &&
    newBuildSigningOptions &&
    !isBuildSigningOptionsAuthKeyValid(
      appleAuthKeySigningCredentials,
      targets,
      newBuildSigningOptions
    )
  ) {
    // Same for auth key:
    // If the choice is not valid, choose the first auth key instead.
    newBuildSigningOptions = formatBuildSigningOptionsForAuthKey(
      newBuildSigningOptions,
      targets,
      appleAuthKeySigningCredentials[0]
        ? appleAuthKeySigningCredentials[0].apiKey
        : null
    );
  }

  return newBuildSigningOptions;
};

type Props = {
  targets: Array<TargetName>,
  authenticatedUser: AuthenticatedUser,
  buildSigningOptions: BuildSigningOptions | null,
  onSelectBuildSigningOptions: (arg1: BuildSigningOptions | null) => void,
  disabled?: boolean
};

export const IosSigningCredentialsSelector = ({
  targets,
  authenticatedUser,
  buildSigningOptions,
  onSelectBuildSigningOptions,
  disabled,
}: Props) => {
  const {
    signingCredentials,
    error,
    onRefreshSigningCredentials,
  } = useGetUserSigningCredentials(authenticatedUser);
  const allSigningCredentialsForTarget = filterSigningCredentialsForTarget(
    signingCredentials,
    targets
  );
  const appleCertificateSigningCredentials = filterAppleCertificateSigningCredentials(
    allSigningCredentialsForTarget
  );
  const appleAuthKeySigningCredentials = filterAppleAuthKeySigningCredentials(
    allSigningCredentialsForTarget
  );
  const [
    isSigningCredentialsDialogOpen,
    setIsSigningCredentialsDialogOpen,
  ] = React.useState(false);

  React.useEffect(
    () => {
      // Override the selection if it's not valid or if none was made.
      const newBuildSigningOptions = getDefaultOrValidBuildSigningOptionsFor(
        buildSigningOptions,
        allSigningCredentialsForTarget,
        targets
      );
      if (
        !isEquivalentBuildSigningOptions(
          newBuildSigningOptions,
          buildSigningOptions
        )
      ) {
        onSelectBuildSigningOptions(newBuildSigningOptions);
      }
    },
    [
      buildSigningOptions,
      onSelectBuildSigningOptions,
      allSigningCredentialsForTarget,
      targets,
    ]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <LineStackLayout noMargin expand alignItems="end">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SelectField
          fullWidth
          floatingLabelText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>Certificate and provisioning profile</Trans>
          }
          value={
            buildSigningOptions
              ? buildSigningOptions.mobileProvisionUuid || ''
              : ''
          }
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
          onChange={(e, i, value: string) => {
            const newBuildSigningOptions = formatBuildSigningOptionsForMobileProvision(
              buildSigningOptions,
              allSigningCredentialsForTarget,
              value
            );
            if (newBuildSigningOptions)
              onSelectBuildSigningOptions(newBuildSigningOptions);
          }}
          translatableHintText={
            appleCertificateSigningCredentials
              ? appleCertificateSigningCredentials.length > 0
                ? t`Choose a provisioning profile`
                : t`Add a certificate/profile first`
              : t`Loading...`
          }
          disabled={disabled}
        >
          {appleCertificateSigningCredentials ? (
            appleCertificateSigningCredentials.flatMap(signingCredential => {
              return signingCredential.provisioningProfiles.map(
                provisioningProfile => {
                  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <SelectOption
                      key={provisioningProfile.uuid}
                      disabled={!signingCredential.hasCertificateReady}
                      label={`${provisioningProfile.name} (${
                        signingCredential.name
                      })`}
                      value={provisioningProfile.uuid}
                    />
                  );
                }
              );
            })
          ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <SelectOption
              disabled={true}
              label={error ? t`Error loading certificates.` : t`Loading...`}
              value={''}
            />
          )}
        </SelectField>
        {appleCertificateSigningCredentials &&
        appleCertificateSigningCredentials.length > 0 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <FlatButton
            style={styles.button}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Add or edit</Trans>}
            onClick={() => setIsSigningCredentialsDialogOpen(true)}
            disabled={disabled}
          />
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <RaisedButton
            primary
            style={styles.raisedButton}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Add new</Trans>}
            onClick={() => setIsSigningCredentialsDialogOpen(true)}
            disabled={disabled}
          />
        )}
        {isSigningCredentialsDialogOpen && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <SigningCredentialsDialog
            signingCredentials={signingCredentials}
            error={error}
            onRefreshSigningCredentials={onRefreshSigningCredentials}
            onClose={() => {
              setIsSigningCredentialsDialogOpen(false);
              onRefreshSigningCredentials();
            }}
            authenticatedUser={authenticatedUser}
          />
        )}
      </LineStackLayout>
      {targets.includes('iosAppStore') && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <LineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SelectField
            fullWidth
            floatingLabelText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Auth Key for upload to App Store Connect</Trans>
            }
            value={
              buildSigningOptions ? buildSigningOptions.authKeyApiKey || '' : ''
            }
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
            onChange={(e, i, value: string) => {
              const newBuildSigningOptions = formatBuildSigningOptionsForAuthKey(
                buildSigningOptions,
                targets,
                value
              );
              if (newBuildSigningOptions)
                onSelectBuildSigningOptions(newBuildSigningOptions);
            }}
            translatableHintText={
              appleCertificateSigningCredentials
                ? appleCertificateSigningCredentials.length > 0
                  ? t`Choose a Auth Key`
                  : t`Add an Auth Key first`
                : t`Loading...`
            }
            disabled={disabled}
          >
            {appleAuthKeySigningCredentials ? (
              appleAuthKeySigningCredentials.flatMap(signingCredential => {
                return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <SelectOption
                    key={signingCredential.apiKey}
                    disabled={!signingCredential.hasAuthKeyReady}
                    label={`${signingCredential.name} (${
                      signingCredential.apiKey
                    })`}
                    value={signingCredential.apiKey}
                  />
                );
              })
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <SelectOption
                disabled={true}
                label={error ? t`Error loading Auth Keys.` : t`Loading...`}
                value={''}
              />
            )}
          </SelectField>
        </LineStackLayout>
      )}
    </ColumnStackLayout>
  );
};
