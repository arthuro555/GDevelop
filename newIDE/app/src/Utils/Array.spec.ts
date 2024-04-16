import {mergeArraysPerGroup} from './Array';

// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
describe('Array', () => {
// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  describe('mergeArraysPerGroup', () => {
// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    test('can merge arrays with the number of picks per group varying', () => {
      expect(mergeArraysPerGroup([], [], 2, 1)).toEqual([]);
      expect(mergeArraysPerGroup([], [], 1, 1)).toEqual([]);
      expect(mergeArraysPerGroup([1, 2, 3, 4], [], 2, 1)).toEqual([1, 2, 3, 4]);
      expect(mergeArraysPerGroup([], [1, 2, 3, 4], 2, 1)).toEqual([1, 2, 3, 4]);
      expect(mergeArraysPerGroup(['a'], [1, 2, 3, 4], 2, 1)).toEqual([
        'a',
        1,
        2,
        3,
        4,
      ]);
      expect(mergeArraysPerGroup(['a'], [1, 2, 3, 4], 2, 1)).toEqual([
        'a',
        1,
        2,
        3,
        4,
      ]);
      expect(
// @ts-expect-error - TS2322 - Type 'number' is not assignable to type 'string'. | TS2322 - Type 'number' is not assignable to type 'string'. | TS2322 - Type 'number' is not assignable to type 'string'. | TS2322 - Type 'number' is not assignable to type 'string'.
        mergeArraysPerGroup(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4], 2, 1)
      ).toEqual(['a', 'b', 1, 'c', 'd', 2, 'e', 3, 4]);
      expect(
// @ts-expect-error - TS2322 - Type 'number' is not assignable to type 'string'. | TS2322 - Type 'number' is not assignable to type 'string'. | TS2322 - Type 'number' is not assignable to type 'string'. | TS2322 - Type 'number' is not assignable to type 'string'.
        mergeArraysPerGroup(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4], 2, 2)
      ).toEqual(['a', 'b', 1, 2, 'c', 'd', 3, 4, 'e']);
      expect(
// @ts-expect-error - TS2322 - Type 'number' is not assignable to type 'string'. | TS2322 - Type 'number' is not assignable to type 'string'. | TS2322 - Type 'number' is not assignable to type 'string'. | TS2322 - Type 'number' is not assignable to type 'string'.
        mergeArraysPerGroup(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4], 3, 1)
      ).toEqual(['a', 'b', 'c', 1, 'd', 'e', 2, 3, 4]);
    });
  });
});
