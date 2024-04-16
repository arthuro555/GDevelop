import * as React from 'react';

// https://reactjs.org/docs/hooks-faq.html#is-there-something-like-forceupdate
export default function useForceUpdate() {
  const [, updateState] = React.useState<any>();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  return forceUpdate;
}
