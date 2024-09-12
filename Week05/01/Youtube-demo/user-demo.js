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
    if (!userId || !password || !userName) {
        res.status(400).json({ message: '모든 필드를 입력해주세요.' })
        return
    }

    // 이미 존재하는 아이디인지 확인
    const isExist = [...db.values()].some(user => user.userId === userId)
    if (isExist) {
        res.status(409).json({ message: '이미 존재하는 아이디입니다.' })
        return
    }

    // db에 새로운 사용자 추가
    const newUser = { "userId": userId, "password": password, "userName": userName }
    const uid = db.size + 1
    db.set(uid, newUser)

    res.status(201).json({ message: `${userName}님 환영합니다!` })
})

app
    .route('/users/:id')
    .get(getUser)
    .delete(deleteUser)

// 로그인: 방법 1 - 내 코드
app.post('/login', (req, res) => {
    const { userId, password } = req.body
    if (!userId || !password) {
        res.status(400).json({ message: '모든 필드를 입력해주세요.' })
        return
    }
    
    const findUser = [...db.values()].find(user => user.userId === userId)
    console.log(findUser)
    if (!findUser) {
        res.status(401).json({ message: '입력하신 아이디는 없는 아이디입니다.' })
        return
    }

    if (findUser.password === password) {
        res.json({ message: '로그인 성공' })
        return
    }
    else {
        res.status(401).json({ message: '로그인 실패' })
        return
    }
})


// 로그인: 방법 2 - 강사님 코드
/*
app.post('/login', (req, res) => {
    const { userId, password } = req.body
    let loginUser = undefined

    if (!userId || !password) {
        res.status(400).json({ message: '모든 필드를 입력해주세요.' })
        return
    }

    // userId가 db에 존재하는지 확인하고
    db.forEach(function (user, uid, db) {
        if (user.userId === userId) {
            loginUser = user
        }
    })
    
    // userId가 db에 존재하는 경우
    if (isExist(loginUser)) {
        // password가 일치하는지 비교해야 한다.
        if (loginUser.password === password) {
            res.json({ message: '로그인 성공' })
        }
        else {
            res.status(401).json({ message: '로그인 실패' })
            return
        }        
    }
    else {
        res.status(401).json({ message: '입력하신 아이디는 없는 아이디입니다.' })
    }
})
*/

/* ---------------------------- 함수 정의 ---------------------------- */
// 빈 객체인지 확인하는 함수
function isExist(obj) {
    if (obj && obj.constructor === Object) {
        return Object.keys(obj).length !== 0
    }
    return false
}

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