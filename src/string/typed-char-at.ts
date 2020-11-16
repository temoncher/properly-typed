import { ValidNumber } from '@/types/arithmetics';
import { StringToChars } from './string-utils';

export type CharAt<
  BASE extends string,
  POS extends number = 0,
> = BASE extends `${infer _}`
  ? POS extends ValidNumber
    ? StringToChars<BASE>[POS] extends infer CHAR
      ? CHAR extends undefined
        ? string
        : CHAR
      : string
    : string
  : string;

export interface TypedCharAt {
  <STR extends string, POS extends number>(str: STR, pos: POS): CharAt<STR, POS>;
  (str: string, pos: number): string;
}

/**
 * Typed version of `String.prototype.charAt`
 * Returns the character at the specified index.
 *
 * ! Can parse a string around 80 charactes maximum.
 *
 * @param str
 * @param pos The zero-based index of the desired character.
 * @example
 * // type is exact 'e', not general string
 * const char1: 'e' = typedCharAt('some string', 3);
 * // type is exact '', not general string
 * const char2: '' = typedCharAt('short', 10);
 */
export const typedCharAt: TypedCharAt = (str: string, pos: number) => str.charAt(pos);
