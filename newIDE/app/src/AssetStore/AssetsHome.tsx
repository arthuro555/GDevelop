import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import GridList from '@material-ui/core/GridList';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
import type {
  PublicAssetPacks,
  PublicAssetPack,
} from '../Utils/GDevelopServices/Asset';
import {
  PrivateAssetPackListingData,
  PrivateGameTemplateListingData,
// @ts-expect-error - TS6142 - Module '../Utils/GDevelopServices/Shop' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/Shop.tsx', but '--jsx' is not set.
} from '../Utils/GDevelopServices/Shop';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Column } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/ScrollView' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ScrollView.tsx', but '--jsx' is not set.
import ScrollView, { ScrollViewInterface } from '../UI/ScrollView';
import {
  useResponsiveWindowSize,
  WindowSizeType,
} from '../UI/Responsive/ResponsiveWindowMeasurer';
import AuthenticatedUserContext from '../Profile/AuthenticatedUserContext';
import { mergeArraysPerGroup } from '../Utils/Array';
import {
  CategoryTile,
  PrivateAssetPackTile,
  PublicAssetPackTile,
  PrivateGameTemplateTile,
// @ts-expect-error - TS6142 - Module './ShopTiles' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ShopTiles.tsx', but '--jsx' is not set.
} from './ShopTiles';
import { useDebounce } from '../Utils/UseDebounce';
// @ts-expect-error - TS6142 - Module '../Promotions/PromotionsSlideshow' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Promotions/PromotionsSlideshow.tsx', but '--jsx' is not set.
import PromotionsSlideshow from '../Promotions/PromotionsSlideshow';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../UI/Layout';

const cellSpacing = 2;

const getCategoryColumns = (
  windowSize: WindowSizeType,
  isLandscape: boolean
) => {
  switch (windowSize) {
    case 'small':
      return isLandscape ? 4 : 2;
    case 'medium':
      return 3;
    case 'large':
      return 4;
    case 'xlarge':
      return 6;
    default:
      return 3;
  }
};

const getShopItemsColumns = (
  windowSize: WindowSizeType,
  isLandscape: boolean
) => {
  switch (windowSize) {
    case 'small':
      return isLandscape ? 3 : 1;
    case 'medium':
      return 2;
    case 'large':
      return 3;
    case 'xlarge':
      return 5;
    default:
      return 2;
  }
};

export const shopCategories = {
  'game-template': {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    title: <Trans>Ready-made games</Trans>,
    imageAlt: 'Premium game templates category',
    imageSource: 'res/shop-categories/Game_Templates.jpeg',
  },
  'full-game-pack': {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    title: <Trans>Full Game Asset Packs</Trans>,
    imageAlt: 'Full game asset packs category',
    imageSource: 'res/shop-categories/Full_game_pack.jpeg',
  },
  character: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    title: <Trans>Characters</Trans>,
    imageAlt: 'Characters asset packs category',
    imageSource: 'res/shop-categories/Characters.jpeg',
  },
  props: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    title: <Trans>Props</Trans>,
    imageAlt: 'Props asset packs category',
    imageSource: 'res/shop-categories/Props.jpeg',
  },
  background: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    title: <Trans>Backgrounds</Trans>,
    imageAlt: 'Backgrounds asset packs category',
    imageSource: 'res/shop-categories/Backgrounds.jpeg',
  },
  'visual-effect': {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    title: <Trans>Visual Effects</Trans>,
    imageAlt: 'Visual effects asset packs category',
    imageSource: 'res/shop-categories/Visual_Effects.jpeg',
  },
  interface: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    title: <Trans>UI/Interface</Trans>,
    imageAlt: 'User Interface asset packs category',
    imageSource: 'res/shop-categories/Interface.jpeg',
  },
  prefab: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    title: <Trans>Prefabs (Ready-to-use Objects)</Trans>,
    imageAlt: 'Prefabs asset packs category',
    imageSource: 'res/shop-categories/Prefabs.jpeg',
  },
  sounds: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    title: <Trans>Sounds and musics</Trans>,
    imageAlt: 'Sounds and musics asset packs category',
    imageSource: 'res/shop-categories/Sounds.jpeg',
  },
} as const;

const styles = {
  grid: {
    margin: '0 10px',
    // Remove the scroll capability of the grid, the scroll view handles it.
    overflow: 'unset',
  },
} as const;

const useProgressiveReveal = <T extends unknown>(
  {
    list,
    numberPerPage,
  }: {
    list: Array<T>,
    numberPerPage: number
  },
): {
  displayedList: Array<T>,
  onShowMore: () => void
} => {
  const [pageCount, setPageCount] = React.useState(1);
  const onShowMore = useDebounce(() => {
    setPageCount(pageCount + 1);
  }, 20);

  return {
    displayedList: list.slice(0, pageCount * numberPerPage),
    onShowMore,
  };
};

