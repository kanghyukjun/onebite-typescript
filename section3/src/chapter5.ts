/**
 * 타입 추론
 */

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "",
  param: {
    id: "",
  },
  urls: [""],
};

let { id, name, param } = c;

let [one, two, three] = [1, "hello", false];

function func() {
  return "hello";
}

/**
 * 이상한 타입 추론
 */
// any 타입의 진화
let d; // 암묵적 any -> any 타입 진화
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();

const num = 10; // number 리터럴 타입

let arr = [1, "hello"];
