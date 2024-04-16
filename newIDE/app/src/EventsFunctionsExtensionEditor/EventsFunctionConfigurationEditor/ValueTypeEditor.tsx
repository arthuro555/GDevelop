// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../../UI/SelectOption';
// @ts-expect-error - TS6142 - Module '../../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../../UI/SemiControlledTextField';
// @ts-expect-error - TS6142 - Module '../../ObjectTypeSelector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectTypeSelector/index.tsx', but '--jsx' is not set.
import ObjectTypeSelector from '../../ObjectTypeSelector';
// @ts-expect-error - TS6142 - Module '../../BehaviorTypeSelector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/BehaviorTypeSelector/index.tsx', but '--jsx' is not set.
import BehaviorTypeSelector from '../../BehaviorTypeSelector';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, ResponsiveLineStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../StringArrayEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/StringArrayEditor/index.tsx', but '--jsx' is not set.
import StringArrayEditor from '../../StringArrayEditor';
import useForceUpdate from '../../Utils/UseForceUpdate';

type Props = {
  project: gdProject,
  valueTypeMetadata: gdValueTypeMetadata,
  onTypeUpdated: () => void,
  disabled?: boolean,
  isTypeSelectorShown: boolean,
  isExpressionType?: boolean,
  getLastObjectParameterObjectType: () => string
};

const getExtraInfoArray = (type: gdValueTypeMetadata) => {
  const extraInfoJson = type.getExtraInfo();
  let array = [];
  try {
    if (extraInfoJson !== '') array = JSON.parse(extraInfoJson);
    if (!Array.isArray(array)) array = [];
  } catch (e: any) {
    console.error('Cannot parse parameter extraInfo: ', e);
  }
  return array;
};

const getIdentifierScope = (scopedIdentifier: string) =>
  scopedIdentifier.startsWith('object') ? 'object' : 'scene';

const getIdentifierName = (scopedIdentifier: string) =>
  scopedIdentifier.startsWith('object')
    ? scopedIdentifier.substring('object'.length)
    : scopedIdentifier.substring('scene'.length);

