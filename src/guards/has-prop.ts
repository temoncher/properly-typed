type ObjectWithProp<O, P extends string> = P extends keyof O
  ? O
  : O & { [K in P]: unknown };

export const hasProp = <T, P extends string>(
  anything: T,
  prop: P,
): anything is ObjectWithProp<T, P> => {
  if (typeof anything !== 'object') return false;

  if (!(prop in anything)) return false;

  return true;
};
