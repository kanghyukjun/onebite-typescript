/**
 * 조건부 타입
 * 삼항연산자를 이용해 타입을 결정한다
 * 이걸 어따 써요?
 */

type A = number extends string ? string : number; // number 타입은 string의 서브 타입이 아니기때문에 false. 따라서 A는 number 타입이 된다

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string; // number, extends가 boolean 값을 리턴해주나?

/**
 * 제네릭과 조건부 타입
 */
type StringNumberSwitch<T> = T extends number ? string : number;

const numElement: StringNumberSwitch<string> = 1;
const strElement: StringNumberSwitch<number> = "1";

function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  }
  return undefined;
}

let result = removeSpaces("hi im hyukjun");
let result2 = removeSpaces(undefined);
