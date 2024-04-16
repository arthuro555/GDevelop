// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans, t} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
import * as React from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { mapFor } from '../../../Utils/MapFor';
// @ts-expect-error - TS6142 - Module './DirectionTools' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectEditor/Editors/SpriteEditor/DirectionTools.tsx', but '--jsx' is not set.
import DirectionTools from './DirectionTools';
// @ts-expect-error - TS6142 - Module '../../../ResourcesList/ResourceThumbnail/ImageThumbnail' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/ResourceThumbnail/ImageThumbnail.tsx', but '--jsx' is not set.
import ImageThumbnail from '../../../ResourcesList/ResourceThumbnail/ImageThumbnail';
import {
  copySpritePoints,
  copySpritePolygons,
  allDirectionSpritesHaveSamePointsAs,
  allDirectionSpritesHaveSameCollisionMasksAs,
  deleteSpritesFromAnimation,
  duplicateSpritesInAnimation,
  isFirstSpriteUsingFullImageCollisionMask,
  allObjectSpritesHaveSameCollisionMaskAs,
  allObjectSpritesHaveSamePointsAs,
  getCurrentElements,
  getTotalSpritesCount,
} from './Utils/SpriteObjectHelper';
import ResourcesLoader from '../../../ResourcesLoader';
import {
  ResourceSource,
  ResourceManagementProps,
} from '../../../ResourcesList/ResourceSource';
import { applyResourceDefaults } from '../../../ResourcesList/ResourceUtils';
// @ts-expect-error - TS6142 - Module '../../../UI/RaisedButtonWithSplitMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButtonWithSplitMenu.tsx', but '--jsx' is not set.
import RaisedButtonWithSplitMenu from '../../../UI/RaisedButtonWithSplitMenu';
import useForceUpdate from '../../../Utils/UseForceUpdate';
import {
  ColumnStackLayout,
  ResponsiveLineStackLayout,
// @ts-expect-error - TS6142 - Module '../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
} from '../../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column } from '../../../UI/Grid';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/Add'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Add.js' implicitly has an 'any' type.
import Add from '../../../UI/CustomSvgIcons/Add';
import ContextMenu, {
  ContextMenuInterface,
// @ts-expect-error - TS6142 - Module '../../../UI/Menu/ContextMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Menu/ContextMenu.tsx', but '--jsx' is not set.
} from '../../../UI/Menu/ContextMenu';
import useAlertDialog from '../../../UI/Alert/useAlertDialog';
import { groupResourcesByAnimations } from './AnimationImportHelper';
import { ResourceExternalEditor } from '../../../ResourcesList/ResourceExternalEditor';

const gd: libGDevelop = global.gd;

const SPRITE_SIZE = 100; //TODO: Factor with Thumbnail

const styles = {
  spritesList: {
    whiteSpace: 'nowrap',
    overflowY: 'hidden',
    flex: 1,
  },
  thumbnailExtraStyle: {
    marginLeft: 5,
  },
  spriteThumbnailImage: {
    maxWidth: SPRITE_SIZE,
    maxHeight: SPRITE_SIZE,
    verticalAlign: 'middle',
  },
} as const;

const SortableSpriteThumbnail = SortableElement(
// @ts-expect-error - TS2345 - Argument of type '({ sprite, project, resourcesLoader, selected, onSelect, onContextMenu, isFirst, }: { sprite: any; project: any; resourcesLoader: any; selected: any; onSelect: any; onContextMenu: any; isFirst: any; }) => Element' is not assignable to parameter of type 'WrappedComponent<unknown>'.
  ({
    sprite,
    project,
    resourcesLoader,
    selected,
    onSelect,
    onContextMenu,
    isFirst,
  }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ImageThumbnail
      selectable
      selected={selected}
      onSelect={onSelect}
      onContextMenu={onContextMenu}
      resourceName={sprite.getImageName()}
      resourcesLoader={resourcesLoader}
      project={project}
      style={isFirst ? {} : styles.thumbnailExtraStyle}
    />
  )
);

