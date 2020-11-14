import { ArrayLength, ArrayHead, ArrayTail } from './array-utils';

export type Concat<B extends string, A> = A extends string
  ? `${B}${A}`
  : A extends string[]
      ? ArrayHead<A> extends string
        ? ArrayLength<A> extends 1
          ? Concat<B, ArrayHead<A>>
          : Concat<`${B}${ArrayHead<A>}`, ArrayTail<A>>
        : never
      : never;
