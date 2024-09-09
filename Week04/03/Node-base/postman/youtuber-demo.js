let youtuber1 = {
    channelTitle: '코딩커비',
    sub: "0명",
    videoNum: "4개"
}

let youtuber2 = {
    channelTitle: '때껄룩ᴛᴀᴋᴇ ᴀ ʟᴏᴏᴋ',
    sub: "186만명",
    videoNum: "372개"
}

let youtuber3 = {
    channelTitle: '때잉',
    sub: "156만명",
    videoNum: "509개"
}

let db = new Map() // 데이터베이스 역할을 하는 Map 객체 생성
let id = 1

db.set(id++, youtuber1)
db.set(id++, youtuber2)
db.set(id++, youtuber3)

const express = require('express')
const app = express()
app.listen(3000)

app.get('/youtuber/:id', function (req, res) {
    let {id} = req.params // const를 사용하면 id를 재할당할 수 없기 때문에 오류가 발생한다
    id = parseInt(id)
    let youtuber = db.get(id)

    if (youtuber === undefined) {
        res.json({
            message: "유투버 정보를 찾을 수 없습니다."
        })
        return
    }

    res.json(youtuber)
})

app.use(express.json()) // http 외 모듈인 '미들웨어': json 설정
app.post('/youtuber', function (req, res) {
    console.log(req.body)

    let {channelTitle, sub=0, videoNum=0} = req.body
    let youtuber = {
        "channelTitle": channelTitle,
        "sub": sub,
        "videoNum": videoNum
    }

    // db에 추가
    db.set(id++, youtuber)

    // 응답
    res.json({
        message: `${db.get(id-1).channelTitle}님, 유투버 생활을 응원합니다!`
    })
})

// 유투버 전체 조회
app.get('/youtubers', function (req, res) {
    console.log(db)
    res.json(db)
})