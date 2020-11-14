import { Minusable, MinusOne } from '@/types/arithmetics';

export type CharAt<
  BASE extends string,
  POS extends number = 0,
> = BASE extends `${infer _}`
  ? Minusable<POS> extends false
    ? string
    : BASE extends `${infer FIRST_CHARACTER}${infer REST}`
      ? POS extends 0
        ? FIRST_CHARACTER
        : CharAt<REST, MinusOne<POS>>
      : BASE extends ''
        ? ''
        : string
  : string;

export interface TypedCharAt {
  <STR extends string, POS extends number>(str: STR, pos: POS): CharAt<STR, POS>;
  (str: string, pos: number): string;
}

/**
 * Typed version of `String.prototype.charAt`
 * Returns the character at the specified index.
 * @param str
 * @param pos The zero-based index of the desired character.
 * @example
 * // type is exact 'e', not general string
 * const char1: 'e' = typedCharAt('some string', 3);
 * // type is exact '', not general string
 * const char2: '' = typedCharAt('short', 10);
 */
export const typedCharAt: TypedCharAt = (str: string, pos: number) => str.charAt(pos);
