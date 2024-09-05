/**
 * map 메서드
 */
const arr = [1, 2, 3];
const newArr = arr.map((val) => val * 2); // 자동으로 타입이 추론됨
console.log(newArr);

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

map(arr, (value) => value * 2);
map(["hi", "hello"], (value) => parseInt(value));

/**
 * forEach
 */

function forEach<T>(arr: T[], callback: (value: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

const arr2 = [1, 2, 3];
forEach(arr2, (value) => console.log(value.toFixed()));
