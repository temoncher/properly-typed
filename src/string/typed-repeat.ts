import { MinusOne, ValidNumber } from '../arithmetics';

export type RepeatedString<
  BASE extends string,
  COUNT extends number,
> = string extends BASE
  ? string
  : COUNT extends 0
    ? BASE
    : COUNT extends ValidNumber
      ? `${BASE}${RepeatedString<BASE, MinusOne<COUNT>>}`
      : string;

export type TypedRepeat = {
  <STR extends string, COUNT extends number>(
    baseString: STR,
    count: COUNT,
  ): RepeatedString<STR, COUNT>;
  (baseString: string, count: number): string;
};

/**
 * Typed version of `String.prototype.repeat`
 * Returns a String value that is made from count copies appended together. If count is 0,
 * the empty string is returned.
 *
 * ! Can preserve type only when repeating less than 15 times
 *
 * @param baseString A string to repeat
 * @param count number of copies to append
 * @example
 * // type is exact 'bobby bobby bobby ', not general string
 * const repeated1: 'bobby bobby bobby ' = typedRepeat('bobby ', 3);
 * // type is exact '', not general string
 * const repeated2: '' = typedRepeat('bobby ', 0);
 */
export const typedRepeat: TypedRepeat = (
  baseString: string,
  count: number,
) => baseString.repeat(count);
