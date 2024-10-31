// 리터럴 타입: 특정 값만을 가질 수 있는 타입
interface Student {
    stdId: number;
    stdName?: string;
    age?: number;
    gender?: 'female' | 'male'; // 리터럴 타입: female, male 중 하나만 할당 가능
    course?: string;
    completed?: boolean;
    // setName(name: string): void; // 방법 1) 전통적인 메서드 선언 방식
    setName: (name: string) => void; // 방법 2) 화살표 함수: 함수 타입 표현 방식
};

class MyStudent implements Student {
    stdId = 33333;
    stdName = 'actingkirby';
    age = 23;
    // gender = 'female'; // 리터럴 타입: 오류 발생
    // gender: "female" | "male"  = 'female'; // 방법 1: 리터럴 타입 명시
    gender = 'female' as const; // 방법 2: const assertion
    course = 'React';
    completed = true;

    setName(name: string): void {
        console.log('이름 설정: ' + this.stdName);
    }
}

const user: {
    name: string,
    age: number
} = {
    name: 'John',
    age: 30
}

// any 타입: 모든 타입을 허용
// let anyVal: any = 100;
// anyVal = 'kim';
// anyVal = true;
// anyVal = null;
// anyVal = undefined; // 오류가 발생하지 않는다.

// 유니온 타입: 여러 타입 중 하나를 선택
// let anyVal: string | number = 100;
// anyVal = 'kim'; // 가능
// anyVal = true; // 오류 발생

// let numStr: number | string = 100;

// function convertToString(val : number | string): string {
//     return String(val);
// }

// function convertToNumber(val : number | string): number {
//     return Number(val);
// }

// console.log(convertToString(numStr));
// console.log(convertToNumber(numStr));

// 타입 별칭
type strOrNum = string | number;
let item: number;
let numStr: strOrNum = 100;

function convertToString(val : strOrNum): string {
    // item = numStr; // 오류 발생: 큰 타입을 작은 타입에 할당할 수 없다.
    return String(val);
}

function convertToNumber(val : strOrNum): number {
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

