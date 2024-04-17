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
  React.forwardRef<SimpleTextFieldInterface, SimpleTextFieldProps>((props, ref) => {
    const inputRef = React.useRef<HTMLInputElement | null | undefined>(null);

    React.useEffect(
      () => {
        // If the value passed changed, update the input. Otherwise,
        // keep the input uncontrolled.

        if (inputRef.current) inputRef.current.value = props.value;
      },

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


    React.useImperativeHandle(ref, () => ({
      focus,
      forceSetSelection,
      getCaretPosition,
    }));

    return (

      <div
        className={classNames({
          [classes.simpleTextField]: true,

          [classes.disabled]: props.disabled,
        })}
      >
        <input

          id={props.id}

          disabled={props.disabled}

          ref={inputRef}

          type={props.type}

          defaultValue={props.value}
          onClick={stopPropagation}
          onDoubleClick={stopPropagation}
          onBlur={e => {

            props.onChange(e.currentTarget.value, props.additionalContext);
          }}
          onChange={

            props.directlyStoreValueChangesWhileEditing
              ? e: any => {

                  props.onChange(
                    e.currentTarget.value,

                    props.additionalContext
                  );
                }
{ }
              : undefined
          }
{ /* @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. */}
          onKeyUp={e => {
            if (shouldValidate(e)) {

              props.onChange(e.currentTarget.value, props.additionalContext);
            }
          }}
          style={props.italic ? styles.italic : undefined}
        />
      </div>
    );
  }),
);
