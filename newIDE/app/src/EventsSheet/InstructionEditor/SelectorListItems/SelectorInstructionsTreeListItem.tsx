import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../../UI/List' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/List.tsx', but '--jsx' is not set.
import { ListItem, ListItemRefType } from '../../../UI/List';
// @ts-expect-error - TS6142 - Module '../../../UI/ListIcon' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ListIcon.tsx', but '--jsx' is not set.
import ListIcon from '../../../UI/ListIcon';
import { InstructionOrExpressionTreeNode } from '../../../InstructionOrExpression/CreateTree';
import { EnumeratedInstructionOrExpressionMetadata } from '../../../InstructionOrExpression/EnumeratedInstructionOrExpressionMetadata';
// @ts-expect-error - TS6142 - Module '../../../UI/Subheader' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Subheader.tsx', but '--jsx' is not set.
import Subheader from '../../../UI/Subheader';
import flatten from 'lodash/flatten';
import { getSubheaderListItemKey, getInstructionListItemValue } from './Keys';

type Props<T> = {
  instructionTreeNode: InstructionOrExpressionTreeNode,
  onChoose: (type: string, arg2: T) => void,
  iconSize: number,
  useSubheaders?: boolean,
  selectedValue: string | null | undefined,
  initiallyOpenedPath?: Array<string> | null | undefined,
  getGroupIconSrc: (arg1: string) => string,
  parentGroupIconSrc?: string | null | undefined,
  // Optional ref that will be filled with the selected ListItem
  selectedItemRef?: {
    current: null | ListItemRefType
  }
};

export const renderInstructionOrExpressionTree = <T extends EnumeratedInstructionOrExpressionMetadata>(
  {
    instructionTreeNode,
    onChoose,
    iconSize,
    useSubheaders,
    selectedValue,
    selectedItemRef,
    initiallyOpenedPath,
    getGroupIconSrc,
    parentGroupIconSrc,
  }: Props<T>,
): Array<React.ReactElement<any> | null> => {
  const [initiallyOpenedKey, ...restOfInitiallyOpenedPath] =
    initiallyOpenedPath || [];

  return flatten(
    Object.keys(instructionTreeNode).map(key => {
      // In theory, we should have a way to distinguish
      // between instruction (leaf nodes) and group (nodes). We use
      // the "type" properties, but this will fail if a group is called "type"
      // (hence the flow errors, which are valid warnings)
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'InstructionOrExpressionTreeNode'.
      const instructionOrGroup = instructionTreeNode[key];
      if (!instructionOrGroup) return null;

      if (typeof instructionOrGroup.type === 'string') {
        const instructionMetadata: T = instructionOrGroup;
        const value = getInstructionListItemValue(instructionOrGroup.type);
        const selected = selectedValue === value;
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ListItem
            key={value}
            primaryText={instructionMetadata.displayedName}
            selected={selected}
            id={
              // TODO: This id is used by in app tutorials. When in app tutorials
              // are linked to GDevelop versions, change this id to be more accurate
              // using getInstructionOrExpressionIdentifier
              'instruction-item-' + instructionMetadata.type.replace(/:/g, '-')
            }
            leftIcon={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <ListIcon
                iconSize={iconSize}
                src={instructionMetadata.iconFilename}
              />
            }
            onClick={() => {
              onChoose(instructionMetadata.type, instructionMetadata);
            }}
            ref={selected ? selectedItemRef : undefined}
          />
        );
      } else {
        const groupOfInstructionInformation: InstructionOrExpressionTreeNode = instructionOrGroup;
        if (useSubheaders) {
          const iconSrc = getGroupIconSrc(key) || parentGroupIconSrc;
          return [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Subheader key={getSubheaderListItemKey(key)}>{key}</Subheader>,
          ].concat(
// @ts-expect-error - TS2769 - No overload matches this call.
            renderInstructionOrExpressionTree({
              instructionTreeNode: groupOfInstructionInformation,
              onChoose,
              iconSize,
              useSubheaders: false,
              selectedValue,
              selectedItemRef,
              initiallyOpenedPath: restOfInitiallyOpenedPath,
              getGroupIconSrc,
              parentGroupIconSrc: iconSrc,
            })
          );
        } else {
          const initiallyOpen = initiallyOpenedKey === key;
          const iconSrc = getGroupIconSrc(key) || parentGroupIconSrc;
          return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <ListItem
              key={key}
              primaryText={key}
              autoGenerateNestedIndicator={true}
              initiallyOpen={initiallyOpen}
              leftIcon={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                iconSrc ? <ListIcon iconSize={iconSize} src={iconSrc} /> : null
              }
              renderNestedItems={() =>
                renderInstructionOrExpressionTree({
                  instructionTreeNode: groupOfInstructionInformation,
                  onChoose,
                  iconSize,
                  selectedValue,
                  selectedItemRef,
                  initiallyOpenedPath: initiallyOpen
                    ? restOfInitiallyOpenedPath
                    : undefined,
                  getGroupIconSrc,
                  parentGroupIconSrc: iconSrc,
                })
              }
            />
          );
        }
      }
    })
  );
};
