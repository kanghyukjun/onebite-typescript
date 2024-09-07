/**
 * Partial<T>
 * 부분적인, 일부분의
 * 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔준다
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Partial<T> = {
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  title: "제목 나중에 짓자",
  content: "초안",
};

/**
 * Required
 * 필수의, 필수적인
 * 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

type Required<T> = {
  [key in keyof T]-?: T[key];
};

const withTumbnailPost: Required<Post> = {
  title: "한입",
  tags: ["ts"],
  content: "",
  thumbnailURL: "",
};

/**
 * Readonly
 * 모든 프로퍼티를 읽기전용 프로퍼티로 만들어 줌
 */

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: "",
  tags: [],
  content: "",
};

// readonlyPost.title = "";
