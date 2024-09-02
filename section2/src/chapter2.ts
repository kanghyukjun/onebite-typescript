// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "iam", "hyukjun"];

// generic 방식
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들 타입이 다양할 경우
// union 타입
let arr1: (number | string)[] = [1, "123"];
// generic 타입
let arr2: Array<number | string> = [1, "123"];

// 다차원 배열 타입 정의
// 꼭 자바처럼 하넹
let arr3: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플 타입
// 타입스크립트에서만 제공되는 타입
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3];
// tup1 = [1, "12"];
tup1.push(1); // push가 가능...?
tup1.pop(); // pop이 가능...? 조심해서 사용해야 함

let tup2: [number, string, boolean] = [1, "2", true];

const users: [string, number][] = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
  // [5, "최아무개"],
];
