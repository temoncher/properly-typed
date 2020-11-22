import { hasProp } from '@/guards/has-prop';

import { Leaves } from './leaves.type';
import { OutputType } from './output-type.type';

export const typedGet = <
  T extends Record<string, unknown>,
  P extends Leaves<T>,
  D extends string,
>(obj: T, path: P, delimiter: D): OutputType<T, P, D> => {
  const segments = path.split(delimiter);

  const result = segments.reduce<unknown>((output, segment) => {
    if (!hasProp(output, segment)) {
      throw new Error('Invalid path provided');
    }

    return output[segment];
  }, { ...obj });

  return result as OutputType<T, P, D>;
};
