import * as React from 'react';

type ChildrenProps = {
  buttonElement: HTMLElement | null | undefined,
  onClose: () => void
};

type Props = {
  children: (childrenProps: ChildrenProps) => React.ReactElement
};

export function PopoverButton({
  children,
}: Props) {
  const [buttonElement, setButtonElement] = React.useState(
    (null as HTMLElement | null | undefined)
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <button
        onClick={event => {
// @ts-expect-error - TS2345 - Argument of type 'EventTarget' is not assignable to parameter of type 'SetStateAction<HTMLElement | null | undefined>'.
          setButtonElement(event.target);
        }}
      >
        Click to open
      </button>
      {buttonElement &&
        children({
          buttonElement,
          onClose: () => setButtonElement(null),
        })}
    </React.Fragment>
  );
}
