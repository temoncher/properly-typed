import { Break } from './break.type';

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
          : never
