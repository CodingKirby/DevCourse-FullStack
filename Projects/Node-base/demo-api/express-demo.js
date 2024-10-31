const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

let nodejsBook = {
  title: 'Node.js를 배워보자 (책)', // 상품명 출력
  price: 20000, // 가격 출력
  description: '정말 좋은 책입니다.' // 설명 출력
}

app.get('/products/1', function (req, res) {
    res.json(nodejsBook)
})

app.listen(3000)