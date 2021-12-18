/// <reference path="./PIXI3D.d.ts" />
namespace gdjs {
  const logger = new gdjs.Logger('3D box renderer');

  /**
   * The PIXI.js renderer for the VideoRuntimeObject.
   */
  export class Box3DRuntimeObjectPixiRenderer {
    _object: Box3DRuntimeObject;

    // Load (or reset) the video
    _pixiObject: PIXI3D.Mesh3D;
    _textureWasValid: boolean = false;

    /**
     * @param runtimeObject The object to render
     * @param runtimeScene The gdjs.RuntimeScene in which the object is
     */
    constructor(
      runtimeObject: gdjs.Box3DRuntimeObject,
      runtimeScene: gdjs.RuntimeScene
    ) {
      this._object = runtimeObject;
      this._pixiObject = PIXI3D.Mesh3D.createCube();
      this._pixiObject._texture.baseTexture.resource.autoPlay = false;

      // Needed to avoid video not playing/crashing in Chrome/Chromium browsers.
      // See https://github.com/pixijs/pixi.js/issues/5996
      this._pixiObject._texture.baseTexture.resource.source.preload = 'auto';
      this._pixiObject._texture.baseTexture.resource.source.autoload = true;

      // Will be set to true when video texture is loaded.
      runtimeScene
        .getLayer('')
        .getRenderer()
        .addRendererObject(this._pixiObject, runtimeObject.getZOrder());

      // Set the anchor in the center, so that the object rotates around
      // its center
      this._pixiObject.anchor.x = 0.5;
      this._pixiObject.anchor.y = 0.5;
      this.updatePosition();
      this.updateAngle();
      this.updateOpacity();
      this.updateVolume();
      this.updateLoop();
    }

    getRendererObject() {
      return this._pixiObject;
    }

    ensureUpToDate() {
      // Make sure that the video is repositioned after the texture was loaded
      // (as width and height will change).
      if (
        !this._textureWasValid &&
        this._pixiObject.texture &&
        this._pixiObject.texture.valid
      ) {
        this.updatePosition();
        this._textureWasValid = true;
      }
    }

    updatePosition(): void {
      this._pixiObject.position.x = this._object.x + this._pixiObject.width / 2;
      this._pixiObject.position.y =
        this._object.y + this._pixiObject.height / 2;
    }

    updateLoop(): void {
      this._pixiObject._texture.baseTexture.resource.source.loop =
        this._object._loop;
    }

    updateVolume(): void {
      this._pixiObject._texture.baseTexture.resource.source.volume =
        this._object._volume / 100;
    }

    updateAngle(): void {
      this._pixiObject.rotation = gdjs.toRad(this._object.angle);
    }

    updateOpacity(): void {
      this._pixiObject.alpha = this._object._opacity / 255;
    }

    getWidth(): float {
      return this._pixiObject.width;
    }

    getHeight(): float {
      return this._pixiObject.height;
    }

    /**
     * Set the rendered video width
     * @param width The new width, in pixels.
     */
    setWidth(width: float): void {
      this._pixiObject.width = width;

      // Position needs to be updated, as position in the center of the PIXI Sprite.
      this.updatePosition();
    }

    /**
     * Set the rendered video height
     * @param height The new height, in pixels.
     */
    setHeight(height: float): void {
      this._pixiObject.height = height;

      // Position needs to be updated, as position in the center of the PIXI Sprite.
      this.updatePosition();
    }
  }

  export const Box3DRuntimeObjectRenderer = Box3DRuntimeObjectPixiRenderer;
  export type Box3DRuntimeObjectRenderer = Box3DRuntimeObjectPixiRenderer;
}
