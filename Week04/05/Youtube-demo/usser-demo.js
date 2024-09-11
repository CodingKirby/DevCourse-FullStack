// express 모듈 세팅
const express = require('express')
const app = express()
app.listen(3000)
app.use(express.json())

let db = new Map()
// 초기 사용자 데이터
db.set(1, { "userId": "testId", "password": "1234", "userName": "김정현" })

// 회원가입
app.post('/join', (req, res) => {
    // 요청 바디에 id, password, userName이 있는지 확인
    const { userId, password, userName } = req.body

    if (userId && password && userName) {
        // 이미 존재하는 아이디인지 확인
        if ([...db.values()].some(user => user.userId === userId)) {
            res.status(409).json({ message: '이미 존재하는 아이디입니다.' })
            return
        }

        const newUser = { "userId": userId, "password": password, "userName": userName }
        const uid = db.size + 1
        db.set(uid, newUser)

        res.status(201).json({ message: `${userName}님 환영합니다!` })
    }
    else {
        res.status(400).json({ message: '모든 필드를 입력해주세요.' })
    }
})

// 회원 개별 조회
function getUser(req, res) {
    const uid = parseInt(req.params.id)
    const user = db.get(uid)

    if (user) {
        user.userId = uid
        delete user.password
        res.json(user)
    }
    else {
        res.status(404).json({ message: '사용자를 찾을 수 없습니다.' })
    }
}

// 회원 개별 탈퇴
function deleteUser(req, res) {
    const uid = parseInt(req.params.id)
    const user = db.get(uid)

    if (user) {
        const userName = user.userName
        db.delete(uid)
        res.json({ message: `${userName}님, 다음에 또 뵙겠습니다.` })
    }
    else {
        res.status(404).json({ message: '사용자를 찾을 수 없습니다.' })
    }
}

app
    .route('/users/:id')
    .get(getUser)
    .delete(deleteUser)

// 로그인
app.post('/login', (req, res) => {
    const { userId, password } = req.body
    const findUser = [...db.values()].find(user => user.userId === userId)
    console.log(findUser)

    if (findUser && findUser.password === password) {
        res.json({ message: '로그인 성공' })
    }
    else {
        res.status(401).json({ message: '로그인 실패' })
        return
    }
})