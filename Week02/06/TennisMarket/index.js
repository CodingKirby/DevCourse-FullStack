let server = require("./server"); // server.js 파일을 불러와 server 변수에 저장
let router = require("./router"); // router.js 파일을 불러와 router 변수에 저장
let requestHandler = require("./requestHandler"); // requestHandlers.js 파일을 불러와 requestHandlers 변수에 저장

const mariadb = require('./database/connect/mariadb'); // mariadb.js 파일을 불러와 mariadb 변수에 저장
mariadb.connect(); // mariadb 연결

server.start(router.route, requestHandler.handle); // server.js 파일의 start 함수 호출