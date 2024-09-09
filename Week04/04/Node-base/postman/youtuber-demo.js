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

app.get('/youtubers/:id', function (req, res) {
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
app.post('/youtubers', function (req, res) {
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
    // console.log(db.values()) // Map 객체의 값들만 추출: MapIterator {{channelTitle, …}, {channelTitle, …}, {…}}
    // console.log(db.set()) // Map 객체의 키와 값들을 추출: Map(4) {size: 4, 1 => {channelTitle, …}, 2 => {channelTitle, …}, 3 => {…}, undefined => undefined}
    
    let youtubers = {}
    db.forEach(function (youtuber, id) { // foEach로 Map 객체의 값들만 추출
        youtubers[id] = youtuber
    })

    // Map을 일반 객체로 변환
    // let youtubers = Object.fromEntries(db)
    
    // Map을 배열로 변환
    // let youtubers = Array.from(db)

    res.json(youtubers)
})

// 유투버 삭제
app.delete('/youtubers/:id', function (req, res) {
    let {id} = req.params
    id = parseInt(id)
    let youtuber = db.get(id)

    if (youtuber === undefined) {
        res.json({
            message: `${id}번 유투버 정보를 찾을 수 없습니다.`
        })
        return
    }

    db.delete(id)
    res.json({
        message: `${youtuber.channelTitle}님, 아쉽지만 다음에 또 뵙겠습니다.`
    })
})