// @ts-expect-error - TS2307 - Cannot find module 'flow-to-typescript-codemod' or its corresponding type declarations.
import { Flow } from 'flow-to-typescript-codemod';
import RenderedInstance from './RenderedInstance';
import PixiResourcesLoader from '../../ObjectsRendering/PixiResourcesLoader';
import ResourcesLoader from '../../ResourcesLoader';
import * as PIXI from 'pixi.js-legacy';
import { rgbToHexNumber } from '../../Utils/ColorTransformer';

/**
 * Renderer for an ParticleEmitter object.
 */
export default class RenderedParticleEmitterInstance extends RenderedInstance {
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

    this._pixiObject = new PIXI.Graphics();
    this._pixiContainer.addChild(this._pixiObject);
    this.updateGraphics();
  }

  /**
   * Return a URL for thumbnail of the specified object.
   */
  static getThumbnail(
    project: gd.Project,
    resourcesLoader: Flow.Class<ResourcesLoader>,
    objectConfiguration: gd.ObjectConfiguration
  ) {
    return 'CppPlatform/Extensions/particleSystemicon.png';
  }

  update() {
    this._pixiObject.position.x = this._instance.getX();
    this._pixiObject.position.y = this._instance.getY();
    this.updateGraphics();
  }

  /**
   * Render the preview of the particle emitter according to the setup of the object
   */
  updateGraphics() {
    const particleEmitterConfiguration = gd.asParticleEmitterConfiguration(
      this._associatedObjectConfiguration
    );

    // @ts-expect-error - TS2339 - Property 'clear' does not exist on type 'DisplayObject'.
    this._pixiObject.clear();

    const emitterAngle = (this._instance.getAngle() / 180) * 3.14159;
    const sprayConeAngle = particleEmitterConfiguration.getConeSprayAngle();
    const line1Angle = emitterAngle - (sprayConeAngle / 2.0 / 180.0) * 3.14159;
    const line2Angle = emitterAngle + (sprayConeAngle / 2.0 / 180.0) * 3.14159;
    const length = 64;

    // @ts-expect-error - TS2339 - Property 'beginFill' does not exist on type 'DisplayObject'.
    this._pixiObject.beginFill(0, 0);
    // @ts-expect-error - TS2339 - Property 'lineStyle' does not exist on type 'DisplayObject'.
    this._pixiObject.lineStyle(
      3,
      rgbToHexNumber(
        particleEmitterConfiguration.getParticleRed2(),
        particleEmitterConfiguration.getParticleGreen2(),
        particleEmitterConfiguration.getParticleBlue2()
      ),
      1
    );
    // @ts-expect-error - TS2339 - Property 'moveTo' does not exist on type 'DisplayObject'.
    this._pixiObject.moveTo(0, 0);
    // @ts-expect-error - TS2339 - Property 'lineTo' does not exist on type 'DisplayObject'.
    this._pixiObject.lineTo(
      Math.cos(line1Angle) * length,
      Math.sin(line1Angle) * length
    );
    // @ts-expect-error - TS2339 - Property 'moveTo' does not exist on type 'DisplayObject'.
    this._pixiObject.moveTo(0, 0);
    // @ts-expect-error - TS2339 - Property 'lineTo' does not exist on type 'DisplayObject'.
    this._pixiObject.lineTo(
      Math.cos(line2Angle) * length,
      Math.sin(line2Angle) * length
    );
    // @ts-expect-error - TS2339 - Property 'endFill' does not exist on type 'DisplayObject'.
    this._pixiObject.endFill();

    // @ts-expect-error - TS2339 - Property 'lineStyle' does not exist on type 'DisplayObject'.
    this._pixiObject.lineStyle(0, 0x000000, 1);
    // @ts-expect-error - TS2339 - Property 'beginFill' does not exist on type 'DisplayObject'.
    this._pixiObject.beginFill(
      rgbToHexNumber(
        particleEmitterConfiguration.getParticleRed1(),
        particleEmitterConfiguration.getParticleGreen1(),
        particleEmitterConfiguration.getParticleBlue1()
      )
    );
    // @ts-expect-error - TS2339 - Property 'drawCircle' does not exist on type 'DisplayObject'.
    this._pixiObject.drawCircle(0, 0, 8);
    // @ts-expect-error - TS2339 - Property 'endFill' does not exist on type 'DisplayObject'.
    this._pixiObject.endFill();
  }

  getDefaultWidth() {
    return 128;
  }

  getDefaultHeight() {
    return 128;
  }

  getOriginX() {
    return 64;
  }

  getOriginY() {
    return 64;
  }
}
