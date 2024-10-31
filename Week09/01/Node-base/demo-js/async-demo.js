// async-await: Promise 객체를 좀 더 쉽고 편하게 사용할 수 있게 해주는 문법
// 즉, 비동기 처리가 쉽다!

// async 함수
// _____ function f() {}: 일반 함수
// async function f() {}: async 함수

async function f() {
    return '완료';
};

f().then(
    (result) => {
        console.log(result);
    },
    (error) => {
        console.error(error);
    }
);

