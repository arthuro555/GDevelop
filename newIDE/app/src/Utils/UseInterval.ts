import { useEffect, useRef } from 'react';

/**
 * Creates an interval effect for a callback, with a specified delay.
 */
export const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef();

  useEffect(() => {
    // @ts-expect-error - TS2322 - Type '() => void' is not assignable to type 'undefined'.
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      // @ts-expect-error - TS2349 - This expression is not callable.
      if (savedCallback.current) savedCallback.current();
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
