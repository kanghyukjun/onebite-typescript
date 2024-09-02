/**
 * 기본 타입의 호환성
 */

let num1 = 10;
let num2: 10 = 10;

num1 = num2;

/**
 * 객체 타입 간 호환성
 * -> 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

// Dog 타입을 Animal 타입으로 보는건 괜찮음 (업캐스팅)
// Animal 타입을 Dog 타입으로 보는건 안됨 (다운 캐스팅)
// 즉 Animal 타입이 슈퍼타입
// Dog 타입이 서브타입
// 객체 타입은 property를 기준으로 관계를 갖는다
animal = dog; // 에러 발생 X
// dog = animal; // 에러 발생

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "응응",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook;
console.log(book);

/**
 * 초과 프로퍼티 검사
 * 객체 리터럴을 사용할 때 객체 타입에 정의된 프로퍼티만 넣도록 해야함
 */

let book2: Book = {
  name: "응응",
  price: 33000,
  // skill: "reactjs",
};

let book3: Book = { ...programmingBook };
console.log(book3);
