import * as React from 'react';

// Keep first as it creates the `global.gd` object:
// @ts-expect-error - TS6142 - Module './GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from './GDevelopJsInitializerDecorator';

import { storiesOf } from '@storybook/react';
import { action, configureActions } from '@storybook/addon-actions';

// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module './Welcome' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/Welcome.tsx', but '--jsx' is not set.
import Welcome from './Welcome';
// @ts-expect-error - TS6142 - Module '../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../UI/HelpButton';
// @ts-expect-error - TS6142 - Module '../UI/HelpIcon' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpIcon/index.tsx', but '--jsx' is not set.
import HelpIcon from '../UI/HelpIcon';
// @ts-expect-error - TS6142 - Module '../MainFrame/AboutDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/AboutDialog.tsx', but '--jsx' is not set.
import AboutDialog from '../MainFrame/AboutDialog';
// @ts-expect-error - TS6142 - Module '../UI/DragHandle' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragHandle.tsx', but '--jsx' is not set.
import DragHandle from '../UI/DragHandle';
// @ts-expect-error - TS6142 - Module '../UI/Background' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Background.tsx', but '--jsx' is not set.
import Background from '../UI/Background';
// @ts-expect-error - TS6142 - Module '../UI/LocalFolderPicker' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LocalFolderPicker/index.tsx', but '--jsx' is not set.
import LocalFolderPicker from '../UI/LocalFolderPicker';
// @ts-expect-error - TS6142 - Module '../UI/LocalFilePicker' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LocalFilePicker/index.tsx', but '--jsx' is not set.
import LocalFilePicker from '../UI/LocalFilePicker';
// @ts-expect-error - TS6142 - Module '../EventsSheet/EventsTree/Renderers/LinkEvent/ExternalEventsAutoComplete' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/EventsTree/Renderers/LinkEvent/ExternalEventsAutoComplete.tsx', but '--jsx' is not set.
import ExternalEventsAutoComplete from '../EventsSheet/EventsTree/Renderers/LinkEvent/ExternalEventsAutoComplete';
// @ts-expect-error - TS6142 - Module '../EventsSheet/ParameterFields/LayerField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/LayerField.tsx', but '--jsx' is not set.
import LayerField from '../EventsSheet/ParameterFields/LayerField';
// @ts-expect-error - TS6142 - Module '../EventsSheet/ParameterFields/MouseField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/MouseField.tsx', but '--jsx' is not set.
import MouseField from '../EventsSheet/ParameterFields/MouseField';
// @ts-expect-error - TS6142 - Module '../EventsSheet/ParameterFields/SceneVariableField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/SceneVariableField.tsx', but '--jsx' is not set.
import SceneVariableField from '../EventsSheet/ParameterFields/SceneVariableField';
// @ts-expect-error - TS6142 - Module '../EventsSheet/ParameterFields/ObjectVariableField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/ObjectVariableField.tsx', but '--jsx' is not set.
import ObjectVariableField from '../EventsSheet/ParameterFields/ObjectVariableField';
// @ts-expect-error - TS6142 - Module '../EventsSheet/ParameterFields/KeyField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/KeyField.tsx', but '--jsx' is not set.
import KeyField from '../EventsSheet/ParameterFields/KeyField';
// @ts-expect-error - TS6142 - Module '../EventsSheet/ParameterFields/ExpressionField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/ExpressionField.tsx', but '--jsx' is not set.
import ExpressionField from '../EventsSheet/ParameterFields/ExpressionField';
// @ts-expect-error - TS6142 - Module '../EventsSheet/ParameterFields/StringField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/StringField.tsx', but '--jsx' is not set.
import StringField from '../EventsSheet/ParameterFields/StringField';
// @ts-expect-error - TS6142 - Module '../EventsSheet/ParameterFields/ColorExpressionField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/ColorExpressionField.tsx', but '--jsx' is not set.
import ColorExpressionField from '../EventsSheet/ParameterFields/ColorExpressionField';
// @ts-expect-error - TS6142 - Module '../EventsSheet/ParameterFields/TrueFalseField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/TrueFalseField.tsx', but '--jsx' is not set.
import TrueFalseField from '../EventsSheet/ParameterFields/TrueFalseField';
// @ts-expect-error - TS6142 - Module '../EventsSheet/ParameterFields/YesNoField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/YesNoField.tsx', but '--jsx' is not set.
import YesNoField from '../EventsSheet/ParameterFields/YesNoField';
// @ts-expect-error - TS6142 - Module '../EventsSheet/ParameterFields/ForceMultiplierField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/ForceMultiplierField.tsx', but '--jsx' is not set.
import ForceMultiplierField from '../EventsSheet/ParameterFields/ForceMultiplierField';
// @ts-expect-error - TS6142 - Module '../ObjectsList/ObjectSelector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectsList/ObjectSelector.tsx', but '--jsx' is not set.
import ObjectSelector from '../ObjectsList/ObjectSelector';
// @ts-expect-error - TS6142 - Module '../MainFrame/EditorContainers/ExternalPropertiesDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/ExternalPropertiesDialog.tsx', but '--jsx' is not set.
import ExternalPropertiesDialog from '../MainFrame/EditorContainers/ExternalPropertiesDialog';
// @ts-expect-error - TS6142 - Module './PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator, { getPaperDecorator } from './PaperDecorator';
import ValueStateHolder from './ValueStateHolder';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/DragAndDrop/DragAndDropContextProvider'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DragAndDropContextProvider.js' implicitly has an 'any' type.
import DragAndDropContextProvider from '../UI/DragAndDrop/DragAndDropContextProvider';
// @ts-expect-error - TS6142 - Module '../EventsSheet/InstructionEditor/InstructionOrExpressionSelector/InstructionSelector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/InstructionEditor/InstructionOrExpressionSelector/InstructionSelector.tsx', but '--jsx' is not set.
import InstructionSelector from '../EventsSheet/InstructionEditor/InstructionOrExpressionSelector/InstructionSelector';
import ParameterRenderingService from '../EventsSheet/ParameterRenderingService';
import {
  release,
  releaseWithBreakingChange,
  releaseWithoutDescription,
  geometryMonsterExampleShortHeader,
  fireBulletExtensionShortHeader,
  flashExtensionShortHeader,
} from '../fixtures/GDevelopServicesTestData';
// @ts-expect-error - TS2732 - Cannot find module '../fixtures/DebuggerGameDataDump.json'. Consider using '--resolveJsonModule' to import module with '.json' extension.
import debuggerGameDataDump from '../fixtures/DebuggerGameDataDump.json';
// @ts-expect-error - TS2732 - Cannot find module '../fixtures/ProfilerOutputsTestData.json'. Consider using '--resolveJsonModule' to import module with '.json' extension.
import profilerOutputsTestData from '../fixtures/ProfilerOutputsTestData.json';
import consoleTestData from '../fixtures/ConsoleTestData';
// @ts-expect-error - TS6142 - Module '../Debugger/DebuggerContent' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Debugger/DebuggerContent.tsx', but '--jsx' is not set.
import DebuggerContent from '../Debugger/DebuggerContent';
// @ts-expect-error - TS6142 - Module '../ExportAndShare/Builds/BuildStepsProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/Builds/BuildStepsProgress.tsx', but '--jsx' is not set.
import BuildStepsProgress from '../ExportAndShare/Builds/BuildStepsProgress';
// @ts-expect-error - TS6142 - Module '../Debugger/Profiler/MeasuresTable' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Debugger/Profiler/MeasuresTable.tsx', but '--jsx' is not set.
import MeasuresTable from '../Debugger/Profiler/MeasuresTable';
// @ts-expect-error - TS6142 - Module '../Debugger/Profiler' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Debugger/Profiler/index.tsx', but '--jsx' is not set.
import Profiler from '../Debugger/Profiler';
// @ts-expect-error - TS6142 - Module '../EventsSheet/SearchPanel' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/SearchPanel.tsx', but '--jsx' is not set.
import SearchPanel from '../EventsSheet/SearchPanel';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../UI/PlaceholderLoader';
// @ts-expect-error - TS6142 - Module '../UI/ColorField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ColorField/index.tsx', but '--jsx' is not set.
import ColorField from '../UI/ColorField';
// @ts-expect-error - TS6142 - Module '../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../UI/EmptyMessage';
// @ts-expect-error - TS6142 - Module '../UI/BackgroundText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/BackgroundText.tsx', but '--jsx' is not set.
import BackgroundText from '../UI/BackgroundText';
// @ts-expect-error - TS6142 - Module '../MainFrame/Changelog/ChangelogRenderer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Changelog/ChangelogRenderer.tsx', but '--jsx' is not set.
import ChangelogRenderer from '../MainFrame/Changelog/ChangelogRenderer';
// @ts-expect-error - TS6142 - Module '../MainFrame/Changelog/ChangelogDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Changelog/ChangelogDialog.tsx', but '--jsx' is not set.
import ChangelogDialog from '../MainFrame/Changelog/ChangelogDialog';
// @ts-expect-error - TS6142 - Module '../EventsSheet/EventsFunctionExtractor/EventsFunctionExtractorDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/EventsFunctionExtractor/EventsFunctionExtractorDialog.tsx', but '--jsx' is not set.
import EventsFunctionExtractorDialog from '../EventsSheet/EventsFunctionExtractor/EventsFunctionExtractorDialog';
// @ts-expect-error - TS6142 - Module './FixedHeightFlexContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/FixedHeightFlexContainer.tsx', but '--jsx' is not set.
import FixedHeightFlexContainer from './FixedHeightFlexContainer';
// @ts-expect-error - TS6142 - Module '../BehaviorTypeSelector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/BehaviorTypeSelector/index.tsx', but '--jsx' is not set.
import BehaviorTypeSelector from '../BehaviorTypeSelector';
// @ts-expect-error - TS6142 - Module '../ObjectTypeSelector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectTypeSelector/index.tsx', but '--jsx' is not set.
import ObjectTypeSelector from '../ObjectTypeSelector';
import SemiControlledTextField, {
  SemiControlledTextFieldInterface,
// @ts-expect-error - TS6142 - Module '../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
} from '../UI/SemiControlledTextField';
// @ts-expect-error - TS6142 - Module '../UI/SemiControlledAutoComplete' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledAutoComplete.tsx', but '--jsx' is not set.
import SemiControlledAutoComplete from '../UI/SemiControlledAutoComplete';
// @ts-expect-error - TS6142 - Module '../UI/SemiControlledMultiAutoComplete' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledMultiAutoComplete.tsx', but '--jsx' is not set.
import SemiControlledMultiAutoComplete from '../UI/SemiControlledMultiAutoComplete';
// @ts-expect-error - TS6142 - Module '../EventsSheet/ParameterFields/SceneNameField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/SceneNameField.tsx', but '--jsx' is not set.
import SceneNameField from '../EventsSheet/ParameterFields/SceneNameField';
// @ts-expect-error - TS6142 - Module '../EventsSheet/InstructionEditor/InstructionOrObjectSelector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/InstructionEditor/InstructionOrObjectSelector.tsx', but '--jsx' is not set.
import InstructionOrObjectSelector from '../EventsSheet/InstructionEditor/InstructionOrObjectSelector';
// @ts-expect-error - TS6142 - Module '../EventsSheet/InstructionEditor/InstructionEditorDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/InstructionEditor/InstructionEditorDialog.tsx', but '--jsx' is not set.
import InstructionEditorDialog from '../EventsSheet/InstructionEditor/InstructionEditorDialog';
// @ts-expect-error - TS6142 - Module '../EventsSheet/InstructionEditor/InstructionEditorMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/InstructionEditor/InstructionEditorMenu.tsx', but '--jsx' is not set.
import InstructionEditorMenu from '../EventsSheet/InstructionEditor/InstructionEditorMenu';
// @ts-expect-error - TS6142 - Module './PopoverButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PopoverButton.tsx', but '--jsx' is not set.
import { PopoverButton } from './PopoverButton';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/MiniToolbar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/MiniToolbar.tsx', but '--jsx' is not set.
import MiniToolbar, { MiniToolbarText } from '../UI/MiniToolbar';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module './DragAndDropTestBed' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/DragAndDropTestBed.tsx', but '--jsx' is not set.
import DragAndDropTestBed from './DragAndDropTestBed';
// @ts-expect-error - TS6142 - Module '../UI/EditorMosaic' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EditorMosaic/index.tsx', but '--jsx' is not set.
import EditorMosaic from '../UI/EditorMosaic';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module './EditorMosaicPlayground' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/EditorMosaicPlayground.tsx', but '--jsx' is not set.
import EditorMosaicPlayground from './EditorMosaicPlayground';
// @ts-expect-error - TS6142 - Module '../UI/EditorMosaic/EditorNavigator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EditorMosaic/EditorNavigator.tsx', but '--jsx' is not set.
import EditorNavigator from '../UI/EditorMosaic/EditorNavigator';
// @ts-expect-error - TS6142 - Module '../PropertiesEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/PropertiesEditor/index.tsx', but '--jsx' is not set.
import PropertiesEditor from '../PropertiesEditor';
// @ts-expect-error - TS6142 - Module '../ProjectsStorage/OpenConfirmDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectsStorage/OpenConfirmDialog.tsx', but '--jsx' is not set.
import { OpenConfirmDialog } from '../ProjectsStorage/OpenConfirmDialog';
// @ts-expect-error - TS6142 - Module '../ExportAndShare/BrowserExporters/BrowserS3PreviewLauncher/BrowserPreviewErrorDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/BrowserExporters/BrowserS3PreviewLauncher/BrowserPreviewErrorDialog.tsx', but '--jsx' is not set.
import BrowserPreviewErrorDialog from '../ExportAndShare/BrowserExporters/BrowserS3PreviewLauncher/BrowserPreviewErrorDialog';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module '../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../UI/IconButton';
import Brush from '@material-ui/icons/Brush';
import {
  TextFieldWithButtonLayout,
  ResponsiveLineStackLayout,
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
} from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../EventsSheet/ParameterFields/GenericExpressionField/ExpressionAutocompletionsDisplayer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/GenericExpressionField/ExpressionAutocompletionsDisplayer.tsx', but '--jsx' is not set.
import ExpressionAutocompletionsDisplayer from '../EventsSheet/ParameterFields/GenericExpressionField/ExpressionAutocompletionsDisplayer';
import {
  getFakePopperJsAnchorElement,
  makeFakeExpressionAutocompletions,
  makeFakeExactExpressionAutocompletion,
} from '../fixtures/TestExpressionAutocompletions';
// @ts-expect-error - TS6142 - Module '../HotReload/HotReloadPreviewButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/HotReload/HotReloadPreviewButton.tsx', but '--jsx' is not set.
import HotReloadPreviewButton from '../HotReload/HotReloadPreviewButton';
// @ts-expect-error - TS6142 - Module '../HotReload/HotReloadLogsDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/HotReload/HotReloadLogsDialog.tsx', but '--jsx' is not set.
import HotReloadLogsDialog from '../HotReload/HotReloadLogsDialog';
// @ts-expect-error - TS6142 - Module '../UI/ScrollView' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ScrollView.tsx', but '--jsx' is not set.
import ScrollView from '../UI/ScrollView';
import '../UI/Theme/Global/Scrollbar.css';
import '../UI/Theme/Global/Animation.css';
import {
  Accordion,
  AccordionActions,
  AccordionHeader,
  AccordionBody,
// @ts-expect-error - TS6142 - Module '../UI/Accordion' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Accordion.tsx', but '--jsx' is not set.
} from '../UI/Accordion';
// @ts-expect-error - TS6142 - Module '../ProjectManager/ProjectPropertiesDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectManager/ProjectPropertiesDialog.tsx', but '--jsx' is not set.
import ProjectPropertiesDialog from '../ProjectManager/ProjectPropertiesDialog';
// @ts-expect-error - TS6142 - Module '../ProjectManager/LoadingScreenEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectManager/LoadingScreenEditor.tsx', but '--jsx' is not set.
import { LoadingScreenEditor } from '../ProjectManager/LoadingScreenEditor';
// @ts-expect-error - TS6142 - Module '../MainFrame/Preferences/PreferencesDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesDialog.tsx', but '--jsx' is not set.
import PreferencesDialog from '../MainFrame/Preferences/PreferencesDialog';
import {
  ExtensionsAccordion,
  ExamplesAccordion,
// @ts-expect-error - TS6142 - Module '../Profile/ContributionsDetails' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/ContributionsDetails.tsx', but '--jsx' is not set.
} from '../Profile/ContributionsDetails';
// @ts-expect-error - TS6142 - Module '../UI/ListIcon' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ListIcon.tsx', but '--jsx' is not set.
import ListIcon from '../UI/ListIcon';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Trash'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Trash.js' implicitly has an 'any' type.
import Trash from '../UI/CustomSvgIcons/Trash';
import fakeResourceManagementProps from './FakeResourceManagement';

