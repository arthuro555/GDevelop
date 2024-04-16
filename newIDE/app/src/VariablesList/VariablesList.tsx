import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'react-measure'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/react-measure/dist/index.cjs.js' implicitly has an 'any' type.
import Measure from 'react-measure';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t, Trans } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
import { ClickAwayListener } from '@material-ui/core';

// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Add'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Add.js' implicitly has an 'any' type.
import Add from '../UI/CustomSvgIcons/Add';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Edit'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Edit.js' implicitly has an 'any' type.
import Edit from '../UI/CustomSvgIcons/Edit';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Undo'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Undo.js' implicitly has an 'any' type.
import Undo from '../UI/CustomSvgIcons/Undo';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/ChevronArrowRight'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ChevronArrowRight.js' implicitly has an 'any' type.
import ChevronRight from '../UI/CustomSvgIcons/ChevronArrowRight';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/ChevronArrowBottom'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ChevronArrowBottom.js' implicitly has an 'any' type.
import ChevronBottom from '../UI/CustomSvgIcons/ChevronArrowBottom';
import ButtonBase from '@material-ui/core/ButtonBase';

// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line, Spacer } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../UI/IconButton';
// @ts-expect-error - TS6142 - Module '../UI/DragHandle' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragHandle.tsx', but '--jsx' is not set.
import { DragHandleIcon } from '../UI/DragHandle';
// @ts-expect-error - TS6142 - Module '../UI/DragAndDrop/DragSourceAndDropTarget' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DragSourceAndDropTarget.tsx', but '--jsx' is not set.
import { makeDragSourceAndDropTarget } from '../UI/DragAndDrop/DragSourceAndDropTarget';
// @ts-expect-error - TS6142 - Module '../UI/SortableVirtualizedItemList/DropIndicator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SortableVirtualizedItemList/DropIndicator.tsx', but '--jsx' is not set.
import DropIndicator from '../UI/SortableVirtualizedItemList/DropIndicator';
// @ts-expect-error - TS6142 - Module '../UI/EmptyPlaceholder' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyPlaceholder.tsx', but '--jsx' is not set.
import { EmptyPlaceholder } from '../UI/EmptyPlaceholder';
// @ts-expect-error - TS6142 - Module '../UI/ScrollView' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ScrollView.tsx', but '--jsx' is not set.
import ScrollView from '../UI/ScrollView';
import GDevelopThemeContext from '../UI/Theme/GDevelopThemeContext';
import { GDevelopTheme } from '../UI/Theme';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ResponsiveLineStackLayout } from '../UI/Layout';
import KeyboardShortcuts from '../UI/KeyboardShortcuts';

import useForceUpdate from '../Utils/UseForceUpdate';
import { mapFor } from '../Utils/MapFor';
import newNameGenerator from '../Utils/NewNameGenerator';
import Clipboard, { SafeExtractor } from '../Utils/Clipboard';
import {
  serializeToJSObject,
  unserializeFromJSObject,
} from '../Utils/Serializer';
import {
  undo,
  redo,
  canUndo,
  canRedo,
  getHistoryInitialState,
  saveToHistory,
} from '../Utils/History';
import {
  hasVariablesContainerSubChildren,
  insertInVariableChildren,
  insertInVariableChildrenArray,
  insertInVariablesContainer,
  isCollectionVariable,
} from '../Utils/VariablesUtils';
import {
  generateListOfNodesMatchingSearchInVariablesContainer,
  getDirectParentNodeId,
  getDirectParentVariable,
  getMovementTypeWithinVariablesContainer,
  getOldestAncestryVariable,
  getVariableContextFromNodeId,
  inheritedPrefix,
  isAnAncestryOf,
  separator,
  updateListOfNodesFollowingChangeName,
} from './VariableToTreeNodeHandling';

// @ts-expect-error - TS6142 - Module './VariableTypeSelector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/VariablesList/VariableTypeSelector.tsx', but '--jsx' is not set.
import VariableTypeSelector from './VariableTypeSelector';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './ClipboardKind'. '/home/arthuro555/code/GDevelop/newIDE/app/src/VariablesList/ClipboardKind.js' implicitly has an 'any' type.
import { CLIPBOARD_KIND } from './ClipboardKind';
// @ts-expect-error - TS6142 - Module './VariablesListToolbar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/VariablesList/VariablesListToolbar.tsx', but '--jsx' is not set.
import VariablesListToolbar from './VariablesListToolbar';
import { normalizeString } from '../Utils/Search';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/SwitchHorizontal'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/SwitchHorizontal.js' implicitly has an 'any' type.
import SwitchHorizontal from '../UI/CustomSvgIcons/SwitchHorizontal';
import useRefocusField from './useRefocusField';
import {
  SimpleTextField,
  SimpleTextFieldInterface,
// @ts-expect-error - TS6142 - Module '../UI/SimpleTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SimpleTextField.tsx', but '--jsx' is not set.
} from '../UI/SimpleTextField';
import { useRefWithInit } from '../Utils/UseRefInitHook';
// @ts-expect-error - TS6142 - Module '../UI/ErrorBoundary' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ErrorBoundary.tsx', but '--jsx' is not set.
import ErrorBoundary from '../UI/ErrorBoundary';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module './MultilineVariableEditorDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/VariablesList/MultilineVariableEditorDialog.tsx', but '--jsx' is not set.
import { MultilineVariableEditorDialog } from './MultilineVariableEditorDialog';
// @ts-expect-error - TS6142 - Module '../UI/MarkdownText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/MarkdownText.tsx', but '--jsx' is not set.
import { MarkdownText } from '../UI/MarkdownText';
// @ts-expect-error - TS6142 - Module '../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../UI/Paper';
const gd: libGDevelop = global.gd;

const DragSourceAndDropTarget = makeDragSourceAndDropTarget('variable-editor');

const stopEventPropagation = (event: React.PointerEvent<HTMLInputElement>) =>
  event.stopPropagation();

const styles = { inlineIcon: { padding: 0 }, handlePlaceholder: { width: 24 } } as const;

export type HistoryHandler = {
  saveToHistory: () => void,
  undo: () => void,
  redo: () => void,
  canUndo: () => boolean,
  canRedo: () => boolean
};

type Props = {
  variablesContainer: gdVariablesContainer,
  inheritedVariablesContainer?: gdVariablesContainer,
  /** Callback executed at mount to compute suggestions. */
  onComputeAllVariableNames?: () => Array<string>,
  /** To specify if history should be handled by parent. */
  historyHandler?: HistoryHandler,
  emptyPlaceholderTitle?: React.ReactNode,
  emptyPlaceholderDescription?: React.ReactNode,
  helpPagePath?: string | null | undefined,
  /** If set to true, it will commit changes to variables on each input change. It can be expensive, but useful when VariablesList can be unmounted at any time. */
  directlyStoreValueChangesWhileEditing?: boolean,
  /** If set to small, will collapse variable row by default. */
  size?: 'small',
  onVariablesUpdated?: () => void,
  toolbarIconStyle?: any
};

