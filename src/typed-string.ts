import { CharAt } from './types/char-at.type';
import { Concat } from './types/concat.type';
import { Repeat } from './types/repeat.type';
import { Slice } from './types/slice.type';
import { StringLength } from './types/string-utils';

export class TypedString<STR extends string> {
  constructor(private readonly value: STR) {}

  charAt = <POS extends number>(pos: POS): CharAt<STR, POS> => {
    return this.value.charAt(pos) as CharAt<STR, POS>;
  }

  concat = <ARR extends string[]>(...strings: ARR): Concat<STR, ARR> => {
    return this.value.concat(...strings) as Concat<STR, ARR>;
  }

  repeat = <COUNT extends number>(count: COUNT): Repeat<STR, COUNT> => {
    return this.value.repeat(count) as Repeat<STR, COUNT>;
  }

  slice = <
    START extends number = 0,
    END extends number = StringLength<STR>
  >(
    startIndex?: START = 0,
    endIndex?: END = this.value.length,
  ): Slice<STR, START, END> => {
    return this.value.slice(startIndex, endIndex) as Slice<STR, START, END>;
  }
}

const tString = new TypedString('lol, ');

const chAt = tString.charAt(2);
const con = tString.concat('lets do some', ' !!! ', 'che cks');
const rep = tString.repeat(3);
const slice = tString.slice();