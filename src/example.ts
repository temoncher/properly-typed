import { Leaves } from './leaves.type';
import { OutputType } from './output-type.type';

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
const some: OutputType<typeof something, 'foo/bar/str'> = 'qf';
