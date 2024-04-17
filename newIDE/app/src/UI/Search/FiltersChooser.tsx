import { Trans } from '@lingui/macro';
import * as React from 'react';
import capitalize from 'lodash/capitalize';
import { Filters, TagsTreeNode } from '../../Utils/GDevelopServices/Filters';

import InlineCheckbox from '../InlineCheckbox';

import { ColumnStackLayout } from '../Layout';

import PlaceholderLoader from '../PlaceholderLoader';

import EmptyMessage from '../EmptyMessage';

export type ChosenCategory = {
  node: TagsTreeNode;
  parentNodes: Array<TagsTreeNode>;
};

export type FiltersState = {
  chosenFilters: Set<string>;
  addFilter: (arg1: string) => void;
  removeFilter: (arg1: string) => void;
  chosenCategory: ChosenCategory | null | undefined;
  setChosenCategory: (arg1?: ChosenCategory | null | undefined) => void;
};

export const useFilters = (): FiltersState => {
  const [chosenCategory, setChosenCategory] = React.useState<
    ChosenCategory | null | undefined
  >(null);
  const [chosenFilters, setChosenFilters] = React.useState<Set<string>>(
    () => new Set()
  );

  const setChosenCategoryAndUpdateFilters = React.useCallback(
    (newChosenCategory?: ChosenCategory | null) => {
      if (!newChosenCategory) {
        // No more category is chosen. Keep the filters
        setChosenCategory(null);
      } else {
        // Remove the filters that are not included in the category,
        // as it would make no sense (not displayed, and everything would be filtered out).
        const newChosenFilters = new Set();
        for (const tag of chosenFilters.keys()) {
          if (newChosenCategory.node.allChildrenTags.includes(tag)) {
            newChosenFilters.add(tag);
          }
        }

        // @ts-expect-error - TS2345 - Argument of type 'Set<unknown>' is not assignable to parameter of type 'SetStateAction<Set<string>>'.
        setChosenFilters(newChosenFilters);
        setChosenCategory(newChosenCategory);
      }
    },
    [chosenFilters]
  );

  return {
    chosenCategory,
    setChosenCategory: setChosenCategoryAndUpdateFilters,
    chosenFilters,
    addFilter: (tag: string) => {
      const newChosenFilters = new Set(chosenFilters);
      newChosenFilters.add(tag);
      setChosenFilters(newChosenFilters);
    },
    removeFilter: (tag: string) => {
      const newChosenFilters = new Set(chosenFilters);
      newChosenFilters.delete(tag);

      setChosenFilters(newChosenFilters);
    },
  };
};

type Props = {
  filtersState: FiltersState;
  allFilters: Filters | null | undefined;
  error: Error | null | undefined;
};

export const FiltersChooser = ({ filtersState, allFilters, error }: Props) => {
  if (!allFilters) {
    return <PlaceholderLoader />;
  }
  if (error) {
    // Error and retry button shown somewhere else in the UI
    return null;
  }

  // Only display the tags that are contained inside the selected category
  const selectedCategoryTags = filtersState.chosenCategory
    ? filtersState.chosenCategory.node.allChildrenTags
    : allFilters.defaultTags;

  return (
    <ColumnStackLayout>
      {!selectedCategoryTags ? (
        <EmptyMessage>
          <Trans>Choose a category to display filters</Trans>
        </EmptyMessage>
      ) : selectedCategoryTags.length ? (
        selectedCategoryTags.map((tag) => (
          // @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <InlineCheckbox
            key={tag}
            label={capitalize(tag)}
            checked={filtersState.chosenFilters.has(tag)}
            onCheck={() => {
              if (filtersState.chosenFilters.has(tag)) {
                filtersState.removeFilter(tag);
              } else {
                filtersState.addFilter(tag);
              }
            }}
          />
        ))
      ) : (
        <EmptyMessage>
          <Trans>No filters in this category.</Trans>
        </EmptyMessage>
      )}
    </ColumnStackLayout>
  );
};
