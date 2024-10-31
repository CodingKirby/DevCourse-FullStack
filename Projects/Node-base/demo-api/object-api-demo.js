const express = require('express')
const app = express()

// 채널 주소: https://www.youtube.com/@codingkirby
// 영상 주소: https://www.youtube.com/watch?v=gZSQ8aLErIA
// 타임라인 주소: https://www.youtube.com/watch?v=gZSQ8aLErIA&t=5003s

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

app.get('/:nickname', function (req, res) {
    const {nickname} = req.params // req.params는 잘 바뀌지 않기 때문에 const 사용

    if (nickname === '@codingkirby') {
        res.json(youtuber1)
    }
    
    else if (nickname === '@takealook.') {
        res.json(youtuber2)
    }

    else if (nickname === '@sttaying') {
        res.json(youtuber3)
    }
    
    // 개발자가 예상하지 못한 에러 = 예외가 발생!
    else {
        res.json({
            message: "해당하는 유튜버가 없습니다."
        })
    }
})

app.listen(3000)