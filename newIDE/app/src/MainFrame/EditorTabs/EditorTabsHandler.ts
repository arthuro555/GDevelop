import * as React from 'react';
import findIndex from 'lodash/findIndex';
// @ts-expect-error - TS6142 - Module '../EditorContainers/EventsEditorContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/EventsEditorContainer.tsx', but '--jsx' is not set.
import { EventsEditorContainer } from '../EditorContainers/EventsEditorContainer';
// @ts-expect-error - TS6142 - Module '../EditorContainers/DebuggerEditorContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/DebuggerEditorContainer.tsx', but '--jsx' is not set.
import { DebuggerEditorContainer } from '../EditorContainers/DebuggerEditorContainer';
// @ts-expect-error - TS6142 - Module '../EditorContainers/EventsFunctionsExtensionEditorContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/EventsFunctionsExtensionEditorContainer.tsx', but '--jsx' is not set.
import { EventsFunctionsExtensionEditorContainer } from '../EditorContainers/EventsFunctionsExtensionEditorContainer';
// @ts-expect-error - TS6142 - Module '../EditorContainers/ExternalEventsEditorContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/ExternalEventsEditorContainer.tsx', but '--jsx' is not set.
import { ExternalEventsEditorContainer } from '../EditorContainers/ExternalEventsEditorContainer';
// @ts-expect-error - TS6142 - Module '../EditorContainers/ExternalLayoutEditorContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/ExternalLayoutEditorContainer.tsx', but '--jsx' is not set.
import { ExternalLayoutEditorContainer } from '../EditorContainers/ExternalLayoutEditorContainer';
// @ts-expect-error - TS6142 - Module '../EditorContainers/ResourcesEditorContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/ResourcesEditorContainer.tsx', but '--jsx' is not set.
import { ResourcesEditorContainer } from '../EditorContainers/ResourcesEditorContainer';
// @ts-expect-error - TS6142 - Module '../EditorContainers/SceneEditorContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/SceneEditorContainer.tsx', but '--jsx' is not set.
import { SceneEditorContainer } from '../EditorContainers/SceneEditorContainer';
import {
  RenderEditorContainerPropsWithRef,
  EditorContainerExtraProps,
} from '../EditorContainers/BaseEditor';
import { HTMLDataset } from '../../Utils/HTMLDataset';

// Supported editors
type EditorRef = DebuggerEditorContainer | EventsEditorContainer | EventsFunctionsExtensionEditorContainer | ExternalEventsEditorContainer | ExternalLayoutEditorContainer | ResourcesEditorContainer | SceneEditorContainer;

type TabOptions = {
  data?: HTMLDataset
};

export type EditorTab = {
  /** The function to render the tab editor. */
  renderEditorContainer: (arg1: RenderEditorContainerPropsWithRef) => React.ReactElement,
  /** A reference to the editor. */
  editorRef: EditorRef | null | undefined,
  /** The label shown on the tab. */
  label?: string,
  icon?: React.ReactNode,
  /** the html dataset object to set on the tab button. */
  tabOptions?: TabOptions,
  /** The name of the layout/external layout/external events/extension. */
  projectItemName: string | null | undefined,
  /** A unique key for the tab. */
  key: string,
  /** Extra props to pass to editors. */
  extraEditorProps: EditorContainerExtraProps | null | undefined,
  /** If set to false, the tab can't be closed. */
  closable: boolean
};

export type EditorTabsState = {
  editors: Array<EditorTab>,
  currentTab: number
};

export type EditorKind = 'layout' | 'layout events' | 'external layout' | 'external events' | 'events functions extension' | 'debugger' | 'resources' | 'start page';

type EditorTabMetadata = {
  /** The name of the layout/external layout/external events/extension. */
  projectItemName: string | null | undefined,
  /** The editor kind. */
  editorKind: EditorKind
};

export type EditorTabsPersistedState = {
  editors: Array<EditorTabMetadata>,
  currentTab: number
};

export type EditorOpeningOptions = {
  label?: string,
  icon?: React.ReactNode,
  projectItemName: string | null | undefined,
  tabOptions?: TabOptions,
  renderEditorContainer: (props: RenderEditorContainerPropsWithRef) => React.ReactElement,
  key: string,
  extraEditorProps?: EditorContainerExtraProps,
  dontFocusTab?: boolean,
  closable?: boolean
};

