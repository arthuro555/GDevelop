import * as React from 'react';
import RaisedButton, { RaisedButtonPropsWithoutOnClick } from './RaisedButton';

import ElementWithMenu from './Menu/ElementWithMenu';
// @ts-expect-error - TS2307 - Cannot find module './Menu/Menu.flow' or its corresponding type declarations.
import { MenuItemTemplate } from './Menu/Menu.flow';

import { I18n as I18nType } from '@lingui/core';

// We support a subset of the props supported by Material-UI v0.x RaisedButton
// They should be self descriptive - refer to Material UI docs otherwise.
type Props = RaisedButtonPropsWithoutOnClick & {
  buildMenuTemplate: (i18n: I18nType) => Array<MenuItemTemplate>;
};

const shouldNeverBeCalled = () => {
  throw new Error('This RaisedButtonWithMenu onClick should never be called');
};

/**
 * A raised button based on Material-UI button, that has a menu displayed when clicked.
 */
const RaisedButtonWithMenu = (props: Props) => {
  const { buildMenuTemplate, ...otherProps } = props;

  return (
    <ElementWithMenu
      element={<RaisedButton {...otherProps} onClick={shouldNeverBeCalled} />}
      buildMenuTemplate={buildMenuTemplate}
    />
  );
};

export default RaisedButtonWithMenu;
