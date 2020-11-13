import { Leaves } from './types/leaves.type';
import { OutputType } from './types/output-type.type';
import { get } from './index';

const something = {
  foo: {
    bar: {
      num: 67,
      str: null,
    },
  },
  some: {
    prop: 12,
  },
  topProp: 25,
};

const somethingOther = {
  fooql: {
    barer: {
      num: 67,
      str: null,
    },
  },
  suck: {
    my: {
      D: ['lol'] as ['lol'],
    },
  },
};

const res = get(somethingOther, 'fooql/barer/str');

type ComputedUnionType = Leaves<typeof something>;
// type ComputedUnionType = "topProp" | "foo/bar/str" | "foo/bar/num" | "some/prop"

type Z = { [K in ComputedUnionType]: OutputType<typeof something, K> }

/* type Z = {
    topProp: number;
    "foo/bar/str": string;
    "foo/bar/num": number;
    "some/prop": number;
  } */

const path: ComputedUnionType = 'foo/bar/str';
const some: OutputType<typeof something, 'foo/bar/str'> = null;
