/**
 * 맵드 타입
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in keyof User]?: User[key];
};

type BooleanUser = {
  [ket in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  return {
    id: 1,
    name: "강혁준",
    age: 25,
  };
}

function updateUser(user: PartialUser) {
  // 수정하는 기능
}

updateUser({
  id: 1,
  name: "강혁준",
  age: 21,
});
