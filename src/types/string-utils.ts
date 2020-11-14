import { PlusOne, Plusable, MinusOne, Minusable } from './iterators';

export type StringLength<
  BASE extends string,
  ITERATION extends number = 0,
> = BASE extends `${infer _}`
  ? Plusable<ITERATION> extends false
    ? number
    : BASE extends `${infer _}${infer REST}`
      ? StringLength<REST, PlusOne<ITERATION>>
      : ITERATION
  : number;

export type CharAt<
  BASE extends string,
  POS extends number = 0,
> = BASE extends `${infer _}`
  ? Minusable<POS> extends false
    ? string
    : BASE extends `${infer FIRST_CHARACTER}${infer REST}`
      ? POS extends 0
        ? FIRST_CHARACTER
        : CharAt<REST, MinusOne<POS>>
      : BASE extends ''
        ? ''
        : string
  : string;

export type StringHead<
  BASE extends string,
  TO extends number = StringLength<BASE>,
  HEAD extends string = '',
> = BASE extends `${infer _}`
  ? StringLength<HEAD> extends TO
    ? HEAD
    : BASE extends `${infer FIRST_CHAR}${infer REST}`
      ? StringHead<REST, TO, `${HEAD}${FIRST_CHAR}`>
      : `${HEAD}${BASE}`
  : string;

export type StringTail<
  BASE extends string,
  FROM extends number = 0,
  ITERATION extends number = 0,
> = BASE extends `${infer _}`
  ? Minusable<FROM> extends false
    ? string
    : FROM extends 0
      ? BASE
      : BASE extends `${infer _}${infer REST}`
        ? ITERATION extends FROM
          ? REST
          : StringTail<REST, MinusOne<FROM>, ITERATION>
        : ''
  : string;

export type StringToChars<BASE extends string> = BASE extends `${infer _}`
  ? BASE extends `${infer FIRST_CHAR}${infer REST}`
    ? [FIRST_CHAR, ...StringToChars<REST>]
    : []
  : string[]
