const express = require('express')
const app = express()

app.get('/products/:n', function (req, res) {    

  let number = parseInt(req.params.n) - 10
  console.log(number)

  res.json({
      num: number
  })
})

// 채널 주소: https://www.youtube.com/@codingkirby
// 영상 주소: https://www.youtube.com/watch?v=gZSQ8aLErIA
// 타임라인 주소: https://www.youtube.com/watch?v=gZSQ8aLErIA&t=5003s
// app.get('/:nickname', function (req, res) {
//   const param = req.params // req.params는 잘 바뀌지 않기 때문에 const 사용

//   res.json({
//       channel: req.params.nickname
//   })
// })

// 객체의 비구조화
app.get('/watch', function (req, res) {
  const {q1, v} = req.query
  res.json({
    video: v,
    timeline: q1
  })
})

app.listen(3000)