const variableRowStyles = {
  chevron: { width: 15, alignSelf: 'stretch' },
} as const;

type VariableRowProps = {
  // Context:
  depth: number,
  isNarrow: boolean,
  containerWidth: number | null | undefined,
  shouldHideExpandIcons: boolean,
  isExpanded: boolean,
  onExpand: (shouldExpand: boolean, nodeId: string) => void,
  draggedNodeId: {
    current: string | null | undefined
  },
  nodeId: string,
  isInherited: boolean,
  canDrop: (arg1: string) => boolean,
  dropNode: (arg1: string) => void,
  isSelected: boolean,
  onSelect: (shouldMultiselect: boolean, nodeId: string) => void,
  topLevelVariableNameInputRefs: {
    current: {
      [key: number]: SimpleTextFieldInterface
    }
  },
  topLevelVariableValueInputRefs: {
    current: {
      [key: number]: SimpleTextFieldInterface
    }
  },
  parentType: Variable_Type | null,
  directlyStoreValueChangesWhileEditing: boolean,
  // Styling
  gdevelopTheme: GDevelopTheme,
  rowRightSideStyle: any,
  // Variable information:
  onChangeName: (arg1: string, arg2: string) => void,
  overwritesInheritedVariable: boolean | undefined,
  name: string,
  index: number,
  isTopLevel: boolean,
  type: Variable_Type,
  onChangeType: (arg1: string, nodeId: string) => void,
  valueAsString: string | null,
  valueAsBool: boolean | null,
  onChangeValue: (arg1: string, nodeId: string) => void,
  isCollection: boolean,
  variablePointer: number,
  onAddChild: (arg1: string) => void,
  editInheritedVariable: (arg1: string) => void,
  deleteNode: (arg1: string) => void
};

const VariableRow = React.memo<VariableRowProps>(({
  depth,
  isNarrow,
  containerWidth,
  shouldHideExpandIcons,
  isExpanded,
  onExpand,
  draggedNodeId,
  nodeId,
  isInherited,
  canDrop,
  dropNode,
  isSelected,
  onSelect,
  gdevelopTheme,
  topLevelVariableNameInputRefs,
  topLevelVariableValueInputRefs,
  parentType,
  onChangeName,
  overwritesInheritedVariable,
  name,
  index,
  rowRightSideStyle,
  isTopLevel,
  type,
  onChangeType,
  valueAsString,
  valueAsBool,
  onChangeValue,
  isCollection,
  variablePointer,
  onAddChild,
  editInheritedVariable,
  deleteNode,
  directlyStoreValueChangesWhileEditing,
}: VariableRowProps) => {
  const shouldWrap =
    isNarrow ||
    (!containerWidth
      ? false
      : containerWidth <= 750
      ? depth >= 5
      : containerWidth <= 850
      ? depth >= 6
      : containerWidth <= 950
      ? depth >= 7
      : depth >= 8);
  const [editInMultilineEditor, setEditInMultilineEditor] = React.useState(
    false
  );
  const forceUpdate = useForceUpdate();
  const hasLineBreaks = valueAsString
    ? valueAsString.indexOf('\n') !== -1
    : false;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <DragSourceAndDropTarget
      beginDrag={() => {
        draggedNodeId.current = nodeId;
        return {};
      }}
      canDrag={() => !isInherited}
      canDrop={() => canDrop(nodeId)}
      drop={() => {
        dropNode(nodeId);
      }}
    >
{ /* @ts-expect-error - TS7031 - Binding element 'connectDragSource' implicitly has an 'any' type. | TS7031 - Binding element 'connectDropTarget' implicitly has an 'any' type. | TS7031 - Binding element 'isOver' implicitly has an 'any' type. | TS7031 - Binding element 'canDrop' implicitly has an 'any' type. */}
      {({ connectDragSource, connectDropTarget, isOver, canDrop }) =>
        connectDropTarget(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <div
            style={{
              marginLeft: (isNarrow ? 16 : 32) * depth,
              backgroundColor: isSelected
                ? gdevelopTheme.listItem.selectedBackgroundColor
                : gdevelopTheme.list.itemsBackgroundColor,
              marginBottom: 1,
            }}
            aria-selected={isSelected}
            aria-expanded={isExpanded}
            onPointerUp={event => {
              const shouldMultiSelect = event.metaKey || event.ctrlKey;
              onSelect(shouldMultiSelect, nodeId);
            }}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            {isOver && <DropIndicator canDrop={canDrop} />}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: isNarrow ? '4px 4px 4px 0px' : '6px 30px 6px 6px',
              }}
            >
              {shouldHideExpandIcons ? null : isCollection ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <ButtonBase
                  onClick={() => onExpand(!isExpanded, nodeId)}
                  focusRipple
                  style={variableRowStyles.chevron}
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  {isExpanded ? <ChevronBottom /> : <ChevronRight />}
                </ButtonBase>
              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <div style={variableRowStyles.chevron} />
              )}

              {isInherited ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <span style={styles.handlePlaceholder} />
              ) : (
                connectDragSource(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <span>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <DragHandleIcon
                      color={
                        isSelected
                          ? gdevelopTheme.listItem.selectedTextColor
                          : '#AAA'
                      }
                    />
                  </span>
                )
              )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <ResponsiveLineStackLayout
                expand
                noMargin
                forceMobileLayout={shouldWrap}
              >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Line alignItems="center" noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  {shouldWrap ? null : <Spacer />}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <SimpleTextField
                    type="text"
// @ts-expect-error - TS7006 - Parameter 'element' implicitly has an 'any' type.
                    ref={element => {
                      if (depth === 0 && element) {
                        topLevelVariableNameInputRefs.current[
                          variablePointer
                        ] = element;
                      }
                    }}
                    directlyStoreValueChangesWhileEditing={
                      directlyStoreValueChangesWhileEditing
                    }
                    disabled={isInherited || parentType === gd.Variable.Array}
                    onChange={onChangeName}
                    additionalContext={JSON.stringify({ nodeId, depth })}
                    italic={!!overwritesInheritedVariable}
                    value={name}
                    id={`variable-${index}-name`}
                  />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Spacer />
                </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <div style={shouldWrap ? undefined : rowRightSideStyle}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Line noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <VariableTypeSelector
                        variableType={type}
                        onChange={onChangeType}
                        nodeId={nodeId}
                        isHighlighted={isSelected}
                        readOnlyWithIcon={
                          isInherited || overwritesInheritedVariable
                        }
                        id={`variable-${index}-type`}
                      />
                    </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Column expand>
                      {type === gd.Variable.Boolean ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <Line noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <span
                            style={
                              isSelected
                                ? {
                                    color:
                                      gdevelopTheme.listItem
                                        .selectedTextColor,
                                  }
                                : undefined
                            }
                          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                            <Text
                              displayInlineAsSpan
                              noMargin
                              color="inherit"
                            >
                              {valueAsBool ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                <Trans>True</Trans>
                              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                <Trans>False</Trans>
                              )}
                            </Text>
                          </span>
                          {isInherited && !isTopLevel ? null : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                            <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                              <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                              <IconButton
                                size="small"
                                style={styles.inlineIcon}
                                onClick={() => {
                                  onChangeValue(
                                    !valueAsBool ? 'true' : 'false',
                                    nodeId
                                  );
                                  forceUpdate();
                                }}
                                tooltip={
                                  !valueAsBool
                                    ? t`Set to true`
                                    : t`Set to false`
                                }
                              >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                <SwitchHorizontal
                                  htmlColor={
                                    isSelected
                                      ? gdevelopTheme.listItem
                                          .selectedTextColor
                                      : undefined
                                  }
                                />
                              </IconButton>
                            </>
                          )}
                        </Line>
                      ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <SimpleTextField
