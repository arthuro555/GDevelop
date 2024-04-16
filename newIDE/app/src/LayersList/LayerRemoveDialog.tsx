// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import React, { Component } from 'react';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../UI/SelectOption';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './EnumerateLayers'. '/home/arthuro555/code/GDevelop/newIDE/app/src/LayersList/EnumerateLayers.js' implicitly has an 'any' type.
import enumerateLayers from './EnumerateLayers';

const gd: libGDevelop = global.gd;

type Props = {
  open: boolean,
  project: gdProject,
  layersContainer: gdLayout,
  layerRemoved: string,
  onClose: (doRemove: boolean, newLayer: string | null) => void
};

type State = {
  selectedLayer: string
};

export default class LayerRemoveDialog extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      selectedLayer: '',
    };
  }

  // To be updated, see https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops.
  UNSAFE_componentWillReceiveProps(newProps: Props) {
    if (!this.props.open && newProps.open) {
      this.setState({
        selectedLayer: '',
      });
    }
  }

  render() {
    if (!this.props.layersContainer || !this.props.open) return null;

    const instancesCountInLayout = gd.WholeProjectRefactorer.getLayoutAndExternalLayoutLayerInstancesCount(
      this.props.project,
      this.props.layersContainer,
      this.props.layerRemoved
    );

    let actions = [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <FlatButton
        key="cancel"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        label={<Trans>Cancel</Trans>}
        keyboardFocused={true}
        onClick={() => this.props.onClose(false, null)}
      />,
    ];

    if (instancesCountInLayout > 0) {
      actions = actions.concat([
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
          key="remove"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Remove objects</Trans>}
          onClick={() => this.props.onClose(true, null)}
        />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <DialogPrimaryButton
          key="move"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Move objects</Trans>}
          primary={true}
          onClick={() => this.props.onClose(true, this.state.selectedLayer)}
        />,
      ]);
    } else {
      actions.push(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <DialogPrimaryButton
          key="continue"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Continue</Trans>}
          primary={true}
          onClick={() => this.props.onClose(true, null)}
        />
      );
    }

    const layers = enumerateLayers(this.props.layersContainer);
    const choices = layers
// @ts-expect-error - TS7031 - Binding element 'value' implicitly has an 'any' type.
      .filter(({ value }) => {
        return value !== this.props.layerRemoved;
      })
// @ts-expect-error - TS7031 - Binding element 'value' implicitly has an 'any' type. | TS7031 - Binding element 'label' implicitly has an 'any' type. | TS7031 - Binding element 'labelIsUserDefined' implicitly has an 'any' type.
      .map(({ value, label, labelIsUserDefined }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <SelectOption
          key={value}
          value={value}
          label={label}
          shouldNotTranslate={labelIsUserDefined}
        />
      ));

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        title={<Trans>Objects on {this.props.layerRemoved}</Trans>}
        actions={actions}
        open={this.props.open}
        onRequestClose={() => this.props.onClose(false, null)}
        onApply={
          instancesCountInLayout > 0
            ? () => this.props.onClose(true, this.state.selectedLayer)
            : () => this.props.onClose(true, null)
        }
        flexColumnBody
        maxWidth="sm"
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text>
          {instancesCountInLayout === 0 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>
              The layer {this.props.layerRemoved} does not contain any object
              instances. Continue?
            </Trans>
          ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>
              There are {instancesCountInLayout} object instances on this layer.
              Should they be moved to another layer?
            </Trans>
          )}
        </Text>
        {instancesCountInLayout > 0 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                Move objects from layer {this.props.layerRemoved} to:
              </Trans>
            </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SelectField
              value={this.state.selectedLayer}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type. | TS7006 - Parameter 'index' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
              onChange={(event, index, newValue) => {
                this.setState({ selectedLayer: newValue });
              }}
            >
              {choices}
            </SelectField>
          </>
        )}
      </Dialog>
    );
  }
}
