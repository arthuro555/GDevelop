import * as React from 'react';
import {
  Filters,
  TagsTreeNode,
} from '../../Utils/GDevelopServices/Filters';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../PlaceholderLoader';
// @ts-expect-error - TS6142 - Module './FiltersChooser' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Search/FiltersChooser.tsx', but '--jsx' is not set.
import { FiltersState, ChosenCategory } from './FiltersChooser';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../CustomSvgIcons/ChevronArrowRight'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ChevronArrowRight.js' implicitly has an 'any' type.
import ChevronArrowRight from '../CustomSvgIcons/ChevronArrowRight';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../CustomSvgIcons/ChevronArrowBottom'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ChevronArrowBottom.js' implicitly has an 'any' type.
import ChevronArrowBottom from '../CustomSvgIcons/ChevronArrowBottom';

const nodeIdSeparator = ';-/>'; // A seemingly random string to ensure no clashes with tag names.
const toNodeId = (nodes: Array<TagsTreeNode>) =>
  nodes.map(node => node.name).join(nodeIdSeparator);

const TagsTreeItems = ({
  tagsTreeNodes,
  onChoose,
  parentNodes,
}: {
  parentNodes: Array<TagsTreeNode>,
  tagsTreeNodes: Array<TagsTreeNode>,
  onChoose: (arg1: ChosenCategory) => void
}) => {
  if (!tagsTreeNodes.length) return null;

  return tagsTreeNodes.map(node => {
    const newParentNodes = [...parentNodes, node];
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <TreeItem
        nodeId={toNodeId(newParentNodes)}
        label={node.name}
        key={node.name}
        onLabelClick={() => onChoose({ node, parentNodes })}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        collapseIcon={node.children.length ? <ChevronArrowBottom /> : null}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        expandIcon={node.children.length ? <ChevronArrowRight /> : null}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2786 - 'TagsTreeItems' cannot be used as a JSX component. */}
        <TagsTreeItems
          tagsTreeNodes={node.children}
          parentNodes={newParentNodes}
          onChoose={onChoose}
        />
      </TreeItem>
    );
  });
};

type MemoizedTagsTreeProps = {
  allItemsLabel: React.ReactNode,
  chosenCategory: ChosenCategory | null | undefined,
  setChosenCategory: (arg1?: ChosenCategory | null | undefined) => void,
  onChoiceChange?: (arg1?: ChosenCategory | null | undefined) => void,
  allFilters: Filters
};

const MemoizedTagsTree = React.memo<MemoizedTagsTreeProps>(function TagsTree({
  allItemsLabel,
  chosenCategory,
  setChosenCategory,
  onChoiceChange,
  allFilters,
}: MemoizedTagsTreeProps) {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <TreeView
      selected={
        chosenCategory
          ? toNodeId([...chosenCategory.parentNodes, chosenCategory.node])
          : ''
      }
      defaultExpanded={[]}
      onNodeSelect={() => {}}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <TreeItem
        nodeId=""
        label={allItemsLabel}
        onLabelClick={() => {
          setChosenCategory(null);
        }}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2786 - 'TagsTreeItems' cannot be used as a JSX component. */}
      <TagsTreeItems
        tagsTreeNodes={allFilters.tagsTree}
        onChoose={category => {
          setChosenCategory(category);
          if (onChoiceChange) onChoiceChange(category);
        }}
        parentNodes={[]}
      />
    </TreeView>
  );
});

type Props = {
  allItemsLabel: React.ReactNode,
  filtersState: FiltersState,
  onChoiceChange?: (arg1?: ChosenCategory | null | undefined) => void,
  allFilters: Filters | null | undefined,
  error: Error | null | undefined
};

export const CategoryChooser = ({
  filtersState,
  onChoiceChange,
  allFilters,
  error,
  allItemsLabel,
}: Props) => {
  if (!allFilters) {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    return <PlaceholderLoader />;
  }
  if (error) {
    // Error and retry button shown somewhere else in the UI
    return null;
  }

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <MemoizedTagsTree
      allItemsLabel={allItemsLabel}
      chosenCategory={filtersState.chosenCategory}
      setChosenCategory={filtersState.setChosenCategory}
      onChoiceChange={onChoiceChange}
      allFilters={allFilters}
    />
  );
};
