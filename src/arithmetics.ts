/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-shadow */
import { ArrayElementType } from '@/array/array-utils';

type MaxIterations = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  20,
];

type NumbersArray = [
  ...MaxIterations, 21, 22, 23, 24, 25, 26, 27, 28, 29,
  30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
  40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
  50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
  60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
  70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
  90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
  100,
];

type Previous = [
  -1,
  ...NumbersArray,
  ...never[],
];

type Next = NumbersArray extends [infer _, ...infer REST]
  ? [...REST, ...never[]]
  : never;

export type ValidRecursionLap = ArrayElementType<MaxIterations>;

export type ValidNumber = ArrayElementType<NumbersArray>;

export type PlusOne<N extends number> = N extends ValidNumber
  ? Next[N]
  : number;

export type MinusOne<N extends number> = N extends ValidNumber
  ? Previous[N]
  : number;

export type Plus<
  N extends number,
  A extends number,
  ITERATION extends number = 0,
> = ITERATION extends ValidRecursionLap
  ? N extends ValidNumber
    ? A extends ValidNumber
      ? ITERATION extends A
        ? N
        : Plus<PlusOne<N>, A, MinusOne<ITERATION>>
      : number
    : number
  : number;

export type Minus<
  N extends number,
  A extends number,
  ITERATION extends number = 0,
> = ITERATION extends ValidRecursionLap
  ? N extends ValidNumber
    ? A extends ValidNumber
      ? ITERATION extends A
        ? N
        : Minus<MinusOne<N>, A, PlusOne<ITERATION>>
      : number
    : number
  : number;
