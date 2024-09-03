/**
 * 타입스크립트의 클래스
 */

const employee = {
  name: "강혁준",
  age: 25,
  position: "developer",
  work() {
    console.log(`일함`);
  },
};

class Employee {
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, positon: string) {
    this.name = name;
    this.age = age;
    this.position = positon;
  }

  work() {
    console.log(`일함`);
  }
}

class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employeeB = new Employee("강혁준", 25, "개발자");

const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};
