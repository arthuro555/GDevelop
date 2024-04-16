import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans, t } from '@lingui/macro';

// @ts-expect-error - TS6142 - Module '../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../../UI/TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField from '../../UI/TextField';
import { CLOUD_PROJECT_NAME_MAX_LENGTH } from '../../Utils/GDevelopServices/Project';

type Props = {
  onCancel: () => void,
  nameSuggestion: string,
  onSave: (newCloudProjectName: string) => void
};

const CloudSaveAsDialog = (props: Props) => {
  const [name, setName] = React.useState<string>(props.nameSuggestion);
  const [error, setError] = React.useState<string | null | undefined>(null);

  const onSave = (i18n: I18nType) => {
    setError(null);
    if (!name) {
      setError(i18n._(t`Project name cannot be empty.`));
      return;
    }
    props.onSave(name);
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          title={<Trans>Choose a name for your new project</Trans>}
          onApply={() => onSave(i18n)}
          actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <FlatButton
              key="cancel"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Cancel</Trans>}
              primary={false}
              onClick={props.onCancel}
            />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <DialogPrimaryButton
              key="save"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Save</Trans>}
              primary
              onClick={() => onSave(i18n)}
            />,
          ]}
          open
          onRequestClose={props.onCancel}
          maxWidth="sm"
          flexBody
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TextField
            autoFocus="desktop"
            fullWidth
            maxLength={CLOUD_PROJECT_NAME_MAX_LENGTH}
            errorText={error}
            translatableHintText={t`Project name`}
            type="text"
            value={name}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'newName' implicitly has an 'any' type.
            onChange={(e, newName) => {
              setName(newName);
            }}
          />
        </Dialog>
      )}
    </I18n>
  );
};

export default CloudSaveAsDialog;
