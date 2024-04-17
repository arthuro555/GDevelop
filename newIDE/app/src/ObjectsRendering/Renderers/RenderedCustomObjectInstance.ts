// @ts-expect-error - TS2307 - Cannot find module 'flow-to-typescript-codemod' or its corresponding type declarations.
import { Flow } from 'flow-to-typescript-codemod';
import RenderedInstance from './RenderedInstance';
import Rendered3DInstance from './Rendered3DInstance';
import PixiResourcesLoader from '../../ObjectsRendering/PixiResourcesLoader';
import ResourcesLoader from '../../ResourcesLoader';
import ObjectsRenderingService from '../ObjectsRenderingService';
import RenderedTextInstance from './RenderedTextInstance';
import { mapReverseFor } from '../../Utils/MapFor';
import {
  getLayouts,
  applyChildLayouts,
  ChildInstance,
  ChildLayout,
  LayoutedParent,
  getProportionalPositionX,
  getProportionalPositionY,
  getProportionalPositionZ,
} from './CustomObjectLayoutingModel';
import * as PIXI from 'pixi.js-legacy';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'three'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/three/build/three.js' implicitly has an 'any' type.
import * as THREE from 'three';

/**
 * Renderer for gd.CustomObject (the class is not exposed to newIDE)
 */
