// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../EventsSheet' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/index.tsx', but '--jsx' is not set.
import EventsSheet, { EventsSheetInterface } from '../EventsSheet';
import EditorMosaic, {
  EditorMosaicInterface,
  mosaicContainsNode,
// @ts-expect-error - TS6142 - Module '../UI/EditorMosaic' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EditorMosaic/index.tsx', but '--jsx' is not set.
} from '../UI/EditorMosaic';
// @ts-expect-error - TS6142 - Module '../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../UI/EmptyMessage';
// @ts-expect-error - TS6142 - Module './EventsFunctionConfigurationEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsFunctionsExtensionEditor/EventsFunctionConfigurationEditor/index.tsx', but '--jsx' is not set.
import EventsFunctionConfigurationEditor from './EventsFunctionConfigurationEditor';
import EventsFunctionsListWithErrorBoundary, {
  EventsFunctionsListInterface,
// @ts-expect-error - TS6142 - Module '../EventsFunctionsList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsFunctionsList/index.tsx', but '--jsx' is not set.
} from '../EventsFunctionsList';
// @ts-expect-error - TS6142 - Module '../EventsFunctionsList/EventsFunctionTreeViewItemContent' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsFunctionsList/EventsFunctionTreeViewItemContent.tsx', but '--jsx' is not set.
import { EventsFunctionCreationParameters } from '../EventsFunctionsList/EventsFunctionTreeViewItemContent';
// @ts-expect-error - TS6142 - Module '../UI/Background' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Background.tsx', but '--jsx' is not set.
import Background from '../UI/Background';
// @ts-expect-error - TS6142 - Module './OptionsEditorDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsFunctionsExtensionEditor/OptionsEditorDialog/index.tsx', but '--jsx' is not set.
import OptionsEditorDialog from './OptionsEditorDialog';
// @ts-expect-error - TS6142 - Module '../EventsBasedBehaviorEditor/EventsBasedBehaviorEditorPanel' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsBasedBehaviorEditor/EventsBasedBehaviorEditorPanel.tsx', but '--jsx' is not set.
import EventsBasedBehaviorEditorPanel from '../EventsBasedBehaviorEditor/EventsBasedBehaviorEditorPanel';
// @ts-expect-error - TS6142 - Module '../EventsBasedObjectEditor/EventsBasedObjectEditorPanel' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsBasedObjectEditor/EventsBasedObjectEditorPanel.tsx', but '--jsx' is not set.
import EventsBasedObjectEditorPanel from '../EventsBasedObjectEditor/EventsBasedObjectEditorPanel';
import { ResourceManagementProps } from '../ResourcesList/ResourceSource';
// @ts-expect-error - TS6142 - Module './BehaviorMethodSelectorDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsFunctionsExtensionEditor/BehaviorMethodSelectorDialog.tsx', but '--jsx' is not set.
import BehaviorMethodSelectorDialog from './BehaviorMethodSelectorDialog';
// @ts-expect-error - TS6142 - Module './ObjectMethodSelectorDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsFunctionsExtensionEditor/ObjectMethodSelectorDialog.tsx', but '--jsx' is not set.
import ObjectMethodSelectorDialog from './ObjectMethodSelectorDialog';
// @ts-expect-error - TS6142 - Module './ExtensionFunctionSelectorDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsFunctionsExtensionEditor/ExtensionFunctionSelectorDialog.tsx', but '--jsx' is not set.
import ExtensionFunctionSelectorDialog from './ExtensionFunctionSelectorDialog';
import { ResponsiveWindowMeasurer } from '../UI/Responsive/ResponsiveWindowMeasurer';
import EditorNavigator, {
  EditorNavigatorInterface,
// @ts-expect-error - TS6142 - Module '../UI/EditorMosaic/EditorNavigator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EditorMosaic/EditorNavigator.tsx', but '--jsx' is not set.
} from '../UI/EditorMosaic/EditorNavigator';
// @ts-expect-error - TS6142 - Module '../MainFrame/UnsavedChangesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/UnsavedChangesContext.tsx', but '--jsx' is not set.
import { UnsavedChanges } from '../MainFrame/UnsavedChangesContext';
// @ts-expect-error - TS6142 - Module '../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from '../MainFrame/Preferences/PreferencesContext';
import { ParametersIndexOffsets } from '../EventsFunctionsExtensionsLoader';
import { sendEventsExtractedAsFunction } from '../Utils/Analytics/EventSender';
// @ts-expect-error - TS6142 - Module '../UI/Toolbar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Toolbar.tsx', but '--jsx' is not set.
import { ToolbarGroup } from '../UI/Toolbar';
// @ts-expect-error - TS6142 - Module '../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../UI/IconButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/ExtensionEdit'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ExtensionEdit.js' implicitly has an 'any' type.
import ExtensionEditIcon from '../UI/CustomSvgIcons/ExtensionEdit';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Tune'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Tune.js' implicitly has an 'any' type.
import Tune from '../UI/CustomSvgIcons/Tune';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Mark'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Mark.js' implicitly has an 'any' type.
import Mark from '../UI/CustomSvgIcons/Mark';
import newNameGenerator from '../Utils/NewNameGenerator';
const gd: libGDevelop = global.gd;

export type ExtensionItemConfigurationAttribute = 'type' | 'isPrivate' | 'isAsync';

type Props = {
  project: gdProject,
  eventsFunctionsExtension: gdEventsFunctionsExtension,
  setToolbar: (arg1?: React.ReactNode | null | undefined) => void,
  resourceManagementProps: ResourceManagementProps,
  openInstructionOrExpression: (extension: gdPlatformExtension, type: string) => void,
  onCreateEventsFunction: (
    extensionName: string,
    eventsFunction: gdEventsFunction,
    editorIdentifier: 'scene-events-editor' | 'extension-events-editor' | 'external-events-editor',
  ) => void,
  onBehaviorEdited?: () => void,
  onObjectEdited?: () => void,
  onFunctionEdited?: () => void,
  initiallyFocusedFunctionName: string | null | undefined,
  initiallyFocusedBehaviorName: string | null | undefined,
  unsavedChanges?: UnsavedChanges | null | undefined
};

type State = {
  selectedEventsFunction: gdEventsFunction | null | undefined,
  selectedEventsBasedBehavior: gdEventsBasedBehavior | null | undefined,
  editedEventsBasedBehavior: gdEventsBasedBehavior | null | undefined,
  selectedEventsBasedObject: gdEventsBasedObject | null | undefined,
  editedEventsBasedObject: gdEventsBasedObject | null | undefined,
  editOptionsDialogOpen: boolean,
  behaviorMethodSelectorDialogOpen: boolean,
  objectMethodSelectorDialogOpen: boolean,
  extensionFunctionSelectorDialogOpen: boolean,
  onAddEventsFunctionCb: (parameters?: EventsFunctionCreationParameters | null | undefined) => void | null | undefined
};

// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
const extensionEditIconReactNode = <ExtensionEditIcon />;

// The event based object editor is hidden in releases
// because it's not handled by GDJS.
const getInitialMosaicEditorNodes = () => ({
  direction: 'row',
  first: 'functions-list',
  second: {
    direction: 'column',
    first: 'parameters',
    second: 'events-sheet',
    splitPercentage: 25,
  },
  splitPercentage: 25,
});

export default class EventsFunctionsExtensionEditor extends React.Component<Props, State> {
// @ts-expect-error - TS2416 - Property 'state' in type 'EventsFunctionsExtensionEditor' is not assignable to the same property in base type 'Component<Props, State, any>'.
  state = {
    selectedEventsFunction: null,
    selectedEventsBasedBehavior: null,
    editedEventsBasedBehavior: null,
    selectedEventsBasedObject: null,
    editedEventsBasedObject: null,
    editOptionsDialogOpen: false,
    behaviorMethodSelectorDialogOpen: false,
    objectMethodSelectorDialogOpen: false,
    extensionFunctionSelectorDialogOpen: false,
    onAddEventsFunctionCb: null,
  };
  editor: EventsSheetInterface | null | undefined;
  eventsFunctionList: EventsFunctionsListInterface | null | undefined;
  _editorMosaic: EditorMosaicInterface | null | undefined;
  _editorNavigator: EditorNavigatorInterface | null | undefined;
  // Create an empty "context" of objects.
  // Avoid recreating containers if they were already created, so that
  // we keep the same objects in memory and avoid remounting components
  // (like ObjectGroupsList) because objects "ptr" changed.
  _globalObjectsContainer: gdObjectsContainer = new gd.ObjectsContainer();
  _objectsContainer: gdObjectsContainer = new gd.ObjectsContainer();

  componentDidMount() {
    if (this.props.initiallyFocusedFunctionName) {
      this.selectEventsFunctionByName(
        this.props.initiallyFocusedFunctionName,
        this.props.initiallyFocusedBehaviorName
      );
    } else if (this.props.initiallyFocusedBehaviorName) {
      this.selectEventsBasedBehaviorByName(
        this.props.initiallyFocusedBehaviorName
      );
    }
  }

  componentWillUnmount() {
    if (this._globalObjectsContainer) this._globalObjectsContainer.delete();
    if (this._objectsContainer) this._objectsContainer.delete();
  }

  _loadEventsFunctionFrom = (
    project: gdProject,
    eventsFunction: gdEventsFunction,
    eventsBasedBehavior?: gdEventsBasedBehavior | null,
    eventsBasedObject?: gdEventsBasedObject | null,
    eventsFunctionsExtension?: gdEventsFunctionsExtension | null
  ) => {
    // Initialize this "context" of objects with the function
    // (as done during code generation).
    if (eventsBasedBehavior) {
      gd.EventsFunctionTools.behaviorEventsFunctionToObjectsContainer(
        project,
        eventsBasedBehavior,
        eventsFunction,
        this._globalObjectsContainer,
        this._objectsContainer
      );
    } else if (eventsBasedObject) {
      gd.EventsFunctionTools.objectEventsFunctionToObjectsContainer(
        project,
        eventsBasedObject,
        eventsFunction,
        this._globalObjectsContainer,
        this._objectsContainer
      );
    } else if (eventsFunctionsExtension) {
      gd.EventsFunctionTools.freeEventsFunctionToObjectsContainer(
        project,
        eventsFunctionsExtension,
        eventsFunction,
        this._globalObjectsContainer,
        this._objectsContainer
      );
    } else {
      throw new Error(
        'No extension, behavior or object was specified when loading a function'
      );
    }
  };

  updateToolbar = () => {
    if (this.editor) {
      // If the scene editor is open, let it handle the toolbar.
      this.editor.updateToolbar();
    } else {
      // Otherwise, show the extension settings buttons.
      this.props.setToolbar(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ToolbarGroup lastChild>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <IconButton
            size="small"
            color="default"
            onClick={this._editOptions}
            tooltip={t`Open extension settings`}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ExtensionEditIcon />
          </IconButton>
        </ToolbarGroup>
      );
    }
  };

  selectEventsFunctionByName = (
    functionName: string,
    behaviorName?: string | null
  ) => {
    const { eventsFunctionsExtension } = this.props;

    if (behaviorName) {
      // Behavior function
      const eventsBasedBehaviors = eventsFunctionsExtension.getEventsBasedBehaviors();
      if (eventsBasedBehaviors.has(behaviorName)) {
        const eventsBasedBehavior = eventsBasedBehaviors.get(behaviorName);
        const behaviorEventsFunctions = eventsBasedBehavior.getEventsFunctions();
        if (behaviorEventsFunctions.hasEventsFunctionNamed(functionName)) {
          this._selectEventsFunction(
            behaviorEventsFunctions.getEventsFunction(functionName),
            eventsBasedBehavior
          );
        }
      }
    } else {
      // Free function
      if (eventsFunctionsExtension.hasEventsFunctionNamed(functionName)) {
        this._selectEventsFunction(
          eventsFunctionsExtension.getEventsFunction(functionName),
          null
        );
      }
    }
  };

  _selectEventsFunction = (
    selectedEventsFunction?: gdEventsFunction | null,
    selectedEventsBasedBehavior?: gdEventsBasedBehavior | null,
    selectedEventsBasedObject?: gdEventsBasedObject | null
  ) => {
    this.onSelectionChanged(null, null);
    if (!selectedEventsFunction) {
      this.setState(
        {
          selectedEventsFunction: null,
          selectedEventsBasedBehavior,
          selectedEventsBasedObject,
        },
        () => this.updateToolbar()
      );
      return;
    }

    // Users may have change a function declaration.
    // Reload metadata just in case.
    if (this.props.onFunctionEdited) {
      this.props.onFunctionEdited();
    }

    this._loadEventsFunctionFrom(
      this.props.project,
      selectedEventsFunction,
      selectedEventsBasedBehavior,
      selectedEventsBasedObject,
      this.props.eventsFunctionsExtension
    );
    this.setState(
      {
        selectedEventsFunction,
        selectedEventsBasedBehavior,
        selectedEventsBasedObject,
      },
      () => {
        this.updateToolbar();

        if (this._editorMosaic) {
          this._editorMosaic.uncollapseEditor('parameters', 25);
        }
        if (this._editorNavigator) {
          // Open the parameters of the function if it's a new, empty function.
          if (
            selectedEventsFunction &&
            !selectedEventsFunction.getEvents().getEventsCount()
          ) {
            this._editorNavigator.openEditor('parameters');
          } else {
            this._editorNavigator.openEditor('events-sheet');
          }
        }
      }
    );
  };

