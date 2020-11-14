import { StringToChars } from './string-utils';

export type SplittedString<BASE extends string, SEP extends string | undefined> = BASE extends `${infer _}`
  ? SEP extends undefined
    ? [BASE]
    : BASE extends `${infer FIRST_SEGMENT}${SEP}${infer _}`
      ? FIRST_SEGMENT extends `${infer _}${SEP}${infer _}`
        ? StringToChars<BASE> // Only fires when empty string is passed
        : BASE extends `${FIRST_SEGMENT}${SEP}${infer REST}`
          ? [FIRST_SEGMENT, ...SplittedString<REST, SEP>]
          : never
      : [BASE] // Only fires when no separators left
  : string[];

export interface TypedSplit {
  <
    STR extends string,
    SEP extends string | undefined = undefined
  >(
    str: STR,
    separator?: SEP, // TODO: add support for regex and limit
  ): SplittedString<STR, SEP>;
  (
    str: string,
    separator: { [Symbol.split](string: string, limit?: number): string[] },
    limit?: number,
  ): string[];
}

export const typedSplit: TypedSplit = (
  str: string,
  separator: { [Symbol.split](string: string, limit?: number): string[] },
  limit?: number,
) => str.split(separator, limit);
