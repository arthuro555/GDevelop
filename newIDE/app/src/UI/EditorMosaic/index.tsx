// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import {I18n} from '@lingui/react';
import * as React from 'react';
import {
  MosaicWindow as RMMosaicWindow,
  MosaicWithoutDragDropContext,
  getLeaves,
} from 'react-mosaic-component';
// @ts-expect-error - TS6142 - Module './CloseButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EditorMosaic/CloseButton.tsx', but '--jsx' is not set.
import CloseButton from './CloseButton';
import { MessageDescriptor } from '../../Utils/i18n/MessageDescriptor.flow';
import { useDebounce } from '../../Utils/UseDebounce';

// EditorMosaic default styling:
import 'react-mosaic-component/react-mosaic-component.css';
import './style.css';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'classnames'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/classnames/index.js' implicitly has an 'any' type.
import classNames from 'classnames';

export type Editor = {
  type: 'primary' | 'secondary',
  renderEditor: () => React.ReactElement,
  noTitleBar?: boolean,
  noSoftKeyboardAvoidance?: boolean,
  title?: MessageDescriptor,
  toolbarControls?: Array<React.ReactNode>
};

export type EditorMosaicNode = {
  direction: 'row' | 'column',
  splitPercentage: number,
  first: EditorMosaicNode | null | undefined,
  second: EditorMosaicNode | null | undefined
} | string;

export const mosaicContainsNode = (mosaic: EditorMosaicNode | null | undefined, node: string): boolean => {
  return (
    !!mosaic &&
    (mosaic === node ||
      // $FlowFixMe
// @ts-expect-error - TS2339 - Property 'first' does not exist on type 'EditorMosaicNode'. | TS2339 - Property 'first' does not exist on type 'EditorMosaicNode'.
      ((!!mosaic.first && mosaicContainsNode(mosaic.first, node)) ||
        // $FlowFixMe
// @ts-expect-error - TS2339 - Property 'second' does not exist on type 'EditorMosaicNode'. | TS2339 - Property 'second' does not exist on type 'EditorMosaicNode'.
        (!!mosaic.second && mosaicContainsNode(mosaic.second, node))))
  );
};

// Add a node (an editor) in the mosaic.
const addNode = (
  currentNode: EditorMosaicNode | null | undefined,
  newNode: EditorMosaicNode | string,
  position: 'start' | 'end',
  splitPercentage: number,
  direction: 'row' | 'column',
): EditorMosaicNode => {
  if (!currentNode) return newNode;

  // Add the new node inside the current node...
  if (typeof currentNode !== 'string') {
    if (
      position === 'end' &&
      currentNode.second &&
      typeof currentNode.second !== 'string'
    ) {
      return {
        ...currentNode,
        second: addNode(
          currentNode.second,
          newNode,
          position,
          splitPercentage,
          direction
        ),
      };
    } else if (
      position === 'start' &&
      currentNode.first &&
      typeof currentNode.first !== 'string'
    ) {
      return {
        ...currentNode,
        first: addNode(
          currentNode.first,
          newNode,
          position,
          splitPercentage,
          direction
        ),
      };
    }
  }

  // Or add the node here.
  return {
    direction:
      direction === 'row'
        ? // Direction of split is the opposite of what is requested for the editor
          'column'
        : 'row',
    first: position === 'end' ? currentNode : newNode,
    second: position === 'end' ? newNode : currentNode,
    splitPercentage,
  };
};

// Replace a node (an editor) by another.
const replaceNode = (
  currentNode?: EditorMosaicNode | null,
  oldNode?: EditorMosaicNode | null,
  newNode?: EditorMosaicNode | null,
): EditorMosaicNode | null | undefined => {
  if (!currentNode) {
    return currentNode;
  } else if (typeof currentNode === 'string') {
    if (currentNode === oldNode) return newNode;

    return currentNode;
  } else {
    if (currentNode === oldNode) return newNode;

    return {
      ...currentNode,
      first: replaceNode(currentNode.first, oldNode, newNode),
      second: replaceNode(currentNode.second, oldNode, newNode),
    };
  }
};

// Remove the specified node (editor).
const removeNode = (currentNode?: EditorMosaicNode | null, oldNode?: EditorMosaicNode | null): EditorMosaicNode | null | undefined => {
  if (!currentNode) {
    return currentNode;
  } else if (typeof currentNode === 'string') {
    if (currentNode === oldNode) return null;

    return currentNode;
  } else {
    if (currentNode === oldNode) return null;

    const first = removeNode(currentNode.first, oldNode);
    const second = removeNode(currentNode.second, oldNode);

    if (first && second) {
      return {
        ...currentNode,
        first,
        second,
      };
    } else {
      if (!first) return second;
      else return first;
    }
  }
};

