import { mapVector, mapFor } from '../../../../Utils/MapFor';
import every from 'lodash/every';

/**
 * Return the specified animation, direction and sprite for a SpriteObject.
 * Returns null for these elements if the specified choice is not valid.
 */
export const getCurrentElements = (
  animations: gd.SpriteAnimationList,
  animationIndex: number,
  directionIndex: number,
  spriteIndex: number
) => {
  const hasValidAnimation = animationIndex < animations.getAnimationsCount();
  const animation = hasValidAnimation
    ? animations.getAnimation(animationIndex)
    : null;
  if (!animation) {
    return {
      animation: null,
      direction: null,
      sprite: null,
    };
  }

  const hasValidDirection = directionIndex < animation.getDirectionsCount();
  const direction = hasValidDirection
    ? animation.getDirection(directionIndex)
    : null;
  if (!direction) {
    return {
      animation,
      direction: null,
      sprite: null,
    };
  }

  const hasValidSprite = spriteIndex < direction.getSpritesCount();
  const sprite = hasValidSprite ? direction.getSprite(spriteIndex) : null;

  return {
    animation,
    direction,
    sprite,
  };
};

export const getTotalSpritesCount = (animations: gd.SpriteAnimationList) => {
  let totalSpritesCount = 0;
  for (
    let animationIndex = 0;
    animationIndex < animations.getAnimationsCount();
    animationIndex++
  ) {
    const animation = animations.getAnimation(animationIndex);
    for (
      let directionIndex = 0;
      directionIndex < animation.getDirectionsCount();
      directionIndex++
    ) {
      const direction = animation.getDirection(directionIndex);
      totalSpritesCount += direction.getSpritesCount();
    }
  }

  return totalSpritesCount;
};

/**
 * Return all the point names
 */
export const getAllPointNames = (animations: gd.SpriteAnimationList) => {
  const allPointNames = new Set();
  for (
    let animationIndex = 0;
    animationIndex < animations.getAnimationsCount();
    animationIndex++
  ) {
    const animation = animations.getAnimation(animationIndex);
    for (
      let directionIndex = 0;
      directionIndex < animation.getDirectionsCount();
      directionIndex++
    ) {
      const direction = animation.getDirection(directionIndex);
      for (
        let spriteIndex = 0;
        spriteIndex < direction.getSpritesCount();
        spriteIndex++
      ) {
        const points = direction
          .getSprite(spriteIndex)
          .getAllNonDefaultPoints();
        for (let pointIndex = 0; pointIndex < points.size(); pointIndex++) {
          const point = points.at(pointIndex);
          allPointNames.add(point.getName());
        }
      }
    }
  }
  return [...allPointNames];
};

export const copyPoint = (
  originalPoint: gd.Point,
  destinationPoint: gd.Point
) => {
  destinationPoint.setX(originalPoint.getX());
  destinationPoint.setY(originalPoint.getY());
  destinationPoint.setName(originalPoint.getName());
};

export const copySpritePoints = (
  originalSprite: gd.Sprite,
  destinationSprite: gd.Sprite
) => {
  if (originalSprite.ptr === destinationSprite.ptr) return;

  copyPoint(originalSprite.getCenter(), destinationSprite.getCenter());
  copyPoint(originalSprite.getOrigin(), destinationSprite.getOrigin());
  destinationSprite.setDefaultCenterPoint(
    originalSprite.isDefaultCenterPoint()
  );

  destinationSprite.getAllNonDefaultPoints().clear();

  mapVector(originalSprite.getAllNonDefaultPoints(), (originalPoint) => {
    destinationSprite.addPoint(originalPoint);
  });
};

export const copyAnimationsSpritePoints = (
  originalSprite: gd.Sprite,
  animation: gd.Animation
) => {
  mapFor(0, animation.getDirectionsCount(), (i) => {
    const direction = animation.getDirection(i);

    mapFor(0, direction.getSpritesCount(), (j) => {
      const sprite = direction.getSprite(j);
      copySpritePoints(originalSprite, sprite);
    });
  });
};

export const isSamePoint = (point1: gd.Point, point2: gd.Point) => {
  return (
    point1.getX() === point2.getX() &&
    point1.getY() === point2.getY() &&
    point1.getName() === point2.getName()
  );
};