configureActions({
  depth: 2,
  limit: 20,
});

// No i18n in this file

storiesOf('Welcome', module)
  .addDecorator(paperDecorator)
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  .add('to Storybook', () => <Welcome />);

storiesOf('UI Building Blocks/SemiControlledTextField', module)
  .addDecorator(paperDecorator)
  .add('default', () => {
    const [value, setValue] = React.useState('Hello World');

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SemiControlledTextField value={value} onChange={setValue} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <p>State value is {value}</p>
      </React.Fragment>
    );
  })
  .add('default (commitOnBlur)', () => {
    const [value, setValue] = React.useState('Hello World');

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SemiControlledTextField
          value={value}
          onChange={setValue}
          commitOnBlur
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <p>State value is {value}</p>
      </React.Fragment>
    );
  })
  .add('example that is storing a float in the state', () => {
    const [value, setValue] = React.useState(12.35);

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SemiControlledTextField
          value={value.toString()}
// @ts-expect-error - TS7006 - Parameter 'newValue' implicitly has an 'any' type.
          onChange={newValue => setValue(parseFloat(newValue))}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <p>
          State value is {value} ({typeof value})
        </p>
      </React.Fragment>
    );
  })
  .add('example that is storing a float in the state (commitOnBlur)', () => {
    const [value, setValue] = React.useState(12.35);

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SemiControlledTextField
          value={value.toString()}
// @ts-expect-error - TS7006 - Parameter 'newValue' implicitly has an 'any' type.
          onChange={newValue => setValue(parseFloat(newValue))}
          commitOnBlur
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <p>
          State value is {value} ({typeof value})
        </p>
      </React.Fragment>
    );
  })
  .add('reduced margin, in a MiniToolbar', () => {
    const [value, setValue] = React.useState('Some value');

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <MiniToolbar>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <MiniToolbarText firstChild>Please enter something:</MiniToolbarText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledTextField
            margin="none"
            value={value}
            onChange={setValue}
            commitOnBlur
          />
        </MiniToolbar>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <p>State value is {value}</p>
      </React.Fragment>
    );
  })
  .add('with a (markdown) helper text', () => {
    const [value, setValue] = React.useState('Hello World!');

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SemiControlledTextField
          helperMarkdownText="This is some help text that can be written in **markdown**. This is *very* useful for emphasis and can even be used to add [links](http://example.com)."
          value={value}
          onChange={setValue}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <p>State value is {value}</p>
      </React.Fragment>
    );
  })
  .add('forceSetValue and forceSetSelection', () => {
    const [value, setValue] = React.useState('Hello World!');
    const field = React.useRef<SemiControlledTextFieldInterface | null | undefined>(null);

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SemiControlledTextField
          ref={field}
          value={value}
          onChange={setValue}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <p>State value is {value}</p>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <p>
          Clicking on these buttons will focus the field, then do the action
          after 1 second.
        </p>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <RaisedButton
          onClick={() => {
            field.current && field.current.focus();
            setTimeout(
              () =>
                field.current &&
                field.current.forceSetValue('Forced Hello World'),
              1000
            );
          }}
          label="Force change the value"
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <RaisedButton
          onClick={() => {
            field.current && field.current.focus();
            setTimeout(
              () => field.current && field.current.forceSetSelection(2, 4),
              1000
            );
          }}
          label="Change the selection"
        />
      </React.Fragment>
    );
  });

storiesOf('UI Building Blocks/DragAndDrop', module).add('test bed', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <DragAndDropTestBed />
  </DragAndDropContextProvider>
));

