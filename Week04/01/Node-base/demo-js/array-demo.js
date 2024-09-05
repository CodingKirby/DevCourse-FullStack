// 자바스크립트 배열의 비구조화
const array = [1, 2, 3, 4, 5];

// const [num3, num4, num5] = array;
// console.log(num3, num4, num5); // 1 2 3

const [ , , num3, , num5] = array;
console.log(num3, num5); // 3 5