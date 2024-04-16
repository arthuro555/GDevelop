import {ComponentType} from 'react';
// @ts-expect-error - TS6142 - Module './Renderers/UnknownEvent' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/EventsTree/Renderers/UnknownEvent.tsx', but '--jsx' is not set.
import UnknownEvent from './Renderers/UnknownEvent';
// @ts-expect-error - TS6142 - Module './Renderers/StandardEvent' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/EventsTree/Renderers/StandardEvent.tsx', but '--jsx' is not set.
import StandardEvent from './Renderers/StandardEvent';
// @ts-expect-error - TS6142 - Module './Renderers/GroupEvent' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/EventsTree/Renderers/GroupEvent.tsx', but '--jsx' is not set.
import GroupEvent from './Renderers/GroupEvent';
// @ts-expect-error - TS6142 - Module './Renderers/CommentEvent' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/EventsTree/Renderers/CommentEvent.tsx', but '--jsx' is not set.
import CommentEvent from './Renderers/CommentEvent';
// @ts-expect-error - TS6142 - Module './Renderers/ForEachEvent' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/EventsTree/Renderers/ForEachEvent.tsx', but '--jsx' is not set.
import ForEachEvent from './Renderers/ForEachEvent';
// @ts-expect-error - TS6142 - Module './Renderers/ForEachChildVariableEvent' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/EventsTree/Renderers/ForEachChildVariableEvent.tsx', but '--jsx' is not set.
import ForEachChildVariableEvent from './Renderers/ForEachChildVariableEvent';
// @ts-expect-error - TS6142 - Module './Renderers/RepeatEvent' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/EventsTree/Renderers/RepeatEvent.tsx', but '--jsx' is not set.
import RepeatEvent from './Renderers/RepeatEvent';
// @ts-expect-error - TS6142 - Module './Renderers/WhileEvent' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/EventsTree/Renderers/WhileEvent.tsx', but '--jsx' is not set.
import WhileEvent from './Renderers/WhileEvent';
// @ts-expect-error - TS6142 - Module './Renderers/LinkEvent' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/EventsTree/Renderers/LinkEvent/index.tsx', but '--jsx' is not set.
import LinkEvent from './Renderers/LinkEvent';
// @ts-expect-error - TS6142 - Module './Renderers/JsCodeEvent' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/EventsTree/Renderers/JsCodeEvent.tsx', but '--jsx' is not set.
import JsCodeEvent from './Renderers/JsCodeEvent';
import { EventRendererProps } from './Renderers/EventRenderer';

const EventsRenderingService = {
  components: {
    unknownEvent: UnknownEvent,
    'BuiltinCommonInstructions::Standard': StandardEvent,
    'BuiltinCommonInstructions::Group': GroupEvent,
    'BuiltinCommonInstructions::Comment': CommentEvent,
    'BuiltinCommonInstructions::ForEach': ForEachEvent,
    'BuiltinCommonInstructions::ForEachChildVariable': ForEachChildVariableEvent,
    'BuiltinCommonInstructions::Repeat': RepeatEvent,
    'BuiltinCommonInstructions::While': WhileEvent,
    'BuiltinCommonInstructions::Link': LinkEvent,
    'BuiltinCommonInstructions::JsCode': JsCodeEvent,
  },
  getEventComponent: function(event: gdBaseEvent): ComponentType<EventRendererProps> {
    if (this.components.hasOwnProperty(event.getType()))
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ readonly unknownEvent: any; readonly 'BuiltinCommonInstructions::Standard': any; readonly 'BuiltinCommonInstructions::Group': any; readonly 'BuiltinCommonInstructions::Comment': any; ... 5 more ...; readonly 'BuiltinCommonInstructions::JsCode': any; }'.
      return this.components[event.getType()];
    else return this.components.unknownEvent;
  },
  registerEvent: function(
    eventType: string,
    renderFunction: ComponentType<EventRendererProps>
  ) {
    if (!this.components.hasOwnProperty(eventType)) {
      console.warn(
        'Tried to register renderer for events "' +
          eventType +
          '", but a renderer already exists.'
      );
      return;
    }

// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ readonly unknownEvent: any; readonly 'BuiltinCommonInstructions::Standard': any; readonly 'BuiltinCommonInstructions::Group': any; readonly 'BuiltinCommonInstructions::Comment': any; ... 5 more ...; readonly 'BuiltinCommonInstructions::JsCode': any; }'.
    this.components[eventType] = renderFunction;
  },
} as const;

export default EventsRenderingService;
