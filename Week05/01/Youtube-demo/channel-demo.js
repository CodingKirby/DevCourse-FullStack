// express 모듈 세팅
const express = require('express')
const app = express()
app.listen(3000)
app.use(express.json())

let db = new Map()
// 초기 채널 데이터
db.set(1, { "channelTitle": "코딩커비" })

app
    .route('/channels')
    .post(createChannel)
    .get(getChannels)

app
    .route('/channels/:id')
    .get(getChannel)
    .delete(deleteChannel)
    .put(updateChannel)


/* ---------------------------- 채널 관련 함수 ---------------------------- */
/* ---------------------------- /channels ---------------------------- */
// 채널 생성
function createChannel(req, res) {
    const id = db.size + 1
    const { channelTitle } = req.body
    
    const isExist = [...db.values()].some(channel => channel.channelTitle === channelTitle)
    if (isExist) {
        res.status(409).json({ message: '이미 존재하는 채널명입니다.' })
        return
    }

    if (channelTitle) {
        db.set(id, req.body)
        res.status(201).json({ message: `${channelTitle}님 채널을 응원합니다!` })
    }
    else {
        res.status(400).json({ message: '채널명을 입력해주세요.' })
    }
}

// 채널 전체 조회: 방법 1 - 내 코드
function getChannels(req, res) {
    const channels = [...db.values()]

    if (channels.length > 0) {
        res.json(channels)
        return
    }

    res.status(404).json({ message: '조회할 채널이 존재하지 않습니다.' })
}

// 채널 전체 조회: 방법 2 - 강사님 코드
/*
function getChannels(req, res) {
    let channels = []

    if (db.size) {
        db.forEach((channel) => {
            channels.push(channel)
        })
    
        res.json(channels)
    }
    else {
        res.status(404).json({ message: '조회할 채널이 존재하지 않습니다.' })
    }
}
*/

/* ---------------------------- /channels/:id ---------------------------- */
// 개별 채널 조회
function getChannel(req, res) {
    const id = parseInt(req.params.id)
    const channel = db.get(id)
    
    if (channel) {
        res.json(channel)
    }
    else {
        res.status(404).json({ message: '채널이 존재하지 않습니다.' })
    }
}

// 개별 채널 삭제
function deleteChannel(req, res) {
    const id = parseInt(req.params.id)
    const channel = db.get(id)

    if (channel) {
        const channelTitle = channel.channelTitle
        db.delete(id)
        res.json({ message: `${channelTitle} 채널이 정상적으로 삭제되었습니다.` })
    }
    else {
        res.status(404).json({ message: '채널이 존재하지 않습니다.' })
    }
}

// 개별 채널 수정
function updateChannel(req, res) {
    // 수정할 채널명 입력했는지 확인
    const newTitle = req.body.channelTitle
    if (!newTitle) {
        res.status(400).json({ message: '채널명을 입력해주세요.' })
        return
    }

    // 수정할 채널명이 이미 존재하는지 확인
    const isExist = [...db.values()].some(channel => channel.channelTitle === newTitle)
    if (isExist) {
        res.status(409).json({ message: '이미 존재하는 채널명입니다.' })
        return
    }

    // 채널이 존재하는지 확인
    const id = parseInt(req.params.id)
    const channel = db.get(id)
    if (channel) { // 채널이 존재하면 수정
        const oldTitle = channel.channelTitle
        channel.channelTitle = newTitle
        db.set(id, channel)
        res.json({ message: `${oldTitle}에서 ${newTitle}(으)로 수정되었습니다.` })
    }
    else {
        res.status(404).json({ message: '채널이 존재하지 않습니다.' })
    }
}