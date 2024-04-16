// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField from '../UI/TextField';
// @ts-expect-error - TS6142 - Module '../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../UI/SemiControlledTextField';
// @ts-expect-error - TS6142 - Module '../ObjectTypeSelector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectTypeSelector/index.tsx', but '--jsx' is not set.
import ObjectTypeSelector from '../ObjectTypeSelector';
// @ts-expect-error - TS6142 - Module '../UI/DismissableAlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DismissableAlertMessage.tsx', but '--jsx' is not set.
import DismissableAlertMessage from '../UI/DismissableAlertMessage';
// @ts-expect-error - TS6142 - Module '../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../UI/Layout';
import useForceUpdate from '../Utils/UseForceUpdate';
// @ts-expect-error - TS6142 - Module '../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../UI/HelpButton';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../MainFrame/UnsavedChangesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/UnsavedChangesContext.tsx', but '--jsx' is not set.
import { UnsavedChanges } from '../MainFrame/UnsavedChangesContext';
// @ts-expect-error - TS6142 - Module '../UI/Checkbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Checkbox.tsx', but '--jsx' is not set.
import Checkbox from '../UI/Checkbox';
// @ts-expect-error - TS6142 - Module '../EventsFunctionsExtensionEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsFunctionsExtensionEditor/index.tsx', but '--jsx' is not set.
import { ExtensionItemConfigurationAttribute } from '../EventsFunctionsExtensionEditor';

const gd: libGDevelop = global.gd;

type Props = {
  project: gdProject,
  eventsFunctionsExtension: gdEventsFunctionsExtension,
  eventsBasedBehavior: gdEventsBasedBehavior,
  unsavedChanges?: UnsavedChanges | null | undefined,
  onConfigurationUpdated?: (arg1?: ExtensionItemConfigurationAttribute | null | undefined) => void
};

export default function EventsBasedBehaviorEditor({
  project,
  eventsFunctionsExtension,
  eventsBasedBehavior,
  unsavedChanges,
  onConfigurationUpdated,
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

  // An array containing all the object types that are using the behavior
  const allObjectTypes: Array<string> = React.useMemo(
    () =>
      gd.WholeProjectRefactorer.getAllObjectTypesUsingEventsBasedBehavior(
        project,
        eventsFunctionsExtension,
        eventsBasedBehavior
      )
        .toNewVectorString()
        .toJSArray(),
    [project, eventsFunctionsExtension, eventsBasedBehavior]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
      {({
        i18n,
      }: {
        i18n: I18nType
      }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ColumnStackLayout expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <DismissableAlertMessage
            identifier="events-based-behavior-explanation"
            kind="info"
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              This is the configuration of your behavior. Make sure to choose a
              proper internal name as it's hard to change it later. Enter a
              description explaining what the behavior is doing to the object.
            </Trans>
          </DismissableAlertMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TextField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Internal Name</Trans>}
            value={eventsBasedBehavior.getName()}
            disabled
            fullWidth
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledTextField
            commitOnBlur
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Name displayed in editor</Trans>}
            value={eventsBasedBehavior.getFullName()}
// @ts-expect-error - TS7006 - Parameter 'text' implicitly has an 'any' type.
            onChange={text => {
              eventsBasedBehavior.setFullName(text);
              onChange();
            }}
            fullWidth
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledTextField
            commitOnBlur
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Description</Trans>}
            helperMarkdownText={i18n._(
              t`Explain what the behavior is doing to the object. Start with a verb when possible.`
            )}
            value={eventsBasedBehavior.getDescription()}
// @ts-expect-error - TS7006 - Parameter 'text' implicitly has an 'any' type.
            onChange={text => {
              eventsBasedBehavior.setDescription(text);
              onChange();
            }}
            multiline
            fullWidth
            rows={3}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ObjectTypeSelector
            floatingLabelText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Object on which this behavior can be used</Trans>
            }
            project={project}
            value={eventsBasedBehavior.getObjectType()}
            onChange={(objectType: string) => {
              eventsBasedBehavior.setObjectType(objectType);
              onChange();
            }}
            allowedObjectTypes={
              allObjectTypes.length === 0
                ? undefined /* Allow anything as the behavior is not used */
                : allObjectTypes.length === 1
                ? [
                    '',
                    allObjectTypes[0],
                  ] /* Allow only the type of the objects using the behavior */
                : [
                    '',
                  ] /* More than one type of object are using the behavior. Only "any object" can be used on this behavior */
            }
          />
          {allObjectTypes.length > 1 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <AlertMessage kind="info">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                This behavior is being used by multiple types of objects. Thus,
                you can't restrict its usage to any particular object type. All
                the object types using this behavior are listed here:
                {allObjectTypes.join(', ')}
              </Trans>
            </AlertMessage>
          )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Private</Trans>}
            checked={eventsBasedBehavior.isPrivate()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
            onCheck={(e, checked) => {
              eventsBasedBehavior.setPrivate(checked);
              if (onConfigurationUpdated) onConfigurationUpdated('isPrivate');
              onChange();
            }}
          />
          {eventsBasedBehavior
            .getEventsFunctions()
            .getEventsFunctionsCount() === 0 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <DismissableAlertMessage
              identifier="empty-events-based-behavior-explanation"
              kind="info"
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                Once you're done, start adding some functions to the behavior.
                Then, test the behavior by adding it to an object in a scene.
              </Trans>
            </DismissableAlertMessage>
          )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <HelpButton
              key="help"
              helpPagePath="/behaviors/events-based-behaviors"
            />
          </Line>
        </ColumnStackLayout>
      )}
    </I18n>
  );
}
