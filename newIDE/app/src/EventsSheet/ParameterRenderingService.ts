// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t} from '@lingui/macro';
import * as React from 'react';
import {
  ParameterInlineRenderer,
  ParameterInlineRendererProps,
} from './ParameterFields/ParameterInlineRenderer.flow';
import DefaultField, {
  renderInlineDefaultField,
// @ts-expect-error - TS6142 - Module './ParameterFields/DefaultField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/DefaultField.tsx', but '--jsx' is not set.
} from './ParameterFields/DefaultField';
import RelationalOperatorField, {
  renderInlineRelationalOperator,
// @ts-expect-error - TS6142 - Module './ParameterFields/RelationalOperatorField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/RelationalOperatorField.tsx', but '--jsx' is not set.
} from './ParameterFields/RelationalOperatorField';
import OperatorField, {
  renderInlineOperator,
// @ts-expect-error - TS6142 - Module './ParameterFields/OperatorField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/OperatorField.tsx', but '--jsx' is not set.
} from './ParameterFields/OperatorField';
// @ts-expect-error - TS6142 - Module './ParameterFields/MouseField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/MouseField.tsx', but '--jsx' is not set.
import MouseField, { renderInlineMouse } from './ParameterFields/MouseField';
// @ts-expect-error - TS6142 - Module './ParameterFields/KeyField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/KeyField.tsx', but '--jsx' is not set.
import KeyField, { renderInlineKey } from './ParameterFields/KeyField';
import ObjectField, {
  renderInlineObjectWithThumbnail,
// @ts-expect-error - TS6142 - Module './ParameterFields/ObjectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/ObjectField.tsx', but '--jsx' is not set.
} from './ParameterFields/ObjectField';
// @ts-expect-error - TS6142 - Module './ParameterFields/YesNoField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/YesNoField.tsx', but '--jsx' is not set.
import YesNoField, { renderInlineYesNo } from './ParameterFields/YesNoField';
import TrueFalseField, {
  renderInlineTrueFalse,
// @ts-expect-error - TS6142 - Module './ParameterFields/TrueFalseField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/TrueFalseField.tsx', but '--jsx' is not set.
} from './ParameterFields/TrueFalseField';
// @ts-expect-error - TS6142 - Module './ParameterFields/ExpressionField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/ExpressionField.tsx', but '--jsx' is not set.
import ExpressionField from './ParameterFields/ExpressionField';
// @ts-expect-error - TS6142 - Module './ParameterFields/StringField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/StringField.tsx', but '--jsx' is not set.
import StringField from './ParameterFields/StringField';
// @ts-expect-error - TS6142 - Module './ParameterFields/StringWithSelectorField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/StringWithSelectorField.tsx', but '--jsx' is not set.
import StringWithSelectorField from './ParameterFields/StringWithSelectorField';
// @ts-expect-error - TS6142 - Module './ParameterFields/BehaviorField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/BehaviorField.tsx', but '--jsx' is not set.
import BehaviorField from './ParameterFields/BehaviorField';
import SceneVariableField, {
  renderInlineSceneVariable,
// @ts-expect-error - TS6142 - Module './ParameterFields/SceneVariableField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/SceneVariableField.tsx', but '--jsx' is not set.
} from './ParameterFields/SceneVariableField';
import GlobalVariableField, {
  renderInlineGlobalVariable,
// @ts-expect-error - TS6142 - Module './ParameterFields/GlobalVariableField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/GlobalVariableField.tsx', but '--jsx' is not set.
} from './ParameterFields/GlobalVariableField';
import ObjectVariableField, {
  renderInlineObjectVariable,
// @ts-expect-error - TS6142 - Module './ParameterFields/ObjectVariableField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/ObjectVariableField.tsx', but '--jsx' is not set.
} from './ParameterFields/ObjectVariableField';
// @ts-expect-error - TS6142 - Module './ParameterFields/LayerField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/LayerField.tsx', but '--jsx' is not set.
import LayerField from './ParameterFields/LayerField';
// @ts-expect-error - TS6142 - Module './ParameterFields/ImageResourceField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/ImageResourceField.tsx', but '--jsx' is not set.
import ImageResourceField from './ParameterFields/ImageResourceField';
// @ts-expect-error - TS6142 - Module './ParameterFields/AudioResourceField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/AudioResourceField.tsx', but '--jsx' is not set.
import AudioResourceField from './ParameterFields/AudioResourceField';
// @ts-expect-error - TS6142 - Module './ParameterFields/VideoResourceField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/VideoResourceField.tsx', but '--jsx' is not set.
import VideoResourceField from './ParameterFields/VideoResourceField';
// @ts-expect-error - TS6142 - Module './ParameterFields/JsonResourceField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/JsonResourceField.tsx', but '--jsx' is not set.
import JsonResourceField from './ParameterFields/JsonResourceField';
// @ts-expect-error - TS6142 - Module './ParameterFields/SpineResourceField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/SpineResourceField.tsx', but '--jsx' is not set.
import SpineResourceField from './ParameterFields/SpineResourceField';
// @ts-expect-error - TS6142 - Module './ParameterFields/BitmapFontResourceField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/BitmapFontResourceField.tsx', but '--jsx' is not set.
import BitmapFontResourceField from './ParameterFields/BitmapFontResourceField';
// @ts-expect-error - TS6142 - Module './ParameterFields/FontResourceField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/FontResourceField.tsx', but '--jsx' is not set.
import FontResourceField from './ParameterFields/FontResourceField';
// @ts-expect-error - TS6142 - Module './ParameterFields/ColorExpressionField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/ColorExpressionField.tsx', but '--jsx' is not set.
import ColorExpressionField from './ParameterFields/ColorExpressionField';
import ForceMultiplierField, {
  renderInlineForceMultiplier,
// @ts-expect-error - TS6142 - Module './ParameterFields/ForceMultiplierField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/ForceMultiplierField.tsx', but '--jsx' is not set.
} from './ParameterFields/ForceMultiplierField';
// @ts-expect-error - TS6142 - Module './ParameterFields/SceneNameField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/SceneNameField.tsx', but '--jsx' is not set.
import SceneNameField from './ParameterFields/SceneNameField';
// @ts-expect-error - TS6142 - Module './ParameterFields/LayerEffectNameField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/LayerEffectNameField.tsx', but '--jsx' is not set.
import LayerEffectNameField from './ParameterFields/LayerEffectNameField';
// @ts-expect-error - TS6142 - Module './ParameterFields/LayerEffectParameterNameField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/LayerEffectParameterNameField.tsx', but '--jsx' is not set.
import LayerEffectParameterNameField from './ParameterFields/LayerEffectParameterNameField';
// @ts-expect-error - TS6142 - Module './ParameterFields/ObjectEffectNameField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/ObjectEffectNameField.tsx', but '--jsx' is not set.
import ObjectEffectNameField from './ParameterFields/ObjectEffectNameField';
// @ts-expect-error - TS6142 - Module './ParameterFields/ObjectEffectParameterNameField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/ObjectEffectParameterNameField.tsx', but '--jsx' is not set.
import ObjectEffectParameterNameField from './ParameterFields/ObjectEffectParameterNameField';
// @ts-expect-error - TS6142 - Module './ParameterFields/ObjectPointNameField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/ObjectPointNameField.tsx', but '--jsx' is not set.
import ObjectPointNameField from './ParameterFields/ObjectPointNameField';
// @ts-expect-error - TS6142 - Module './ParameterFields/ObjectAnimationNameField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/ObjectAnimationNameField.tsx', but '--jsx' is not set.
import ObjectAnimationNameField from './ParameterFields/ObjectAnimationNameField';
// @ts-expect-error - TS6142 - Module './ParameterFields/FunctionParameterNameField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/FunctionParameterNameField.tsx', but '--jsx' is not set.
import FunctionParameterNameField from './ParameterFields/FunctionParameterNameField';
// @ts-expect-error - TS6142 - Module './ParameterFields/ExternalLayoutNameField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/ExternalLayoutNameField.tsx', but '--jsx' is not set.
import ExternalLayoutNameField from './ParameterFields/ExternalLayoutNameField';
import { MessageDescriptor } from '../Utils/i18n/MessageDescriptor.flow';
import LeaderboardIdField, {
  renderInlineLeaderboardIdField,
// @ts-expect-error - TS6142 - Module './ParameterFields/LeaderboardIdField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/LeaderboardIdField.tsx', but '--jsx' is not set.
} from './ParameterFields/LeaderboardIdField';
// @ts-expect-error - TS6142 - Module './ParameterFields/IdentifierField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/IdentifierField.tsx', but '--jsx' is not set.
import IdentifierField from './ParameterFields/IdentifierField';
// @ts-expect-error - TS6142 - Module './ParameterFields/TilemapResourceField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/TilemapResourceField.tsx', but '--jsx' is not set.
import TilemapResourceField from './ParameterFields/TilemapResourceField';
// @ts-expect-error - TS6142 - Module './ParameterFields/TilesetResourceField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/TilesetResourceField.tsx', but '--jsx' is not set.
import TilesetResourceField from './ParameterFields/TilesetResourceField';
// @ts-expect-error - TS6142 - Module './ParameterFields/Model3DResourceField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/Model3DResourceField.tsx', but '--jsx' is not set.
import Model3DResourceField from './ParameterFields/Model3DResourceField';
// @ts-expect-error - TS6142 - Module './ParameterFields/AtlasResourceField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/AtlasResourceField.tsx', but '--jsx' is not set.
import AtlasResourceField from './ParameterFields/AtlasResourceField';