// @ts-expect-error - TS7006 - Parameter 'element' implicitly has an 'any' type.
                          ref={element => {
                            if (depth === 0 && element) {
                              topLevelVariableValueInputRefs.current[
                                variablePointer
                              ] = element;
                            }
                          }}
                          type={
                            type === gd.Variable.Number ? 'number' : 'text'
                          }
                          directlyStoreValueChangesWhileEditing={
                            directlyStoreValueChangesWhileEditing
                          }
                          key="value"
                          disabled={
                            isCollection ||
                            (isInherited && !isTopLevel) ||
                            hasLineBreaks
                          }
                          onChange={onChangeValue}
                          value={
                            // If line breaks are present, disable the field (as it's
                            // single line only) and make line breaks visible.
                            hasLineBreaks
                              ? (valueAsString || '').replace(/\n/g, '↵')
                              : valueAsString || ''
                          }
                          additionalContext={nodeId}
                          id={`variable-${index}-text-value`}
                        />
                      )}
                    </Column>
                    {// Only show the large edit button for string variables,
                    // and not for those who are in an inherited structure or array.
                    type === gd.Variable.String &&
                    !(isInherited && !isTopLevel) ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <IconButton
                        size="small"
                        style={styles.inlineIcon}
                        tooltip={t`Open in a larger editor`}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
                        onClick={event => {
                          stopEventPropagation(event);
                          setEditInMultilineEditor(true);
                        }}
                      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Edit
                          htmlColor={
                            isSelected
                              ? gdevelopTheme.listItem.selectedTextColor
                              : undefined
                          }
                        />
                      </IconButton>
                    ) : null}
                    {isCollection && !isInherited ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <IconButton
                        size="small"
                        style={styles.inlineIcon}
                        tooltip={t`Add child`}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
                        onClick={event => {
                          stopEventPropagation(event);
                          onAddChild(nodeId);
                        }}
                      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Add
                          htmlColor={
                            isSelected
                              ? gdevelopTheme.listItem.selectedTextColor
                              : undefined
                          }
                        />
                      </IconButton>
                    ) : null}
                    {isCollection && isInherited && isTopLevel ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <IconButton
                        size="small"
                        tooltip={t`Edit`}
                        style={styles.inlineIcon}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
                        onClick={event => {
                          stopEventPropagation(event);
                          editInheritedVariable(nodeId);
                        }}
                      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Edit
                          htmlColor={
                            isSelected
                              ? gdevelopTheme.listItem.selectedTextColor
                              : undefined
                          }
                        />
                      </IconButton>
                    ) : null}
                    {overwritesInheritedVariable && isTopLevel ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <IconButton
                        size="small"
                        tooltip={t`Reset`}
                        style={styles.inlineIcon}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
                        onClick={event => {
                          stopEventPropagation(event);
                          deleteNode(nodeId);
                        }}
                      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Undo
                          htmlColor={
                            isSelected
                              ? gdevelopTheme.listItem.selectedTextColor
                              : undefined
                          }
                        />
                      </IconButton>
                    ) : null}
                  </Line>
                </div>
              </ResponsiveLineStackLayout>
            </div>
            {editInMultilineEditor && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <MultilineVariableEditorDialog
                initialValue={valueAsString || ''}
                onClose={(newValue: string) => {
                  onChangeValue(newValue, nodeId);
                  setEditInMultilineEditor(false);
                  forceUpdate();
                }}
              />
            )}
          </div>
        )
      }
    </DragSourceAndDropTarget>
  );
});

