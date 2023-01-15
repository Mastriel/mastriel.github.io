/**
 * A constructor of an object, used to identify it.
 *
 * @param T The object type.
 */
export type Type<T> = new (...args: any[]) => T