  _makeRenameEventsFunction = (i18n: I18nType) => (
    eventsBasedBehavior: gdEventsBasedBehavior | null | undefined,
    eventsBasedObject: gdEventsBasedObject | null | undefined,
    eventsFunction: gdEventsFunction,
    newName: string,
    done: (arg1: boolean) => void
  ) => {
    if (eventsBasedBehavior) {
      this._renameBehaviorEventsFunction(
        i18n,
        eventsBasedBehavior,
        eventsFunction,
        newName,
        done
      );
    } else if (eventsBasedObject) {
      this._renameObjectEventsFunction(
        i18n,
        eventsBasedObject,
        eventsFunction,
        newName,
        done
      );
    } else {
      this._renameFreeEventsFunction(i18n, eventsFunction, newName, done);
    }
  };

  _renameFreeEventsFunction = (
    i18n: I18nType,
    eventsFunction: gdEventsFunction,
    newName: string,
    done: (arg1: boolean) => void
  ) => {
    const { project, eventsFunctionsExtension } = this.props;

    const safeAndUniqueNewName = newNameGenerator(
      gd.Project.getSafeName(newName),
      tentativeNewName => {
        if (
          gd.MetadataDeclarationHelper.isExtensionLifecycleEventsFunction(
            tentativeNewName
          ) ||
          eventsFunctionsExtension.hasEventsFunctionNamed(tentativeNewName)
        ) {
          return true;
        }

        return false;
      }
    );

    gd.WholeProjectRefactorer.renameEventsFunction(
      project,
      eventsFunctionsExtension,
      eventsFunction.getName(),
      safeAndUniqueNewName
    );
    eventsFunction.setName(safeAndUniqueNewName);

    done(true);
    if (this.props.onFunctionEdited) {
      this.props.onFunctionEdited();
    }
  };

  _renameBehaviorEventsFunction = (
    i18n: I18nType,
    eventsBasedBehavior: gdEventsBasedBehavior,
    eventsFunction: gdEventsFunction,
    newName: string,
    done: (arg1: boolean) => void
  ) => {
    const safeAndUniqueNewName = newNameGenerator(
      gd.Project.getSafeName(newName),
      tentativeNewName => {
        if (
          gd.MetadataDeclarationHelper.isBehaviorLifecycleEventsFunction(
            tentativeNewName
          ) ||
          eventsBasedBehavior
            .getEventsFunctions()
            .hasEventsFunctionNamed(tentativeNewName)
        ) {
          return true;
        }

        return false;
      }
    );

    const { project, eventsFunctionsExtension } = this.props;
    gd.WholeProjectRefactorer.renameBehaviorEventsFunction(
      project,
      eventsFunctionsExtension,
      eventsBasedBehavior,
      eventsFunction.getName(),
      safeAndUniqueNewName
    );
    eventsFunction.setName(safeAndUniqueNewName);

    done(true);
    if (this.props.onFunctionEdited) {
      this.props.onFunctionEdited();
    }
  };

  _renameObjectEventsFunction = (
    i18n: I18nType,
    eventsBasedObject: gdEventsBasedObject,
    eventsFunction: gdEventsFunction,
    newName: string,
    done: (arg1: boolean) => void
  ) => {
    const safeAndUniqueNewName = newNameGenerator(
      gd.Project.getSafeName(newName),
      tentativeNewName => {
        if (
          gd.MetadataDeclarationHelper.isObjectLifecycleEventsFunction(
            tentativeNewName
          ) ||
          eventsBasedObject
            .getEventsFunctions()
            .hasEventsFunctionNamed(tentativeNewName)
        ) {
          return true;
        }

        return false;
      }
    );

    const { project, eventsFunctionsExtension } = this.props;
    gd.WholeProjectRefactorer.renameObjectEventsFunction(
      project,
      eventsFunctionsExtension,
      eventsBasedObject,
      eventsFunction.getName(),
      safeAndUniqueNewName
    );
    eventsFunction.setName(safeAndUniqueNewName);

    done(true);
    if (this.props.onFunctionEdited) {
      this.props.onFunctionEdited();
    }
  };

  _makeMoveFreeEventsParameter = (i18n: I18nType) => (
    eventsFunction: gdEventsFunction,
    oldIndex: number,
    newIndex: number,
    done: (arg1: boolean) => void
  ) => {
    // Don't ask for user confirmation as this change is easy to revert.

    const { project, eventsFunctionsExtension } = this.props;
    gd.WholeProjectRefactorer.moveEventsFunctionParameter(
      project,
      eventsFunctionsExtension,
      eventsFunction.getName(),
      oldIndex + ParametersIndexOffsets.FreeFunction,
      newIndex + ParametersIndexOffsets.FreeFunction
    );

    done(true);
  };

  _makeMoveBehaviorEventsParameter = (i18n: I18nType) => (
    eventsBasedBehavior: gdEventsBasedBehavior,
    eventsFunction: gdEventsFunction,
    oldIndex: number,
    newIndex: number,
    done: (arg1: boolean) => void
  ) => {
    // Don't ask for user confirmation as this change is easy to revert.

    const { project, eventsFunctionsExtension } = this.props;
    gd.WholeProjectRefactorer.moveBehaviorEventsFunctionParameter(
      project,
      eventsFunctionsExtension,
      eventsBasedBehavior,
      eventsFunction.getName(),
      oldIndex,
      newIndex
    );

    done(true);
  };

  _makeMoveObjectEventsParameter = (i18n: I18nType) => (
    eventsBasedObject: gdEventsBasedObject,
    eventsFunction: gdEventsFunction,
    oldIndex: number,
    newIndex: number,
    done: (arg1: boolean) => void
  ) => {
    // Don't ask for user confirmation as this change is easy to revert.

    const { project, eventsFunctionsExtension } = this.props;
    gd.WholeProjectRefactorer.moveObjectEventsFunctionParameter(
      project,
      eventsFunctionsExtension,
      eventsBasedObject,
      eventsFunction.getName(),
      oldIndex,
      newIndex
    );

    done(true);
  };

