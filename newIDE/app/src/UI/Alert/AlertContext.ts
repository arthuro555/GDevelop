import * as React from 'react';
import { MessageDescriptor } from '../../Utils/i18n/MessageDescriptor.flow';

// Alert
export type ShowAlertDialogOptions = {
  title: MessageDescriptor,
  dismissButtonLabel?: MessageDescriptor,
  message: MessageDescriptor
};
export type ShowAlertDialogOptionsWithCallback = (ShowAlertDialogOptions) & {
  callback: any
};
export type ShowAlertFunction = (arg1: ShowAlertDialogOptions) => Promise<void>;

// Confirm
export type ShowConfirmDialogOptions = {
  title: MessageDescriptor,
  confirmButtonLabel?: MessageDescriptor,
  dismissButtonLabel?: MessageDescriptor,
  message: MessageDescriptor,
  level?: 'info' | 'warning',
  maxWidth?: 'xs' | 'sm' | 'md',
  makeDismissButtonPrimary?: boolean
};
export type ShowConfirmDialogOptionsWithCallback = (ShowConfirmDialogOptions) & {
  callback: any
};
export type ShowConfirmFunction = (arg1: ShowConfirmDialogOptions) => Promise<boolean>;

// Confirm Delete
export type ShowConfirmDeleteDialogOptions = {
  title: MessageDescriptor,
  confirmButtonLabel?: MessageDescriptor,
  dismissButtonLabel?: MessageDescriptor,
  message: MessageDescriptor,
  fieldMessage?: MessageDescriptor,
  confirmText?: string
};
export type ShowConfirmDeleteDialogOptionsWithCallback = (ShowConfirmDeleteDialogOptions) & {
  callback: any
};
export type ShowConfirmDeleteFunction = (arg1: ShowConfirmDeleteDialogOptions) => Promise<boolean>;

// Yes No Cancel
export type ShowYesNoCancelDialogOptions = {
  title: MessageDescriptor,
  yesButtonLabel?: MessageDescriptor,
  noButtonLabel?: MessageDescriptor,
  cancelButtonLabel?: MessageDescriptor,
  message: MessageDescriptor
};
export type ShowYesNoCancelDialogOptionsWithCallback = (ShowYesNoCancelDialogOptions) & {
  callback: any
};

export type ConfirmState = {
  showAlertDialog: (arg1: ShowAlertDialogOptionsWithCallback) => void,
  showConfirmDialog: (arg1: ShowConfirmDialogOptionsWithCallback) => void,
  showConfirmDeleteDialog: (arg1: ShowConfirmDeleteDialogOptionsWithCallback) => void,
  showYesNoCancelDialog: (arg1: ShowYesNoCancelDialogOptionsWithCallback) => void
};

const initialConfirmState = {
// @ts-expect-error - TS7006 - Parameter 'ShowAlertDialogOptionsWithCallback' implicitly has an 'any' type.
  showAlertDialog: ShowAlertDialogOptionsWithCallback => {},
// @ts-expect-error - TS7006 - Parameter 'ShowConfirmDialogOptionsWithCallback' implicitly has an 'any' type.
  showConfirmDialog: ShowConfirmDialogOptionsWithCallback => {},
// @ts-expect-error - TS7006 - Parameter 'ShowConfirmDeleteDialogOptionsWithCallback' implicitly has an 'any' type.
  showConfirmDeleteDialog: ShowConfirmDeleteDialogOptionsWithCallback => {},
// @ts-expect-error - TS7006 - Parameter 'ShowYesNoCancelDialogOptionsWithCallback' implicitly has an 'any' type.
  showYesNoCancelDialog: ShowYesNoCancelDialogOptionsWithCallback => {},
} as const;

const AlertContext = React.createContext<ConfirmState>(initialConfirmState);

export default AlertContext;
