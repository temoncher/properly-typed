import { Calculatable, Minus } from './arithmetics';
import { StringHead, StringLength, StringTail } from '../string/string-utils';

export type Slice<
  BASE extends string,
  START extends number = 0,
  END extends number = StringLength<BASE>,
> = BASE extends `${infer _}`
  ? Calculatable<START> extends false
    ? string
    : Calculatable<END> extends false
      ? string
      : END extends StringLength<BASE>
        ? StringTail<BASE, START>
        : StringHead<StringTail<BASE, START>, Minus<END, START>>
  : string;
