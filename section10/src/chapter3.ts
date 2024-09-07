/**
 * Exclude
 */
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<string | boolean | number, boolean>;

/**
 * Extract
 */

type Extract<T, U> = U extends T ? U : never;

type B = Extract<string | boolean, string>;

/**
 * ReturnType
 */
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;

type C = ReturnType<() => string>;