  _onDeleteEventsFunction = (
    eventsFunction: gdEventsFunction,
    cb: (arg1: boolean) => void
  ) => {
    if (
      this.state.selectedEventsFunction &&
      gd.compare(eventsFunction, this.state.selectedEventsFunction)
    ) {
      this._selectEventsFunction(null, null, null);
    }

    cb(true);
  };

  selectEventsBasedBehaviorByName = (behaviorName: string) => {
    const { eventsFunctionsExtension } = this.props;
    const eventsBasedBehaviorsList = eventsFunctionsExtension.getEventsBasedBehaviors();
    if (eventsBasedBehaviorsList.has(behaviorName)) {
      this._selectEventsBasedBehavior(
        eventsBasedBehaviorsList.get(behaviorName)
      );
    }
  };

  onSelectionChanged = (
    selectedEventsBasedBehavior?: gdEventsBasedBehavior | null,
    selectedEventsBasedObject?: gdEventsBasedObject | null
  ) => {
    this._editBehavior(selectedEventsBasedBehavior);
    this._editObject(selectedEventsBasedObject);
  };

  _selectEventsBasedBehavior = (
    selectedEventsBasedBehavior?: gdEventsBasedBehavior | null
  ) => {
    this.onSelectionChanged(selectedEventsBasedBehavior, null);
    this.setState(
      {
        selectedEventsBasedBehavior,
        selectedEventsFunction: null,
        selectedEventsBasedObject: null,
      },
      () => {
        this.updateToolbar();
        if (selectedEventsBasedBehavior) {
          if (this._editorMosaic) {
            this._editorMosaic.collapseEditor('parameters');
          }
          if (this._editorNavigator) {
            this._editorNavigator.openEditor('events-sheet');
          }
        }
      }
    );
  };

  _selectEventsBasedObject = (
    selectedEventsBasedObject?: gdEventsBasedObject | null
  ) => {
    this.onSelectionChanged(null, selectedEventsBasedObject);
    this.setState(
      {
        selectedEventsBasedObject,
        selectedEventsFunction: null,
        selectedEventsBasedBehavior: null,
      },
      () => {
        this.updateToolbar();
        if (selectedEventsBasedObject) {
          if (this._editorMosaic) {
            this._editorMosaic.collapseEditor('parameters');
          }
          if (this._editorNavigator)
            this._editorNavigator.openEditor('events-sheet');
        }
      }
    );
  };

  _makeRenameEventsBasedBehavior = (i18n: I18nType) => (
    eventsBasedBehavior: gdEventsBasedBehavior,
    newName: string,
    done: (arg1: boolean) => void
  ) => {
    const { project, eventsFunctionsExtension } = this.props;
    const safeAndUniqueNewName = newNameGenerator(
      gd.Project.getSafeName(newName),
      tentativeNewName => {
        if (
          eventsFunctionsExtension
            .getEventsBasedBehaviors()
            .has(tentativeNewName)
        ) {
          return true;
        }

        return false;
      }
    );

    gd.WholeProjectRefactorer.renameEventsBasedBehavior(
      project,
      eventsFunctionsExtension,
      eventsBasedBehavior.getName(),
      safeAndUniqueNewName
    );
    eventsBasedBehavior.setName(safeAndUniqueNewName);

    done(true);
  };

  _makeRenameEventsBasedObject = (i18n: I18nType) => (
    eventsBasedObject: gdEventsBasedObject,
    newName: string,
    done: (arg1: boolean) => void
  ) => {
    const { project, eventsFunctionsExtension } = this.props;
    const safeAndUniqueNewName = newNameGenerator(
      gd.Project.getSafeName(newName),
      tentativeNewName => {
        if (
          eventsFunctionsExtension.getEventsBasedObjects().has(tentativeNewName)
        ) {
          return true;
        }

        return false;
      }
    );

    gd.WholeProjectRefactorer.renameEventsBasedObject(
      project,
      eventsFunctionsExtension,
      eventsBasedObject.getName(),
      safeAndUniqueNewName
    );
    eventsBasedObject.setName(safeAndUniqueNewName);

    done(true);
  };

  _onEventsBasedBehaviorPasted = (
    eventsBasedBehavior: gdEventsBasedBehavior,
    sourceExtensionName: string
  ) => {
    const { project, eventsFunctionsExtension } = this.props;
    if (eventsFunctionsExtension.getName() === sourceExtensionName) {
      return;
    }
    gd.WholeProjectRefactorer.updateExtensionNameInEventsBasedBehavior(
      project,
      eventsFunctionsExtension,
      eventsBasedBehavior,
      sourceExtensionName
    );
  };

  _onEventsBasedBehaviorRenamed = () => {
    // Name of a behavior changed, so notify parent
    // that a behavior was edited (to trigger reload of extensions)
    if (this.props.onBehaviorEdited) {
      this.props.onBehaviorEdited();
    }

    // Reload the selected events function, if any, as the behavior was
    // changed so objects containers need to be re-created (otherwise,
    // objects from objects containers will still refer to the old behavior name,
    // done before the call to gd.WholeProjectRefactorer.renameEventsBasedBehavior).
    if (this.state.selectedEventsFunction) {
      this._loadEventsFunctionFrom(
        this.props.project,
        this.state.selectedEventsFunction,
        this.state.selectedEventsBasedBehavior,
        this.state.selectedEventsBasedObject,
        this.props.eventsFunctionsExtension
      );
    }
  };

  _onEventsBasedObjectRenamed = () => {
    // Name of an object changed, so notify parent
    // that an object was edited (to trigger reload of extensions)
    if (this.props.onObjectEdited) {
      this.props.onObjectEdited();
    }

    // Reload the selected events function, if any, as the parent-object was
    // changed so child-objects containers need to be re-created (otherwise,
    // child-objects from child-objects containers will still refer to the old parent-object name,
    // done before the call to gd.WholeProjectRefactorer.renameEventsBasedObject).
    if (this.state.selectedEventsFunction) {
      this._loadEventsFunctionFrom(
        this.props.project,
        this.state.selectedEventsFunction,
        this.state.selectedEventsBasedBehavior,
        this.state.selectedEventsBasedObject,
        this.props.eventsFunctionsExtension
      );
    }
  };

  _onDeleteEventsBasedBehavior = (
    eventsBasedBehavior: gdEventsBasedBehavior,
    cb: (arg1: boolean) => void
  ) => {
    if (
      this.state.selectedEventsBasedBehavior &&
      gd.compare(eventsBasedBehavior, this.state.selectedEventsBasedBehavior)
    ) {
      this._selectEventsBasedBehavior(null);
    }

    cb(true);
  };

