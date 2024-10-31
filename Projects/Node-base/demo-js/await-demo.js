// await은 async 함수 안에서만 동작한다
// await은 Promies 객체.then()을 좀 더 쉽게 사용할 수 있는 방법

// async의 두 번째 기능: Promise 객체가 일이 끝날 때까지 기다릴 수 있는 공간을 제공한다! = await
async function f() {
    // promise 객체 한 개당 => query 하나
    let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('첫 번째 쿼리');
        }, 3000);
    });
    let result1 = await promise1;
    console.log(result1);

    let promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('두 번째 쿼리 with ' + result1);
        }, 3000);
    });

    let result2 = await promise2;
    console.log(result2);

    let promise3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('세 번째 쿼리 with ' + result2);
        }, 3000);
    });

    let result3 = await promise3;
    console.log(result3);
};

f();