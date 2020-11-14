import { Concat } from '../types/concat.type';
import { Repeat } from '../types/repeat.type';
import { Slice } from '../types/slice.type';
import { Split } from '../types/split.type';
import { CharAt, StringLength } from '../types/string-utils';
import { Substr } from '../types/substr.type';
import { typedToLowercase } from './typed-to-lowercase';
import { typedToUppercase } from './typed-to-uppercase';
import { typedTrim } from './typed-trim';

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
  ): Split<STR, SEP>
  split(
    separator: { [Symbol.split](string: string, limit?: number): string[] },
    limit?: number,
  ): string[] {
    return this.value.split(separator, limit);
  }

  substr<FROM extends number, LEN extends number | undefined = undefined>(
    from: FROM,
    length?: LEN,
  ): Substr<STR, FROM, LEN>
  substr(from: number, length?: number): string {
    return this.value.substr(from, length);
  }

  /**
   * Typed version of `String.prototype.toLowerCase()`
   * @example
   * const typedString = new TypedString('SoMe StRinG');
   * // type is exact 'some string', not general string
   * const lowercased: 'some string' = typedString.toLowerCase();
   */
  toLowerCase() {
    return typedToLowercase(this.value);
  }

  /**
   * Typed version of `String.prototype.toUpperCase()`
   * @example
   * const typedString = new TypedString('Some string');
   * // type is exact 'SOME STRING', not general string
   * const uppercased: 'SOME STRING' = typedString.toUpperCase();
   */
  toUpperCase() {
    return typedToUppercase(this.value);
  }

  /**
   * Typed version of `String.prototype.trim`
   * @example
   * const typedString = new TypedString('  some not trimmed  string  ');
   * // type is exact 'some not trimmed  string', not general string
   * const trimmed: 'some not trimmed  string' = typedString.trim();
   */
  trim() {
    return typedTrim(this.value);
  }
}