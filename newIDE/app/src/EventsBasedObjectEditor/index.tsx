// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField from '../UI/TextField';
// @ts-expect-error - TS6142 - Module '../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../UI/SemiControlledTextField';
// @ts-expect-error - TS6142 - Module '../UI/DismissableAlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DismissableAlertMessage.tsx', but '--jsx' is not set.
import DismissableAlertMessage from '../UI/DismissableAlertMessage';
// @ts-expect-error - TS6142 - Module '../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../UI/Layout';
import useForceUpdate from '../Utils/UseForceUpdate';
// @ts-expect-error - TS6142 - Module '../UI/Checkbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Checkbox.tsx', but '--jsx' is not set.
import Checkbox from '../UI/Checkbox';
// @ts-expect-error - TS6142 - Module '../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../UI/HelpButton';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../MainFrame/UnsavedChangesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/UnsavedChangesContext.tsx', but '--jsx' is not set.
import { UnsavedChanges } from '../MainFrame/UnsavedChangesContext';

const gd: libGDevelop = global.gd;

type Props = {
  eventsBasedObject: gdEventsBasedObject,
  unsavedChanges?: UnsavedChanges | null | undefined
};

export default function EventsBasedObjectEditor({
  eventsBasedObject,
  unsavedChanges,
}: Props) {
  const forceUpdate = useForceUpdate();

  const onChange = React.useCallback(
    () => {
      if (unsavedChanges) {
        unsavedChanges.triggerUnsavedChanges();
      }
      forceUpdate();
    },
    [forceUpdate, unsavedChanges]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ColumnStackLayout expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <AlertMessage kind="warning">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Trans>
          The custom object editor is at a very early stage. A lot of features
          are missing or broken. Extensions written with it may no longer work
          in future GDevelop releases.
        </Trans>
      </AlertMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <DismissableAlertMessage
        identifier="events-based-object-explanation"
        kind="info"
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Trans>
          This is the configuration of your object. Make sure to choose a proper
          internal name as it's hard to change it later. Enter a description
          explaining how the object works.
        </Trans>
      </DismissableAlertMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <TextField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        floatingLabelText={<Trans>Internal Name</Trans>}
        value={eventsBasedObject.getName()}
        disabled
        fullWidth
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SemiControlledTextField
        commitOnBlur
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        floatingLabelText={<Trans>Name displayed in editor</Trans>}
        value={eventsBasedObject.getFullName()}
// @ts-expect-error - TS7006 - Parameter 'text' implicitly has an 'any' type.
        onChange={text => {
          eventsBasedObject.setFullName(text);
          onChange();
        }}
        fullWidth
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SemiControlledTextField
        commitOnBlur
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        floatingLabelText={<Trans>Description</Trans>}
        floatingLabelFixed
        translatableHintText={t`The description of the object should explain what the object is doing, and, briefly, how to use it.`}
        value={eventsBasedObject.getDescription()}
// @ts-expect-error - TS7006 - Parameter 'text' implicitly has an 'any' type.
        onChange={text => {
          eventsBasedObject.setDescription(text);
          onChange();
        }}
        multiline
        fullWidth
        rows={3}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SemiControlledTextField
        commitOnBlur
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        floatingLabelText={<Trans>Default name for created objects</Trans>}
        value={
          eventsBasedObject.getDefaultName() || eventsBasedObject.getName()
        }
// @ts-expect-error - TS7006 - Parameter 'newName' implicitly has an 'any' type.
        onChange={newName => {
          eventsBasedObject.setDefaultName(gd.Project.getSafeName(newName));
          onChange();
        }}
        fullWidth
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        label={<Trans>Use 3D rendering</Trans>}
        checked={eventsBasedObject.isRenderedIn3D()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
        onCheck={(e, checked) => {
          eventsBasedObject.markAsRenderedIn3D(checked);
          onChange();
        }}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        label={<Trans>Has animations</Trans>}
        checked={eventsBasedObject.isAnimatable()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
        onCheck={(e, checked) => {
          eventsBasedObject.markAsAnimatable(checked);
          onChange();
        }}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        label={<Trans>Contains text</Trans>}
        checked={eventsBasedObject.isTextContainer()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
        onCheck={(e, checked) => {
          eventsBasedObject.markAsTextContainer(checked);
          onChange();
        }}
      />
      {eventsBasedObject.getEventsFunctions().getEventsFunctionsCount() ===
        0 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <DismissableAlertMessage
          identifier="empty-events-based-object-explanation"
          kind="info"
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            Once you're done, start adding some functions to the object. Then,
            test the object by adding it to a scene.
          </Trans>
        </DismissableAlertMessage>
      )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <HelpButton key="help" helpPagePath="/objects/events-based-objects" />
      </Line>
    </ColumnStackLayout>
  );
}
