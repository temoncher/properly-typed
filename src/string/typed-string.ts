import { Concat, typedConcat } from './typed-concat';
import { RepeatedString, typedRepeat } from './typed-repeat';
import { SlicedString, typedSlice } from './typed-slice';
import { SplittedString, typedSplit } from './typed-split';
import { StringLength } from './string-utils';
import { Substr, typedSubstr } from './typed-substr';
import { typedToLowercase } from './typed-to-lowercase';
import { typedToUppercase } from './typed-to-uppercase';
import { TrimmedString, typedTrim } from './typed-trim';
import { CharAt, typedCharAt } from './typed-char-at';

export class TypedString<STR extends string> {
  constructor(private readonly value: STR) {}

  /**
   * Typed version of `String.prototype.charAt`
   * Returns the character at the specified index.
   * @param pos The zero-based index of the desired character.
   * @example
   * const typedString = new TypedString('some string');
   * // type is exact 'e', not general string
   * const char1: 'e' = typedString.charAt(3);
   * // type is exact '', not general string
   * const char2: '' = typedString.charAt(15);
   */
  charAt<POS extends number>(pos: POS): CharAt<STR, POS>
  charAt(pos: number): string {
    return typedCharAt(this.value, pos);
  }

  /**
   * Typed version of `String.prototype.concat`
   * Returns a string that contains the concatenation of two or more strings.
   * @param strings The strings to append to the end of the string.
   * @example
   * const typedString = new TypedString('first');
   * // type is exact 'first secondthird', not general string
   * const concatenated: 'first secondthird' = typedString.concat(' ', 'second', 'third');
   */
  concat<ARR extends string[]>(...strings: ARR): Concat<STR, ARR>
  concat(...strings: string[]): string {
    return typedConcat(this.value, ...strings);
  }

  /**
   * Typed version of `String.prototype.repeat`
   * Returns a String value that is made from count copies appended together. If count is 0,
   * the empty string is returned.
   * @param count number of copies to append
   * @example
   * const typedString = new TypedString('bobby ');
   * // type is exact 'bobby bobby bobby ', not general string
   * const repeated1: 'bobby bobby bobby ' = typedString.repeat(3);
   * // type is exact '', not general string
   * const repeated2: '' = typedString.repeat(0);
   */
  repeat<COUNT extends number>(count: COUNT): RepeatedString<STR, COUNT>
  repeat(count: number): string {
    return typedRepeat(this.value, count);
  }

  /**
   * Typed version of `String.prototype.slice`
   * Returns a section of a string.
   * @param start The index to the beginning of the specified portion of stringObj.
   * @param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
   * If this value is not specified, the substring continues to the end of stringObj.
   * @example
   * const typedString = new TypedString('some string');
   * // type is exact 'e string', not general string
   * const slice1: 'e string' = typedString.slice(3);
   * // type is exact ' st', not general string
   * const slice2: ' st' = typedString.slice(4, 7);
   */
  slice<START extends number = 0, END extends number = StringLength<STR>>(
    startIndex?: START,
    endIndex?: END,
  ): SlicedString<STR, START, END>
  slice(startIndex?: number, endIndex?: number): string {
    return typedSlice(this.value, startIndex, endIndex);
  }

  /**
   * Typed version of `String.prototype.split`
   * Split a string into substrings using the specified separator and return them as an array.
   * @param separator An object that can split a string.
   * @param limit A value used to limit the number of elements returned in the array.
   * @example
   * const typedString = new TypedString('0,1,23,45,67,89');
   * // type is exact ['0', '1', '23', '45', '67', '89'], not general string[]
   * const split: ['0', '1', '23', '45', '67', '89'] = typedString.split(',');
   */
  split<SEP extends string | undefined = undefined>(
    separator?: SEP, // TODO: add support for regex and limit
  ): SplittedString<STR, SEP>
  split(
    separator: { [Symbol.split](string: string, limit?: number): string[] },
    limit?: number,
  ): string[] {
    return typedSplit(this.value, separator, limit);
  }

  /**
   * Typed version of `String.prototype.substr`
   * Gets a substring beginning at the specified location and having the specified length.
   * @param from The starting position of the desired substring. The index of the first character in the string is zero.
   * @param length The number of characters to include in the returned substring.
   * @example
   * const typedString = new TypedString('0123456789');
   * // type is exact '456', not general string
   * const substr1: '456' = typedString.substr(4);
   * // type is exact '234', not general string
   * const substr2: '234' = typedString.substr(2, 3);
   */
  substr<FROM extends number, LEN extends number | undefined = undefined>(
    from: FROM,
    length?: LEN,
  ): Substr<STR, FROM, LEN>
  substr(from: number, length?: number): string {
    return typedSubstr(this.value, from, length);
  }

  /**
   * Typed version of `String.prototype.toLowerCase`
   * Converts all the alphabetic characters in a string to lowercase.
   * @example
   * const typedString = new TypedString('SoMe StRinG');
   * // type is exact 'some string', not general string
   * const lowercased: 'some string' = typedString.toLowerCase();
   */
  toLowerCase(): Lowercase<STR>;
  toLowerCase(): string {
    return typedToLowercase(this.value);
  }

  /**
   * Typed version of `String.prototype.toUpperCase`
   * Converts all the alphabetic characters in a string to uppercase.
   * @example
   * const typedString = new TypedString('Some string');
   * // type is exact 'SOME STRING', not general string
   * const uppercased: 'SOME STRING' = typedString.toUpperCase();
   */
  toUpperCase(): Uppercase<STR>;
  toUpperCase(): string {
    return typedToUppercase(this.value);
  }

  /**
   * Typed version of `String.prototype.trim`
   * Removes the leading and trailing white space and line terminator characters from a string.
   * @example
   * const typedString = new TypedString('  some not trimmed  string  ');
   * // type is exact 'some not trimmed  string', not general string
   * const trimmed: 'some not trimmed  string' = typedString.trim();
   */
  trim(): TrimmedString<STR>;
  trim(): string {
    return typedTrim(this.value);
  }
}
