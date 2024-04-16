import * as React from 'react';
import { ExtensionShortHeader } from '../../Utils/GDevelopServices/Extension';
import ButtonBase from '@material-ui/core/ButtonBase';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/IconContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconContainer.tsx', but '--jsx' is not set.
import { IconContainer } from '../../UI/IconContainer';
// @ts-expect-error - TS6142 - Module '../../UI/User/UserPublicProfileChip' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/User/UserPublicProfileChip.tsx', but '--jsx' is not set.
import { UserPublicProfileChip } from '../../UI/User/UserPublicProfileChip';
// @ts-expect-error - TS6142 - Module '../../UI/Search/HighlightedText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Search/HighlightedText.tsx', but '--jsx' is not set.
import HighlightedText from '../../UI/Search/HighlightedText';
import { SearchMatch } from '../../UI/Search/UseSearchStructuredItem';
// @ts-expect-error - TS6142 - Module '../../UI/Chip' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Chip.tsx', but '--jsx' is not set.
import Chip from '../../UI/Chip';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { LineStackLayout } from '../../UI/Layout';

const styles = {
  button: { width: '100%' },
  container: {
    display: 'flex',
    textAlign: 'left',
    overflow: 'hidden',
    padding: 8,
    width: '100%',
  },
} as const;

type Props = {
  id?: string,
  project: gdProject,
  extensionShortHeader: ExtensionShortHeader,
  matches: Array<SearchMatch> | null | undefined,
  onChoose: () => void,
  onHeightComputed: (arg1: number) => void
};

export const ExtensionListItem = ({
  id,
  project,
  extensionShortHeader,
  matches,
  onChoose,
  onHeightComputed,
}: Props) => {
  const alreadyInstalled = project.hasEventsFunctionsExtensionNamed(
    extensionShortHeader.name
  );

  // Test if the local extension comes from the Asset Store
  const fromStore = alreadyInstalled
    ? project
        .getEventsFunctionsExtension(extensionShortHeader.name)
        .getOriginName() === 'gdevelop-extension-store'
    : false;

  // Report the height of the item once it's known.
  const containerRef = React.useRef<HTMLDivElement | null | undefined>(null);
  React.useLayoutEffect(() => {
    if (containerRef.current)
      onHeightComputed(containerRef.current.getBoundingClientRect().height);
  });

  const renderExtensionField = (field: 'shortDescription' | 'fullName') => {
    const originalField = extensionShortHeader[field];

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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ButtonBase id={id} onClick={onChoose} focusRipple style={styles.button}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2322 - Type 'MutableRefObject<HTMLDivElement | null | undefined>' is not assignable to type 'LegacyRef<HTMLDivElement> | undefined'. */}
      <div style={styles.container} ref={containerRef}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <LineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <IconContainer
            alt={extensionShortHeader.fullName}
            src={extensionShortHeader.previewIconUrl}
            size={64}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <LineStackLayout noMargin alignItems="baseline">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text
                noMargin
                allowBrowserAutoTranslate={false}
                displayInlineAsSpan // Important to avoid the text to use a "p" which causes crashes with automatic translation tools with the highlighted text.
              >
                {renderExtensionField('fullName')}
              </Text>
              {alreadyInstalled && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Chip
                  size="small"
                  label={
                    fromStore ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>Already installed</Trans>
                    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>Already in project</Trans>
                    )
                  }
                  color="secondary"
                  variant="outlined"
                />
              )}
              {extensionShortHeader.tier === 'community' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Chip
                  size="small"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Community extension</Trans>}
                  color="primary"
                />
              )}
            </LineStackLayout>
            {extensionShortHeader.authors && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <div style={{ flexWrap: 'wrap' }}>
                  {extensionShortHeader.authors.map(author => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <UserPublicProfileChip user={author} key={author.id} />
                  ))}
                </div>
              </Line>
            )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text
              noMargin
              size="body2"
              allowBrowserAutoTranslate={false}
              displayInlineAsSpan // Important to avoid the text to use a "p" which causes crashes with automatic translation tools with the highlighted text.
            >
              {renderExtensionField('shortDescription')}
            </Text>
          </Column>
        </LineStackLayout>
      </div>
    </ButtonBase>
  );
};
