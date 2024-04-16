import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../InstructionsList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/EventsTree/InstructionsList.tsx', but '--jsx' is not set.
import InstructionsList from '../InstructionsList';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'classnames'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/classnames/index.js' implicitly has an 'any' type.
import classNames from 'classnames';
import {
  largeSelectedArea,
  largeSelectableArea,
  selectableArea,
  executableEventContainer,
  disabledText,
} from '../ClassNames';
// @ts-expect-error - TS6142 - Module '../../InlinePopover' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/InlinePopover.tsx', but '--jsx' is not set.
import InlinePopover from '../../InlinePopover';
// @ts-expect-error - TS6142 - Module '../../ParameterFields/ExpressionField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/ExpressionField.tsx', but '--jsx' is not set.
import ExpressionField from '../../ParameterFields/ExpressionField';
import { ParameterFieldInterface } from '../../ParameterFields/ParameterFieldCommons';
import { EventRendererProps } from './EventRenderer';
// @ts-expect-error - TS6142 - Module '../ConditionsActionsColumns' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/EventsTree/ConditionsActionsColumns.tsx', but '--jsx' is not set.
import ConditionsActionsColumns from '../ConditionsActionsColumns';
import { shouldActivate } from '../../../UI/KeyboardShortcuts/InteractionKeys';
import ParameterRenderingService from '../../ParameterRenderingService';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
const gd: libGDevelop = global.gd;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  instructionsContainer: {
    display: 'flex',
  },
  actionsList: {
    flex: 1,
  },
} as const;

export default class RepeatEvent extends React.Component<EventRendererProps, any> {
  _field: ParameterFieldInterface | null | undefined = null;
  state = {
    editing: false,
    editingPreviousValue: null,
    anchorEl: null,
  };

  edit = (domEvent: any) => {
    const repeatEvent = gd.asRepeatEvent(this.props.event);
    const expression = repeatEvent.getRepeatExpression();

    // We should not need to use a timeout, but
    // if we don't do this, the InlinePopover's clickaway listener
    // is immediately picking up the event and closing.
    // Search the rest of the codebase for inlinepopover-event-hack
    const anchorEl = domEvent.currentTarget;
    setTimeout(
      () =>
        this.setState(
          {
            editing: true,
            editingPreviousValue: expression,
            anchorEl,
          },
          () => {
            // Give a bit of time for the popover to mount itself
            setTimeout(() => {
              if (this._field) this._field.focus();
            }, 10);
          }
        ),
      10
    );
  };

  cancelEditing = () => {
    this.endEditing();

    const repeatEvent = gd.asRepeatEvent(this.props.event);
    const { editingPreviousValue } = this.state;
    if (editingPreviousValue != null) {
      repeatEvent.setRepeatExpression(editingPreviousValue);
      this.forceUpdate();
    }
  };

  endEditing = () => {
    const { anchorEl } = this.state;

    // Put back the focus after closing the inline popover.
    if (anchorEl)
// @ts-expect-error - TS2339 - Property 'focus' does not exist on type 'never'.
      anchorEl.focus();

    this.setState({
      editing: false,
      editingPreviousValue: null,
      anchorEl: null,
    });
  };

