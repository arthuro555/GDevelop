// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import * as React from 'react';
import { setupAutocompletions } from './LocalCodeEditorAutocompletions';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../UI/PlaceholderLoader';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module '../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from '../MainFrame/Preferences/PreferencesContext';
import { getAllThemes } from './Theme';

export type State = {
  MonacoEditor: any | null | undefined,
  error: Error | null | undefined
};
export type Props = {
  value: string,
  onChange: (arg1: string) => void,
  width?: number,
  height?: number,
  onEditorMounted?: () => void,
  onFocus: () => void,
  onBlur: () => void
};

const monacoEditorOptions = {
  scrollBeyondLastLine: false,
  minimap: {
    enabled: false,
  },
} as const;

// There is only a single instance of monaco living, keep track
// of if its initialized or not.
let monacoCompletionsInitialized = false;
let monacoThemesInitialized = false;

export class CodeEditor extends React.Component<Props, State> {
  state = {
    MonacoEditor: null,
    error: null,
  };

  setupEditorThemes = (monaco: any) => {
    if (!monacoThemesInitialized) {
      monacoThemesInitialized = true;

      getAllThemes().forEach(codeEditorTheme => {
        // Builtin themes don't have themeData, don't redefine them.
        if (codeEditorTheme.themeData) {
          monaco.editor.defineTheme(
            codeEditorTheme.themeName,
            codeEditorTheme.themeData
          );
        }
      });
    }
  };

  setUpSaveOnEditorBlur = (editor: any) => {
    editor.onDidBlurEditorText(this.props.onBlur);
  };
  setUpEditorFocus = (editor: any) => {
    editor.onDidFocusEditorText(this.props.onFocus);
  };

  setupEditorCompletions = (editor: any, monaco: any) => {
    this.setUpEditorFocus(editor);
    this.setUpSaveOnEditorBlur(editor);
    if (!monacoCompletionsInitialized) {
      monacoCompletionsInitialized = true;

      monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
        // noLib: true,
        target: monaco.languages.typescript.ScriptTarget.ES6,
        allowNonTsExtensions: true,
        allowJs: true,
        checkJs: true,
      });
      setupAutocompletions(monaco);
    }

    if (this.props.onEditorMounted) this.props.onEditorMounted();
  };

  componentDidMount() {
    this.loadMonacoEditor();
  }

  handleLoadError(error: Error) {
    this.setState({
      error,
    });
  }

  loadMonacoEditor() {
    this.setState({
      error: null,
    });

    // Define the global variable used by Monaco Editor to find its worker
    // (used, at least, for auto-completions).
// @ts-expect-error - TS2339 - Property 'MonacoEnvironment' does not exist on type 'Window & typeof globalThis'.
    window.MonacoEnvironment = {
// @ts-expect-error - TS7006 - Parameter 'workerId' implicitly has an 'any' type. | TS7006 - Parameter 'label' implicitly has an 'any' type.
      getWorkerUrl: function(workerId, label) {
        return 'external/monaco-editor-min/vs/base/worker/workerMain.js';
      },
    };

    import(/* webpackChunkName: "react-monaco-editor" */ 'react-monaco-editor')
      .then(module =>
        this.setState({
          MonacoEditor: module.default,
        })
      )
      .catch(this.handleLoadError);
  }

  _handleContextMenu = (event: React.SyntheticEvent) => {
    // Prevent right click to bubble up and trigger the context menu
    // of the event.
    event.preventDefault();
    event.stopPropagation();
  };

  render() {
    const { MonacoEditor, error } = this.state;
    if (error) {
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Unable to load the code editor</Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Retry</Trans>}
            onClick={this.loadMonacoEditor}
          />
        </React.Fragment>
      );
    }

    if (!MonacoEditor) {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <PlaceholderLoader />;
    }

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <div onContextMenu={this._handleContextMenu}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <PreferencesContext.Consumer>
{ /* @ts-expect-error - TS7031 - Binding element 'preferences' implicitly has an 'any' type. */}
          {({ values: preferences }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2604 - JSX element type 'MonacoEditor' does not have any construct or call signatures.
            <MonacoEditor
              width={this.props.width || 600}
              height={this.props.height || 200}
              language="javascript"
              theme={preferences.codeEditorThemeName}
              value={this.props.value}
              onChange={this.props.onChange}
              editorWillMount={this.setupEditorThemes}
              editorDidMount={this.setupEditorCompletions}
              options={{
                ...monacoEditorOptions,
                fontSize: preferences.eventsSheetZoomLevel,

                // Wrap the code at either the viewport width
                // (so no need to scroll horizontally
                // on small code editors) or at 80 columns max
                // (as a good practice).
                wordWrap: 'on',
              }}
            />
          )}
        </PreferencesContext.Consumer>
      </div>
    );
  }
}
