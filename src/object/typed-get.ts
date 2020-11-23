import { Paths, OutputType } from './object-utils';

/**
 * Typed version of `_.get`
 * {@link https://github.com/lodash/lodash/blob/master/get.js}
 * @param target target object
 * @param path path to property
 * @param delimiter path delimiter
 * @example
 * ```
 * const some = {
 *   foo: {
 *     bar: 12,
 *     bar2: 54,
 *   },
 *   smth: 'something',
 * } as const;
 *
 * // path types are derived from first argument
 * // second argument can only be of type `'foo' | 'foo/bar' | 'foo/bar2' | 'smth'`
 * const smth = typedGet(some, 'smth')
 *
 * // return type is determined by provided path
 * // bar is of type `readonly 12`
 * const bar = typedGet(some, 'foo/bar')
 * // bar is of type `readonly 54`
 * // based on delimiter type, path type is `'foo' | 'foo.bar' | 'foo.bar2' | 'smth'`
 * const bar2 = typedGet(some, 'foo.bar2', '.')
 * ```
 */
export const typedGet = <
  T extends Record<string, unknown>,
  P extends Paths<T, D>,
  D extends string = '/',
>(target: T, path: P, delimiter?: D): OutputType<T, P, D> => {
  if (!path) {
    return target as OutputType<T, P, D>;
  }

  const [currentSegment, ...rest] = path.split(delimiter || '/');

  if (!(currentSegment in target)) {
    throw new Error('Path is invalid');
  }

  const nextTarget = target[currentSegment];

  return typedGet(
    nextTarget as Record<string, unknown>,
    rest.join(delimiter),
    delimiter,
  );
};
