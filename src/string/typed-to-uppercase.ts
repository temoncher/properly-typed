export type TypedToUppercase = {
  <STR extends string>(baseString: STR): Uppercase<STR>;
  (baseString: string): string;
};

/**
 * Typed version of `String.prototype.toUpperCase`
 * Converts all the alphabetic characters in a string to uppercase.
 * @param baseString A string to transform
 * @example
 * // type is exact 'SOME STRING', not general string
 * const uppercased: 'SOME STRING' = typedToUppercase('Some string');
 */
export const typedToUppercase: TypedToUppercase = (baseString: string) => baseString.toUpperCase();
