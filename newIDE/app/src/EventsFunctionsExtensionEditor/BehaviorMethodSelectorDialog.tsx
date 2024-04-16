// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../EventsFunctionsList/EventsFunctionTreeViewItemContent' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsFunctionsList/EventsFunctionTreeViewItemContent.tsx', but '--jsx' is not set.
import { EventsFunctionCreationParameters } from '../EventsFunctionsList/EventsFunctionTreeViewItemContent';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/Subheader' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Subheader.tsx', but '--jsx' is not set.
import Subheader from '../UI/Subheader';
// @ts-expect-error - TS6142 - Module '../UI/List' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/List.tsx', but '--jsx' is not set.
import { List, ListItem } from '../UI/List';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../UI/HelpButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Behaviors/Create'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Behaviors/Create.js' implicitly has an 'any' type.
import Create from '../UI/CustomSvgIcons/Behaviors/Create';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Behaviors/Step'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Behaviors/Step.js' implicitly has an 'any' type.
import Step from '../UI/CustomSvgIcons/Behaviors/Step';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Behaviors/Destroy'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Behaviors/Destroy.js' implicitly has an 'any' type.
import Destroy from '../UI/CustomSvgIcons/Behaviors/Destroy';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Behaviors/Action'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Behaviors/Action.js' implicitly has an 'any' type.
import Action from '../UI/CustomSvgIcons/Behaviors/Action';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Behaviors/Condition'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Behaviors/Condition.js' implicitly has an 'any' type.
import Condition from '../UI/CustomSvgIcons/Behaviors/Condition';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Behaviors/Expression'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Behaviors/Expression.js' implicitly has an 'any' type.
import Expression from '../UI/CustomSvgIcons/Behaviors/Expression';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Behaviors/Activate'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Behaviors/Activate.js' implicitly has an 'any' type.
import Activate from '../UI/CustomSvgIcons/Behaviors/Activate';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Behaviors/Deactivate'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Behaviors/Deactivate.js' implicitly has an 'any' type.
import Deactivate from '../UI/CustomSvgIcons/Behaviors/Deactivate';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../UI/Grid';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Visibility'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Visibility.js' implicitly has an 'any' type.
import Visibility from '../UI/CustomSvgIcons/Visibility';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/VisibilityOff'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/VisibilityOff.js' implicitly has an 'any' type.
import VisibilityOff from '../UI/CustomSvgIcons/VisibilityOff';
const gd: libGDevelop = global.gd;

type Props = {
  eventsBasedBehavior: gdEventsBasedBehavior,
  onCancel: () => void,
  onChoose: (parameters: EventsFunctionCreationParameters) => void
};

const styles = {
  icon: { width: 40, height: 40 },
  disabledItem: { opacity: 0.6 },
} as const;

const MethodListItem = ({
  icon,
  disabled,
  onChoose,
  name,
  description,
}: {
  icon: React.ReactNode,
  disabled: boolean,
  onChoose: (arg1: EventsFunctionCreationParameters) => void,
  name: string,
  description: React.ReactNode
}) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ListItem
      leftIcon={icon}
      primaryText={name}
      secondaryText={description}
      secondaryTextLines={2}
      onClick={() =>
        onChoose({
          functionType: gd.EventsFunction.Action,
          name,
        })
      }
      style={disabled ? styles.disabledItem : undefined}
      disabled={disabled}
    />
  );
};

