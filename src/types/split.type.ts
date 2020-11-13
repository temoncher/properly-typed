export type Split<BASE extends string, SEP extends string | undefined> = SEP extends undefined
  ? [BASE]
  : BASE extends `${infer FIRST_SEGMENT}${SEP}${infer _}`
    ? FIRST_SEGMENT extends `${infer _}${SEP}${infer _}`
      ? never
      : BASE extends `${FIRST_SEGMENT}${SEP}${infer REST}`
        ? [FIRST_SEGMENT, ...Split<REST, SEP>]
        : never
    : BASE extends `${infer _}`
      ? [BASE]
      : string[];