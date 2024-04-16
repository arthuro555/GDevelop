import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../InstructionsList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/EventsTree/InstructionsList.tsx', but '--jsx' is not set.
import InstructionsList from '../InstructionsList';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'classnames'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/classnames/index.js' implicitly has an 'any' type.
import classNames from 'classnames';
import {
  largeSelectedArea,
  largeSelectableArea,
  executableEventContainer,
  disabledText,
  conditionsContainer,
} from '../ClassNames';
import { EventRendererProps } from './EventRenderer';
// @ts-expect-error - TS6142 - Module '../ConditionsActionsColumns' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/EventsTree/ConditionsActionsColumns.tsx', but '--jsx' is not set.
import ConditionsActionsColumns from '../ConditionsActionsColumns';
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

export default class WhileEvent extends React.Component<EventRendererProps, any> {
  render() {
    var whileEvent = gd.asWhileEvent(this.props.event);

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
        <div
          className={classNames({
            [disabledText]: this.props.disabled,
          })}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>While these conditions are true:</Trans>
        </div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <InstructionsList
          platform={this.props.project.getCurrentPlatform()}
          instrsList={whileEvent.getWhileConditions()}
          style={
            {} /* TODO: Use a new object to force update - somehow updates are not always propagated otherwise */
          }
          className={conditionsContainer}
          selection={this.props.selection}
          areConditions
          onAddNewInstruction={this.props.onAddNewInstruction}
          onPasteInstructions={this.props.onPasteInstructions}
          onMoveToInstruction={this.props.onMoveToInstruction}
          onMoveToInstructionsList={this.props.onMoveToInstructionsList}
          onInstructionClick={this.props.onInstructionClick}
          onInstructionDoubleClick={this.props.onInstructionDoubleClick}
          onInstructionContextMenu={this.props.onInstructionContextMenu}
          onAddInstructionContextMenu={this.props.onAddInstructionContextMenu}
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
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <div
          className={classNames({
            [disabledText]: this.props.disabled,
          })}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>Repeat these:</Trans>
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
              instrsList={whileEvent.getConditions()}
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
              instrsList={whileEvent.getActions()}
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
      </div>
    );
  }
}
