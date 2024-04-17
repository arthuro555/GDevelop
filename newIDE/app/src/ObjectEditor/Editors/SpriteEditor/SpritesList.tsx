import { Trans, t } from '@lingui/macro';

import { I18n as I18nType } from '@lingui/core';
import * as React from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { mapFor } from '../../../Utils/MapFor';

import DirectionTools from './DirectionTools';

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

import RaisedButtonWithSplitMenu from '../../../UI/RaisedButtonWithSplitMenu';
import useForceUpdate from '../../../Utils/UseForceUpdate';
import {
  ColumnStackLayout,
  ResponsiveLineStackLayout,
} from '../../../UI/Layout';

import { Column } from '../../../UI/Grid';

import Add from '../../../UI/CustomSvgIcons/Add';
import ContextMenu, {
  ContextMenuInterface,
} from '../../../UI/Menu/ContextMenu';
import useAlertDialog from '../../../UI/Alert/useAlertDialog';
import { groupResourcesByAnimations } from './AnimationImportHelper';
import { ResourceExternalEditor } from '../../../ResourcesList/ResourceExternalEditor';

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
      <div style={styles.spritesList}>
        {[
          ...mapFor(0, spritesCount, (i) => {
            const sprite = direction.getSprite(i);
            return hasMoreThanOneSprite ? (
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
                onSelect={(selected) => onSelectSprite(sprite, selected)}
                resourcesLoader={resourcesLoader}
                project={project}
              />
            ) : (
              // If there is only one sprite, don't make it draggable.

              <ImageThumbnail
                key={sprite.ptr}
                selectable
                selected={!!selectedSprites[sprite.ptr]}
                onSelect={(selected) => onSelectSprite(sprite, selected)}
                onContextMenu={(x, y) => onOpenSpriteContextMenu(x, y, sprite)}
                resourceName={sprite.getImageName()}
                resourcesLoader={resourcesLoader}
                project={project}
              />
            );
          }),
          spritesCount === 0 && (
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
const checkDirectionPointsAndCollisionsMasks = (direction: gd.Direction) => {
  let allDirectionSpritesHaveSamePoints = false;
  let allDirectionSpritesHaveSameCollisionMasks = false;
  const firstDirectionSprite =
    direction.getSpritesCount() > 0 ? direction.getSprite(0) : null;
  if (firstDirectionSprite) {
    allDirectionSpritesHaveSamePoints = allDirectionSpritesHaveSamePointsAs(
      firstDirectionSprite,
      direction
    );
    allDirectionSpritesHaveSameCollisionMasks =
      allDirectionSpritesHaveSameCollisionMasksAs(
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
  animations: gd.SpriteAnimationList
) => {
  let allObjectSpritesHaveSamePoints = false;
  let allObjectSpritesHaveSameCollisionMasks = false;
  const firstObjectSprite = getCurrentElements(animations, 0, 0, 0).sprite;

  if (firstObjectSprite) {
    allObjectSpritesHaveSamePoints = allObjectSpritesHaveSamePointsAs(
      firstObjectSprite,
      animations
    );
    allObjectSpritesHaveSameCollisionMasks =
      allObjectSpritesHaveSameCollisionMaskAs(firstObjectSprite, animations);
  }

  return {
    allObjectSpritesHaveSamePoints,
    allObjectSpritesHaveSameCollisionMasks,
  };
};

export const applyPointsAndMasksToSpriteIfNecessary = (
  animations: gd.SpriteAnimationList,
  direction: gd.Direction,
  sprite: gd.Sprite
) => {
  const {
    allDirectionSpritesHaveSameCollisionMasks,
    allDirectionSpritesHaveSamePoints,
  } = checkDirectionPointsAndCollisionsMasks(direction);
  const {
    allObjectSpritesHaveSameCollisionMasks,
    allObjectSpritesHaveSamePoints,
  } = checkObjectPointsAndCollisionsMasks(animations);
  const shouldUseFullImageCollisionMask =
    isFirstSpriteUsingFullImageCollisionMask(animations);
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
  animations: gd.SpriteAnimationList,
  direction: gd.Direction,
  resource: gd.Resource,
  onSpriteAdded: (sprite: gd.Sprite) => void
) => {
  const sprite = new gd.Sprite();
  sprite.setImageName(resource.getName());

  applyPointsAndMasksToSpriteIfNecessary(animations, direction, sprite);

  onSpriteAdded(sprite); // Call the callback before `addSprite`, as `addSprite` will store a copy of it.
  direction.addSprite(sprite);
  sprite.delete();
};

type Props = {
  animations: gd.SpriteAnimationList;
  direction: gd.Direction;
  project: gd.Project;
  resourcesLoader: typeof ResourcesLoader;
  resourceManagementProps: ResourceManagementProps;
  editDirectionWith: (
    i18n: I18nType,
    arg2: ResourceExternalEditor,
    direction: gd.Direction
  ) => Promise<void>;
  onReplaceByDirection: (newDirection: gd.Direction) => void;
  onSpriteAdded: (sprite: gd.Sprite) => void;
  onSpriteUpdated?: () => void;
  onFirstSpriteUpdated?: () => void;
  addAnimations: (
    resourcesByAnimation: Map<string, Array<gd.Resource>>
  ) => void;
  onChangeName: (newAnimationName: string) => void; // Used by piskel to set the name, if there is no name,
  objectName: string; // This is used for the default name of images created with Piskel.,
  animationName: string; // This is used for the default name of images created with Piskel.
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
    [key: number]: boolean;
  }>({});
  const spriteContextMenu = React.useRef<
    ContextMenuInterface | null | undefined
  >(null);
  const forceUpdate = useForceUpdate();

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
          const previousSelectionStatus =
            !!selectedSprites.current[
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
          const previousSelectionStatus =
            !!selectedSprites.current[
              direction.getSprite(previousSpriteIndex).ptr
            ];
          selectedSprites.current[spriteAtIndex.ptr] = previousSelectionStatus;
        }
      }
    },
    [direction]
  );

  const onSortEnd = React.useCallback(
    ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => {
      if (oldIndex === newIndex) return;
      // We store the selection value of the moved sprite, as its pointer will
      // be changed by the move.
      const wasMovedItemSelected =
        !!selectedSprites.current[direction.getSprite(oldIndex).ptr];
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
      resources.forEach((resource) => {
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
      resources.forEach((resource) => resource.delete());

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

  const deleteSprites = React.useCallback(async () => {
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

    mapFor(0, animations.getAnimationsCount(), (index) => {
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
  }, [
    onSpriteUpdated,
    onFirstSpriteUpdated,
    animations,
    forceUpdate,
    showConfirmation,
    direction,
  ]);

  const duplicateSprites = React.useCallback(() => {
    const sprites = selectedSprites.current;

    mapFor(0, animations.getAnimationsCount(), (index) => {
      const animation = animations.getAnimation(index);
      duplicateSpritesInAnimation(animation, sprites);
    });

    // Clear selection after duplication.
    selectedSprites.current = {};
    forceUpdate();
    if (onSpriteUpdated) onSpriteUpdated();
  }, [onSpriteUpdated, animations, forceUpdate]);

  const addSpriteToSelection = React.useCallback(
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
    (sprite: gd.Sprite) => {
      selectedSprites.current = {
        [sprite.ptr]: true,
      };
      forceUpdate();
    },
    [forceUpdate]
  );

  const openSpriteContextMenu = React.useCallback(
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
    .filter((source) => source.kind === 'image')
    .filter(
      ({ onlyForStorageProvider }) =>
        !onlyForStorageProvider ||
        onlyForStorageProvider === storageProvider.internalName
    );

  return (
    <ColumnStackLayout noMargin>
      <DirectionTools
        animationName={animationName}
        direction={direction}
        resourcesLoader={resourcesLoader}
        project={project}
        resourceExternalEditors={
          resourceManagementProps.resourceExternalEditors
        }
        onEditWith={(i18n, ResourceExternalEditor) =>
          editDirectionWith(i18n, ResourceExternalEditor, direction)
        }
        onDirectionUpdated={onSpriteUpdated}
      />
      <ResponsiveLineStackLayout noMargin expand alignItems="center">
        <SortableList
          // @ts-expect-error - TS2322 - Type '{ resourcesLoader: typeof ResourcesLoader; direction: gd.Direction; project: gd.Project; onSortEnd: ({ oldIndex, newIndex, }: { oldIndex: number; newIndex: number; }) => void; onAddSprite: (resourceSource: ResourceSource) => Promise<...>; ... 6 more ...; axis: "x"; }' is not assignable to type 'IntrinsicAttributes & IntrinsicClassAttributes<Component<SortableContainerProps, any, any>> & Readonly<...>'.
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
        <ContextMenu
// @ts-expect-error - TS2322 - Type 'MutableRefObject<ContextMenuInterface | null | undefined>' is not assignable to type 'Ref<ContextMenuInterface> | undefined'.
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
        <Column noMargin>
          <RaisedButtonWithSplitMenu
            onClick={() => {
              onAddSprite(resourceSources[0]);
            }}
            // The event-based object editor gives an empty list.
            disabled={resourceSources.length === 0}
            label={<Trans>Add a sprite</Trans>}
            icon={<Add />}
            primary
            buildMenuTemplate={(i18n: I18nType) => {
              const storageProvider =
                resourceManagementProps.getStorageProvider();
              return resourceManagementProps.resourceSources
                .filter((source) => source.kind === 'image')
                .filter(
                  ({ onlyForStorageProvider }) =>
                    !onlyForStorageProvider ||
                    onlyForStorageProvider === storageProvider.internalName
                )
                .map((source) => ({
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
