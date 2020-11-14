import { MinusOne, Minusable } from './arithmetics';

export type Repeat<BASE extends string, COUNT extends number> = BASE extends `${infer _}`
  ? Minusable<COUNT> extends false
    ? string
    : COUNT extends 0
      ? ''
      : `${BASE}${Repeat<BASE, MinusOne<COUNT>>}`
  : string;
