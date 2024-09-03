/**
 * 함수 오버로딩
 * 하나의 함수를 매개변수의 개수나 타입에 따라
 * 여러가지 버전으로 만드는 문법
 */

// 함수의 버전들을 말해줘야 한다
// 이렇게 구현부 없이 버전만 명시해준 것을 오버로드 시그니처라고 부른다.
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 작성
// 구현부는 구현 시그니처라고 부른다
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

func(1); // O
func(1, 2, 3); // O
