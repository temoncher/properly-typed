import { Prev } from "./iterators";
import { StringLength, StringTail } from "./string-utils";

export type Slice<
  BASE extends string,
  START extends number = 0,
  END extends number = StringLength<BASE>,
> = Prev[START] extends undefined
  ? string
  : Prev[END] extends undefined
    ? string
    : END extends StringLength<BASE>
      ? StringTail<BASE, START>
      :

type sm = Slice<'0123456', 3>