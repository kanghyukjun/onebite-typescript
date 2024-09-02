// any
// 특정 변수의 타입을 우리가 정확히 모를 때
// 모든 타입의 값을 할당받을 수 있고 모든 타입에 값을 할당할 수 있다
// any타입을 사용하면 js를 사용할 때와 마찬가지로 런타임에러에서 확인
// 사실상 타입스크립트에서의 이점을 포기하는 것과 동일하다
// any 타입은 가능한 한 사용하지 않는 것이 좋다
let anyVar: any = 10;
anyVar = "hello";

let unknownVar: unknown;
unknownVar = "";
unknownVar = 10;
unknownVar = () => {};

// let num: number = unknownVar;
// 타입 정제
if (typeof unknownVar === "number") {
  unknownVar.toFixed();
}
