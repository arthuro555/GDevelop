// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Checkbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Checkbox.tsx', but '--jsx' is not set.
import Checkbox from '../../UI/Checkbox';
// @ts-expect-error - TS6142 - Module '../../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../../UI/SelectOption';
// @ts-expect-error - TS6142 - Module '../../UI/ColorField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ColorField/index.tsx', but '--jsx' is not set.
import ColorField from '../../UI/ColorField';
import {
  rgbColorToRGBString,
  rgbStringAndAlphaToRGBColor,
} from '../../Utils/ColorTransformer';
// @ts-expect-error - TS6142 - Module '../../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../../UI/SemiControlledTextField';
import { EditorProps } from './EditorProps.flow';
// @ts-expect-error - TS6142 - Module '../../ResourcesList/ResourceSelectorWithThumbnail' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/ResourceSelectorWithThumbnail.tsx', but '--jsx' is not set.
import ResourceSelectorWithThumbnail from '../../ResourcesList/ResourceSelectorWithThumbnail';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ResponsiveLineStackLayout, ColumnStackLayout } from '../../UI/Layout';
import DismissableTutorialMessage from '../../Hints/DismissableTutorialMessage';
import { getObjectTutorialIds } from '../../Utils/GDevelopServices/Tutorial';
// @ts-expect-error - TS7017 - Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature.
const gd = global.gd;

