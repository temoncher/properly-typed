export type ArrayTail<
  A extends unknown[],
> = ((...args: A) => unknown) extends ((h: infer _, ...t: infer T) => unknown)
  ? T
  : never;
export type ArrayHead<T> = T extends [infer U, ...infer _]
  ? U
  : never;
export type ArrayElementType<
  T extends ReadonlyArray<unknown>,
> = T extends ReadonlyArray<infer ElementType>
  ? ElementType
  : never;