export default class RenderedCustomObjectInstance
  extends Rendered3DInstance
  // @ts-expect-error - TS2344 - Type 'RenderedInstance | Rendered3DInstance' does not satisfy the constraint 'ChildRenderedInstance'.
  implements LayoutedParent<RenderedInstance | Rendered3DInstance>
{
  childrenInstances: ChildInstance[];
  childrenLayouts: ChildLayout[];
  childrenRenderedInstances: Array<RenderedInstance | Rendered3DInstance>;
  childrenRenderedInstanceByNames: Map<
    string,
    RenderedInstance | Rendered3DInstance
  >;
  _proportionalOriginX: number;
  _proportionalOriginY: number;
  _proportionalOriginZ: number;
  _threeObjectPivot: THREE.Group | null;

  constructor(
    project: gd.Project,
    layout: gd.Layout,
    instance: gd.InitialInstance,
    associatedObjectConfiguration: gd.ObjectConfiguration,
    pixiContainer: PIXI.Container,
    threeGroup: THREE.Group,
    pixiResourcesLoader: Flow.Class<PixiResourcesLoader>
  ) {
    super(
      project,
      layout,
      instance,
      associatedObjectConfiguration,
      pixiContainer,
      threeGroup,
      pixiResourcesLoader
    );

    // Setup the PIXI object:
    this._pixiObject = new PIXI.Container();
    this._pixiContainer.addChild(this._pixiObject);

    if (this._threeGroup) {
      // No Three group means the instance should only be rendered in 2D.
      const threeObject = new THREE.Group();
      threeObject.rotation.order = 'ZYX';
      this._threeGroup.add(threeObject);

      this._threeObjectPivot = new THREE.Group();
      this._threeObjectPivot.rotation.order = 'ZYX';
      threeObject.add(this._threeObjectPivot);
      this._threeObject = threeObject;
    }

    const customObjectConfiguration = gd.asCustomObjectConfiguration(
      associatedObjectConfiguration
    );

    const properties = customObjectConfiguration.getProperties();
    const parentOriginPositionName =
      properties.has('ParentOrigin') &&
      properties.get('ParentOrigin').getValue();
    const parentOriginXPositionName =
      properties.has('ParentOriginX') &&
      properties.get('ParentOriginX').getValue();
    const parentOriginYPositionName =
      properties.has('ParentOriginY') &&
      properties.get('ParentOriginY').getValue();
    const parentOriginZPositionName =
      properties.has('ParentOriginZ') &&
      properties.get('ParentOriginZ').getValue();
    this._proportionalOriginX =
      (parentOriginPositionName &&
        getProportionalPositionX(parentOriginPositionName)) ||
      (parentOriginXPositionName &&
        getProportionalPositionX(parentOriginXPositionName)) ||
      0;
    this._proportionalOriginY =
      (parentOriginPositionName &&
        getProportionalPositionY(parentOriginPositionName)) ||
      (parentOriginYPositionName &&
        getProportionalPositionY(parentOriginYPositionName)) ||
      0;
    this._proportionalOriginZ =
      (parentOriginPositionName &&
        getProportionalPositionZ(parentOriginPositionName)) ||
      (parentOriginZPositionName &&
        getProportionalPositionZ(parentOriginZPositionName)) ||
      0;

    const eventBasedObject = project.hasEventsBasedObject(
      customObjectConfiguration.getType()
    )
      ? project.getEventsBasedObject(customObjectConfiguration.getType())
      : null;

    this.childrenInstances = [];
    this.childrenLayouts = [];
    this.childrenRenderedInstances = [];
    this.childrenRenderedInstanceByNames = new Map<
      string,
      RenderedInstance | Rendered3DInstance
    >();

    if (!eventBasedObject) {
      return;
    }

    const childLayouts = getLayouts(
      eventBasedObject,
      customObjectConfiguration
    );

    mapReverseFor(0, eventBasedObject.getObjectsCount(), (i) => {
      const childObject = eventBasedObject.getObjectAt(i);

      const childLayout = childLayouts.get(childObject.getName()) || {
        isShown: true,
        horizontalLayout: {},
        verticalLayout: {},
        depthLayout: {},
      };

      const childObjectConfiguration =
        customObjectConfiguration.getChildObjectConfiguration(
          childObject.getName()
        );
      const childInstance = new ChildInstance();
      const renderer = ObjectsRenderingService.createNewInstanceRenderer(
        project,
        layout,
        // $FlowFixMe Use real object instances.
        childInstance,
        childObjectConfiguration,
        this._pixiObject,
        this._threeObjectPivot
      );
      if (!childLayout.isShown) {
        this._pixiObject.removeChild(renderer._pixiObject);
        if (this._threeObjectPivot && renderer instanceof Rendered3DInstance) {
          this._threeObjectPivot.remove(renderer._threeObject);
        }
      }

      if (renderer instanceof RenderedTextInstance) {
        // TODO EBO Remove this line when an alignment property is added to the text object.
        // @ts-expect-error - TS2339 - Property 'style' does not exist on type 'DisplayObject'.
        renderer._pixiObject.style.align = 'center';
      }
      this.childrenInstances.push(childInstance);
      this.childrenLayouts.push(childLayout);
      this.childrenRenderedInstances.push(renderer);
      this.childrenRenderedInstanceByNames.set(childObject.getName(), renderer);
    });

    if (this.childrenRenderedInstances.length === 0) {
      // Show a placeholder.
      this._pixiObject = new PIXI.Sprite(
        PixiResourcesLoader.getInvalidPIXITexture()
      );
      this._pixiContainer.addChild(this._pixiObject);
    }
  }

  onRemovedFromScene(): void {
    super.onRemovedFromScene();
    for (const childrenInstance of this.childrenRenderedInstances) {
      childrenInstance.onRemovedFromScene();
    }
    this._pixiObject.destroy(false);
  }

  /**
   * Return a URL for thumbnail of the specified object.
   */
  // @ts-expect-error - TS7023 - 'getThumbnail' implicitly has return type 'any' because it does not have a return type annotation and is referenced directly or indirectly in one of its return expressions.
  static getThumbnail(
    project: gd.Project,
    resourcesLoader: Flow.Class<ResourcesLoader>,
    objectConfiguration: gd.ObjectConfiguration
  ) {
    const customObjectConfiguration =
      gd.asCustomObjectConfiguration(objectConfiguration);

    const eventBasedObject = project.hasEventsBasedObject(
      customObjectConfiguration.getType()
    )
      ? project.getEventsBasedObject(customObjectConfiguration.getType())
      : null;
    if (!eventBasedObject) {
      return 'res/unknown32.png';
    }
    if (eventBasedObject.isAnimatable()) {
      const animations = customObjectConfiguration.getAnimations();

      if (
        animations.getAnimationsCount() > 0 &&
        animations.getAnimation(0).getDirectionsCount() > 0 &&
        animations.getAnimation(0).getDirection(0).getSpritesCount() > 0
      ) {
        const imageName = animations
          .getAnimation(0)
          .getDirection(0)
          .getSprite(0)
          .getImageName();
        return resourcesLoader.getResourceFullUrl(project, imageName, {});
      }
      return 'res/unknown32.png';
    }

    for (let i = 0; i < eventBasedObject.getObjectsCount(); i++) {
      const childObject = eventBasedObject.getObjectAt(i);
      const childObjectConfiguration =
        customObjectConfiguration.getChildObjectConfiguration(
          childObject.getName()
        );
      const childType = childObjectConfiguration.getType();
      if (
        childType === 'Sprite' ||
        childType === 'TiledSpriteObject::TiledSprite' ||
        childType === 'PanelSpriteObject::PanelSprite' ||
        childType === 'Scene3D::Cube3DObject'
      ) {
        // @ts-expect-error - TS7022 - 'thumbnail' implicitly has type 'any' because it does not have a type annotation and is referenced directly or indirectly in its own initializer.
        const thumbnail = ObjectsRenderingService.getThumbnail(
          project,
          childObjectConfiguration
        );
        if (thumbnail) return thumbnail;
      }
    }
    return 'res/unknown32.png';
  }

  update() {
    // TODO For animatable custom objects, change the texture used by the child
    // according to the current animation.

    // @ts-expect-error - TS2345 - Argument of type 'this' is not assignable to parameter of type 'LayoutedParent<ChildRenderedInstance>'.
    applyChildLayouts(this);

    const originX = this.getOriginX();
    const originY = this.getOriginY();
    const originZ = this.getOriginZ();
    const centerX = this.getCenterX();
    const centerY = this.getCenterY();
    const centerZ = this.getCenterZ();

    const firstInstance = this.childrenRenderedInstances[0];
    const is3D = firstInstance && firstInstance instanceof Rendered3DInstance;

    const threeObject = this._threeObject;
    const threeObjectPivot = this._threeObjectPivot;
    if (threeObject && threeObjectPivot && is3D) {
      threeObject.position.set(
        this._instance.getX() + centerX - originX,
        this._instance.getY() + centerY - originY,
        this._instance.getZ() + centerZ - originZ
      );
      threeObjectPivot.position.set(
        -centerX + originX,
        -centerY + originY,
        -centerZ + originZ
      );
      threeObject.rotation.set(
        RenderedInstance.toRad(this._instance.getRotationX()),
        RenderedInstance.toRad(this._instance.getRotationY()),
        RenderedInstance.toRad(this._instance.getAngle())
      );

      this._pixiObject.pivot.x = centerX - originX;
      this._pixiObject.pivot.y = centerY - originY;
    } else {
      this._pixiObject.pivot.x = centerX;
      this._pixiObject.pivot.y = centerY;
    }
    this._pixiObject.position.x = this._instance.getX() + centerX - originX;
    this._pixiObject.position.y = this._instance.getY() + centerY - originY;

    this._pixiObject.rotation = RenderedInstance.toRad(
      this._instance.getAngle()
    );
    this._pixiObject.scale.x = 1;
    this._pixiObject.scale.y = 1;
  }

  getDefaultWidth() {
    return this.childrenRenderedInstances.length > 0
      ? this.childrenRenderedInstances[0].getDefaultWidth()
      : 48;
  }

  getDefaultHeight() {
    return this.childrenRenderedInstances.length > 0
      ? this.childrenRenderedInstances[0].getDefaultHeight()
      : 48;
  }

  getDefaultDepth() {
    const firstInstance = this.childrenRenderedInstances[0];
    return firstInstance && firstInstance instanceof Rendered3DInstance
      ? firstInstance.getDefaultDepth()
      : 48;
  }

  getOriginX(): number {
    return this._proportionalOriginX * this.getWidth();
  }

  getOriginY(): number {
    return this._proportionalOriginY * this.getHeight();
  }

  getOriginZ(): number {
    return this._proportionalOriginZ * this.getDepth();
  }

  getCenterX() {
    return this.getWidth() / 2;
  }

  getCenterY() {
    return this.getHeight() / 2;
  }

  getCenterZ() {
    return this.getDepth() / 2;
  }
}
