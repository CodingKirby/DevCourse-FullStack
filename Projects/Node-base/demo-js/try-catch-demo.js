// 예시 1
console.log("예시 1")
try {
    username;
} catch (error) {
    console.log("username이 선언되지 않았습니다.");
    console.log("에러 메시지: ", error);
}

// 예시 2
console.log("\n");
console.log("예시 2")

// let string = '{ "num1": 1'; // 일부러 에러를 발생시키기 위해 중괄호를 닫지 않음

try {
    let json = JSON.parse(string);
    console.log(json);
} catch (error) {
    console.log("에러 메시지: ", error);
}

// 예시 3: 여러 에러가 발생할 때
// let string = '{ "num1": 1';

try {
    username;
    let json = JSON.parse(string);
    console.log(json);
} catch (error) {
    console.log("에러 메시지: ", error);
}

// 예시 4: 에러 객체의 필드
let string = '{ "num1": 1';

try {
    username;
    let json = JSON.parse(string);
    console.log(json);
} catch (error) {
    // 에러 객체의 필드
    console.log("에러 이름: ", error.name);
    console.log("에러 메시지: ", error.message);
}