import * as React from 'react';

type Props = {
  onSubmit: () => undefined | Promise<undefined>,
  autoComplete?: 'on' | 'off',
  name: string,
  children: React.ReactNode,
  fullWidth?: boolean
};

const Form = ({
  onSubmit,

  // Default to 'off' to avoid browser autofill.
  autoComplete = 'off',

  name,
  children,
  fullWidth,
}: Props) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <form
      onSubmit={event => {
        // Prevent browser to navigate on form submission.
        event.preventDefault();
        onSubmit();
      }}
      autoComplete={autoComplete}
      name={name}
      style={{ width: fullWidth ? '100%' : undefined }}
    >
      {children}
      {/*
        This input is needed so that the browser submits the form when
        Enter key is pressed. See https://stackoverflow.com/questions/4196681/form-not-submitting-when-pressing-enter
      */}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <input type="submit" value="Submit" style={{ display: 'none' }} />
    </form>
  );
};

export default Form;
