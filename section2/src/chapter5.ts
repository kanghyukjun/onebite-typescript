// 숫자형 enum
// 값을 생략해도 0번부터 순서대로 값을 할당해준다
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

// 문자형 enum
enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "이정환",
  role: Role.ADMIN, // 관리자
  language: Language.korean,
};

const user2 = {
  name: "홍길동",
  role: Role.USER, // 일반 유저
  language: Language.english,
};

const user3 = {
  name: "홍길동",
  role: Role.GUEST, // 일반 유저
  language: Language.korean,
};

console.log(user1, user2, user3);
