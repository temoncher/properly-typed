import { StringLength, StringTail } from './string-utils';

export type Substr<
  BASE extends string,
  FROM extends number,
  LEN extends number | undefined = undefined,
  RES extends string = '',
> = BASE extends `${infer _}`
  ? FROM extends 0
    ? LEN extends undefined
      ? BASE
      : StringLength<RES> extends LEN
        ? RES
        : BASE extends `${infer FIRST_CHAR}${infer REST}`
          ? Substr<StringTail<REST, FROM>, 0, LEN, `${RES}${FIRST_CHAR}`>
          : RES
    : Substr<StringTail<BASE, FROM>, 0, LEN, RES>
  : string;