export const haveSamePoints = (sprite1: gd.Sprite, sprite2: gd.Sprite) => {
  if (!isSamePoint(sprite1.getCenter(), sprite2.getCenter())) return false;
  if (!isSamePoint(sprite1.getOrigin(), sprite2.getOrigin())) return false;
  if (sprite1.isDefaultCenterPoint() !== sprite2.isDefaultCenterPoint())
    return false;

  if (
    sprite1.getAllNonDefaultPoints().size() !==
    sprite2.getAllNonDefaultPoints().size()
  )
    return false;

  return every(
    mapVector(sprite1.getAllNonDefaultPoints(), (sprite1Point) => {
      if (!sprite2.hasPoint(sprite1Point.getName())) return false;

      return isSamePoint(
        sprite1Point,
        sprite2.getPoint(sprite1Point.getName())
      );
    })
  );
};

export const allDirectionSpritesHaveSamePointsAs = (
  originalSprite: gd.Sprite,
  direction: gd.Direction
) => {
  return every(
    mapFor(0, direction.getSpritesCount(), (j) => {
      const sprite = direction.getSprite(j);
      return haveSamePoints(sprite, originalSprite);
    })
  );
};

export const allAnimationSpritesHaveSamePointsAs = (
  originalSprite: gd.Sprite,
  animation: gd.Animation
) => {
  return every(
    mapFor(0, animation.getDirectionsCount(), (i) => {
      const direction = animation.getDirection(i);
      return allDirectionSpritesHaveSamePointsAs(originalSprite, direction);
    })
  );
};

export const allObjectSpritesHaveSamePointsAs = (
  originalSprite: gd.Sprite,
  animations: gd.SpriteAnimationList
) => {
  return every(
    mapFor(0, animations.getAnimationsCount(), (i) => {
      const animation = animations.getAnimation(i);
      return allAnimationSpritesHaveSamePointsAs(originalSprite, animation);
    })
  );
};

export const copySpritePolygons = (
  originalSprite: gd.Sprite,
  destinationSprite: gd.Sprite
) => {
  if (originalSprite.ptr === destinationSprite.ptr) return;

  destinationSprite.setFullImageCollisionMask(
    originalSprite.isFullImageCollisionMask()
  );

  destinationSprite.getCustomCollisionMask().clear();

  mapVector(originalSprite.getCustomCollisionMask(), (originalPolygon) => {
    destinationSprite.getCustomCollisionMask().push_back(originalPolygon);
  });
};

export const copyAnimationsSpriteCollisionMasks = (
  originalSprite: gd.Sprite,
  animation: gd.Animation
) => {
  mapFor(0, animation.getDirectionsCount(), (i) => {
    const direction = animation.getDirection(i);

    mapFor(0, direction.getSpritesCount(), (j) => {
      const sprite = direction.getSprite(j);
      copySpritePolygons(originalSprite, sprite);
    });
  });
};

export const isSamePolygon = (
  polygon1: gd.Polygon2d,
  polygon2: gd.Polygon2d
) => {
  const polygon1Vertices = polygon1.getVertices();
  const polygon2Vertices = polygon2.getVertices();

  if (polygon1Vertices.size() !== polygon2Vertices.size()) return false;

  return every(
    mapVector(polygon1Vertices, (point1, index) => {
      const point2 = polygon2Vertices.at(index);
      return (
        point1.get_x() === point2.get_x() && point1.get_y() === point2.get_y()
      );
    })
  );
};

export const haveSameCollisionMasks = (
  sprite1: gd.Sprite,
  sprite2: gd.Sprite
) => {
  if (sprite1.isFullImageCollisionMask() !== sprite2.isFullImageCollisionMask())
    return false;

  if (sprite1.isFullImageCollisionMask() && sprite2.isFullImageCollisionMask())
    return true;

  const sprite1CollisionMask = sprite1.getCustomCollisionMask();
  const sprite2CollisionMask = sprite2.getCustomCollisionMask();

  if (sprite1CollisionMask.size() !== sprite2CollisionMask.size()) return false;

  return every(
    mapVector(sprite1CollisionMask, (sprite1Polygon, index) => {
      return isSamePolygon(sprite1Polygon, sprite2CollisionMask.at(index));
    })
  );
};

export const allDirectionSpritesHaveSameCollisionMasksAs = (
  originalSprite: gd.Sprite,
  direction: gd.Direction
) => {
  return every(
    mapFor(0, direction.getSpritesCount(), (j) => {
      const sprite = direction.getSprite(j);
      return haveSameCollisionMasks(sprite, originalSprite);
    })
  );
};

export const allAnimationSpritesHaveSameCollisionMasksAs = (
  originalSprite: gd.Sprite,
  animation: gd.Animation
) => {
  return every(
    mapFor(0, animation.getDirectionsCount(), (i) => {
      const direction = animation.getDirection(i);
      return allDirectionSpritesHaveSameCollisionMasksAs(
        originalSprite,
        direction
      );
    })
  );
};

