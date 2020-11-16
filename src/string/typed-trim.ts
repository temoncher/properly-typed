export type TrimmedString<BASE extends string> = string extends BASE
  ? string
  : BASE extends `${' '}${infer REST}`
    ? TrimmedString<REST>
    : BASE extends `${infer START}${' '}`
      ? TrimmedString<START>
      : BASE;

export interface TypedTrim {
  <STR extends string>(str: STR): TrimmedString<STR>;
  (str: string): string;
}

/**
 * Typed version of `String.prototype.trim`
 * Removes the leading and trailing white space and line terminator characters from a string.
 * @param str A string to trim
 * @example
 * // type is exact 'some not trimmed  string', not general string
 * const trimmed: 'some not trimmed  string' = typedTrim('  some not trimmed  string  ');
 */
export const typedTrim: TypedTrim = (str: string) => str.trim();
