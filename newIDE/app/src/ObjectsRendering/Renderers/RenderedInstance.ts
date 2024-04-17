// @ts-expect-error - TS2307 - Cannot find module 'flow-to-typescript-codemod' or its corresponding type declarations.
import { Flow } from 'flow-to-typescript-codemod';
import * as PIXI from 'pixi.js-legacy';
import PixiResourcesLoader from '../../ObjectsRendering/PixiResourcesLoader';

/**
 * RenderedInstance is the base class used for creating 2D renderers of instances,
 * which display on the scene editor, using Pixi.js, the instance of an object (see InstancesEditor).
 */
export default class RenderedInstance {
  _project: gd.Project;
  _layout: gd.Layout;
  _instance: gd.InitialInstance;
  _associatedObjectConfiguration: gd.ObjectConfiguration;
  _pixiContainer: PIXI.Container;
  _pixiResourcesLoader: Flow.Class<PixiResourcesLoader>;
  _pixiObject: PIXI.DisplayObject;
  wasUsed: boolean;

  constructor(
    project: gd.Project,
    layout: gd.Layout,
    instance: gd.InitialInstance,
    associatedObjectConfiguration: gd.ObjectConfiguration,
    pixiContainer: PIXI.Container,
    pixiResourcesLoader: Flow.Class<PixiResourcesLoader>
  ) {
    // @ts-expect-error - TS2322 - Type 'null' is not assignable to type 'DisplayObject'.
    this._pixiObject = null;
    this._instance = instance;
    this._associatedObjectConfiguration = associatedObjectConfiguration;
    this._pixiContainer = pixiContainer;
    this._project = project;
    this._layout = layout;
    this._pixiResourcesLoader = pixiResourcesLoader;
    this.wasUsed = true; //Used by InstancesRenderer to track rendered instance that are not used anymore.
  }

  /**
   * Convert an angle from degrees to radians.
   */
  static toRad(angleInDegrees: number) {
    return (angleInDegrees / 180) * Math.PI;
  }

  /**
   * Called when the scene editor is rendered.
   */
  update() {
    //Nothing to do.
  }

  getPixiObject(): PIXI.DisplayObject | null {
    return this._pixiObject;
  }

  getInstance(): gd.InitialInstance {
    return this._instance;
  }

  /**
   * Called to notify the instance renderer that its associated instance was removed from
   * the scene. The PIXI object should probably be removed from the container: This is what
   * the default implementation of the method does.
   */
  onRemovedFromScene(): void {
    if (this._pixiObject !== null)
      this._pixiContainer.removeChild(this._pixiObject);
  }

  getOriginX(): number {
    return 0;
  }

  getOriginY(): number {
    return 0;
  }

  getCenterX(): number {
    return this.getWidth() / 2;
  }

  getCenterY(): number {
    return this.getHeight() / 2;
  }

  getCustomWidth(): number {
    return this._instance.getCustomWidth();
  }

  getCustomHeight(): number {
    return this._instance.getCustomHeight();
  }

  getWidth(): number {
    return this._instance.hasCustomSize()
      ? this.getCustomWidth()
      : this.getDefaultWidth();
  }

  getHeight(): number {
    return this._instance.hasCustomSize()
      ? this.getCustomHeight()
      : this.getDefaultHeight();
  }

  getDepth(): number {
    return 0;
  }

  /**
   * Return the width of the instance when the instance doesn't have a custom size.
   */
  getDefaultWidth(): number {
    return 32;
  }

  /**
   * Return the height of the instance when the instance doesn't have a custom size.
   */
  getDefaultHeight(): number {
    return 32;
  }

  getDefaultDepth(): number {
    return 0;
  }
}
