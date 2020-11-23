/* eslint-disable @typescript-eslint/no-unused-vars, unicorn/prevent-abbreviations */
import { typedGet } from '.';
import { Leaves, OutputType } from './object-utils';

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
  qool: {
    thingy: {
      d: ['lol'] as ['lol'],
    },
  },
};

const res = typedGet(somethingOther, 'qool/thingy/d');

type ComputedUnionType = Leaves<typeof something>;

type Z = { [K in ComputedUnionType]: OutputType<typeof something, K> };

/* type Z = {
    topProp: number;
    "foo/bar/str": string;
    "foo/bar/num": number;
    "some/prop": number;
  } */

const path: ComputedUnionType = 'foo/bar/str';
const some: OutputType<typeof something, 'foo/bar/str'> = null;
