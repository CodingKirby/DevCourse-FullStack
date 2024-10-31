function main(response) { // main 함수 정의: '/' 경로로 요청이 들어왔을 때 실행될 함수
  console.log('Request handler "main" was called.');

  response.writeHead(200, {"Content-Type": "text/html"}); // 응답 헤더 작성: 200은 성공을 의미, Content-Type은 text/html로 설정
  response.write("Main page"); // 응답 본문 작성: body에 Hello Node.js를 출력
  response.end(); // 응답 종료: 클라이언트에게 응답을 전송하고 응답을 종료
}

function login(response) { // login 함수 정의: '/login' 경로로 요청이 들어왔을 때 실행될 함수
  console.log('Request handler "login" was called.');

  response.writeHead(200, {"Content-Type": "text/html"}); // 응답 헤더 작성: 200은 성공을 의미, Content-Type은 text/html로 설정
  response.write("Login page"); // 응답 본문 작성: body에 Hello Node.js를 출력
  response.end(); // 응답 종료: 클라이언트에게 응답을 전송하고 응답을 종료
}

let handle = {}; // key:value 형태의 객체 생성
handle['/'] = main; // '/' 키에 main 함수 저장
handle['/login'] = login; // '/login' 키에 login 함수 저장

exports.handle = handle; // handle 객체를 외부에서 사용할 수 있도록 exports 객체에 저장