const SortableList = SortableContainer(
// @ts-expect-error - TS2345 - Argument of type '({ direction, project, resourcesLoader, resourceManagementProps, selectedSprites, onSelectSprite, onOpenSpriteContextMenu, }: { direction: any; project: any; resourcesLoader: any; resourceManagementProps: any; selectedSprites: any; onSelectSprite: any; onOpenSpriteContextMenu: any; }) => Element' is not assignable to parameter of type 'WrappedComponent<unknown>'.
  ({
    direction,
    project,
    resourcesLoader,
    resourceManagementProps,
    selectedSprites,
    onSelectSprite,
    onOpenSpriteContextMenu,
  }) => {
    const spritesCount = direction.getSpritesCount();
    const hasMoreThanOneSprite = spritesCount > 1;
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <div style={styles.spritesList}>
        {[
// @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type.
          ...mapFor(0, spritesCount, i => {
            const sprite = direction.getSprite(i);
            return hasMoreThanOneSprite ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <SortableSpriteThumbnail
// @ts-expect-error - TS2322 - Type '{ sprite: any; key: any; index: any; isFirst: boolean; selected: boolean; onContextMenu: (x: any, y: any) => any; onSelect: (selected: any) => any; resourcesLoader: any; project: any; }' is not assignable to type 'IntrinsicAttributes & IntrinsicClassAttributes<Component<SortableElementProps, any, any>> & Readonly<...>'.
                sprite={sprite}
                key={sprite.ptr}
                index={i}
                isFirst={i === 0}
                selected={!!selectedSprites[sprite.ptr]}
// @ts-expect-error - TS7006 - Parameter 'x' implicitly has an 'any' type. | TS7006 - Parameter 'y' implicitly has an 'any' type.
                onContextMenu={(x, y) => onOpenSpriteContextMenu(x, y, sprite)}
// @ts-expect-error - TS7006 - Parameter 'selected' implicitly has an 'any' type.
                onSelect={selected => onSelectSprite(sprite, selected)}
                resourcesLoader={resourcesLoader}
                project={project}
              />
            ) : (
              // If there is only one sprite, don't make it draggable.
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <ImageThumbnail
                key={sprite.ptr}
                selectable
                selected={!!selectedSprites[sprite.ptr]}
// @ts-expect-error - TS7006 - Parameter 'selected' implicitly has an 'any' type.
                onSelect={selected => onSelectSprite(sprite, selected)}
// @ts-expect-error - TS7006 - Parameter 'x' implicitly has an 'any' type. | TS7006 - Parameter 'y' implicitly has an 'any' type.
                onContextMenu={(x, y) => onOpenSpriteContextMenu(x, y, sprite)}
                resourceName={sprite.getImageName()}
                resourcesLoader={resourcesLoader}
                project={project}
              />
            );
          }),
          spritesCount === 0 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <ImageThumbnail
              key="empty"
              project={project}
              resourceName=""
              resourcesLoader={resourcesLoader}
            />
          ),
        ]}
      </div>
    );
  }
);

/**
 * Check if all sprites of the given direction have the same points and collision masks
 */
const checkDirectionPointsAndCollisionsMasks = (direction: gdDirection) => {
  let allDirectionSpritesHaveSamePoints = false;
  let allDirectionSpritesHaveSameCollisionMasks = false;
  const firstDirectionSprite =
    direction.getSpritesCount() > 0 ? direction.getSprite(0) : null;
  if (firstDirectionSprite) {
    allDirectionSpritesHaveSamePoints = allDirectionSpritesHaveSamePointsAs(
      firstDirectionSprite,
      direction
    );
    allDirectionSpritesHaveSameCollisionMasks = allDirectionSpritesHaveSameCollisionMasksAs(
      firstDirectionSprite,
      direction
    );
  }

  return {
    allDirectionSpritesHaveSamePoints,
    allDirectionSpritesHaveSameCollisionMasks,
  };
};

/**
 * Check if all sprites of the object have the same points and collision masks
 */
const checkObjectPointsAndCollisionsMasks = (
  animations: gdSpriteAnimationList
) => {
  let allObjectSpritesHaveSamePoints = false;
  let allObjectSpritesHaveSameCollisionMasks = false;
  const firstObjectSprite = getCurrentElements(animations, 0, 0, 0).sprite;

  if (firstObjectSprite) {
    allObjectSpritesHaveSamePoints = allObjectSpritesHaveSamePointsAs(
      firstObjectSprite,
      animations
    );
    allObjectSpritesHaveSameCollisionMasks = allObjectSpritesHaveSameCollisionMaskAs(
      firstObjectSprite,
      animations
    );
  }

  return {
    allObjectSpritesHaveSamePoints,
    allObjectSpritesHaveSameCollisionMasks,
  };
};

