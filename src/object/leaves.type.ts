import { Join } from './join.type';
import { MinusOne } from '../arithmetics';

export type Leaves<T, D extends number = 10> = MinusOne<D> extends never
  ? never
  : [D] extends [never]
    ? never
    : T extends Record<string, unknown>
      ? { [K in keyof T]-?: Join<K, Leaves<T[K], MinusOne<D>>> }[keyof T]
      : '';