export type AssetsHomeInterface = {
  getScrollPosition: () => number,
  scrollToPosition: (y: number) => void
};

type Props = {
  publicAssetPacks: PublicAssetPacks,
  privateAssetPackListingDatas: Array<PrivateAssetPackListingData>,
  privateGameTemplateListingDatas: Array<PrivateGameTemplateListingData>,
  onPublicAssetPackSelection: (arg1: PublicAssetPack) => void,
  onPrivateAssetPackSelection: (arg1: PrivateAssetPackListingData) => void,
  onPrivateGameTemplateSelection: (arg1: PrivateGameTemplateListingData) => void,
  onCategorySelection: (arg1: string) => void,
  openedShopCategory: string | null,
  hideGameTemplates?: boolean,
  displayPromotions?: boolean
};

// @ts-expect-error - TS2345 - Argument of type '({ publicAssetPacks: { starterPacks }, privateAssetPackListingDatas, privateGameTemplateListingDatas, onPublicAssetPackSelection, onPrivateAssetPackSelection, onPrivateGameTemplateSelection, onCategorySelection, openedShopCategory, hideGameTemplates, displayPromotions, }: Props, ref: ForwardedRef<Props>) => Element' is not assignable to parameter of type 'ForwardRefRenderFunction<Props, AssetsHomeInterface>'.
export const AssetsHome = React.forwardRef<Props, AssetsHomeInterface>((
  {
    publicAssetPacks: { starterPacks },
    privateAssetPackListingDatas,
    privateGameTemplateListingDatas,
    onPublicAssetPackSelection,
    onPrivateAssetPackSelection,
    onPrivateGameTemplateSelection,
    onCategorySelection,
    openedShopCategory,
    hideGameTemplates,
    displayPromotions,
  }: Props,
  ref
) => {
  const { windowSize, isLandscape } = useResponsiveWindowSize();
  const { receivedAssetPacks, receivedGameTemplates } = React.useContext(
    AuthenticatedUserContext
  );

  const scrollView = React.useRef<ScrollViewInterface | null | undefined>(null);
// @ts-expect-error - TS2740 - Type '{ getScrollPosition: () => any; scrollToPosition: (y: number) => void; }' is missing the following properties from type 'Props': publicAssetPacks, privateAssetPackListingDatas, privateGameTemplateListingDatas, onPublicAssetPackSelection, and 4 more.
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

  const categoryTiles = React.useMemo(
    () =>
      Object.entries(shopCategories).map(
        // $FlowExpectedError - Object.entries does not infer well the type of the value.
        ([id, { title, imageSource, imageAlt }]: [any, any]) =>
          hideGameTemplates && id === 'game-template' ? null : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <CategoryTile
              // This id would be more appropriate if it was shop-category-...
              // but it is kept as is to avoid breaking some guided lessons using this
              // id to add prefabs for instance.
              id={`asset-pack-category-${id.replace(/\s/g, '-')}`}
              key={id}
              imageSource={imageSource}
              imageAlt={imageAlt}
              title={title}
              onSelect={() => {
                onCategorySelection(id);
              }}
            />
          )
      ),
    [onCategorySelection, hideGameTemplates]
  );

  const openedShopCategoryTitle = openedShopCategory
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ readonly 'game-template': { readonly title: Element; readonly imageAlt: "Premium game templates category"; readonly imageSource: "res/shop-categories/Game_Templates.jpeg"; }; ... 7 more ...; readonly sounds: { ...; }; }'.
    ? shopCategories[openedShopCategory].title
    : null;

  const starterPacksTiles: Array<React.ReactNode> = starterPacks
    .filter(
      assetPack =>
        !openedShopCategory ||
        assetPack.categories.includes(openedShopCategory)
    )
    .map((assetPack, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <PublicAssetPackTile
        assetPack={assetPack}
        onSelect={() => onPublicAssetPackSelection(assetPack)}
        key={`${assetPack.tag}-${index}`}
      />
    ));

  const { allStandAloneTiles, allBundleTiles } = React.useMemo(
    () => {
      const privateAssetPackStandAloneTiles: Array<React.ReactNode> = [];
      const privateOwnedAssetPackStandAloneTiles: Array<React.ReactNode> = [];
      const privateAssetPackBundleTiles: Array<React.ReactNode> = [];
      const privateOwnedAssetPackBundleTiles: Array<React.ReactNode> = [];

      privateAssetPackListingDatas
        .filter(
          assetPackListingData =>
            !openedShopCategory ||
            assetPackListingData.categories.includes(openedShopCategory)
        )
        .forEach(assetPackListingData => {
          const isPackOwned =
            !!receivedAssetPacks &&
            !!receivedAssetPacks.find(
              pack => pack.id === assetPackListingData.id
            );
          const tile = (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <PrivateAssetPackTile
              assetPackListingData={assetPackListingData}
              onSelect={() => {
                onPrivateAssetPackSelection(assetPackListingData);
              }}
              owned={isPackOwned}
              key={assetPackListingData.id}
            />
          );
          if (
            assetPackListingData.includedListableProductIds &&
            !!assetPackListingData.includedListableProductIds.length
          ) {
            if (isPackOwned) {
              privateOwnedAssetPackBundleTiles.push(tile);
            } else {
              privateAssetPackBundleTiles.push(tile);
            }
          } else {
            if (isPackOwned) {
              privateOwnedAssetPackStandAloneTiles.push(tile);
            } else {
              privateAssetPackStandAloneTiles.push(tile);
            }
          }
        });

      const allBundleTiles = [
        ...privateOwnedAssetPackBundleTiles, // Display owned bundles first.
        ...privateAssetPackBundleTiles,
      ];

      const allStandAloneTiles = [
        ...privateOwnedAssetPackStandAloneTiles, // Display owned packs first.
        ...mergeArraysPerGroup(
          privateAssetPackStandAloneTiles,
          starterPacksTiles,
          2,
          1
        ),
      ];

      return { allStandAloneTiles, allBundleTiles };
    },
    [
      privateAssetPackListingDatas,
      openedShopCategory,
      onPrivateAssetPackSelection,
      starterPacksTiles,
      receivedAssetPacks,
    ]
  );

  const gameTemplateTiles = React.useMemo(
    () => {
      // Only show game templates if the category is not set or is set to "game-template".
      return privateGameTemplateListingDatas
        .filter(
          privateGameTemplateListingData =>
            !openedShopCategory || openedShopCategory === 'game-template'
        )
        .map((privateGameTemplateListingData, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <PrivateGameTemplateTile
            privateGameTemplateListingData={privateGameTemplateListingData}
            onSelect={() => {
              onPrivateGameTemplateSelection(privateGameTemplateListingData);
            }}
            owned={
              !!receivedGameTemplates &&
              !!receivedGameTemplates.find(
                pack => pack.id === privateGameTemplateListingData.id
              )
            }
            key={privateGameTemplateListingData.id}
          />
        ));
    },
    [
      privateGameTemplateListingDatas,
      openedShopCategory,
      onPrivateGameTemplateSelection,
      receivedGameTemplates,
    ]
  );

  const {
    displayedList: displayedStandAloneTiles,
    onShowMore: onShowMoreStandAloneTiles,
  } = useProgressiveReveal({
    list: allStandAloneTiles,
    numberPerPage: 25,
  });

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ScrollView
      ref={scrollView}
      id="asset-store-home"
      data={{ isFiltered: !!openedShopCategory ? 'true' : 'false' }}
