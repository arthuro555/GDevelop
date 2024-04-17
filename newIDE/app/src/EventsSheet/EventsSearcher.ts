import * as React from 'react';
import { SelectionState, getSelectedEvents } from './SelectionHandler';
import { mapFor } from '../Utils/MapFor';
import uniqBy from 'lodash/uniqBy';

export type SearchInEventsInputs = {
  searchInSelection: boolean;
  searchText: string;
  matchCase: boolean;
  searchInConditions: boolean;
  searchInActions: boolean;
  searchInEventStrings: boolean;
  searchInEventSentences: boolean;
};

export type ReplaceInEventsInputs = {
  searchInSelection: boolean;
  searchText: string;
  replaceText: string;
  matchCase: boolean;
  searchInConditions: boolean;
  searchInActions: boolean;
  searchInEventStrings: boolean;
};

type State = {
  eventsSearchResults: gd.VectorEventsSearchResult | null | undefined;
  searchFocusOffset: number | null | undefined;
};

type Props = {
  globalObjectsContainer: gd.ObjectsContainer;
  objectsContainer: gd.ObjectsContainer;
  events: gd.EventsList;
  selection: SelectionState;
  project: gd.Project;
  children: (props: {
    eventsSearchResultEvents: Array<gd.BaseEvent> | null | undefined;
    searchFocusOffset: number | null | undefined;
    searchInEvents: (arg1: SearchInEventsInputs, cb: () => void) => void;
    replaceInEvents: (
      arg1: ReplaceInEventsInputs,
      cb: () => void
    ) => Array<gd.BaseEvent>;
    goToNextSearchResult: () => gd.BaseEvent | null | undefined;
    goToPreviousSearchResult: () => gd.BaseEvent | null | undefined;
    clearSearchResults: () => void;
  }) => React.ReactElement;
};

/**
 * Computes the positions of the first selected event and the search results
 * in the flatten event tree and looks for the search result just after the
 * first selected event.
 */
const getSearchInitialOffset = (
  events: gd.EventsList,
  resultEvents: Array<gd.BaseEvent>,
  selection: SelectionState
): number => {
  const selectedEvents = getSelectedEvents(selection);
  if (!selectedEvents.length) return 0;

  const eventsToSearch = [selectedEvents[0], ...resultEvents];

  const positionFinder = new gd.EventsPositionFinder();
  eventsToSearch.forEach((event) => positionFinder.addEventToSearch(event));
  positionFinder.launch(events);
  const [selectedEventPosition, ...searchResultsPositions] = positionFinder
    .getPositions()
    .toJSArray();
  positionFinder.delete();

  // Search results are considered to be sorted by position
  // (top to bottom in the flatten event tree)
  for (
    let searchResultIndex = 0;
    searchResultIndex < searchResultsPositions.length;
    searchResultIndex++
  ) {
    if (searchResultsPositions[searchResultIndex] >= selectedEventPosition) {
      return searchResultIndex;
    }
  }
  return 0;
};

/**
 * Component allowing to do search in events and pass the results
 * to its children components, as well as methods to browse the results.
 */
export default class EventsSearcher extends React.Component<Props, State> {
  state = {
    eventsSearchResults: null, // The list of results
    searchFocusOffset: null,
  };

  // The list containing the raw events results. Should be derived from this.state.eventsSearchResults using
  // this._updateListOfResultEvents before being used.
  _resultEvents: Array<gd.BaseEvent> | null | undefined = null;

  componentWillUnmount() {
    this.reset();
  }

  reset = () => {
    // @ts-expect-error - TS2339 - Property 'delete' does not exist on type 'never'.
    if (this.state.eventsSearchResults) this.state.eventsSearchResults.delete();

    this._resultEvents = null;
    this.setState({
      eventsSearchResults: null,
      searchFocusOffset: null,
    });
  };

  _deduplicateEventSearchResults = (
    eventsSearchResults: gd.VectorEventsSearchResult
  ) => {
    const resultEventsWithDuplicates = mapFor(
      0,
      eventsSearchResults.size(),

      (eventIndex) => {
        const eventsSearchResult = eventsSearchResults.at(eventIndex);
        return eventsSearchResult.isEventValid()
          ? eventsSearchResult.getEvent()
          : null;
      }
    ).filter(Boolean);

    // Store a list of unique events, because browsing for results in the events
    // tree is made event by event.
    return uniqBy<gd.BaseEvent>(
      resultEventsWithDuplicates,
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
      (event) => event.ptr
    );
  };

