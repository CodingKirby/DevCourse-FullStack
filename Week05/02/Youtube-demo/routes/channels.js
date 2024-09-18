// express 모듈 세팅
const express = require('express')
const router = express.Router()

let db = new Map()
// 초기 채널 데이터
db.set(1, { "channelTitle": "코딩커비", "userId": "testId1" })

router
    .route('/')
    .post(createChannel)
    .get(getChannels)

router
    .route('/:id')
    .get(getChannel)
    .delete(deleteChannel)
    .put(updateChannel)


/* ---------------------------- 채널 관련 함수 ---------------------------- */
/* ---------------------------- /channels ---------------------------- */
// 채널 생성
function createChannel(req, res) {
    const id = db.size + 1
    const { channelTitle, userId } = req.body
    
    const isExist = [...db.values()].some(channel => channel.channelTitle === channelTitle)
    if (isExist) {
        res.status(409).json({ message: '이미 존재하는 채널명입니다.' })
        return
    }

    if (channelTitle) {
        let channel = { channelTitle, userId };
        db.set(id, channel)
        res.status(201).json({ message: `${channelTitle}님 채널을 응원합니다!` })
    }
    else {
        res.status(400).json({ message: '채널명을 입력해주세요.' })
    }
}

// 채널 전체 조회: 방법 1 - 내 코드
function getChannels(req, res) {
    const { userId } = req.body
    if (!db.size || !userId) {
        return channelNotFound(res)
    }

    let channels = Array.from(db.values()).filter(channel => channel.userId === userId);
    if (channels.length === 0) {
        return channelNotFound(res)
    }

    return res.json(channels)
}

/*
// 채널 전체 조회: 방법 2 - 강사님 코드 -> early return 패턴 사용
function getChannels(req, res) {
    let { userId } = req.body

    // 예외처리 1) userId가 body에 없으면
        // 마이페이지에서 채널 목록을 조회할텐데 = 로그인 상태일텐데 왜 userId가 없을까?
        // -> 로그인한 후 시간이 오래 지나면 로그인이 풀리는 경우가 있음
        // -> 자동완성 기능을 이용해 해당 경로로 요청을 보낸 경우
    if (!db.size || !userId) {
        return channelNotFound(res)
    }

    let channels = []
    db.forEach(function(channel, id) {
        if (channel.userId === userId) {
            channels.push(channel)
        }
    })

    // 예외처리 2) userId가 가진 채널이 없으면
    if (channels.length === 0) {
        return channelNotFound(res)
    }
    
    return res.status(200).json(channels)
}

// 채널 전체 조회: 방법 2 - 강사님 코드
function getChannels(req, res) {
    let { userId } = req.body
    let channels = []

    if (db.size && userId) {
        db.forEach(function(channel, id) {
            if (channel.userId === userId) {
                channels.push(channel)
            }
        })
    
        if (channels.length) {
            res.status(200).json(channels)
        }
        else {
            channelNotFound(res)
        }
    }
    else {
        channelNotFound(res)
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
        channelNotFound(res)
        return
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
        channelNotFound(res)
        return
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
        channelNotFound(res)
        return
    }
}

function channelNotFound(res) {
    res.status(404).json({
        message: '채널 정보를 찾을 수 없습니다.'
    })
}

module.exports = router