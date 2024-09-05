/**
 * 제네릭 클래스
 */
class NumberList {
  constructor(private list: number[]) {}

  push(value: number) {
    this.list.push(value);
  }

  pop(): number {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new NumberList([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

class List<T> {
  constructor(private list: T[]) {}

  push(value: T) {
    this.list.push(value);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const stringList = new List(["123", "456"]);
