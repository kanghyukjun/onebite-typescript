// 타입 별칭
// 앞으로도 공통으로 적용되어야 하는 타입은 대부분 타입별칭 이용
// 컴파일 결과 이런 타입 별칭들은 다 사라진다
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

// type User = {}; 같은 스코프 내에서 동일한 타입 선언 불가
function func() {
  type User = {};
}

// 타입이 매우 길어진다면?
// 코드 중복 및 매우 길어지는 코드
// 코드를 변수처럼 사용할 수 있다
let user: User = {
  id: 1,
  name: "강혁준",
  nickname: "hamszziu",
  birth: "000124",
  bio: "하이하이",
  location: "부천시",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "hamszziu",
  birth: "000124",
  bio: "하이하이",
  location: "부천시",
};

// 인덱스 시그니처
// 나라가 많다면 모두다 이걸 써야해?
// 타입을 보면 키는 전부다 string, 밸류도 string
// 그러면 이렇게 key와 value의 규칙을 기준으로 객체 타입을 정의할 수 있는 문법이 인덱스 시그니처 문법이다
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

// 인덱스 시그니처 타입은 이 규칙을 위반하지만 않으면 ㄱㅊ
// 아무런 프로퍼티가 없으면 위반할 프로퍼티가 없으니 ㄱㅊ
// type CountryNumberCodes = {
//   [key: string]: number;
//   Korea: string; // 반드시 있어야 하는 프로퍼티는 이렇게 작성
//   // 오류 발생
//   // 인덱스 시그니처엣 ㅓ추가적인 프로퍼티를 작성하려면 추가적인 프로퍼티 밸류가
//   // 인덱스 시그니처의 밸류 타입과 일치하거나 호환해야 함
// };
// let countryNumberAndStringCodes: CountryNumberCodes = {
//   Korea: "ko",
// };
