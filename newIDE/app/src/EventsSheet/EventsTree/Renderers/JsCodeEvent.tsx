import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'classnames'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/classnames/index.js' implicitly has an 'any' type.
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
// @ts-expect-error - TS6142 - Module '../../InlinePopover' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/InlinePopover.tsx', but '--jsx' is not set.
import InlinePopover from '../../InlinePopover';
// @ts-expect-error - TS6142 - Module '../../ParameterFields/ObjectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/ObjectField.tsx', but '--jsx' is not set.
import ObjectField from '../../ParameterFields/ObjectField';
import {
  largeSelectedArea,
  largeSelectableArea,
  selectableArea,
} from '../ClassNames';
import { getHelpLink } from '../../../Utils/HelpLink';
import { EventRendererProps } from './EventRenderer';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'react-measure'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/react-measure/dist/index.cjs.js' implicitly has an 'any' type.
import Measure from 'react-measure';
// @ts-expect-error - TS6142 - Module '../../../CodeEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/CodeEditor/index.tsx', but '--jsx' is not set.
import { CodeEditor } from '../../../CodeEditor';
import { shouldActivate } from '../../../UI/KeyboardShortcuts/InteractionKeys';
import { ParameterFieldInterface } from '../../ParameterFields/ParameterFieldCommons';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/ChevronArrowTop'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ChevronArrowTop.js' implicitly has an 'any' type.
import ChevronArrowTop from '../../../UI/CustomSvgIcons/ChevronArrowTop';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/ChevronArrowBottom'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ChevronArrowBottom.js' implicitly has an 'any' type.
import ChevronArrowBottom from '../../../UI/CustomSvgIcons/ChevronArrowBottom';
const gd: libGDevelop = global.gd;

const fontFamily = '"Lucida Console", Monaco, monospace';
const MINIMUM_EDITOR_HEIGHT = 200;
const EDITOR_PADDING = 100;

const styles = {
  container: {
    minHeight: 30,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#1e1e1e',
  },
  wrappingText: {
    fontFamily,
    fontSize: '0.95em',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
    margin: 0,
    backgroundColor: '#1e1e1e',
    color: '#d4d4d4',
    overflowX: 'hidden',
    maxWidth: '100%',
    whiteSpace: 'normal',
    wordBreak: 'normal',
    overflowWrap: 'anywhere',
  },
  comment: {
    color: '#777',
  },
  commentLink: {
    cursor: 'pointer',
    color: '#777',
    textDecoration: 'underline',
  },
  expandIcon: {
    color: '#d4d4d4',
  },
} as const;

type State = {
  editingObject: boolean,
  editingPreviousValue: string | null | undefined,
  anchorEl: any | null | undefined
};

export default class JsCodeEvent extends React.Component<EventRendererProps, State> {
  _objectField: ParameterFieldInterface | null | undefined = null;
  state = {
    editingObject: false,
    editingPreviousValue: null,
    anchorEl: null,
  };

  _input: any | null | undefined;
  _inlineCodeBeforeChanges: string | null | undefined;

  onFocus = () => {
    const jsCodeEvent = gd.asJsCodeEvent(this.props.event);
    this._inlineCodeBeforeChanges = jsCodeEvent.getInlineCode();
  };

  onBlur = () => {
    const jsCodeEvent = gd.asJsCodeEvent(this.props.event);
    const inlineCodeAfterChanges = jsCodeEvent.getInlineCode();
    if (this._inlineCodeBeforeChanges !== inlineCodeAfterChanges)
      this.props.onEndEditingEvent();
  };

  onChange = (newValue: string) => {
    const jsCodeEvent = gd.asJsCodeEvent(this.props.event);
    jsCodeEvent.setInlineCode(newValue);
  };

  editObject = (domEvent: any) => {
    const jsCodeEvent = gd.asJsCodeEvent(this.props.event);
    const parameterObjects = jsCodeEvent.getParameterObjects();

    // We should not need to use a timeout, but
    // if we don't do this, the InlinePopover's clickaway listener
    // is immediately picking up the event and closing.
    // Search the rest of the codebase for inlinepopover-event-hack
    const anchorEl = domEvent.currentTarget;
    setTimeout(
      () =>
        this.setState(
          {
            editingObject: true,
            editingPreviousValue: parameterObjects,
            anchorEl,
          },
          () => {
            // Give a bit of time for the popover to mount itself
            setTimeout(() => {
              if (this._objectField) this._objectField.focus();
            }, 10);
          }
        ),
      10
    );
  };

  cancelObjectEditing = () => {
    this.endObjectEditing();

    const jsCodeEvent = gd.asJsCodeEvent(this.props.event);
    const { editingPreviousValue } = this.state;
    if (editingPreviousValue != null) {
      jsCodeEvent.setParameterObjects(editingPreviousValue);
      this.forceUpdate();
    }
  };