storiesOf('UI Building Blocks/SemiControlledAutoComplete', module)
  .addDecorator(paperDecorator)
  .add('default, with text', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={'Choice 6'}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledAutoComplete
            value={value}
            onChange={onChange}
            dataSource={[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => ({
              text: `Choice ${i}`,
              value: `Choice ${i}`,
            }))}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <p>State value is {value}</p>
        </React.Fragment>
      )}
    />
  ))
  .add('default, with error', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={'Choice 6'}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledAutoComplete
            value={value}
            onChange={onChange}
            dataSource={[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => ({
              text: `Choice ${i}`,
              value: `Choice ${i}`,
            }))}
            errorText={'There was an error somewhere'}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <p>State value is {value}</p>
        </React.Fragment>
      )}
    />
  ))
  .add('default, with translatable elements and a separator', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={''}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledAutoComplete
            value={value}
            onChange={onChange}
            dataSource={[
              {
                text: '',
                value: '',
                translatableValue: 'Click me',
                onClick: action('Click me clicked'),
              },
              {
                type: 'separator',
              },
              {
                text: '',
                value: '',
                translatableValue: 'Or click me',
                onClick: action('Click me clicked'),
              },
            ]}
          />
        </React.Fragment>
      )}
    />
  ))
  .add('default, with onClick for some elements', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={'Choice 6'}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledAutoComplete
            value={value}
            onChange={onChange}
            dataSource={[
              {
                text: '',
                value: 'Click me 1',
                onClick: action('Click me 1 clicked'),
              },
              {
                text: '',
                value: 'Click me 2',
                onClick: action('Click me 2 clicked'),
              },
              {
                type: 'separator',
              },
            ].concat(
// @ts-expect-error - TS2769 - No overload matches this call.
              [1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => ({
                text: `Choice ${i}`,
                value: `Choice ${i}`,
              }))
            )}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <p>State value is {value}</p>
        </React.Fragment>
      )}
    />
  ))
  .add(
    'default, with onClick, long texts and renderIcon for some elements',
    () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <ValueStateHolder
        initialValue={'Choice 6'}
        render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SemiControlledAutoComplete
              value={value}
              onChange={onChange}
              dataSource={[
                {
                  text: '',
                  value: 'Click me 1',
                  onClick: action('Click me 1 clicked'),
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  renderIcon: () => <Brush />,
                },
                {
                  text: '',
                  value: 'Click me 2',
                  onClick: action('Click me 2 clicked'),
                  renderIcon: () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <ListIcon iconSize={24} src={'res/icon128.png'} />
                  ),
                },
                {
                  text: '',
                  value: 'Click me 3',
                  onClick: action('Click me 3 clicked'),
                },
                {
                  type: 'separator',
                },
              ].concat(
// @ts-expect-error - TS2769 - No overload matches this call.
                [1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => ({
                  text:
                    i % 2
                      ? `Choice ${i}`
                      : `A Veeeeeerrrryyyyyy Looooong Choooooooooooiiiiiiiiice ${i}`,
                  value:
                    i % 2
                      ? `Choice ${i}`
                      : `A Veeeeeerrrryyyyyy Looooong Choooooooooooiiiiiiiiice ${i}`,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  renderIcon: i % 3 ? () => <Brush /> : undefined,
                }))
              )}
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <p>State value is {value}</p>
          </React.Fragment>
        )}
      />
    )
  )
  .add('in a dialog, with onClick for some elements', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={'Choice 6'}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Dialog open title="some title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledAutoComplete
            value={value}
            onChange={onChange}
            dataSource={[
              {
                text: '',
                value: 'Click me 1',
                onClick: action('Click me 1 clicked'),
              },
              {
                text: '',
                value: 'Click me 2',
                onClick: action('Click me 2 clicked'),
              },
              {
                type: 'separator',
              },
            ].concat(
// @ts-expect-error - TS2769 - No overload matches this call.
              [1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => ({
                text: `Choice ${i}`,
                value: `Choice ${i}`,
              }))
            )}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <p>State value is {value}</p>
        </Dialog>
      )}
    />
  ))
  .add('reduced margin, in a MiniToolbar', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={'Choice 6'}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <MiniToolbar>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <MiniToolbarText firstChild>Please make a choice:</MiniToolbarText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SemiControlledAutoComplete
              margin="none"
              value={value}
              onChange={onChange}
              dataSource={[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => ({
                text: `Choice ${i}`,
                value: `Choice ${i}`,
              }))}
            />
          </MiniToolbar>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <p>State value is {value}</p>
        </React.Fragment>
      )}
    />
  ))
  .add('with a (markdown) helper text', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={'Choice 6'}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledAutoComplete
            value={value}
            onChange={onChange}
            helperMarkdownText="This is some help text that can be written in **markdown**. This is *very* useful for emphasis and can even be used to add [links](http://example.com)."
            dataSource={[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => ({
              text: `Choice ${i}`,
              value: `Choice ${i}`,
            }))}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <p>State value is {value}</p>
        </React.Fragment>
      )}
    />
  ))
  .add('with a floating label', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={'Choice 6'}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledAutoComplete
            value={value}
            onChange={onChange}
            floatingLabelText="This is a floating label"
            helperMarkdownText="This is some help text that can be written in **markdown**. This is *very* useful for emphasis and can even be used to add [links](http://example.com)."
            dataSource={[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => ({
              text: `Choice ${i}`,
              value: `Choice ${i}`,
            }))}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <p>State value is {value}</p>
        </React.Fragment>
      )}
    />
  ));

storiesOf('UI Building Blocks/SemiControlledMultiAutoComplete', module)
  .addDecorator(paperDecorator)
  .add('default', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={[
        { text: 'Choice 6', value: 'choice-6' },
        { text: 'Choice 1', value: 'choice-1' },
      ]}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ValueStateHolder
          initialValue={null}
          render={(inputValue, onInputChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <SemiControlledMultiAutoComplete
                value={value}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
                onChange={(event, value) => onChange(value)}
                dataSource={[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => ({
                  text: `Choice ${i}`,
                  value: `choice-${i}`,
                }))}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
                onInputChange={(event, value) => onInputChange(value)}
                inputValue={inputValue}
                loading={false}
                helperText="This is an autocomplete"
                hintText="Start typing!"
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <p>
                values are{' '}
{ /* @ts-expect-error - TS7006 - Parameter 'v' implicitly has an 'any' type. */}
                {value.map(v => `(${v.text} - ${v.value})`).join(', ')}
              </p>
            </React.Fragment>
          )}
        />
      )}
    />
  ))
  .add('loading', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={[
        { text: 'Choice 6', value: 'choice-6' },
        { text: 'Choice 1', value: 'choice-1' },
      ]}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ValueStateHolder
          initialValue={null}
          render={(inputValue, onInputChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <SemiControlledMultiAutoComplete
                value={value}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
                onChange={(event, value) => onChange(value)}
                dataSource={[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => ({
                  text: `Choice ${i}`,
                  value: `choice-${i}`,
                }))}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
                onInputChange={(event, value) => onInputChange(value)}
                inputValue={inputValue}
                loading
                helperText="This is an autocomplete"
                hintText="Start typing!"
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <p>
                values are{' '}
{ /* @ts-expect-error - TS7006 - Parameter 'v' implicitly has an 'any' type. */}
                {value.map(v => `(${v.text} - ${v.value})`).join(', ')}
              </p>
            </React.Fragment>
          )}
        />
      )}
    />
  ))
  .add('errored', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={[
        { text: 'Choice 6', value: 'choice-6' },
        { text: 'Choice 1', value: 'choice-1' },
      ]}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ValueStateHolder
          initialValue={null}
          render={(inputValue, onInputChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <SemiControlledMultiAutoComplete
                value={value}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
                onChange={(event, value) => onChange(value)}
                dataSource={[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => ({
                  text: `Choice ${i}`,
                  value: `choice-${i}`,
                }))}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
                onInputChange={(event, value) => onInputChange(value)}
                inputValue={inputValue}
                loading={false}
                helperText="This is an autocomplete"
                hintText="Start typing!"
                error="There's been an error."
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <p>
                values are{' '}
{ /* @ts-expect-error - TS7006 - Parameter 'v' implicitly has an 'any' type. */}
                {value.map(v => `(${v.text} - ${v.value})`).join(', ')}
              </p>
            </React.Fragment>
          )}
        />
      )}
    />
  ));

storiesOf('UI Building Blocks/Layout/Grid', module).add(
  'Line and ScrollView in a fixed height container',
  () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <FixedHeightFlexContainer height={100}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line overflow="hidden">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ScrollView>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text>123</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text>456</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text>789</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text>123</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text>456</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text>789</Text>
          </ScrollView>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ScrollView>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text>123</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text>456</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text>789</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text>123</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text>456</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text>789</Text>
          </ScrollView>
        </Line>
      </Column>
    </FixedHeightFlexContainer>
  )
);

storiesOf('UI Building Blocks/Layout/ResponsiveLineStackLayout', module)
  .add('Default', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div>Some Div</div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <span>Some Span</span>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <RaisedButton label="Raised Button" onClick={action('on click')} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <RaisedButton label="Raised Button" onClick={action('on click')} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <FlatButton label="Flat Button" onClick={action('on click')} />
    </ResponsiveLineStackLayout>
  ))
  .add('Default with null items', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ResponsiveLineStackLayout>
      {null}
      {null}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div>Some Div</div>
      {null}
      {null}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <span>Some Span</span>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <RaisedButton label="Raised Button" onClick={action('on click')} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <RaisedButton label="Raised Button" onClick={action('on click')} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <FlatButton label="Flat Button" onClick={action('on click')} />
      {null}
      {null}
    </ResponsiveLineStackLayout>
  ))
  .add('alignItems=center', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ResponsiveLineStackLayout alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div>Some Div</div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <span>Some Span</span>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <RaisedButton label="Raised Button" onClick={action('on click')} />
    </ResponsiveLineStackLayout>
  ));

storiesOf('UI Building Blocks/Layout/TextFieldWithButtonLayout', module)
  .addDecorator(paperDecorator)
  .add('Empty text field', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <TextFieldWithButtonLayout
      renderTextField={() => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <SemiControlledTextField
          floatingLabelText="Hello world"
          value=""
          onChange={() => {}}
        />
      )}
