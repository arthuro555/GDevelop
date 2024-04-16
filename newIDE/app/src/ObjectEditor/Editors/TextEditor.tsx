// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Checkbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Checkbox.tsx', but '--jsx' is not set.
import Checkbox from '../../UI/Checkbox';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Column } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/ColorField/ColorPicker' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ColorField/ColorPicker.tsx', but '--jsx' is not set.
import ColorPicker from '../../UI/ColorField/ColorPicker';
// @ts-expect-error - TS6142 - Module '../../UI/MiniToolbar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/MiniToolbar.tsx', but '--jsx' is not set.
import { MiniToolbarText } from '../../UI/MiniToolbar';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, ResponsiveLineStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../ResourcesList/ResourceSelector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/ResourceSelector.tsx', but '--jsx' is not set.
import ResourceSelector from '../../ResourcesList/ResourceSelector';
import ResourcesLoader from '../../ResourcesLoader';
import { EditorProps } from './EditorProps.flow';
// @ts-expect-error - TS6142 - Module '../../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../../UI/SemiControlledTextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/LeftTextAlignment'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/LeftTextAlignment.js' implicitly has an 'any' type.
import LeftTextAlignment from '../../UI/CustomSvgIcons/LeftTextAlignment';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/CenterTextAlignment'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/CenterTextAlignment.js' implicitly has an 'any' type.
import CenterTextAlignment from '../../UI/CustomSvgIcons/CenterTextAlignment';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/RightTextAlignment'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/RightTextAlignment.js' implicitly has an 'any' type.
import RightTextAlignment from '../../UI/CustomSvgIcons/RightTextAlignment';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
import {
  rgbColorToRGBString,
  rgbStringAndAlphaToRGBColor,
} from '../../Utils/ColorTransformer';
// @ts-expect-error - TS6142 - Module '../../UI/ColorField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ColorField/index.tsx', but '--jsx' is not set.
import ColorField from '../../UI/ColorField';
import { rgbOrHexToRGBString } from '../../Utils/ColorTransformer';

// @ts-expect-error - TS7017 - Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature.
const gd = global.gd;

const toolbarItemStyle = {
  marginRight: 10,
} as const;

const styles = {
  sizeTextField: {
    width: 90,
    ...toolbarItemStyle,
  },
  resourcesSelector: { alignSelf: 'center' },
  toolbarItem: toolbarItemStyle,
  checkbox: toolbarItemStyle,
} as const;

