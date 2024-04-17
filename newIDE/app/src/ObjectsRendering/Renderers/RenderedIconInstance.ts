// @ts-expect-error - TS2307 - Cannot find module 'flow-to-typescript-codemod' or its corresponding type declarations.
import { Flow } from 'flow-to-typescript-codemod';
import RenderedInstance from './RenderedInstance';
import PixiResourcesLoader from '../../ObjectsRendering/PixiResourcesLoader';
import ResourcesLoader from '../../ResourcesLoader';
import * as PIXI from 'pixi.js-legacy';

/**
 * Create a renderer for an type of object displayed as an icon
 */
export default function makeRenderer(iconPath: string) {
  class RenderedIconInstance extends RenderedInstance {
    constructor(
      project: gd.Project,
      layout: gd.Layout,
      instance: gd.InitialInstance,
      associatedObjectConfiguration: gd.ObjectConfiguration,
      pixiContainer: PIXI.Container,
      pixiResourcesLoader: Flow.Class<PixiResourcesLoader>
    ) {
      super(
        project,
        layout,
        instance,
        associatedObjectConfiguration,
        pixiContainer,
        pixiResourcesLoader
      );

      this._pixiObject = new PIXI.Sprite(PIXI.Texture.from(iconPath));
      this._pixiContainer.addChild(this._pixiObject);
    }

    onRemovedFromScene(): void {
      super.onRemovedFromScene();
      this._pixiObject.destroy(false);
    }

    update() {
      this._pixiObject.position.x = this._instance.getX();
      this._pixiObject.position.y = this._instance.getY();
      this._pixiObject.angle = this._instance.getAngle();
    }

    static getThumbnail(
      project: gd.Project,
      resourcesLoader: Flow.Class<ResourcesLoader>,
      objectConfiguration: gd.ObjectConfiguration
    ) {
      return iconPath;
    }
  }

  return RenderedIconInstance;
}
