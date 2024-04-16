import * as React from 'react';
import { BehaviorShortHeader } from '../../Utils/GDevelopServices/Extension';
import ButtonBase from '@material-ui/core/ButtonBase';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Column } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/IconContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconContainer.tsx', but '--jsx' is not set.
import { IconContainer } from '../../UI/IconContainer';
// @ts-expect-error - TS6142 - Module '../../UI/Search/HighlightedText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Search/HighlightedText.tsx', but '--jsx' is not set.
import HighlightedText from '../../UI/Search/HighlightedText';
import { SearchMatch } from '../../UI/Search/UseSearchStructuredItem';
// @ts-expect-error - TS6142 - Module '../../UI/Chip' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Chip.tsx', but '--jsx' is not set.
import Chip from '../../UI/Chip';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { LineStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module './BehaviorStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/BehaviorStore/BehaviorStoreContext.tsx', but '--jsx' is not set.
import { SearchableBehaviorMetadata } from './BehaviorStoreContext';
// @ts-expect-error - TS6142 - Module '../../UI/User/UserPublicProfileChip' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/User/UserPublicProfileChip.tsx', but '--jsx' is not set.
import { UserPublicProfileChip } from '../../UI/User/UserPublicProfileChip';
import Tooltip from '@material-ui/core/Tooltip';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/SmallCircledInfo'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/SmallCircledInfo.js' implicitly has an 'any' type.
import CircledInfo from '../../UI/CustomSvgIcons/SmallCircledInfo';
// @ts-expect-error - TS6142 - Module '../../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../../UI/IconButton';

const gd: libGDevelop = global.gd;

const styles = {
  button: { width: '100%' },
  container: {
    display: 'flex',
    textAlign: 'left',
    overflow: 'hidden',
    width: '100%',
  },
} as const;

type Props = {
  id?: string,
  objectType: string,
  objectBehaviorsTypes: Array<string>,
  behaviorShortHeader: BehaviorShortHeader | SearchableBehaviorMetadata,
  matches: Array<SearchMatch> | null | undefined,
  onChoose: () => void,
  onShowDetails: () => void,
  onHeightComputed: (arg1: number) => void,
  platform: gdPlatform
};

export const BehaviorListItem = ({
  id,
  objectType,
  objectBehaviorsTypes,
  behaviorShortHeader,
  matches,
  onChoose,
  onShowDetails,
  onHeightComputed,
  platform,
}: Props) => {
  const alreadyAdded = objectBehaviorsTypes.includes(behaviorShortHeader.type);
  // An empty object type means the base object, i.e: any object.
  const isObjectCompatible =
    (!behaviorShortHeader.objectType ||
      objectType === behaviorShortHeader.objectType) &&
// @ts-expect-error - TS7006 - Parameter 'requiredBehaviorType' implicitly has an 'any' type.
    behaviorShortHeader.allRequiredBehaviorTypes.every(requiredBehaviorType => {
      const behaviorMetadata = gd.MetadataProvider.getBehaviorMetadata(
        platform,
        requiredBehaviorType
      );
      return (
        !behaviorMetadata.isHidden() ||
        objectBehaviorsTypes.includes(requiredBehaviorType)
      );
    });

  // Report the height of the item once it's known.
  const containerRef = React.useRef<HTMLDivElement | null | undefined>(null);
  React.useLayoutEffect(() => {
    if (containerRef.current)
      onHeightComputed(containerRef.current.getBoundingClientRect().height);
  });

  const renderField = (field: 'description' | 'fullName') => {
    const originalField = behaviorShortHeader[field];

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

  const isEnabled = !alreadyAdded && isObjectCompatible;

  const chooseBehavior = React.useCallback(
    () => {
      if (isEnabled) {
        onChoose();
      }
    },
    [isEnabled, onChoose]
  );

  const hasChip =
    alreadyAdded ||
    !isObjectCompatible ||
    behaviorShortHeader.tier === 'community' ||
    (behaviorShortHeader.isDeprecated || false);
  const hasInfoButton = behaviorShortHeader.authors || false;
  const iconStyle = {
    paddingTop: hasInfoButton ? 10 : hasChip ? 6 : 4,
  } as const;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ButtonBase
      id={id}
      onClick={chooseBehavior}
      focusRipple
      style={styles.button}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div
        style={
          isEnabled ? styles.container : { ...styles.container, opacity: 0.384 }
        }
// @ts-expect-error - TS2322 - Type 'MutableRefObject<HTMLDivElement | null | undefined>' is not assignable to type 'LegacyRef<HTMLDivElement> | undefined'.
        ref={containerRef}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <LineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <div style={iconStyle}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <IconContainer
              alt={behaviorShortHeader.fullName}
              src={behaviorShortHeader.previewIconUrl}
              size={32}
            />
          </div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <LineStackLayout noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text
                noMargin
                allowBrowserAutoTranslate={false}
                displayInlineAsSpan // Important to avoid the text to use a "p" which causes crashes with automatic translation tools with the highlighted text.
              >
                {renderField('fullName')}
              </Text>
              {alreadyAdded && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Chip
                  size="small"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Already added</Trans>}
                  color="secondary"
                  variant="outlined"
                />
              )}
              {!isObjectCompatible && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Chip
                  size="small"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Incompatible with the object</Trans>}
                  color="secondary"
                  variant="outlined"
                />
              )}
              {behaviorShortHeader.tier === 'community' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Chip
                  size="small"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Community-made</Trans>}
                  color="primary"
                />
              )}
              {behaviorShortHeader.isDeprecated && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Chip
                  size="small"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Deprecated</Trans>}
                  color="primary"
                />
              )}
              {behaviorShortHeader.authors && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Tooltip
                  title={
                    behaviorShortHeader.authors.length > 0 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <div style={{ flexWrap: 'wrap' }}>
{ /* @ts-expect-error - TS7006 - Parameter 'author' implicitly has an 'any' type. */}
                          {behaviorShortHeader.authors.map(author => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                            <UserPublicProfileChip
                              user={author}
                              key={author.id}
                              variant="outlined"
                            />
                          ))}
                        </div>
                      </Line>
                    ) : (
                      ''
                    )
                  }
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <IconButton
                    size="small"
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type.
                    onClick={e => {
                      e.stopPropagation();
                      onShowDetails();
                    }}
                  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <CircledInfo />
                  </IconButton>
                </Tooltip>
              )}
            </LineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text
              noMargin
              size="body2"
              allowBrowserAutoTranslate={false}
              displayInlineAsSpan // Important to avoid the text to use a "p" which causes crashes with automatic translation tools with the highlighted text.
            >
              {renderField('description')}
            </Text>
          </Column>
        </LineStackLayout>
      </div>
    </ButtonBase>
  );
};
