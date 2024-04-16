// @ts-expect-error - TS2307 - Cannot find module 'flow-to-typescript-codemod' or its corresponding type declarations.
import {Flow} from 'flow-to-typescript-codemod';
import RenderedInstance from './RenderedInstance';
import PixiResourcesLoader from '../../ObjectsRendering/PixiResourcesLoader';
import ResourcesLoader from '../../ResourcesLoader';
import * as PIXI from 'pixi.js-legacy';
const gd: libGDevelop = global.gd;

/**
 * Renderer for gd.TiledSpriteObject
 */
export default class RenderedTiledSpriteInstance extends RenderedInstance {
  _texture: PIXI.Texture;

  constructor(
    project: gdProject,
    layout: gdLayout,
    instance: gdInitialInstance,
    associatedObjectConfiguration: gdObjectConfiguration,
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

    //Setup the PIXI object:
    const tiledSprite = gd.asTiledSpriteConfiguration(
      associatedObjectConfiguration
    );
    this._texture = tiledSprite.getTexture();
    this._pixiObject = new PIXI.TilingSprite(
      PixiResourcesLoader.getPIXITexture(project, tiledSprite.getTexture()),
      tiledSprite.getWidth(),
      tiledSprite.getHeight()
    );
// @ts-expect-error - TS2339 - Property 'anchor' does not exist on type 'DisplayObject'.
    this._pixiObject.anchor.x = 0.5;
// @ts-expect-error - TS2339 - Property 'anchor' does not exist on type 'DisplayObject'.
    this._pixiObject.anchor.y = 0.5;
    this._pixiContainer.addChild(this._pixiObject);
  }

  onRemovedFromScene(): void {
    super.onRemovedFromScene();
    // Keep textures because they are shared by all sprites.
    this._pixiObject.destroy(false);
  }

  /**
   * Return a URL for thumbnail of the specified object.
   */
  static getThumbnail(
    project: gdProject,
    resourcesLoader: Flow.Class<ResourcesLoader>,
    objectConfiguration: gdObjectConfiguration
  ) {
    const tiledSprite = gd.asTiledSpriteConfiguration(objectConfiguration);

    return ResourcesLoader.getResourceFullUrl(
      project,
      tiledSprite.getTexture(),
      {}
    );
  }

  update() {
    const tiledSprite = gd.asTiledSpriteConfiguration(
      this._associatedObjectConfiguration
    );
    if (this._instance.hasCustomSize()) {
// @ts-expect-error - TS2339 - Property 'width' does not exist on type 'DisplayObject'.
      this._pixiObject.width = this.getCustomWidth();
// @ts-expect-error - TS2339 - Property 'height' does not exist on type 'DisplayObject'.
      this._pixiObject.height = this.getCustomHeight();
    } else {
// @ts-expect-error - TS2339 - Property 'width' does not exist on type 'DisplayObject'.
      this._pixiObject.width = tiledSprite.getWidth();
// @ts-expect-error - TS2339 - Property 'height' does not exist on type 'DisplayObject'.
      this._pixiObject.height = tiledSprite.getHeight();
    }

    if (this._texture !== tiledSprite.getTexture()) {
      this._texture = tiledSprite.getTexture();
// @ts-expect-error - TS2339 - Property 'texture' does not exist on type 'DisplayObject'.
      this._pixiObject.texture = PixiResourcesLoader.getPIXITexture(
        this._project,
        tiledSprite.getTexture()
      );
    }

// @ts-expect-error - TS2339 - Property 'width' does not exist on type 'DisplayObject'.
    this._pixiObject.x = this._instance.getX() + this._pixiObject.width / 2;
// @ts-expect-error - TS2339 - Property 'height' does not exist on type 'DisplayObject'.
    this._pixiObject.y = this._instance.getY() + this._pixiObject.height / 2;
    this._pixiObject.rotation = RenderedInstance.toRad(
      this._instance.getAngle()
    );
  }

  getDefaultWidth() {
    const tiledSprite = gd.asTiledSpriteConfiguration(
      this._associatedObjectConfiguration
    );
    return tiledSprite.getWidth();
  }

  getDefaultHeight() {
    const tiledSprite = gd.asTiledSpriteConfiguration(
      this._associatedObjectConfiguration
    );
    return tiledSprite.getHeight();
  }
}