  endObjectEditing = () => {
    const { anchorEl } = this.state;

    // Put back the focus after closing the inline popover.
    if (anchorEl)
// @ts-expect-error - TS2339 - Property 'focus' does not exist on type 'never'.
      anchorEl.focus();
    const jsCodeEvent = gd.asJsCodeEvent(this.props.event);
    const { editingPreviousValue } = this.state;
    if (editingPreviousValue !== jsCodeEvent.getParameterObjects()) {
      this.props.onEndEditingEvent();
    }
    this.setState({
      editingObject: false,
      editingPreviousValue: null,
      anchorEl: null,
    });
  };

  toggleExpanded = () => {
    const jsCodeEvent = gd.asJsCodeEvent(this.props.event);
    jsCodeEvent.setEventsSheetExpanded(!jsCodeEvent.isEventsSheetExpanded());
  };

  _getCodeEditorHeight = () => {
    const jsCodeEvent = gd.asJsCodeEvent(this.props.event);

    // Always use the minimum height when collapsed.
    if (!jsCodeEvent.isEventsSheetExpanded()) {
      return MINIMUM_EDITOR_HEIGHT;
    }

    // Shrink the editor enough for the additional event elements to fit in the sheet space.
    const heightToFillSheet = this.props.eventsSheetHeight - EDITOR_PADDING;
    return Math.max(MINIMUM_EDITOR_HEIGHT, heightToFillSheet);
  };

  render() {
    const jsCodeEvent = gd.asJsCodeEvent(this.props.event);
    const parameterObjects = jsCodeEvent.getParameterObjects();

    const textStyle = this.props.disabled ? styles.comment : undefined;

    const objects = (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <span
        className={classNames({
          [selectableArea]: true,
        })}
        onClick={this.editObject}
        onKeyPress={event => {
          if (shouldActivate(event)) {
            this.editObject(event);
          }
        }}
        tabIndex={0}
        style={textStyle}
      >
        {parameterObjects ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>, objects /*{parameterObjects}*/</Trans>
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <>
            {' '}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              {'/* Click here to choose objects to pass to JavaScript */'}
            </Trans>
          </>
        )}
      </span>
    );

    const eventsFunctionContext = this.props.scope.eventsFunction ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <span style={textStyle}>, eventsFunctionContext</span>
    ) : null;

    const functionStart = (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <p style={styles.wrappingText}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <span style={textStyle}>
          {this.props.disabled ? '/*' : ''}
          {'(function(runtimeScene'}
        </span>
        {objects}
        {eventsFunctionContext}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <span style={textStyle}>{') {'}</span>
      </p>
    );
    const functionEnd = (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <p style={styles.wrappingText}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <span style={textStyle}>{'})(runtimeScene'}</span>
        {objects}
        {eventsFunctionContext}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <span style={textStyle}>
          {');'}
          {this.props.disabled ? '*/' : ''}
        </span>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <span style={styles.comment}>
          {' // '}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <a
            href={getHelpLink('/events/js-code')}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.commentLink}
          >
            Read the documentation and help
          </a>
        </span>
      </p>
    );

    const expandIcon = (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <div style={styles.expandIcon}>
        {jsCodeEvent.isEventsSheetExpanded() ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ChevronArrowTop fontSize="small" color="inherit" />
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ChevronArrowBottom fontSize="small" color="inherit" />
        )}
      </div>
    );

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Measure bounds>
{ /* @ts-expect-error - TS7031 - Binding element 'measureRef' implicitly has an 'any' type. | TS7031 - Binding element 'contentRect' implicitly has an 'any' type. */}
        {({ measureRef, contentRect }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <div
            style={styles.container}
            className={classNames({
              [largeSelectableArea]: true,
              [largeSelectedArea]: this.props.selected,
            })}
            ref={measureRef}
            id={`${this.props.idPrefix}-js-code`}
          >
            {functionStart}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <CodeEditor
              value={jsCodeEvent.getInlineCode()}
              onChange={this.onChange}
              width={contentRect.bounds.width - 5}
              height={this._getCodeEditorHeight()}
              onEditorMounted={() => {
                this.props.onUpdate();
              }}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
            />
            {functionEnd}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Button onClick={this.toggleExpanded} fullWidth size="small">
              {expandIcon}
            </Button>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <InlinePopover
              open={this.state.editingObject}
              anchorEl={this.state.anchorEl}
              onRequestClose={this.cancelObjectEditing}
              onApply={this.endObjectEditing}
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <ObjectField
                project={this.props.project}
                scope={this.props.scope}
                globalObjectsContainer={this.props.globalObjectsContainer}
                objectsContainer={this.props.objectsContainer}
                value={parameterObjects}
// @ts-expect-error - TS7006 - Parameter 'text' implicitly has an 'any' type.
                onChange={text => {
                  jsCodeEvent.setParameterObjects(text);
                  this.props.onUpdate();
                }}
                isInline
                onRequestClose={this.cancelObjectEditing}
                onApply={this.endObjectEditing}
// @ts-expect-error - TS7006 - Parameter 'objectField' implicitly has an 'any' type.
                ref={objectField => (this._objectField = objectField)}
              />
            </InlinePopover>
          </div>
        )}
      </Measure>
    );
  }
}
