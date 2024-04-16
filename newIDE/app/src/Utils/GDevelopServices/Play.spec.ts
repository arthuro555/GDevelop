import {extractNextPageUriFromLinkHeader} from './Play';

// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
describe('Play service', () => {
// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  describe('extractNextPageUriFromLinkHeader', () => {
// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    test('it returns null if input is empty', () => {
      expect(extractNextPageUriFromLinkHeader('')).toBeNull();
    });
// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    test('it returns null if input is not compliant', () => {
      expect(
        extractNextPageUriFromLinkHeader('https://www.gd.games/ rel="next"')
      ).toBeNull();
    });
// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    test('it returns null if next link is not present', () => {
      expect(
        extractNextPageUriFromLinkHeader(
          '<https://www.gd.games/>; rel="prev", <https://www.gd.games/>; rel="home"'
        )
      ).toBeNull();
    });
// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    test('it returns URI if next link is present', () => {
      expect(
        extractNextPageUriFromLinkHeader(
          '<https://www.gd.games/>; rel="next", <https://www.gd.games/>; rel="home"'
        )
      ).toEqual('https://www.gd.games/');
    });
// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
    test('it returns URI with encoded query parameters', () => {
      expect(
        extractNextPageUriFromLinkHeader(
          '<https://www.gd.games/game/3723963b-4f27-4896-9d62-32b1b0adddd5/leaderboard/aa7a8a96-dcf5-405c-8844-f133bcf223c7/entries?after=%7B%22GSIRawSK%22%3A1.89%2C%22parentId%22%3A%22LID%23aa7a8a96-dcf5-405c-8844-f133bcf223c7%22%2C%22childId%22%3A%22LE%23497f82ec-3aba-4ff0-a001-07d7c128f890%22%7D&perPage=10&onlyBestEntry=false>; rel="next", <https://www.gd.games/>; rel="home"'
        )
      ).toEqual(
        'https://www.gd.games/game/3723963b-4f27-4896-9d62-32b1b0adddd5/leaderboard/aa7a8a96-dcf5-405c-8844-f133bcf223c7/entries?after=%7B%22GSIRawSK%22%3A1.89%2C%22parentId%22%3A%22LID%23aa7a8a96-dcf5-405c-8844-f133bcf223c7%22%2C%22childId%22%3A%22LE%23497f82ec-3aba-4ff0-a001-07d7c128f890%22%7D&perPage=10&onlyBestEntry=false'
      );
    });
  });
});
