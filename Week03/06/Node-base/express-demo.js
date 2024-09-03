const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

// API: GET + "http://localhost:3000/test"
// "TEST SUCCESS" 출력
app.get('/test', function (req, res) {
  res.send('TEST SUCCESS')
})

// API: GET + "/test/1"
// "One!!" 출력
app.get('/test/1', function (req, res) {
  res.send('One!!')
})

app.get('/hello', function (req, res) {
    res.send({
        say : "안녕하세요"
    })
})

app.get('/bye', function (req, res) {
    res.send({
        say : "안녕히 가세요"
    })
})

app.get('/nicetomeetyou', function (req, res) {
    res.send({
        say : "반갑습니다"
    })
})

app.get('/products/1', function (req, res) {
    res.send('Node.js를 배워보자 (책)') // 상품명 출력
    res.send(2000) // 상품 가격 출력 -> 이 부분은 출력이 되지 않음
    // why? 
})

app.listen(3000)