// value => number : toFixed
// value => string : toUpper
// union 타입으로 정의했는데 타입 추론이 잘 되고있음

type Person = {
  name: string;
  age: number;
};

function func(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    return value.toFixed();
  } else if (typeof value === "string") {
    return value.toUpperCase();
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "age" in value) {
    console.log(value.age);
  }
}
