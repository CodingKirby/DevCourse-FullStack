;
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 33333;
        this.stdName = 'actingkirby';
        this.age = 23;
        // gender = 'female'; // 리터럴 타입: 오류 발생
        // gender: "female" | "male"  = 'female'; // 방법 1: 리터럴 타입 명시
        this.gender = 'female'; // 방법 2: const assertion
        this.course = 'React';
        this.completed = true;
    }
    MyStudent.prototype.setName = function (name) {
        console.log('이름 설정: ' + this.stdName);
    };
    return MyStudent;
}());
var user = {
    name: 'John',
    age: 30
};
var item;
var numStr = 100;
function convertToString(val) {
    // item = numStr; // 오류 발생: 큰 타입을 작은 타입에 할당할 수 없다.
    return String(val);
}
function convertToNumber(val) {
    // 타입오브 오퍼레이터: 타입 검증, 타입 가드
    if (typeof val === 'string') { // val이 문자열인 경우
        item = 0;
    }
    else { // val이 숫자인 경우
        item = val;
    }
    return Number(val);
}
console.log(convertToString(numStr));
console.log(convertToNumber(numStr));
