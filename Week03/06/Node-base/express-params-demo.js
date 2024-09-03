const express = require('express')
const app = express()

let nodejsBook = {
  title: 'Node.js를 배워보자 (책)', // 상품명 출력
  price: 20000, // 가격 출력
  description: '정말 좋은 책입니다.' // 설명 출력
}

app.get('/products/:n', function (req, res) {
    // : -> URL로 넘어오는 값을 변수로 사용하겠다는 의미
    // req.params.n -> URL로 넘어온 값을 가져옴
    // products/ 뒤에 오는 값을 n이라는 변수에 저장
    
    res.json({
        num: req.params.n
    })
})

app.listen(3000)