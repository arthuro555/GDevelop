import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'react-dom'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/react-dom/index.js' implicitly has an 'any' type.
import ReactDOM from 'react-dom';
// @ts-expect-error - TS6142 - Module './ContextMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Menu/ContextMenu.tsx', but '--jsx' is not set.
import ContextMenu, { ContextMenuInterface } from './ContextMenu';
import { MenuItemTemplate } from './Menu.flow';

type Props = {
  element: React.ReactElement<any>,
  buildMenuTemplate: (i18n: I18nType) => Array<MenuItemTemplate>,
  openMenuWithSecondaryClick?: boolean,
  passExtraProps?: boolean
};

type State = Record<any, any>;

/**
 * Wrap an element and display a menu when `onClick` prop is called on the element.
 */

export default class ElementWithMenu extends React.Component<Props, State> {
  _contextMenu: ContextMenuInterface | null | undefined;
  _wrappedElement: any | null | undefined;

  open = (event?: Event) => {
    if (event && event.stopPropagation) event.stopPropagation();
    const { _contextMenu } = this;
    if (!_contextMenu) return;

    const node = ReactDOM.findDOMNode(this._wrappedElement);
    if (node instanceof HTMLElement) {
      const dimensions = node.getBoundingClientRect();

      _contextMenu.open(
        Math.round(dimensions.left + dimensions.width / 2),
        Math.round(dimensions.top + dimensions.height)
      );
    }
  };

  render() {
    const {
      element,
      buildMenuTemplate,
      openMenuWithSecondaryClick,
      passExtraProps,
      ...otherProps
    } = this.props;

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <React.Fragment>
        {React.cloneElement(element, {
          onContextMenu: this.open,
          // $FlowFixMe - Flow complaining about using too much spread operators
          ...(openMenuWithSecondaryClick ? {} : { onClick: this.open }),
// @ts-expect-error - TS7006 - Parameter 'wrappedElement' implicitly has an 'any' type.
          ref: wrappedElement => (this._wrappedElement = wrappedElement),
          ...(passExtraProps ? otherProps : {}),
        })}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ContextMenu
// @ts-expect-error - TS7006 - Parameter 'contextMenu' implicitly has an 'any' type.
          ref={contextMenu => (this._contextMenu = contextMenu)}
          buildMenuTemplate={buildMenuTemplate}
        />
      </React.Fragment>
    );
  }
}
