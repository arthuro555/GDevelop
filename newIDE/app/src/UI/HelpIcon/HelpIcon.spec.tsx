import React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'react-test-renderer'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/react-test-renderer/index.js' implicitly has an 'any' type.
import renderer from 'react-test-renderer';

import HelpIcon from '.';

describe('HelpIcon', () => {
  it('renders the icon linking to a help page', () => {
    const tree = renderer

      .create(<HelpIcon helpPagePath="/objects/tiled_sprite" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders nothing if the helpPagePath is empty', () => {
    const tree = renderer.create(<HelpIcon helpPagePath="" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
