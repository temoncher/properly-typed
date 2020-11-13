import { CharAt } from './types/char-at.type';
import { Concat } from './types/concat.type';
import { Repeat } from './types/repeat.type';

export class TypedString<LITERAL extends string> {
  constructor(private readonly value: LITERAL) {}

  charAt = <POS extends number>(pos: POS): CharAt<LITERAL, POS> => {
    return this.value.charAt(pos) as CharAt<LITERAL, POS>;
  }

  concat = <ARR extends string[]>(...strings: ARR): Concat<LITERAL, ARR> => {
    return this.value.concat(...strings) as Concat<LITERAL, ARR>;
  }

  repeat = <COUNT extends number>(count: COUNT): Repeat<LITERAL, COUNT> => {
    return this.value.repeat(count) as Repeat<LITERAL, COUNT>;
  }

  slice = <START extends number, END extends number>(startIndex?: START, endIndex?: END) => {
    return this.value.slice(startIndex, endIndex);
  }
}

const tString = new TypedString('lol, ');

const gj = 'lol'.concat('bruh', ' ', 'nu i nahui')

const chAt = tString.charAt(2);
const con = tString.concat('bruh', ' ', 'nu i nahui');
const rep = tString.repeat(3);
const slice = tString.slice();