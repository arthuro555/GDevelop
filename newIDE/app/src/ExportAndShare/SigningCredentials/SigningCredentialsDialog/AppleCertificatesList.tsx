import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t, Trans } from '@lingui/macro';
import { AuthenticatedUser } from '../../../Profile/AuthenticatedUserContext';
import {
  SigningCredential,
  filterAppleCertificateSigningCredentials,
  signingCredentialApi,
} from '../../../Utils/GDevelopServices/Build';
// @ts-expect-error - TS6142 - Module '../../../UI/PlaceholderError' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderError.tsx', but '--jsx' is not set.
import PlaceholderError from '../../../UI/PlaceholderError';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../../../UI/PlaceholderLoader';
// @ts-expect-error - TS6142 - Module '../../../UI/EmptyPlaceholder' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyPlaceholder.tsx', but '--jsx' is not set.
import { EmptyPlaceholder } from '../../../UI/EmptyPlaceholder';
// @ts-expect-error - TS6142 - Module '../../../UI/Card' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Card.tsx', but '--jsx' is not set.
import Card from '../../../UI/Card';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/ThreeDotsMenu'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ThreeDotsMenu.js' implicitly has an 'any' type.
import ThreeDotsMenu from '../../../UI/CustomSvgIcons/ThreeDotsMenu';
// @ts-expect-error - TS6142 - Module '../../../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../../../UI/IconButton';
// @ts-expect-error - TS6142 - Module '../../../UI/Menu/ElementWithMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Menu/ElementWithMenu.tsx', but '--jsx' is not set.
import ElementWithMenu from '../../../UI/Menu/ElementWithMenu';
// @ts-expect-error - TS6142 - Module '../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../../UI/RaisedButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/Add'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Add.js' implicitly has an 'any' type.
import Add from '../../../UI/CustomSvgIcons/Add';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/File'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/File.js' implicitly has an 'any' type.
import File from '../../../UI/CustomSvgIcons/File';
// @ts-expect-error - TS6142 - Module '../../../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../../../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module '../../../UI/List' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/List.tsx', but '--jsx' is not set.
import { List, ListItem } from '../../../UI/List';
// @ts-expect-error - TS6142 - Module '../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../../../UI/Grid';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/CheckCircle'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/CheckCircle.js' implicitly has an 'any' type.
import CheckCircle from '../../../UI/CustomSvgIcons/CheckCircle';
import GDevelopThemeContext from '../../../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/CircledInfo'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/CircledInfo.js' implicitly has an 'any' type.
import CircledInfo from '../../../UI/CustomSvgIcons/CircledInfo';
import useAlertDialog from '../../../UI/Alert/useAlertDialog';

type Props = {
  signingCredentials: Array<SigningCredential> | null,
  authenticatedUser: AuthenticatedUser,
  error: Error | null,
  onRefreshSigningCredentials: () => Promise<void>,
  onAddNew: () => void
};

const styles = {
  bulletIcon: { width: 20, height: 20, marginRight: 10 },
} as const;

export const AppleCertificatesList = ({
  signingCredentials,
  authenticatedUser,
  error,
  onRefreshSigningCredentials,
  onAddNew,
}: Props) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
// @ts-expect-error - TS2339 - Property 'showConfirmation' does not exist on type 'void'.
  const { showConfirmation } = useAlertDialog();

  const appleCertificateSigningCredentials = filterAppleCertificateSigningCredentials(
    signingCredentials
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ColumnStackLayout noMargin>
      {error ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <PlaceholderError onRetry={onRefreshSigningCredentials}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>An error happened while loading the certificates.</Trans>
        </PlaceholderError>
      ) : !appleCertificateSigningCredentials ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <PlaceholderLoader />
      ) : !appleCertificateSigningCredentials.length ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <EmptyPlaceholder
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          title={<Trans>Create your Apple certificate for iOS</Trans>}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          actionLabel={<Trans>Add</Trans>}
          onAction={onAddNew}
          description={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>
              Create your certificate and "provisioning profile" thanks to your
              Apple Developer account. We'll guide you with a step by step
              process.
            </Trans>
          }
        />
      ) : (
        appleCertificateSigningCredentials.map(signingCredential => {
          return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Card
              background="medium"
              header={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Text size="block-title" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>{signingCredential.name}</Trans>
                </Text>
              }
              cardCornerAction={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <ElementWithMenu
                  element={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <IconButton size="small">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <ThreeDotsMenu />
                    </IconButton>
                  }
                  buildMenuTemplate={(i18n: I18nType) => [
                    {
                      label: i18n._(t`Remove this certificate`),
                      click: async () => {
                        if (signingCredential.hasCertificateReady) {
                          const answer = await showConfirmation({
                            level: 'warning',
                            title: t`Remove this certificate?`,
                            message: t`Once removed, you'll need to generate a new certificate. Provisioning profiles will also be removed.`,
                            confirmButtonLabel: t`Remove certificate`,
                          });
                          if (!answer) return;
                        }

                        try {
                          const userId = authenticatedUser.profile
                            ? authenticatedUser.profile.id
                            : null;
                          if (!userId) {
                            return;
                          }

                          await signingCredentialApi.deleteSigningCredential(
                            authenticatedUser.getAuthorizationHeader,
                            userId,
                            {
                              type: 'apple-certificate',
                              certificateSerial:
                                signingCredential.certificateSerial,
                            }
                          );
                          onRefreshSigningCredentials();
                        } catch (err: any) {
                          console.error(
                            'Unable to delete the certificate',
                            err
                          );
                        }
                      },
                    },
                  ]}
                />
              }
              disabled={!signingCredential.hasCertificateReady}
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Line noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <CircledInfo style={styles.bulletIcon} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text size="body" allowSelection>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>Serial: {signingCredential.certificateSerial}</Trans>
                  </Text>
                </Line>
                {!signingCredential.hasCertificateReady ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <AlertMessage kind="error">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>
                      This certificate was not sent or is not ready to be used.
                    </Trans>
                  </AlertMessage>
                ) : signingCredential.kind === 'unknown' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <AlertMessage kind="warning">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>
                      This certificate has an unknown type and is probably
                      unable to be used by GDevelop.
                    </Trans>
                  </AlertMessage>
                ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Line noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <CheckCircle
                      style={{
                        ...styles.bulletIcon,
                        color: gdevelopTheme.message.valid,
                      }}
                    />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Text size="body">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Trans>Certificate type: {signingCredential.kind}</Trans>
                    </Text>
                  </Line>
                )}
                {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Text size="sub-title" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>Provisioning profiles</Trans>
                  </Text>
                }
                {!signingCredential.provisioningProfiles.length ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <AlertMessage
                    kind="warning"
                    renderRightButton={() => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <RaisedButton
                        key="add-new"
                        primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        icon={<Add />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        label={<Trans>Add new</Trans>}
                        onClick={onAddNew}
                      />
                    )}
                  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>
                      There are no provisioning profile created for this
                      certificate. Create one in the Apple Developer interface
                      and add it here.
                    </Trans>
                  </AlertMessage>
                ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <List>
                    {signingCredential.provisioningProfiles.map(
                      provisioningProfile => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <ListItem
                          primaryText={provisioningProfile.name}
                          secondaryText={provisioningProfile.uuid}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          leftIcon={<File />}
                        />
                      )
                    )}
                  </List>
                )}
              </ColumnStackLayout>
            </Card>
          );
        })
      )}
    </ColumnStackLayout>
  );
};
