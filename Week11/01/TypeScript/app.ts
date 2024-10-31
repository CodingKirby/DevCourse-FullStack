// function logName(name: string) {
//     console.log(name);
// }

// logName('codingkirby');

// 정적 타이핑
// let myname = 'lee';
// myname = 1; // error: 타입 추론


// 타입 추론
// let student = {
//     name: 'codingkirby',
//     course: 'TypeScript',
//     score: 100,
//     grade: function() {
//         console.log('A');
//     }
// }

// student.name = 1; // error: 타입 추론
// student.score = 'A'; // error: 타입 추론


// 변수의 데이터 타입 명시
// let stdId: number = '1111'; // 컴파일 에러 = syntax error 발생
// let stdName: string = 'lee';
// let age: number = 20;
// let gender: string = 'female';
// let course: string = 'TypeScript';
// let completed: boolean = false;

// 함수의 데이터 타입 명시
// function plus(a: number, b: number): number {
//     return a + b;
// }

// 학생 정보를 가져오는 함수
// function getInfo(id: number, name: string, age: number,
//     gender: string, course: string, completed: boolean
// ): {
//     stdId: number;
//     stdName: string;
//     age: number;
//     gender: string;
//     course: string;
//     completed: boolean;
// } {

//     return {
//         stdId: id,
//         stdName: name,
//         age: age,
//         gender: gender,
//         course: course,
//         completed: completed
//     };
// }

// 인터페이스
// interface Student {
//     stdId: number;
//     stdName: string;
//     age: number;
//     gender: string;
//     course: string;
//     completed: boolean;
// }

// function getInfo(id: number): Student {
//     return {
//         stdId: id,
//         stdName: 'codingkirby',
//         // age: 20,
//         gender: 'female',
//         course: 'TypeScript',
//         completed: true
//     };
// }

// console.log(getInfo(1111));

// 옵셔널
// interface Student {
//     stdId: number;
//     stdName: string;
//     age?: number;
//     gender: string;
//     course: string;
//     completed: boolean;
// }

// function getInfo(id: number): Student {
//     return {
//         stdId: id,
//         stdName: 'codingkirby',
//         // age: 20,
//         gender: 'female',
//         course: 'TypeScript',
//         completed: true
//     };
// }

// 함수에도 옵셔널 적용 가능
// function plus(a: number, b?: number): number {
//     return a + b;
// }

// 인터페이스 전달
// function setInfo(student: Student): void {
//     console.log(student);
// }

// let std = {
//     stdId: 22222,
//     stdName: 'movingkirby',
//     age: 22,
//     gender: 'female',
//     course: 'Node.js',
//     completed: false
// }

// setInfo(std);

// 인터페이스 안에 메소드 정의
// interface Student {
//     stdId: number;
//     stdName?: string;
//     age?: number;
//     gender?: string;
//     course?: string;
//     completed?: boolean;
//     // setName(name: string): void; // 방법 1) 전통적인 메서드 선언 방식
//     setName: (name: string) => void; // 방법 2) 화살표 함수: 함수 타입 표현 방식
// };
// // 인터페이스를 클래스에 구현
// class MyStudent implements Student {
//     stdId = 33333;
//     stdName = 'actingkirby';
//     age = 23;
//     gender = 'female';
//     course = 'React';
//     completed = true;

//     setName(name: string): void { // 오버라이딩
//         this.stdName = name;
//         console.log('이름 설정: ' + this.stdName);
//     }
// }

// const myInstance = new MyStudent();
// myInstance.setName('dancingkirby');

// 열거형: 사용자 정의 타입
enum GenderType {
    Female,
    Male,
    Other
}

interface Student {
    stdId: number;
    stdName?: string;
    age?: number;
    gender?: GenderType;
    course?: string;
    completed?: boolean;
    // setName(name: string): void; // 방법 1) 전통적인 메서드 선언 방식
    setName: (name: string) => void; // 방법 2) 화살표 함수: 함수 타입 표현 방식
};

class MyStudent implements Student {
    stdId = 33333;
    stdName = 'actingkirby';
    age = 23;
    gender = GenderType.Female;
    course = 'React';
    completed = true;

    setName(name: string): void {
        this.stdName = name;
        console.log('이름 설정: ' + this.stdName);
    }
}