// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t, Trans} from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Checkbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Checkbox.tsx', but '--jsx' is not set.
import Checkbox from '../../UI/Checkbox';
// @ts-expect-error - TS6142 - Module '../../UI/ColorField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ColorField/index.tsx', but '--jsx' is not set.
import ColorField from '../../UI/ColorField';
import {
  rgbColorToRGBString,
  rgbStringAndAlphaToRGBColor,
} from '../../Utils/ColorTransformer';
import { EditorProps } from './EditorProps.flow';
// @ts-expect-error - TS6142 - Module '../../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../../UI/SemiControlledTextField';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ResponsiveLineStackLayout, ColumnStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../../UI/SelectOption';
// @ts-expect-error - TS7017 - Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature.
const gd = global.gd;

export default class PanelSpriteEditor extends React.Component<EditorProps, undefined> {
  render() {
    const { objectConfiguration, renderObjectNameField } = this.props;
    const shapePainterConfiguration = gd.asShapePainterConfiguration(
      objectConfiguration
    );

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <ColumnStackLayout noMargin>
        {renderObjectNameField && renderObjectNameField()}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Checkbox
          label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>
              Draw the shapes relative to the object position on the scene
            </Trans>
          }
          checked={!shapePainterConfiguration.areCoordinatesAbsolute()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
          onCheck={(e, checked) => {
            if (!checked) shapePainterConfiguration.setCoordinatesAbsolute();
            else shapePainterConfiguration.setCoordinatesRelative();
            this.forceUpdate();
          }}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Clear the rendered image between each frame</Trans>}
          checked={shapePainterConfiguration.isClearedBetweenFrames()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
          onCheck={(e, checked) => {
            shapePainterConfiguration.setClearBetweenFrames(checked);
            this.forceUpdate();
          }}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ColorField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Outline color</Trans>}
            disableAlpha
            fullWidth
            color={rgbColorToRGBString({
              r: shapePainterConfiguration.getOutlineColorR(),
              g: shapePainterConfiguration.getOutlineColorG(),
              b: shapePainterConfiguration.getOutlineColorB(),
            })}
// @ts-expect-error - TS7006 - Parameter 'color' implicitly has an 'any' type.
            onChange={color => {
              const rgbColor = rgbStringAndAlphaToRGBColor(color);
              if (rgbColor) {
                shapePainterConfiguration.setOutlineColor(
                  rgbColor.r,
                  rgbColor.g,
                  rgbColor.b
                );

                this.forceUpdate();
              }
            }}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledTextField
            commitOnBlur
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Outline opacity (0-255)</Trans>}
            fullWidth
            type="number"
            value={shapePainterConfiguration.getOutlineOpacity()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={value => {
              shapePainterConfiguration.setOutlineOpacity(
                parseInt(value, 10) || 0
              );
              this.forceUpdate();
            }}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledTextField
            commitOnBlur
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Outline size (in pixels)</Trans>}
            fullWidth
            type="number"
            value={shapePainterConfiguration.getOutlineSize()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={value => {
              shapePainterConfiguration.setOutlineSize(
                parseInt(value, 10) || 0
              );
              this.forceUpdate();
            }}
          />
        </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ColorField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Fill color</Trans>}
            disableAlpha
            fullWidth
            color={rgbColorToRGBString({
              r: shapePainterConfiguration.getFillColorR(),
              g: shapePainterConfiguration.getFillColorG(),
              b: shapePainterConfiguration.getFillColorB(),
            })}
// @ts-expect-error - TS7006 - Parameter 'color' implicitly has an 'any' type.
            onChange={color => {
              const rgbColor = rgbStringAndAlphaToRGBColor(color);
              if (rgbColor) {
                shapePainterConfiguration.setFillColor(
                  rgbColor.r,
                  rgbColor.g,
                  rgbColor.b
                );

                this.forceUpdate();
              }
            }}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledTextField
            commitOnBlur
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Fill opacity (0-255)</Trans>}
            fullWidth
            type="number"
            value={shapePainterConfiguration.getFillOpacity()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={value => {
              shapePainterConfiguration.setFillOpacity(
                parseInt(value, 10) || 0
              );
              this.forceUpdate();
            }}
          />
        </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResponsiveLineStackLayout alignItems="center" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SelectField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Anti-aliasing</Trans>}
            value={shapePainterConfiguration.getAntialiasing()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
            onChange={(e, i, valueString: string) => {
              shapePainterConfiguration.setAntialiasing(valueString);
              this.forceUpdate();
            }}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SelectOption key="none" value="none" label={t`None`} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SelectOption key="low" value="low" label={t`Low quality`} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SelectOption
              key="medium"
              value="medium"
              label={t`Medium quality`}
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SelectOption key="high" value="high" label={t`High quality`} />
          </SelectField>
        </ResponsiveLineStackLayout>
      </ColumnStackLayout>
    );
  }
}
