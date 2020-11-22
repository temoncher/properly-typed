import {
  MinusOne,
  ValidNumber,
} from '../arithmetics';

/**
  * Transforms string into array of chars
  *
  * ! Warn:
  * Recursion limits doesn't allow us to handle
  * strings of more than 14 characters so workaround is
  * to break string into larger chunks for now.
  * This way we can allow string around 80 characters
  */
export type StringToChars<BASE extends string> = string extends BASE
  ? string[]
  : BASE extends `${infer C0}${infer C1}${infer C2}${infer C3}${infer C4}${infer C5}${infer REST}`
    ? [C0, C1, C2, C3, C4, C5, ...StringToChars<REST>]
    : BASE extends `${infer C0}${infer C1}${infer C2}${infer C3}${infer REST}`
      ? [C0, C1, C2, C3, ...StringToChars<REST>]
      : BASE extends `${infer C0}${infer REST}`
        ? [C0, ...StringToChars<REST>]
        : [];

export type StringLength<BASE extends string> = string extends BASE
  ? number
  : StringToChars<BASE>['length'];

export type StringHead<
  BASE extends string,
  TO extends number = StringLength<BASE>,
  HEAD extends string = '',
> = string extends BASE
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
> = string extends BASE
  ? string
  : FROM extends ValidNumber
    ? FROM extends 0
      ? BASE
      : BASE extends `${infer _}${infer REST}`
        ? ITERATION extends FROM
          ? REST
          : StringTail<REST, MinusOne<FROM>, ITERATION>
        : ''
    : string;
