// @flow
/**
 * This is a declaration of an extension for GDevelop 5.
 *
 * ℹ️ Changes in this file are watched and automatically imported if the editor
 * is running. You can also manually run `node import-GDJS-Runtime.js` (in newIDE/app/scripts).
 *
 * The file must be named "JsExtension.js", otherwise GDevelop won't load it.
 * ⚠️ If you make a change and the extension is not loaded, open the developer console
 * and search for any errors.
 *
 * More information on https://github.com/4ian/GDevelop/blob/master/newIDE/README-extensions.md
 */

/*::
// Import types to allow Flow to do static type checking on this file.
// Extensions declaration are typed using Flow (like the editor), but the files
// for the game engine are checked with TypeScript annotations.
import { type ObjectsRenderingService, type ObjectsEditorService } from '../JsExtensionTypes.flow.js'
*/

module.exports = {
  createExtension: function (
    _ /*: (string) => string */,
    gd /*: libGDevelop */
  ) {
    const extension = new gd.PlatformExtension();
    extension
      .setExtensionInformation(
        '3D',
        _('3D'),
        _(
          'Provides an object to display a video on the scene. The recommended file format is MPEG4, with H264 video codec and AAC audio codec, to maximize the support of the video on different platform and browsers.'
        ),
        'Arthur Pacaud (arthuro555)',
        'MIT'
      )
      .setExtensionHelpPath('/objects/video');

    var videoObject = new gd.ObjectJsImplementation();
    // $FlowExpectedError - ignore Flow warning as we're creating an object
    videoObject.updateProperty = function (
      objectContent,
      propertyName,
      newValue
    ) {
      /*if (propertyName === 'Opacity') {
        objectContent.opacity = parseFloat(newValue);
        return true;
      }*/

      return false;
    };

    // $FlowExpectedError - ignore Flow warning as we're creating an object
    videoObject.getProperties = function (objectContent) {
      const objectProperties = new gd.MapStringPropertyDescriptor();

      /*objectProperties
        .getOrCreate('Opacity')
        .setValue(objectContent.opacity.toString())
        .setType('number')
        .setLabel(_('Video opacity (0-255)'));*/

      return objectProperties;
    };

    videoObject.setRawJSONContent(
      JSON.stringify({
        /*opacity: 255,*/
      })
    );

    // $FlowExpectedError - ignore Flow warning as we're creating an object
    videoObject.updateInitialInstanceProperty = function (
      objectContent,
      instance,
      propertyName,
      newValue,
      project,
      layout
    ) {
      return false;
    };

    // $FlowExpectedError - ignore Flow warning as we're creating an object
    videoObject.getInitialInstanceProperties = function (
      content,
      instance,
      project,
      layout
    ) {
      var instanceProperties = new gd.MapStringPropertyDescriptor();
      return instanceProperties;
    };

    const object = extension
      .addObject(
        'Box3D',
        _('3D Box'),
        _('A 3D box, that can have a color or texture.'),
        'CppPlatform/Extensions/Box3Dicon24.png',
        videoObject
      )
      .setIncludeFile('Extensions/3D/PIXI3D.js')
      .addIncludeFile('Extensions/3D/Box3Druntimeobject.js')
      .addIncludeFile('Extensions/3D/Box3Druntimeobject-pixi-renderer.js');

    object
      .addAction(
        'SetZ',
        _('Set Z position'),
        _('Set the Z pos.'),
        _('Set the z of _PARAM0_ to _PARAM1_'),
        '',
        'CppPlatform/Extensions/Box3Dicon24.png',
        'CppPlatform/Extensions/Box3Dicon24.png'
      )
      .addParameter('object', 'Box3D', 'Box3D', false)
      .addParameter('expression', _('New position'), '', false)
      .getCodeExtraInformation()
      .setFunctionName('setZ');

    return extension;
  },

  /**
   * You can optionally add sanity tests that will check the basic working
   * of your extension behaviors/objects by instanciating behaviors/objects
   * and setting the property to a given value.
   *
   * If you don't have any tests, you can simply return an empty array.
   *
   * But it is recommended to create tests for the behaviors/objects properties you created
   * to avoid mistakes.
   */
  runExtensionSanityTests: function (
    gd /*: libGDevelop */,
    extension /*: gdPlatformExtension*/
  ) {
    return [];
  },

  /**
   * Register editors for objects.
   *
   * ℹ️ Run `node import-GDJS-Runtime.js` (in newIDE/app/scripts) if you make any change.
   */
  registerEditorConfigurations: function (
    objectsEditorService /*: ObjectsEditorService */
  ) {
    objectsEditorService.registerEditorConfiguration(
      '3D::Box3D',
      objectsEditorService.getDefaultObjectJsImplementationPropertiesEditor({
        helpPagePath: '/objects/Box3D',
      })
    );
  },

  /**
   * Register renderers for instance of objects on the scene editor.
   *
   * ℹ️ Run `node import-GDJS-Runtime.js` (in newIDE/app/scripts) if you make any change.
   */
  registerInstanceRenderers: function (
    objectsRenderingService /*: ObjectsRenderingService */
  ) {
    const RenderedInstance = objectsRenderingService.RenderedInstance;
    const PIXI = objectsRenderingService.PIXI;
    const PIXI3D = objectsRenderingService.requireModule(__dirname, 'PIXI3D');

    /**
     * Renderer for instances of VideoObject inside the IDE.
     *
     * @extends RenderedInstance
     * @class RenderedVideoObjectInstance
     * @constructor
     */
    class RenderedBox3DInstance extends RenderedInstance {
      constructor(
        project,
        layout,
        instance,
        associatedObject,
        pixiContainer,
        pixiResourcesLoader
      ) {
        super(
          project,
          layout,
          instance,
          associatedObject,
          pixiContainer,
          pixiResourcesLoader
        );

        // Setup lighting. We need to do that only now as PIXI3D is not properly initialized before.
        if (!PIXI3D.LightingEnvironment.main.imageBasedLighting)
          PIXI3D.LightingEnvironment.main.imageBasedLighting =
            new PIXI3D.ImageBasedLighting(
              PIXI3D.Cubemap.fromColors(new PIXI3D.Color(1, 1, 1)),
              PIXI3D.Cubemap.fromColors(new PIXI3D.Color(1, 1, 1))
            );

        //Setup the PIXI object:
        this._pixiObject = PIXI3D.Mesh3D.createCube();
        this._pixiContainer.addChild(this._pixiObject);
        this.update();
      }

      static getThumbnail() {
        return 'CppPlatform/Extensions/Box3Dicon24.png';
      }

      update() {
        /*
        const opacity = this._associatedObject
          .getProperties()
          .get('Opacity')
          .getValue();
        this._pixiObject.alpha = opacity / 255;
        */

        // Read position and angle from the instance
        PIXI3D.Camera.main.screenToWorld(
          this._instance.getX(),
          this._instance.getY(),
          5,
          this._pixiObject.position
        );

        this._pixiObject.rotationQuaternion.setEulerAngles(
          0,
          0,
          this._instance.getAngle()
        );

        if (this._instance.hasCustomSize()) {
          this._pixiObject.scale.x = this._instance.getCustomWidth();
          this._pixiObject.scale.y = this._instance.getCustomHeight();
        } else {
          this._pixiObject.scale.set(1);
        }
      }

      getDefaultWidth() {
        return 2;
      }

      getDefaultHeight() {
        return 2;
      }
    }

    objectsRenderingService.registerInstanceRenderer(
      '3D::Box3D',
      RenderedBox3DInstance
    );
  },
};
