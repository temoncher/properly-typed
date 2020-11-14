export interface TypedToUppercase {
  <STR extends string>(str: STR): Uppercase<STR>;
  (str: string): string;
}

/**
 * Typed version of `String.prototype.toUpperCase()`
 * @param str string to transform
 * @example
 * // type is exact 'SOME STRING', not general string
 * const uppercased: 'SOME STRING' = typedToUppercase('Some string');
 */
export const typedToUppercase: TypedToUppercase = (str: string) => str.toUpperCase();