  _doReplaceInEvents = (
    {
      searchInSelection,
      searchText,
      replaceText,
      matchCase,
      searchInConditions,
      searchInActions,
      searchInEventStrings,
    }: ReplaceInEventsInputs,
    cb: () => void
  ): Array<gd.BaseEvent> => {
    const { globalObjectsContainer, objectsContainer, events } = this.props;

    if (searchInSelection) {
      // Replace in selection is a bit tricky to implement as it requires to have a list
      // of events (gd.EventsList) pointing to the same events. Need some workaround/helper
      // function to be done in C++.
      console.error('Replace in selection is not implemented yet');
    }

    const modifiedEvents = gd.EventsRefactorer.replaceStringInEvents(
      globalObjectsContainer,
      objectsContainer,
      events,
      searchText,
      replaceText,
      matchCase,
      searchInConditions,
      searchInActions,
      searchInEventStrings
    );

    if (this.state.eventsSearchResults) {
      // @ts-expect-error - TS2339 - Property 'delete' does not exist on type 'never'.
      this.state.eventsSearchResults.delete();
    }
    this.setState(
      {
        eventsSearchResults: modifiedEvents.clone(),
        searchFocusOffset: null,
      },
      () => {
        this._updateListOfResultEvents();
        cb();
      }
    );
    return this._deduplicateEventSearchResults(modifiedEvents);
  };

  _doSearchInEvents = (
    {
      searchInSelection,
      searchText,
      matchCase,
      searchInConditions,
      searchInActions,
      searchInEventStrings,
      searchInEventSentences,
    }: SearchInEventsInputs,
    cb: () => void
  ) => {
    const { events } = this.props;

    if (searchInSelection) {
      // Search in selection is a bit tricky to implement as it requires to have a list
      // of events (gd.EventsList) pointing to the same events. Need some workaround/helper
      // function to be done in C++.
      console.error('Search in selection is not implemented yet');
    }

    const newEventsSearchResults = gd.EventsRefactorer.searchInEvents(
      this.props.project.getCurrentPlatform(),
      events,
      searchText,
      matchCase,
      searchInConditions,
      searchInActions,
      searchInEventStrings,
      searchInEventSentences
    );

    if (this.state.eventsSearchResults) {
      // @ts-expect-error - TS2339 - Property 'delete' does not exist on type 'never'.
      this.state.eventsSearchResults.delete();
    }
    this.setState(
      {
        eventsSearchResults: newEventsSearchResults.clone(),
        searchFocusOffset: null,
      },
      () => {
        this._updateListOfResultEvents();
        cb();
      }
    );
  };

  _updateListOfResultEvents = () => {
    const { eventsSearchResults } = this.state;
    if (!eventsSearchResults) {
      this._resultEvents = null;
      return;
    }

    this._resultEvents =
      this._deduplicateEventSearchResults(eventsSearchResults);
  };

  _goToSearchResults = (step: number): gd.BaseEvent | null | undefined => {
    this._updateListOfResultEvents();
    if (!this._resultEvents || this._resultEvents.length === 0) {
      this.setState({ searchFocusOffset: null });
      return null;
    }

    const { searchFocusOffset } = this.state;

    let newSearchFocusOffset =
      searchFocusOffset === null || searchFocusOffset === undefined
        ? getSearchInitialOffset(
            this.props.events,
            this._resultEvents,
            this.props.selection
          )
        : (searchFocusOffset + step) % this._resultEvents.length;
    if (newSearchFocusOffset < 0)
      newSearchFocusOffset += this._resultEvents.length;

    const event = this._resultEvents[newSearchFocusOffset];
    setTimeout(
      // Change the offset on next tick to give a chance to children to unfold events before focusing it.
      () => this.setState({ searchFocusOffset: newSearchFocusOffset }),
      0
    );
    return event;
  };

  _goToPreviousSearchResult = (): gd.BaseEvent | null | undefined => {
    return this._goToSearchResults(-1);
  };

  _goToNextSearchResult = (): gd.BaseEvent | null | undefined => {
    return this._goToSearchResults(+1);
  };

  render() {
    return this.props.children({
      eventsSearchResultEvents: this._resultEvents,
      searchFocusOffset: this.state.searchFocusOffset,
      searchInEvents: this._doSearchInEvents,
      replaceInEvents: this._doReplaceInEvents,
      goToNextSearchResult: this._goToNextSearchResult,
      goToPreviousSearchResult: this._goToPreviousSearchResult,
      clearSearchResults: this.reset,
    });
  }
}
