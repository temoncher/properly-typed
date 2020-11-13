import { Prev, Next } from "./iterators";

export type StringLength<
  BASE extends string,
  ITERATION extends number = 0,
> = Next[ITERATION] extends never
  ? number
  : BASE extends `${infer _}${infer REST}`
    ? StringLength<REST, Next[ITERATION]>
    : ITERATION;

export type CharAt<
  BASE extends string,
  POS extends number = 0,
> = Prev[POS] extends never
  ? string
  : BASE extends `${infer FIRST_CHARACTER}${infer REST}`
    ? POS extends 0
      ? FIRST_CHARACTER
      : CharAt<REST, Prev[POS]>
    : ''

export type StringTail<
  BASE extends string,
  FROM extends number = 0,
  ITERATION extends number = 0,
> = Prev[FROM] extends never
  ? string
  : FROM extends 0
    ? BASE
    : BASE extends `${infer _}${infer REST}`
      ? ITERATION extends FROM
        ? REST
        : StringTail<REST, Prev[FROM], ITERATION>
      : ''

type sm = StringTail<'0123456', 1000>;