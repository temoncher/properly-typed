import { Manageble, Minus } from "./iterators";
import { StringHead, StringLength, StringTail } from "./string-utils";

export type Slice<
  BASE extends string,
  START extends number = 0,
  END extends number = StringLength<BASE>,
> = Manageble<START> extends false
  ? string
  : Manageble<END> extends false
    ? string
    : END extends StringLength<BASE>
      ? StringTail<BASE, START>
      : StringHead<StringTail<BASE, START>, Minus<END, START>>