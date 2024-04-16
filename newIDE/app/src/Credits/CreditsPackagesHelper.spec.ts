const { getItemsSplitInLines } = require('./CreditsPackagesHelper');

// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
describe('getItemsSplitInLines', () => {
// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  describe('loading', () => {
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    it('returns null if loading', () => {
      const results = getItemsSplitInLines(null, false);
      expect(results).toEqual(null);
    });
  });
// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  describe('large screen', () => {
    const isMediumScreen = false;
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    it('works for 3 credit packages', () => {
      const creditPackages = Array(3).fill({});
      const results = getItemsSplitInLines(creditPackages, isMediumScreen);
      if (!results) {
        throw new Error('results should not be null.');
      }
      expect(results).toHaveLength(1);
      expect(results[0]).toHaveLength(3);
    });
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    it('works for 4 credit packages', () => {
      const creditPackages = Array(4).fill({});
      const results = getItemsSplitInLines(creditPackages, isMediumScreen);
      if (!results) {
        throw new Error('results should not be null.');
      }
      expect(results).toHaveLength(1);
      expect(results[0]).toHaveLength(4);
    });
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    it('works for 5 credit packages', () => {
      const creditPackages = Array(5).fill({});
      const results = getItemsSplitInLines(creditPackages, isMediumScreen);
      if (!results) {
        throw new Error('results should not be null.');
      }
      expect(results).toHaveLength(2);
      expect(results[0]).toHaveLength(3);
      expect(results[1]).toHaveLength(2);
    });
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    it('works for 6 credit packages', () => {
      const creditPackages = Array(6).fill({});
      const results = getItemsSplitInLines(creditPackages, isMediumScreen);
      if (!results) {
        throw new Error('results should not be null.');
      }
      expect(results).toHaveLength(2);
      expect(results[0]).toHaveLength(3);
      expect(results[1]).toHaveLength(3);
    });
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    it('works for 7 credit packages', () => {
      const creditPackages = Array(7).fill({});
      const results = getItemsSplitInLines(creditPackages, isMediumScreen);
      if (!results) {
        throw new Error('results should not be null.');
      }
      expect(results).toHaveLength(2);
      expect(results[0]).toHaveLength(4);
      expect(results[1]).toHaveLength(3);
    });
  });
// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  describe('medium screen', () => {
    const isMediumScreen = true;
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    it('works for 3 credit packages', () => {
      const creditPackages = Array(3).fill({});
      const results = getItemsSplitInLines(creditPackages, isMediumScreen);
      if (!results) {
        throw new Error('results should not be null.');
      }
      expect(results).toHaveLength(1);
      expect(results[0]).toHaveLength(3);
    });
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    it('works for 4 credit packages', () => {
      const creditPackages = Array(4).fill({});
      const results = getItemsSplitInLines(creditPackages, isMediumScreen);
      if (!results) {
        throw new Error('results should not be null.');
      }
      expect(results).toHaveLength(2);
      expect(results[0]).toHaveLength(2);
      expect(results[1]).toHaveLength(2);
    });
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    it('works for 5 credit packages', () => {
      const creditPackages = Array(5).fill({});
      const results = getItemsSplitInLines(creditPackages, isMediumScreen);
      if (!results) {
        throw new Error('results should not be null.');
      }
      expect(results).toHaveLength(2);
      expect(results[0]).toHaveLength(3);
      expect(results[1]).toHaveLength(2);
    });
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    it('works for 6 credit packages', () => {
      const creditPackages = Array(6).fill({});
      const results = getItemsSplitInLines(creditPackages, isMediumScreen);
      if (!results) {
        throw new Error('results should not be null.');
      }
      expect(results).toHaveLength(2);
      expect(results[0]).toHaveLength(3);
      expect(results[1]).toHaveLength(3);
    });
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    it('works for 7 credit packages', () => {
      const creditPackages = Array(7).fill({});
      const results = getItemsSplitInLines(creditPackages, isMediumScreen);
      if (!results) {
        throw new Error('results should not be null.');
      }
      expect(results).toHaveLength(3);
      expect(results[0]).toHaveLength(3);
      expect(results[1]).toHaveLength(2);
      expect(results[2]).toHaveLength(2);
    });
  });
});
