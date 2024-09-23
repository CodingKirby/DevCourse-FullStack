// express 모듈 세팅
const express = require('express')
const router = express.Router()
const conn = require('../mariadb')

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
    const { title, userId } = req.body
    if (!title || !userId) {
        return res.status(400).json({ message: '모든 필드를 입력해주세요.' })
    }

    let sql = `INSERT INTO channels (title, user_id) VALUES (?, ?)`
    let values = [title, userId]
    
    conn.query(sql, values,
        function (err, results, fields) {
            console.log(results)
            return res.status(201).json(results)
        }
    )
}

function getChannels(req, res) {
    const { userId } = req.body
    let sql = `SELECT * FROM channels WHERE user_id = ?`
    let values = [userId]

    conn.query(sql, values,
        function (err, results, fields) {
            if (results.length === 0) {
                return channelNotFound(res)
            }
            return res.status(200).json(results)
        }
    )
}

/* ---------------------------- /channels/:id ---------------------------- */
// 개별 채널 조회
function getChannel(req, res) {
    const id = parseInt(req.params.id)
    
    let sql = `SELECT * FROM channels WHERE id = ?`
    conn.query(sql, [id],
        function (err, results, fields) {
        if (results.length === 0) {
            return channelNotFound(res)
        }
        
        return res.status(200).json(results)
    })
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