export const getEditorTabMetadata = (editorTab: EditorTab): EditorTabMetadata => {
  return {
    projectItemName: editorTab.projectItemName,
    editorKind:
      editorTab.editorRef instanceof SceneEditorContainer
        ? 'layout'
        : editorTab.editorRef instanceof ExternalEventsEditorContainer
        ? 'external events'
        : editorTab.editorRef instanceof ExternalLayoutEditorContainer
        ? 'external layout'
        : editorTab.editorRef instanceof ResourcesEditorContainer
        ? 'resources'
        : editorTab.editorRef instanceof EventsEditorContainer
        ? 'layout events'
        : editorTab.editorRef instanceof EventsFunctionsExtensionEditorContainer
        ? 'events functions extension'
        : editorTab.editorRef instanceof DebuggerEditorContainer
        ? 'debugger'
        : 'start page',
  };
};

export const getEditorTabsInitialState = (): EditorTabsState => {
  return {
    editors: [],
    currentTab: 0,
  };
};

export const openEditorTab = (
  state: EditorTabsState,
  {
    label,
    icon,
    projectItemName,
    tabOptions,
    renderEditorContainer,
    key,
    extraEditorProps,
    dontFocusTab,
    closable,
  }: EditorOpeningOptions,
): EditorTabsState => {
  const existingEditorId = findIndex(
    state.editors,
    editor => editor.key === key
  );
  if (existingEditorId !== -1) {
    return {
      ...state,
      currentTab: dontFocusTab ? state.currentTab : existingEditorId,
    };
  }

  const editorTab: EditorTab = {
    label,
    icon,
    projectItemName,
    tabOptions,
    renderEditorContainer,
    key,
    extraEditorProps,
    editorRef: null,
    closable: typeof closable === 'undefined' ? true : !!closable,
  };

  return {
    ...state,
    editors:
      // Make sure the home page is always the first tab.
      key === 'start page'
        ? [editorTab, ...state.editors]
        : [...state.editors, editorTab],
    currentTab: dontFocusTab ? state.currentTab : state.editors.length,
  };
};

export const changeCurrentTab = (state: EditorTabsState, newTabId: number): EditorTabsState => {
  return {
    ...state,
    currentTab: Math.max(0, Math.min(newTabId, state.editors.length - 1)),
  };
};

export const isStartPageTabPresent = (state: EditorTabsState): boolean => {
  return state.editors.some(editor => editor.key === 'start page');
};

export const closeTabsExceptIf = (
  state: EditorTabsState,
  keepPredicate: (editorTab: EditorTab) => boolean
) => {
  const currentEditorTab = getCurrentTab(state);
  const remainingEditors = state.editors.filter(keepPredicate);
  return changeCurrentTab(
    {
      ...state,
      editors: remainingEditors,
    },
    // Keep the focus on the current editor tab, or if it was closed
    // go back to the first tab.
    remainingEditors.indexOf(currentEditorTab) || 0
  );
};

export const closeAllEditorTabs = (state: EditorTabsState): EditorTabsState => {
  return closeTabsExceptIf(state, editorTab => !editorTab.closable);
};

export const closeEditorTab = (state: EditorTabsState, chosenEditorTab: EditorTab): EditorTabsState => {
  return closeTabsExceptIf(state, editorTab => editorTab !== chosenEditorTab);
};

export const closeOtherEditorTabs = (state: EditorTabsState, chosenEditorTab: EditorTab): EditorTabsState => {
  return closeTabsExceptIf(
    state,
    editorTab => !editorTab.closable || editorTab === chosenEditorTab
  );
};

export const getEditors = (state: EditorTabsState): Array<EditorTab> => {
  return state.editors;
};

export const getCurrentTabIndex = (state: EditorTabsState): number => {
  return state.currentTab;
};

export const getCurrentTab = (state: EditorTabsState): EditorTab => {
  return state.editors[state.currentTab];
};

export const closeProjectTabs = (
  state: EditorTabsState,
  project?: gdProject | null
) => {
  return closeTabsExceptIf(state, editorTab => {
    const editorProject =
      editorTab.editorRef && editorTab.editorRef.getProject();
    return !editorProject || editorProject !== project;
  });
};

/**
 * Ask the editors to persist their UI settings
 * to the project.
 */
export const saveUiSettings = (state: EditorTabsState) => {
  state.editors.forEach(editorTab => {
    if (
      editorTab.editorRef &&
      (editorTab.editorRef instanceof SceneEditorContainer ||
        editorTab.editorRef instanceof ExternalLayoutEditorContainer)
    ) {
      editorTab.editorRef.saveUiSettings();
    }
  });
};

/**
 * Notify the editors that the preview will start. This gives a chance
 * to editors with changes to commit them (like modified extensions).
 */
