// @ts-expect-error - TS6142 - Module './PublicGameProperties' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/PublicGameProperties.tsx', but '--jsx' is not set.
import {cleanUpGameSlug} from './PublicGameProperties';

// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
describe('cleanUpGameSlug', () => {
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('should replace space characters with dashes and lowercase everything', () => {
    expect(cleanUpGameSlug('Turtle Mutant Ninja Turtle')).toEqual(
      'turtle-mutant-ninja-turtle'
    );
  });
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('should cut off to a maximal length', () => {
    expect(
      cleanUpGameSlug('turtle-mutant-ninja-turtle-the-return-of-the-rat')
    ).toEqual('turtle-mutant-ninja-turtle-the');
  });
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('should replace cyrillic characters with latin ones', () => {
    expect(cleanUpGameSlug('БГДЖЗИЙЛПФЦЧШЩЫЭЮЯбвгджзийклмн')).toEqual(
      'bgdzhzijlpftschshshchyeyuyabvg'
    );
    expect(cleanUpGameSlug('птфцчшщыэюя')).toEqual('ptftschshshchyeyuya');
  });
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('should complete the slug with dashes if the input is not long enough', () => {
    expect(cleanUpGameSlug('TMNT')).toEqual('tmnt--');
  });
});
