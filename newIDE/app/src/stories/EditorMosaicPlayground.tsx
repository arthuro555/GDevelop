import * as React from 'react';

import DragAndDropContextProvider from '../UI/DragAndDrop/DragAndDropContextProvider';

import EditorMosaic from '../UI/EditorMosaic';

import FixedHeightFlexContainer from './FixedHeightFlexContainer';

import { Line, Column } from '../UI/Grid';

import EditorNavigator from '../UI/EditorMosaic/EditorNavigator';

type OpenEditorFunction = (
  editorName: string,
  position: 'start' | 'end',
  slipPercentage: number,
  direction: 'column' | 'row'
) => void;

type Props = {
  renderButtons: (arg1: {
    openEditor: OpenEditorFunction;
  }) => React.ReactElement;
  renderEditorMosaic: (arg1: {
    // $FlowFixMe
    editorRef: {
      current: EditorMosaic | EditorNavigator | null;
    };
  }) => React.ReactElement;
};

export default ({ renderButtons, renderEditorMosaic }: Props) => {
  const editorRef = React.useRef(
    null as EditorMosaic | null | undefined | EditorNavigator | null | undefined
  );
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
    <DragAndDropContextProvider>
      <FixedHeightFlexContainer height={400}>
        <Column expand>
          {renderButtons({ openEditor })}
          <Line expand>{renderEditorMosaic({ editorRef })}</Line>
        </Column>
      </FixedHeightFlexContainer>
    </DragAndDropContextProvider>
  );
};
