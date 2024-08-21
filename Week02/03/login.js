/* var vs let vs const */
// var: 원래는 let과 const의 역할을 모두 하고 있었으나, let과 const가 추가되어 잘 사용하지 않는다.

function compareVariable() {
    let num1 = 10;
    const num2 = 30; // 상수로 선언하면 값을 바꿀 수 없다.

    num1 = 20; // 먼저 들어간 값을 빼고 이 값을 넣는다.
    num2 = 10; // 상수이기 때문에 값을 바꿀 수 없다. 오류가 발생한다.
    
    alert('num1: ' + num1); // 20
    alert('num2: ' + num2); // 10
}

/* ID 란에 입력된 값을 팝업창에 띄우기 */
function popId() {
    let userId = document.getElementById('txt_id').value;
    if (!userId) {
        // = userId == ''
        alert('아이디를 입력해주세요.');
        return;
    }
    else {
        alert(userId);
    }
}

/* 나만의 함수 만들고, 버튼 클릭하면 호출하기 */
function myFunction() {
    alert('1');
    alert('2');
    alert('3');
}