var jwt = require('jsonwebtoken'); // jwt 모듈 가져오기
var dotenv = require('dotenv'); // dotenv 모듈 가져오기
dotenv.config({ path: './Week06/03/Node-base/demo-npm/.env' }); // dotenv 설정

var token = jwt.sign({ foo: 'bar' }, process.env.PRIVATE_KEY); // 토큰 생성 = jwt 서명을 했다!
// (페이로드, 비밀키) + SHA256 => 토큰 생성
console.log(token); // 생성된 토큰 출력

// 검증
// 만약 검증에 성공하면, 페이로드 값을 확인할 수 있다.
var decoded = jwt.verify(token, process.env.PRIVATE_KEY);
console.log(decoded); // 검증된 토큰 출력