// 배열에서의 사용
const arr = [1, 2, 3, 4, 5];

// 콜백함수가 하는 일?
// 객체 또는 배열에서 요소를 하나씩 꺼낸 다음
// 매개변수로 그 요소를 전달하면서 콜백함수를 호출한다.
arr.forEach(function(a, b, c) { // forEach는 콜백함수의 매개변수로 요소와 인덱스, 객체 전체를 "순서대로" 받는다.
    // console.log(`a: ${a}, b: ${b}, c: ${c}`);
    /* 실행 결과
    a: 1, b: 0, c: 1,2,3,4,5
    a: 2, b: 1, c: 1,2,3,4,5
    a: 3, b: 2, c: 1,2,3,4,5
    a: 4, b: 3, c: 1,2,3,4,5
    a: 5, b: 4, c: 1,2,3,4,5
    */
});

// Map과 forEach의 만남
let map = new Map();
map.set(7, 'seven');
map.set(9, 'nine');
map.set(8, 'eight');

map.forEach(function(value, key, map) { // forEach는 콜백함수의 매개변수로 값, 키, 객체 전체를 "순서대로" 받는다.
    // 출력은 삽입 순서대로 이루어지며, 정렬은 되지 않는다.
    console.log(`value: ${value}, key: ${key}, map: ${map}`);
    /* 실행 결과
    value: seven, key: 7, map: [object Map]
    value: eight, key: 8, map: [object Map]
    value: nine, key: 9, map: [object Map]
    */
});