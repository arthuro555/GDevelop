export default function memoize<Input, Output>(func: (arg1: Input) => Output): (arg1: Input) => Output {
  const primitives = new Map<Input, Output>();
// @ts-expect-error - TS2344 - Type 'Input' does not satisfy the constraint 'object'.
  const objects = new WeakMap<Input, Output>();

  function cacheFor(input: Input) {
    const isObject = typeof input === 'object';
    return isObject ? objects : primitives;
  }

  return (input: Input): Output => {
    const cache = cacheFor(input);
    const cachedValue = cache.get(input);
    if (cachedValue) return cachedValue;

    const value = func(input);
    cache.set(input, value);
    return value;
  };
}
