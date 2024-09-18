// express 모듈 세팅
const express = require('express')
const router = express.Router()

let db = new Map()
// 초기 사용자 데이터
db.set("testId1", { "userId": "testId1", "password": "1234", "userName": "김정현" })

// 회원가입
router.post('/join', (req, res) => {
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
    db.set(userId, newUser)
    
    res.status(201).json({ message: `${userName}님 환영합니다!` })
})

router
    .route('/')
    .get(getUser)
    .delete(deleteUser)

// 로그인: 방법 1 - 내 코드
router.post('/login', (req, res) => {
    const { userId, password } = req.body;

    // 모든 필드가 입력되었는지 확인
    if (!userId || !password) {
        return res.status(400).json({ message: '모든 필드를 입력해주세요.' });
    }

    // 유저 아이디로 사용자 찾기
    const findUser = Array.from(db.values()).find(user => user.userId === userId);

    // 아이디가 없는 경우
    if (!findUser) {
        return res.status(404).json({ message: '입력하신 아이디는 없는 아이디입니다.' });
    }

    // 비밀번호 검증
    if (findUser.password !== password) {
        return res.status(400).json({ message: '비밀번호가 틀렸습니다.' });
    }

    // 로그인 성공
    return res.status(200).json({ message: `${findUser.userName}님 로그인 되었습니다.` });
});

/*
// 로그인: 방법 2 - 강사님 코드
router.post('/login', (req, res) => {
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
            res.status(400).json({ message: '로그인 실패' })
            return
        }        
    }
    else {
        res.status(404).json({ message: '입력하신 아이디는 없는 아이디입니다.' })
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
    let { userId } = req.body
    const user = db.get(userId)

    if (user) {
        user.userId = userId
        delete user.password
        res.json(user)
    }
    else {
        res.status(404).json({ message: '사용자를 찾을 수 없습니다.' })
    }
}

// 회원 개별 탈퇴
function deleteUser(req, res) {
    let { userId } = req.body
    const user = db.get(userId)

    if (user) {
        const userName = user.userName
        db.delete(uid)
        res.json({ message: `${userName}님, 다음에 또 뵙겠습니다.` })
    }
    else {
        res.status(404).json({ message: '사용자를 찾을 수 없습니다.' })
    }
}

module.exports = router