let http = require('http'); // http 프로토콜을 사용하기 위한 모듈 *require: Node.js에서 제공하는 함수로, http 모듈을 불러옴
let url = require('url'); // url 모듈을 사용하기 위한 모듈 *require: Node.js에서 제공하는 함수로, url 모듈을 불러옴

function start(route, handle) { // start 함수 정의: route와 handle을 인자로 받음
    function onRequest(request, response) { // onRequest 함수 정의
        let pathname = url.parse(request.url).pathname; // url 모듈의 parse 함수를 호출하여 request.url을 파싱
        route(pathname, handle, response); // route 함수 호출
    }
    
    // http 모듈의 createServer 함수를 호출하여 서버를 생성
    http.createServer(onRequest).listen(8888);
    // 서버를 8888 포트로 listen -> localhost:8888로 접속하면 Hello Node.js 출력
    // Node.js 서버 실행: node server.js 를 터미널에 입력
}

exports.start = start; // start 함수를 외부에서 사용할 수 있도록 exports 객체에 저장