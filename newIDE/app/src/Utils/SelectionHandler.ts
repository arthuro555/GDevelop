/**
 * Export functions to manipulate a selection of objects.
 */

import values from 'lodash/values';

type ObjectType = {
  ptr: number
};

type SelectionState<T> = {
  [key: number]: T | null | undefined
};

export const getInitialSelection = () => ({});

export const clearSelection = () => getInitialSelection();

// @ts-expect-error - TS2322 - Type '(T | null | undefined)[]' is not assignable to type 'T[]'.
export const getSelection = <T extends ObjectType>(selection: SelectionState<T>): Array<T> => values(selection).filter(value => !!value);

export const addToSelection = <T extends ObjectType>(selection: SelectionState<T>, object: T, select: boolean = true): SelectionState<T> => {
  return {
    ...selection,
    [object.ptr]: select ? object : null,
  };
};

export const isSelected = <T extends ObjectType>(selection: SelectionState<T>, object: T): boolean => !!selection[object.ptr];

export const hasSelection = <T extends ObjectType>(selection: SelectionState<T>): boolean => {
  return !!values(selection).filter(value => !!value).length;
};
