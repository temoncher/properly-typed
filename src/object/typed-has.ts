import { Break, Paths } from './object-utils';

type ObjectByPath<
  PATH extends string,
  DELIMITER extends string,
> = Break<PATH, DELIMITER> extends [infer START, infer REST]
  ? START extends string
    ? REST extends string
      ? {
        [K in START]: REST extends ''
          ? unknown
          : ObjectByPath<REST, DELIMITER>
      }
      : never
    : never
  : never;

export type ObjectWithProperty<
  TARGET,
  PATH extends string,
  DELIMITER extends string,
> = PATH extends Paths<TARGET, DELIMITER>
  ? TARGET
  : TARGET & ObjectByPath<PATH, DELIMITER>;

/**
 * Typed `has` typeguard. Indicates if given object has a key located by path.
 * @param target Target object
 * @param path path to porperty
 * @param delimiter path delimiter, default is '/'
 * @example
 * ```
 * type Foo = { bar: { some: string } };
 *
 * const foo: Foo = {
 *   bar: {
 *     some: 'some'
 *   }
 * };
 *
 * if (typedHas(foo, 'cookie/jar')) {
 *   // some is of type `Foo & { cookie: { jar: unknown } }`
 *   const some = foo;
 * }
 * ```
 * @example
 * ```
 * type Foo = { bar: { some: string } };
 *
 * const foo: Foo = {
 *   bar: {
 *     some: 'some'
 *   }
 * };
 *
 * if (typedHas(foo, 'bar/some')) {
 *   // some is of type `Foo`
 *   const some = foo;
 * }
 * ```
 */
export const typedHas = <TARGET, PATH extends string, DELIMITER extends string = '/'>(
  target: TARGET,
  path: PATH,
  delimiter?: DELIMITER,
): target is ObjectWithProperty<TARGET, PATH, DELIMITER> => {
  if (!path) return true;

  const [currentSegment, ...rest] = path.split(delimiter || '/');

  if (!(currentSegment in target)) return false;

  const nextTarget = target[currentSegment as keyof typeof target];

  return typedHas(
    nextTarget,
    rest.join(delimiter),
    delimiter,
  );
};
