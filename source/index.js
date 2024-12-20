import { is } from '@yurkimus/types'

/**
 * Returns a curried version of a function.
 *
 * @param {Function} predicate
 * @param {number} length
 *
 * @throws {TypeError} "predicate" must be a function
 * @throws {TypeError} "length" must be a number
 *
 * @example
 * ```javascript
 * let add = (a, b) => a + b
 *
 * curry(add)(1)(2) // => 3
 * ```
 */
export let curry = (predicate, length = predicate.length) => {
  if (typeof predicate !== 'function')
    throw new TypeError(`Parameter 'predicate' must be a function.`)

  if (!is('Number', length))
    throw new TypeError(`Parameter 'length' must be a number.`)

  return (...parameters) =>
    parameters.length >= length
      ? predicate(...parameters)
      : curry(predicate.bind(null, ...parameters), length - parameters.length)
}