const gd: libGDevelop = global.gd;

const components = {
  default: DefaultField,
  mouse: MouseField,
  object: ObjectField,
  relationalOperator: RelationalOperatorField,
  operator: OperatorField,
  yesorno: YesNoField,
  trueorfalse: TrueFalseField,
  number: ExpressionField,
  expression: ExpressionField,
  string: StringField,
  stringWithSelector: StringWithSelectorField,
  behavior: BehaviorField,
  scenevar: SceneVariableField,
  globalvar: GlobalVariableField,
  objectvar: ObjectVariableField,
  layer: LayerField,
  key: KeyField,
  file: DefaultField, //TODO
  musicfile: AudioResourceField,
  soundfile: AudioResourceField,
  imageResource: ImageResourceField,
  videoResource: VideoResourceField,
  jsonResource: JsonResourceField,
  bitmapFontResource: BitmapFontResourceField,
  fontResource: FontResourceField,
  model3DResource: Model3DResourceField,
  atlasResource: AtlasResourceField,
  spineResource: SpineResourceField,
  color: ColorExpressionField,
  police: DefaultField, //TODO
  forceMultiplier: ForceMultiplierField,
  sceneName: SceneNameField,
  layerEffectName: LayerEffectNameField,
  layerEffectParameterName: LayerEffectParameterNameField,
  objectEffectName: ObjectEffectNameField,
  objectEffectParameterName: ObjectEffectParameterNameField,
  objectPointName: ObjectPointNameField,
  objectAnimationName: ObjectAnimationNameField,
  functionParameterName: FunctionParameterNameField,
  externalLayoutName: ExternalLayoutNameField,
  leaderboardId: LeaderboardIdField,
  identifier: IdentifierField,
  tilemapResource: TilemapResourceField,
  tilesetResource: TilesetResourceField,
} as const;
const inlineRenderers: {
  [key: string]: ParameterInlineRenderer
} = {
  default: renderInlineDefaultField,
  forceMultiplier: renderInlineForceMultiplier,
  globalvar: renderInlineGlobalVariable,
  scenevar: renderInlineSceneVariable,
  objectvar: renderInlineObjectVariable,
  key: renderInlineKey,
  mouse: renderInlineMouse,
  object: renderInlineObjectWithThumbnail,
  yesorno: renderInlineYesNo,
  trueorfalse: renderInlineTrueFalse,
  operator: renderInlineOperator,
  relationalOperator: renderInlineRelationalOperator,
  leaderboardId: renderInlineLeaderboardIdField,
};
const userFriendlyTypeName: {
  [key: string]: MessageDescriptor
} = {
  mouse: t`Mouse button`,
  object: t`Object`,
  relationalOperator: t`Relational operator`,
  operator: t`Operator`,
  yesorno: t`Yes or No`,
  trueorfalse: t`True or False`,
  expression: t`Number`,
  number: t`Number`,
  string: t`String`,
  stringWithSelector: t`String`,
  behavior: t`Behavior`,
  scenevar: t`Scene variable`,
  globalvar: t`Global variable`,
  objectvar: t`Object variable`,
  layer: t`Layer`,
  key: t`Keyboard key`,
  musicfile: t`Audio resource`,
  soundfile: t`Audio resource`,
  imageResource: t`Image resource`,
  videoResource: t`Video resource`,
  bitmapFontResource: t`Bitmap font resource`,
  fontResource: t`Font resource`,
  jsonResource: t`JSON resource`,
  tilemapResource: t`Tile map resource`,
  atlasResource: t`Atlas resource`,
  spineResource: t`Spine json resource`,
  color: t`Color`,
  forceMultiplier: t`Instant or permanent force`,
  sceneName: t`Scene name`,
  layerEffectName: t`Layer effect name`,
  layerEffectParameterName: t`Layer effect property name`,
  objectEffectName: t`Object effect name`,
  objectEffectParameterName: t`Object effect property name`,
  objectPointName: t`Object point name`,
  objectAnimationName: t`Object animation name`,
  functionParameterName: t`Parameter name`,
  externalLayoutName: t`Name of the external layout`,
  identifier: t`Identifier`,
};

const ParameterRenderingService = {
  components,
  getParameterComponent: (rawType: string) => {
    const fieldType = gd.ParameterMetadata.isObject(rawType)
      ? 'object'
      : rawType;

// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ readonly default: any; readonly mouse: any; readonly object: any; readonly relationalOperator: any; readonly operator: any; readonly yesorno: any; readonly trueorfalse: any; readonly number: any; ... 35 more ...; readonly tilesetResource: any; }'.
    if (components.hasOwnProperty(fieldType)) return components[fieldType];
    else return components.default;
  },
  renderInlineParameter: (props: ParameterInlineRendererProps): React.ReactElement => {
    const rawType = props.parameterMetadata.getType();
    const fieldType = gd.ParameterMetadata.isObject(rawType)
      ? 'object'
      : rawType;

    const inlineRenderer =
      inlineRenderers[fieldType] || inlineRenderers.default;
    return inlineRenderer(props);
  },
  getUserFriendlyTypeName: (rawType: string): MessageDescriptor | null | undefined => {
    const fieldType = gd.ParameterMetadata.isObject(rawType)
      ? 'object'
      : rawType;

    return userFriendlyTypeName[fieldType] || null;
  },
} as const;

export default ParameterRenderingService;
