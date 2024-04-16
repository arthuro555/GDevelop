// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '.' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EditorMosaic/index.tsx', but '--jsx' is not set.
import { Editor } from '.';
// @ts-expect-error - TS6142 - Module '../Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../Grid';
// @ts-expect-error - TS6142 - Module '../FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../FlatButton';
// @ts-expect-error - TS6142 - Module '../Background' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Background.tsx', but '--jsx' is not set.
import Background from '../Background';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../CustomSvgIcons/ChevronArrowLeft'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ChevronArrowLeft.js' implicitly has an 'any' type.
import ChevronArrowLeft from '../CustomSvgIcons/ChevronArrowLeft';
import {
  getAvoidSoftKeyboardStyle,
  useSoftKeyboardBottomOffset,
} from '../MobileSoftKeyboard';

const styles = {
  avoidSoftKeyboardContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
} as const;

type Props = {
  initialEditorName: string,
  editors: {
    [key: string]: Editor
  },
  transitions: {
    [key: string]: {
      nextEditor?: string | (() => string),
      nextLabel?: React.ReactNode,
      nextIcon?: React.ReactNode,
      previousEditor?: string | (() => string)
    }
  },
  onEditorChanged: (editorName: string) => void
};

export type EditorNavigatorInterface = {
  openEditor: (editorName: string) => void
};

// Flow types might have to be changed/removed if upgrading Flow
// (see example at https://github.com/wgao19/flow-notes/blob/master/react/react-memo.md)

// @ts-expect-error - TS2345 - Argument of type '({ initialEditorName, editors, transitions, onEditorChanged, }: Props, ref: ForwardedRef<Props>) => Element' is not assignable to parameter of type 'ForwardRefRenderFunction<Props, EditorNavigatorInterface>'.
export default React.forwardRef<Props, EditorNavigatorInterface>((
  {
    initialEditorName,
    editors,
    transitions,
    onEditorChanged,
  }: Props,
  ref
) => {
  const [currentEditorName, setCurrentEditorName] = React.useState(
    initialEditorName
  );
  const softKeyboardBottomOffset = useSoftKeyboardBottomOffset();
// @ts-expect-error - TS2739 - Type '{ openEditor: (editorName: any) => void; }' is missing the following properties from type 'Props': initialEditorName, editors, transitions, onEditorChanged
  React.useImperativeHandle(ref, () => ({
// @ts-expect-error - TS7006 - Parameter 'editorName' implicitly has an 'any' type.
    openEditor: editorName => {
      setCurrentEditorName(editorName);
    },
  }));
  React.useEffect(
    () => {
      onEditorChanged(currentEditorName);
    },
    [currentEditorName, onEditorChanged]
  );

  const transition = transitions[currentEditorName];
  let buttonLineJustifyContent = 'space-between';
  if (transition) {
    if (transition.previousEditor && !transition.nextEditor) {
      buttonLineJustifyContent = 'flex-start';
    }
    if (!transition.previousEditor && transition.nextEditor) {
      buttonLineJustifyContent = 'flex-end';
    }
  }

  const editor = editors[currentEditorName];
  const renderedEditorWithKeyboardAvoidanceDiv = editor ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <div
      style={{
        ...styles.avoidSoftKeyboardContainer,
        ...(editor.noSoftKeyboardAvoidance
          ? null
          : getAvoidSoftKeyboardStyle(softKeyboardBottomOffset)),
      }}
    >
      {editor.renderEditor()}
    </div>
  ) : null;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column noMargin expand noOverflowParent>
      {transition && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Background maxWidth noExpand noFullHeight>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line justifyContent={buttonLineJustifyContent}>
              {transition.previousEditor && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Back</Trans>}
                  onClick={() => {
                    if (transition.previousEditor)
                      setCurrentEditorName(transition.previousEditor);
                  }}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  leftIcon={<ChevronArrowLeft />}
                />
              )}
              {transition.nextLabel && transition.nextEditor && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <FlatButton
                  label={transition.nextLabel}
                  onClick={() => {
                    if (transition.nextEditor)
                      setCurrentEditorName(transition.nextEditor);
                  }}
                  leftIcon={transition.nextIcon}
                />
              )}
            </Line>
          </Column>
        </Background>
      )}
      {renderedEditorWithKeyboardAvoidanceDiv}
    </Column>
  );
});
