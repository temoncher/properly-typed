import { StringToChars } from './string-utils';

export type SplittedString<
  BASE extends string,
  SEP extends string | undefined,
> = string extends BASE
  ? string[]
  : SEP extends undefined
    ? [BASE]
    : BASE extends `${infer FIRST_SEGMENT}${SEP}${infer _}`
      ? FIRST_SEGMENT extends `${infer _}${SEP}${infer _}`
        ? StringToChars<BASE> // Only fires when empty string is passed
        : BASE extends `${FIRST_SEGMENT}${SEP}${infer REST}`
          ? [FIRST_SEGMENT, ...SplittedString<REST, SEP>]
          : never
      : [BASE]; // Only fires when no separators left

export type TypedSplit = {
  <
    STR extends string,
    SEP extends string | undefined = undefined,
  >(
    baseString: STR,
    separator?: SEP, // TODO: add support for regex and limit
  ): SplittedString<STR, SEP>;
  (
    baseString: string,
    separator: { [Symbol.split]: (string: string, limit?: number) => string[] },
    limit?: number,
  ): string[];
};

/**
 * Typed version of `String.prototype.split`
 * Split a string into substrings using the specified separator and return them as an array.
 * @param baseString A string to split.
 * @param separator An object that can split a string.
 * @param limit A value used to limit the number of elements returned in the array.
 * @example
 * // type is exact ['0', '1', '23', '45', '67', '89'], not general string[]
 * const split: ['0', '1', '23', '45', '67', '89'] = typedSplit('0,1,23,45,67,89', ',');
 */
export const typedSplit: TypedSplit = (
  baseString: string,
  separator: { [Symbol.split]: (string: string, limit?: number) => string[] },
  limit?: number,
) => baseString.split(separator, limit);