export const applyPointsAndMasksToSpriteIfNecessary = (
  animations: gdSpriteAnimationList,
  direction: gdDirection,
  sprite: gdSprite
) => {
  const {
    allDirectionSpritesHaveSameCollisionMasks,
    allDirectionSpritesHaveSamePoints,
  } = checkDirectionPointsAndCollisionsMasks(direction);
  const {
    allObjectSpritesHaveSameCollisionMasks,
    allObjectSpritesHaveSamePoints,
  } = checkObjectPointsAndCollisionsMasks(animations);
  const shouldUseFullImageCollisionMask = isFirstSpriteUsingFullImageCollisionMask(
    animations
  );
  const firstObjectSprite = getCurrentElements(animations, 0, 0, 0).sprite;
  const firstDirectionSprite =
    direction.getSpritesCount() > 0 ? direction.getSprite(0) : null;

  // Copy points if toggles were set before adding the sprite.
  if (allObjectSpritesHaveSamePoints && firstObjectSprite) {
    // Copy points from the first sprite of the object, if existing.
    copySpritePoints(firstObjectSprite, sprite);
  } else if (allDirectionSpritesHaveSamePoints && firstDirectionSprite) {
    // Copy points from the first sprite of the direction, if this is not the first one we add.
    copySpritePoints(firstDirectionSprite, sprite);
  }

  // Copy collision masks if toggles were set before adding the sprite.
  if (allObjectSpritesHaveSameCollisionMasks && firstObjectSprite) {
    // Copy collision masks from the first sprite of the object, if existing.
    copySpritePolygons(firstObjectSprite, sprite);
  } else if (
    allDirectionSpritesHaveSameCollisionMasks &&
    firstDirectionSprite
  ) {
    // Copy collision masks from the first sprite of the direction, if this is not the first one we add.
    copySpritePolygons(firstDirectionSprite, sprite);
  }

  if (shouldUseFullImageCollisionMask) {
    sprite.setFullImageCollisionMask(true);
  }
};

export const addAnimationFrame = (
  animations: gdSpriteAnimationList,
  direction: gdDirection,
  resource: gdResource,
  onSpriteAdded: (sprite: gdSprite) => void
) => {
  const sprite = new gd.Sprite();
  sprite.setImageName(resource.getName());

  applyPointsAndMasksToSpriteIfNecessary(animations, direction, sprite);

  onSpriteAdded(sprite); // Call the callback before `addSprite`, as `addSprite` will store a copy of it.
  direction.addSprite(sprite);
  sprite.delete();
};

type Props = {
  animations: gdSpriteAnimationList,
  direction: gdDirection,
  project: gdProject,
  resourcesLoader: typeof ResourcesLoader,
  resourceManagementProps: ResourceManagementProps,
  editDirectionWith: (i18n: I18nType, arg2: ResourceExternalEditor, direction: gdDirection) => Promise<void>,
  onReplaceByDirection: (newDirection: gdDirection) => void,
  onSpriteAdded: (sprite: gdSprite) => void,
  onSpriteUpdated?: () => void,
  onFirstSpriteUpdated?: () => void,
  addAnimations: (resourcesByAnimation: Map<string, Array<gdResource>>) => void,
  onChangeName: (newAnimationName: string) => void // Used by piskel to set the name, if there is no name,
  objectName: string // This is used for the default name of images created with Piskel.,
  animationName: string // This is used for the default name of images created with Piskel.
};

