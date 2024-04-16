import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/DragAndDrop/DragAndDropContextProvider'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DragAndDropContextProvider.js' implicitly has an 'any' type.
import DragAndDropContextProvider from '../UI/DragAndDrop/DragAndDropContextProvider';
// @ts-expect-error - TS6142 - Module '../UI/EditorMosaic' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EditorMosaic/index.tsx', but '--jsx' is not set.
import EditorMosaic from '../UI/EditorMosaic';
// @ts-expect-error - TS6142 - Module './FixedHeightFlexContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/FixedHeightFlexContainer.tsx', but '--jsx' is not set.
import FixedHeightFlexContainer from './FixedHeightFlexContainer';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Column } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/EditorMosaic/EditorNavigator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EditorMosaic/EditorNavigator.tsx', but '--jsx' is not set.
import EditorNavigator from '../UI/EditorMosaic/EditorNavigator';

type OpenEditorFunction = (
  editorName: string,
  position: 'start' | 'end',
  slipPercentage: number,
  direction: 'column' | 'row',
) => void;

type Props = {
  renderButtons: (
    arg1: {
      openEditor: OpenEditorFunction
    },
  ) => React.ReactElement,
  renderEditorMosaic: (
    arg1: {
      // $FlowFixMe
      editorRef: {
        current: EditorMosaic | EditorNavigator | null
      }
    },
  ) => React.ReactElement
};

export default ({
  renderButtons,
  renderEditorMosaic,
}: Props) => {
  const editorRef = React.useRef((null as EditorMosaic | null | undefined | EditorNavigator | null | undefined));
  const openEditor = (
    editorName: string,
    position: 'start' | 'end',
    slipPercentage: number,
    direction: 'column' | 'row'
  ) => {
    if (editorRef.current)
      editorRef.current.toggleEditor(
        editorName,
        position,
        slipPercentage,
        direction
      );
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <FixedHeightFlexContainer height={400}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column expand>
          {renderButtons({ openEditor })}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line expand>{renderEditorMosaic({ editorRef })}</Line>
        </Column>
      </FixedHeightFlexContainer>
    </DragAndDropContextProvider>
  );
};
