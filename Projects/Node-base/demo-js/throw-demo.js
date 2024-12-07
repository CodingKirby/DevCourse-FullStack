// 에러 객체 생성
// let error = new Error("최상위 에러 객체");
// let syntaxError = new SyntaxError("문법 에러 객체");
// let referenceError = new ReferenceError("참조 에러 객체");

// console.log("에러 이름: ", error.name);
// console.log("에러 메시지: ", error.message); // 에러 객체

// console.log("에러 이름: ", syntaxError.name);
// console.log("에러 메시지: ", syntaxError.message); // 문법 에러 객체

// console.log("에러 이름: ", referenceError.name);
// console.log("에러 메시지: ", referenceError.message); // 참조 에러 객체


let string = '{ "num1": 1 }';

try {
    let json = JSON.parse(string);

    if (!json.name) {
        // console.log("입력값에 이름이 없습니다."); // js 입장에선 에러가 아니지만, 우리 입장에선 입력값이 잘못된 에러!
        throw new SyntaxError("입력값에 이름이 없습니다.");
    }
    
    let name = json.name;
    console.log(name);
} catch (error) {
    // 에러 객체의 필드
    console.log("에러 이름: ", error.name);
    console.log("에러 메시지: ", error.message);
}