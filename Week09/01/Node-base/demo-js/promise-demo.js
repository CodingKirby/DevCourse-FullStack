// Promise "객체": 무조건 약속을 지키는 친구

// Promise 객체 생성
let promise = new Promise((resolve, reject) => { // 매개변수로 함수를 받는다
    // executor: 이 친구가 할 일
    setTimeout(() => {
        // 성공 시
        resolve('완료!');
        // 실패 시
        reject('실패');
    }, 3000);

    // 일을 다~하면 무조건 콜백함수 resolve() 또는 reject()를 호출
    // 할 일을 성공적으로 하면 resolve (결과)
    // 할 일을 실패하면 reject (에러)
});

// Promise의 기본 메소드: promise가 일을 다 하고 (= 약속 다 지키고) 호출해야 하는 함수
promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });