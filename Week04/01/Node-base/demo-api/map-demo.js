let db = new Map() // 데이터베이스 역할을 하는 Map 객체 생성

db.set(1, "NoteBook") // set: 키로 밸류를 찾을 수 있는 한 쌍을 저장
db.set(2, "SmartPhone")
db.set(3, "Tablet")

// console.log(db) // get: 키로 밸류를 찾아 반환
// console.log(db.get(1)) // NoteBook
// console.log(db.get(2)) // SmartPhone
// console.log(db.get(3)) // Tablet


// db.set("1", "Desktop") // 키는 숫자가 아니어도 된다
// console.log(db.get("1")) // Desktop

// console.log(db.get(4)) // undefined: 존재하지 않는 키를 찾으면 undefined 반환

const express = require('express')
const app = express()
app.listen(3000)

app.get('/:id', function (req, res) {
    // localhost:3000/1 => NoteBook
    // localhost:3000/2 => SmartPhone
    // localhost:3000/3 => Tablet

    let {id} = req.params // const를 사용하면 id를 재할당할 수 없기 때문에 오류가 발생한다
    // id = parseInt(id)
    
    if (db.get(id) === undefined) { // undefined를 "로 감싸면 블록 안이 실행되지 않는다: undefined는 문자열이 아니기 때문에
        res.json({
            message: '존재하지 않는 상품입니다.'
        })
        return
    }

    res.json({
        id: id,
        productName: db.get(id)
    })
})