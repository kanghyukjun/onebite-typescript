/**
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
};

// 앞에 있는 값을 뒤에 있는 값으로 생각하라?
// Person 타입으로 단언된
let person = {} as Person;
person.name = "이정환";
person.age = 26;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도", // 추가 프로퍼티 검사
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B일 때
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 한다
 */

let num1 = 10 as never;
let num2 = 10 as unknown;
let num3 = [] as unknown as string; // 다중 단언 (절대 쓰지마세요)

/**
 * const 단언
 */
let num4 = 10 as const;
let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

/**
 * Non Null 단언
 * 어떤 값이 non이거나 undefined가 아니라고 알려줌
 */
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "이정환",
};

// const len: number = post.author?.length;
// 이 값이 null이거나 undefined가 아니라고 믿게 해줌
const len: number = post.author!.length;
