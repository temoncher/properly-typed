import { Concat } from './types/concat.type';
import { Repeat } from './types/repeat.type';
import { Slice } from './types/slice.type';
import { Split } from './types/split.type';
import { CharAt, StringLength } from './types/string-utils';

export class TypedString<STR extends string> {
  constructor(private readonly value: STR) {}

  charAt = <POS extends number>(pos: POS): CharAt<STR, POS> => {
    return this.value.charAt(pos);
  }

  concat = <ARR extends string[]>(...strings: ARR): Concat<STR, ARR> => {
    return this.value.concat(...strings);
  }

  repeat = <COUNT extends number>(count: COUNT): Repeat<STR, COUNT> => {
    return this.value.repeat(count);
  }

  slice = <
    START extends number = 0,
    END extends number = StringLength<STR>
  >(
    startIndex?: START = 0,
    endIndex?: END = this.value.length,
  ): Slice<STR, START, END> => {
    return this.value.slice(startIndex, endIndex);
  }

  split = <SEP extends string | undefined = undefined>(separator?: SEP): Split<STR, SEP> => {
    return this.value.split()
  }
}

const str = 'lol, ';
const tString = new TypedString(str);

const chAt = tString.charAt(2);
const con = tString.concat('lets do some', ' !!! ', 'che cks');
const rep = tString.repeat(3);
const slice = tString.slice();
const split = tString.split('l');