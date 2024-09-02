/**
 * Unknown 타입
 */
function unknownExam() {
  // 업캐스팅
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  // 다운캐스팅
  // let unknownVar: unknown;
  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool:boolean = unknownVar
}

/**
 * Never 타입
 * 공집합을 의미한다
 */
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  // 업캐스팅
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 다운캐스팅
  // let never1: never = 1;
  // let never2: never = "string";
  // let never3: never = true;
}

/**
 * Void 타입
 */
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
  }

  let voidVar: void = undefined;
  // let undefinedVar: undefined = voidVar;
}

/**
 * Any 타입
 * Any 타입은 타입 계층도를 완전히 무시한다
 * Any 타입은 모든 타입의 슈퍼 타입으로 위치하기도 하고
 * 동시에 모든 타입의 서브 타입으로 위치하기도 한다 (단 Never 제외)
 */
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  // 서브 타입인데 어떻게 가능하지?
  // any 타입에 한해서는 unknown 타입이 다운캐스팅이 가능하다
  anyVar = unknownVar;

  // any 타입은 모든 타입에 대해 다운캐스팅이 가능하다
  undefinedVar = anyVar;

  // never
  // 유일하게 never 타입은 어떤 타입도 다운캐스팅 할 수 없다
  // neverVar = anyVar;

  // 계층도를 보고 업캐스팅과 다운캐스팅이 되는구나 라는 것을 알 수 있으면 된다
}
