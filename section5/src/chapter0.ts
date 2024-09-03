/**
 * 인터페이스
 */
interface Person {
  name: string;
  age: number;
  // sayHi: () => void; // 함수 타입 표현식
  sayHi(): void; // 호출 시그니처
  sayHi(a: number, b: number): void;
}

type Type1 = number | string;
type Type2 = number & string;

// const person: Person = {
//   name: "강혁준",
//   age: 25,
// };
