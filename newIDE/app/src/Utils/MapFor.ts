// Note: this file does not use export/imports and use Flow comments to allow its usage from Node.js

const mapFor = /*:: <T> */ (
  start: number /*: number */,
  end: number /*: number */,
  func: (arg1: number) => T /*: (number) => T */
) /*: Array<T> */ => {
  const result: Array<T> = [];
  for (let i = start; i < end; i++) {
    result.push(func(i));
  }
  return result;
};

const mapReverseFor = /*:: <T> */ (
  start: number /*: number */,
  end: number /*: number */,
  func: (arg1: number) => T /*: (number) => T */
) /*: Array<T> */ => {
  const result: Array<T> = [];
  for (let i = end - 1; i >= start; i--) {
    result.push(func(i));
  }
  return result;
};

/*flow-include
type CppVector<T> = {
  +size: () => number,
  +at: (number) => T,
}
*/

const mapVector = /*:: <T, U> */ (
  cppVector: CppVector<T> /*: CppVector<T> */,
  func: (arg1: T, arg2: number) => U /*: (T, number) => U */
) /*: Array<U> */ => {
  return mapFor(0, cppVector.size(), i => func(cppVector.at(i), i));
};

module.exports = {
  mapFor,
  mapReverseFor,
  mapVector,
};
