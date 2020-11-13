import { Minus, Manageble } from "./iterators";

export type Repeat<BASE extends string, COUNT extends number> = Manageble<COUNT> extends false
  ? string
  : COUNT extends 0
    ? ''
    : `${BASE}${Repeat<BASE, Minus<COUNT, 1>>}`;