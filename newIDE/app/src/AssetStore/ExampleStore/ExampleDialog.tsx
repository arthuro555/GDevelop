// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
import {
  ExampleShortHeader,
  Example,
  getExample,
} from '../../Utils/GDevelopServices/Example';
import { isCompatibleWithAsset } from '../../Utils/GDevelopServices/Asset';
// @ts-expect-error - TS6142 - Module '../../UI/LeftLoader' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LeftLoader.tsx', but '--jsx' is not set.
import LeftLoader from '../../UI/LeftLoader';
// @ts-expect-error - TS6142 - Module '../../UI/PlaceholderError' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderError.tsx', but '--jsx' is not set.
import PlaceholderError from '../../UI/PlaceholderError';
// @ts-expect-error - TS6142 - Module '../../UI/MarkdownText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/MarkdownText.tsx', but '--jsx' is not set.
import { MarkdownText } from '../../UI/MarkdownText';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../../UI/AlertMessage';
import { getIDEVersion } from '../../Version';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
import Divider from '@material-ui/core/Divider';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, ResponsiveLineStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module './ExampleThumbnailOrIcon' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ExampleStore/ExampleThumbnailOrIcon.tsx', but '--jsx' is not set.
import { ExampleThumbnailOrIcon } from './ExampleThumbnailOrIcon';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButtonWithSplitMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButtonWithSplitMenu.tsx', but '--jsx' is not set.
import RaisedButtonWithSplitMenu from '../../UI/RaisedButtonWithSplitMenu';
import Window from '../../Utils/Window';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../Utils/OptionalRequire'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/OptionalRequire.js' implicitly has an 'any' type.
import optionalRequire from '../../Utils/OptionalRequire';
// @ts-expect-error - TS6142 - Module '../../UI/User/UserPublicProfileChip' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/User/UserPublicProfileChip.tsx', but '--jsx' is not set.
import { UserPublicProfileChip } from '../../UI/User/UserPublicProfileChip';
// @ts-expect-error - TS6142 - Module '../../UI/ExampleDifficultyChip' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ExampleDifficultyChip.tsx', but '--jsx' is not set.
import { ExampleDifficultyChip } from '../../UI/ExampleDifficultyChip';
// @ts-expect-error - TS6142 - Module '../../UI/ExampleSizeChip' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ExampleSizeChip.tsx', but '--jsx' is not set.
import { ExampleSizeChip } from '../../UI/ExampleSizeChip';
const isDev = Window.isDev();

const electron = optionalRequire('electron');

type Props = {
  exampleShortHeader: ExampleShortHeader,
  isOpening: boolean,
  onClose: () => void,
  onOpen: () => void
};

export const openExampleInWebApp = (example: Example) => {
  Window.openExternalURL(
    `${
      isDev ? 'http://localhost:3000' : 'https://editor.gdevelop.io'
    }/?project=${example.projectFileUrl}`
  );
};

export function ExampleDialog({
  isOpening,
  exampleShortHeader,
  onClose,
  onOpen,
}: Props) {
  const [error, setError] = React.useState<Error | null | undefined>(null);
  const [example, setExample] = React.useState<Example | null | undefined>(null);

  const loadExample = React.useCallback(
    async () => {
      setError(null);
      try {
        const example = await getExample(exampleShortHeader);
        setExample(example);
      } catch (error: any) {
        setError(error);
      }
    },
    [exampleShortHeader]
  );

  React.useEffect(
    () => {
      loadExample();
    },
    [loadExample]
  );

  const isCompatible = isCompatibleWithAsset(
    getIDEVersion(),
    exampleShortHeader
  );
  const hasIcon = exampleShortHeader.previewImageUrls.length > 0;

  const canOpenExample = !isOpening && isCompatible;
  const onOpenExample = React.useCallback(
    () => {
      if (canOpenExample) onOpen();
    },
    [onOpen, canOpenExample]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
      title={exampleShortHeader.name}
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
          key="close"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Back</Trans>}
          primary={false}
          onClick={onClose}
          disabled={isOpening}
        />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <LeftLoader isLoading={isOpening} key="open">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <RaisedButtonWithSplitMenu
            label={
              !isCompatible ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>Not compatible</Trans>
              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>Open</Trans>
              )
            }
            primary
            onClick={onOpenExample}
            disabled={!canOpenExample}
// @ts-expect-error - TS7006 - Parameter 'i18n' implicitly has an 'any' type.
            buildMenuTemplate={i18n => [
              {
                label: electron
                  ? i18n._(t`Open in the web-app`)
                  : i18n._(t`Open in a new tab`),
                disabled: !example,
                click: () => {
                  if (example) openExampleInWebApp(example);
                },
              },
            ]}
          />
        </LeftLoader>,
      ]}
      open
      cannotBeDismissed={isOpening}
      onRequestClose={onClose}
      onApply={onOpenExample}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ColumnStackLayout expand noMargin>
        {!isCompatible && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <AlertMessage kind="error">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              Unfortunately, this example requires a newer version of GDevelop
              to work. Update GDevelop to be able to open this example.
            </Trans>
          </AlertMessage>
        )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResponsiveLineStackLayout alignItems="center" noMargin>
          {hasIcon ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <ExampleThumbnailOrIcon exampleShortHeader={exampleShortHeader} />
          ) : null}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column noMargin>
            {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <div style={{ flexWrap: 'wrap' }}>
                  {exampleShortHeader.difficultyLevel && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <ExampleDifficultyChip
                      difficultyLevel={exampleShortHeader.difficultyLevel}
                    />
                  )}
                  {exampleShortHeader.codeSizeLevel && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <ExampleSizeChip
                      codeSizeLevel={exampleShortHeader.codeSizeLevel}
                    />
                  )}
                  {exampleShortHeader.authors &&
                    exampleShortHeader.authors.map(author => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <UserPublicProfileChip
                        user={author}
                        key={author.id}
                        isClickable
                      />
                    ))}
                </div>
              </Line>
            }
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text noMargin>{exampleShortHeader.shortDescription}</Text>
          </Column>
        </ResponsiveLineStackLayout>

        {example && example.description && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Divider />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text size="body" displayInlineAsSpan>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <MarkdownText source={example.description} />
            </Text>
          </Column>
        )}
        {!example && error && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <PlaceholderError onRetry={loadExample}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              Can't load the example. Verify your internet connection or try
              again later.
            </Trans>
          </PlaceholderError>
        )}
      </ColumnStackLayout>
    </Dialog>
  );
}
