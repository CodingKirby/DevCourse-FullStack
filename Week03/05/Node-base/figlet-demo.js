// 'figlet' 패키지를 불러와서 'figlet' 변수에 저장
var figlet = require("figlet");

// 'figlet' 함수를 사용하여 "Hello World!!" 문자열을 아스키 아트로 변환
figlet("Hello World!!", function (err, data) {
  // 만약 오류가 발생하면
  if (err) {
    // 오류 메시지를 출력하고
    console.log("Something went wrong..."); // "문제가 발생했습니다..." 출력
    // 오류 객체를 상세히 출력한 후
    console.dir(err); // 오류 내용을 자세히 출력
    // 함수 실행을 종료합니다.
    return;
  }
  // 오류가 없으면 변환된 아스키 아트를 출력
  console.log(data); // 변환된 아스키 아트 출력
});