const express = require('express')
const app = express()

app.get('/hello', function (req, res) {
    res.json({
        say : "안녕하세요"
    })
})

app.get('/bye', function (req, res) {
    res.json({
        say : "안녕히 가세요"
    })
})

app.get('/nicetomeetyou', function (req, res) {
    res.json({
        say : "반갑습니다"
    })
})

app.listen(3000)