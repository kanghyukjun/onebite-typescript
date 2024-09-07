/**
 * 분산적인 조건부 타입
 */
type StringNumberSwitch<T> = T extends string ? number : string;
let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>; // 우리가 알던 조건부 타입으로 동작하지 않는다

let d: StringNumberSwitch<number | string | boolean>;

/**
 * 실용적인 예제
 */
type Exclude<T, U> = T extends U ? never : T;
type A = Exclude<number | string | boolean, string>; // string 타입만 제거된 타입이 나온다

type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>;
