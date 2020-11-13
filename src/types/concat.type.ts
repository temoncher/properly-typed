import { Length, Head, Tail } from "./array-utils";

export type Concat<B extends string, A> = A extends string
  ? `${B}${A}`
  : A extends any[]
      ? Head<A> extends string
        ? Length<A> extends 1
          ? Concat<B, Head<A>>
          : Concat<`${B}${Head<A>}`, Tail<A>>
        : never
      : never;