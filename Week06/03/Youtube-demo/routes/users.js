// express 모듈 세팅
const express = require('express')
const router = express.Router()
const conn = require('../mariadb')

const { body, validationResult } = require('express-validator')
const validate = (req, res, next) => {
    const err = validationResult(req)
    if (!err.isEmpty()) {
        return res.status(400).json(err.array())
    }

    return next()
}

// jwt
const jwt = require('jsonwebtoken')

// 라우터 설정
router.post('/join', // 회원가입
    [
        body('email').notEmpty().isString().isEmail().withMessage('이메일을 확인해주세요.'),
        body('name').notEmpty().isString().withMessage('이름을 확인해주세요.'),
        body('password').notEmpty().isString().withMessage('비밀번호를 확인해주세요.'),
        body('contact').notEmpty().isString().withMessage('연락처를 확인해주세요.'),
        validate
    ],
    joinUser
)

router.post('/login', // 로그인
    [
        body('email').notEmpty().isString().isEmail().withMessage('이메일을 확인해주세요.'),
        body('password').notEmpty().isString().withMessage('비밀번호를 확인해주세요.'),
        validate
    ],
    loginUser
)

router
    .route('/')
    .get( // 사용자 개별 조회
        [
            body('email').notEmpty().isString().isEmail().withMessage('이메일을 확인해주세요.'),
            validate
        ],
        getUser
    )
    .delete( // 사용자 탈퇴
        [
            body('email').notEmpty().isString().isEmail().withMessage('이메일을 확인해주세요.'),
            validate
        ],
        deleteUser
    )


/* ---------------------------- 함수 정의 ---------------------------- */
// 회원가입
function joinUser(req, res) {
    let { email, name: userName, password, contact } = req.body
    let sql = `INSERT INTO users (email, name, password, contact) VALUES (?, ?, ?, ?)`
    let values = [ email, userName, password, contact ]
    
    conn.query(sql, values,
        function (err, results, fields) {
            if (err) {
                console.log(err)
                return res.status(400).json({ message: '회원가입에 실패했습니다.' })
            }
            
            return res.status(201).json({ message: `${userName}님 환영합니다.` })
        }
    )
}

// 로그인
function loginUser(req, res) {
    let { email, password } = req.body
    let sql = 'SELECT * FROM `users` WHERE `email` = ? AND `password` = ?'
    let values = [email, password]

    conn.query(sql, values,
        function (err, results, fields) {
            if (err) {
                console.error(err)
                return res.status(500).json({ message: '로그인에 실패했습니다.' })
            }
            
            const loginUser = results[0]
            if (!loginUser) {
                // 사실 404가 아니라, 403 Forbidden이 맞다!
                // -> 404는 리소스를 찾을 수 없을 때 사용
                // -> 403은 권한이 없을 때 사용 = 인가되지 않은 사용자
                return res.status(403).json({ message: '아이디 또는 비밀번호가 틀렸습니다.' })
            }

            // 로그인 성공 -> jwt 발급
            const token = jwt.sign({
                email : loginUser.email,
                name : loginUser.name
            }, process.env.PRIVATE_KEY, { // 프라이빗키
                expiresIn: '30m', // 30분
                issuer: 'codingkirby'
            });
            console.log(token)

            res.cookie('token', token, {
                httpOnly: true
            })
            return res.status(200).json({
                message: `${loginUser.name}님 로그인 되었습니다.`
            })
        }
    )
}

// 회원 개별 조회xw
function getUser(req, res) {
    let { email } = req.body
    let sql = 'SELECT * FROM `users` WHERE `email` = ?'
    let values = [email]

    conn.query(sql, values,
        function (err, results, fields) {
            if (err) {
                console.error(err)
                return res.status(500).json({ message: '사용자 조회에 실패했습니다.' })
            }

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
            if (err) {
                console.error(err)
                return res.status(500).json({ message: '사용자 탈퇴에 실패했습니다.' })
            }

            if (results.affectedRows === 0) {
                return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' })
            }
            
            return res.status(200).json(results)
        }
    )
}

module.exports = router