// @ts-expect-error - TS7006 - Parameter 'style' implicitly has an 'any' type.
      renderButton={style => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <RaisedButton style={style} label="Button" onClick={() => {}} />
      )}
    />
  ))
  .add('Empty text field, margin=none', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <TextFieldWithButtonLayout
      margin="none"
      renderTextField={() => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <SemiControlledTextField
          margin="none"
          floatingLabelText="Hello world"
          value=""
          onChange={() => {}}
        />
      )}
// @ts-expect-error - TS7006 - Parameter 'style' implicitly has an 'any' type.
      renderButton={style => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <RaisedButton style={style} label="Button" onClick={() => {}} />
      )}
    />
  ))
  .add('Empty auto complete field', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <TextFieldWithButtonLayout
      renderTextField={() => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <SemiControlledAutoComplete
          floatingLabelText="Hello world"
          value={''}
          onChange={() => {}}
          dataSource={[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => ({
            text: `Choice ${i}`,
            value: `Choice ${i}`,
          }))}
        />
      )}
// @ts-expect-error - TS7006 - Parameter 'style' implicitly has an 'any' type.
      renderButton={style => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <RaisedButton style={style} label="Button" onClick={() => {}} />
      )}
    />
  ))
  .add('Empty auto complete field, noFloatingLabelText', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <TextFieldWithButtonLayout
      noFloatingLabelText
      renderTextField={() => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <SemiControlledAutoComplete
          value={''}
          onChange={() => {}}
          dataSource={[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => ({
            text: `Choice ${i}`,
            value: `Choice ${i}`,
          }))}
        />
      )}
// @ts-expect-error - TS7006 - Parameter 'style' implicitly has an 'any' type.
      renderButton={style => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <RaisedButton style={style} label="Button" onClick={() => {}} />
      )}
    />
  ))
  .add('Empty auto complete field, margin=none', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <TextFieldWithButtonLayout
      margin="none"
      renderTextField={() => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <SemiControlledAutoComplete
          margin="none"
          floatingLabelText="Hello world"
          value={''}
          onChange={() => {}}
          dataSource={[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => ({
            text: `Choice ${i}`,
            value: `Choice ${i}`,
          }))}
        />
      )}
// @ts-expect-error - TS7006 - Parameter 'style' implicitly has an 'any' type.
      renderButton={style => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <RaisedButton style={style} label="Button" onClick={() => {}} />
      )}
    />
  ))
  .add('Empty auto complete field, margin=none, noFloatingLabelText', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <TextFieldWithButtonLayout
      margin="none"
      noFloatingLabelText
      renderTextField={() => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <SemiControlledAutoComplete
          margin="none"
          value={''}
          onChange={() => {}}
          dataSource={[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => ({
            text: `Choice ${i}`,
            value: `Choice ${i}`,
          }))}
        />
      )}
// @ts-expect-error - TS7006 - Parameter 'style' implicitly has an 'any' type.
      renderButton={style => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <RaisedButton style={style} label="Button" onClick={() => {}} />
      )}
    />
  ))
  .add(
    'Empty auto complete field, margin=none, noFloatingLabelText, with a small IconButton',
    () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <TextFieldWithButtonLayout
        margin="none"
        noFloatingLabelText
        renderTextField={() => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <SemiControlledAutoComplete
            margin="none"
            value={''}
            onChange={() => {}}
            dataSource={[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => ({
              text: `Choice ${i}`,
              value: `Choice ${i}`,
            }))}
          />
        )}
// @ts-expect-error - TS7006 - Parameter 'style' implicitly has an 'any' type.
        renderButton={style => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <IconButton size="small">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Brush />
          </IconButton>
        )}
      />
    )
  )
  .add('Filled text field', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <TextFieldWithButtonLayout
      renderTextField={() => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <SemiControlledTextField
          floatingLabelText="Hello"
          value="123"
          onChange={() => {}}
        />
      )}
// @ts-expect-error - TS7006 - Parameter 'style' implicitly has an 'any' type.
      renderButton={style => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <RaisedButton style={style} label="Button" onClick={() => {}} />
      )}
    />
  ))
  .add('Filled text field, full width', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <TextFieldWithButtonLayout
      renderTextField={() => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <SemiControlledTextField
          floatingLabelText="Hello"
          value="123"
          onChange={() => {}}
          fullWidth
        />
      )}
// @ts-expect-error - TS7006 - Parameter 'style' implicitly has an 'any' type.
      renderButton={style => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <RaisedButton style={style} label="Button" onClick={() => {}} />
      )}
    />
  ))
  .add('Filled multiline text field', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <TextFieldWithButtonLayout
      renderTextField={() => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <SemiControlledTextField
          floatingLabelText="Hello"
          multiline
          value={'123\n456\n789\nblablabla bla bla'}
          onChange={() => {}}
        />
      )}
// @ts-expect-error - TS7006 - Parameter 'style' implicitly has an 'any' type.
      renderButton={style => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <RaisedButton style={style} label="Button" onClick={() => {}} />
      )}
    />
  ))
  .add('Filled auto complete field', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <TextFieldWithButtonLayout
      renderTextField={() => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <SemiControlledAutoComplete
          floatingLabelText="Hello world"
          value={'Choice 5'}
          onChange={() => {}}
          dataSource={[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => ({
            text: `Choice ${i}`,
            value: `Choice ${i}`,
          }))}
        />
      )}
// @ts-expect-error - TS7006 - Parameter 'style' implicitly has an 'any' type.
      renderButton={style => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <RaisedButton style={style} label="Button" onClick={() => {}} />
      )}
    />
  ))
  .add('Filled auto complete field, full width', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <TextFieldWithButtonLayout
      renderTextField={() => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <SemiControlledAutoComplete
          floatingLabelText="Hello world"
          value={'Choice 5'}
          onChange={() => {}}
          dataSource={[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => ({
            text: `Choice ${i}`,
            value: `Choice ${i}`,
          }))}
          fullWidth
        />
      )}
// @ts-expect-error - TS7006 - Parameter 'style' implicitly has an 'any' type.
      renderButton={style => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <RaisedButton style={style} label="Button" onClick={() => {}} />
      )}
    />
  ));

storiesOf('UI Building Blocks/Background', module).add('default', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Background>Hello world</Background>
));

storiesOf('UI Building Blocks/Accordion', module)
  .addDecorator(paperDecorator)
  .add('default', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <React.Fragment>
      {[0, 1, 2].map(idx => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Accordion key={idx}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <AccordionHeader
            actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <IconButton
                key="delete"
                size="small"
// @ts-expect-error - TS7006 - Parameter 'ev' implicitly has an 'any' type.
                onClick={ev => {
                  ev.stopPropagation();
                  action('Header action')();
                }}
              >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trash />
              </IconButton>,
            ]}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text>
              {idx === 0 ? 'Simple accordion' : null}
              {idx === 1 ? 'Accordion with no body padding' : null}
              {idx === 2 ? 'Accordion with actions' : null}
            </Text>
          </AccordionHeader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <AccordionBody disableGutters={idx === 1}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text>
              This is a quadrilateral. A quadrilateral has four points. If yours
              has more, count again - you may be misled.
            </Text>
          </AccordionBody>
          {idx === 2 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <AccordionActions
              actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <FlatButton
                  primary
                  label="Count"
                  onClick={action('Primary action')}
                />,
              ]}
              secondaryActions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <FlatButton
                  label="Ignore"
                  onClick={action('Secondary action')}
                />,
              ]}
            />
          )}
        </Accordion>
      ))}
    </React.Fragment>
  ));

storiesOf('UI Building Blocks/PlaceholderLoader', module)
  .addDecorator(paperDecorator)
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  .add('default', () => <PlaceholderLoader />);

storiesOf('UI Building Blocks/DragHandle', module)
  .addDecorator(paperDecorator)
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  .add('default', () => <DragHandle />);

storiesOf('UI Building Blocks/EmptyMessage', module)
  .addDecorator(paperDecorator)
  .add('default', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <EmptyMessage>
      Hello World, this is an empty message, which is centered.
    </EmptyMessage>
  ));

storiesOf('UI Building Blocks/Text', module)
  .add('default', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text size="title">Title text</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text size="body">
        Usual body text. For most usages. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text size="body2">
        Smaller text. For rare use cases. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </Text>
    </Column>
  ))
  .add('on a Background', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Background>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text size="title">Title text</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text size="body">
          Usual body text. For most usages. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text size="body2">
          Smaller text. For rare use cases. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </Text>
      </Column>
    </Background>
  ));

storiesOf('UI Building Blocks/BackgroundText', module)
  .addDecorator(paperDecorator)
  .add('default', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <BackgroundText>Hello World, this is a background text</BackgroundText>
  ));

storiesOf('UI Building Blocks/ColorField', module)
  .addDecorator(paperDecorator)
  .add('default', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ColorField
        floatingLabelText="Particles start color"
        disableAlpha
        fullWidth
        color="100;100;200"
        onChange={() => {}}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ColorField
        floatingLabelText="This has a helper text"
        disableAlpha
        fullWidth
        color="100;100;200"
        onChange={() => {}}
        helperMarkdownText="Lorem ipsum **dolor sit amet**, consectetur _adipiscing elit_, [sed do eiusmod](http://example.com) tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ColorField
        floatingLabelText="This is not full width"
        disableAlpha
        color="100;100;200"
        onChange={() => {}}
      />
    </div>
  ));

