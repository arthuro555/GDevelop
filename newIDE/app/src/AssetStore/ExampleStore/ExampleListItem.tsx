// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
import * as React from 'react';
import {
  ExampleShortHeader,
  getExample,
} from '../../Utils/GDevelopServices/Example';
import { isCompatibleWithAsset } from '../../Utils/GDevelopServices/Asset';
import ButtonBase from '@material-ui/core/ButtonBase';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButtonWithSplitMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButtonWithSplitMenu.tsx', but '--jsx' is not set.
import FlatButtonWithSplitMenu from '../../UI/FlatButtonWithSplitMenu';
import { getIDEVersion } from '../../Version';
// @ts-expect-error - TS6142 - Module './ExampleThumbnailOrIcon' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ExampleStore/ExampleThumbnailOrIcon.tsx', but '--jsx' is not set.
import { ExampleThumbnailOrIcon } from './ExampleThumbnailOrIcon';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../Utils/OptionalRequire'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/OptionalRequire.js' implicitly has an 'any' type.
import optionalRequire from '../../Utils/OptionalRequire';
// @ts-expect-error - TS6142 - Module './ExampleDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ExampleStore/ExampleDialog.tsx', but '--jsx' is not set.
import { openExampleInWebApp } from './ExampleDialog';
// @ts-expect-error - TS6142 - Module '../../UI/User/UserPublicProfileChip' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/User/UserPublicProfileChip.tsx', but '--jsx' is not set.
import { UserPublicProfileChip } from '../../UI/User/UserPublicProfileChip';
// @ts-expect-error - TS6142 - Module '../../UI/ExampleSizeChip' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ExampleSizeChip.tsx', but '--jsx' is not set.
import { ExampleSizeChip } from '../../UI/ExampleSizeChip';
// @ts-expect-error - TS6142 - Module '../../UI/ExampleDifficultyChip' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ExampleDifficultyChip.tsx', but '--jsx' is not set.
import { ExampleDifficultyChip } from '../../UI/ExampleDifficultyChip';
// @ts-expect-error - TS6142 - Module '../../UI/Search/HighlightedText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Search/HighlightedText.tsx', but '--jsx' is not set.
import HighlightedText from '../../UI/Search/HighlightedText';
import { SearchMatch } from '../../UI/Search/UseSearchStructuredItem';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ResponsiveLineStackLayout } from '../../UI/Layout';
import useAlertDialog from '../../UI/Alert/useAlertDialog';

const electron = optionalRequire('electron');

const styles = {
  container: {
    display: 'flex',
    overflow: 'hidden',
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 8,
  },
  button: {
    alignItems: 'flex-start',
    textAlign: 'left',
    flex: 1,
  },
} as const;

type Props = {
  exampleShortHeader: ExampleShortHeader,
  matches: Array<SearchMatch> | null | undefined,
  isOpening: boolean,
  onChoose: () => void,
  onOpen: () => void,
  onHeightComputed: (arg1: number) => void
};

const ExampleListItem = ({
  exampleShortHeader,
  matches,
  isOpening,
  onChoose,
  onOpen,
  onHeightComputed,
}: Props) => {
// @ts-expect-error - TS2339 - Property 'showAlert' does not exist on type 'void'.
  const { showAlert } = useAlertDialog();
  // Report the height of the item once it's known.
  const containerRef = React.useRef<HTMLDivElement | null | undefined>(null);
  React.useLayoutEffect(() => {
    if (containerRef.current)
      onHeightComputed(containerRef.current.getBoundingClientRect().height);
  });

  const isCompatible = isCompatibleWithAsset(
    getIDEVersion(),
    exampleShortHeader
  );

  const fetchAndOpenExampleInWebApp = React.useCallback(
    async (i18n: I18nType) => {
      try {
        const example = await getExample(exampleShortHeader);
        openExampleInWebApp(example);
      } catch (error: any) {
        await showAlert({
          title: t`Unable to fetch the example.`,
          message: t`Verify your internet connection or try again later.`,
        });
      }
    },
    [exampleShortHeader, showAlert]
  );

  const renderExampleField = (field: 'shortDescription' | 'name') => {
    const originalField = exampleShortHeader[field];

    if (!matches) return originalField;
    const nameMatches = matches.filter(match => match.key === field);
    if (nameMatches.length === 0) return originalField;

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <HighlightedText
        text={originalField}
        matchesCoordinates={nameMatches[0].indices}
      />
    );
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2322 - Type 'MutableRefObject<HTMLDivElement | null | undefined>' is not assignable to type 'LegacyRef<HTMLDivElement> | undefined'.
    <div style={styles.container} ref={containerRef}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ResponsiveLineStackLayout noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ButtonBase style={styles.button} onClick={onChoose} focusRipple>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ResponsiveLineStackLayout noMargin expand>
            {!!exampleShortHeader.previewImageUrls.length && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <ExampleThumbnailOrIcon
                  exampleShortHeader={exampleShortHeader}
                />
              </Column>
            )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text noMargin>{renderExampleField('name')} </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
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
                      <UserPublicProfileChip user={author} key={author.id} />
                    ))}
                </div>
              </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text
                noMargin
                size="body2"
                displayInlineAsSpan // Important to avoid the text to use a "p" which causes crashes with automatic translation tools with the highlighted text.
              >
                {renderExampleField('shortDescription')}
              </Text>
            </Column>
          </ResponsiveLineStackLayout>
        </ButtonBase>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column justifyContent="flex-end">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line noMargin justifyContent="flex-end">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <FlatButtonWithSplitMenu
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Open</Trans>}
              disabled={isOpening || !isCompatible}
              onClick={onOpen}
// @ts-expect-error - TS7006 - Parameter 'i18n' implicitly has an 'any' type.
              buildMenuTemplate={i18n => [
                {
                  label: i18n._(t`Open details`),
                  click: onChoose,
                },
                {
                  label: electron
                    ? i18n._(t`Open in the web-app`)
                    : i18n._(t`Open in a new tab`),
                  click: () => {
                    fetchAndOpenExampleInWebApp(i18n);
                  },
                },
              ]}
            />
          </Line>
        </Column>
      </ResponsiveLineStackLayout>
    </div>
  );
};

export default ExampleListItem;