export const allObjectSpritesHaveSameCollisionMaskAs = (
  originalSprite: gd.Sprite,
  animations: gd.SpriteAnimationList
) => {
  return every(
    mapFor(0, animations.getAnimationsCount(), (i) => {
      const animation = animations.getAnimation(i);
      return allAnimationSpritesHaveSameCollisionMasksAs(
        originalSprite,
        animation
      );
    })
  );
};

export const isFirstSpriteUsingFullImageCollisionMask = (
  animations: gd.SpriteAnimationList
) => {
  const firstSprite = getCurrentElements(animations, 0, 0, 0).sprite;
  return firstSprite ? firstSprite.isFullImageCollisionMask() : false;
};

export const deleteSpritesFromAnimation = (
  animation: gd.Animation,
  spritePtrs: {
    [key: number]: boolean;
  }
) => {
  mapFor(0, animation.getDirectionsCount(), (i) => {
    const direction = animation.getDirection(i);

    const spritesToDelete = mapFor(0, direction.getSpritesCount(), (j) => {
      const sprite = direction.getSprite(j);

      return !!spritePtrs[sprite.ptr];
    });

    // Iterate from the end to the beginning to avoid invalidating indexes.
    for (
      let spriteIndex = direction.getSpritesCount() - 1;
      spriteIndex >= 0;
      spriteIndex--
    ) {
      if (spritesToDelete[spriteIndex]) direction.removeSprite(spriteIndex);
    }
  });
};

export const duplicateSpritesInAnimation = (
  animation: gd.Animation,
  spritePtrs: {
    [key: number]: boolean;
  }
) => {
  mapFor(0, animation.getDirectionsCount(), (i) => {
    const direction = animation.getDirection(i);

    const spritesToDuplicate = mapFor(0, direction.getSpritesCount(), (j) => {
      const sprite = direction.getSprite(j);

      return !!spritePtrs[sprite.ptr];
    });

    // Iterate from the end to the beginning to avoid invalidating indexes.
    for (
      let spriteIndex = direction.getSpritesCount() - 1;
      spriteIndex >= 0;
      spriteIndex--
    ) {
      if (spritesToDuplicate[spriteIndex]) {
        const spriteToDuplicate = direction.getSprite(spriteIndex);
        const newSprite = new gd.Sprite();
        newSprite.setImageName(spriteToDuplicate.getImageName());
        copySpritePoints(spriteToDuplicate, newSprite);
        copySpritePolygons(spriteToDuplicate, newSprite);

        direction.addSprite(newSprite);
        direction.moveSprite(direction.getSpritesCount() - 1, spriteIndex);
        newSprite.delete();
      }
    }
  });
};

export const hasAnyFrame = (animations: gd.SpriteAnimationList): boolean => {
  for (
    let animationIndex = 0;
    animationIndex < animations.getAnimationsCount();
    animationIndex++
  ) {
    const animation = animations.getAnimation(animationIndex);
    for (
      let directionIndex = 0;
      directionIndex < animation.getDirectionsCount();
      directionIndex++
    ) {
      const direction = animation.getDirection(directionIndex);
      if (direction.getSpritesCount() > 0) return true;
    }
  }
  return false;
};

export const getFirstAnimationFrame = (
  animations: gd.SpriteAnimationList
): gd.Sprite | null => {
  if (animations.getAnimationsCount() === 0) {
    return null;
  }
  const firstAnimation = animations.getAnimation(0);
  if (firstAnimation.getDirectionsCount() === 0) {
    return null;
  }
  const firstDirection = firstAnimation.getDirection(0);
  if (firstDirection.getSpritesCount() === 0) {
    return null;
  }
  return firstDirection.getSprite(0);
};

export const setCollisionMaskOnAllFrames = (
  animations: gd.SpriteAnimationList,
  collisionMask: gd.VectorPolygon2d | null
) => {
  for (
    let animationIndex = 0;
    animationIndex < animations.getAnimationsCount();
    animationIndex++
  ) {
    const animation = animations.getAnimation(animationIndex);
    for (
      let directionIndex = 0;
      directionIndex < animation.getDirectionsCount();
      directionIndex++
    ) {
      const direction = animation.getDirection(directionIndex);
      for (
        let spriteIndex = 0;
        spriteIndex < direction.getSpritesCount();
        spriteIndex++
      ) {
        const sprite = direction.getSprite(spriteIndex);
        sprite.setFullImageCollisionMask(!collisionMask);
        if (collisionMask) sprite.setCustomCollisionMask(collisionMask);
      }
    }
  }
};
