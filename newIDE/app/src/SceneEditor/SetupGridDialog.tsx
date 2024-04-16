// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField from '../UI/TextField';
// @ts-expect-error - TS6142 - Module '../UI/Checkbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Checkbox.tsx', but '--jsx' is not set.
import Checkbox from '../UI/Checkbox';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, ResponsiveLineStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/ColorField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ColorField/index.tsx', but '--jsx' is not set.
import ColorField from '../UI/ColorField';
import {
  InstancesEditorSettings,
  cloneInstancesEditorSettings,
} from '../InstancesEditor/InstancesEditorSettings';
import {
  hexNumberToRGBString,
  rgbStringToHexNumber,
} from '../Utils/ColorTransformer';

type Props = {
  instancesEditorSettings: InstancesEditorSettings,
  onChangeInstancesEditorSettings: (arg1: InstancesEditorSettings) => void,
  onApply: () => void,
  onCancel: () => void
};

/** Below this value, rendering the grid is too costly (risk of infinite loop/memory saturation). */
const GRID_MIN_VALUE = 0.01;

export default function SetupGridDialog(props: Props) {
  const [previousOptions] = React.useState(() =>
    cloneInstancesEditorSettings(props.instancesEditorSettings)
  );

  const onCancel = () => {
    props.onChangeInstancesEditorSettings({
      ...props.instancesEditorSettings,
      gridWidth: previousOptions.gridWidth,
      gridHeight: previousOptions.gridHeight,
      gridOffsetX: previousOptions.gridOffsetX,
      gridOffsetY: previousOptions.gridOffsetY,
      gridColor: previousOptions.gridColor,
      gridType: previousOptions.gridType,
    });
    props.onCancel();
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>Edit Grid Options</Trans>}
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
          key="cancel"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Cancel</Trans>}
          primary={false}
          onClick={onCancel}
        />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <DialogPrimaryButton
          key="apply"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Apply</Trans>}
          primary={true}
          onClick={props.onApply}
        />,
      ]}
      onRequestClose={onCancel}
      onApply={props.onApply}
      open
      maxWidth="sm"
      exceptionallyStillAllowRenderingInstancesEditors
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResponsiveLineStackLayout noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ColorField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Line color</Trans>}
            fullWidth
            color={hexNumberToRGBString(
              props.instancesEditorSettings.gridColor
            )}
            alpha={props.instancesEditorSettings.gridAlpha}
// @ts-expect-error - TS7006 - Parameter 'color' implicitly has an 'any' type. | TS7006 - Parameter 'alpha' implicitly has an 'any' type.
            onChange={(color, alpha) => {
              props.onChangeInstancesEditorSettings({
                ...props.instancesEditorSettings,
                gridColor: rgbStringToHexNumber(color),
                // alpha can be 0 and we need to handle this case.
                gridAlpha: alpha === undefined || alpha === null ? 1 : alpha,
              });
            }}
          />
        </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResponsiveLineStackLayout noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TextField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Cell width (in pixels)</Trans>}
            fullWidth
            type="number"
            value={props.instancesEditorSettings.gridWidth}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={(e, value) =>
              props.onChangeInstancesEditorSettings({
                ...props.instancesEditorSettings,
                gridWidth: Math.max(parseFloat(value), GRID_MIN_VALUE),
              })
            }
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TextField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Cell height (in pixels)</Trans>}
            fullWidth
            type="number"
            value={props.instancesEditorSettings.gridHeight}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={(e, value) =>
              props.onChangeInstancesEditorSettings({
                ...props.instancesEditorSettings,
                gridHeight: Math.max(parseFloat(value), GRID_MIN_VALUE),
              })
            }
          />
        </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResponsiveLineStackLayout noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TextField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>X offset (in pixels)</Trans>}
            fullWidth
            type="number"
            value={props.instancesEditorSettings.gridOffsetX}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={(e, value) =>
              props.onChangeInstancesEditorSettings({
                ...props.instancesEditorSettings,
                gridOffsetX: parseFloat(value),
              })
            }
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TextField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Y offset (in pixels)</Trans>}
            fullWidth
            type="number"
            value={props.instancesEditorSettings.gridOffsetY}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={(e, value) =>
              props.onChangeInstancesEditorSettings({
                ...props.instancesEditorSettings,
                gridOffsetY: parseFloat(value),
              })
            }
          />
        </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResponsiveLineStackLayout noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Checkbox
            checked={props.instancesEditorSettings.gridType === 'isometric'}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Isometric</Trans>}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'check' implicitly has an 'any' type.
            onCheck={(e, check) =>
              props.onChangeInstancesEditorSettings({
                ...props.instancesEditorSettings,
                gridType: check ? 'isometric' : 'rectangular',
              })
            }
          />
        </ResponsiveLineStackLayout>
      </ColumnStackLayout>
    </Dialog>
  );
}
