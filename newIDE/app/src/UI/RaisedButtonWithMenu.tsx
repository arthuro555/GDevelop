import * as React from 'react';
import RaisedButton, {
  RaisedButtonPropsWithoutOnClick,
// @ts-expect-error - TS6142 - Module './RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
} from './RaisedButton';
// @ts-expect-error - TS6142 - Module './Menu/ElementWithMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Menu/ElementWithMenu.tsx', but '--jsx' is not set.
import ElementWithMenu from './Menu/ElementWithMenu';
import { MenuItemTemplate } from './Menu/Menu.flow';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';

// We support a subset of the props supported by Material-UI v0.x RaisedButton
// They should be self descriptive - refer to Material UI docs otherwise.
type Props = (RaisedButtonPropsWithoutOnClick) & {
  buildMenuTemplate: (i18n: I18nType) => Array<MenuItemTemplate>
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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ElementWithMenu
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      element={<RaisedButton {...otherProps} onClick={shouldNeverBeCalled} />}
      buildMenuTemplate={buildMenuTemplate}
    />
  );
};

export default RaisedButtonWithMenu;
