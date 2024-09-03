let http = require('http'); // http 프로토콜을 사용하기 위한 모듈 *require: Node.js에서 제공하는 함수로, http 모듈을 불러옴

function onRequest(request, response) { // onRequest 함수 정의
    response.writeHead(200, {'Content-Type': 'text/html'}); // response 객체의 writeHead 함수를 호출하여 응닑 헤더를 작성
    response.write('Hello Node.js'); // response 객체의 write 함수를 호출하여 응답 본문을 작성
    response.end(); // response 객체의 end 함수를 호출하여 응답을 종료
}

// http 모듈의 createServer 함수를 호출하여 서버를 생성
http.createServer(onRequest).listen(8888);
// 서버를 8888 포트로 listen -> localhost:8888로 접속하면 Hello Node.js 출력
// Node.js 서버 실행: node server.js 를 터미널에 입력