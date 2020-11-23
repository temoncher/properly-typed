type ObjectWithProperty<O, P extends string> = P extends keyof O
  ? O
  : O & { [K in P]: unknown };

export const hasProperty = <T, P extends string>(
  anything: T,
  property: P,
): anything is ObjectWithProperty<T, P> => {
  if (typeof anything !== 'object') return false;

  if (!(property in anything)) return false;

  return true;
};
