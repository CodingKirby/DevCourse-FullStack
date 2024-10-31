// 비동기 처리 "promise" chaining
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료');
        reject('실패');
    }, 3000);
})
.then((result) => {
    console.log(result);
    return result + '!';
})
.then((result) => {
    console.log(result);
    return result + '!';
})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
});