storiesOf('UI Building Blocks/EditorMosaic', module)
  .add('default', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <EditorMosaicPlayground
// @ts-expect-error - TS7031 - Binding element 'openEditor' implicitly has an 'any' type.
      renderButtons={({ openEditor }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
          onClick={() => openEditor('thirdEditor', 'end', 65, 'column')}
          label="Open the third editor"
        />
      )}
// @ts-expect-error - TS7031 - Binding element 'editorRef' implicitly has an 'any' type.
      renderEditorMosaic={({ editorRef }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <EditorMosaic
          ref={editorRef}
          editors={{
            firstEditor: {
              type: 'primary',
              title: t`First editor`,
              toolbarControls: [],
              renderEditor: () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <div>
                  This is the first editor (left), with title bar but no
                  controls to close the window.
                </div>
              ),
            },
            secondEditor: {
              type: 'primary',
              noTitleBar: true,
              renderEditor: () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <div>
                  This is the second editor ("central"), without title bar.
                </div>
              ),
            },
            thirdEditor: {
              type: 'secondary',
              title: t`Third editor`,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              renderEditor: () => <div>This is the third editor (bottom).</div>,
            },
          }}
          initialNodes={{
            direction: 'column',
            first: {
              direction: 'row',
              first: 'firstEditor',
              second: 'secondEditor',
              splitPercentage: 25,
            },
            second: 'thirdEditor',
            splitPercentage: 65,
          }}
        />
      )}
    />
  ))
  .add('limit to one secondary editor', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <EditorMosaicPlayground
// @ts-expect-error - TS7031 - Binding element 'openEditor' implicitly has an 'any' type.
      renderButtons={({ openEditor }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <FlatButton
            onClick={() => openEditor('firstEditor', 'end', 65, 'column')}
            label="Open the 1st secondary editor"
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <FlatButton
            onClick={() => openEditor('secondEditor', 'end', 65, 'column')}
            label="Open the 2nd secondary editor"
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <FlatButton
            onClick={() => openEditor('thirdEditor', 'end', 65, 'column')}
            label="Open the 3rd secondary editor"
          />
        </React.Fragment>
      )}
// @ts-expect-error - TS7031 - Binding element 'editorRef' implicitly has an 'any' type.
      renderEditorMosaic={({ editorRef }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <EditorMosaic
          limitToOneSecondaryEditor
          ref={editorRef}
          editors={{
            firstEditor: {
              type: 'secondary',
              title: t`1st secondary editor`,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              renderEditor: () => <div>This is a secondary editor.</div>,
            },
            secondEditor: {
              type: 'secondary',
              title: t`2nd secondary editor`,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              renderEditor: () => <div>This is another secondary editor.</div>,
            },
            thirdEditor: {
              type: 'secondary',
              title: t`3rd secondary editor`,
              renderEditor: () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <div>This is yet another secondary editor.</div>
              ),
            },
            mainEditor: {
              type: 'primary',
              noTitleBar: true,
              renderEditor: () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <div>This is the main editor, always shown</div>
              ),
            },
          }}
          initialNodes={{
            direction: 'row',
            first: 'mainEditor',
            second: 'firstEditor',
            splitPercentage: 65,
          }}
        />
      )}
    />
  ));

storiesOf('UI Building Blocks/EditorNavigator', module)
  .addDecorator(paperDecorator)
  .add('default', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <EditorMosaicPlayground
// @ts-expect-error - TS7031 - Binding element 'openEditor' implicitly has an 'any' type.
      renderButtons={({ openEditor }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <FlatButton
            onClick={() => openEditor('thirdEditor', 'end', 65, 'column')}
            label="Open the third editor"
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <FlatButton
            onClick={() =>
              openEditor('noTransitionsEditor', 'end', 65, 'column')
            }
            label="Open the editor without transitions"
          />
        </React.Fragment>
      )}
// @ts-expect-error - TS7031 - Binding element 'editorRef' implicitly has an 'any' type.
      renderEditorMosaic={({ editorRef }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <EditorNavigator
          ref={editorRef}
          initialEditorName="firstEditor"
          transitions={{
            firstEditor: {
              nextLabel: 'Second Editor',
              nextEditor: 'secondEditor',
            },
            secondEditor: {
              previousEditor: 'firstEditor',
              nextLabel: 'Third Editor',
              nextEditor: 'thirdEditor',
            },
            thirdEditor: {
              previousEditor: 'secondEditor',
            },
          }}
          editors={{
            firstEditor: {
              type: 'primary',
              title: t`First editor`,
              toolbarControls: [],
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              renderEditor: () => <div>This is the first editor.</div>,
            },
            secondEditor: {
              type: 'primary',
              noTitleBar: true,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              renderEditor: () => <div>This is the second editor.</div>,
            },
            thirdEditor: {
              type: 'secondary',
              title: t`Third editor`,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              renderEditor: () => <div>This is the third editor.</div>,
            },
            noTransitionsEditor: {
              type: 'secondary',
              title: t`Editor without transitions`,
              renderEditor: () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <div>This is an editor without transitions.</div>
              ),
            },
          }}
          onEditorChanged={action('Editor was changed')}
        />
      )}
    />
  ));

storiesOf('UI Building Blocks/HelpButton', module)
  .addDecorator(paperDecorator)
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  .add('default', () => <HelpButton helpPagePath="/test" />);

storiesOf('UI Building Blocks/HelpIcon', module)
  .addDecorator(paperDecorator)
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  .add('default', () => <HelpIcon helpPagePath="/test" />);

storiesOf('PropertiesEditor', module)
  .addDecorator(paperDecorator)
  .add('default', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <PropertiesEditor
      schema={[
        {
          name: 'Object name',
          valueType: 'string',
          disabled: true,
// @ts-expect-error - TS7006 - Parameter 'instance' implicitly has an 'any' type.
          getValue: instance => 'Disabled field',
// @ts-expect-error - TS7006 - Parameter 'instance' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
          setValue: (instance, newValue) => {},
        },
        {
          name: 'Some field with edit buttons',
          valueType: 'string',
// @ts-expect-error - TS7006 - Parameter 'instance' implicitly has an 'any' type.
          getValue: instance => 'Click to test',
// @ts-expect-error - TS7006 - Parameter 'instance' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
          setValue: (instance, newValue) => {},
          onEditButtonBuildMenuTemplate: () => [
            {
              label: 'Option 1',
              click: action('Option 1'),
            },
            {
              label: 'Option 2',
              click: action('Option 2'),
            },
          ],
        },
        {
          name: 'Position',
          type: 'row',
          children: [
            {
              name: 'X',
              valueType: 'number',
// @ts-expect-error - TS7006 - Parameter 'instance' implicitly has an 'any' type.
              getValue: instance => 10,
// @ts-expect-error - TS7006 - Parameter 'instance' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
              setValue: (instance, newValue) => {},
            },
            {
              name: 'Y',
              valueType: 'number',
// @ts-expect-error - TS7006 - Parameter 'instance' implicitly has an 'any' type.
              getValue: instance => 20.1234,
// @ts-expect-error - TS7006 - Parameter 'instance' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
              setValue: (instance, newValue) => {},
            },
          ],
        },
        {
          name: 'Angle',
          valueType: 'number',
// @ts-expect-error - TS7006 - Parameter 'instance' implicitly has an 'any' type.
          getValue: instance => 90.123456,
// @ts-expect-error - TS7006 - Parameter 'instance' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
          setValue: (instance, newValue) => {},
        },
        {
          name: 'Checked checkbox',
          valueType: 'boolean',
// @ts-expect-error - TS7006 - Parameter 'instance' implicitly has an 'any' type.
          getValue: instance => true,
// @ts-expect-error - TS7006 - Parameter 'instance' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
          setValue: (instance, newValue) => {},
        },
        {
          name: 'Unchecked checkbox',
          valueType: 'boolean',
// @ts-expect-error - TS7006 - Parameter 'instance' implicitly has an 'any' type.
          getValue: instance => false,
// @ts-expect-error - TS7006 - Parameter 'instance' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
          setValue: (instance, newValue) => {},
        },
      ]}
      instances={[{ name: 'instance1' }, { name: 'instance2' }]}
    />
  ))
  .add('with descriptions and extra descriptions', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <PropertiesEditor
      schema={[
        {
          name: 'Object name',
          valueType: 'string',
          disabled: true,
// @ts-expect-error - TS7006 - Parameter 'instance' implicitly has an 'any' type.
          getValue: instance => 'Disabled field',
// @ts-expect-error - TS7006 - Parameter 'instance' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
          setValue: (instance, newValue) => {},
          getDescription: () =>
            'This is a description. It can be fairly long and even have some *Markdown*, including [links](http://example.com).',
        },
        {
          name: 'Some field with edit buttons',
          valueType: 'string',
// @ts-expect-error - TS7006 - Parameter 'instance' implicitly has an 'any' type.
          getValue: instance => 'Click to test',
// @ts-expect-error - TS7006 - Parameter 'instance' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
          setValue: (instance, newValue) => {},
          onEditButtonBuildMenuTemplate: () => [
            {
              label: 'Option 1',
              click: action('Option 1'),
            },
            {
              label: 'Option 2',
              click: action('Option 2'),
            },
          ],
        },
        {
          name: 'Position',
          type: 'row',
          children: [
            {
              name: 'X',
              valueType: 'number',
// @ts-expect-error - TS7006 - Parameter 'instance' implicitly has an 'any' type.
              getValue: instance => 10,
// @ts-expect-error - TS7006 - Parameter 'instance' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
              setValue: (instance, newValue) => {},
              getDescription: () =>
                'This is a description. It can be fairly long and even have some *Markdown*, including [links](http://example.com).',
            },
            {
              name: 'Y',
              valueType: 'number',
// @ts-expect-error - TS7006 - Parameter 'instance' implicitly has an 'any' type.
              getValue: instance => 20.1234,
// @ts-expect-error - TS7006 - Parameter 'instance' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
              setValue: (instance, newValue) => {},
              getDescription: () =>
                'This is a description. It can be fairly long and even have some *Markdown*, including [links](http://example.com).',
            },
          ],
        },
        {
          name: 'Angle',
          valueType: 'number',
// @ts-expect-error - TS7006 - Parameter 'instance' implicitly has an 'any' type.
          getValue: instance => 90.123456,
// @ts-expect-error - TS7006 - Parameter 'instance' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
          setValue: (instance, newValue) => {},
          getDescription: () =>
            'This is a description. It can be fairly long and even have some *Markdown*, including [links](http://example.com).',
        },
        {
          name: 'Checked checkbox',
          valueType: 'boolean',
// @ts-expect-error - TS7006 - Parameter 'instance' implicitly has an 'any' type.
          getValue: instance => true,
// @ts-expect-error - TS7006 - Parameter 'instance' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
          setValue: (instance, newValue) => {},
          getDescription: () =>
            'This is a description. It can be fairly long and even have some *Markdown*, including [links](http://example.com).',
        },
        {
          name: 'Unchecked checkbox',
          valueType: 'boolean',
// @ts-expect-error - TS7006 - Parameter 'instance' implicitly has an 'any' type.
          getValue: instance => false,
// @ts-expect-error - TS7006 - Parameter 'instance' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
          setValue: (instance, newValue) => {},
          getDescription: () =>
            'This is a description. It can be fairly long and even have some *Markdown*, including [links](http://example.com).',
        },
      ]}
      instances={[{ name: 'instance1' }, { name: 'instance2' }]}
    />
  ));