  _onDeleteEventsBasedObject = (
    eventsBasedObject: gdEventsBasedObject,
    cb: (arg1: boolean) => void
  ) => {
    if (
      this.state.selectedEventsBasedObject &&
      gd.compare(eventsBasedObject, this.state.selectedEventsBasedObject)
    ) {
      this._selectEventsBasedObject(null);
    }

    cb(true);
  };

  _onCloseExtensionFunctionSelectorDialog = (
    parameters?: EventsFunctionCreationParameters | null
  ) => {
    const { onAddEventsFunctionCb } = this.state;
    this.setState(
      {
        extensionFunctionSelectorDialogOpen: false,
// @ts-expect-error - TS2322 - Type 'null' is not assignable to type '(parameters?: any) => void | null | undefined'.
        onAddEventsFunctionCb: null,
      },
      () => {
// @ts-expect-error - TS2349 - This expression is not callable.
        if (onAddEventsFunctionCb) onAddEventsFunctionCb(parameters);
      }
    );
  };

  _onAddEventsFunction = (
    eventsBasedBehavior: gdEventsBasedBehavior | null | undefined,
    eventsBasedObject: gdEventsBasedObject | null | undefined,
    onAddEventsFunctionCb: (parameters?: EventsFunctionCreationParameters | null | undefined) => void
  ) => {
    if (eventsBasedBehavior) {
      this._onAddBehaviorEventsFunction(onAddEventsFunctionCb);
    } else if (eventsBasedObject) {
      this._onAddObjectEventsFunction(onAddEventsFunctionCb);
    } else {
      this._onAddFreeEventsFunction(onAddEventsFunctionCb);
    }
  };

  _onAddFreeEventsFunction = (
    onAddEventsFunctionCb: (parameters?: EventsFunctionCreationParameters | null | undefined) => void
  ) => {
    this.setState({
      extensionFunctionSelectorDialogOpen: true,
      onAddEventsFunctionCb,
    });
  };

  _onAddBehaviorEventsFunction = (
    onAddEventsFunctionCb: (parameters?: EventsFunctionCreationParameters | null | undefined) => void
  ) => {
    this.setState({
      behaviorMethodSelectorDialogOpen: true,
      onAddEventsFunctionCb,
    });
  };

  _onAddObjectEventsFunction = (
    onAddEventsFunctionCb: (parameters?: EventsFunctionCreationParameters | null | undefined) => void
  ) => {
    this.setState({
      objectMethodSelectorDialogOpen: true,
      onAddEventsFunctionCb,
    });
  };

  _onCloseBehaviorMethodSelectorDialog = (
    parameters?: EventsFunctionCreationParameters | null
  ) => {
    const { onAddEventsFunctionCb } = this.state;
    this.setState(
      {
        behaviorMethodSelectorDialogOpen: false,
// @ts-expect-error - TS2322 - Type 'null' is not assignable to type '(parameters?: any) => void | null | undefined'.
        onAddEventsFunctionCb: null,
      },
      () => {
// @ts-expect-error - TS2349 - This expression is not callable.
        if (onAddEventsFunctionCb) onAddEventsFunctionCb(parameters);
      }
    );
  };

  _onCloseObjectMethodSelectorDialog = (
    parameters?: EventsFunctionCreationParameters | null
  ) => {
    const { onAddEventsFunctionCb } = this.state;
    this.setState(
      {
        objectMethodSelectorDialogOpen: false,
// @ts-expect-error - TS2322 - Type 'null' is not assignable to type '(parameters?: any) => void | null | undefined'.
        onAddEventsFunctionCb: null,
      },
      () => {
// @ts-expect-error - TS2349 - This expression is not callable.
        if (onAddEventsFunctionCb) onAddEventsFunctionCb(parameters);
      }
    );
  };

  _onBehaviorEventsFunctionAdded = (
    eventsBasedBehavior: gdEventsBasedBehavior,
    eventsFunction: gdEventsFunction
  ) => {
    // This will create the mandatory parameters for the newly added function.
    gd.WholeProjectRefactorer.ensureBehaviorEventsFunctionsProperParameters(
      this.props.eventsFunctionsExtension,
      eventsBasedBehavior
    );
  };

  _onObjectEventsFunctionAdded = (
    eventsBasedObject: gdEventsBasedObject,
    eventsFunction: gdEventsFunction
  ) => {
    // This will create the mandatory parameters for the newly added function.
    gd.WholeProjectRefactorer.ensureObjectEventsFunctionsProperParameters(
      this.props.eventsFunctionsExtension,
      eventsBasedObject
    );
  };

  _onBehaviorPropertyRenamed = (
    eventsBasedBehavior: gdEventsBasedBehavior,
    oldName: string,
    newName: string
  ) => {
    const { project, eventsFunctionsExtension } = this.props;
    gd.WholeProjectRefactorer.renameEventsBasedBehaviorProperty(
      project,
      eventsFunctionsExtension,
      eventsBasedBehavior,
      oldName,
      newName
    );
  };

  _onBehaviorSharedPropertyRenamed = (
    eventsBasedBehavior: gdEventsBasedBehavior,
    oldName: string,
    newName: string
  ) => {
    const { project, eventsFunctionsExtension } = this.props;
    gd.WholeProjectRefactorer.renameEventsBasedBehaviorSharedProperty(
      project,
      eventsFunctionsExtension,
      eventsBasedBehavior,
      oldName,
      newName
    );
  };

  _onObjectPropertyRenamed = (
    eventsBasedObject: gdEventsBasedObject,
    oldName: string,
    newName: string
  ) => {
    const { project, eventsFunctionsExtension } = this.props;
    gd.WholeProjectRefactorer.renameEventsBasedObjectProperty(
      project,
      eventsFunctionsExtension,
      eventsBasedObject,
      oldName,
      newName
    );
  };

  _editOptions = (open: boolean = true) => {
    this.setState({
      editOptionsDialogOpen: open,
    });
  };

