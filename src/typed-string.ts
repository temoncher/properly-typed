import { Concat } from './types/concat.type';
import { Repeat } from './types/repeat.type';
import { Slice } from './types/slice.type';
import { Split } from './types/split.type';
import { CharAt, StringLength } from './types/string-utils';
import { Substr } from './types/substr.type';

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

  toLowerCase(): Lowercase<STR>
  toLowerCase(): string {
    return this.value.toLowerCase();
  }

  toUpperCase(): Uppercase<STR>
  toUpperCase(): string {
    return this.value.toUpperCase();
  }
}

const str = 'hey, 0123456, toWhAt?';
const tString = new TypedString(str);

const chAt = tString.charAt(3);
const con = tString.concat('lets do some', ' !!! ', 'che cks');
const rep = tString.repeat(5);
const slice = tString.slice();
const split = tString.split('l');
const substr = tString.substr(3, 56);
const lower = tString.toLowerCase();
const upper = tString.toUpperCase();