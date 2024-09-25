// express 모듈 세팅
const express = require('express')
const router = express.Router()
const conn = require('../mariadb')

// 라우터 설정
router.post('/join', (req, res) => {
    joinUser(req, res)
})

router.post('/login', (req, res) => {
    loginUser(req, res)
})

router
    .route('/')
    .get(getUser)
    .delete(deleteUser)


/* ---------------------------- 함수 정의 ---------------------------- */
function joinUser(req, res) {
    // 요청 바디에 id, password, userName이 있는지 확인
    const { email, name, password, contact } = req.body
    if (!email || !name || !password || !contact) {
        return res.status(400).json({ message: '모든 필드를 입력해주세요.' })
    }

    let sql = `INSERT INTO users (email, name, password, contact) VALUES (?, ?, ?, ?)`
    let values = [email, name, password, contact]

    conn.query(sql, values,
        function (err, results, fields) {
            if (err) {
                console.log(err)
                return res.status(400).json({ message: '회원가입에 실패했습니다.' })
            }
            return res.status(201).json({ message: `${name}님 환영합니다.` })
        }
    )
}

function loginUser(req, res) {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ message: '모든 필드를 입력해주세요.' })
    }

    let sql = 'SELECT * FROM `users` WHERE `email` = ? AND `password` = ?'
    let values = [email, password]

    conn.query(sql, values,
        function (err, results, fields) {
            console.log(err)
            const loginUser = results[0]
            
            if (!loginUser) {
                return res.status(404).json({ message: '아이디 또는 비밀번호가 틀렸습니다.' })
            }

            return res.status(200).json(`${loginUser.name}님 로그인 되었습니다.`)
        }
    )
}

function getUser(req, res) {
    let { email } = req.body
    let sql = 'SELECT * FROM `users` WHERE `email` = ?'
    let values = [email]

    conn.query(sql, values,
        function (err, results, fields) {
            if (results.length === 0) {
                return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' })
            }
            
            return res.status(200).json(results)
        }
    )
}

// 회원 개별 탈퇴
function deleteUser(req, res) {
    let { email } = req.body
    let sql = 'DELETE FROM `users` WHERE `email` = ?'
    let values = [email]

    conn.query(sql, values,
        function (err, results, fields) {
            if (results.affectedRows === 0) {
                return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' })
            }
            
            return res.status(200).json(results)
        }
    )
}

module.exports = router