storiesOf('ParameterFields', module)
  .addDecorator(paperDecorator)
  .add('ExpressionField', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={'MySpriteObject.X() + MouseX("", 0)'}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ExpressionField
          project={testProject.project}
          scope={{
            project: testProject.project,
            layout: testProject.testLayout,
          }}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
          value={value}
          onChange={onChange}
          parameterRenderingService={ParameterRenderingService}
        />
      )}
    />
  ))
  .add('ExpressionField (with errors)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={
        'Test()+3-Test()+3-Test()+3-Test()+3-Test()+3-Test()+3-Test()+3-Test()+3\n-Test2()+3-/2//2 \n+ 3()'
      }
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ExpressionField
          project={testProject.project}
          scope={{
            project: testProject.project,
            layout: testProject.testLayout,
          }}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
          value={value}
          onChange={onChange}
          parameterRenderingService={ParameterRenderingService}
        />
      )}
    />
  ))
  .add('StringField', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={'ToString(0) + "Test" + NewLine() + VariableString(MyVar)'}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <StringField
          project={testProject.project}
          scope={{
            project: testProject.project,
            layout: testProject.testLayout,
          }}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
          value={value}
          onChange={onChange}
          parameterRenderingService={ParameterRenderingService}
        />
      )}
    />
  ))
  .add('ExternalEventsAutoComplete', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={'Test'}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ExternalEventsAutoComplete
          project={testProject.project}
          value={value}
          onChange={onChange}
        />
      )}
    />
  ))
  .add('ExternalEventsAutoComplete (without project)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={'Test'}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ExternalEventsAutoComplete value={value} onChange={onChange} />
      )}
    />
  ))
  .add('LayerField', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={'"GUI"'}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <LayerField
          project={testProject.project}
          scope={{
            project: testProject.project,
            layout: testProject.testLayout,
          }}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
          value={value}
          onChange={onChange}
        />
      )}
    />
  ))
  .add('LayerField (without project and layout)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={'"GUI"'}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <LayerField
          scope={{ project: testProject.project }}
          value={value}
          onChange={onChange}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
        />
      )}
    />
  ))
  .add('SceneNameField', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={'"TestLayout"'}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <SceneNameField
          project={testProject.project}
          scope={{
            project: testProject.project,
            layout: testProject.testLayout,
          }}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
          value={value}
          onChange={onChange}
        />
      )}
    />
  ))
  .add('SceneNameField (without project and layout)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={'"TestLayout"'}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <SceneNameField
          scope={{ project: testProject.project }}
          value={value}
          onChange={onChange}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
        />
      )}
    />
  ))
  .add('KeyField', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={'Space'}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <KeyField
          project={testProject.project}
          scope={{ project: testProject.project }}
          value={value}
          onChange={onChange}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
        />
      )}
    />
  ))
  .add('MouseField', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={'Left'}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <MouseField
          project={testProject.project}
          scope={{ project: testProject.project }}
          value={value}
          onChange={onChange}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
        />
      )}
    />
  ))
  .add('SceneVariableField', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={'Variable1'}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <SceneVariableField
          project={testProject.project}
          scope={{
            project: testProject.project,
            layout: testProject.testLayout,
          }}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
          value={value}
          onChange={onChange}
        />
      )}
    />
  ))
  .add('SceneVariableField (without layout and project)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={'Variable1'}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <SceneVariableField
          scope={{ project: testProject.project }}
          value={value}
          onChange={onChange}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
        />
      )}
    />
  ))
  .add('ObjectVariableField (without expression, layout and project)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={'Variable1'}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ObjectVariableField
          scope={{ project: testProject.project }}
          value={value}
          onChange={onChange}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
        />
      )}
    />
  ))
  .add('ParameterColorField', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={'"123;342;345"'}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ColorExpressionField
          scope={{ project: testProject.project }}
          value={value}
          onChange={onChange}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
        />
      )}
    />
  ))
  .add('ParameterColorField (inline)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={'"123;342;345"'}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ColorExpressionField
          scope={{ project: testProject.project }}
          value={value}
          onChange={onChange}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
          isInline
        />
      )}
    />
  ))
  .add('TrueFalseField', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={''}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <TrueFalseField
          scope={{ project: testProject.project }}
          value={value}
          onChange={onChange}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
          isInline
        />
      )}
    />
  ))
  .add('YesNoField', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={''}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <YesNoField
          scope={{ project: testProject.project }}
          value={value}
          onChange={onChange}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
          isInline
        />
      )}
    />
  ))
  .add('ForceMultiplierField', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={''}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ForceMultiplierField
          scope={{ project: testProject.project }}
          value={value}
          onChange={onChange}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
        />
      )}
    />
  ))
  .add('ForceMultiplierField (with a deprecated value)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={'0.8'}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ForceMultiplierField
          scope={{ project: testProject.project }}
          value={value}
          onChange={onChange}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
        />
      )}
    />
  ));

storiesOf('ExpressionAutcompletionsDisplayer', module)
  .add('autocompletions (first selected)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ExpressionAutocompletionsDisplayer
      project={testProject.project}
      expressionAutocompletions={makeFakeExpressionAutocompletions()}
      remainingCount={3}
      // $FlowExpectedError
      anchorEl={getFakePopperJsAnchorElement()}
      onChoose={action('chosen')}
      selectedCompletionIndex={0}
      parameterRenderingService={ParameterRenderingService}
      onScroll={() => {}}
    />
  ))
  .add('autocompletions (expression selected)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ExpressionAutocompletionsDisplayer
      project={testProject.project}
      expressionAutocompletions={makeFakeExpressionAutocompletions()}
      remainingCount={3}
      // $FlowExpectedError
      anchorEl={getFakePopperJsAnchorElement()}
      onChoose={action('chosen')}
      selectedCompletionIndex={6}
      parameterRenderingService={ParameterRenderingService}
      onScroll={() => {}}
    />
  ))
  .add('empty autocompletions (because exact expression)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ExpressionAutocompletionsDisplayer
      project={testProject.project}
      expressionAutocompletions={makeFakeExactExpressionAutocompletion()}
      remainingCount={0}
      // $FlowExpectedError
      anchorEl={getFakePopperJsAnchorElement()}
      onChoose={action('chosen')}
      selectedCompletionIndex={0}
      parameterRenderingService={ParameterRenderingService}
      onScroll={() => {}}
    />
  ))
  .add('empty autocompletions (nothing shown)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ExpressionAutocompletionsDisplayer
      project={testProject.project}
      expressionAutocompletions={[]}
      remainingCount={0}
      // $FlowExpectedError
      anchorEl={getFakePopperJsAnchorElement()}
      onChoose={action('chosen')}
      selectedCompletionIndex={0}
      parameterRenderingService={ParameterRenderingService}
      onScroll={() => {}}
    />
  ));

storiesOf('BuildStepsProgress', module)
  .addDecorator(paperDecorator)
  .add('BuildStepsProgress (not started)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <BuildStepsProgress
      exportStep={''}
      build={null}
      stepMaxProgress={0}
      stepCurrentProgress={0}
      errored={false}
      hasBuildStep
    />
  ))
  .add('BuildStepsProgress (not started) (without build step)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <BuildStepsProgress
      exportStep={''}
      build={null}
      stepMaxProgress={0}
      stepCurrentProgress={0}
      errored={false}
      hasBuildStep={false}
    />
  ))
  .add('BuildStepsProgress (export)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <BuildStepsProgress
      exportStep={'export'}
      build={null}
      stepMaxProgress={0}
      stepCurrentProgress={0}
      errored={false}
      hasBuildStep
    />
  ))
  .add('BuildStepsProgress (resources-download)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <BuildStepsProgress
      exportStep={'resources-download'}
      build={null}
      stepMaxProgress={27}
      stepCurrentProgress={16}
      errored={false}
      hasBuildStep
    />
  ))
  .add('BuildStepsProgress (export) (errored)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <BuildStepsProgress
      exportStep={'export'}
      build={null}
      stepMaxProgress={0}
      stepCurrentProgress={0}
      errored={true}
      hasBuildStep
    />
  ))
  .add('BuildStepsProgress (compress)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <BuildStepsProgress
      exportStep={'compress'}
      build={null}
      stepMaxProgress={0}
      stepCurrentProgress={0}
      errored={false}
      hasBuildStep
    />
  ))
  .add('BuildStepsProgress (upload)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <BuildStepsProgress
      exportStep={'upload'}
      build={null}
      stepMaxProgress={100}
      stepCurrentProgress={20}
      errored={false}
      hasBuildStep
    />
  ))
  .add('BuildStepsProgress (upload) (errored)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <BuildStepsProgress
      exportStep={'upload'}
      build={null}
      stepMaxProgress={100}
      stepCurrentProgress={20}
      errored
      hasBuildStep
    />
  ))
  .add('BuildStepsProgress (waiting-for-build)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <BuildStepsProgress
      exportStep={'waiting-for-build'}
      build={null}
      stepMaxProgress={100}
      stepCurrentProgress={20}
      errored={false}
      hasBuildStep
    />
  ))
  .add('BuildStepsProgress (build)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <BuildStepsProgress
      exportStep={'build'}
      build={{
        id: 'fake-build-id',
        gameId: 'game-id',
        userId: 'fake-user-id',
        type: 'electron-build',
        status: 'pending',
        updatedAt: Date.now(),
        createdAt: Date.now(),
      }}
      stepMaxProgress={100}
      stepCurrentProgress={20}
      errored={false}
      showSeeAllMyBuildsExplanation
      hasBuildStep
    />
  ))
  .add('BuildStepsProgress (build) (errored)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <BuildStepsProgress
      exportStep={'build'}
      build={{
        id: 'fake-build-id',
        gameId: 'game-id',
        userId: 'fake-user-id',
        type: 'cordova-build',
        status: 'error',
        logsKey: '/fake-error.log',
        updatedAt: Date.now(),
        createdAt: Date.now(),
      }}
      stepMaxProgress={100}
      stepCurrentProgress={20}
      errored
      hasBuildStep
    />
  ))
  .add('BuildStepsProgress (build) (complete)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <BuildStepsProgress
      exportStep={'done'}
      build={{
        id: 'fake-build-id',
        gameId: 'game-id',
        userId: 'fake-user-id',
        type: 'cordova-build',
        status: 'complete',
        logsKey: '/fake-error.log',
        apkKey: '/fake-game.apk',
        updatedAt: Date.now(),
        createdAt: Date.now(),
      }}
      stepMaxProgress={100}
      stepCurrentProgress={20}
      errored={false}
      hasBuildStep
    />
  ))
  .add('BuildStepsProgress (done) (without build step)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <BuildStepsProgress
      exportStep={'done'}
      build={null}
      stepMaxProgress={100}
      stepCurrentProgress={20}
      errored={false}
      hasBuildStep={false}
    />
  ));

