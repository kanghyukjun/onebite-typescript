/**
 * 인덱스드 액세스 타입
 */

// interface Post {
//   title: string;
//   content: string;
//   author: {
//     id: number;
//     name: string;
//   };
// }

// const key = "author";

// function printAuthorInfo(author: Post["author"]) {
//   console.log(`${author.name}-${author.id}`);
// }

// const post: Post = {
//   title: "게시글 제목",
//   content: "게시글 본문",
//   author: {
//     id: 1,
//     name: "강혁준",
//   },
// };

// type PostList = {
//   title: string;
//   content: string;
//   author: {
//     id: number;
//     name: string;
//   };
// }[];

// function printAuthorInfo(author: PostList[number]["author"]) {
//   console.log(`${author.name}-${author.id}`);
// }

// const post: PostList[number] = {
//   title: "게시글 제목",
//   content: "게시글 본문",
//   author: {
//     id: 1,
//     name: "강혁준",
//   },
// };

type Tup = [number, string, boolean];
type Tup0 = Tup[0]; // number type
type Tup1 = Tup[1]; // string type
type Tup2 = Tup[2]; // boolean type
type TupNum = Tup[number]; // number | string | boolean type
