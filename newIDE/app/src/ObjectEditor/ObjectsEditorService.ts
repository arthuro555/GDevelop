import TextEditor from './Editors/TextEditor';

import TiledSpriteEditor from './Editors/TiledSpriteEditor';

import PanelSpriteEditor from './Editors/PanelSpriteEditor';

import SpriteEditor from './Editors/SpriteEditor';

import EmptyEditor from './Editors/EmptyEditor';

import ShapePainterEditor from './Editors/ShapePainterEditor';

import ParticleEmitterEditor from './Editors/ParticleEmitterEditor';

import ObjectPropertiesEditor from './Editors/ObjectPropertiesEditor';

import CustomObjectPropertiesEditor from './Editors/CustomObjectPropertiesEditor';

import Cube3DEditor from './Editors/Cube3DEditor';

import Model3DEditor from './Editors/Model3DEditor';

import SpineEditor from './Editors/SpineEditor';

/**
 * A service returning editor components for each object type.
 */
const ObjectsEditorService = {
  getEditorConfiguration(project: gd.Project, objectType: string) {
    // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ readonly Sprite: { readonly component: any; readonly createNewObject: () => gd.SpriteObject; readonly castToObjectType: (objectConfiguration: gd.ObjectConfiguration) => gd.SpriteObject; readonly helpPagePath: "/objects/sprite"; }; readonly 'Scene3D::Cube3DObject': { ...; }; ... 7 more ...; readonly 'ParticleSystem::P...'.
    if (this.editorConfigurations[objectType]) {
      // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ readonly Sprite: { readonly component: any; readonly createNewObject: () => gd.SpriteObject; readonly castToObjectType: (objectConfiguration: gd.ObjectConfiguration) => gd.SpriteObject; readonly helpPagePath: "/objects/sprite"; }; readonly 'Scene3D::Cube3DObject': { ...; }; ... 7 more ...; readonly 'ParticleSystem::P...'.
      return this.editorConfigurations[objectType];
    }
    if (project.hasEventsBasedObject(objectType)) {
      const objectMetadata = gd.MetadataProvider.getObjectMetadata(
        gd.JsPlatform.get(),
        objectType
      );
      return this.getCustomObjectPropertiesEditor({
        helpPagePath: objectMetadata.getHelpPath(),
      });
    }
    console.warn(
      `Object with type ${objectType} has no editor configuration registered. Please use registerEditorConfiguration to register your editor.`
    );
    return this.getDefaultObjectJsImplementationPropertiesEditor({
      helpPagePath: '',
    });
  },
  registerEditorConfiguration: function (
    objectType: string,
    editorConfiguration: any
  ) {
    if (!editorConfiguration.component) {
      console.warn(
        `Tried to register editor configuration for object "${objectType}", but "component" property is not defined.`
      );
      return;
    }
    if (!editorConfiguration.createNewObject) {
      console.warn(
        `Tried to register editor configuration for object "${objectType}", but "createNewObject" property is not defined.`
      );
      return;
    }
    if (!editorConfiguration.castToObjectType) {
      console.warn(
        `Tried to register editor configuration for object "${objectType}", but "castToObjectType" property is not defined.`
      );
      return;
    }

    if (this.editorConfigurations.hasOwnProperty(objectType)) {
      console.warn(
        `Tried to register editor configuration for object "${objectType}", but an editor configuration already exists.`
      );
      return;
    }

    // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ readonly Sprite: { readonly component: any; readonly createNewObject: () => gd.SpriteObject; readonly castToObjectType: (objectConfiguration: gd.ObjectConfiguration) => gd.SpriteObject; readonly helpPagePath: "/objects/sprite"; }; readonly 'Scene3D::Cube3DObject': { ...; }; ... 7 more ...; readonly 'ParticleSystem::P...'.
    this.editorConfigurations[objectType] = editorConfiguration;
  },
  getDefaultObjectJsImplementationPropertiesEditor(options: {
    helpPagePath: string;
  }) {
    return {
      component: ObjectPropertiesEditor,
      createNewObject: (
        objectConfiguration: gd.ObjectConfiguration
      ): gd.ObjectConfiguration =>
        gd.asObjectJsImplementation(objectConfiguration).clone().release(),
      castToObjectType: (
        objectConfiguration: gd.ObjectConfiguration
      ): gd.ObjectJsImplementation =>
        gd.asObjectJsImplementation(objectConfiguration),
      helpPagePath: options.helpPagePath,
    };
  },
  getCustomObjectPropertiesEditor(options: { helpPagePath: string }) {
    return {
      component: CustomObjectPropertiesEditor,
      createNewObject: (
        objectConfiguration: gd.ObjectConfiguration
      ): gd.CustomObjectConfiguration =>
        gd.asCustomObjectConfiguration(
          gd.asCustomObjectConfiguration(objectConfiguration).clone().release()
        ),
      castToObjectType: (
        objectConfiguration: gd.ObjectConfiguration
      ): gd.CustomObjectConfiguration =>
        gd.asCustomObjectConfiguration(objectConfiguration),
      helpPagePath: options.helpPagePath,
    };
  },
  editorConfigurations: {
    Sprite: {
      component: SpriteEditor,
      createNewObject: (): gd.SpriteObject => new gd.SpriteObject(),
      castToObjectType: (
        objectConfiguration: gd.ObjectConfiguration
      ): gd.SpriteObject => gd.asSpriteConfiguration(objectConfiguration),
      helpPagePath: '/objects/sprite',
    },
    'Scene3D::Cube3DObject': {
      component: Cube3DEditor,
      createNewObject: (
        objectConfiguration: gd.ObjectConfiguration
      ): gd.ObjectConfiguration =>
        gd.asObjectJsImplementation(objectConfiguration).clone().release(),
      castToObjectType: (
        objectConfiguration: gd.ObjectConfiguration
      ): gd.ObjectJsImplementation =>
        gd.asObjectJsImplementation(objectConfiguration),
      helpPagePath: '/objects/3d-box',
    },
    'Scene3D::Model3DObject': {
      component: Model3DEditor,
      createNewObject: (
        objectConfiguration: gd.ObjectConfiguration
      ): gd.ObjectConfiguration =>
        gd.asObjectJsImplementation(objectConfiguration).clone().release(),
      castToObjectType: (
        objectConfiguration: gd.ObjectConfiguration
      ): gd.ObjectJsImplementation =>
        gd.asObjectJsImplementation(objectConfiguration),
      helpPagePath: '/objects/3d-model',
    },
    'SpineObject::SpineObject': {
      component: SpineEditor,
      createNewObject: (
        objectConfiguration: gd.ObjectConfiguration
      ): gd.ObjectConfiguration =>
        gd.asObjectJsImplementation(objectConfiguration).clone().release(),
      castToObjectType: (
        objectConfiguration: gd.ObjectConfiguration
      ): gd.ObjectJsImplementation =>
        gd.asObjectJsImplementation(objectConfiguration),
      helpPagePath: '/objects/spine',
    },
    'TiledSpriteObject::TiledSprite': {
      component: TiledSpriteEditor,
      createNewObject: (): gd.TiledSpriteObject => new gd.TiledSpriteObject(),
      castToObjectType: (
        objectConfiguration: gd.ObjectConfiguration
      ): gd.TiledSpriteObject =>
        gd.asTiledSpriteConfiguration(objectConfiguration),
      helpPagePath: '/objects/tiled_sprite',
    },
    'PanelSpriteObject::PanelSprite': {
      component: PanelSpriteEditor,
      createNewObject: (): gd.PanelSpriteObject => new gd.PanelSpriteObject(),
      castToObjectType: (
        objectConfiguration: gd.ObjectConfiguration
      ): gd.PanelSpriteObject =>
        gd.asPanelSpriteConfiguration(objectConfiguration),
      helpPagePath: '/objects/panel_sprite',
    },
    'TextObject::Text': {
      component: TextEditor,
      createNewObject: (): gd.TextObject => new gd.TextObject(),
      castToObjectType: (
        objectConfiguration: gd.ObjectConfiguration
      ): gd.TextObject => gd.asTextObjectConfiguration(objectConfiguration),
      helpPagePath: '/objects/text',
    },
    'PrimitiveDrawing::Drawer': {
      component: ShapePainterEditor,
      createNewObject: (): gd.ShapePainterObject => new gd.ShapePainterObject(),
      castToObjectType: (
        objectConfiguration: gd.ObjectConfiguration
      ): gd.ShapePainterObject =>
        gd.asShapePainterConfiguration(objectConfiguration),
      helpPagePath: '/objects/shape_painter',
    },
    'TextEntryObject::TextEntry': {
      component: EmptyEditor,
      createNewObject: (): gd.TextEntryObject => new gd.TextEntryObject(),
      castToObjectType: (
        objectConfiguration: gd.ObjectConfiguration
      ): gd.TextEntryObject => gd.asTextEntryConfiguration(objectConfiguration),
      helpPagePath: '/objects/text_entry',
    },
    'ParticleSystem::ParticleEmitter': {
      component: ParticleEmitterEditor,
      createNewObject: (): gd.ParticleEmitterObject =>
        new gd.ParticleEmitterObject(),
      castToObjectType: (
        objectConfiguration: gd.ObjectConfiguration
      ): gd.ParticleEmitterObject =>
        gd.asParticleEmitterConfiguration(objectConfiguration),
      helpPagePath: '/objects/particles_emitter',
    },
  },
} as const;

export default ObjectsEditorService;
