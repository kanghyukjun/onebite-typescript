/**
 * 인터페이스 확장
 */

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFlying: boolean;
}

interface DogCat extends Dog, Cat {}