// @ts-expect-error - TS7031 - Binding element 'remainingScreensToBottom' implicitly has an 'any' type.
      onScroll={({ remainingScreensToBottom }) => {
        if (remainingScreensToBottom <= 1.5) {
          onShowMoreStandAloneTiles();
        }
      }}
    >
      {openedShopCategory ? null : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>Explore by category</Trans>
              </Text>
            </Line>
          </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <GridList
            cols={getCategoryColumns(windowSize, isLandscape)}
            style={styles.grid}
            cellHeight="auto"
            spacing={cellSpacing}
          >
            {categoryTiles}
          </GridList>
        </>
      )}
      {displayPromotions ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ColumnStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Promotions</Trans>
          </Text>

{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <PromotionsSlideshow />
        </ColumnStackLayout>
      ) : null}
      {allBundleTiles.length ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>Bundles</Trans>
              </Text>
            </Line>
          </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <GridList
            cols={getShopItemsColumns(windowSize, isLandscape)}
            style={styles.grid}
            cellHeight="auto"
            spacing={cellSpacing}
          >
            {allBundleTiles}
          </GridList>
        </>
      ) : null}
      {openedShopCategoryTitle && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text size="block-title">{openedShopCategoryTitle}</Text>
          </Line>
        </Column>
      )}
      {!hideGameTemplates && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <>
          {!openedShopCategoryTitle && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>All game templates</Trans>
                </Text>
              </Line>
            </Column>
          )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <GridList
            cols={getShopItemsColumns(windowSize, isLandscape)}
            style={styles.grid}
            cellHeight="auto"
            spacing={cellSpacing}
          >
            {gameTemplateTiles}
          </GridList>
        </>
      )}
      {!openedShopCategoryTitle && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>All asset packs</Trans>
            </Text>
          </Line>
        </Column>
      )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <GridList
        cols={getShopItemsColumns(windowSize, isLandscape)}
        style={styles.grid}
        cellHeight="auto"
        spacing={cellSpacing}
      >
        {displayedStandAloneTiles}
      </GridList>
    </ScrollView>
  );
});