const resizeNode = (
  currentNode: EditorMosaicNode | null | undefined,
  resizedNode: EditorMosaicNode | null | undefined,
  splitPercentage: number,
): EditorMosaicNode | null | undefined => {
  if (!currentNode) {
    return currentNode;
  }
  if (typeof currentNode === 'string') {
    return currentNode;
  }
  if (currentNode.first === resizedNode) {
    return {
      ...currentNode,
      splitPercentage: splitPercentage,
    };
  }
  if (currentNode.second === resizedNode) {
    return {
      ...currentNode,
      splitPercentage: 100 - splitPercentage,
    };
  }
  return {
    ...currentNode,
    first: resizeNode(currentNode.first, resizedNode, splitPercentage),
    second: resizeNode(currentNode.second, resizedNode, splitPercentage),
  };
};

const getNodeSize = (
  currentNode?: EditorMosaicNode | null,
  resizedNode?: EditorMosaicNode | null,
): number => {
  if (!currentNode) {
    return 0;
  }
  if (typeof currentNode === 'string') {
    return 0;
  }
  if (currentNode.first === resizedNode) {
    return currentNode.splitPercentage;
  }
  if (currentNode.second === resizedNode) {
    return 100 - currentNode.splitPercentage;
  }
  return (
    getNodeSize(currentNode.first, resizedNode) ||
    getNodeSize(currentNode.second, resizedNode)
  );
};

// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
const defaultToolbarControls = [<CloseButton key="close" />];

const renderMosaicWindowPreview = props: any => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <div className="mosaic-preview">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <div className="mosaic-window-toolbar">
      <div className="mosaic-window-title">{props.title}</div>
    </div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <div className="mosaic-window-body" />
  </div>
);

/**
 * A window that can be used in a EditorMosaic, with a close button
 * by default in the toolbarControls and a preview when the window is
 * dragged.
 */
const MosaicWindow = (props: any) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <RMMosaicWindow
    {...props}
    toolbarControls={props.toolbarControls || defaultToolbarControls}
    renderPreview={renderMosaicWindowPreview}
  />
);

export type EditorMosaicInterface = {
  getOpenedEditorNames: () => Array<string>,
  toggleEditor: (
    editorName: string,
    position: 'start' | 'end',
    splitPercentage: number,
    direction: 'row' | 'column',
  ) => boolean,
  collapseEditor: (editorName: string) => boolean,
  uncollapseEditor: (editorName: string, defaultSplitPercentage: number) => boolean
};

type Props = {
  initialNodes: EditorMosaicNode,
  editors: {
    [key: string]: Editor
  },
  limitToOneSecondaryEditor?: boolean,
  onOpenedEditorsChanged?: () => void,
  onPersistNodes?: (arg1: EditorMosaicNode) => void
};

/**
 * @class EditorMosaic
 *
 * Can be used to create a mosaic of resizable editors.
 * Must be used inside a component wrapped in a DragDropContext.
 */
