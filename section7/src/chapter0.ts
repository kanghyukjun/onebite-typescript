function anyFunc(value: any) {
  return value;
}

const str1 = anyFunc("string"); // any

function genericFunc<T>(value: T): T {
  return value;
}

const str2 = genericFunc("string"); // string
const arr1 = genericFunc([1, 2]); // number[]
const arr2 = genericFunc<[number, number]>([1, 2]); // [number, number]
