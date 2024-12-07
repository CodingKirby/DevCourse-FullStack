require('dotenv').config({ path: require('path').join(__dirname, '../.env') });
// console.log(process.env.PRIVATE_KEY);

const express = require('express')
const app = express()

// 서버 세팅: 포트 설정
app.listen(process.env.PORT);

// jwt 모듈 가져오기
var jwt = require('jsonwebtoken'); 

// GET + "/jwt" : 토큰 발행
app.get('/jwt', function (req, res) {
    var token = jwt.sign({
        username: "kirby"
    }, process.env.PRIVATE_KEY, {
        expiresIn: '1m', // 1분
        issuer: "admin"
    }); // 토큰 생성 = jwt 서명을 했다!

    res.cookie("jwt", token, { // 쿠키에 토큰 저장
        httpOnly: true // 쿠키를 자바스크립트로 접근하지 못하게 한다.
    });
    res.send("토큰 발행 완료!");
})

// GET + "/jwt/decoded" : 토큰 검증
app.get('/jwt/decoded', function (req, res) {
    // 만약 검증에 성공하면, 페이로드 값을 확인할 수 있다.
    const receivedJwt = req.headers["authorization"];
    var decoded = jwt.verify(receivedJwt, process.env.PRIVATE_KEY);

    // 유효기간이 지났어! -> 500 에러 발생
    // 이에 대한 예외 처리 필요
    // if 유효기간이 지난 토큰 => '로그인(인증) 세션(유지되는 상태)이 만료되었습니다. 다시 로그인해주세요.' 메시지 출력

    res.send(decoded);
})