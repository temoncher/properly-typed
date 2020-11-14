import { Join } from './join.type';
import { MinusOne } from './iterators';

export type Leaves<T, D extends number = 10> = MinusOne<D> extends never
  ? never
  : [D] extends [never]
    ? never
    : T extends object
      ? { [K in keyof T]-?: Join<K, Leaves<T[K], MinusOne<D>>> }[keyof T]
      : '';
