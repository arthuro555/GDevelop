import React from 'react';

type FocusOptions = {
  identifier: number;
  caretPosition?: number | null | undefined;
};

const useRefocusField = (fieldRefs: {
  current: {
    [identifier: number]: {
      readonly focus: (
        arg1?:
          | {
              caretPosition: 'end' | number | null | undefined;
            }
          | null
          | undefined
      ) => void;
    };
  };
}) => {
  const fieldToFocus = React.useRef<FocusOptions | null>(null);

  const setFieldToFocus = React.useCallback((options: FocusOptions) => {
    fieldToFocus.current = options;
  }, []);

  React.useLayoutEffect(() => {
    if (fieldToFocus.current) {
      const fieldRef = fieldRefs.current[fieldToFocus.current.identifier];
      if (fieldRef) {
        fieldRef.focus({ caretPosition: fieldToFocus.current.caretPosition });
      }
    }

    fieldToFocus.current = null;
  });

  return setFieldToFocus;
};

export default useRefocusField;