export default class TextEditor extends React.Component<EditorProps, undefined> {
  render() {
    const {
      objectConfiguration,
      project,
      resourceManagementProps,
      renderObjectNameField,
    } = this.props;
    const textObjectConfiguration = gd.asTextObjectConfiguration(
      objectConfiguration
    );

    const textAlignment = textObjectConfiguration.getTextAlignment();

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <ColumnStackLayout noMargin>
        {renderObjectNameField && renderObjectNameField()}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResponsiveLineStackLayout noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <MiniToolbarText firstChild>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Size:</Trans>
            </MiniToolbarText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SemiControlledTextField
              commitOnBlur
              id="text-object-font-size"
              type="number"
              margin="none"
              style={styles.sizeTextField}
              value={textObjectConfiguration.getCharacterSize()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
              onChange={value => {
                textObjectConfiguration.setCharacterSize(
                  parseInt(value, 10) || 0
                );
                this.forceUpdate();
              }}
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <MiniToolbarText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Color:</Trans>
            </MiniToolbarText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ColorPicker
              style={styles.toolbarItem}
              disableAlpha
              color={rgbStringAndAlphaToRGBColor(
                textObjectConfiguration.getColor(),
                255
              )}
// @ts-expect-error - TS7006 - Parameter 'color' implicitly has an 'any' type.
              onChangeComplete={color => {
                const rgbString = rgbColorToRGBString(color.rgb);
                textObjectConfiguration.setColor(rgbString);
                this.forceUpdate();
              }}
            />
          </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Bold</Trans>}
              checked={textObjectConfiguration.isBold()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
              onCheck={(e, checked) => {
                textObjectConfiguration.setBold(checked);
                this.forceUpdate();
              }}
              style={styles.checkbox}
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Italic</Trans>}
              checked={textObjectConfiguration.isItalic()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
              onCheck={(e, checked) => {
                textObjectConfiguration.setItalic(checked);
                this.forceUpdate();
              }}
              style={styles.checkbox}
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ButtonGroup size="small">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Tooltip title={<Trans>Align text on the left</Trans>}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Button
                  variant={textAlignment === 'left' ? 'contained' : 'outlined'}
                  color={textAlignment === 'left' ? 'secondary' : 'default'}
                  onClick={() => {
                    textObjectConfiguration.setTextAlignment('left');
                    this.forceUpdate();
                  }}
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <LeftTextAlignment />
                </Button>
              </Tooltip>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Tooltip title={<Trans>Align text on the center</Trans>}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Button
                  variant={
                    textAlignment === 'center' ? 'contained' : 'outlined'
                  }
                  color={textAlignment === 'center' ? 'secondary' : 'default'}
                  onClick={() => {
                    textObjectConfiguration.setTextAlignment('center');
                    this.forceUpdate();
                  }}
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <CenterTextAlignment />
                </Button>
              </Tooltip>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Tooltip title={<Trans>Align text on the right</Trans>}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Button
                  variant={textAlignment === 'right' ? 'contained' : 'outlined'}
                  color={textAlignment === 'right' ? 'secondary' : 'default'}
                  onClick={() => {
                    textObjectConfiguration.setTextAlignment('right');
                    this.forceUpdate();
                  }}
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <RightTextAlignment />
                </Button>
              </Tooltip>
            </ButtonGroup>
          </Line>
        </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResourceSelector
          project={project}
          resourceManagementProps={resourceManagementProps}
          resourcesLoader={ResourcesLoader}
          resourceKind="font"
          fullWidth
          canBeReset
          initialResourceName={textObjectConfiguration.getFontName()}
// @ts-expect-error - TS7006 - Parameter 'resourceName' implicitly has an 'any' type.
          onChange={resourceName => {
            textObjectConfiguration.setFontName(resourceName);
            this.forceUpdate();
          }}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          floatingLabelText={<Trans>Choose a font</Trans>}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          hintText={<Trans>Choose a font</Trans>}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledTextField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Initial text to display</Trans>}
            floatingLabelFixed
            id="text-object-initial-text"
            commitOnBlur
            translatableHintText={t`Enter the text to be displayed by the object`}
            fullWidth
            multiline
            rows={8}
            rowsMax={8}
            value={textObjectConfiguration.getText()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={value => {
              textObjectConfiguration.setText(value);
              this.forceUpdate();
              this.props.onSizeUpdated();
            }}
          />
        </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text size="block-title" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>Outline</Trans>
        </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Enabled</Trans>}
          checked={textObjectConfiguration.isOutlineEnabled()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
          onCheck={(e, checked) => {
            textObjectConfiguration.setOutlineEnabled(checked);
            this.forceUpdate();
          }}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResponsiveLineStackLayout noMargin noColumnMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ColorField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              floatingLabelText={<Trans>Color</Trans>}
              disableAlpha
              fullWidth
              color={textObjectConfiguration.getOutlineColor()}
// @ts-expect-error - TS7006 - Parameter 'color' implicitly has an 'any' type.
              onChange={color => {
                const rgbString =
                  color.length === 0 ? '' : rgbOrHexToRGBString(color);
                textObjectConfiguration.setOutlineColor(rgbString);
                this.forceUpdate();
              }}
            />
          </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SemiControlledTextField
              floatingLabelFixed
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              floatingLabelText={<Trans>Thickness</Trans>}
              type="number"
              value={textObjectConfiguration.getOutlineThickness()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
              onChange={value => {
                textObjectConfiguration.setOutlineThickness(
                  parseInt(value, 10) || 0
                );
                this.forceUpdate();
              }}
            />
          </Column>
        </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text size="block-title" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>Shadow</Trans>
        </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Enabled</Trans>}
          checked={textObjectConfiguration.isShadowEnabled()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
          onCheck={(e, checked) => {
            textObjectConfiguration.setShadowEnabled(checked);
            this.forceUpdate();
          }}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResponsiveLineStackLayout noMargin noColumnMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SemiControlledTextField
              floatingLabelFixed
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              floatingLabelText={<Trans>Distance</Trans>}
              type="number"
              value={textObjectConfiguration.getShadowDistance()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
              onChange={value => {
                textObjectConfiguration.setShadowDistance(
                  parseInt(value, 10) || 0
                );
                this.forceUpdate();
              }}
            />
          </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SemiControlledTextField
              floatingLabelFixed
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              floatingLabelText={<Trans>Angle</Trans>}
              type="number"
              value={textObjectConfiguration.getShadowAngle()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
              onChange={value => {
                textObjectConfiguration.setShadowAngle(
                  parseInt(value, 10) || 0
                );
                this.forceUpdate();
              }}
            />
          </Column>
        </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ColorField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              floatingLabelText={<Trans>Color</Trans>}
              disableAlpha
              fullWidth
              color={textObjectConfiguration.getShadowColor()}
// @ts-expect-error - TS7006 - Parameter 'color' implicitly has an 'any' type.
              onChange={color => {
                const rgbString =
                  color.length === 0 ? '' : rgbOrHexToRGBString(color);
                textObjectConfiguration.setShadowColor(rgbString);
                this.forceUpdate();
              }}
            />
          </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SemiControlledTextField
              floatingLabelFixed
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              floatingLabelText={<Trans>Opacity (0 - 255)</Trans>}
              type="number"
              value={textObjectConfiguration.getShadowOpacity()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
              onChange={value => {
                textObjectConfiguration.setShadowOpacity(
                  parseInt(value, 10) || 0
                );
                this.forceUpdate();
              }}
            />
          </Column>
        </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledTextField
            floatingLabelFixed
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Blur radius</Trans>}
            type="number"
            value={textObjectConfiguration.getShadowBlurRadius()}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={value => {
              textObjectConfiguration.setShadowBlurRadius(
                parseInt(value, 10) || 0
              );
              this.forceUpdate();
            }}
          />
        </Column>
      </ColumnStackLayout>
    );
  }
}
