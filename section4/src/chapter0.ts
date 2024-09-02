/**
 * 함수 타입 정의
 */

function func(a: number, b: number) {
  return a + b;
}

/**
 * 화살표 함수 타입 정의
 */
const add = (a: number, b: number) => a + b;

/**
 * 함수의 매개변수
 * 필수 매개변수가 선택적 매개변수보다 앞에 있어야 한다
 */
function introduce(name = "강혁준", tall: number = 175) {
  console.log(`name: ${name}`);
  console.log(`tall: ${tall}`);
}

introduce("강혁준", 175);
introduce("강혁준");

/**
 * rest
 */
function getSum(...rest: number[]) {
  return rest.reduce((acc, val) => acc + val, 0);
}
