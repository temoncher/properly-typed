export type ArrayTail<
  A extends unknown[],
> = ((...parameters: A) => unknown) extends ((h: infer _, ...t: infer T) => unknown)
  ? T
  : never;
export type ArrayHead<T> = T extends [infer U, ...infer _]
  ? U
  : never;
export type ArrayElementType<
  T extends readonly unknown[],
> = T extends readonly (infer ElementType)[]
  ? ElementType
  : never;
