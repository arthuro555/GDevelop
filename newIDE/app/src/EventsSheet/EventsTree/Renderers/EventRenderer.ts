import * as React from 'react';
import {
  InstructionsListContext,
  InstructionContext,
  ParameterContext,
} from '../../SelectionHandler';
import { EventsScope } from '../../../InstructionOrExpression/EventsScope.flow';
import { ScreenType } from '../../../UI/Responsive/ScreenTypeMeasurer';
import { WindowSizeType } from '../../../UI/Responsive/ResponsiveWindowMeasurer';

export type EventRendererProps = {
  project: gd.Project;
  scope: EventsScope;
  globalObjectsContainer: gd.ObjectsContainer;
  objectsContainer: gd.ObjectsContainer;
  event: gd.BaseEvent;
  disabled: boolean;
  onUpdate: () => void;
  selected: boolean;
  onAddNewInstruction: (arg1: InstructionsListContext) => void;
  onPasteInstructions: (arg1: InstructionsListContext) => void;
  onMoveToInstruction: (destinationContext: InstructionContext) => void;
  onMoveToInstructionsList: (
    destinationContext: InstructionsListContext
  ) => void;
  onInstructionClick: (arg1: InstructionContext) => void;
  onInstructionDoubleClick: (arg1: InstructionContext) => void;
  onInstructionContextMenu: (
    x: number,
    y: number,
    arg3: InstructionContext
  ) => void;
  onAddInstructionContextMenu: (
    arg1: HTMLButtonElement,
    arg2: InstructionsListContext
  ) => void;
  onParameterClick: (arg1: ParameterContext) => void;
  onEndEditingEvent: () => void;
  selection: any;
  onOpenLayout: (arg1: string) => void;
  onOpenExternalEvents: (arg1: string) => void;
  leftIndentWidth: number;
  renderObjectThumbnail: (arg1: string) => React.ReactElement;
  screenType: ScreenType;
  windowSize: WindowSizeType;
  eventsSheetHeight: number;
  idPrefix: string;
};