const VariablesList = (props: Props) => {
  const historyRef = useRefWithInit(() =>
    getHistoryInitialState(props.variablesContainer, {
      historyMaxSize: 50,
    })
  );

  const [searchText, setSearchText] = React.useState<string>('');
  const { onComputeAllVariableNames } = props;
  const allVariablesNames = React.useMemo<Array<string> | null | undefined>(
    () => (onComputeAllVariableNames ? onComputeAllVariableNames() : null),
    [onComputeAllVariableNames],
  );
  const [selectedNodes, setSelectedNodes] = React.useState<Array<string>>([]);
  const [searchMatchingNodes, setSearchMatchingNodes] = React.useState<Array<string>>([]);
  const [containerWidth, setContainerWidth] = React.useState<number | null | undefined>(null);
  const topLevelVariableNameInputRefs = React.useRef<{
    [key: number]: SimpleTextFieldInterface
  }>({});
  const topLevelVariableValueInputRefs = React.useRef<{
    [key: number]: SimpleTextFieldInterface
  }>({});
  const refocusNameField = useRefocusField(topLevelVariableNameInputRefs);
  const refocusValueField = useRefocusField(topLevelVariableValueInputRefs);
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const draggedNodeId = React.useRef<string | null | undefined>(null);
  const forceUpdate = useForceUpdate();

  const triggerSearch = React.useCallback(
    () => {
      let matchingInheritedNodes: Array<never> | Array<string> = [];
      const matchingNodes = generateListOfNodesMatchingSearchInVariablesContainer(
        props.variablesContainer,
        normalizeString(searchText)
      );
      if (props.inheritedVariablesContainer) {
        matchingInheritedNodes = generateListOfNodesMatchingSearchInVariablesContainer(
          props.inheritedVariablesContainer,
          normalizeString(searchText),
          inheritedPrefix
        );
      }
      setSearchMatchingNodes([...matchingNodes, ...matchingInheritedNodes]);
    },
    [props.inheritedVariablesContainer, props.variablesContainer, searchText]
  );

  React.useEffect(
    () => {
      if (!!searchText) {
        triggerSearch();
      } else {
        setSearchMatchingNodes([]);
      }
    },
    [searchText, triggerSearch]
  );

  const shouldHideExpandIcons =
    !hasVariablesContainerSubChildren(props.variablesContainer) &&
    (props.inheritedVariablesContainer
      ? !hasVariablesContainerSubChildren(props.inheritedVariablesContainer)
      : true);

  const rowRightSideStyle = React.useMemo(
    () => ({
      minWidth: containerWidth ? Math.round(0.6 * containerWidth) : 600,
      flexShrink: 0,
    }),
    [containerWidth]
  );
  const isNarrow = React.useMemo(
    () =>
      props.size === 'small' || (containerWidth ? containerWidth < 650 : false),
    [containerWidth, props.size]
  );

  const undefinedVariableNames = allVariablesNames
    ? allVariablesNames.filter(variableName => {
        return (
          !props.variablesContainer.has(variableName) &&
          (!props.inheritedVariablesContainer ||
            !props.inheritedVariablesContainer.has(variableName))
        );
      })
    : [];

  const { historyHandler, onVariablesUpdated, variablesContainer } = props;
  const _onChange = React.useCallback(
    () => {
      if (historyHandler) historyHandler.saveToHistory();
      else
        historyRef.current = saveToHistory(
          historyRef.current,
          variablesContainer
        );
      if (onVariablesUpdated) onVariablesUpdated();
    },
    [historyRef, historyHandler, onVariablesUpdated, variablesContainer]
  );

  const _undo = React.useCallback(
    () => {
      if (historyHandler) historyHandler.undo();
      else
        historyRef.current = undo(historyRef.current, props.variablesContainer);
      setSelectedNodes([]);
    },
    [historyRef, historyHandler, props.variablesContainer]
  );

  const _redo = React.useCallback(
    () => {
      if (historyHandler) historyHandler.redo();
      else
        historyRef.current = redo(historyRef.current, props.variablesContainer);
      setSelectedNodes([]);
    },
    [historyRef, historyHandler, props.variablesContainer]
  );

  const _canUndo = (): boolean => props.historyHandler
    ? props.historyHandler.canUndo()
    : canUndo(historyRef.current);

  const _canRedo = (): boolean => props.historyHandler
    ? props.historyHandler.canRedo()
    : canRedo(historyRef.current);

  const keyboardShortcuts = new KeyboardShortcuts({
    isActive: () => true,
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type '() => Promise<undefined> | undefined'. | TS2322 - Type '() => void' is not assignable to type '() => Promise<undefined> | undefined'.
    shortcutCallbacks: { onUndo: _undo, onRedo: _redo },
  });

  const copySelection = React.useCallback(
    () => {
      Clipboard.set(
        CLIPBOARD_KIND,
        selectedNodes
          .map(nodeId => {
            const { variable, name, lineage } = getVariableContextFromNodeId(
              nodeId,
              nodeId.startsWith(inheritedPrefix) &&
                props.inheritedVariablesContainer
                ? props.inheritedVariablesContainer
                : props.variablesContainer
            );
            if (!variable || !name) return null;

            let hasName = false;
            const parentVariable = getDirectParentVariable(lineage);
            if (
              !parentVariable ||
              parentVariable.getType() === gd.Variable.Structure
            ) {
              hasName = true;
            }
            return {
              nameOrIndex: name,
              serializedVariable: serializeToJSObject(variable),
              hasName,
            };
          })
          .filter(Boolean)
      );
      forceUpdate();
    },
    [
      forceUpdate,
      props.inheritedVariablesContainer,
      props.variablesContainer,
      selectedNodes,
    ]
  );

  const pasteClipboardContent = React.useCallback(
    () => {
      if (!Clipboard.has(CLIPBOARD_KIND)) return;
      const newSelectedNodes: Array<string> = [];

      const clipboardContent = Clipboard.get(CLIPBOARD_KIND);
      const variablesContent = SafeExtractor.extractArray(clipboardContent);
      if (!variablesContent) return;

      let pastedElementOffsetIndex = 0;

      variablesContent.forEach(variableContent => {
        const nameOrIndex = SafeExtractor.extractStringProperty(
          variableContent,
          'nameOrIndex'
        );
        const serializedVariable = SafeExtractor.extractObjectProperty(
          variableContent,
          'serializedVariable'
        );
        const hasName = SafeExtractor.extractBooleanProperty(
          variableContent,
          'hasName'
        );
        if (!nameOrIndex || !serializedVariable || hasName === null) return;

        const pasteAtTopLevel =
          selectedNodes.length === 0 ||
          selectedNodes.some(nodeId => nodeId.startsWith(inheritedPrefix));

        const name = hasName ? nameOrIndex : null;

        if (pasteAtTopLevel) {
          if (!name) return;
          const { name: newName } = insertInVariablesContainer(
            props.variablesContainer,
            gd.Project.getSafeName(name),
            serializedVariable,
            props.variablesContainer.count(),
            props.inheritedVariablesContainer
          );
          newSelectedNodes.push(newName);
        } else {
          const targetNode = selectedNodes[0];
          if (targetNode.startsWith(inheritedPrefix)) return;

          const {
            name: targetVariableName,
            lineage: targetVariableLineage,
          } = getVariableContextFromNodeId(
            targetNode,
            props.variablesContainer
          );
          if (!targetVariableName) return;

          const targetParentVariable = getDirectParentVariable(
            targetVariableLineage
          );
          if (!targetParentVariable) {
            if (!name) return;
            const { name: newName } = insertInVariablesContainer(
              props.variablesContainer,
              name,
              serializedVariable,
              props.variablesContainer.getPosition(targetVariableName) + 1,
              props.inheritedVariablesContainer
            );
            newSelectedNodes.push(newName);
          } else {
            const targetParentType = targetParentVariable.getType();

            if (
              (targetParentType === gd.Variable.Structure && !name) ||
              (targetParentType === gd.Variable.Array && !!name)
            ) {
              // Early return if trying to paste array element in structure or vice versa
              return;
            }
            if (targetParentType === gd.Variable.Array) {
              const index = parseInt(targetVariableName, 10) + 1;
              insertInVariableChildrenArray(
                targetParentVariable,
                serializedVariable,
                index
              );
              const bits = targetNode.split(separator);
              bits.splice(
                bits.length - 1,
                1,
                (index + pastedElementOffsetIndex).toString()
              );

              newSelectedNodes.push(bits.join(separator));
              pastedElementOffsetIndex += 1;
            } else {
              if (!name) return;
              const newName = insertInVariableChildren(
                targetParentVariable,
                name,
                serializedVariable
              );
              const bits = targetNode.split(separator);
              bits.splice(bits.length - 1, 1, newName);
              newSelectedNodes.push(bits.join(separator));
            }
          }
        }
      });
      _onChange();
      setSelectedNodes(newSelectedNodes);
    },
    [
      _onChange,
      props.inheritedVariablesContainer,
      props.variablesContainer,
      selectedNodes,
    ]
  );

  const _deleteNode = React.useCallback(
    (nodeId: string): boolean => {
      if (nodeId.startsWith(inheritedPrefix)) return false;
      const { name, lineage } = getVariableContextFromNodeId(
        nodeId,
        props.variablesContainer
      );
      if (!name) return false;
      const parentVariable = getDirectParentVariable(lineage);
      if (!parentVariable) {
        props.variablesContainer.remove(name);
      } else {
        if (parentVariable.getType() === gd.Variable.Array) {
          parentVariable.removeAtIndex(parseInt(name, 10));
        } else {
          parentVariable.removeChild(name);
        }
      }
      return true;
    },
    [props.variablesContainer]
  );

  const deleteNode = React.useCallback(
    (nodeId: string): void => {
      const success = _deleteNode(nodeId);
      if (success) {
        _onChange();
        forceUpdate();
      }
    },
    [_onChange, forceUpdate, _deleteNode]
  );

  const deleteSelection = React.useCallback(
    () => {
      // Take advantage of the node ids notation to sort them in
      // descending lexicographical order, so we delete from "last"
      // to "first". In the case of arrays, this avoids to change
      // the index of the variables while deleting them, which would
      // result in the wrong variables to be deleted if multiple of them
      // are removed.
      const deleteSuccesses = selectedNodes
        .sort()
        .reverse()
        .map(_deleteNode);
      if (deleteSuccesses.some(Boolean)) {
        _onChange();
        setSelectedNodes([]);
      }
    },
    [_onChange, _deleteNode, selectedNodes]
  );

  const updateExpandedAndSelectedNodesFollowingNameChange = React.useCallback(
    (oldNodeId: string, newName: string) => {
      setSelectedNodes(selectedNodes =>
        updateListOfNodesFollowingChangeName(selectedNodes, oldNodeId, newName)
      );
      if (!!searchText) {
        setSearchMatchingNodes(searchMatchingNodes =>
          updateListOfNodesFollowingChangeName(
            searchMatchingNodes,
            oldNodeId,
            newName
          )
        );
      }
    },
    [searchText]
  );

  const updateExpandedAndSelectedNodesFollowingNodeMove = React.useCallback(
    (oldNodeId: string, newParentNodeId: string, newName: string) => {
      // TODO: Recompute list of selected nodes following a node move that changes all the values of an array.
      setSelectedNodes([]);
      if (!!searchText) {
        triggerSearch();
        forceUpdate();
      }
    },
    [forceUpdate, searchText, triggerSearch]
  );

  const canDrop = React.useCallback(
    (nodeId: string): boolean => {
      if (nodeId.startsWith(inheritedPrefix)) return false;
      const { current } = draggedNodeId;
      if (!current) return false;

      const targetVariableContext = getVariableContextFromNodeId(
        nodeId,
        props.variablesContainer
      );
      const { lineage: targetLineage } = targetVariableContext;

      const draggedVariableContext = getVariableContextFromNodeId(
        current,
        props.variablesContainer
      );
      const { variable: draggedVariable } = draggedVariableContext;
      if (!draggedVariable) return false;

      if (isAnAncestryOf(draggedVariable, targetLineage)) return false;

      const movementType = getMovementTypeWithinVariablesContainer(
        draggedVariableContext,
        targetVariableContext
      );

      switch (movementType) {
        case 'InsideTopLevel':
        case 'TopLevelToStructure':
        case 'StructureToTopLevel':
        case 'FromStructureToAnotherStructure':
        case 'FromArrayToAnotherArray':
        case 'InsideSameArray':
          return true;
        case 'FromStructureToArray':
        case 'FromArrayToStructure':
        case 'ArrayToTopLevel':
        case 'InsideSameStructure':
        case 'TopLevelToArray':
        default:
          return false;
      }
    },
    [props.variablesContainer]
  );

  const dropNode = React.useCallback(
    (nodeId: string): void => {
      if (nodeId.startsWith(inheritedPrefix)) return;
      const { current } = draggedNodeId;
      if (!current) return;

      // TODO: Add logic to copy dragged variable instead of moving it if Alt/Opt key is pressed
      // React-dnd keeps the focus when user is dragging so keyboard shortcut instance
      // cannot detect if the key is pressed while dragging. React-dnd has issues to
      // return event data about pressed keys when mouse is up.

      const targetVariableContext = getVariableContextFromNodeId(
        nodeId,
        props.variablesContainer
      );
      const {
        lineage: targetLineage,
        name: targetName,
      } = targetVariableContext;
      const targetVariableParentVariable = getDirectParentVariable(
        targetLineage
      );
      if (!targetName) return;

      const draggedVariableContext = getVariableContextFromNodeId(
        current,
        props.variablesContainer
      );
      const {
        variable: draggedVariable,
        lineage: draggedLineage,
        name: draggedName,
      } = draggedVariableContext;
      const draggedVariableParentVariable = getDirectParentVariable(
        draggedLineage
      );
      if (!draggedVariable || !draggedName) return;

      if (isAnAncestryOf(draggedVariable, targetLineage)) return;

      const movementType = getMovementTypeWithinVariablesContainer(
        draggedVariableContext,
        targetVariableContext
      );
      let newName;
      let draggedIndex;
      let targetIndex;
      let movementHasBeenMade = true;
      let parentNodeId;
      let targetParentNodeId;

      switch (movementType) {
        case 'InsideTopLevel':
          draggedIndex = props.variablesContainer.getPosition(draggedName);
          targetIndex = props.variablesContainer.getPosition(targetName);
          props.variablesContainer.move(
            draggedIndex,
            targetIndex > draggedIndex ? targetIndex - 1 : targetIndex
          );
          break;
        case 'TopLevelToStructure':
          newName = newNameGenerator(
            draggedName,
            // $FlowFixMe - Regarding movement type, we are confident that the variable will exist
            name => targetVariableParentVariable.hasChild(name),
            'CopyOf'
          );

          // $FlowFixMe - Regarding movement type, we are confident that the variable will exist
          targetVariableParentVariable.insertChild(newName, draggedVariable);

          props.variablesContainer.remove(draggedName);
          parentNodeId = getDirectParentNodeId(targetLineage);
          if (parentNodeId)
            updateExpandedAndSelectedNodesFollowingNodeMove(
              current,
              parentNodeId,
              newName
            );
          break;
        case 'StructureToTopLevel':
          newName = newNameGenerator(
            gd.Project.getSafeName(draggedName),
            name => props.variablesContainer.has(name),
            'CopyOf'
          );
          props.variablesContainer.insert(
            newName,
            draggedVariable,
            props.variablesContainer.getPosition(targetName)
          );

          // $FlowFixMe - Regarding movement type, we are confident that the variable will exist
          draggedVariableParentVariable.removeChild(draggedName);
          updateExpandedAndSelectedNodesFollowingNodeMove(current, '', newName);
          break;
        case 'FromStructureToAnotherStructure':
          newName = newNameGenerator(
            draggedName,
            // $FlowFixMe - Regarding movement type, we are confident that the variable will exist
            name => targetVariableParentVariable.hasChild(name),
            'CopyOf'
          );
          // $FlowFixMe - Regarding movement type, we are confident that the variable will exist
          targetVariableParentVariable.insertChild(newName, draggedVariable);

          // $FlowFixMe - Regarding movement type, we are confident that the variable will exist
          draggedVariableParentVariable.removeChild(draggedName);
          parentNodeId = getDirectParentNodeId(targetLineage);
          if (parentNodeId)
            updateExpandedAndSelectedNodesFollowingNodeMove(
              current,
              parentNodeId,
              newName
            );
          break;
        case 'FromArrayToAnotherArray':
          draggedIndex = parseInt(draggedName, 10);
          targetIndex = parseInt(targetName, 10);

          // $FlowFixMe - Regarding movement type, we are confident that the variable will exist
          targetVariableParentVariable.insertAtIndex(
            draggedVariable,
            targetIndex
          );

          // $FlowFixMe - Regarding movement type, we are confident that the variable will exist
          draggedVariableParentVariable.removeAtIndex(draggedIndex);
          targetParentNodeId = getDirectParentNodeId(targetLineage);
          if (targetParentNodeId)
            updateExpandedAndSelectedNodesFollowingNodeMove(
              current,
              targetParentNodeId,
              targetIndex.toString()
            );
          break;
        case 'InsideSameArray':
          draggedIndex = parseInt(draggedName, 10);
          targetIndex = parseInt(targetName, 10);
          const correctedTargetIndex =
            targetIndex > draggedIndex ? targetIndex - 1 : targetIndex;
          // $FlowFixMe - Regarding movement type, we are confident that the variable will exist
          targetVariableParentVariable.moveChildInArray(
            draggedIndex,
            correctedTargetIndex
          );
          parentNodeId = getDirectParentNodeId(targetLineage);
          if (parentNodeId) {
            updateExpandedAndSelectedNodesFollowingNodeMove(
              current,
              parentNodeId,
              correctedTargetIndex.toString()
            );
          }
          break;
        case 'FromStructureToArray':
        case 'FromArrayToStructure':
        case 'ArrayToTopLevel':
        case 'InsideSameStructure':
        default:
          movementHasBeenMade = false;
      }
      if (movementHasBeenMade) {
        _onChange();
        forceUpdate();
      }
    },
    [
      _onChange,
      forceUpdate,
      props.variablesContainer,
      updateExpandedAndSelectedNodesFollowingNodeMove,
    ]
  );

  const onAddChild = React.useCallback(
    (nodeId: string) => {
      if (nodeId.startsWith(inheritedPrefix)) return;
      const { variable } = getVariableContextFromNodeId(
        nodeId,
        props.variablesContainer
      );
      if (!variable || !isCollectionVariable(variable)) return;
      const type = variable.getType();

      if (type === gd.Variable.Structure) {
        const name = newNameGenerator('ChildVariable', name =>
          variable.hasChild(name)
        );
        variable.getChild(name).setString('');
      } else if (type === gd.Variable.Array) variable.pushNew();
      _onChange();
      if (variable.isFolded()) variable.setFolded(false);
      forceUpdate();
    },
    [_onChange, forceUpdate, props.variablesContainer]
  );

  const editInheritedVariable = React.useCallback(
    (nodeId: string): void => {
      if (!props.inheritedVariablesContainer) return;
      const {
        variable: inheritedVariable,
        name: inheritedVariableName,
      } = getVariableContextFromNodeId(
        nodeId,
        props.inheritedVariablesContainer
      );
      if (!inheritedVariable || !inheritedVariableName) return;
      if (props.variablesContainer.has(inheritedVariableName)) return;
      const newVariable = new gd.Variable();
      unserializeFromJSObject(
        newVariable,
        serializeToJSObject(inheritedVariable)
      );
      props.variablesContainer.insert(
        inheritedVariableName,
        newVariable,
        props.variablesContainer.count()
      );
      _onChange();
      setSelectedNodes([inheritedVariableName]);
      newVariable.delete();
    },
    [_onChange, props.inheritedVariablesContainer, props.variablesContainer]
  );

  const onAdd = React.useCallback(
    () => {
      const addAtTopLevel =
        selectedNodes.length === 0 ||
        selectedNodes.some(node => node.startsWith(inheritedPrefix));

      if (addAtTopLevel) {
        const { name: newName, variable } = insertInVariablesContainer(
          props.variablesContainer,
          'Variable',
          null,
          props.variablesContainer.count(),
          props.inheritedVariablesContainer
        );
        _onChange();
        setSelectedNodes([newName]);
        refocusNameField({ identifier: variable.ptr });
        return;
      }

      const targetNode = selectedNodes[0];
      const {
        name: targetVariableName,
        lineage: targetLineage,
      } = getVariableContextFromNodeId(targetNode, props.variablesContainer);
      if (!targetVariableName) return;
      const oldestAncestry = getOldestAncestryVariable(targetLineage);
      let position;
      if (!oldestAncestry) {
        position = props.variablesContainer.getPosition(targetVariableName) + 1;
      } else {
        position =
          props.variablesContainer.getPosition(oldestAncestry.name) + 1;
      }
      const { name: newName, variable } = insertInVariablesContainer(
        props.variablesContainer,
        'Variable',
        null,
        position,
        props.inheritedVariablesContainer
      );
      _onChange();
      setSelectedNodes([newName]);
      refocusNameField({ identifier: variable.ptr });
    },
    [
      _onChange,
      props.inheritedVariablesContainer,
      props.variablesContainer,
      refocusNameField,
      selectedNodes,
    ]
  );

  const onSelect = React.useCallback(
    (shouldMultiSelect: boolean, nodeId: string) => {
      setSelectedNodes(selectedNodes => {
        const isAlreadySelected = selectedNodes.indexOf(nodeId) !== -1;

        if (shouldMultiSelect) {
          if (isAlreadySelected) {
            return selectedNodes.filter(
              selectedNodeId => selectedNodeId !== nodeId
            );
          } else {
            return [...selectedNodes, nodeId];
          }
        } else {
          if (isAlreadySelected) {
            return selectedNodes;
          } else {
            return [nodeId];
          }
        }
      });
    },
    []
  );

  const renderVariableAndChildrenRows = (
    {
      name,
      variable,
      parentNodeId,
      parentVariable,
      isInherited,
      index,
    }: {
      name: string,
      variable: gdVariable,
      parentNodeId?: string,
      parentVariable?: gdVariable,
      isInherited: boolean,
      index: number
    },
    i18n: I18nType,
  ): Array<React.ReactElement> => {
    const isCollection = isCollectionVariable(variable);
    const type = variable.getType();
    const isExpanded = !variable.isFolded();
    const variablePointer = variable.ptr;

    const depth = parentNodeId ? parentNodeId.split(separator).length : 0;
    const isTopLevel = depth === 0;

// @ts-expect-error - TS7034 - Variable 'nodeId' implicitly has type 'any' in some locations where its type cannot be determined.
    let nodeId;
    if (!parentNodeId) {
      if (isInherited) {
        nodeId = `${inheritedPrefix}${name}`;
      } else {
        nodeId = name;
      }
    } else {
      nodeId = `${parentNodeId}${separator}${name}`;
    }
    const parentType = parentVariable ? parentVariable.getType() : null;
    const isSelected = selectedNodes.includes(nodeId);
    const overwritesInheritedVariable =
      isTopLevel &&
      !isInherited &&
      props.inheritedVariablesContainer &&
      props.inheritedVariablesContainer.has(name);

    if (!!searchText) {
      if (
        !(
          searchMatchingNodes.includes(nodeId) ||
// @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
          searchMatchingNodes.includes(parentNodeId) ||
          searchMatchingNodes.some(matchingNodeId =>
// @ts-expect-error - TS7005 - Variable 'nodeId' implicitly has an 'any' type.
            matchingNodeId.startsWith(nodeId)
          )
        )
      ) {
        // Display node if one of these is true:
        // - node is in the list of nodes matching search
        // - parent node is in the list of nodes matching search (to be able to edit direct children of searched structure)
        // - node is an ancestry of a node in the list of nodes matching search
        return [];
      }
    }

    const valueAsString = isCollection
      ? i18n._(
          variable.getChildrenCount() === 0
            ? t`No children`
            : variable.getChildrenCount() === 1
            ? t`1 child`
            : t`${variable.getChildrenCount()} children`
        )
      : type === gd.Variable.String
      ? variable.getString()
      : type === gd.Variable.Number
      ? variable.getValue().toString()
      : null;

    const valueAsBool =
      type === gd.Variable.Boolean ? variable.getBool() : null;

    const variableRow = (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <VariableRow
        key={nodeId}
        depth={depth}
        isNarrow={isNarrow}
        containerWidth={containerWidth}
        shouldHideExpandIcons={shouldHideExpandIcons}
        isExpanded={isExpanded}
        onExpand={onExpand}
        draggedNodeId={draggedNodeId}
        nodeId={nodeId}
        isInherited={isInherited}
        canDrop={canDrop}
        dropNode={dropNode}
        isSelected={isSelected}
        onSelect={onSelect}
        gdevelopTheme={gdevelopTheme}
        topLevelVariableNameInputRefs={topLevelVariableNameInputRefs}
        topLevelVariableValueInputRefs={topLevelVariableValueInputRefs}
        parentType={parentType}
        onChangeName={onChangeName}
        overwritesInheritedVariable={overwritesInheritedVariable}
        name={name}
        index={index}
        rowRightSideStyle={rowRightSideStyle}
        isTopLevel={isTopLevel}
        type={type}
        variablePointer={variablePointer}
        onChangeType={onChangeType}
        valueAsString={valueAsString}
        valueAsBool={valueAsBool}
        onChangeValue={onChangeValue}
        isCollection={isCollection}
        onAddChild={onAddChild}
        editInheritedVariable={editInheritedVariable}
        deleteNode={deleteNode}
        directlyStoreValueChangesWhileEditing={
          !!props.directlyStoreValueChangesWhileEditing
        }
      />
    );

    if (type === gd.Variable.Structure) {
      return [
        variableRow,
        ...(isExpanded
          ? variable
              .getAllChildrenNames()
              .toJSArray()
// @ts-expect-error - TS7006 - Parameter 'childName' implicitly has an 'any' type. | TS7006 - Parameter 'index' implicitly has an 'any' type.
              .map((childName, index) => {
                const childVariable = variable.getChild(childName);
                return renderVariableAndChildrenRows(
                  {
                    name: childName,
                    variable: childVariable,
// @ts-expect-error - TS7005 - Variable 'nodeId' implicitly has an 'any' type.
                    parentNodeId: nodeId,
                    parentVariable: variable,
                    isInherited,
                    index,
                  },
                  i18n
                );
              })
          : []),
      ];
    } else if (type === gd.Variable.Array) {
      return [
        variableRow,
        ...(isExpanded
// @ts-expect-error - TS7006 - Parameter 'index' implicitly has an 'any' type.
          ? mapFor(0, variable.getChildrenCount(), index => {
              const childVariable = variable.getAtIndex(index);
              return renderVariableAndChildrenRows(
                {
                  name: index.toString(),
                  variable: childVariable,
// @ts-expect-error - TS7005 - Variable 'nodeId' implicitly has an 'any' type.
                  parentNodeId: nodeId,
                  parentVariable: variable,
                  isInherited,
                  index,
                },
                i18n
              );
            })
          : []),
      ];
    } else {
      return [variableRow];
    }
  };

  const onChangeName = React.useCallback(
    (newName: string, additionalContext: any) => {
      const parsedContext = JSON.parse(additionalContext);
      const nodeId: string = parsedContext.nodeId;
      const depth: number = parsedContext.depth;

      const { variable, lineage, name } = getVariableContextFromNodeId(
        nodeId,
        props.variablesContainer
      );
      if (name === null || !variable || newName === name) return;

      const parentVariable = getDirectParentVariable(lineage);

      // In theory this cleaning is not necessary (a "safe name" is mandatory for root variables,
      // but others should be able to have any name). In practice,
      // this editor uses specific separator that we forbid in names.
      let cleanedName = newName.replace(inheritedPrefix, '');

      while (cleanedName.includes(separator)) {
        cleanedName = cleanedName.replace(separator, '');
      }

      const safeAndUniqueNewName = newNameGenerator(
        depth === 0
          ? // Root variables always use identifier safe names.
            gd.Project.getSafeName(cleanedName)
          : // Child variables of structures must "just" be not empty.
            cleanedName || 'Unnamed',
        tentativeNewName => {
          if (
            (parentVariable && parentVariable.hasChild(tentativeNewName)) ||
            (!parentVariable && props.variablesContainer.has(tentativeNewName))
          ) {
            return true;
          }

          return false;
        }
      );

      if (!parentVariable) {
        props.variablesContainer.rename(name, safeAndUniqueNewName);
      } else {
        parentVariable.renameChild(name, safeAndUniqueNewName);
      }

      _onChange();
      updateExpandedAndSelectedNodesFollowingNameChange(
        nodeId,
        safeAndUniqueNewName
      );
      refocusNameField({ identifier: variable.ptr });
    },
    [
      _onChange,
      props.variablesContainer,
      updateExpandedAndSelectedNodesFollowingNameChange,
      refocusNameField,
    ]
  );

  const onChangeType = React.useCallback(
    (newType: string, nodeId: string) => {
      const { variable } = getVariableContextFromNodeId(
        nodeId,
        props.variablesContainer
      );
      if (!variable) return;
      variable.castTo(newType);
      _onChange();
      forceUpdate();
    },
    [_onChange, forceUpdate, props.variablesContainer]
  );

  const onExpand = React.useCallback(
    (expand: boolean, nodeId: string) => {
      const isInherited = nodeId.startsWith(inheritedPrefix);
      const { variable } = getVariableContextFromNodeId(
        nodeId,
        isInherited && props.inheritedVariablesContainer
          ? props.inheritedVariablesContainer
          : variablesContainer
      );
      if (variable) {
        variable.setFolded(!expand);
        forceUpdate();
      }
    },
    [props.inheritedVariablesContainer, variablesContainer, forceUpdate]
  );

  const onChangeValue = React.useCallback(
    (newValue: string, nodeId: string) => {
      const isInherited = nodeId.startsWith(inheritedPrefix);
      let variable;
      if (isInherited && props.inheritedVariablesContainer) {
        // If user changes inherited variable, check if value is truly modified before
        // duplicating the variable into the variables container
        const {
          variable: changedInheritedVariable,
          name,
          depth,
        } = getVariableContextFromNodeId(
          nodeId,
          props.inheritedVariablesContainer
        );
        if (!name || !changedInheritedVariable || depth > 0) return;
        switch (changedInheritedVariable.getType()) {
          case gd.Variable.String:
            if (changedInheritedVariable.getString() === newValue) return;
            break;
          case gd.Variable.Number:
            const newValueAsFloat = parseFloat(newValue);
            if (newValueAsFloat === changedInheritedVariable.getValue()) return;
            break;
          case gd.Variable.Boolean:
            const newBool = newValue === 'true';
            if (newBool === changedInheritedVariable.getBool()) return;
            break;
          default:
        }
        const newVariable = new gd.Variable();
        unserializeFromJSObject(
          newVariable,
          serializeToJSObject(changedInheritedVariable)
        );
        variable = props.variablesContainer.insert(name, newVariable, 0);

        setSelectedNodes(selectedNodes => {
          const newSelectedNodes = [...selectedNodes];
          const isVariableSelected = newSelectedNodes.indexOf(nodeId) !== -1;
          if (isVariableSelected) {
            newSelectedNodes.splice(newSelectedNodes.indexOf(nodeId), 1, name);
            return newSelectedNodes;
          } else {
            return [...newSelectedNodes, name];
          }
        });
        const currentlyFocusedValueField =
          topLevelVariableValueInputRefs.current[changedInheritedVariable.ptr];
        refocusValueField({
          identifier: variable.ptr,
          caretPosition: currentlyFocusedValueField
            ? currentlyFocusedValueField.getCaretPosition()
            : null,
        });
        newVariable.delete();
      } else {
        const { variable: changedVariable } = getVariableContextFromNodeId(
          nodeId,
          props.variablesContainer
        );
        variable = changedVariable;
      }
      if (!variable) return;
      switch (variable.getType()) {
        case gd.Variable.String:
          if (variable.getString() === newValue) return;
          variable.setString(newValue);
          break;
        case gd.Variable.Number:
          const newValueAsFloat = parseFloat(newValue);
          if (newValueAsFloat === variable.getValue()) return;
          variable.setValue(newValueAsFloat);
          break;
        case gd.Variable.Boolean:
          const newBool = newValue === 'true';
          if (newBool === variable.getBool()) return;
          variable.setBool(newBool);
          break;
        default:
          console.error(
            `Cannot set variable with type ${variable.getType()} - are you sure it's a primitive type?`
          );
      }
      _onChange();
      forceUpdate();
    },
    [
      _onChange,
      forceUpdate,
      props.inheritedVariablesContainer,
      props.variablesContainer,
      refocusValueField,
    ]
  );

  const renderTree = (i18n: I18nType, isInherited: boolean = false) => {
    const variablesContainer =
      isInherited && props.inheritedVariablesContainer
        ? props.inheritedVariablesContainer
        : props.variablesContainer;
    const allRows: Array<Node> = [];
// @ts-expect-error - TS7006 - Parameter 'index' implicitly has an 'any' type.
    mapFor(0, variablesContainer.count(), index => {
      const variable = variablesContainer.getAt(index);
      const name = variablesContainer.getNameAt(index);
      if (isInherited) {
        if (props.variablesContainer.has(name)) {
          return null;
        }
      }

      allRows.push(
// @ts-expect-error - TS2345 - Argument of type 'ReactElement<any, string | JSXElementConstructor<any>>' is not assignable to parameter of type 'Node'.
        ...renderVariableAndChildrenRows(
          {
            name,
            variable,
            isInherited,
            index,
          },
          i18n
        )
      );
    });
    return allRows;
  };

  const toolbar = (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <VariablesListToolbar
      isNarrow={isNarrow}
      onCopy={copySelection}
      onPaste={pasteClipboardContent}
      onDelete={deleteSelection}
      canCopy={selectedNodes.length > 0}
      canPaste={Clipboard.has(CLIPBOARD_KIND)}
      canDelete={
        selectedNodes.length > 0 &&
        selectedNodes.every(nodeId => !nodeId.startsWith(inheritedPrefix))
      }
      onUndo={_undo}
      onRedo={_redo}
      canUndo={_canUndo()}
      canRedo={_canRedo()}
      hideHistoryChangeButtons={!!props.historyHandler}
      onAdd={onAdd}
      searchText={searchText}
      onChangeSearchText={setSearchText}
      iconStyle={props.toolbarIconStyle}
    />
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ErrorBoundary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      componentTitle={<Trans>Variables list</Trans>}
      scope="variables-list"
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
        {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ClickAwayListener onClickAway={() => setSelectedNodes([])}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Measure
              bounds
// @ts-expect-error - TS7006 - Parameter 'contentRect' implicitly has an 'any' type.
              onResize={contentRect => {
                setContainerWidth(contentRect.bounds.width);
              }}
            >
{ /* @ts-expect-error - TS7031 - Binding element 'contentRect' implicitly has an 'any' type. | TS7031 - Binding element 'measureRef' implicitly has an 'any' type. */}
              {({ contentRect, measureRef }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <div
                  ref={measureRef}
                  style={{ flex: 1, display: 'flex', minHeight: 0 }}
// @ts-expect-error - TS2322 - Type '(evt: KeyboardEvent) => void' is not assignable to type 'KeyboardEventHandler<HTMLDivElement>'.
                  onKeyDown={keyboardShortcuts.onKeyDown}
// @ts-expect-error - TS2322 - Type '(evt: KeyboardEvent) => void' is not assignable to type 'KeyboardEventHandler<HTMLDivElement>'.
                  onKeyUp={keyboardShortcuts.onKeyUp}
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Column expand useFullHeight noMargin>
                    {isNarrow ? null : toolbar}
                    {props.variablesContainer.count() === 0 &&
                    (!props.inheritedVariablesContainer ||
                      props.inheritedVariablesContainer.count() === 0) ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Column noMargin expand justifyContent="center">
                        {props.emptyPlaceholderTitle &&
                        props.emptyPlaceholderDescription ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          <EmptyPlaceholder
                            title={props.emptyPlaceholderTitle}
                            description={props.emptyPlaceholderDescription}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                            actionLabel={<Trans>Add a variable</Trans>}
                            helpPagePath={props.helpPagePath || undefined}
                            tutorialId="intermediate-advanced-variables"
                            onAction={onAdd}
                            actionButtonId="add-variable"
                          />
                        ) : null}
                      </Column>
                    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <ScrollView autoHideScrollbar>
                        {props.inheritedVariablesContainer
                          ? renderTree(i18n, true)
                          : null}
                        {renderTree(i18n)}
                        {!!undefinedVariableNames.length && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          <Paper background="dark" variant="outlined">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                            <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                              <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                <MarkdownText
                                  translatableSource={t`There are variables used in events but not declared in this list: ${'`' +
                                    undefinedVariableNames.join('`, `') +
                                    '`'}.`}
                                />
                              </Text>
                            </Column>
                          </Paper>
                        )}
                      </ScrollView>
                    )}
                    {isNarrow ? toolbar : null}
                  </Column>
                </div>
              )}
            </Measure>
          </ClickAwayListener>
        )}
      </I18n>
    </ErrorBoundary>
  );
};

export default VariablesList;
