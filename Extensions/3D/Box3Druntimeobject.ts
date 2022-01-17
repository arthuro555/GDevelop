namespace gdjs {
  /** The initial properties for {@link gdjs.Box3DRuntimeObject} */
  interface Box3DObjectData extends ObjectData {
    content: {
      opacity: float;
      z: float;
    };
  }

  /**
   * An object displaying a video on screen.
   *
   * For the same video resource, only one video is being created in memory (
   * as a HTMLVideoElement). This means that two objects displaying the same
   * video will have the same state for this video (paused/playing, current time,
   * volume, etc...).
   */
  export class Box3DRuntimeObject extends gdjs.RuntimeObject {
    _z: float;
    _opacity: float;
    _renderer: gdjs.Box3DRuntimeObjectRenderer;

    /**
     * @param runtimeScene The scene the object belongs to.
     * @param videoObjectData The data defining the object
     */
    constructor(
      runtimeScene: gdjs.RuntimeScene,
      videoObjectData: Box3DObjectData
    ) {
      super(runtimeScene, videoObjectData);
      // The default is not 0, since that would be into the camera. 5 is a reasonably far default.
      this._z = videoObjectData.content.z || 5;
      this._opacity = videoObjectData.content.opacity || 255;
      this._renderer = new gdjs.Box3DRuntimeObjectRenderer(this, runtimeScene);

      // *ALWAYS* call `this.onCreated()` at the very end of your object constructor.
      this.onCreated();
    }

    getRendererObject() {
      return this._renderer.getRendererObject();
    }

    updateFromObjectData(
      oldObjectData: VideoObjectData,
      newObjectData: VideoObjectData
    ): boolean {
      if (oldObjectData.content.opacity !== newObjectData.content.opacity) {
        this.setOpacity(newObjectData.content.opacity);
      }
      return true;
    }

    /**
     * Initialize the extra parameters that could be set for an instance.
     * @param initialInstanceData The initial instance data
     */
    extraInitializationFromInitialInstance(initialInstanceData: InstanceData) {
      if (initialInstanceData.customSize) {
        this.setWidth(initialInstanceData.width);
        this.setHeight(initialInstanceData.height);
      }
    }

    /**
     * Set object position on X axis.
     * @param x The new position X of the object.
     */
    setX(x: float): void {
      super.setX(x);
      this._renderer.updatePosition();
    }

    /**
     * Set object position on Y axis.
     * @param y The new position Y of the object.
     */
    setY(y: float): void {
      super.setY(y);
      this._renderer.updatePosition();
    }

    getZ() {
      return this._z;
    }

    /**
     * Set object position on Z axis.
     * @param z The new position Z of the object.
     */
    setZ(z: float): void {
      this._z = z;
      this._renderer.updatePosition();
    }

    /**
     * Set the angle of the object.
     * @param angle The new angle of the object.
     */
    setAngle(angle: float): void {
      super.setAngle(angle);
      this._renderer.updateAngle();
    }

    /**
     * Set object opacity.
     * @param opacity The new opacity of the object (0-255).
     */
    setOpacity(opacity: float): void {
      this._opacity = opacity;
      this._renderer.updateOpacity();
    }

    /**
     * Get object opacity.
     * @returns The current opacity
     */
    getOpacity(): number {
      return this._opacity;
    }

    /**
     * Set the width of the video.
     * @param width The new width in pixels.
     */
    setWidth(width: float): void {
      if (this._renderer.getWidth() === width) return;

      this._renderer.setWidth(width);
      this.hitBoxesDirty = true;
    }

    /**
     * Set the height of the video.
     * @param height The new height in pixels.
     */
    setHeight(height: float): void {
      if (this._renderer.getHeight() === height) return;

      this._renderer.setHeight(height);
      this.hitBoxesDirty = true;
    }

    /**
     * Get the width of the video object.
     * @returns The current width of the object
     */
    getWidth(): float {
      return this._renderer.getWidth();
    }

    /**
     * Get the height of the video object.
     * @returns The current height of the object
     */
    getHeight(): float {
      return this._renderer.getHeight();
    }
  }

  gdjs.registerObject('3D::Box3D', Box3DRuntimeObject);
}
