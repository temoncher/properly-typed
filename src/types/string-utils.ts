import { Plus, Minus, Manageble } from "./iterators";

export type StringLength<
  BASE extends string,
  ITERATION extends number = 0,
> = Manageble<ITERATION> extends false
  ? number
  : BASE extends `${infer _}${infer REST}`
    ? StringLength<REST, Plus<ITERATION, 1>>
    : ITERATION;

export type CharAt<
  BASE extends string,
  POS extends number = 0,
> = Manageble<POS> extends false
  ? string
  : BASE extends `${infer FIRST_CHARACTER}${infer REST}`
    ? POS extends 0
      ? FIRST_CHARACTER
      : CharAt<REST, Minus<POS, 1>>
    : BASE extends ''
      ? ''
      : string

export type StringHead<
  BASE extends string,
  TO extends number = StringLength<BASE>,
  HEAD extends string = '',
> = Manageble<StringLength<HEAD>> extends false
  ? string
  : StringLength<HEAD> extends TO
    ? HEAD
    : BASE extends `${infer FIRST_CHAR}${infer REST}`
      ? StringHead<REST, TO, `${HEAD}${FIRST_CHAR}`>
      : `${HEAD}${BASE}`;

export type StringTail<
  BASE extends string,
  FROM extends number = 0,
  ITERATION extends number = 0,
> = Manageble<FROM> extends false
  ? string
  : FROM extends 0
    ? BASE
    : BASE extends `${infer _}${infer REST}`
      ? ITERATION extends FROM
        ? REST
        : StringTail<REST, Minus<FROM, 1>, ITERATION>
      : ''

export type StringToChars<BASE extends string> = BASE extends `${infer _}`
  ? BASE extends `${infer FIRST_CHAR}${infer REST}`
    ? [FIRST_CHAR, ...StringToChars<REST>]
    : []
  : string[]

type sm = StringToChars<'lol keke, qgt'>