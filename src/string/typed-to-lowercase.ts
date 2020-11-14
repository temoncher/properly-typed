export interface TypedToLowercase {
  <STR extends string>(str: STR): Lowercase<STR>;
  (str: string): string;
}

/**
 * Typed version of `String.prototype.toLowerCase()`
 * @param str string to transform
 * @example
 * // type is exact 'some string', not general string
 * const lowercased: 'some string' = typedToLowercase('SoMe StRinG');
 */
export const typedToLowercase: TypedToLowercase = (str: string) => str.toLowerCase();