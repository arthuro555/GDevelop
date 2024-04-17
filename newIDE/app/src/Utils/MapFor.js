// Note: this file does not use export/imports and use Flow comments to allow its usage from Node.js

/**
 * @template {T}
 * @param {number} start
 * @param {number} end
 * @param {(number) => T} func
 * @returns {T[]}
 */
const mapFor = (start, end, func) => {
  /** @type {T[]} */
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(func(i));
  }
  return result;
};

/**
 * @template {T}
 * @param {number} start
 * @param {number} end
 * @param {(number) => T} func
 * @returns {T[]}
 */
const mapReverseFor = (start, end, func) => {
  const result = [];
  for (let i = end - 1; i >= start; i--) {
    result.push(func(i));
  }
  return result;
};

/**
 * @typedef CppVector
 * @template {T}
 * @property {() => number} size
 * @property {(index: number) => T}
 */

/**
 * @template {T}
 * @template {U}
 * @param {CppVector<T>} cppVector
 * @param {(arg1: T, arg2: number) => U} func
 * @returns {U[]}
 */
const mapVector = /*:: <T, U> */ (cppVector, func) => {
  return mapFor(0, cppVector.size(), (i) => func(cppVector.at(i), i));
};

module.exports = {
  mapFor,
  mapReverseFor,
  mapVector,
};
