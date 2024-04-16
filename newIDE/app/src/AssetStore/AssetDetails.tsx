// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t, Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line, Spacer } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module '../UI/Chip' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Chip.tsx', but '--jsx' is not set.
import Chip from '../UI/Chip';
import {
  AssetShortHeader,
  Asset,
  Author,
  ObjectAsset,
  getPublicAsset,
  isPixelArt,
  isPrivateAsset,
} from '../Utils/GDevelopServices/Asset';
import {
  PrivateAssetPackListingData,
  PrivateGameTemplateListingData,
// @ts-expect-error - TS6142 - Module '../Utils/GDevelopServices/Shop' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/Shop.tsx', but '--jsx' is not set.
} from '../Utils/GDevelopServices/Shop';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../UI/PlaceholderLoader';
// @ts-expect-error - TS6142 - Module '../UI/PlaceholderError' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderError.tsx', but '--jsx' is not set.
import PlaceholderError from '../UI/PlaceholderError';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { LineStackLayout, ResponsiveLineStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/CorsAwareImage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CorsAwareImage.tsx', but '--jsx' is not set.
import { CorsAwareImage } from '../UI/CorsAwareImage';
// @ts-expect-error - TS6142 - Module './AssetStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/AssetStoreContext.tsx', but '--jsx' is not set.
import { AssetStoreContext } from './AssetStoreContext';
import Window from '../Utils/Window';
// @ts-expect-error - TS6142 - Module '../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../UI/SelectOption';
// @ts-expect-error - TS6142 - Module '../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../UI/IconButton';
// @ts-expect-error - TS6142 - Module '../ObjectEditor/Editors/SpriteEditor/AnimationPreview' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectEditor/Editors/SpriteEditor/AnimationPreview.tsx', but '--jsx' is not set.
import AnimationPreview from '../ObjectEditor/Editors/SpriteEditor/AnimationPreview';
// @ts-expect-error - TS6142 - Module '../UI/ScrollView' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ScrollView.tsx', but '--jsx' is not set.
import ScrollView, { ScrollViewInterface } from '../UI/ScrollView';
// @ts-expect-error - TS6142 - Module './AssetsList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/AssetsList.tsx', but '--jsx' is not set.
import AssetsList from './AssetsList';
import { SimilarAssetStoreSearchFilter } from './AssetStoreSearchFilter';
// @ts-expect-error - TS6142 - Module '../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../UI/EmptyMessage';
// @ts-expect-error - TS6142 - Module '../UI/Link' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Link.tsx', but '--jsx' is not set.
import Link from '../UI/Link';
import PrivateAssetsAuthorizationContext from './PrivateAssets/PrivateAssetsAuthorizationContext';
// @ts-expect-error - TS6142 - Module './PrivateAssets/AuthorizedAssetImage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/PrivateAssets/AuthorizedAssetImage.tsx', but '--jsx' is not set.
import AuthorizedAssetImage from './PrivateAssets/AuthorizedAssetImage';
// @ts-expect-error - TS6142 - Module '../UI/MarkdownText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/MarkdownText.tsx', but '--jsx' is not set.
import { MarkdownText } from '../UI/MarkdownText';
// @ts-expect-error - TS6142 - Module '../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../UI/Paper';
import {
  getUserPublicProfilesByIds,
  UserPublicProfile,
// @ts-expect-error - TS6142 - Module '../Utils/GDevelopServices/User' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/User.tsx', but '--jsx' is not set.
} from '../Utils/GDevelopServices/User';
import { getPixelatedImageRendering } from '../Utils/CssHelpers';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/ArrowRight'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ArrowRight.js' implicitly has an 'any' type.
import ArrowRight from '../UI/CustomSvgIcons/ArrowRight';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/ArrowLeft'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ArrowLeft.js' implicitly has an 'any' type.
import ArrowLeft from '../UI/CustomSvgIcons/ArrowLeft';
// @ts-expect-error - TS6142 - Module '../Profile/PublicProfileDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/PublicProfileDialog.tsx', but '--jsx' is not set.
import PublicProfileDialog from '../Profile/PublicProfileDialog';

const FIXED_HEIGHT = 250;
const FIXED_WIDTH = 300;

const styles = {
  previewBackground: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: FIXED_WIDTH,
    height: FIXED_HEIGHT,
  },
  chip: {
    marginBottom: 2,
    marginRight: 2,
  },
  previewImage: {
    position: 'relative',
    maxWidth: '100%',
    maxHeight: '100%',
    verticalAlign: 'middle',
    pointerEvents: 'none',
    // Compromise between having a preview of the asset slightly more zoomed
    // compared to the search results and a not too zoomed image for small
    // smooth assets that could give a sense of bad quality.
    flex: 0.6,
  },
  arrowContainer: {
    padding: 6,
  },
} as const;

