import { PlusOne, ValidRecursionLap } from '@/arithmetics';

export type Join<K, P, D extends string = '/'> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : D}${P}`
    : never
  : never;

export type Break<T extends string, D extends string> = T extends `${infer F}${D}${infer _}`
  ? F extends `${infer _}${D}${infer _}`
    ? never
    : T extends `${F}${D}${infer R}`
      ? [F, R]
      : never
  : [T, ''];

export type OutputType<T, K extends string, D extends string = '/'> = string extends K
  ? never
  : string extends D
    ? never
    : string extends keyof T
      ? never
      : K extends ''
        ? T
        : Break<K, D> extends [infer F, infer R]
          ? F extends keyof T
            ? OutputType<T[F], Extract<R, string>, D>
            : never
          : never;

export type Leaves<
  T,
  D extends string = '/',
  ITERATION extends number = 0,
> = ITERATION extends ValidRecursionLap
  ? T extends Record<string, unknown>
    ? { [K in keyof T]-?: Join<K, Leaves<T[K], D, PlusOne<ITERATION>>, D> }[keyof T]
    : ''
  : string;

export type Paths<
  T,
  D extends string = '/',
  ITERATION extends number = 0,
> = ITERATION extends ValidRecursionLap
  ? T extends Record<string, unknown>
    ? keyof T | { [K in keyof T]-?: Join<K, Paths<T[K], D, PlusOne<ITERATION>>, D> }[keyof T]
    : never
  : string;
