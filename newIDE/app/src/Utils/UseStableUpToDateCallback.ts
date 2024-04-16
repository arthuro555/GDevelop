import * as React from 'react';

/**
 * Wrap a callback into a function that will always be stable across render,
 * and will always call the latest version of the callback. This avoid the issue
 * of calling a stale callback function after some asynchronous work (i.e: after a `await`,
 * a component could risk calling a stale callback, but not with this hook).
 */
export function useStableUpToDateCallback<ReturnType, ArgTypes>(callback: (...args: ArgTypes[]) => ReturnType): (...args: ArgTypes[]) => ReturnType {
  const callbackRef = React.useRef<() => ReturnType>(callback);

  // Whenever the callback changes, store the latest version in a ref.
  React.useEffect(
    () => {
      callbackRef.current = callback;
    },
    [callback]
  );

  // This function will never change, but will always call the latest
  // callback that was created in a render, so it's fine to call it even
  // from an asynchronous function.
// @ts-expect-error - TS7019 - Rest parameter 'args' implicitly has an 'any[]' type.
  const stableCallback = React.useCallback((...args) => {
// @ts-expect-error - TS2556 - A spread argument must either have a tuple type or be passed to a rest parameter.
    return callbackRef.current(...args);
  }, []);

  return stableCallback;
}

/**
 * Wrap an object, possibly from useState, in a ref that contains always
 * the latest version of the object (i.e: the object at the latest render).
 */
export function useStableUpToDateRef<ObjectType>(object: ObjectType): {
  current: ObjectType
} {
  const objectRef = React.useRef<ObjectType>(object);
  React.useEffect(
    () => {
      objectRef.current = object;
    },
    [object]
  );

  return objectRef;
}
