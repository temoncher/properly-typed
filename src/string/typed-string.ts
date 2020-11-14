import { Concat } from '../types/concat.type';
import { Repeat } from '../types/repeat.type';
import { Slice } from '../types/slice.type';
import { SplittedString, typedSplit } from './split.type';
import { CharAt, StringLength } from './string-utils';
import { Substr, typedSubstr } from './typed-substr';
import { typedToLowercase } from './typed-to-lowercase';
import { typedToUppercase } from './typed-to-uppercase';
import { TrimmedString, typedTrim } from './typed-trim';

export class TypedString<STR extends string> {
  constructor(private readonly value: STR) {}

  charAt<POS extends number>(pos: POS): CharAt<STR, POS>
  charAt(pos: number): string {
    return this.value.charAt(pos);
  }

  concat<ARR extends string[]>(...strings: ARR): Concat<STR, ARR>
  concat(...strings: string[]): string {
    return this.value.concat(...strings);
  }

  repeat<COUNT extends number>(count: COUNT): Repeat<STR, COUNT>
  repeat(count: number): string {
    return this.value.repeat(count);
  }

  slice<START extends number = 0, END extends number = StringLength<STR>>(
    startIndex?: START,
    endIndex?: END,
  ): Slice<STR, START, END>
  slice(startIndex?: number, endIndex?: number): string {
    return this.value.slice(startIndex, endIndex);
  }

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
   * Typed version of `String.prototype.substr()`
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
   * Typed version of `String.prototype.toLowerCase()`
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
   * Typed version of `String.prototype.toUpperCase()`
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
