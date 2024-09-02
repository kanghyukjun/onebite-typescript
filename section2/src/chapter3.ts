// object 타입이 존재
let user: {
  id?: number; // optional
  name: string;
} = {
  id: 1,
  name: "강혁준",
};

// 타스의 object라는 타입은 그저 객체라는 정보 외에 다른 정보는 없다
// 객체에 프로퍼티나 메소드가 머가 있는지 모른다
// 이럴때 객체 리터럴 타입을 사용한다

user.id;

// 객체의 구조를 기준으로 타입을 정의한다
// object가 아니라
// 이런 특성을 구조적 타입 시스템이라고 부른다 -> Property Based Type System
// Java나 C와 같은 경우는 명목적 타입 시스템 사용

user = {
  name: "홍길동",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "1232";
