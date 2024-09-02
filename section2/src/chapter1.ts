// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

num1.toFixed();

// string
let str1: string = "hello";
let str2: string = "hello";
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

str1.toUpperCase();

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// 문제
// let numA: number = null; // strict null checks를 false로 설정하면 임시로 null 가능

// 리터럴 타입
// 값 그 자체가 타입이 된다
// 리터럴은 값이라는 뜻
// 리터럴 타입을 지금 사용할 일은 없지만 이후에 복합적인 타입을 만들때 매우 유용하게 사용이 된다
let numA: 10 = 10;
// numA = 12;

let strA: "hello" = "hello";
// strA = "heold";
