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
        '3DBox',
        _('3D Box'),
        _('A 3D box, that can have a color or texture.'),
        'JsPlatform/Extensions/videoicon32.png',
        videoObject
      )
      .setIncludeFile('Extensions/3D/videoruntimeobject.js')
      .addIncludeFile('Extensions/3D/videoruntimeobject-pixi-renderer.js');

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
      '3D::3DBox',
      objectsEditorService.getDefaultObjectJsImplementationPropertiesEditor({
        helpPagePath: '/objects/3dbox',
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

    /**
     * Renderer for instances of VideoObject inside the IDE.
     *
     * @extends RenderedInstance
     * @class RenderedVideoObjectInstance
     * @constructor
     */
    class Rendered3DBoxInstance extends RenderedInstance {
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
        //Setup the PIXI object:
        this._pixiObject = new PIXI.Sprite(this._getVideoTexture());
        this._pixiObject.anchor.x = 0.5;
        this._pixiObject.anchor.y = 0.5;
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
        this._pixiObject.position.x =
          this._instance.getX() + this._pixiObject.width / 2;
        this._pixiObject.position.y =
          this._instance.getY() + this._pixiObject.height / 2;
        this._pixiObject.rotation = RenderedInstance.toRad(
          this._instance.getAngle()
        );

        if (this._instance.hasCustomSize()) {
          this._pixiObject.width = this._instance.getCustomWidth();
          this._pixiObject.height = this._instance.getCustomHeight();
        }
      }

      getDefaultWidth() {
        return 1;
      }

      getDefaultHeight() {
        return 1;
      }
    }

    objectsRenderingService.registerInstanceRenderer(
      '3D::3DBox',
      RenderedVideoObjectInstance
    );
  },
};
