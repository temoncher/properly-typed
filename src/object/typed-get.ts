import { typedHas } from '@/object/typed-has';
import { Paths, OutputType } from './object-utils';

export const typedGet = <
  T extends Record<string, unknown>,
  P extends Paths<T, D>,
  D extends string = '/',
>(target: T, path: P, delimiter?: D): OutputType<T, P, D> => {
  const segments = path.split(delimiter || '/');

  const result = segments.reduce<unknown>((output, segment) => {
    if (!typedHas(output, segment)) {
      throw new Error('Invalid path provided');
    }

    return output[segment];
  }, { ...target });

  return result as OutputType<T, P, D>;
};
