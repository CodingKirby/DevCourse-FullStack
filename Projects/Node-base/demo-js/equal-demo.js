// ==, ===의 차이
if (1 == '1') { // 자료형은 상관없이 값만 비교: 같다
    console.log('같다');
}
else {
    console.log('같지 않다');
}

if (1 === '1') { // 자료형과 값 모두 비교: 같지 않다
    console.log('같다');
}
else {
    console.log('같지 않다');
}