export default class ParticleEmitterEditor extends React.Component<EditorProps, undefined> {
  render() {
    const {
      objectConfiguration,
      project,
      resourceManagementProps,
      objectName,
      renderObjectNameField,
    } = this.props;
    const particleEmitterConfiguration = gd.asParticleEmitterConfiguration(
      objectConfiguration
    );
    const tutorialIds = getObjectTutorialIds(objectConfiguration.getType());

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <ColumnStackLayout noMargin>
        {renderObjectNameField && renderObjectNameField()}
        {tutorialIds.map(tutorialId => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <DismissableTutorialMessage
            key={tutorialId}
            tutorialId={tutorialId}
          />
        ))}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SelectField
          fullWidth
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          floatingLabelText={<Trans>Particle type</Trans>}
          value={particleEmitterConfiguration.getRendererType()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
          onChange={(e, i, value: string) => {
            const rendererType = parseInt(value, 10) || 0;
            particleEmitterConfiguration.setRendererType(rendererType);
            if (rendererType !== gd.ParticleEmitterObject.Quad) {
              particleEmitterConfiguration.setParticleTexture('');
            }
            this.forceUpdate();
          }}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SelectOption
            value={gd.ParticleEmitterObject.Point}
            label={t`Circle`}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SelectOption value={gd.ParticleEmitterObject.Line} label={t`Line`} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SelectOption
            value={gd.ParticleEmitterObject.Quad}
            label={t`Image`}
          />
        </SelectField>
        {particleEmitterConfiguration.getRendererType() ===
          gd.ParticleEmitterObject.Point && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <SemiControlledTextField
            commitOnBlur
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Size</Trans>}
            fullWidth
            type="number"
            value={particleEmitterConfiguration.getRendererParam1()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={value => {
              particleEmitterConfiguration.setRendererParam1(parseFloat(value));
              this.forceUpdate();
            }}
          />
        )}
        {particleEmitterConfiguration.getRendererType() ===
          gd.ParticleEmitterObject.Line && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SemiControlledTextField
              commitOnBlur
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              floatingLabelText={<Trans>Lines length</Trans>}
              fullWidth
              type="number"
              value={particleEmitterConfiguration.getRendererParam1()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
              onChange={value => {
                particleEmitterConfiguration.setRendererParam1(
                  parseFloat(value)
                );
                this.forceUpdate();
              }}
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SemiControlledTextField
              commitOnBlur
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              floatingLabelText={<Trans>Lines thickness</Trans>}
              fullWidth
              type="number"
              value={particleEmitterConfiguration.getRendererParam2()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
              onChange={value => {
                particleEmitterConfiguration.setRendererParam2(
                  parseFloat(value)
                );
                this.forceUpdate();
              }}
            />
          </ResponsiveLineStackLayout>
        )}
        {particleEmitterConfiguration.getRendererType() ===
          gd.ParticleEmitterObject.Quad && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ResourceSelectorWithThumbnail
            project={project}
            resourceManagementProps={resourceManagementProps}
            resourceKind="image"
            resourceName={particleEmitterConfiguration.getParticleTexture()}
            defaultNewResourceName={objectName}
// @ts-expect-error - TS7006 - Parameter 'resourceName' implicitly has an 'any' type.
            onChange={resourceName => {
              particleEmitterConfiguration.setParticleTexture(resourceName);
              this.forceUpdate();
            }}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Select an image</Trans>}
          />
        )}
        {particleEmitterConfiguration.getRendererType() ===
          gd.ParticleEmitterObject.Quad && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SemiControlledTextField
              commitOnBlur
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              floatingLabelText={<Trans>Particles start width</Trans>}
              fullWidth
              type="number"
              value={particleEmitterConfiguration.getRendererParam1()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
              onChange={value => {
                particleEmitterConfiguration.setRendererParam1(
                  Math.max(0, parseFloat(value))
                );
                this.forceUpdate();
              }}
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SemiControlledTextField
              commitOnBlur
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              floatingLabelText={<Trans>Particles start height</Trans>}
              fullWidth
              type="number"
              value={particleEmitterConfiguration.getRendererParam2()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
              onChange={value => {
                particleEmitterConfiguration.setRendererParam2(
                  Math.max(0, parseFloat(value))
                );
                this.forceUpdate();
              }}
            />
          </ResponsiveLineStackLayout>
        )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ColorField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Particles start color</Trans>}
            disableAlpha
            fullWidth
            color={rgbColorToRGBString({
              r: particleEmitterConfiguration.getParticleRed1(),
              g: particleEmitterConfiguration.getParticleGreen1(),
              b: particleEmitterConfiguration.getParticleBlue1(),
            })}
// @ts-expect-error - TS7006 - Parameter 'color' implicitly has an 'any' type.
            onChange={color => {
              const rgbColor = rgbStringAndAlphaToRGBColor(color);
              if (rgbColor) {
                particleEmitterConfiguration.setParticleRed1(rgbColor.r);
                particleEmitterConfiguration.setParticleGreen1(rgbColor.g);
                particleEmitterConfiguration.setParticleBlue1(rgbColor.b);

                this.forceUpdate();
              }
            }}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledTextField
            commitOnBlur
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Start opacity (0-255)</Trans>}
            fullWidth
            type="number"
            value={particleEmitterConfiguration.getParticleAlpha1()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={value => {
              particleEmitterConfiguration.setParticleAlpha1(
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
            floatingLabelText={<Trans>Particles end color</Trans>}
            disableAlpha
            fullWidth
            color={rgbColorToRGBString({
              r: particleEmitterConfiguration.getParticleRed2(),
              g: particleEmitterConfiguration.getParticleGreen2(),
              b: particleEmitterConfiguration.getParticleBlue2(),
            })}
// @ts-expect-error - TS7006 - Parameter 'color' implicitly has an 'any' type.
            onChange={color => {
              const rgbColor = rgbStringAndAlphaToRGBColor(color);
              if (rgbColor) {
                particleEmitterConfiguration.setParticleRed2(rgbColor.r);
                particleEmitterConfiguration.setParticleGreen2(rgbColor.g);
                particleEmitterConfiguration.setParticleBlue2(rgbColor.b);

                this.forceUpdate();
              }
            }}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledTextField
            commitOnBlur
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>End opacity (0-255)</Trans>}
            fullWidth
            type="number"
            value={particleEmitterConfiguration.getParticleAlpha2()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={value => {
              particleEmitterConfiguration.setParticleAlpha2(
                parseInt(value, 10) || 0
              );
              this.forceUpdate();
            }}
          />
        </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Additive rendering</Trans>}
          checked={particleEmitterConfiguration.isRenderingAdditive()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
          onCheck={(e, checked) => {
            if (checked) particleEmitterConfiguration.setRenderingAdditive();
            else particleEmitterConfiguration.setRenderingAlpha();
            this.forceUpdate();
          }}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Delete when out of particles</Trans>}
          checked={particleEmitterConfiguration.getDestroyWhenNoParticles()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
          onCheck={(e, checked) => {
            particleEmitterConfiguration.setDestroyWhenNoParticles(checked);
            this.forceUpdate();
          }}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledTextField
            commitOnBlur
            floatingLabelText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Maximum number of particles displayed</Trans>
            }
            fullWidth
            type="number"
            value={particleEmitterConfiguration.getMaxParticleNb()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={value => {
              particleEmitterConfiguration.setMaxParticleNb(
                parseInt(value, 10) || 0
              );
              this.forceUpdate();
            }}
          />
        </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledTextField
            commitOnBlur
            floatingLabelText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Number of particles in tank (-1 for infinite)</Trans>
            }
            fullWidth
            type="number"
            value={particleEmitterConfiguration.getTank()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={value => {
              particleEmitterConfiguration.setTank(parseInt(value, 10) || 0);
              this.forceUpdate();
            }}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledTextField
            commitOnBlur
            floatingLabelText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Flow of particles (particles/seconds)</Trans>
            }
            fullWidth
            type="number"
            value={particleEmitterConfiguration.getFlow()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={value => {
              particleEmitterConfiguration.setFlow(parseFloat(value) || 0);
              this.forceUpdate();
            }}
          />
        </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledTextField
            commitOnBlur
            floatingLabelText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Minimum emitter force applied on particles</Trans>
            }
            fullWidth
            type="number"
            value={particleEmitterConfiguration.getEmitterForceMin()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={value => {
              particleEmitterConfiguration.setEmitterForceMin(
                parseFloat(value) || 0
              );
              this.forceUpdate();
            }}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledTextField
            commitOnBlur
            floatingLabelText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Maximum emitter force applied on particles</Trans>
            }
            fullWidth
            type="number"
            value={particleEmitterConfiguration.getEmitterForceMax()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={value => {
              particleEmitterConfiguration.setEmitterForceMax(
                parseFloat(value) || 0
              );
              this.forceUpdate();
            }}
          />
        </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledTextField
            commitOnBlur
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Spray cone angle (in degrees)</Trans>}
            fullWidth
            type="number"
            value={particleEmitterConfiguration.getConeSprayAngle()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={value => {
              particleEmitterConfiguration.setConeSprayAngle(
                parseFloat(value) || 0
              );
              this.forceUpdate();
            }}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledTextField
            commitOnBlur
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Radius of the emitter</Trans>}
            fullWidth
            type="number"
            value={particleEmitterConfiguration.getZoneRadius()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={value => {
              particleEmitterConfiguration.setZoneRadius(
                parseFloat(value) || 0
              );
              this.forceUpdate();
            }}
          />
        </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledTextField
            commitOnBlur
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Gravity on particles on X axis</Trans>}
            fullWidth
            type="number"
            value={particleEmitterConfiguration.getParticleGravityX()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={value => {
              particleEmitterConfiguration.setParticleGravityX(
                parseFloat(value)
              );
              this.forceUpdate();
            }}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledTextField
            commitOnBlur
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Gravity on particles on Y axis</Trans>}
            fullWidth
            type="number"
            value={particleEmitterConfiguration.getParticleGravityY()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={value => {
              particleEmitterConfiguration.setParticleGravityY(
                parseFloat(value)
              );
              this.forceUpdate();
            }}
          />
        </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledTextField
            commitOnBlur
            floatingLabelText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Particle minimum lifetime (in seconds)</Trans>
            }
            fullWidth
            type="number"
            value={particleEmitterConfiguration.getParticleLifeTimeMin()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={value => {
              particleEmitterConfiguration.setParticleLifeTimeMin(
                parseFloat(value)
              );
              this.forceUpdate();
            }}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledTextField
            commitOnBlur
            floatingLabelText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Particle maximum lifetime (in seconds)</Trans>
            }
            fullWidth
            type="number"
            value={particleEmitterConfiguration.getParticleLifeTimeMax()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={value => {
              particleEmitterConfiguration.setParticleLifeTimeMax(
                parseFloat(value)
              );
              this.forceUpdate();
            }}
          />
        </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledTextField
            commitOnBlur
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Particle start size (in percents)</Trans>}
            fullWidth
            type="number"
            value={particleEmitterConfiguration.getParticleSize1()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={value => {
              particleEmitterConfiguration.setParticleSize1(parseFloat(value));
              this.forceUpdate();
            }}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledTextField
            commitOnBlur
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Particle end size (in percents)</Trans>}
            fullWidth
            type="number"
            value={particleEmitterConfiguration.getParticleSize2()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={value => {
              particleEmitterConfiguration.setParticleSize2(parseFloat(value));
              this.forceUpdate();
            }}
          />
        </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledTextField
            commitOnBlur
            floatingLabelText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Particle minimum rotation speed (degrees/second)</Trans>
            }
            fullWidth
            type="number"
            value={particleEmitterConfiguration.getParticleAngle1()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={value => {
              particleEmitterConfiguration.setParticleAngle1(parseFloat(value));
              this.forceUpdate();
            }}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledTextField
            commitOnBlur
            floatingLabelText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Particle maximum rotation speed (degrees/second)</Trans>
            }
            fullWidth
            type="number"
            value={particleEmitterConfiguration.getParticleAngle2()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={value => {
              particleEmitterConfiguration.setParticleAngle2(parseFloat(value));
              this.forceUpdate();
            }}
          />
        </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledTextField
            commitOnBlur
            floatingLabelText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Jump forward in time on creation (in seconds)</Trans>
            }
            fullWidth
            type="number"
            value={particleEmitterConfiguration.getJumpForwardInTimeOnCreation()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={value => {
              particleEmitterConfiguration.setJumpForwardInTimeOnCreation(
                parseFloat(value)
              );
              this.forceUpdate();
            }}
          />
        </ResponsiveLineStackLayout>
      </ColumnStackLayout>
    );
  }
}