export const notifyPreviewOrExportWillStart = (state: EditorTabsState) => {
  state.editors.forEach(editorTab => {
    const editor = editorTab.editorRef;

    if (editor instanceof EventsFunctionsExtensionEditorContainer) {
      editor.previewOrExportWillStart();
    }
  });
};

export const closeLayoutTabs = (state: EditorTabsState, layout: gdLayout) => {
  return closeTabsExceptIf(state, editorTab => {
    const editor = editorTab.editorRef;

    if (
      editor instanceof EventsEditorContainer ||
      editor instanceof ExternalEventsEditorContainer ||
      editor instanceof ExternalLayoutEditorContainer ||
      editor instanceof SceneEditorContainer
    ) {
      const editorLayout = editor.getLayout();
      return !editorLayout || editorLayout !== layout;
    }

    return true;
  });
};

export const closeExternalLayoutTabs = (
  state: EditorTabsState,
  externalLayout: gdExternalLayout
) => {
  return closeTabsExceptIf(state, editorTab => {
    const editor = editorTab.editorRef;

    if (editor instanceof ExternalLayoutEditorContainer) {
      return (
        !editor.getExternalLayout() ||
        editor.getExternalLayout() !== externalLayout
      );
    }

    return true;
  });
};

export const closeExternalEventsTabs = (
  state: EditorTabsState,
  externalEvents: gdExternalEvents
) => {
  return closeTabsExceptIf(state, editorTab => {
    const editor = editorTab.editorRef;
    if (editor instanceof ExternalEventsEditorContainer) {
      return (
        !editor.getExternalEvents() ||
        editor.getExternalEvents() !== externalEvents
      );
    }

    return true;
  });
};

export const closeEventsFunctionsExtensionTabs = (
  state: EditorTabsState,
  eventsFunctionsExtensionName: string
) => {
  return closeTabsExceptIf(state, editorTab => {
    const editor = editorTab.editorRef;
    if (editor instanceof EventsFunctionsExtensionEditorContainer) {
      return (
        !editor.getEventsFunctionsExtensionName() ||
        editor.getEventsFunctionsExtensionName() !==
          eventsFunctionsExtensionName
      );
    }

    return true;
  });
};

export const getEventsFunctionsExtensionEditor = (
  state: EditorTabsState,
  eventsFunctionsExtension: gdEventsFunctionsExtension,
): {
  editor: EventsFunctionsExtensionEditorContainer,
  tabIndex: number
} | null | undefined => {
  for (let tabIndex = 0; tabIndex < state.editors.length; ++tabIndex) {
    const editor = state.editors[tabIndex].editorRef;
    if (
      editor instanceof EventsFunctionsExtensionEditorContainer &&
      editor.getEventsFunctionsExtension() === eventsFunctionsExtension
    ) {
      return { editor, tabIndex };
    }
  }

  return null;
};

export const moveTabToTheRightOfHoveredTab = (
  editorTabsState: EditorTabsState,
  movingTabIndex: number,
  hoveredTabIndex: number,
): EditorTabsState => {
  // If the tab is dragged backward, we want it to be placed on the right
  // of the hovered tab so as to match the position of the drop indicator.
  const destinationIndex =
    movingTabIndex > hoveredTabIndex ? hoveredTabIndex + 1 : hoveredTabIndex;

  return moveTabToPosition(editorTabsState, movingTabIndex, destinationIndex);
};

export const moveTabToPosition = (editorTabsState: EditorTabsState, fromIndex: number, toIndex: number): EditorTabsState => {
  const currentEditorTabs = [...getEditors(editorTabsState)];
  const movingTab = currentEditorTabs[fromIndex];
  currentEditorTabs.splice(fromIndex, 1);
  currentEditorTabs.splice(toIndex, 0, movingTab);

  let currentTabIndex = getCurrentTabIndex(editorTabsState);
  let currentTabNewIndex = currentTabIndex;

  const movingTabIsCurrentTab = fromIndex === currentTabIndex;
  const tabIsMovedFromLeftToRightOfCurrentTab =
    fromIndex < currentTabIndex && toIndex >= currentTabIndex;
  const tabIsMovedFromRightToLeftOfCurrentTab =
    fromIndex > currentTabIndex && toIndex <= currentTabIndex;

  if (movingTabIsCurrentTab) currentTabNewIndex = toIndex;
  else if (tabIsMovedFromLeftToRightOfCurrentTab) currentTabNewIndex -= 1;
  else if (tabIsMovedFromRightToLeftOfCurrentTab) currentTabNewIndex += 1;

  return { editors: currentEditorTabs, currentTab: currentTabNewIndex };
};
