import * as React from 'react';
import { SortableTreeWithoutDndContext } from 'react-sortable-tree';
import ThemeConsumer from '../Theme/ThemeConsumer';
import { eventsTree } from '../../EventsSheet/EventsTree/ClassNames';
// Import default style of react-sortable-tree and the override made for EventsSheet.
import 'react-sortable-tree/style.css';
import './style.css';

export const SortableTree = ({ className, ...otherProps }) => (
  <ThemeConsumer>
    {muiTheme => (
      <SortableTreeWithoutDndContext
        className={`${eventsTree} ${
          muiTheme.eventsSheetRootClassName
        } ${className}`}
        {...otherProps}
      />
    )}
  </ThemeConsumer>
);
