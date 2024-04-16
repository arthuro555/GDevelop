import React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'react-test-renderer'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/react-test-renderer/index.js' implicitly has an 'any' type.
import renderer from 'react-test-renderer';
// @ts-expect-error - TS6142 - Module '.' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpIcon/index.tsx', but '--jsx' is not set.
import HelpIcon from '.';

// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
describe('HelpIcon', () => {
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('renders the icon linking to a help page', () => {
    const tree = renderer
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      .create(<HelpIcon helpPagePath="/objects/tiled_sprite" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('renders nothing if the helpPagePath is empty', () => {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    const tree = renderer.create(<HelpIcon helpPagePath="" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
