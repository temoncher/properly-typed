import { Calculatable, Minus } from '../types/arithmetics';
import { StringHead, StringLength, StringTail } from './string-utils';

export type SlicedString<
  BASE extends string,
  START extends number = 0,
  END extends number = StringLength<BASE>,
> = BASE extends `${infer _}`
  ? Calculatable<START> extends false
    ? string
    : Calculatable<END> extends false
      ? string
      : END extends StringLength<BASE>
        ? StringTail<BASE, START>
        : StringHead<StringTail<BASE, START>, Minus<END, START>>
  : string;

export interface TypedSlice {
  <
    STR extends string,
    START extends number = 0,
    END extends number = StringLength<STR>
  >(
    str: STR,
    startIndex?: START,
    endIndex?: END,
  ): SlicedString<STR, START, END>;
  (str: string, startIndex?: number, endIndex?: number): string;
}

/**
 * Typed version of `String.prototype.slice`
 * Returns a section of a string.
 * @param str A string to slice from
 * @param start The index to the beginning of the specified portion of stringObj.
 * @param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
 * If this value is not specified, the substring continues to the end of stringObj.
 * @example
 * // type is exact 'e string', not general string
 * const slice1: 'e string' = typedSlice('some string', 3);
 * // type is exact ' st', not general string
 * const slice2: ' st' = typedSlice('some string', 4, 7);
 */
export const typedSlice: TypedSlice = (
  str: string,
  startIndex?: number,
  endIndex?: number,
) => str.slice(startIndex, endIndex);