  _editBehavior = (editedEventsBasedBehavior?: gdEventsBasedBehavior | null) => {
    this.setState(
      state => {
        // If we're closing the properties of a behavior, ensure parameters
        // are up-to-date in all event functions of the behavior (the object
        // type might have changed).
        if (state.editedEventsBasedBehavior && !editedEventsBasedBehavior) {
          gd.WholeProjectRefactorer.ensureBehaviorEventsFunctionsProperParameters(
            this.props.eventsFunctionsExtension,
            state.editedEventsBasedBehavior
          );
        }

        return {
          editedEventsBasedBehavior,
        };
      },
      async () => {
        // TODO: Is this logic the same as in _onEventsBasedBehaviorRenamed?

        if (!editedEventsBasedBehavior) {
          // If we're closing the properties of a behavior, notify parent
          // that a behavior was edited (to trigger reload of extensions)
          if (this.props.onBehaviorEdited) {
            await this.props.onBehaviorEdited();

            // Once extensions are reloaded, ensure the project stays valid by
            // filling any invalid required behavior property in the objects
            // of the project.
            //
            // We need to do that as "required behavior" properties may have been
            // added (or the type of the required behavior changed) in the dialog.
            gd.WholeProjectRefactorer.fixInvalidRequiredBehaviorProperties(
              this.props.project
            );
          }

          // Reload the selected events function, if any, as the behavior was
          // changed so objects containers need to be re-created. Notably, the
          // type of the object that is handled by the behavior may have changed.
          if (this.state.selectedEventsFunction) {
            this._loadEventsFunctionFrom(
              this.props.project,
              this.state.selectedEventsFunction,
              this.state.selectedEventsBasedBehavior,
              this.state.selectedEventsBasedObject,
              this.props.eventsFunctionsExtension
            );
          }
        }
      }
    );
  };

  _editObject = (editedEventsBasedObject?: gdEventsBasedObject | null) => {
    this.setState(
      state => {
        // If we're closing the properties of an object, ensure parameters
        // are up-to-date in all event functions of the object.
        if (state.editedEventsBasedObject && !editedEventsBasedObject) {
          gd.WholeProjectRefactorer.ensureObjectEventsFunctionsProperParameters(
            this.props.eventsFunctionsExtension,
            state.editedEventsBasedObject
          );
        }

        return {
          editedEventsBasedObject,
        };
      },
      async () => {
        // TODO: Is this logic the same as in _onEventsBasedObjectRenamed?

        if (!editedEventsBasedObject) {
          // If we're closing the properties of a object, notify parent
          // that a object was edited (to trigger reload of extensions)
          if (this.props.onObjectEdited) {
            await this.props.onObjectEdited();
          }

          // Reload the selected events function, if any, as the object was
          // changed so objects containers need to be re-created. Notably, the
          // type of the object that is handled by the object may have changed.
          if (this.state.selectedEventsFunction) {
            this._loadEventsFunctionFrom(
              this.props.project,
              this.state.selectedEventsFunction,
              this.state.selectedEventsBasedBehavior,
              this.state.selectedEventsBasedObject,
              this.props.eventsFunctionsExtension
            );
          }
        }
      }
    );
  };

  _onEditorNavigatorEditorChanged = (editorName: string) => {
    // It's important that this method is the same across renders,
    // to avoid confusing EditorNavigator into thinking it's changed
    // and immediately calling it, which would trigger an infinite loop.
    // Search for "callback-prevent-infinite-rerendering" in the codebase.

    this.updateToolbar();

    if (editorName === 'behaviors-list') {
      this._selectEventsBasedBehavior(null);
    } else if (
      editorName === 'free-functions-list' ||
      editorName === 'behavior-functions-list'
    ) {
      this._selectEventsFunction(null, this.state.selectedEventsBasedBehavior);
    }
  };

  _getFunctionGroupNames = (): Array<string> => {
    const groupNames = new Set<string>();
    // Look only in the edited function container because
    // functions from the extension or different behaviors
    // won't use the same groups names.
    // An independent autocompletion is done for each of them.
    const {
      selectedEventsBasedBehavior,
      selectedEventsBasedObject,
    } = this.state;
    if (selectedEventsBasedBehavior) {
// @ts-expect-error - TS2339 - Property 'getEventsFunctions' does not exist on type 'never'.
      const eventFunctionContainer = selectedEventsBasedBehavior.getEventsFunctions();
      for (
        let index = 0;
        index < eventFunctionContainer.getEventsFunctionsCount();
        index++
      ) {
        const groupName = eventFunctionContainer
          .getEventsFunctionAt(index)
          .getGroup();
        if (groupName) {
          groupNames.add(groupName);
        }
      }
    } else if (selectedEventsBasedObject) {
// @ts-expect-error - TS2339 - Property 'getEventsFunctions' does not exist on type 'never'.
      const eventFunctionContainer = selectedEventsBasedObject.getEventsFunctions();
      for (
        let index = 0;
        index < eventFunctionContainer.getEventsFunctionsCount();
        index++
      ) {
        const groupName = eventFunctionContainer
          .getEventsFunctionAt(index)
          .getGroup();
        if (groupName) {
          groupNames.add(groupName);
        }
      }
    } else {
      const { eventsFunctionsExtension } = this.props;
      for (
        let index = 0;
        index < eventsFunctionsExtension.getEventsFunctionsCount();
        index++
      ) {
        const groupName = eventsFunctionsExtension
          .getEventsFunctionAt(index)
          .getGroup();
        if (groupName) {
          groupNames.add(groupName);
        }
      }
    }
    return [...groupNames].sort((a, b) => a.localeCompare(b));
  };

  _onConfigurationUpdated = (
    attribute?: ExtensionItemConfigurationAttribute | null
  ) => {
    if (
      attribute === 'type' ||
      attribute === 'isPrivate' ||
      attribute === 'isAsync'
    ) {
      // Force an update to ensure the icon of the edited function is updated.
      this.forceUpdate();
    }

    // Do nothing otherwise to avoid costly and useless extra renders.
  };

  onBeginCreateEventsFunction = () => {
    sendEventsExtractedAsFunction({
      step: 'begin',
      parentEditor: 'extension-events-editor',
    });
  };

  onCreateEventsFunction = (
    extensionName: string,
    eventsFunction: gdEventsFunction
  ) => {
    this.props.onCreateEventsFunction(
      extensionName,
      eventsFunction,
      'extension-events-editor'
    );
  };

