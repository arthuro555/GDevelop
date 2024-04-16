// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/BackgroundText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/BackgroundText.tsx', but '--jsx' is not set.
import BackgroundText from '../UI/BackgroundText';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
import { StorageProviderOperations } from '.';

type OpenConfirmDialogProps = {
  onClose: () => void,
  onConfirm: () => void
};

export const OpenConfirmDialog = ({
  onClose,
  onConfirm,
}: OpenConfirmDialogProps) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>Confirm the opening</Trans>}
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Cancel</Trans>}
          key="close"
          primary={false}
          onClick={onClose}
        />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <DialogPrimaryButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Open the project</Trans>}
          key="open-project"
          primary
          onClick={onConfirm}
        />,
      ]}
      onRequestClose={onClose}
      onApply={onConfirm}
      open
      maxWidth="sm"
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              You're about to open (or re-open) a project. Click on "Open the
              Project" to continue.
            </Trans>
          </Text>
        </Column>
      </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <BackgroundText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              If you have a popup blocker interrupting the opening, allow the
              popups and try a second time to open the project.
            </Trans>
          </BackgroundText>
        </Column>
      </Line>
    </Dialog>
  );
};

export const useOpenConfirmDialog = () => {
  const interactionMade = React.useRef(false);
  const pendingConfirmationPromiseResolve = React.useRef<(arg1: boolean) => void | null | undefined>(null);
  const [openConfirmDialogOpen, openOpenConfirmDialog] = React.useState(false);

  return {
    /**
     * Ensure that the user does an interaction (i.e: click on a button), before
     * resolving the promise, if the specified storage provider needs an interaction.
     * This is for example the case when opening directly the web-app with a file
     * to open from the URL (like a Google Drive file).
     */
    ensureInteractionHappened: (storageProviderOperations: StorageProviderOperations): Promise<boolean> => {
      return new Promise(resolve: (result: Promise<boolean> | boolean) => void => {
        if (
          interactionMade.current ||
          !storageProviderOperations.doesInitialOpenRequireUserInteraction
        ) {
          // No need for any interaction, just proceed.
          resolve(true);
          return;
        }

        // We need an interaction first, display a confirmation dialog
        console.info(
          'Displaying confirmation dialog to ensure an interaction is made before continuing.'
        );
        pendingConfirmationPromiseResolve.current = resolve;
        openOpenConfirmDialog(true);
// @ts-expect-error - TS1128 - Declaration or statement expected.
      });
// @ts-expect-error - TS1128 - Declaration or statement expected. | TS1128 - Declaration or statement expected.
    },
    /**
     * Render, if needed, the dialog that will ask the user to confirm the opening.
     */
// @ts-expect-error - TS2695 - Left side of comma operator is unused and has no side effects.
    renderOpenConfirmDialog: () => {
      if (!openConfirmDialogOpen) return null;

      const closeAndResolveWith = (proceed: boolean) => {
        interactionMade.current = true;
        openOpenConfirmDialog(false);
        const resolve = pendingConfirmationPromiseResolve.current;
        if (resolve) {
          resolve(proceed);
          pendingConfirmationPromiseResolve.current = null;
        }
      };

      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <OpenConfirmDialog
          onClose={() => closeAndResolveWith(false)}
          onConfirm={() => closeAndResolveWith(true)}
        />
      );
    },
// @ts-expect-error - TS1109 - Expression expected.
  };
// @ts-expect-error - TS1128 - Declaration or statement expected.
};
