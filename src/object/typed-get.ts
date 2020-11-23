import { hasProperty } from '@/guards/has-propoperty';

import { Leaves } from './leaves.type';
import { OutputType } from './output-type.type';

export const typedGet = <
  T extends Record<string, unknown>,
  P extends Leaves<T>,
  D extends string,
>(target: T, path: P, delimiter: D): OutputType<T, P, D> => {
  const segments = path.split(delimiter);

  const result = segments.reduce<unknown>((output, segment) => {
    if (!hasProperty(output, segment)) {
      throw new Error('Invalid path provided');
    }

    return output[segment];
  }, { ...target });

  return result as OutputType<T, P, D>;
};
