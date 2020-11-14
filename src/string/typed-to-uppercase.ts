export interface TypedToUppercase {
  <STR extends string>(str: STR): Uppercase<STR>;
  (str: string): string;
}

/**
 * Typed version of `String.prototype.toUpperCase()`
 * Converts all the alphabetic characters in a string to uppercase.
 * @param str A string to transform
 * @example
 * // type is exact 'SOME STRING', not general string
 * const uppercased: 'SOME STRING' = typedToUppercase('Some string');
 */
export const typedToUppercase: TypedToUppercase = (str: string) => str.toUpperCase();
