import * as React from 'react';
import { shouldValidate } from './KeyboardShortcuts/InteractionKeys';
// @ts-expect-error - TS2307 - Cannot find module './SimpleTextField.module.css' or its corresponding type declarations.
import classes from './SimpleTextField.module.css';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'classnames'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/classnames/index.js' implicitly has an 'any' type.
import classNames from 'classnames';

type SimpleTextFieldProps = {
  disabled: boolean,
  type: 'number' | 'text',
  onChange: (newValue: string, context?: any) => void,
  value: string,
  id: string,
  additionalContext?: any,
  italic?: boolean,
  /**
   * Only to be used in the exceptional case where any change
   * must be immediately communicated to the parent.
   */
  directlyStoreValueChangesWhileEditing?: boolean
};

type FocusOptions = {
  selectAll?: boolean,
  caretPosition?: number
};

export type SimpleTextFieldInterface = {
  focus: (options?: FocusOptions | null | undefined) => void,
  forceSetSelection: (selectionStart: number, selectionEnd: number) => void,
  getCaretPosition: () => number
};

const styles = {
  italic: {
    fontStyle: 'italic',
  },
} as const;

const stopPropagation = e: any => e.stopPropagation();

/**
 * A text field, inspired from Material UI, but lightweight
 * and faster to render (2 DOM elements, uncontrolled, pure CSS styling).
 */
// @ts-expect-error - TS2558 - Expected 1 type arguments, but got 2.
export const SimpleTextField = React.memo<SimpleTextFieldProps, SimpleTextFieldInterface>(
  React.forwardRef<SimpleTextFieldProps, SimpleTextFieldInterface>((props, ref) => {
    const inputRef = React.useRef<HTMLInputElement | null | undefined>(null);

    React.useEffect(
      () => {
        // If the value passed changed, update the input. Otherwise,
        // keep the input uncontrolled.
// @ts-expect-error - TS2339 - Property 'value' does not exist on type 'SimpleTextFieldInterface'.
        if (inputRef.current) inputRef.current.value = props.value;
      },
// @ts-expect-error - TS2339 - Property 'value' does not exist on type 'SimpleTextFieldInterface'.
      [props.value]
    );

    const focus = React.useCallback((options?: FocusOptions | null) => {
      const input = inputRef.current;
      if (input) {
        input.focus();

        if (options && options.selectAll) {
          input.select();
        }

        if (options && Number.isInteger(options.caretPosition)) {
          const position = Number(options.caretPosition);
          input.setSelectionRange(position, position);
        }
      }
    }, []);

    const forceSetSelection = React.useCallback(
      (selectionStart: number, selectionEnd: number) => {
        if (inputRef.current) {
          inputRef.current.selectionStart = selectionStart;
          inputRef.current.selectionEnd = selectionEnd;
        }
      },
      []
    );

    const getCaretPosition = React.useCallback(() => {
      if (inputRef.current) return inputRef.current.selectionStart;
      return 0;
    }, []);

// @ts-expect-error - TS2739 - Type '{ focus: (options?: FocusOptions | null | undefined) => void; forceSetSelection: (selectionStart: number, selectionEnd: number) => void; getCaretPosition: () => number | null; }' is missing the following properties from type 'SimpleTextFieldProps': disabled, type, onChange, value, id
    React.useImperativeHandle(ref, () => ({
      focus,
      forceSetSelection,
      getCaretPosition,
    }));

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2746 - This JSX tag's 'children' prop expects a single child of type 'ReactNode', but multiple children were provided.
      <div
        className={classNames({
          [classes.simpleTextField]: true,
// @ts-expect-error - TS2339 - Property 'disabled' does not exist on type 'SimpleTextFieldInterface'.
          [classes.disabled]: props.disabled,
        })}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <input
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'SimpleTextFieldInterface'.
          id={props.id}
// @ts-expect-error - TS2339 - Property 'disabled' does not exist on type 'SimpleTextFieldInterface'.
          disabled={props.disabled}
// @ts-expect-error - TS2322 - Type 'MutableRefObject<HTMLInputElement | null | undefined>' is not assignable to type 'LegacyRef<HTMLInputElement> | undefined'.
          ref={inputRef}
// @ts-expect-error - TS2339 - Property 'type' does not exist on type 'SimpleTextFieldInterface'.
          type={props.type}
// @ts-expect-error - TS2339 - Property 'value' does not exist on type 'SimpleTextFieldInterface'.
          defaultValue={props.value}
          onClick={stopPropagation}
          onDoubleClick={stopPropagation}
          onBlur={e => {
// @ts-expect-error - TS2339 - Property 'onChange' does not exist on type 'SimpleTextFieldInterface'. | TS2339 - Property 'additionalContext' does not exist on type 'SimpleTextFieldInterface'.
            props.onChange(e.currentTarget.value, props.additionalContext);
          }}
          onChange={
// @ts-expect-error - TS2339 - Property 'directlyStoreValueChangesWhileEditing' does not exist on type 'SimpleTextFieldInterface'.
            props.directlyStoreValueChangesWhileEditing
              ? e: any => {
// @ts-expect-error - TS2339 - Property 'onChange' does not exist on type 'SimpleTextFieldInterface'.
                  props.onChange(
                    e.currentTarget.value,
// @ts-expect-error - TS2339 - Property 'additionalContext' does not exist on type 'SimpleTextFieldInterface'.
                    props.additionalContext
                  );
                }
{ /* @ts-expect-error - TS1005 - '}' expected. | TS1381 - Unexpected token. Did you mean `{'}'}` or `&rbrace;`? */}
              : undefined
          }
{ /* @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. */}
          onKeyUp={e => {
            if (shouldValidate(e)) {
// @ts-expect-error - TS2339 - Property 'onChange' does not exist on type 'SimpleTextFieldInterface'. | TS2339 - Property 'additionalContext' does not exist on type 'SimpleTextFieldInterface'.
              props.onChange(e.currentTarget.value, props.additionalContext);
            }
          }}
{ /* @ts-expect-error - TS2339 - Property 'italic' does not exist on type 'SimpleTextFieldInterface'. */}
          style={props.italic ? styles.italic : undefined}
{ /* @ts-expect-error - TS1382 - Unexpected token. Did you mean `{'>'}` or `&gt;`? */}
        />
      </div>
    );
  }),
);