storiesOf('LocalFolderPicker', module)
  .addDecorator(paperDecorator)
  .add('default', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={'Test'}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <LocalFolderPicker value={value} onChange={onChange} type="export" />
      )}
    />
  ))
  .add('full width', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={'Test'}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <LocalFolderPicker
          value={value}
          onChange={onChange}
          type="export"
          fullWidth
        />
      )}
    />
  ));

storiesOf('LocalFilePicker', module)
  .addDecorator(paperDecorator)
  .add('full width', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={'/test/myfile.txt'}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <LocalFilePicker
          title="File picker title"
          message="File picker message"
          filters={[
            {
              name: 'Compressed file',
              extensions: ['zip'],
            },
          ]}
          value={value}
          defaultPath={'/'}
          onChange={onChange}
          fullWidth
        />
      )}
    />
  ));

storiesOf('DebuggerContent', module)
  .add('with data', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <FixedHeightFlexContainer height={550}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <DebuggerContent
          gameData={debuggerGameDataDump}
          onPause={action('on pause')}
          onPlay={action('on play')}
          onRefresh={action('on refresh')}
          onEdit={() => false}
          onCall={() => false}
          onStartProfiler={action('start profiler')}
          onStopProfiler={action('stop profiler')}
          profilerOutput={profilerOutputsTestData}
          profilingInProgress={false}
          logsManager={consoleTestData}
          onOpenedEditorsChanged={() => {}}
        />
      </FixedHeightFlexContainer>
    </DragAndDropContextProvider>
  ))
  .add('without data', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <FixedHeightFlexContainer height={550}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <DebuggerContent
          gameData={null}
          onPause={action('on pause')}
          onPlay={action('on play')}
          onRefresh={action('on refresh')}
          onEdit={() => false}
          onCall={() => false}
          onStartProfiler={action('start profiler')}
          onStopProfiler={action('stop profiler')}
          profilerOutput={profilerOutputsTestData}
          profilingInProgress={true}
          logsManager={consoleTestData}
          onOpenedEditorsChanged={() => {}}
        />
      </FixedHeightFlexContainer>
    </DragAndDropContextProvider>
  ));

storiesOf('Profiler', module)
  .add('without profiler output', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <FixedHeightFlexContainer height={550}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Profiler
          onStart={action('start profiler')}
          onStop={action('stop profiler')}
          profilerOutput={null}
          profilingInProgress={false}
        />
      </FixedHeightFlexContainer>
    </DragAndDropContextProvider>
  ))
  .add('without profiler output, while profiling', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <FixedHeightFlexContainer height={550}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Profiler
          onStart={action('start profiler')}
          onStop={action('stop profiler')}
          profilerOutput={null}
          profilingInProgress={true}
        />
      </FixedHeightFlexContainer>
    </DragAndDropContextProvider>
  ))
  .add('with profiler output', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <FixedHeightFlexContainer height={550}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Profiler
          onStart={action('start profiler')}
          onStop={action('stop profiler')}
          profilerOutput={profilerOutputsTestData}
          profilingInProgress={false}
        />
      </FixedHeightFlexContainer>
    </DragAndDropContextProvider>
  ))
  .add('with profiler output, while profiling', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <FixedHeightFlexContainer height={550}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Profiler
          onStart={action('start profiler')}
          onStop={action('stop profiler')}
          profilerOutput={profilerOutputsTestData}
          profilingInProgress={true}
        />
      </FixedHeightFlexContainer>
    </DragAndDropContextProvider>
  ));

storiesOf('MeasuresTable', module).add('default', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <div style={{ height: 250 }}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <MeasuresTable
      profilerMeasures={profilerOutputsTestData.framesAverageMeasures}
    />
  </div>
));

storiesOf('AboutDialog', module).add('default', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <AboutDialog
    open
    onClose={action('close')}
    updateStatus={{ message: '', status: 'unknown' }}
  />
));

storiesOf('OpenConfirmDialog', module).add('default', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <OpenConfirmDialog
    onClose={action('on close')}
    onConfirm={action('on confirm')}
  />
));

storiesOf('ExternalPropertiesDialog', module)
  .add('with layout selection', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ExternalPropertiesDialog
      title="Configure the properties"
      open
      onChoose={action('on choose')}
      onClose={action('on close')}
      project={testProject.project}
    />
  ))
  .add('with help texts', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ExternalPropertiesDialog
      title="Configure the properties"
      open
      onChoose={action('on choose')}
      onClose={action('on close')}
      project={testProject.project}
      helpTexts={[
        'This is a help text, remember to read it.',
        "And there's another one!",
      ]}
    />
  ));

storiesOf('EventsSheet/EventsFunctionExtractorDialog', module)
  .add('default', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <EventsFunctionExtractorDialog
      project={testProject.project}
      scope={{ project: testProject.project, layout: testProject.testLayout }}
      globalObjectsContainer={testProject.project}
      objectsContainer={testProject.testLayout}
      serializedEvents={testProject.testSerializedEvents}
      onClose={action('close')}
      onCreate={action('create')}
    />
  ))
  .add('with a lot of parameters', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <EventsFunctionExtractorDialog
      project={testProject.project}
      scope={{ project: testProject.project, layout: testProject.testLayout }}
      globalObjectsContainer={testProject.project}
      objectsContainer={testProject.testLayout}
      serializedEvents={testProject.testSerializedEventsWithLotsOfObjects}
      onClose={action('close')}
      onCreate={action('create')}
    />
  ));

storiesOf('SearchPanel', module)
  .add('default (no search done)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <SearchPanel
      onSearchInEvents={() => {}}
      onReplaceInEvents={() => {}}
      resultsCount={null}
      hasEventSelected={false}
      onGoToNextSearchResult={action('next')}
      onGoToPreviousSearchResult={action('previous')}
      onCloseSearchPanel={() => {}}
      searchFocusOffset={null}
    />
  ))
  .add('default (no results)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <SearchPanel
      onSearchInEvents={() => {}}
      onReplaceInEvents={() => {}}
      resultsCount={0}
      hasEventSelected={false}
      onGoToNextSearchResult={action('next')}
      onGoToPreviousSearchResult={action('previous')}
      onCloseSearchPanel={() => {}}
      searchFocusOffset={null}
    />
  ))
  .add('3 results', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <SearchPanel
      onSearchInEvents={() => {}}
      onReplaceInEvents={() => {}}
      resultsCount={3}
      hasEventSelected={false}
      onGoToNextSearchResult={action('next')}
      onGoToPreviousSearchResult={action('previous')}
      onCloseSearchPanel={() => {}}
      searchFocusOffset={null}
    />
  ))
  .add('3 results with focus on the second', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <SearchPanel
      onSearchInEvents={() => {}}
      onReplaceInEvents={() => {}}
      resultsCount={3}
      hasEventSelected={false}
      onGoToNextSearchResult={action('next')}
      onGoToPreviousSearchResult={action('previous')}
      onCloseSearchPanel={() => {}}
      searchFocusOffset={1}
    />
  ));

storiesOf('InstructionSelector', module)
  .addDecorator(paperDecorator)
  .add('conditions (no scope)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <FixedHeightFlexContainer height={400}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
        {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <InstructionSelector
            i18n={i18n}
            selectedType=""
            onChoose={action('Instruction chosen')}
            isCondition
            scope={{ project: testProject.project }}
          />
        )}
      </I18n>
    </FixedHeightFlexContainer>
  ))
  .add('actions (no scope)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <FixedHeightFlexContainer height={400}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
        {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <InstructionSelector
            i18n={i18n}
            selectedType=""
            onChoose={action('Instruction chosen')}
            isCondition={false}
            scope={{ project: testProject.project }}
          />
        )}
      </I18n>
    </FixedHeightFlexContainer>
  ));

storiesOf('InstructionOrObjectSelector', module)
  .addDecorator(paperDecorator)
  .add('"KeyPressed" condition chosen, scope: layout', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={'free-instructions'}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
          {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <FixedHeightFlexContainer height={400}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <InstructionOrObjectSelector
                style={{ flex: 1, display: 'flex', flexDirection: 'column' }} // TODO
                project={testProject.project}
                scope={{
                  project: testProject.project,
                  layout: testProject.testLayout,
                }}
                currentTab={value}
                onChangeTab={onChange}
                globalObjectsContainer={testProject.project}
                objectsContainer={testProject.testLayout}
                isCondition
                chosenInstructionType={'KeyPressed'}
                onChooseInstruction={action('instruction chosen')}
                chosenObjectName={null}
                onChooseObject={action('choose object')}
                focusOnMount
                onClickMore={action('See new behaviors')}
                i18n={i18n}
              />
            </FixedHeightFlexContainer>
          )}
        </I18n>
      )}
    />
  ))
  .add('"MySpriteObject" object chosen, scope: layout', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={'objects'}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
          {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <FixedHeightFlexContainer height={400}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <InstructionOrObjectSelector
                style={{ flex: 1, display: 'flex', flexDirection: 'column' }} // TODO
                project={testProject.project}
                scope={{
                  project: testProject.project,
                  layout: testProject.testLayout,
                }}
                currentTab={value}
                onChangeTab={onChange}
                globalObjectsContainer={testProject.project}
                objectsContainer={testProject.testLayout}
                isCondition
                chosenInstructionType={''}
                onChooseInstruction={action('instruction chosen')}
                chosenObjectName={'MySpriteObject'}
                onChooseObject={action('choose object')}
                focusOnMount
                onClickMore={action('See new behaviors')}
                i18n={i18n}
              />
            </FixedHeightFlexContainer>
          )}
        </I18n>
      )}
    />
  ));

