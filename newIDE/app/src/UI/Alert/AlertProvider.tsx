import * as React from 'react';
import AlertContext from './AlertContext';
// @ts-expect-error - TS6142 - Module './AlertDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Alert/AlertDialog.tsx', but '--jsx' is not set.
import AlertDialog from './AlertDialog';
// @ts-expect-error - TS6142 - Module './ConfirmDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Alert/ConfirmDialog.tsx', but '--jsx' is not set.
import ConfirmDialog from './ConfirmDialog';
// @ts-expect-error - TS6142 - Module './ConfirmDeleteDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Alert/ConfirmDeleteDialog.tsx', but '--jsx' is not set.
import ConfirmDeleteDialog from './ConfirmDeleteDialog';
import {
  ShowAlertDialogOptionsWithCallback,
  ShowConfirmDeleteDialogOptionsWithCallback,
  ShowConfirmDialogOptionsWithCallback,
  ShowYesNoCancelDialogOptionsWithCallback,
} from './AlertContext';
// @ts-expect-error - TS6142 - Module './YesNoCancelDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Alert/YesNoCancelDialog.tsx', but '--jsx' is not set.
import YesNoCancelDialog from './YesNoCancelDialog';

type Props = {
  children: React.ReactNode
};

function ConfirmProvider({
  children,
}: Props) {
  // Alert
  const [alertDialogOpen, setAlertDialogOpen] = React.useState<boolean>(false);
  const [
    alertDialogConfig,
    setAlertDialogConfig,
  ] = React.useState<ShowAlertDialogOptionsWithCallback | null | undefined>(null);
  const openAlertDialog = React.useCallback(
    (options: ShowAlertDialogOptionsWithCallback) => {
      setAlertDialogOpen(true);
      setAlertDialogConfig(options);
    },
    []
  );

  // Confirm
  const [confirmDialogOpen, setConfirmDialogOpen] = React.useState<boolean>(false);
  const [
    confirmDialogConfig,
    setConfirmDialogConfig,
  ] = React.useState<ShowConfirmDialogOptionsWithCallback | null | undefined>(null);
  const openConfirmDialog = React.useCallback(
    (options: ShowConfirmDialogOptionsWithCallback) => {
      setConfirmDialogOpen(true);
      setConfirmDialogConfig(options);
    },
    []
  );

  // Confirm Delete
  const [
    confirmDeleteDialogOpen,
    setConfirmDeleteDialogOpen,
  ] = React.useState<boolean>(false);
  const [
    confirmDeleteDialogConfig,
    setConfirmDeleteDialogConfig,
  ] = React.useState<ShowConfirmDeleteDialogOptionsWithCallback | null | undefined>(null);
  const openConfirmDeleteDialog = React.useCallback(
    (options: ShowConfirmDeleteDialogOptionsWithCallback) => {
      setConfirmDeleteDialogOpen(true);
      setConfirmDeleteDialogConfig(options);
    },
    []
  );

  // Confirm
  const [
    yesNoCancelDialogOpen,
    setYesNoCancelDialogOpen,
  ] = React.useState<boolean>(false);
  const [
    yesNoCancelDialogConfig,
    setYesNoCancelDialogConfig,
  ] = React.useState<ShowYesNoCancelDialogOptionsWithCallback | null | undefined>(null);
  const openYesNoCancelDialog = React.useCallback(
    (options: ShowYesNoCancelDialogOptionsWithCallback) => {
      setYesNoCancelDialogOpen(true);
      setYesNoCancelDialogConfig(options);
    },
    []
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AlertContext.Provider
      value={{
        showAlertDialog: openAlertDialog,
        showConfirmDialog: openConfirmDialog,
        showConfirmDeleteDialog: openConfirmDeleteDialog,
        showYesNoCancelDialog: openYesNoCancelDialog,
      }}
    >
      {children}
      {alertDialogConfig && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <AlertDialog
          open={alertDialogOpen}
          onDismiss={() => {
            setAlertDialogOpen(false);
            alertDialogConfig.callback();
          }}
          dismissButtonLabel={alertDialogConfig.dismissButtonLabel}
          title={alertDialogConfig.title}
          message={alertDialogConfig.message}
        />
      )}
      {confirmDialogConfig && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ConfirmDialog
          open={confirmDialogOpen}
          onConfirm={() => {
            setConfirmDialogOpen(false);
            confirmDialogConfig.callback(true);
          }}
          confirmButtonLabel={confirmDialogConfig.confirmButtonLabel}
          onDismiss={() => {
            setConfirmDialogOpen(false);
            confirmDialogConfig.callback(false);
          }}
          dismissButtonLabel={confirmDialogConfig.dismissButtonLabel}
          title={confirmDialogConfig.title}
          message={confirmDialogConfig.message}
          level={confirmDialogConfig.level || 'info'}
          maxWidth={confirmDialogConfig.maxWidth}
          makeDismissButtonPrimary={
            confirmDialogConfig.makeDismissButtonPrimary
          }
        />
      )}
      {confirmDeleteDialogConfig && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ConfirmDeleteDialog
          open={confirmDeleteDialogOpen}
          onConfirm={() => {
            setConfirmDeleteDialogOpen(false);
            confirmDeleteDialogConfig.callback(true);
          }}
          confirmButtonLabel={confirmDeleteDialogConfig.confirmButtonLabel}
          onDismiss={() => {
            setConfirmDeleteDialogOpen(false);
            confirmDeleteDialogConfig.callback(false);
          }}
          dismissButtonLabel={confirmDeleteDialogConfig.dismissButtonLabel}
          title={confirmDeleteDialogConfig.title}
          message={confirmDeleteDialogConfig.message}
          fieldMessage={confirmDeleteDialogConfig.fieldMessage}
          confirmText={confirmDeleteDialogConfig.confirmText}
        />
      )}
      {yesNoCancelDialogConfig && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <YesNoCancelDialog
          open={yesNoCancelDialogOpen}
          onClickYes={() => {
            setYesNoCancelDialogOpen(false);
            yesNoCancelDialogConfig.callback(0);
          }}
          yesButtonLabel={yesNoCancelDialogConfig.yesButtonLabel}
          onClickNo={() => {
            setYesNoCancelDialogOpen(false);
            yesNoCancelDialogConfig.callback(1);
          }}
          noButtonLabel={yesNoCancelDialogConfig.noButtonLabel}
          onClickCancel={() => {
            setYesNoCancelDialogOpen(false);
            yesNoCancelDialogConfig.callback(2);
          }}
          cancelButtonLabel={yesNoCancelDialogConfig.cancelButtonLabel}
          title={yesNoCancelDialogConfig.title}
          message={yesNoCancelDialogConfig.message}
        />
      )}
    </AlertContext.Provider>
  );
}

export default ConfirmProvider;
