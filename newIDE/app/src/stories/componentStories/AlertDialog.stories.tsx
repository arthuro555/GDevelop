import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
import { action } from '@storybook/addon-actions';
// @ts-expect-error - TS6142 - Module '../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../AlertDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/AlertDecorator.tsx', but '--jsx' is not set.
import alertDecorator from '../AlertDecorator';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../UI/Alert/AlertDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Alert/AlertDialog.tsx', but '--jsx' is not set.
import AlertDialog from '../../UI/Alert/AlertDialog';
import useAlertDialog from '../../UI/Alert/useAlertDialog';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, LargeSpacer } from '../../UI/Grid';

export const Default = () => {
  const {
// @ts-expect-error - TS2339 - Property 'showAlert' does not exist on type 'void'.
    showAlert,
// @ts-expect-error - TS2339 - Property 'showConfirmation' does not exist on type 'void'.
    showConfirmation,
// @ts-expect-error - TS2339 - Property 'showDeleteConfirmation' does not exist on type 'void'.
    showDeleteConfirmation,
// @ts-expect-error - TS2339 - Property 'showYesNoCancel' does not exist on type 'void'.
    showYesNoCancel,
  } = useAlertDialog();

  const onOpenAlertDialog = async () => {
    await showAlert({
      title: t`Sorry`,
      message: t`You cannot do this.`,
    });
    action('Dismissed')();
  };

  const onOpenYesNoCancelDialog = async () => {
    const answer = await showYesNoCancel({
      title: t`Warning`,
      message: t`Do you want to refactor your project?`,
    });
    if (answer === 0) {
      action('Yes')();
    } else if (answer === 1) {
      action('No')();
    } else {
      action('Cancel')();
    }
  };

  const onOpenConfirmDialog = async () => {
    const answer = await showConfirmation({
      title: t`You are about to delete an object`,
      message: t`Do you want to continue?`,
      confirmButtonLabel: t`Delete object`,
    });
    if (answer) action('Confirmed')();
    else action('Dismissed')();
  };

  const onOpenConfirmDeleteDialog = async () => {
    const answer = await showDeleteConfirmation({
      title: t`Do you really want to permanently delete your account?`,
      message: t`You’re about to permanently delete your GDevelop account username@mail.com. You will no longer be able to log into the app with this email address.`,
      fieldMessage: t`Type your email address to delete your account:`,
      confirmText: 'username@mail.com',
      confirmButtonLabel: t`Delete my account`,
    });
    if (answer) action('Delete Confirmed')();
    else action('Delete Dismissed')();
  };

  const onOpenConfirmDeleteWithoutConfirmTextDialog = async () => {
    const answer = await showDeleteConfirmation({
      title: t`Do you really want to permanently delete your account?`,
      message: t`You’re about to permanently delete your GDevelop account username@mail.com. You will no longer be able to log into the app with this email address.`,
      confirmButtonLabel: t`Delete my account`,
    });
    if (answer) action('Delete Confirmed')();
    else action('Delete Dismissed')();
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column alignItems="flex-start">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <RaisedButton label="Open alert dialog" onClick={onOpenAlertDialog} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <LargeSpacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <RaisedButton label="Open confirm dialog" onClick={onOpenConfirmDialog} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <LargeSpacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <RaisedButton
        label="Open confirm delete dialog"
        onClick={onOpenConfirmDeleteDialog}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <LargeSpacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <RaisedButton
        label="Open confirm delete dialog without confirm text"
        onClick={onOpenConfirmDeleteWithoutConfirmTextDialog}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <LargeSpacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <RaisedButton
        label="Open yes no cancel dialog"
        onClick={onOpenYesNoCancelDialog}
      />
    </Column>
  );
};

export default {
  title: 'UI Building Blocks/AlertDialog',
  component: AlertDialog,
  decorators: [paperDecorator, alertDecorator],
};
