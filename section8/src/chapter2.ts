/**
 * keyof 연산자
 */

// interface Person {
//   name: string;
//   age: number;
// }

type Person = typeof person;

const person = {
  name: "강혁준",
  age: 25,
};

// person 객체로 부터 key 값을 리턴해주는 함수
function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

getPropertyKey(person, "name");
