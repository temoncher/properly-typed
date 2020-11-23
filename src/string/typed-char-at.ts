import { StringToChars } from './string-utils';

export type CharAt<
  BASE extends string,
  POS extends number = 0,
> = string extends BASE
  ? string
  : number extends POS
    ? string
    : StringToChars<BASE>[POS] extends infer CHAR
      ? CHAR extends undefined
        ? string
        : CHAR
      : string;

export type TypedCharAt = {
  <STR extends string, POS extends number>(baseString: STR, position: POS): CharAt<STR, POS>;
  (baseString: string, position: number): string;
};

/**
 * Typed version of `String.prototype.charAt`
 * Returns the character at the specified index.
 *
 * ! Can parse a string around 80 charactes maximum.
 *
 * @param baseString
 * @param position The zero-based index of the desired character.
 * @example
 * // type is exact 'e', not general string
 * const char1: 'e' = typedCharAt('some string', 3);
 * // type is exact '', not general string
 * const char2: '' = typedCharAt('short', 10);
 */
export const typedCharAt: TypedCharAt = (
  baseString: string,
  position: number,
) => baseString.charAt(position);
