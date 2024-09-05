/**
 * 프로미스
 */

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => reject(20), 3000);
});

promise.then((val) => {
  console.log(val * 20);
});

promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */
interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise<Post>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시물 내용",
      });
    });
  });
}

const postRequest = fetchPost();
postRequest.then((post) => {
  post.id;
});