const makeFirstLetterUppercase = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

type Props = {
  onTagSelection: (tag: string) => void,
  assetShortHeader: AssetShortHeader,
  onOpenDetails: (assetShortHeader: AssetShortHeader) => void,
  onAssetLoaded?: () => void,
  onPrivateAssetPackSelection: (assetPack: PrivateAssetPackListingData) => void,
  onPrivateGameTemplateSelection: (assetPack: PrivateGameTemplateListingData) => void
};

const getObjectAssetResourcesByName = (objectAsset: ObjectAsset): {
  [key: string]: any /*(serialized gdResource)*/
} => {
  const resourcesByName: Record<string, any> = {};

  objectAsset.resources.forEach(resource => {
    resourcesByName[resource.name] = resource;
  });

  return resourcesByName;
};

export type AssetDetailsInterface = {
  getScrollPosition: () => number,
  scrollToPosition: (y: number) => void
};

// @ts-expect-error - TS2345 - Argument of type '({ onTagSelection, assetShortHeader, onOpenDetails, onAssetLoaded, onPrivateAssetPackSelection, onPrivateGameTemplateSelection, }: Props, ref: ForwardedRef<Props>) => Element' is not assignable to parameter of type 'ForwardRefRenderFunction<Props, AssetDetailsInterface>'.
export const AssetDetails = React.forwardRef<Props, AssetDetailsInterface>((
  {
    onTagSelection,
    assetShortHeader,
    onOpenDetails,
    onAssetLoaded,
    onPrivateAssetPackSelection,
    onPrivateGameTemplateSelection,
  }: Props,
  ref
) => {
  const {
    authors,
    licenses,
    environment,
    error: filterError,
    useSearchItem,
  } = React.useContext(AssetStoreContext);
  const [asset, setAsset] = React.useState<Asset | null | undefined>(null);
  const [
    selectedAnimationName,
    setSelectedAnimationName,
  ] = React.useState<string | null | undefined>(null);
  const [error, setError] = React.useState<Error | null | undefined>(null);
  const isAssetPrivate = isPrivateAsset(assetShortHeader);
  const { fetchPrivateAsset } = React.useContext(
    PrivateAssetsAuthorizationContext
  );
  const [authorPublicProfiles, setAuthorPublicProfiles] = React.useState<UserPublicProfile[]>([]);
  const [
    selectedAuthorPublicProfile,
    setSelectedAuthorPublicProfile,
  ] = React.useState<UserPublicProfile | null | undefined>(null);

  const scrollView = React.useRef<ScrollViewInterface | null | undefined>(null);
// @ts-expect-error - TS2739 - Type '{ getScrollPosition: () => any; scrollToPosition: (y: number) => void; }' is missing the following properties from type 'Props': onTagSelection, assetShortHeader, onOpenDetails, onPrivateAssetPackSelection, onPrivateGameTemplateSelection
  React.useImperativeHandle(ref, () => ({
    /**
     * Return the scroll position.
     */
    getScrollPosition: () => {
      const scrollViewElement = scrollView.current;
      if (!scrollViewElement) return 0;

      return scrollViewElement.getScrollPosition();
    },
    scrollToPosition: (y: number) => {
      const scrollViewElement = scrollView.current;
      if (!scrollViewElement) return;

      scrollViewElement.scrollToPosition(y);
    },
  }));

  const getImagePreviewStyle = (assetShortHeader: Asset) => {
    return {
      ...styles.previewImage,
      imageRendering: isPixelArt(assetShortHeader)
        ? getPixelatedImageRendering()
        : undefined,
    };
  };

  const loadAsset = React.useCallback(
    () => {
      (async () => {
        try {
          // Reinitialise asset to trigger a loader and recalculate all parameters. (for instance zoom)
          setAsset(null);
          const loadedAsset = isAssetPrivate
            ? await fetchPrivateAsset(assetShortHeader, {
                environment,
              })
            : await getPublicAsset(assetShortHeader, {
                environment,
              });
          if (!loadedAsset) {
            console.error('Cannot load private asset');
            throw new Error('Cannot load private asset');
          }
          setAsset(loadedAsset);

          if (loadedAsset.objectType === 'sprite') {
            // Only sprites have animations and we select the first one.
            const firstAnimationName =
              loadedAsset.objectAssets[0].object.animations[0].name;
            setSelectedAnimationName(firstAnimationName);
          }
        } catch (error: any) {
          console.error('Error while loading asset:', error);
          setError(error);
        }
        onAssetLoaded && onAssetLoaded();
      })();
    },
    [
      onAssetLoaded,
      isAssetPrivate,
      fetchPrivateAsset,
      assetShortHeader,
      environment,
    ]
  );

  const isImageResourceSmooth = React.useMemo(
    () => !isPixelArt(assetShortHeader),
    [assetShortHeader]
  );

  React.useEffect(
    () => {
      if (!asset) {
        loadAsset();
      }
    },
    [asset, loadAsset]
  );

  const loadAuthorPublicProfiles = React.useCallback(
    async () => {
      try {
        const authorIds: Array<string> = (asset && asset.authorIds) || [];
        if (authorIds.length === 0) return;
        const userPublicProfileByIds = await getUserPublicProfilesByIds(
          authorIds
        );
        const userPublicProfiles = Object.keys(userPublicProfileByIds).map(
          id => userPublicProfileByIds[id]
        );
        setAuthorPublicProfiles(userPublicProfiles);
      } catch (error: any) {
        // Catch error, but don't display it to the user.
        console.error('Error while loading author public profiles:', error);
      }
    },
    [asset]
  );

  React.useEffect(
    () => {
      loadAuthorPublicProfiles();
    },
    [loadAuthorPublicProfiles]
  );

  const assetAuthors: Array<Author> | null | undefined =
    asset && authors
      ? asset.authors
          .map(authorName => {
// @ts-expect-error - TS7031 - Binding element 'name' implicitly has an 'any' type.
            return authors.find(({ name }) => name === authorName);
          })
          .filter(Boolean)
      : [];
  const areAuthorsLoading =
    !asset || // Asset not loaded.
    (asset.authors.length > 0 && !authors) || // Authors not loaded.
    (asset.authorIds && // User public profiles not loaded.
      authorPublicProfiles.length > 0 &&
      authorPublicProfiles.length === 0);

  const assetLicense =
    asset && licenses
// @ts-expect-error - TS7031 - Binding element 'name' implicitly has an 'any' type.
      ? licenses.find(({ name }) => name === asset.license)
      : null;

  // For sprite animations.
  const assetResources =
    asset && asset.objectAssets[0]
      ? getObjectAssetResourcesByName(asset.objectAssets[0])
      : {};
  const assetAnimations = asset
    ? asset.objectAssets[0].object.animations
    : null;
  const animation = assetAnimations
// @ts-expect-error - TS7031 - Binding element 'name' implicitly has an 'any' type.
    ? assetAnimations.find(({ name }) => name === selectedAnimationName)
    : null;
  const direction = animation ? animation.directions[0] : null;
  const animationResources =
    asset && direction
// @ts-expect-error - TS7006 - Parameter 'sprite' implicitly has an 'any' type.
      ? direction.sprites.map(sprite => assetResources[sprite.image])
      : null;

  const similarAssetFilters = React.useMemo(
    () => [new SimilarAssetStoreSearchFilter(assetShortHeader)],
    [assetShortHeader]
  );
  const searchResults = useSearchItem('', null, null, similarAssetFilters);
  const truncatedSearchResults = searchResults && searchResults.slice(0, 60);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ScrollView ref={scrollView}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line justifyContent="space-between" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <LineStackLayout alignItems="baseline" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text size="block-title" displayInlineAsSpan>
                {assetShortHeader.name}
              </Text>
              {!areAuthorsLoading && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <LineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text size="body">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>by</Trans>
                  </Text>
                  {!!assetAuthors &&
                    assetAuthors.map(author => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Text size="body" key={author.name}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Link
                          key={author.name}
                          href={author.website}
                          onClick={() =>
                            Window.openExternalURL(author.website)
                          }
                        >
                          {author.name}
                        </Link>
                      </Text>
                    ))}
                  {!!authorPublicProfiles.length &&
                    authorPublicProfiles.map(userPublicProfile => {
                      const username =
                        userPublicProfile.username || 'GDevelop user';
                      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <Text size="body" key={userPublicProfile.id}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <Link
                            key={userPublicProfile.id}
                            href="#"
                            onClick={() =>
                              setSelectedAuthorPublicProfile(
                                userPublicProfile
                              )
                            }
                          >
                            {username}
                          </Link>
                        </Text>
                      );
                    })}
                </LineStackLayout>
              )}
            </LineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <div style={{ flexWrap: 'wrap' }}>
                {assetShortHeader.tags.slice(0, 5).map((tag, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <React.Fragment key={tag}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    {index !== 0 && <Spacer />}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Chip
                      size="small"
                      style={styles.chip}
                      label={makeFirstLetterUppercase(tag)}
                      onClick={() => {
                        onTagSelection(tag);
                      }}
                    />
                  </React.Fragment>
                ))}
                {assetShortHeader.tags.length > 5 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Chip
                      size="small"
                      style={styles.chip}
                      label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <Trans>
                          + {assetShortHeader.tags.length - 5} tag(s)
                        </Trans>
                      }
                    />
                  </>
                )}
              </div>
            </Line>
          </Column>
        </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column>
            {asset ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <>
                {asset.objectType === 'sprite' &&
                animationResources &&
                typeof selectedAnimationName === 'string' && // Animation name can be empty string.
                  direction && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <AnimationPreview
                      animationName={selectedAnimationName}
                      resourceNames={animationResources.map(
// @ts-expect-error - TS7031 - Binding element 'name' implicitly has an 'any' type.
                        ({ name }) => name
                      )}
                      getImageResourceSource={(resourceName: string) => {
                        const resource = assetResources[resourceName];
                        return resource ? resource.file : '';
                      }}
                      isImageResourceSmooth={() => isImageResourceSmooth}
                      timeBetweenFrames={direction.timeBetweenFrames}
                      isLooping // Always loop in the asset store.
                      hideCheckeredBackground
                      deactivateControls
                      displaySpacedView
                      fixedHeight={FIXED_HEIGHT}
                      fixedWidth={FIXED_WIDTH}
                      isAssetPrivate={isAssetPrivate}
                    />
                  )}
                {asset.objectType !== 'sprite' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <div style={styles.previewBackground}>
                    {isAssetPrivate ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <AuthorizedAssetImage
                        style={getImagePreviewStyle(asset)}
                        url={asset.previewImageUrls[0]}
                        alt={asset.name}
                      />
                    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <CorsAwareImage
                        style={getImagePreviewStyle(asset)}
                        src={asset.previewImageUrls[0]}
                        alt={asset.name}
                      />
                    )}
                  </div>
                )}
              </>
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <div style={styles.previewBackground}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <PlaceholderLoader />
              </div>
            )}
            {assetAnimations &&
              assetAnimations.length > 1 &&
              typeof selectedAnimationName === 'string' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Paper elevation={4} variant="outlined" background="dark">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Line justifyContent="center" alignItems="center" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <div style={styles.arrowContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <IconButton
                        size="small"
                        onClick={() => {
                          const previousAnimationIndex = assetAnimations.findIndex(
// @ts-expect-error - TS7031 - Binding element 'name' implicitly has an 'any' type.
                            ({ name }) => name === selectedAnimationName
                          );
                          const newAnimationIndex =
                            previousAnimationIndex === 0
                              ? assetAnimations.length - 1
                              : previousAnimationIndex - 1;
                          setSelectedAnimationName(
                            assetAnimations[newAnimationIndex].name
                          );
                        }}
                      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <ArrowLeft />
                      </IconButton>
                    </div>

{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <SelectField
                      value={selectedAnimationName}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
                      onChange={(e, i, newAnimationName: string) => {
                        setSelectedAnimationName(newAnimationName);
                      }}
                      fullWidth
                      textAlign="center"
                      disableUnderline
                    >
{ /* @ts-expect-error - TS7006 - Parameter 'animation' implicitly has an 'any' type. */}
                      {assetAnimations.map(animation => {
                        const isAnimationNameEmpty = !animation.name;
                        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          <SelectOption
                            key={animation.name}
                            value={animation.name}
                            label={
                              !isAnimationNameEmpty
                                ? makeFirstLetterUppercase(animation.name)
                                : t`Default` // Display default for animations with no name.
                            }
                            shouldNotTranslate={!isAnimationNameEmpty}
                          />
                        );
                      })}
                    </SelectField>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <div style={styles.arrowContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <IconButton
                        size="small"
                        onClick={() => {
                          const previousAnimationIndex = assetAnimations.findIndex(
// @ts-expect-error - TS7031 - Binding element 'name' implicitly has an 'any' type.
                            ({ name }) => name === selectedAnimationName
                          );
                          const newAnimationIndex =
                            previousAnimationIndex ===
                            assetAnimations.length - 1
                              ? 0
                              : previousAnimationIndex + 1;
                          setSelectedAnimationName(
                            assetAnimations[newAnimationIndex].name
                          );
                        }}
                      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <ArrowRight />
                      </IconButton>
                    </div>
                  </Line>
                </Paper>
              )}
          </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column expand>
            {asset ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text size="body">
                  {!!assetLicense && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>
                      Type of License:{' '}
                      {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <Link
                          href={assetLicense.website}
                          onClick={() =>
                            Window.openExternalURL(assetLicense.website)
                          }
                        >
                          {assetLicense.name}
                        </Link>
                      }
                    </Trans>
                  )}
                </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text size="body" displayInlineAsSpan>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <MarkdownText source={asset.description} allowParagraphs />
                </Text>
              </React.Fragment>
            ) : error ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <PlaceholderError onRetry={loadAsset}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>
                  Error while loading the asset. Verify your internet
                  connection or try again later.
                </Trans>
              </PlaceholderError>
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <PlaceholderLoader />
            )}
          </Column>
        </ResponsiveLineStackLayout>
        {asset && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text size="block-title" displayInlineAsSpan>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>You might like</Trans>
              </Text>
            </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line expand noMargin justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <AssetsList
                assetShortHeaders={truncatedSearchResults}
// @ts-expect-error - TS7006 - Parameter 'assetShortHeader' implicitly has an 'any' type.
                onOpenDetails={assetShortHeader => {
                  setAsset(null);
                  onOpenDetails(assetShortHeader);
                }}
                noScroll
                noResultsPlaceHolder={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Line alignItems="flex-start">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Trans>No similar asset was found.</Trans>
                    </EmptyMessage>
                  </Line>
                }
                error={filterError}
              />
            </Line>
          </Column>
        )}
        {selectedAuthorPublicProfile && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <PublicProfileDialog
            userId={selectedAuthorPublicProfile.id}
            onClose={() => setSelectedAuthorPublicProfile(null)}
// @ts-expect-error - TS7006 - Parameter 'assetPack' implicitly has an 'any' type.
            onAssetPackOpen={assetPack => {
              onPrivateAssetPackSelection(assetPack);
              setSelectedAuthorPublicProfile(null);
            }}
// @ts-expect-error - TS7006 - Parameter 'gameTemplate' implicitly has an 'any' type.
            onGameTemplateOpen={gameTemplate => {
              onPrivateGameTemplateSelection(gameTemplate);
              setSelectedAuthorPublicProfile(null);
            }}
          />
        )}
      </Column>
    </ScrollView>
  );
});