  render() {
    const repeatEvent = gd.asRepeatEvent(this.props.event);
    const expression = repeatEvent.getRepeatExpression();

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <div
        style={styles.container}
        className={classNames({
          [largeSelectableArea]: true,
          [largeSelectedArea]: this.props.selected,
          [executableEventContainer]: true,
        })}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <span
            className={classNames({
              [selectableArea]: true,
              [disabledText]: this.props.disabled,
            })}
            onClick={this.edit}
            onKeyPress={event => {
              if (shouldActivate(event)) {
                this.edit(event);
              }
            }}
            tabIndex={0}
          >
            {expression ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Repeat {expression} times:</Trans>
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <i>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>Click to choose how many times will be repeated</Trans>
              </i>
            )}
          </span>
        </div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ConditionsActionsColumns
          leftIndentWidth={this.props.leftIndentWidth}
          windowSize={this.props.windowSize}
// @ts-expect-error - TS7031 - Binding element 'style' implicitly has an 'any' type. | TS7031 - Binding element 'className' implicitly has an 'any' type.
          renderConditionsList={({ style, className }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <InstructionsList
              platform={this.props.project.getCurrentPlatform()}
              instrsList={repeatEvent.getConditions()}
              style={style}
              className={className}
              selection={this.props.selection}
              areConditions
              onAddNewInstruction={this.props.onAddNewInstruction}
              onPasteInstructions={this.props.onPasteInstructions}
              onMoveToInstruction={this.props.onMoveToInstruction}
              onMoveToInstructionsList={this.props.onMoveToInstructionsList}
              onInstructionClick={this.props.onInstructionClick}
              onInstructionDoubleClick={this.props.onInstructionDoubleClick}
              onInstructionContextMenu={this.props.onInstructionContextMenu}
              onAddInstructionContextMenu={
                this.props.onAddInstructionContextMenu
              }
              onParameterClick={this.props.onParameterClick}
              disabled={this.props.disabled}
              renderObjectThumbnail={this.props.renderObjectThumbnail}
              screenType={this.props.screenType}
              windowSize={this.props.windowSize}
              scope={this.props.scope}
              resourcesManager={this.props.project.getResourcesManager()}
              globalObjectsContainer={this.props.globalObjectsContainer}
              objectsContainer={this.props.objectsContainer}
              idPrefix={this.props.idPrefix}
            />
          )}
// @ts-expect-error - TS7031 - Binding element 'className' implicitly has an 'any' type.
          renderActionsList={({ className }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <InstructionsList
              platform={this.props.project.getCurrentPlatform()}
              instrsList={repeatEvent.getActions()}
              style={
                {
                  ...styles.actionsList,
                } /* TODO: Use a new object to force update - somehow updates are not always propagated otherwise */
              }
              className={className}
              selection={this.props.selection}
              areConditions={false}
              onAddNewInstruction={this.props.onAddNewInstruction}
              onPasteInstructions={this.props.onPasteInstructions}
              onMoveToInstruction={this.props.onMoveToInstruction}
              onMoveToInstructionsList={this.props.onMoveToInstructionsList}
              onInstructionClick={this.props.onInstructionClick}
              onInstructionDoubleClick={this.props.onInstructionDoubleClick}
              onInstructionContextMenu={this.props.onInstructionContextMenu}
              onAddInstructionContextMenu={
                this.props.onAddInstructionContextMenu
              }
              onParameterClick={this.props.onParameterClick}
              disabled={this.props.disabled}
              renderObjectThumbnail={this.props.renderObjectThumbnail}
              screenType={this.props.screenType}
              windowSize={this.props.windowSize}
              scope={this.props.scope}
              resourcesManager={this.props.project.getResourcesManager()}
              globalObjectsContainer={this.props.globalObjectsContainer}
              objectsContainer={this.props.objectsContainer}
              idPrefix={this.props.idPrefix}
            />
          )}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <InlinePopover
          open={this.state.editing}
          anchorEl={this.state.anchorEl}
          onRequestClose={this.cancelEditing}
          onApply={this.endEditing}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ExpressionField
            project={this.props.project}
            scope={this.props.scope}
            globalObjectsContainer={this.props.globalObjectsContainer}
            objectsContainer={this.props.objectsContainer}
            value={expression}
// @ts-expect-error - TS7006 - Parameter 'text' implicitly has an 'any' type.
            onChange={text => {
              repeatEvent.setRepeatExpression(text);
              this.props.onUpdate();
            }}
            parameterRenderingService={ParameterRenderingService}
            isInline
// @ts-expect-error - TS7006 - Parameter 'field' implicitly has an 'any' type.
            ref={field => (this._field = field)}
          />
        </InlinePopover>
      </div>
    );
  }
}
