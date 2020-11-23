/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-shadow */
export type Break<T extends string, D extends string> = T extends `${infer F}${D}${infer _}`
  ? F extends `${infer _}${D}${infer _}`
    ? never
    : T extends `${F}${D}${infer R}`
      ? [F, R]
      : never
  : [T, ''];
