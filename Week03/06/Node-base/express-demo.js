const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

// API: GET + "/": "http://localhost:3000/test"
// "TEST SUCCESS" 출력
app.get('/test', function (req, res) {
  res.send('TEST SUCCESS')
})


app.listen(3000)