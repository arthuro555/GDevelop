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
  eventsFunctionsExtension: gdEventsFunctionsExtension,
  onCancel: () => void,
  onChoose: (parameters: EventsFunctionCreationParameters) => void
};

const styles = {
  icon: { width: 40, height: 40 },
  disabledItem: { opacity: 0.6 },
} as const;

const FunctionListItem = ({
  icon,
  disabled,
  onChoose,
  name,
  description,
}: {
  icon: React.ReactNode,
  disabled?: boolean,
  onChoose: () => void,
  name: React.ReactNode,
  description: React.ReactNode
}) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ListItem
      leftIcon={icon}
      primaryText={name}
      secondaryText={description}
      secondaryTextLines={2}
      onClick={onChoose}
      style={disabled ? styles.disabledItem : undefined}
      disabled={disabled}
    />
  );
};

export default function BehaviorMethodSelectorDialog({
  eventsFunctionsExtension,
  onChoose,
  onCancel,
}: Props) {
  const [showAdvanced, setShowAdvanced] = React.useState(false);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>Choose a new extension function</Trans>}
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
      secondaryActions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <HelpButton key="help" helpPagePath="/events/functions" />,
      ]}
      open
      onRequestClose={onCancel}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <List>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <FunctionListItem
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          icon={<Action style={styles.icon} />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          name={<Trans>Action</Trans>}
          onChoose={() =>
            onChoose({
              functionType: gd.EventsFunction.Action,
              name: null,
            })
          }
          description={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>
              An action that can be used in other events sheet. You can define
              the action parameters: objects, texts, numbers, layers, etc...
            </Trans>
          }
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <FunctionListItem
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          icon={<Condition style={styles.icon} />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          name={<Trans>Condition</Trans>}
          onChoose={() =>
            onChoose({
              functionType: gd.EventsFunction.Condition,
              name: null,
            })
          }
          description={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>
              A condition that can be used in other events sheet. You can define
              the condition parameters: objects, texts, numbers, layers, etc...
            </Trans>
          }
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <FunctionListItem
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          icon={<Expression style={styles.icon} />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          name={<Trans>Expression</Trans>}
          onChoose={() =>
            onChoose({
              functionType: gd.EventsFunction.Expression,
              name: null,
            })
          }
          description={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>
              An expression that can be used in formulas. Can either return a
              number or a string, and take some parameters.
            </Trans>
          }
        />
        {showAdvanced && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Subheader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Lifecycle functions (advanced)</Trans>
            </Subheader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <FunctionListItem
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              icon={<Create style={styles.icon} />}
              name={'onFirstSceneLoaded'}
              disabled={eventsFunctionsExtension.hasEventsFunctionNamed(
                'onFirstSceneLoaded'
              )}
              onChoose={() =>
                onChoose({
                  functionType: gd.EventsFunction.Action,
                  name: 'onFirstSceneLoaded',
                })
              }
              description={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>
                  Events that will be run once when the first scene of the game
                  is loaded, before any other events.
                </Trans>
              }
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <FunctionListItem
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              icon={<Create style={styles.icon} />}
              name={'onSceneLoaded'}
              disabled={eventsFunctionsExtension.hasEventsFunctionNamed(
                'onSceneLoaded'
              )}
              onChoose={() =>
                onChoose({
                  functionType: gd.EventsFunction.Action,
                  name: 'onSceneLoaded',
                })
              }
              description={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>
                  Events that will be run once when a scene of the game is
                  loaded, before the scene events.
                </Trans>
              }
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <FunctionListItem
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              icon={<Step style={styles.icon} />}
              name={'onScenePreEvents'}
              disabled={eventsFunctionsExtension.hasEventsFunctionNamed(
                'onScenePreEvents'
              )}
              onChoose={() =>
                onChoose({
                  functionType: gd.EventsFunction.Action,
                  name: 'onScenePreEvents',
                })
              }
              description={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>
                  Events that will be run at every frame (roughly 60 times per
                  second), before the events from the events sheet of the scene.
                </Trans>
              }
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <FunctionListItem
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              icon={<Step style={styles.icon} />}
              name={'onScenePostEvents'}
              disabled={eventsFunctionsExtension.hasEventsFunctionNamed(
                'onScenePostEvents'
              )}
              onChoose={() =>
                onChoose({
                  functionType: gd.EventsFunction.Action,
                  name: 'onScenePostEvents',
                })
              }
              description={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>
                  Events that will be run at every frame (roughly 60 times per
                  second), after the events from the events sheet of the scene.
                </Trans>
              }
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <FunctionListItem
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              icon={<Deactivate style={styles.icon} />}
              name={'onScenePaused'}
              disabled={eventsFunctionsExtension.hasEventsFunctionNamed(
                'onScenePaused'
              )}
              onChoose={() =>
                onChoose({
                  functionType: gd.EventsFunction.Action,
                  name: 'onScenePaused',
                })
              }
              description={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>
                  Events that will be run once when a scene is paused (another
                  scene is run on top of it).
                </Trans>
              }
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <FunctionListItem
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              icon={<Activate style={styles.icon} />}
              name={'onSceneResumed'}
              disabled={eventsFunctionsExtension.hasEventsFunctionNamed(
                'onSceneResumed'
              )}
              onChoose={() =>
                onChoose({
                  functionType: gd.EventsFunction.Action,
                  name: 'onSceneResumed',
                })
              }
              description={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>
                  Events that will be run once when a scene is resumed (after it
                  was previously paused).
                </Trans>
              }
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <FunctionListItem
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              icon={<Destroy style={styles.icon} />}
              name={'onSceneUnloading'}
              disabled={eventsFunctionsExtension.hasEventsFunctionNamed(
                'onSceneUnloading'
              )}
              onChoose={() =>
                onChoose({
                  functionType: gd.EventsFunction.Action,
                  name: 'onSceneUnloading',
                })
              }
              description={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>
                  Events that will be run once when a scene is about to be
                  unloaded from memory. The previous scene that was paused will
                  be resumed after this.
                </Trans>
              }
            />
          </React.Fragment>
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
            label={<Trans>Show lifecycle functions (advanced)</Trans>}
          />
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            leftIcon={<VisibilityOff />}
            primary={false}
            onClick={() => setShowAdvanced(false)}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Hide lifecycle functions (advanced)</Trans>}
          />
        )}
      </Line>
    </Dialog>
  );
}
