import * as React from 'react';
// @ts-expect-error - TS6142 - Module './BackgroundHighlighting' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/GenericExpressionField/BackgroundHighlighting.tsx', but '--jsx' is not set.
import BackgroundHighlighting from './BackgroundHighlighting';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'react-test-renderer'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/react-test-renderer/index.js' implicitly has an 'any' type.
import renderer from 'react-test-renderer';

// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
describe('BackgroundHighlighting', () => {
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('can render one highlight at the beginning', () => {
    const tree = renderer
      .create(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <BackgroundHighlighting
          value="Hello world"
          style={{}}
          highlights={[
            {
              begin: 0,
              end: 5,
              type: 'error',
              message: 'test highlight 1',
            },
          ]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('can render one highlight past the end', () => {
    const tree = renderer
      .create(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <BackgroundHighlighting
          value="Hello world"
          style={{}}
          highlights={[
            {
              begin: 5,
              end: 20,
              type: 'error',
              message: 'test highlight 1',
            },
          ]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('can render overlapping highlights', () => {
    const tree = renderer
      .create(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <BackgroundHighlighting
          value="Hello world"
          style={{}}
          highlights={[
            {
              begin: 2,
              end: 7,
              type: 'error',
              message: 'test highlight 1',
            },
            {
              begin: 1,
              end: 4,
              type: 'error',
              message: 'test highlight 2',
            },
          ]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
// @ts-expect-error - TS2582 - Cannot find name 'it'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  it('can render overlapping highlights on all the text', () => {
    const tree = renderer
      .create(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <BackgroundHighlighting
          value="Hello world"
          style={{}}
          highlights={[
            {
              begin: 2,
              end: 7,
              type: 'error',
              message: 'test highlight 1',
            },
            {
              begin: 1,
              end: 4,
              type: 'error',
              message: 'test highlight 2',
            },
            {
              begin: 1,
              end: 9,
              type: 'error',
              message: 'test highlight 3',
            },
            {
              begin: 7,
              end: 15,
              type: 'error',
              message: 'test highlight 4',
            },
            {
              begin: 9,
              end: 12,
              type: 'error',
              message: 'test highlight 5',
            },
          ]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
