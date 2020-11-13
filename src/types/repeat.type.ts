import { Prev } from "./prev.type";

export type Repeat<BASE extends string, COUNT extends number> = Prev[COUNT] extends never
  ? string
  : COUNT extends 0
    ? ''
    : `${BASE}${Repeat<BASE, Prev[COUNT]>}`;