storiesOf('InstructionEditorDialog', module)
  .addDecorator(paperDecorator)
  .add('Existing condition (scope: in a layout)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <InstructionEditorDialog
          i18n={i18n}
          open
          project={testProject.project}
          scope={{
            project: testProject.project,
            layout: testProject.testLayout,
          }}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
          isCondition
          isNewInstruction={false}
          instruction={testProject.testInstruction}
          resourceManagementProps={fakeResourceManagementProps}
          openInstructionOrExpression={action('open instruction or expression')}
          onCancel={action('cancel')}
          onSubmit={action('submit')}
          canPasteInstructions={true}
          onPasteInstructions={action('paste instructions')}
        />
      )}
    </I18n>
  ))
  .add('Existing condition (scope: without layout)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <InstructionEditorDialog
          i18n={i18n}
          open
          project={testProject.project}
          scope={{ project: testProject.project, layout: null }}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
          isCondition
          isNewInstruction={false}
          instruction={testProject.testInstruction}
          resourceManagementProps={fakeResourceManagementProps}
          openInstructionOrExpression={action('open instruction or expression')}
          onCancel={action('cancel')}
          onSubmit={action('submit')}
          canPasteInstructions={true}
          onPasteInstructions={action('paste instructions')}
        />
      )}
    </I18n>
  ))
  .add('New condition (scope: without layout)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text>
        Remember to test the search, which search across objects and all
        instructions - including object instructions (so that object
        instructions can be created either by selecting an object first or by
        searching for it).
      </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
        {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <InstructionEditorDialog
            i18n={i18n}
            open
            project={testProject.project}
            scope={{ project: testProject.project, layout: null }}
            globalObjectsContainer={testProject.project}
            objectsContainer={testProject.testLayout}
            isCondition
            isNewInstruction={true}
            instruction={testProject.testInstruction}
            resourceManagementProps={fakeResourceManagementProps}
            openInstructionOrExpression={action(
              'open instruction or expression'
            )}
            onCancel={action('cancel')}
            onSubmit={action('submit')}
            canPasteInstructions={true}
            onPasteInstructions={action('paste instructions')}
          />
        )}
      </I18n>
    </Column>
  ));

storiesOf('InstructionEditorMenu', module)
  .addDecorator(paperDecorator)
  .add('default', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text>
        Remember to test the search, which search across objects and all
        instructions - including object instructions (so that object
        instructions can be created either by selecting an object first or by
        searching for it).
      </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <PopoverButton>
{ /* @ts-expect-error - TS7031 - Binding element 'buttonElement' implicitly has an 'any' type. | TS7031 - Binding element 'onClose' implicitly has an 'any' type. */}
        {({ buttonElement, onClose }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
            {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <InstructionEditorMenu
                i18n={i18n}
                open
                project={testProject.project}
                scope={{
                  project: testProject.project,
                  layout: testProject.testLayout,
                }}
                globalObjectsContainer={testProject.project}
                objectsContainer={testProject.testLayout}
                isCondition
                isNewInstruction={false}
                instruction={testProject.testInstruction}
                resourceManagementProps={fakeResourceManagementProps}
                openInstructionOrExpression={action(
                  'open instruction or expression'
                )}
                onCancel={onClose}
                onSubmit={onClose}
                anchorEl={buttonElement}
                canPasteInstructions={true}
                onPasteInstructions={action('paste instructions')}
              />
            )}
          </I18n>
        )}
      </PopoverButton>
    </Column>
  ));
storiesOf('ObjectSelector', module)
  .addDecorator(paperDecorator)
  .add('without groups', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={''}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ObjectSelector
          project={testProject.project}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
          value={value}
          onChange={onChange}
          onChoose={action('onChoose in ObjectSelector')}
          noGroups
          hintText="Choose an object to add to the group"
          fullWidth
          openOnFocus
        />
      )}
    />
  ))
  .add('with groups', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={''}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ObjectSelector
          project={testProject.project}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
          value={value}
          onChange={onChange}
          onChoose={action('onChoose in ObjectSelector')}
          hintText="Choose an object or a group"
          fullWidth
          openOnFocus
        />
      )}
    />
  ));

storiesOf('Changelog', module)
  .addDecorator(paperDecorator)
  .add('no breaking changes in this version (but in a previous)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ChangelogRenderer
      releases={[release, releaseWithBreakingChange]}
      error={null}
      currentReleaseName="5.0.0-beta62"
    />
  ))
  .add('breaking changes in this version', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ChangelogRenderer
      releases={[releaseWithBreakingChange]}
      error={null}
      currentReleaseName="5.0.0-beta60"
    />
  ))
  .add('release without a description', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ChangelogRenderer
      releases={[releaseWithoutDescription]}
      error={null}
      currentReleaseName="5.0.0-beta60"
    />
  ))
  .add('loading', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ChangelogRenderer
      releases={null}
      error={null}
      currentReleaseName="5.0.0-beta62"
    />
  ))
  .add('with error', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ChangelogRenderer
      releases={null}
      error={new Error('Fake error')}
      currentReleaseName="5.0.0-beta62"
    />
  ))
  .add('complete changelog dialog', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ChangelogDialog open onClose={action('close dialog')} />
  ));

storiesOf('Profile/ContributionsDetails', module)
  .add('default', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ExtensionsAccordion
        extensions={[fireBulletExtensionShortHeader, flashExtensionShortHeader]}
        extensionError={null}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ExamplesAccordion
        examples={[geometryMonsterExampleShortHeader]}
        exampleError={null}
      />
    </>
  ))
  .add('no contributions', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ExtensionsAccordion extensions={[]} extensionError={null} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ExamplesAccordion examples={[]} exampleError={null} />
    </>
  ))
  .add('with errors', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ExtensionsAccordion extensions={[]} extensionError={new Error()} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ExamplesAccordion examples={[]} exampleError={new Error()} />
    </>
  ));

storiesOf('BrowserPreviewErrorDialog', module)
  .addDecorator(paperDecorator)
  .add('generic error', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <BrowserPreviewErrorDialog
      error={new Error('fake error')}
      onClose={action('on close')}
    />
  ))
  .add('networking error', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <BrowserPreviewErrorDialog
      error={
        // $FlowFixMe - mocking an Error with "code field"
        {
          code: 'NetworkingError',
          message: "Oops, you're offline",
        }
      }
      onClose={action('on close')}
    />
  ));

storiesOf('BehaviorTypeSelector', module)
  .addDecorator(paperDecorator)
  .add('default, for a base object', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <BehaviorTypeSelector
      project={testProject.project}
      value={''}
      onChange={action('change')}
      objectType=""
    />
  ))
  .add('with a non existing behavior selected, for a base object', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <BehaviorTypeSelector
      project={testProject.project}
      value={'MyCustomExtension::BehaviorThatIsNotYetLoaded'}
      onChange={action('change')}
      objectType=""
    />
  ))
  .add('default, for a text object', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <BehaviorTypeSelector
      project={testProject.project}
      value={''}
      onChange={action('change')}
      objectType="TextObject::Text"
    />
  ));

storiesOf('ObjectTypeSelector', module)
  .addDecorator(paperDecorator)
  .add('default (Sprite selected)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ObjectTypeSelector
      project={testProject.project}
      value={'Sprite'}
      onChange={action('change')}
    />
  ))
  .add('custom label (Sprite selected)', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ObjectTypeSelector
      project={testProject.project}
      value={'Sprite'}
      floatingLabelText="Choose the object type to use"
      onChange={action('change')}
    />
  ));

storiesOf('HotReloadPreviewButton', module)
  .add('default', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <HotReloadPreviewButton
      hasPreviewsRunning={false}
      launchProjectDataOnlyPreview={() => {}}
      launchProjectWithLoadingScreenPreview={() => {}}
    />
  ))
  .add('with preview(s) running', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <HotReloadPreviewButton
      hasPreviewsRunning={true}
      launchProjectDataOnlyPreview={() => {}}
      launchProjectWithLoadingScreenPreview={() => {}}
    />
  ));

storiesOf('HotReloadLogsDialog', module)
  .add('with an error', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <HotReloadLogsDialog
      logs={[
        {
          kind: 'error',
          message: 'Oops, something could not be hot-reloaded.',
        },
      ]}
      onClose={() => {}}
      onLaunchNewPreview={() => {}}
    />
  ))
  .add('without an error', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <HotReloadLogsDialog
      logs={[
        {
          kind: 'info',
          message: 'Everything is fine',
        },
      ]}
      onClose={() => {}}
      onLaunchNewPreview={() => {}}
    />
  ));

storiesOf('ProjectPropertiesDialog', module)
  .addDecorator(paperDecorator)
  .add('default', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ProjectPropertiesDialog
          open
          initialTab="properties"
          project={testProject.project}
          onClose={action('onClose')}
          onApply={async () => true}
          onPropertiesApplied={action('onPropertiesApplied')}
          resourceManagementProps={fakeResourceManagementProps}
          i18n={i18n}
        />
      )}
    </I18n>
  ));

storiesOf('ProjectPropertiesDialog/LoadingScreenEditor', module)
  .addDecorator(getPaperDecorator('medium'))
  .add('default', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <LoadingScreenEditor
      loadingScreen={testProject.project.getLoadingScreen()}
      watermark={testProject.project.getWatermark()}
      onLoadingScreenUpdated={action('onLoadingscreenUpdated')}
      onChangeSubscription={action('onChangeSubscription')}
      project={testProject.project}
      resourceManagementProps={fakeResourceManagementProps}
    />
  ));

storiesOf('PreferencesDialog', module).add('default', () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
    {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <PreferencesDialog i18n={i18n} onClose={action('onClose')} />
    )}
  </I18n>
));