  render() {
    const { project, eventsFunctionsExtension } = this.props;
    const {
      selectedEventsFunction,
      selectedEventsBasedBehavior,
      selectedEventsBasedObject,
      editOptionsDialogOpen,
      behaviorMethodSelectorDialogOpen,
      objectMethodSelectorDialogOpen,
      extensionFunctionSelectorDialogOpen,
    } = this.state;

    const selectedEventsBasedEntity =
      selectedEventsBasedBehavior || selectedEventsBasedObject;

    const editors = {
      parameters: {
        type: 'primary',
        title: t`Function Configuration`,
        toolbarControls: [],
        renderEditor: () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
            {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Background maxWidth>
                {selectedEventsFunction &&
                this._globalObjectsContainer &&
                this._objectsContainer ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <EventsFunctionConfigurationEditor
                    project={project}
                    eventsFunction={selectedEventsFunction}
                    eventsBasedBehavior={selectedEventsBasedBehavior}
                    eventsBasedObject={selectedEventsBasedObject}
                    eventsFunctionsContainer={
                      (selectedEventsBasedEntity &&
// @ts-expect-error - TS2339 - Property 'getEventsFunctions' does not exist on type 'never'.
                        selectedEventsBasedEntity.getEventsFunctions()) ||
                      eventsFunctionsExtension
                    }
                    globalObjectsContainer={this._globalObjectsContainer}
                    objectsContainer={this._objectsContainer}
                    onConfigurationUpdated={this._onConfigurationUpdated}
                    helpPagePath={
                      selectedEventsBasedObject
                        ? '/behaviors/events-based-objects'
                        : selectedEventsBasedBehavior
                        ? '/behaviors/events-based-behaviors'
                        : '/events/functions'
                    }
                    onParametersOrGroupsUpdated={() => {
                      this._loadEventsFunctionFrom(
                        project,
                        selectedEventsFunction,
                        selectedEventsBasedBehavior,
                        selectedEventsBasedObject,
                        this.props.eventsFunctionsExtension
                      );
                      this.forceUpdate();
                    }}
                    onMoveFreeEventsParameter={this._makeMoveFreeEventsParameter(
                      i18n
                    )}
                    onMoveBehaviorEventsParameter={this._makeMoveBehaviorEventsParameter(
                      i18n
                    )}
                    onMoveObjectEventsParameter={this._makeMoveObjectEventsParameter(
                      i18n
                    )}
                    unsavedChanges={this.props.unsavedChanges}
                    getFunctionGroupNames={this._getFunctionGroupNames}
                  />
                ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>
                      Choose a function, or a function of a behavior, to set the
                      parameters that it accepts.
                    </Trans>
                  </EmptyMessage>
                )}
              </Background>
            )}
          </I18n>
        ),
      },
      'events-sheet': {
        type: 'primary',
        noTitleBar:
          !!selectedEventsFunction ||
          (!selectedEventsBasedBehavior && !selectedEventsBasedObject),
        noSoftKeyboardAvoidance: true,
        title: selectedEventsBasedBehavior
          ? t`Behavior Configuration`
          : selectedEventsBasedObject
          ? t`Object Configuration`
          : null,
        toolbarControls: [],
        renderEditor: () =>
          selectedEventsFunction &&
          this._globalObjectsContainer &&
          this._objectsContainer ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Background>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <EventsSheet
// @ts-expect-error - TS2339 - Property 'ptr' does not exist on type 'never'.
                key={selectedEventsFunction.ptr}
// @ts-expect-error - TS7006 - Parameter 'editor' implicitly has an 'any' type.
                ref={editor => (this.editor = editor)}
                project={project}
                scope={{
                  project,
                  layout: null,
                  externalEvents: null,
                  eventsFunctionsExtension,
                  eventsBasedBehavior: selectedEventsBasedBehavior,
                  eventsBasedObject: selectedEventsBasedObject,
                  eventsFunction: selectedEventsFunction,
                }}
                globalObjectsContainer={this._globalObjectsContainer}
                objectsContainer={this._objectsContainer}
// @ts-expect-error - TS2339 - Property 'getEvents' does not exist on type 'never'.
                events={selectedEventsFunction.getEvents()}
                onOpenExternalEvents={() => {}}
                onOpenLayout={() => {}}
                resourceManagementProps={this.props.resourceManagementProps}
                openInstructionOrExpression={
                  this.props.openInstructionOrExpression
                }
                setToolbar={this.props.setToolbar}
                onBeginCreateEventsFunction={this.onBeginCreateEventsFunction}
                onCreateEventsFunction={this.onCreateEventsFunction}
                onOpenSettings={this._editOptions}
                settingsIcon={extensionEditIconReactNode}
                unsavedChanges={this.props.unsavedChanges}
                isActive={true}
              />
            </Background>
          ) : selectedEventsBasedBehavior ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <EventsBasedBehaviorEditorPanel
              project={project}
              eventsFunctionsExtension={eventsFunctionsExtension}
              eventsBasedBehavior={selectedEventsBasedBehavior}
              unsavedChanges={this.props.unsavedChanges}
// @ts-expect-error - TS7006 - Parameter 'oldName' implicitly has an 'any' type. | TS7006 - Parameter 'newName' implicitly has an 'any' type.
              onRenameProperty={(oldName, newName) =>
                this._onBehaviorPropertyRenamed(
                  selectedEventsBasedBehavior,
                  oldName,
                  newName
                )
              }
// @ts-expect-error - TS7006 - Parameter 'oldName' implicitly has an 'any' type. | TS7006 - Parameter 'newName' implicitly has an 'any' type.
              onRenameSharedProperty={(oldName, newName) =>
                this._onBehaviorSharedPropertyRenamed(
                  selectedEventsBasedBehavior,
                  oldName,
                  newName
                )
              }
              onEventsFunctionsAdded={() => {
                if (this.eventsFunctionList) {
                  this.eventsFunctionList.forceUpdateList();
                }
              }}
              onConfigurationUpdated={this._onConfigurationUpdated}
            />
          ) : selectedEventsBasedObject && this._globalObjectsContainer ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <EventsBasedObjectEditorPanel
              project={project}
              globalObjectsContainer={this._globalObjectsContainer}
              eventsFunctionsExtension={eventsFunctionsExtension}
              eventsBasedObject={selectedEventsBasedObject}
              unsavedChanges={this.props.unsavedChanges}