const SpritesList = ({
  animations,
  direction,
  project,
  resourcesLoader,
  resourceManagementProps,
  editDirectionWith,
  onReplaceByDirection,
  onSpriteAdded,
  onSpriteUpdated,
  onFirstSpriteUpdated,
  addAnimations,
  onChangeName,
  objectName,
  animationName,
}: Props) => {
  // It's important to save the selected sprites in a ref, so that
  // we can update the selection when a context menu is opened without relying on the state.
  // Otherwise, the selection would be updated after the context menu is opened.
  // Then, we need to ensure we trigger a force-update every time the selection changes.
  const selectedSprites = React.useRef<{
    [key: number]: boolean
  }>({});
  const spriteContextMenu = React.useRef<ContextMenuInterface | null | undefined>(null);
  const forceUpdate = useForceUpdate();
// @ts-expect-error - TS2339 - Property 'showConfirmation' does not exist on type 'void'.
  const { showConfirmation } = useAlertDialog();

  const updateSelectionIndexesAfterMoveUp = React.useCallback(
    (oldIndex: number, newIndex: number, wasMovedItemSelected: boolean) => {
      for (let i = oldIndex; i <= newIndex; ++i) {
        const spriteAtIndex = direction.getSprite(i);
        if (i === newIndex) {
          // If this is the new index of the moved sprite, we keep its selection status.
          selectedSprites.current[spriteAtIndex.ptr] = wasMovedItemSelected;
        } else {
          // If moving up, the other sprites are going down, so their previous index was i+1.
          const previousSpriteIndex = i + 1;
          const previousSelectionStatus = !!selectedSprites.current[
            direction.getSprite(previousSpriteIndex).ptr
          ];
          selectedSprites.current[spriteAtIndex.ptr] = previousSelectionStatus;
        }
      }
    },
    [direction]
  );

  const updateSelectionIndexesAfterMoveDown = React.useCallback(
    (oldIndex: number, newIndex: number, wasMovedItemSelected: boolean) => {
      for (let i = oldIndex; i >= newIndex; --i) {
        const spriteAtIndex = direction.getSprite(i);
        if (i === newIndex) {
          // If this is the new index of the moved sprite, we keep its selection status.
          selectedSprites.current[spriteAtIndex.ptr] = wasMovedItemSelected;
        } else {
          // If moving down, the other sprites are going up, so their previous index was i-1.
          const previousSpriteIndex = i - 1;
          const previousSelectionStatus = !!selectedSprites.current[
            direction.getSprite(previousSpriteIndex).ptr
          ];
          selectedSprites.current[spriteAtIndex.ptr] = previousSelectionStatus;
        }
      }
    },
    [direction]
  );

  const onSortEnd = React.useCallback(
    ({
      oldIndex,
      newIndex,
    }: {
      oldIndex: number,
      newIndex: number
    }) => {
      if (oldIndex === newIndex) return;
      // We store the selection value of the moved sprite, as its pointer will
      // be changed by the move.
      const wasMovedItemSelected = !!selectedSprites.current[
        direction.getSprite(oldIndex).ptr
      ];
      direction.moveSprite(oldIndex, newIndex);

      // When moving a sprite, the pointers are all shifted, so we need to
      // update the selectedSprites map for the user not to lose their selection.
      if (oldIndex < newIndex) {
        updateSelectionIndexesAfterMoveUp(
          oldIndex,
          newIndex,
          wasMovedItemSelected
        );
      } else {
        updateSelectionIndexesAfterMoveDown(
          oldIndex,
          newIndex,
          wasMovedItemSelected
        );
      }

      forceUpdate();
      onSpriteUpdated && onSpriteUpdated();
      if (oldIndex === 0 || newIndex === 0) {
        // If a sprite was moved from or to the first position,
        // then the first sprite has changed.
        onFirstSpriteUpdated && onFirstSpriteUpdated();
      }
    },
    [
      direction,
      forceUpdate,
      onSpriteUpdated,
      onFirstSpriteUpdated,
      updateSelectionIndexesAfterMoveDown,
      updateSelectionIndexesAfterMoveUp,
    ]
  );

  const onAddSprite = React.useCallback(
    async (resourceSource: ResourceSource) => {
      const directionSpritesCountBeforeAdding = direction.getSpritesCount();

      const resources = await resourceManagementProps.onChooseResource({
        initialSourceName: resourceSource.name,
        multiSelection: true,
        resourceKind: 'image',
      });
      resources.forEach(resource => {
        applyResourceDefaults(project, resource);
        project.getResourcesManager().addResource(resource);
      });

      if (directionSpritesCountBeforeAdding === 0 && resources.length > 1) {
        const resourcesByAnimation = groupResourcesByAnimations(resources);
        if (resourcesByAnimation.size > 1) {
          addAnimations(resourcesByAnimation);
        } else {
          // Use `resourcesByAnimation` because frames are sorted.
          for (const resources of resourcesByAnimation.values()) {
            for (const resource of resources) {
              addAnimationFrame(animations, direction, resource, onSpriteAdded);
            }
          }
        }
      } else {
        for (const resource of resources) {
          addAnimationFrame(animations, direction, resource, onSpriteAdded);
        }
      }

      // Important, we are responsible for deleting the resources that were given to us.
      // Otherwise we have a memory leak, as calling addResource is making a copy of the resource.
      resources.forEach(resource => resource.delete());

      forceUpdate();

      await resourceManagementProps.onFetchNewlyAddedResources();

      if (resources.length && onSpriteUpdated) onSpriteUpdated();
      if (directionSpritesCountBeforeAdding === 0 && onFirstSpriteUpdated) {
        // If there was no sprites before, we can assume the first sprite was added.
        onFirstSpriteUpdated();
      }
    },
    [
      direction,
      resourceManagementProps,
      forceUpdate,
      onSpriteUpdated,
      onFirstSpriteUpdated,
      project,
      addAnimations,
      animations,
      onSpriteAdded,
    ]
  );

  const deleteSprites = React.useCallback(
    async () => {
      const sprites = selectedSprites.current;
      const firstSpritePtr = animations
        .getAnimation(0)
        .getDirection(0)
        .getSprite(0).ptr;
      const isObjectFirstSpriteDeleted = !!sprites[firstSpritePtr];

      const totalSpritesCount = getTotalSpritesCount(animations);
      const isDeletingLastSprites =
        Object.keys(sprites).length === totalSpritesCount;
      const oneOfSpritesInCurrentDirection =
        direction.getSpritesCount() > 0 ? direction.getSprite(0) : null;

      const isUsingCustomCollisionMask =
        !animations.adaptCollisionMaskAutomatically() &&
        oneOfSpritesInCurrentDirection &&
        !oneOfSpritesInCurrentDirection.isFullImageCollisionMask();
      const shouldWarnBecauseLosingCustomCollisionMask =
        isDeletingLastSprites && isUsingCustomCollisionMask;

      if (shouldWarnBecauseLosingCustomCollisionMask) {
        const deleteAnswer = await showConfirmation({
          title: t`Remove the sprite`,
          message: t`You are about to remove the last sprite of this object, which has a custom collision mask. The custom collision mask will be lost. Are you sure you want to continue?`,
          confirmButtonLabel: t`Remove`,
          dismissButtonLabel: t`Cancel`,
        });
        if (!deleteAnswer) return;
      }

// @ts-expect-error - TS7006 - Parameter 'index' implicitly has an 'any' type.
      mapFor(0, animations.getAnimationsCount(), index => {
        const animation = animations.getAnimation(index);
        deleteSpritesFromAnimation(animation, sprites);
      });

      // Clear selection after deletion.
      selectedSprites.current = {};
      forceUpdate();
      if (onSpriteUpdated) onSpriteUpdated();
      if (isObjectFirstSpriteDeleted && onFirstSpriteUpdated)
        onFirstSpriteUpdated();
      if (shouldWarnBecauseLosingCustomCollisionMask) {
        // The user has deleted the last custom collision mask, so revert to automatic
        // collision mask adaptation.
        animations.setAdaptCollisionMaskAutomatically(true);
      }
    },
    [
      onSpriteUpdated,
      onFirstSpriteUpdated,
      animations,
      forceUpdate,
      showConfirmation,
      direction,
    ]
  );

  const duplicateSprites = React.useCallback(
    () => {
      const sprites = selectedSprites.current;
// @ts-expect-error - TS7006 - Parameter 'index' implicitly has an 'any' type.
      mapFor(0, animations.getAnimationsCount(), index => {
        const animation = animations.getAnimation(index);
        duplicateSpritesInAnimation(animation, sprites);
      });

      // Clear selection after duplication.
      selectedSprites.current = {};
      forceUpdate();
      if (onSpriteUpdated) onSpriteUpdated();
    },
    [onSpriteUpdated, animations, forceUpdate]
  );

  const addSpriteToSelection = React.useCallback(
// @ts-expect-error - TS7006 - Parameter 'sprite' implicitly has an 'any' type. | TS7006 - Parameter 'selected' implicitly has an 'any' type.
    (sprite, selected) => {
      selectedSprites.current = {
        ...selectedSprites.current,
        [sprite.ptr]: selected,
      };
      forceUpdate();
    },
    [forceUpdate]
  );

  const selectUniqueSprite = React.useCallback(
    (sprite: gdSprite) => {
      selectedSprites.current = {
        [sprite.ptr]: true,
      };
      forceUpdate();
    },
    [forceUpdate]
  );

  const openSpriteContextMenu = React.useCallback(
// @ts-expect-error - TS7006 - Parameter 'x' implicitly has an 'any' type. | TS7006 - Parameter 'y' implicitly has an 'any' type. | TS7006 - Parameter 'sprite' implicitly has an 'any' type.
    (x, y, sprite) => {
      // If the sprite is not selected, select only it.
      if (!selectedSprites.current[sprite.ptr]) {
        selectUniqueSprite(sprite);
      }
      // Otherwise, keep the selection as is.
      if (spriteContextMenu.current) {
        spriteContextMenu.current.open(x, y);
      }
    },
    [selectUniqueSprite]
  );

  const storageProvider = resourceManagementProps.getStorageProvider();
  const resourceSources = resourceManagementProps.resourceSources
    .filter(source => source.kind === 'image')
    .filter(
      ({ onlyForStorageProvider }) =>
        !onlyForStorageProvider ||
        onlyForStorageProvider === storageProvider.internalName
    );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <DirectionTools
        animationName={animationName}
        direction={direction}
        resourcesLoader={resourcesLoader}
        project={project}
        resourceExternalEditors={
          resourceManagementProps.resourceExternalEditors
        }
// @ts-expect-error - TS7006 - Parameter 'i18n' implicitly has an 'any' type. | TS7006 - Parameter 'ResourceExternalEditor' implicitly has an 'any' type.
        onEditWith={(i18n, ResourceExternalEditor) =>
          editDirectionWith(i18n, ResourceExternalEditor, direction)
        }
        onDirectionUpdated={onSpriteUpdated}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ResponsiveLineStackLayout noMargin expand alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SortableList
// @ts-expect-error - TS2322 - Type '{ resourcesLoader: typeof ResourcesLoader; direction: gdDirection; project: gdProject; onSortEnd: ({ oldIndex, newIndex, }: { oldIndex: number; newIndex: number; }) => void; onAddSprite: (resourceSource: ResourceSource) => Promise<...>; ... 6 more ...; axis: "x"; }' is not assignable to type 'IntrinsicAttributes & IntrinsicClassAttributes<Component<SortableContainerProps, any, any>> & Readonly<...>'.
          resourcesLoader={resourcesLoader}
          direction={direction}
          project={project}
          onSortEnd={onSortEnd}
          onAddSprite={onAddSprite}
          resourceManagementProps={resourceManagementProps}
          selectedSprites={selectedSprites.current}
          onSelectSprite={addSpriteToSelection}
          onOpenSpriteContextMenu={openSpriteContextMenu}
          helperClass="sortable-helper"
          lockAxis="x"
          axis="x"
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ContextMenu
          ref={spriteContextMenu}
          buildMenuTemplate={(i18n: I18nType) => [
            {
              label: i18n._(t`Delete selection`),
              click: deleteSprites,
            },
            {
              label: i18n._(t`Duplicate selection`),
              click: duplicateSprites,
            },
          ]}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <RaisedButtonWithSplitMenu
            onClick={() => {
              onAddSprite(resourceSources[0]);
            }}
            // The event-based object editor gives an empty list.
            disabled={resourceSources.length === 0}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Add a sprite</Trans>}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            icon={<Add />}
            primary
            buildMenuTemplate={(i18n: I18nType) => {
              const storageProvider = resourceManagementProps.getStorageProvider();
              return resourceManagementProps.resourceSources
                .filter(source => source.kind === 'image')
                .filter(
                  ({ onlyForStorageProvider }) =>
                    !onlyForStorageProvider ||
                    onlyForStorageProvider === storageProvider.internalName
                )
                .map(source => ({
                  label: i18n._(source.displayName),
                  click: () => onAddSprite(source),
                }));
            }}
          />
        </Column>
      </ResponsiveLineStackLayout>
    </ColumnStackLayout>
  );
};

export default SpritesList;
