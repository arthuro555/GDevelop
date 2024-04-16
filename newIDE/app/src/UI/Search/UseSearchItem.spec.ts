import {filterSearchItems, partialQuickSort} from './UseSearchItem';
import { AssetShortHeader } from '../../Utils/GDevelopServices/Asset';
import { fakeAssetShortHeader1 } from '../../fixtures/GDevelopServicesTestData';

// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
describe('UseSearchItem', () => {
// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  test('sanitizeObjectName', () => {
    const performanceApiMock = { now: jest.fn(() => Date.now()) } as const;
// @ts-expect-error - TS2740 - Type '{ readonly now: any; }' is missing the following properties from type 'Performance': navigation, onresourcetimingbufferfull, timeOrigin, timing, and 13 more.
    global.performance = performanceApiMock;

    expect(filterSearchItems(null, null, new Set())).toEqual(null);

    const item1: AssetShortHeader = {
      ...fakeAssetShortHeader1,
      id: '1',
      tags: ['hello'],
    };
    const item2: AssetShortHeader = {
      ...fakeAssetShortHeader1,
      id: '2',
      tags: ['world'],
    };
    const items = [item1, item2];
    expect(filterSearchItems(items, null, new Set())).toEqual(items);
    expect(filterSearchItems(items, null, new Set(['world']))).toEqual([item2]);
  });
});

// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
describe('partialQuickSort', () => {
// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  test('Sort an empty search result', () => {
    const elements: Array<any> = [];
    partialQuickSort(elements, a => a, 1, 0);
    expect(elements).toStrictEqual([]);
  });
// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  test('Sort an unique search result', () => {
    const elements = [1];
    partialQuickSort(elements, a => a, 1, 1);
    expect(elements).toStrictEqual([1]);
  });
  [0.4, 0.6, 1].forEach(pertinence => {
// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    test(`Sort search results with same pertinence: ${pertinence}`, () => {
      const elements: Array<any | number> = [];
      elements.length = 8;
      elements.fill(pertinence);
      partialQuickSort(elements, a => a, pertinence, pertinence);

      const expectedElements: Array<any | number> = [];
      expectedElements.length = 8;
      expectedElements.fill(pertinence);
      expect(elements).toStrictEqual(expectedElements);
    });
  });
// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  test('Sort search results', () => {
    const elements = [0.2, 0.1, 0.6, 0.4, 1, 0.3, 0.8, 0.5, 0.7, 0.9];
    partialQuickSort(elements, a => a, 0.1, 1);
    expect(elements).toStrictEqual(
      // prettier-ignore
      [1, 0.9, 0.8, 0.6, 0.7, 0.3, 0.4, 0.5, 0.1, 0.2]
    );
  });
// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  test('Sort search results with a lot of small values', () => {
    const elements = [0.2, 0.1, 0.15, 0.4, 1, 0.3, 0.25, 0.45, 0.35];
    partialQuickSort(elements, a => a, 0.1, 1);
    expect(elements).toStrictEqual(
      // prettier-ignore
      [1, 0.1, 0.15, 0.4, 0.2, 0.3, 0.25, 0.45, 0.35]
    );
  });
// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  test('Sort search results with duplicated values', () => {
    const elements = [0.2, 0.6, 0.6, 0.4, 1, 0.8, 0.2, 0.4, 0.8];
    partialQuickSort(elements, a => a, 0.1, 1);
    expect(elements).toStrictEqual([1, 0.8, 0.8, 0.6, 0.6, 0.4, 0.2, 0.4, 0.2]);
  });
// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  test('Sort search results with duplicated maximum values', () => {
    const elements = [1, 1, 1, 1, 1, 0.2, 1, 1, 1];
    partialQuickSort(elements, a => a, 0.1, 1);
    expect(elements).toStrictEqual([1, 1, 1, 1, 1, 1, 1, 1, 0.2]);
  });
});
