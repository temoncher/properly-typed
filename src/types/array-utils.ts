export type Tail<A extends any[]> = ((...args: A) => any) extends ((h: any, ...t: infer T) => any) ? T : never
export type Head<T> = T extends [infer U, ...any[]] ? U : never;
export type Length<T extends any[]> = T extends (infer _)[] & { length: infer L } ? L : never;
export type Last<T extends any[]> = T[Length<Tail<T>>];