// async-await: Promise 객체를 좀 더 쉽고 편하게 사용할 수 있게 해주는 문법
// 즉, 비동기 처리가 쉽다!

// async 함수
// _____ function f() {}: 일반 함수
// async function f() {}: async 함수

// async의 첫 번째 기능: Promise 객체 반환
async function f() {
    return '완료'; // 자동으로 Promise 객체를 반환 중
    // = return Promise.resolve('완료');
    // async 함수는 무조건 Promise 객체를 반환한다.
    // 만약 반환값이 Promise 객체가 아니라면, 자동으로 Promise.resolve()로 감싸서 반환한다.
};

f().then(
    (result) => {
        console.log("promise resolve: ", result);
    },
    (error) => {
        console.error("promise reject: ", error);
    }
);