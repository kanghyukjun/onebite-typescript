type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // ✅
// b = a; // ❌

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (value: Animal) => {
  console.log(value.name);
};

let dogFunc = (value: Dog) => {
  console.log(value.name);
  console.log(value.color);
};

// animalFunc = dogFunc; // ❌
dogFunc = animalFunc; // ✅
