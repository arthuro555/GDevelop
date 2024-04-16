import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../InstructionsList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/EventsTree/InstructionsList.tsx', but '--jsx' is not set.
import InstructionsList from '../InstructionsList';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'classnames'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/classnames/index.js' implicitly has an 'any' type.
import classNames from 'classnames';
import {
  largeSelectedArea,
  largeSelectableArea,
  executableEventContainer,
} from '../ClassNames';
import { EventRendererProps } from './EventRenderer';
// @ts-expect-error - TS6142 - Module '../ConditionsActionsColumns' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/EventsTree/ConditionsActionsColumns.tsx', but '--jsx' is not set.
import ConditionsActionsColumns from '../ConditionsActionsColumns';
const gd: libGDevelop = global.gd;

const styles = {
  actionsList: {
    flex: 1,
  },
} as const;

export default class StandardEvent extends React.Component<EventRendererProps, any> {
  render() {
    var standardEvent = gd.asStandardEvent(this.props.event);

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <ConditionsActionsColumns
        leftIndentWidth={this.props.leftIndentWidth}
        windowSize={this.props.windowSize}
        className={classNames({
          [largeSelectableArea]: true,
          [largeSelectedArea]: this.props.selected,
          [executableEventContainer]: true,
        })}
// @ts-expect-error - TS7031 - Binding element 'style' implicitly has an 'any' type. | TS7031 - Binding element 'className' implicitly has an 'any' type.
        renderConditionsList={({ style, className }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <InstructionsList
            platform={this.props.project.getCurrentPlatform()}
            instrsList={standardEvent.getConditions()}
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
        )}
// @ts-expect-error - TS7031 - Binding element 'className' implicitly has an 'any' type.
        renderActionsList={({ className }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <InstructionsList
            platform={this.props.project.getCurrentPlatform()}
            instrsList={standardEvent.getActions()}
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
        )}
      />
    );
  }
}
