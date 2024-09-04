/**
 * 첫번째 사례
 */

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

/**
 * 두번째 사례
 */
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]); // 0
let str = returnFirstValue([1, "hello", "hi"]); // "hello"

/**
 * 세번째 사례
 */
const getLength = <T extends { length: number }>(data: T) => {
  return data.length;
};

const var1 = getLength([1, 2, 3]); // 3
const var2 = getLength("12345"); // 5
const var3 = getLength({ length: 10 }); // 10
const var4 = getLength(10); // ?
