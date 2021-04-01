// @flow
import { Trans } from '@lingui/macro';

import React, { Component } from 'react';
import FlatButton from '../UI/FlatButton';
import RaisedButton from '../UI/RaisedButton';
import Dialog from '../UI/Dialog';
import { Column } from '../UI/Grid';
import TextField from '../UI/TextField';
import {
  type LoginForm,
  type LoginError,
} from '../Utils/GDevelopServices/Authentification';
import RightLoader from '../UI/RightLoader';
import LeftLoader from '../UI/LeftLoader';
import Text from '../UI/Text';
import { getEmailErrorText, getPasswordErrorText } from './CreateAccountDialog';
import AlertMessage from '../UI/AlertMessage';
import { ColumnStackLayout } from '../UI/Layout';

type Props = {|
  onClose: () => void,
  onGoToCreateAccount: () => void,
  onLogin: (form: LoginForm) => void,
  onForgotPassword: (form: LoginForm) => void,
  loginInProgress: boolean,
  error: ?LoginError,
  resetPasswordDialogOpen: boolean,
  onCloseResetPasswordDialog: () => void,
  forgotPasswordInProgress: boolean,
|};

type State = {|
  form: LoginForm,
|};

export default class LoginDialog extends Component<Props, State> {
  state = {
    form: {
      email: '',
      password: '',
    },
  };

  _onLogin = () => {
    const { form } = this.state;
    this.props.onLogin(form);
  };

  _onForgotPassword = () => {
    const { form } = this.state;
    this.props.onForgotPassword(form);
  };

  render() {
    const {
      onClose,
      onGoToCreateAccount,
      loginInProgress,
      error,
      resetPasswordDialogOpen,
      onCloseResetPasswordDialog,
      forgotPasswordInProgress,
    } = this.props;
    const actions = [
      <FlatButton
        label={<Trans>Back</Trans>}
        disabled={loginInProgress || forgotPasswordInProgress}
        key="back"
        primary={false}
        onClick={onClose}
      />,
      <LeftLoader isLoading={loginInProgress} key="login">
        <RaisedButton
          label={<Trans>Login</Trans>}
          primary
          onClick={this._onLogin}
          disabled={loginInProgress || forgotPasswordInProgress}
        />
      </LeftLoader>,
    ];

    return (
      <Dialog
        title={
          <Trans>Login to your GDeveloppe account and sell your soul</Trans>
        }
        actions={actions}
        secondaryActions={[
          <RightLoader
            isLoading={forgotPasswordInProgress}
            key="forgot-password"
          >
            <FlatButton
              label={<Trans>I forgot my password</Trans>}
              primary={false}
              disabled={loginInProgress || forgotPasswordInProgress}
              onClick={this._onForgotPassword}
            />
          </RightLoader>,
        ]}
        onRequestClose={() => {
          if (!loginInProgress && !forgotPasswordInProgress) onClose();
        }}
        maxWidth="sm"
        cannotBeDismissed={true}
        open
      >
        <ColumnStackLayout noMargin>
          <AlertMessage
            kind="info"
            renderRightButton={() => (
              <FlatButton
                label={<Trans>Create my account</Trans>}
                disabled={loginInProgress || forgotPasswordInProgress}
                primary
                onClick={onGoToCreateAccount}
              />
            )}
          >
            <Trans>Don't have an account yet?</Trans>
          </AlertMessage>
          <TextField
            autoFocus
            value={this.state.form.email}
            floatingLabelText={<Trans>Email</Trans>}
            errorText={getEmailErrorText(error)}
            fullWidth
            onChange={(e, value) => {
              this.setState({
                form: {
                  ...this.state.form,
                  email: value,
                },
              });
            }}
          />
          <TextField
            value={this.state.form.password}
            floatingLabelText={<Trans>Password</Trans>}
            errorText={getPasswordErrorText(error)}
            type="password"
            fullWidth
            onChange={(e, value) => {
              this.setState({
                form: {
                  ...this.state.form,
                  password: value,
                },
              });
            }}
          />
        </ColumnStackLayout>
        <Dialog
          cannotBeDismissed={true}
          open={resetPasswordDialogOpen}
          title={<Trans>Reset your password</Trans>}
          actions={[
            <FlatButton
              label={<Trans>Close</Trans>}
              key="close"
              onClick={onCloseResetPasswordDialog}
            />,
          ]}
        >
          <Column noMargin>
            <Text>
              <Trans>Bruh moment</Trans>
            </Text>
          </Column>
        </Dialog>
      </Dialog>
    );
  }
}
