import * as React from 'react';

export type UnsavedChanges = {
  hasUnsavedChanges: boolean,
  sealUnsavedChanges: () => void,
  triggerUnsavedChanges: () => void
};

const initialState: UnsavedChanges = {
  hasUnsavedChanges: false,
  sealUnsavedChanges: () => {},
  triggerUnsavedChanges: () => {},
};

const UnsavedChangesContext = React.createContext<UnsavedChanges>(initialState);

export default UnsavedChangesContext;

type Props = {
  children?: React.ReactNode
};

export const UnsavedChangesContextProvider = (props: Props) => {
  const [hasUnsavedChanges, setHasUnsavedChanges] = React.useState<boolean>(false);
  const triggerUnsavedChanges = (): void => {
    if (!hasUnsavedChanges) setHasUnsavedChanges(true);
  };

  const sealUnsavedChanges = (): void => {
    if (hasUnsavedChanges) setHasUnsavedChanges(false);
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <UnsavedChangesContext.Provider
      value={{
        hasUnsavedChanges,
        triggerUnsavedChanges: triggerUnsavedChanges,
        sealUnsavedChanges: sealUnsavedChanges,
      }}
    >
      {props.children}
    </UnsavedChangesContext.Provider>
  );
};
