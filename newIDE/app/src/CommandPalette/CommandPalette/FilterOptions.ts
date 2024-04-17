import { fuzzyOrEmptyFilter } from '../../Utils/FuzzyOrEmptyFilter';

/**
 * Filters options both simply and fuzzy-ly,
 * prioritizing simple-matched options
 */
const filterOptions = <T extends any>(
  options: Array<T>,
  state: {
    getOptionLabel: (arg1: T) => string;
    inputValue: string;
  }
) => {
  const searchText = state.inputValue.toLowerCase();
  if (searchText === '') return options;

  const directMatches: Array<T> = [];
  const fuzzyMatches: Array<T> = [];
  options.forEach((option) => {
    // @ts-expect-error - TS2339 - Property 'hit' does not exist on type 'T'.
    if (option.hit) return directMatches.push(option);
    const optionText = state.getOptionLabel(option).toLowerCase();
    if (optionText.includes(searchText)) return directMatches.push(option);
    if (fuzzyOrEmptyFilter(searchText, optionText))
      return fuzzyMatches.push(option);
  });

  return [...directMatches, ...fuzzyMatches];
};

export default filterOptions;
