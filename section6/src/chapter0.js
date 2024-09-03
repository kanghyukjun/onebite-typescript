/**
 * 클래스
 */
let studentA = {
  name: "강혁준",
  grade: "A+",
  age: 27,
  study() {
    console.log("열심히 공부함");
  },
  introduce() {
    console.log(`안녕하세요. ${this.name}입니다.`);
  },
};

class Student {
  // field
  // 클래스가 만들어낼 객체의 속성
  // 이 class가 만들어낼 객체는 모두 name, grade, age가 있는 것이다.
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    // this는 현재 만들어 낼 객체를 가리킨다.
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log(`열심히 공부함`);
  }

  introduce() {
    console.log(`안녕하세요. ${this.name}입니다.`);
  }
}

// new 키워드는 생성자를 호출한다
// new를 이용해 만든 객체를 인스턴스라고 부른다.
let studentB = new Student("강감강", "S+", 32);

class StudentDeveloper extends Student {
  favoriteSkill;

  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  programming() {
    console.log(`${this.favoriteSkill}기술로 프로그래밍 함`);
  }
}

let me = new StudentDeveloper("강혁준", "B+", 25, "TypeScript");
me.study();
me.introduce();
me.programming();