const EditorMosaic = React.forwardRef<Props, EditorMosaicInterface>((
  {
// @ts-expect-error - TS2339 - Property 'initialNodes' does not exist on type 'EditorMosaicInterface'.
    initialNodes,
// @ts-expect-error - TS2339 - Property 'editors' does not exist on type 'EditorMosaicInterface'.
    editors,
// @ts-expect-error - TS2339 - Property 'limitToOneSecondaryEditor' does not exist on type 'EditorMosaicInterface'.
    limitToOneSecondaryEditor,
// @ts-expect-error - TS2339 - Property 'onOpenedEditorsChanged' does not exist on type 'EditorMosaicInterface'.
    onOpenedEditorsChanged,
// @ts-expect-error - TS2339 - Property 'onPersistNodes' does not exist on type 'EditorMosaicInterface'.
    onPersistNodes,
  },
  ref
) => {
  const [mosaicNode, setMosaicNode] = React.useState<EditorMosaicNode | null | undefined>(initialNodes);
  const collapsedEditorSize = React.useRef<Map<string, number>>(new Map());

  const openEditor = React.useCallback(
    (
      editorName: string,
      position: 'start' | 'end',
      splitPercentage: number,
      direction: 'row' | 'column'
    ) => {
      const editor = editors[editorName];
      if (!editor) return false;

// @ts-expect-error - TS2345 - Argument of type 'EditorMosaicNode | null | undefined' is not assignable to parameter of type 'MosaicNode<MosaicKey> | null'.
      const openedEditorNames = getLeaves(mosaicNode);
      if (openedEditorNames.indexOf(editorName) !== -1) {
        // Editor is already opened.
        return false;
      }

      if (limitToOneSecondaryEditor && editor.type === 'secondary') {
        // Replace the existing secondary editor, if any.
        const secondaryEditorName = openedEditorNames.find(
          editorName => editors[editorName].type === 'secondary'
        );
        if (secondaryEditorName) {
          setMosaicNode(
// @ts-expect-error - TS2345 - Argument of type 'MosaicKey' is not assignable to parameter of type 'EditorMosaicNode | null | undefined'.
            replaceNode(mosaicNode, secondaryEditorName, editorName)
          );

          return true;
        }
      }

      // Open a new editor at the indicated position.
      setMosaicNode(
        addNode(mosaicNode, editorName, position, splitPercentage, direction)
      );

      return true;
    },
    [mosaicNode, editors, limitToOneSecondaryEditor]
  );

// @ts-expect-error - TS2739 - Type '{ getOpenedEditorNames: () => string[]; toggleEditor: (editorName: string, position: "end" | "start", splitPercentage: number, direction: "column" | "row") => boolean; collapseEditor: (editorName: string) => boolean; uncollapseEditor: (editorName: string, defaultSplitPercentage: number) => boolean; }' is missing the following properties from type 'Props': initialNodes, editors
  React.useImperativeHandle(ref, () => ({
    getOpenedEditorNames: (): Array<string> => {
// @ts-expect-error - TS2322 - Type 'MosaicKey[]' is not assignable to type 'string[]'. | TS2345 - Argument of type 'EditorMosaicNode | null | undefined' is not assignable to parameter of type 'MosaicNode<MosaicKey> | null'.
      return getLeaves(mosaicNode);
    },
    toggleEditor: (
      editorName: string,
      position: 'start' | 'end',
      splitPercentage: number,
      direction: 'row' | 'column'
    ) => {
      const editor = editors[editorName];
      if (!editor) return false;

// @ts-expect-error - TS2345 - Argument of type 'EditorMosaicNode | null | undefined' is not assignable to parameter of type 'MosaicNode<MosaicKey> | null'.
      const openedEditorNames = getLeaves(mosaicNode);
      if (openedEditorNames.indexOf(editorName) !== -1) {
        // The editor is already opened: close it.
        setMosaicNode(removeNode(mosaicNode, editorName));

        return false;
      }

      return openEditor(editorName, position, splitPercentage, direction);
    },
    collapseEditor: (editorName: string) => {
      const editor = editors[editorName];
      if (!editor) return false;

      const nodeSize = getNodeSize(mosaicNode, editorName);
      if (nodeSize > 0) {
        collapsedEditorSize.current.set(
          editorName,
          getNodeSize(mosaicNode, editorName)
        );
      }
      setMosaicNode(resizeNode(mosaicNode, editorName, 0));
      return true;
    },
    uncollapseEditor: (
      editorName: string,
      defaultSplitPercentage: number
    ) => {
      const editor = editors[editorName];
      if (!editor) return false;

      if (getNodeSize(mosaicNode, editorName) !== 0) {
        return false;
      }

      setMosaicNode(
        resizeNode(
          mosaicNode,
          editorName,
          collapsedEditorSize.current.get(editorName) ||
            defaultSplitPercentage
        )
      );
      return true;
    },
  }));

  const debouncedPersistNodes = useDebounce(() => {
    if (onPersistNodes && mosaicNode) {
      onPersistNodes(mosaicNode);
    }
  }, 2000);

  React.useEffect(
    () => {
      if (onOpenedEditorsChanged) {
        onOpenedEditorsChanged();
      }

      debouncedPersistNodes();
    },
    [mosaicNode, onOpenedEditorsChanged, debouncedPersistNodes]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS2769 - No overload matches this call. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <MosaicWithoutDragDropContext
          className={classNames({
            'mosaic-gd-theme': true,
            'mosaic-blueprint-theme': true,
            // Move the entire mosaic up when the soft keyboard is open:
            'avoid-soft-keyboard': true,
          })}
          renderTile={(editorName: string, path: string) => {
            const editor = editors[editorName];
            if (!editor) {
              console.error(
                'Trying to render un unknown editor: ' + editorName
              );
              return null;
            }

            if (editor.noTitleBar) {
              return editor.renderEditor();
            }

            return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <MosaicWindow
                path={path}
                title={i18n._(editor.title)}
                toolbarControls={editor.toolbarControls}
              >
                {editor.renderEditor()}
              </MosaicWindow>
            );
          }}
          value={mosaicNode}
          onChange={setMosaicNode}
          onRelease={setMosaicNode}
        />
      )}
    </I18n>
  );
});

export default EditorMosaic;