export default function ValueTypeEditor({
  project,
  valueTypeMetadata,
  disabled,
  isTypeSelectorShown,
  onTypeUpdated,
  getLastObjectParameterObjectType,
  isExpressionType,
}: Props) {
  const forceUpdate = useForceUpdate();

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ColumnStackLayout noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ResponsiveLineStackLayout noMargin>
            {isTypeSelectorShown && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <SelectField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                floatingLabelText={<Trans>Type</Trans>}
                value={valueTypeMetadata.getName()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
                onChange={(e, i, value: string) => {
                  valueTypeMetadata.setName(value);
                  valueTypeMetadata.setOptional(false);
                  valueTypeMetadata.setDefaultValue('');
                  forceUpdate();
                  onTypeUpdated();
                }}
                disabled={disabled}
                fullWidth
              >
                {!isExpressionType && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <SelectOption value="objectList" label={t`Objects`} />
                )}
                {!isExpressionType && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <SelectOption
                    value="behavior"
                    label={t`Behavior (for the previous object)`}
                  />
                )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectOption value="expression" label={t`Number`} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectOption value="string" label={t`String (text)`} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectOption
                  value="stringWithSelector"
                  label={t`String from a list of options (text)`}
                />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectOption value="key" label={t`Keyboard Key (text)`} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectOption value="mouse" label={t`Mouse button (text)`} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectOption value="color" label={t`Color (text)`} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectOption value="layer" label={t`Layer (text)`} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectOption value="sceneName" label={t`Scene name (text)`} />
                {!isExpressionType && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <SelectOption
                    value="yesorno"
                    label={t`Yes or No (boolean)`}
                  />
                )}
                {!isExpressionType && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <SelectOption
                    value="trueorfalse"
                    label={t`True or False (boolean)`}
                  />
                )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectOption
                  value="objectPointName"
                  label={t`Object point (text)`}
                />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectOption
                  value="objectAnimationName"
                  label={t`Object animation (text)`}
                />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectOption
                  value="layerEffectName"
                  label={t`Layer effect (text)`}
                />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectOption
                  value="layerEffectParameterName"
                  label={t`Layer effect property (text)`}
                />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectOption
                  value="objectEffectName"
                  label={t`Object effect (text)`}
                />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectOption
                  value="objectEffectParameterName"
                  label={t`Object effect property (text)`}
                />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectOption
                  value="leaderboardId"
                  label={t`Leaderboard (text)`}
                />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectOption value="identifier" label={t`Identifier (text)`} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectOption value="scenevar" label={t`Scene variable`} />
                {!isExpressionType && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <SelectOption
                    value="objectListOrEmptyIfJustDeclared"
                    label={t`Created objects`}
                  />
                )}
                {!isExpressionType && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <SelectOption
                    value="imageResource"
                    label={t`Image resource (JavaScript only)`}
                  />
                )}
                {!isExpressionType && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <SelectOption
                    value="audioResource"
                    label={t`Audio resource (JavaScript only)`}
                  />
                )}
                {!isExpressionType && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <SelectOption
                    value="jsonResource"
                    label={t`JSON resource (JavaScript only)`}
                  />
                )}
                {!isExpressionType && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <SelectOption
                    value="fontResource"
                    label={t`Font resource (JavaScript only)`}
                  />
                )}
                {!isExpressionType && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <SelectOption
                    value="bitmapFontResource"
                    label={t`Bitmap font resource (JavaScript only)`}
                  />
                )}
              </SelectField>
            )}
            {valueTypeMetadata.isObject() && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <ObjectTypeSelector
                project={project}
                value={valueTypeMetadata.getExtraInfo()}
                onChange={(value: string) => {
                  valueTypeMetadata.setExtraInfo(value);
                  forceUpdate();
                  onTypeUpdated();
                }}
                disabled={disabled}
              />
            )}
            {valueTypeMetadata.isBehavior() && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <BehaviorTypeSelector
                project={project}
                objectType={getLastObjectParameterObjectType()}
                value={valueTypeMetadata.getExtraInfo()}
                onChange={(value: string) => {
                  valueTypeMetadata.setExtraInfo(value);
                  forceUpdate();
                  onTypeUpdated();
                }}
                disabled={disabled}
              />
            )}
            {valueTypeMetadata.getName() === 'yesorno' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <SelectField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                floatingLabelText={<Trans>Default value</Trans>}
                value={
                  valueTypeMetadata.getDefaultValue() === 'yes' ? 'yes' : 'no'
                }
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
                onChange={(e, i, value) => {
                  valueTypeMetadata.setOptional(true);
                  valueTypeMetadata.setDefaultValue(value);
                  forceUpdate();
                  onTypeUpdated();
                }}
                fullWidth
              >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectOption value="yes" label={t`Yes`} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectOption value="no" label={t`No`} />
              </SelectField>
            )}
            {valueTypeMetadata.getName() === 'trueorfalse' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <SelectField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                floatingLabelText={<Trans>Default value</Trans>}
                value={
                  valueTypeMetadata.getDefaultValue() === 'True'
                    ? 'True'
                    : 'False'
                }
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
                onChange={(e, i, value) => {
                  valueTypeMetadata.setOptional(true);
                  valueTypeMetadata.setDefaultValue(value);
                  forceUpdate();
                  onTypeUpdated();
                }}
                fullWidth
              >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectOption value="True" label={t`True`} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectOption value="False" label={t`False`} />
              </SelectField>
            )}
            {valueTypeMetadata.getName() === 'identifier' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <SelectField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                floatingLabelText={<Trans>Scope</Trans>}
                value={getIdentifierScope(valueTypeMetadata.getExtraInfo())}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
                onChange={(e, i, value) => {
                  const identifierName = getIdentifierName(
                    valueTypeMetadata.getExtraInfo()
                  );
                  valueTypeMetadata.setExtraInfo(value + identifierName);
                  forceUpdate();
                  onTypeUpdated();
                }}
                fullWidth
              >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectOption value="scene" label={t`Scene`} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectOption value="object" label={t`Object`} />
              </SelectField>
            )}
            {valueTypeMetadata.getName() === 'identifier' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <SemiControlledTextField
                commitOnBlur
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                floatingLabelText={<Trans>Identifier name</Trans>}
                floatingLabelFixed
                value={getIdentifierName(valueTypeMetadata.getExtraInfo())}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
                onChange={value => {
                  const scope = getIdentifierScope(
                    valueTypeMetadata.getExtraInfo()
                  );
                  valueTypeMetadata.setExtraInfo(scope + value);
                  forceUpdate();
                  onTypeUpdated();
                }}
                fullWidth
              />
            )}
          </ResponsiveLineStackLayout>
          {valueTypeMetadata.getName() === 'stringWithSelector' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <StringArrayEditor
              disabled={disabled}
              extraInfo={getExtraInfoArray(valueTypeMetadata)}
              setExtraInfo={(newExtraInfo: Array<string>) => {
                valueTypeMetadata.setExtraInfo(JSON.stringify(newExtraInfo));
                forceUpdate();
                onTypeUpdated();
              }}
            />
          )}
        </ColumnStackLayout>
      )}
    </I18n>
  );
}
