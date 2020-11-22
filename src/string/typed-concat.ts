import { ArrayHead, ArrayTail } from '@/array/array-utils';

export type Concat<BASE extends string, A> = string extends BASE
  ? string
  : A extends string // TODO: investigate if this check is necessary
    ? `${BASE}${A}`
    : A extends string[]
      ? ArrayHead<A> extends string
        ? A['length'] extends 1
          ? Concat<BASE, ArrayHead<A>>
          : Concat<`${BASE}${ArrayHead<A>}`, ArrayTail<A>>
        : never
      : never;

export interface TypedConcat {
  <STR extends string, ARR extends string[]>(str: STR, ...strings: ARR): Concat<STR, ARR>;
  (str: string, ...strings: string[]): string;
}

/**
 * Typed version of `String.prototype.concat`
 * Returns a string that contains the concatenation of two or more strings.
 *
 * ! Can preserve type only when concatenating with around 10 strings
 *
 * @param str A string to concat with
 * @param strings The strings to append to the end of the string.
 * @example
 * // type is exact 'first secondthird', not general string
 * const concatenated: 'first secondthird' = typedConcat('first', ' ', 'second', 'third');
 */
export const typedConcat: TypedConcat = (
  str: string,
  ...strings: string[]
): string => str.concat(...strings);
