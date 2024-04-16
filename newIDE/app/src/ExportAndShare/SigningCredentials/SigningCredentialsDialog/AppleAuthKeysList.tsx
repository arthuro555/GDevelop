import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t, Trans } from '@lingui/macro';
import { AuthenticatedUser } from '../../../Profile/AuthenticatedUserContext';
import {
  SigningCredential,
  filterAppleAuthKeySigningCredentials,
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
// @ts-expect-error - TS6142 - Module '../../../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../../../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module '../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../../../UI/Grid';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/CircledInfo'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/CircledInfo.js' implicitly has an 'any' type.
import CircledInfo from '../../../UI/CustomSvgIcons/CircledInfo';

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

export const AppleAuthKeysList = ({
  signingCredentials,
  authenticatedUser,
  error,
  onRefreshSigningCredentials,
  onAddNew,
}: Props) => {
  const appleAuthKeySigningCredentials = filterAppleAuthKeySigningCredentials(
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
      ) : !appleAuthKeySigningCredentials ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <PlaceholderLoader />
      ) : !appleAuthKeySigningCredentials.length ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <EmptyPlaceholder
          title={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>
              Create your Auth Key to send your game to App Store Connect
            </Trans>
          }
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          actionLabel={<Trans>Add</Trans>}
          onAction={onAddNew}
          description={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>
              Declare your app on App Store Connect and then register a key so
              that your game can be automatically uploaded when built. It's
              perfect to try your game with testers on Apple TestFlight.
            </Trans>
          }
        />
      ) : (
        appleAuthKeySigningCredentials.map(signingCredential => {
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
                      label: i18n._(t`Remove this Auth Key`),
                      click: async () => {
                        const userId = authenticatedUser.profile
                          ? authenticatedUser.profile.id
                          : null;
                        if (!userId) {
                          return;
                        }

                        try {
                          await signingCredentialApi.deleteSigningCredential(
                            authenticatedUser.getAuthorizationHeader,
                            userId,
                            {
                              type: 'apple-auth-key',
                              appleApiKey: signingCredential.apiKey,
                            }
                          );
                          onRefreshSigningCredentials();
                        } catch (err: any) {
                          console.error('Unable to delete the auth key', err);
                        }
                      },
                    },
                  ]}
                />
              }
              disabled={!signingCredential.hasAuthKeyReady}
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
                    <Trans>API key: {signingCredential.apiKey}</Trans>
                  </Text>
                </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Line noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <CircledInfo style={styles.bulletIcon} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text size="body" allowSelection>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>API Issuer ID: {signingCredential.apiIssuer}</Trans>
                  </Text>
                </Line>
                {!signingCredential.hasAuthKeyReady && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <AlertMessage kind="error">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>
                      This Auth Key was not sent or is not ready to be used.
                    </Trans>
                  </AlertMessage>
                )}
              </ColumnStackLayout>
            </Card>
          );
        })
      )}
    </ColumnStackLayout>
  );
};
