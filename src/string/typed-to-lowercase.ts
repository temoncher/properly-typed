export type TypedToLowercase = {
  <STR extends string>(baseString: STR): Lowercase<STR>;
  (baseString: string): string;
};

/**
 * Typed version of `String.prototype.toLowerCase`
 * Converts all the alphabetic characters in a string to lowercase.
 * @param baseString A string to transform
 * @example
 * // type is exact 'some string', not general string
 * const lowercased: 'some string' = typedToLowercase('SoMe StRinG');
 */
export const typedToLowercase: TypedToLowercase = (baseString: string) => baseString.toLowerCase();