export default function BehaviorMethodSelectorDialog({
  eventsBasedBehavior,
  onChoose,
  onCancel,
}: Props) {
  const eventsFunctions = eventsBasedBehavior.getEventsFunctions();
  const [showAdvanced, setShowAdvanced] = React.useState(false);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>Choose a new behavior function ("method")</Trans>}
      secondaryActions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <HelpButton
          key="help"
          helpPagePath="/behaviors/events-based-behaviors"
        />,
      ]}
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Cancel</Trans>}
          keyboardFocused={true}
          onClick={onCancel}
          key={'close'}
        />,
      ]}
      open
      onRequestClose={onCancel}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <List>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ListItem
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          leftIcon={<Action style={styles.icon} />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          primaryText={<Trans>Action</Trans>}
          secondaryText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>
              An action that can be used on objects with the behavior. You can
              define the action parameters: objects, texts, numbers, layers,
              etc...
            </Trans>
          }
          onClick={() =>
            onChoose({
              functionType: gd.EventsFunction.Action,
              name: null,
            })
          }
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ListItem
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          leftIcon={<Condition style={styles.icon} />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          primaryText={<Trans>Condition</Trans>}
          secondaryText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>
              A condition that can be used on objects with the behavior. You can
              define the condition parameters: objects, texts, numbers, layers,
              etc...
            </Trans>
          }
          onClick={() =>
            onChoose({
              functionType: gd.EventsFunction.Condition,
              name: null,
            })
          }
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ListItem
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          leftIcon={<Expression style={styles.icon} />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          primaryText={<Trans>Expression</Trans>}
          secondaryText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>
              An expression that can be used on objects with the behavior. Can
              either return a number or a string, and take some parameters.
            </Trans>
          }
          onClick={() =>
            onChoose({
              functionType: gd.EventsFunction.Expression,
              name: null,
            })
          }
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Subheader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>Lifecycle methods</Trans>
        </Subheader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <MethodListItem
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          icon={<Create style={styles.icon} />}
          name={'onCreated'}
          disabled={eventsFunctions.hasEventsFunctionNamed('onCreated')}
          onChoose={onChoose}
          description={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>
              Events that will be run once, when an object is created with this
              behavior being attached to it.
            </Trans>
          }
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <MethodListItem
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          icon={<Step style={styles.icon} />}
          name={'doStepPreEvents'}
          disabled={eventsFunctions.hasEventsFunctionNamed('doStepPreEvents')}
          onChoose={onChoose}
          description={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>
              Events that will be run at every frame (roughly 60 times per
              second), for every object that has the behavior attached, before
              the events from the events sheet are launched.
            </Trans>
          }
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <MethodListItem
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          icon={<Destroy style={styles.icon} />}
          name={'onDestroy'}
          disabled={
            eventsFunctions.hasEventsFunctionNamed('onOwnerRemovedFromScene') ||
            eventsFunctions.hasEventsFunctionNamed('onDestroy')
          }
          onChoose={onChoose}
          description={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>
              Events that will be run once, after the object is removed from the
              scene and before it is entirely removed from memory.
            </Trans>
          }
        />
        {showAdvanced && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Subheader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Other lifecycle methods</Trans>
            </Subheader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <MethodListItem
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              icon={<Deactivate style={styles.icon} />}
              name={'onDeActivate'}
              disabled={eventsFunctions.hasEventsFunctionNamed('onDeActivate')}
              onChoose={onChoose}
              description={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>
                  Events that will be run once when the behavior is deactivated
                  on an object (step events won't be run until the behavior is
                  activated again).
                </Trans>
              }
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <MethodListItem
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              icon={<Activate style={styles.icon} />}
              name={'onActivate'}
              disabled={eventsFunctions.hasEventsFunctionNamed('onActivate')}
              onChoose={onChoose}
              description={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>
                  Events that will be run once when the behavior is re-activated
                  on an object (after it was previously deactivated).
                </Trans>
              }
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <MethodListItem
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              icon={<Step style={styles.icon} />}
              name={'doStepPostEvents'}
              disabled={eventsFunctions.hasEventsFunctionNamed(
                'doStepPostEvents'
              )}
              onChoose={onChoose}
              description={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>
                  Events that will be run at every frame (roughly 60 times per
                  second), for every object that has the behavior attached,
                  after the events from the events sheet.
                </Trans>
              }
            />
          </>
        )}
      </List>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line justifyContent="center" alignItems="center">
        {!showAdvanced ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            leftIcon={<Visibility />}
            primary={false}
            onClick={() => setShowAdvanced(true)}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Show other lifecycle functions (advanced)</Trans>}
          />
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            leftIcon={<VisibilityOff />}
            primary={false}
            onClick={() => setShowAdvanced(false)}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Hide other lifecycle functions (advanced)</Trans>}
          />
        )}
      </Line>
    </Dialog>
  );
}
