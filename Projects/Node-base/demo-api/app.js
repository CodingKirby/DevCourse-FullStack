const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use(express.json()) // 미들웨어로, body-parser 역할을 한다. body를 json으로 변환해준다.

app.post('/test', (req, res) => {
  // body에 있는 데이터를 화면에 출력하기 위해서는 어떻게 해야 할까?
  res.send(req.body.message)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})