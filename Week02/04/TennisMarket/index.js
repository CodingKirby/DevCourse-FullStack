let server = require("./server"); // server.js 파일을 불러와 server 변수에 저장
let router = require("./router"); // router.js 파일을 불러와 router 변수에 저장

server.start(router.route); // server.js 파일의 start 함수 호출