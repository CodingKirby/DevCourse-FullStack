// express 모듈 세팅
const express = require('express')
const router = express.Router()
const conn = require('../mariadb')
const {body, param, validationResult} = require('express-validator')

const validate = (req, res, next) => {
    const err = validationResult(req)
    if (!err.isEmpty()) {
        return res.status(400).json(err.array())
    }
    
    return next()
}

router
    .route('/')
    .post(
        [
            body('userId')
            .notEmpty().withMessage('userId는 숫자로 입력해주세요.')
            .isInt().withMessage('userId는 숫자로 입력해주세요.'),
            
            body('title')
            .notEmpty().withMessage('채널명을 입력해주세요.')
            .isString().withMessage('채널명은 문자여야 합니다.'),

            validate
        ],
        createChannel)
    .get(
        [
            body('userId')
            .notEmpty().withMessage('userId는 숫자로 입력해주세요.')
            .isInt().withMessage('userId는 숫자로 입력해주세요.'),

            validate
        ],
        getChannels)

router
    .route('/:id')
    .get(
        [
            param('id').notEmpty().withMessage('채널 id를 입력해주세요.'),

            validate
        ],
        getChannel)
    .delete(
        [
            param('id').notEmpty().withMessage('채널 id를 입력해주세요.'),

            validate
        ],
        deleteChannel)
    .put(
        [
            param('id').notEmpty().withMessage('채널 id를 입력해주세요.'),

            body('title')
            .notEmpty().withMessage('채널명을 입력해주세요.')
            .isString().withMessage('채널명은 문자여야 합니다.'),

            validate
        ],
        updateChannel)


/* ---------------------------- 채널 관련 함수 ---------------------------- */
/* ---------------------------- /channels ---------------------------- */
// 채널 생성
function createChannel(req, res) {
    const { title, userId } = req.body
    let sql = `INSERT INTO channels (title, user_id) VALUES (?, ?)`
    let values = [title, userId]
    
    conn.query(sql, values,
        function (err, results, fields) {
            if (err) {
                console.error(err)
                return res.status(500).json({ message: '채널 생성에 실패했습니다.' })
            }
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
            if (err) {
                console.error(err)
                return res.status(500).json({ message: '채널 조회에 실패했습니다.' })
            }

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
        if (err) {
            console.error(err)
            return res.status(500).json({ message: '채널 조회에 실패했습니다.' })
        }

        if (results.length === 0) {
            return channelNotFound(res)
        }
        
        return res.status(200).json(results)
    })
}

// 개별 채널 삭제
function deleteChannel(req, res) {
    const id = parseInt(req.params.id)
    let sql = `DELETE FROM channels WHERE id = ?`
    const values = [id]
    
    conn.query(sql, values,
        function (err, results, fields) {
            if (err) {
                console.error(err)
                return res.status(500).json({ message: '채널 삭제에 실패했습니다.' })
            }

            if (results.affectedRows === 0) {
                return channelNotFound(res)
            }

            return res.status(200).json(results)
        }
    )
}

// 개별 채널 수정
function updateChannel(req, res) {
    const id = parseInt(req.params.id)
    const title = req.body.title
    let sql = `UPDATE channels SET title = ? WHERE id = ?`
    let values = [title, id]
    
    conn.query(sql, values,
        function (err, results, fields) {
            if (err) {
                console.error(err)
                return res.status(500).json({ message: '채널 수정에 실패했습니다.' })
            }

            if (results.affectedRows === 0) {
                return channelNotFound(res)
            }

            return res.status(200).json(results)
        }
    )
}

function channelNotFound(res) {
    res.status(404).json({
        message: '채널 정보를 찾을 수 없습니다.'
    })
}

module.exports = router