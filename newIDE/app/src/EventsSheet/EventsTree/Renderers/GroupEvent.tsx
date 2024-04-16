// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t} from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'classnames'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/classnames/index.js' implicitly has an 'any' type.
import classNames from 'classnames';
// @ts-expect-error - TS6142 - Module '../../../UI/TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField, { TextFieldInterface } from '../../../UI/TextField';
import {
  largeSelectedArea,
  largeSelectableArea,
  selectableArea,
  disabledText,
} from '../ClassNames';
import { EventRendererProps } from './EventRenderer';
import {
  shouldActivate,
  shouldCloseOrCancel,
  shouldSubmit,
  shouldValidate,
} from '../../../UI/KeyboardShortcuts/InteractionKeys';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import { dataObjectToProps } from '../../../Utils/HTMLDataset';
const gd: libGDevelop = global.gd;

const styles = {
  container: {
    height: '2.5em',
    display: 'flex',
    alignItems: 'center',
    padding: 5,
    overflow: 'hidden',
  },
  title: {
    fontSize: '1.3em',
    width: '100%',
  },
} as const;

export default class GroupEvent extends React.Component<EventRendererProps, any> {
  state = {
    editing: false,
    editingPreviousValue: null,
  };
  _textField: TextFieldInterface | null | undefined = null;

  edit = () => {
    if (this.state.editing) return;
    const groupEvent = gd.asGroupEvent(this.props.event);
    if (!this.state.editingPreviousValue) {
      this.setState({ editingPreviousValue: groupEvent.getName() });
    }
    this.setState(
      {
        editing: true,
      },
      () => {
        if (this._textField) this._textField.focus();
      }
    );
  };

  endEditing = () => {
    this.setState({
      editing: false,
    });
    const groupEvent = gd.asGroupEvent(this.props.event);
    if (groupEvent.getName() !== this.state.editingPreviousValue) {
      this.props.onEndEditingEvent();
      this.setState({ editingPreviousValue: null });
    }
  };

  render() {
    var groupEvent = gd.asGroupEvent(this.props.event);

    const r = groupEvent.getBackgroundColorR(),
      g = groupEvent.getBackgroundColorG(),
      b = groupEvent.getBackgroundColorB();

    const textColor = (r + g + b) / 3 > 200 ? 'black' : 'white';

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <div
        className={classNames({
          [largeSelectableArea]: true,
          [largeSelectedArea]: this.props.selected,
        })}
        style={{
          ...styles.container,
          backgroundColor: `rgb(${r}, ${g}, ${b})`,
        }}
        onClick={this.edit}
        onKeyUp={event => {
          if (shouldActivate(event)) {
            this.edit();
          }
        }}
        tabIndex={0}
        id={`${this.props.idPrefix}-group-${
          groupEvent.isFolded() ? 'folded' : 'unfolded'
        }`}
      >
        {this.state.editing ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <TextField
            margin="none"
// @ts-expect-error - TS7006 - Parameter 'textField' implicitly has an 'any' type.
            ref={textField => (this._textField = textField)}
            value={groupEvent.getName()}
            translatableHintText={t`<Enter group name>`}
            onBlur={this.endEditing}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'text' implicitly has an 'any' type.
            onChange={(e, text) => {
              groupEvent.setName(text);
              this.forceUpdate();
            }}
            style={styles.title}
            inputStyle={{
              color: textColor,
              WebkitTextFillColor: textColor,
            }}
            fullWidth
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
            onKeyUp={event => {
              if (shouldCloseOrCancel(event)) {
                this.endEditing();
              }
            }}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
            onKeyDown={event => {
              if (shouldValidate(event) || shouldSubmit(event)) {
                this.endEditing();
              }
            }}
            underlineShow={false}
          />
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <span
            className={classNames({
              [selectableArea]: true,
              [disabledText]: this.props.disabled,
            })}
            style={{ ...styles.title, color: textColor }}
            {...dataObjectToProps({ editableText: 'true' })}
          >
            {groupEvent.getName() ? (
              groupEvent.getName()
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>{`<Enter group name>`}</Trans>
            )}
          </span>
        )}
      </div>
    );
  }
}
