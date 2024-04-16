type WatchedComponent = {
  readonly onHeightsChanged: (arg1: any) => void
};

/**
 * Store the height of events and notify a component whenever
 * heights have changed.
 * Needed for EventsTree as we need to tell it when heights have changed
 * so it can recompute the internal row heights of the react-virtualized List.
 */
export default class EventHeightsCache {
  eventHeights = {};
  updateTimeoutId: number | null | undefined = null;
  component: WatchedComponent | null | undefined = null;

  constructor(component: WatchedComponent) {
    this.component = component;
  }

  _notifyComponent() {
    if (this.updateTimeoutId) {
      return; // An update is already scheduled.
    }

    // Notify the component, on the next tick, that heights have changed
// @ts-expect-error - TS2322 - Type 'Timeout' is not assignable to type 'number'.
    this.updateTimeoutId = setTimeout(() => {
      if (this.component) {
        this.component.onHeightsChanged(() => (this.updateTimeoutId = null));
      } else {
        this.updateTimeoutId = null;
      }
    }, 0);
  }

  setEventHeight(event: gdBaseEvent, height: number) {
    if (height === 0) {
      // Don't store the new height because it's 0, meaning a new rendering later
      // will then render the proper height. In the meantime, we don't want to
      // store this empty rendering BUT we still need to notify the parent that
      // an update is needed.
      this._notifyComponent();
      return;
    }

// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{}'.
    const cachedHeight = this.eventHeights[event.ptr];
    if (cachedHeight === undefined || cachedHeight !== height) {
      // Notify the parent component that a height changed.
      this._notifyComponent();
    }

// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{}'.
    this.eventHeights[event.ptr] = height;
  }

  getEventHeight(event: gdBaseEvent): number {
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{}'.
    return this.eventHeights[event.ptr] || 0;
  }
}
