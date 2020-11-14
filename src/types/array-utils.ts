export type ArrayTail<A extends any[]> = ((...args: A) => any) extends ((h: any, ...t: infer T) => any) ? T : never
export type ArrayHead<T> = T extends [infer U, ...any[]] ? U : never;
export type ArrayLength<T extends any[]> = T extends (infer _)[] & { length: infer L } ? L : never;
export type ArrayLast<T extends any[]> = T[ArrayLength<ArrayTail<T>>];
