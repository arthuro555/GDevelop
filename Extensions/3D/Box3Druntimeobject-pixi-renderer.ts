/// <reference types="../../GDJS/node_modules/pixi3d/types/index" />
namespace gdjs {
  const logger = new gdjs.Logger('3D box renderer');
  import PIXI = GlobalPIXIModule.PIXI;

  {
    const original = PIXI.State.for2d;
    PIXI.State.for2d = function (...args) {
      const state = original(...args);
      state.depthTest = true;
      return state;
    };
  }

  // Register a global white ambiant light after the first scene (and thereby PIXI) have loaded.
  gdjs.registerFirstRuntimeSceneLoadedCallback(() => {
    PIXI3D.LightingEnvironment.main.imageBasedLighting =
      new PIXI3D.ImageBasedLighting(
        PIXI3D.Cubemap.fromColors(new PIXI3D.Color(1, 1, 1)),
        PIXI3D.Cubemap.fromColors(new PIXI3D.Color(1, 1, 1))
      );
  });

  /**
   * The PIXI.js renderer for the VideoRuntimeObject.
   */
  export class Box3DRuntimeObjectPixiRenderer {
    private _object: Box3DRuntimeObject;
    private _pixiObject: PIXI3D.Mesh3D = PIXI3D.Mesh3D.createCube();

    /**
     * @param runtimeObject The object to render
     * @param runtimeScene The gdjs.RuntimeScene in which the object is
     */
    constructor(
      runtimeObject: gdjs.Box3DRuntimeObject,
      runtimeScene: gdjs.RuntimeScene
    ) {
      this._object = runtimeObject;

      // Will be set to true when video texture is loaded.
      runtimeScene
        .getLayer('')
        .getRenderer()
        .addRendererObject(this._pixiObject, runtimeObject.getZOrder());

      this.updatePosition();
      this.updateAngle();
      this.updateOpacity();
    }

    getRendererObject() {
      return this._pixiObject;
    }

    updatePosition(): void {
      PIXI3D.Camera.main.screenToWorld(
        this._object.getX(),
        this._object.getY(),
        this._object.getZ(),
        this._pixiObject.position
      );
    }

    updateScale() {
      this._pixiObject.scale.x = this._object.getWidth();
      this._pixiObject.scale.y = this._object.getHeight();
    }

    updateAngle(): void {
      this._pixiObject.rotationQuaternion.setEulerAngles(
        0,
        0,
        this._object.angle
      );
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
