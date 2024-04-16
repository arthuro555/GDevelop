import {useRef} from 'react';

const useValueWithInit = <T>(init: () => T): T => {
  const instanceRef = useRef<T | null>(null);

  let instance = instanceRef.current;
  if (instance !== null) return instance;
  // Lazily create the ref object.
  let newInstance = init();
  instanceRef.current = newInstance;
  return newInstance;
};

export default useValueWithInit;

export const useRefWithInit = <T>(init: () => T): {
  current: T
} => {
  const instanceRef = useRef<T | null>(null);

  let instance = instanceRef.current;
  if (instance !== null)
// @ts-expect-error - TS2322 - Type 'MutableRefObject<T | null>' is not assignable to type '{ current: T; }'.
    return instanceRef;

  // Lazily create the ref object.
  let newInstance = init();
  instanceRef.current = newInstance;
// @ts-expect-error - TS2322 - Type 'MutableRefObject<T | null>' is not assignable to type '{ current: T; }'.
  return instanceRef;
};
