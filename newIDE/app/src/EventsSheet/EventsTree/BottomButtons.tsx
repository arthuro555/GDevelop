// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Column } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/Menu/ElementWithMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Menu/ElementWithMenu.tsx', but '--jsx' is not set.
import ElementWithMenu from '../../UI/Menu/ElementWithMenu';
import { enumerateEventsMetadata } from '../EnumerateEventsMetadata';
// @ts-expect-error - TS6142 - Module '../../UI/DragAndDrop/DropTarget' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DropTarget.tsx', but '--jsx' is not set.
import { DropTargetComponent } from '../../UI/DragAndDrop/DropTarget';
// @ts-expect-error - TS6142 - Module '.' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/EventsTree/index.tsx', but '--jsx' is not set.
import { SortableTreeNode } from '.';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './helpers'. '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/EventsTree/helpers.js' implicitly has an 'any' type.
import { moveEventToEventsList } from './helpers';
import GDevelopThemeContext from '../../UI/Theme/GDevelopThemeContext';
import { useScreenType } from '../../UI/Responsive/ScreenTypeMeasurer';

const styles = {
  addButton: {
    cursor: 'pointer',
  },
  dropIndicator: {
    border: '2px solid black',
    outline: '1px solid white',
  },
} as const;

type Props = {
  onAddEvent: (eventType: string) => void,
  // Connect a drop target to be able to drop an event at the end of the sheet.
  DnDComponent: DropTargetComponent<SortableTreeNode>,
  draggedNode: SortableTreeNode | null | undefined,
  rootEventsList: gdEventsList
};

const makeMenuTemplateBuilderForEvents = (
  onAddEvent: (eventType: string) => void
) => () =>
  enumerateEventsMetadata().map(metadata => {
    return {
      label: metadata.fullName,
      click: () => onAddEvent(metadata.type),
    };
  });

const addButtonTooltipLabelMouse = t`Right-click for more events`;
const addButtonTooltipLabelTouch = t`Long press for more events`;

export default function BottomButtons({
  onAddEvent,
  DnDComponent,
  draggedNode,
  rootEventsList,
}: Props) {
  const screenType = useScreenType();
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const onDrop = () => {
    draggedNode &&
      moveEventToEventsList({
        targetEventsList: rootEventsList,
        movingEvent: draggedNode.event,
        initialEventsList: draggedNode.eventsList,
        // Drops node at the end of root events list.
        toIndex: -1,
      });
  };
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <DnDComponent canDrop={() => true} drop={onDrop}>
{ /* @ts-expect-error - TS7031 - Binding element 'connectDropTarget' implicitly has an 'any' type. | TS7031 - Binding element 'isOver' implicitly has an 'any' type. */}
          {({ connectDropTarget, isOver }) =>
            connectDropTarget(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <div>
                {isOver && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <div
                    style={{
                      ...styles.dropIndicator,
                      borderColor: gdevelopTheme.dropIndicator.canDrop,
                      outlineColor: gdevelopTheme.dropIndicator.border,
                    }}
                  />
                )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Line justifyContent="space-between">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <ElementWithMenu
                      openMenuWithSecondaryClick
                      element={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <button
                          style={styles.addButton}
                          className="add-link"
                          onClick={() =>
                            onAddEvent('BuiltinCommonInstructions::Standard')
                          }
                          title={i18n._(
                            screenType === 'touch'
                              ? addButtonTooltipLabelTouch
                              : addButtonTooltipLabelMouse
                          )}
                        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <Trans>Add a new event</Trans>
                        </button>
                      }
                      buildMenuTemplate={makeMenuTemplateBuilderForEvents(
                        onAddEvent
                      )}
                    />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <ElementWithMenu
                      element={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <button style={styles.addButton} className="add-link">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <Trans>Add...</Trans>
                        </button>
                      }
                      buildMenuTemplate={makeMenuTemplateBuilderForEvents(
                        onAddEvent
                      )}
                    />
                  </Line>
                </Column>
              </div>
            )
          }
        </DnDComponent>
      )}
    </I18n>
  );
}
