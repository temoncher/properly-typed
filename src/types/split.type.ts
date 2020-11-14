import { StringToChars } from '../string/string-utils';

export type Split<BASE extends string, SEP extends string | undefined> = BASE extends `${infer _}`
  ? SEP extends undefined
    ? [BASE]
    : BASE extends `${infer FIRST_SEGMENT}${SEP}${infer _}`
      ? FIRST_SEGMENT extends `${infer _}${SEP}${infer _}`
        ? StringToChars<BASE> // Only fires when empty string is passed
        : BASE extends `${FIRST_SEGMENT}${SEP}${infer REST}`
          ? [FIRST_SEGMENT, ...Split<REST, SEP>]
          : never
      : [BASE] // Only fires when no separators left
  : string[];
