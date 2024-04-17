import ReactDOM from 'react-dom';

// If you're searching for button components,
// take a look at FlatButton or RaisedButton.

export type ButtonInterface = {
  focus: () => void;
};

/**
 * Focus a button. This won't display the material-ui Ripple effect
 * but is still better than nothing.
 */
export const focusButton = (button: ButtonInterface) => {
// @ts-expect-error - TS2345 - Argument of type 'ButtonInterface' is not assignable to parameter of type 'ReactInstance | null | undefined'.
  const element = ReactDOM.findDOMNode(button);
  if (element instanceof HTMLButtonElement) {
    element.focus();
  } else if (element instanceof HTMLElement) {
    const children = element.getElementsByTagName('button');
    if (
      children &&
      children.length &&
      children[0] instanceof HTMLButtonElement
    ) {
      children[0].focus();
    }
  }
};
