import { t } from '@lingui/macro';

import { I18n as I18nType } from '@lingui/core';
import * as React from 'react';
import {
  ExampleShortHeader,
  getExample,
} from '../../Utils/GDevelopServices/Example';
import { isCompatibleWithAsset } from '../../Utils/GDevelopServices/Asset';
import ButtonBase from '@material-ui/core/ButtonBase';

import Text from '../../UI/Text';

import { Trans } from '@lingui/macro';

import { Column, Line } from '../../UI/Grid';

import FlatButtonWithSplitMenu from '../../UI/FlatButtonWithSplitMenu';
import { getIDEVersion } from '../../Version';

import { ExampleThumbnailOrIcon } from './ExampleThumbnailOrIcon';

import optionalRequire from '../../Utils/OptionalRequire';

import { openExampleInWebApp } from './ExampleDialog';

import { UserPublicProfileChip } from '../../UI/User/UserPublicProfileChip';

import { ExampleSizeChip } from '../../UI/ExampleSizeChip';

import { ExampleDifficultyChip } from '../../UI/ExampleDifficultyChip';

import HighlightedText from '../../UI/Search/HighlightedText';
import { SearchMatch } from '../../UI/Search/UseSearchStructuredItem';

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
  exampleShortHeader: ExampleShortHeader;
  matches: Array<SearchMatch> | null | undefined;
  isOpening: boolean;
  onChoose: () => void;
  onOpen: () => void;
  onHeightComputed: (arg1: number) => void;
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
      } catch (error) {
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
    const nameMatches = matches.filter((match) => match.key === field);
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
      <ResponsiveLineStackLayout noMargin expand>
        <ButtonBase style={styles.button} onClick={onChoose} focusRipple>
          <ResponsiveLineStackLayout noMargin expand>
            {!!exampleShortHeader.previewImageUrls.length && (
              <Column noMargin>
                <ExampleThumbnailOrIcon
                  exampleShortHeader={exampleShortHeader}
                />
              </Column>
            )}
            <Column expand noMargin>
              <Text noMargin>{renderExampleField('name')} </Text>
              <Line>
                <div style={{ flexWrap: 'wrap' }}>
                  {exampleShortHeader.difficultyLevel && (
                    <ExampleDifficultyChip
                      difficultyLevel={exampleShortHeader.difficultyLevel}
                    />
                  )}
                  {exampleShortHeader.codeSizeLevel && (
                    <ExampleSizeChip
                      codeSizeLevel={exampleShortHeader.codeSizeLevel}
                    />
                  )}
                  {exampleShortHeader.authors &&
                    exampleShortHeader.authors.map((author) => (
                      <UserPublicProfileChip user={author} key={author.id} />
                    ))}
                </div>
              </Line>
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
        <Column justifyContent="flex-end">
          <Line noMargin justifyContent="flex-end">
            <FlatButtonWithSplitMenu
              label={<Trans>Open</Trans>}
              disabled={isOpening || !isCompatible}
              onClick={onOpen}
              buildMenuTemplate={(i18n) => [
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
