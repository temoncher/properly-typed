import { Join } from './join.type';
import { Prev } from './prev.type';

export type Leaves<T, D extends number = 10> = Prev[D] extends never
  ? never
  : [D] extends [never]
    ? never
    : T extends object
      ? { [K in keyof T]-?: Join<K, Leaves<T[K], Prev[D]>> }[keyof T]
      : '';