// @ts-expect-error - TS7006 - Parameter 'oldName' implicitly has an 'any' type. | TS7006 - Parameter 'newName' implicitly has an 'any' type.
              onRenameProperty={(oldName, newName) =>
                this._onObjectPropertyRenamed(
                  selectedEventsBasedObject,
                  oldName,
                  newName
                )
              }
              onEventsFunctionsAdded={() => {
                if (this.eventsFunctionList) {
                  this.eventsFunctionList.forceUpdateList();
                }
              }}
            />
          ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Background>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>
                  Choose a function, or a function of a behavior, to edit its
                  events.
                </Trans>
              </EmptyMessage>
            </Background>
          ),
      },
      'functions-list': {
        type: 'primary',
        title: t`Functions`,
        toolbarControls: [],
        renderEditor: () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
            {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <EventsFunctionsListWithErrorBoundary
// @ts-expect-error - TS7006 - Parameter 'eventsFunctionList' implicitly has an 'any' type.
                ref={eventsFunctionList =>
                  (this.eventsFunctionList = eventsFunctionList)
                }
                project={project}
                eventsFunctionsExtension={eventsFunctionsExtension}
                unsavedChanges={this.props.unsavedChanges}
                forceUpdateEditor={() => this.forceUpdate()}
                // Free functions
                selectedEventsFunction={selectedEventsFunction}
                onSelectEventsFunction={(
// @ts-expect-error - TS7006 - Parameter 'selectedEventsFunction' implicitly has an 'any' type.
                  selectedEventsFunction,
// @ts-expect-error - TS7006 - Parameter 'selectedEventsBasedBehavior' implicitly has an 'any' type.
                  selectedEventsBasedBehavior,
// @ts-expect-error - TS7006 - Parameter 'selectedEventsBasedObject' implicitly has an 'any' type.
                  selectedEventsBasedObject
                ) =>
                  this._selectEventsFunction(
                    selectedEventsFunction,
                    selectedEventsBasedBehavior,
                    selectedEventsBasedObject
                  )
                }
                onDeleteEventsFunction={this._onDeleteEventsFunction}
                onRenameEventsFunction={this._makeRenameEventsFunction(i18n)}
                onAddEventsFunction={this._onAddEventsFunction}
                onEventsFunctionAdded={() => {}}
                // Behaviors
                selectedEventsBasedBehavior={selectedEventsBasedBehavior}
                onSelectEventsBasedBehavior={this._selectEventsBasedBehavior}
                onDeleteEventsBasedBehavior={this._onDeleteEventsBasedBehavior}
                onRenameEventsBasedBehavior={this._makeRenameEventsBasedBehavior(
                  i18n
                )}
                onEventsBasedBehaviorRenamed={
                  this._onEventsBasedBehaviorRenamed
                }
                onEventsBasedBehaviorPasted={this._onEventsBasedBehaviorPasted}
                // Objects
                selectedEventsBasedObject={selectedEventsBasedObject}
                onSelectEventsBasedObject={this._selectEventsBasedObject}
                onDeleteEventsBasedObject={this._onDeleteEventsBasedObject}
                onRenameEventsBasedObject={this._makeRenameEventsBasedObject(
                  i18n
                )}
                onEventsBasedObjectRenamed={this._onEventsBasedObjectRenamed}
              />
            )}
          </I18n>
        ),
      },
    } as const;

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResponsiveWindowMeasurer>
          {({ isMobile }) =>
            isMobile ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <EditorNavigator
// @ts-expect-error - TS7006 - Parameter 'editorNavigator' implicitly has an 'any' type.
                ref={editorNavigator =>
                  (this._editorNavigator = editorNavigator)
                }
                editors={editors}
                initialEditorName={'functions-list'}
                transitions={{
                  'events-sheet': {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    nextIcon: <Tune />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    nextLabel: <Trans>Parameters</Trans>,
                    nextEditor: 'parameters',
                    previousEditor: () => 'functions-list',
                  },
                  parameters: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    nextIcon: <Mark />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    nextLabel: <Trans>Validate these parameters</Trans>,
                    nextEditor: 'events-sheet',
                  },
                }}
                onEditorChanged={
                  // It's important that this callback is the same across renders,
                  // to avoid confusing EditorNavigator into thinking it's changed
                  // and immediately calling it, which would trigger an infinite loop.
                  // Search for "callback-prevent-infinite-rerendering" in the codebase.
                  this._onEditorNavigatorEditorChanged
                }
              />
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <PreferencesContext.Consumer>
                {({
// @ts-expect-error - TS7031 - Binding element 'getDefaultEditorMosaicNode' implicitly has an 'any' type.
                  getDefaultEditorMosaicNode,
// @ts-expect-error - TS7031 - Binding element 'setDefaultEditorMosaicNode' implicitly has an 'any' type.
                  setDefaultEditorMosaicNode,
                }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <EditorMosaic
// @ts-expect-error - TS7006 - Parameter 'editorMosaic' implicitly has an 'any' type.
                    ref={editorMosaic => (this._editorMosaic = editorMosaic)}
                    editors={editors}
// @ts-expect-error - TS7006 - Parameter 'node' implicitly has an 'any' type.
                    onPersistNodes={node =>
                      setDefaultEditorMosaicNode(
                        'events-functions-extension-editor',
                        node
                      )
                    }
                    initialNodes={
                      // Settings from older release may not have the unified
                      // function list.
                      mosaicContainsNode(
                        getDefaultEditorMosaicNode(
                          'events-functions-extension-editor'
                        ) || getInitialMosaicEditorNodes(),
                        'functions-list'
                      )
                        ? getDefaultEditorMosaicNode(
                            'events-functions-extension-editor'
                          ) || getInitialMosaicEditorNodes()
                        : // Force the mosaic to reset to default.
                          getInitialMosaicEditorNodes()
                    }
                  />
                )}
              </PreferencesContext.Consumer>
            )
          }
        </ResponsiveWindowMeasurer>
        {editOptionsDialogOpen && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <OptionsEditorDialog
            eventsFunctionsExtension={eventsFunctionsExtension}
            open
            onClose={() => this._editOptions(false)}
          />
        )}
        {objectMethodSelectorDialogOpen && selectedEventsBasedObject && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ObjectMethodSelectorDialog
            eventsBasedObject={selectedEventsBasedObject}
            onCancel={() => this._onCloseObjectMethodSelectorDialog(null)}
// @ts-expect-error - TS7006 - Parameter 'parameters' implicitly has an 'any' type.
            onChoose={parameters =>
              this._onCloseObjectMethodSelectorDialog(parameters)
            }
          />
        )}
        {behaviorMethodSelectorDialogOpen && selectedEventsBasedBehavior && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <BehaviorMethodSelectorDialog
            eventsBasedBehavior={selectedEventsBasedBehavior}
            onCancel={() => this._onCloseBehaviorMethodSelectorDialog(null)}
// @ts-expect-error - TS7006 - Parameter 'parameters' implicitly has an 'any' type.
            onChoose={parameters =>
              this._onCloseBehaviorMethodSelectorDialog(parameters)
            }
          />
        )}
        {extensionFunctionSelectorDialogOpen && eventsFunctionsExtension && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ExtensionFunctionSelectorDialog
            eventsFunctionsExtension={eventsFunctionsExtension}
            onCancel={() => this._onCloseExtensionFunctionSelectorDialog(null)}
// @ts-expect-error - TS7006 - Parameter 'parameters' implicitly has an 'any' type.
            onChoose={parameters =>
              this._onCloseExtensionFunctionSelectorDialog(parameters)
            }
          />
        )}
      </React.Fragment>
    );
  }
}
