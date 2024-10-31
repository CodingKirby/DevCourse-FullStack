let db = new Map() // 데이터베이스 역할을 하는 Map 객체 생성

let notebook = {
    productName: "NoteBook",
    price: 1800000
}

let smartPhone = {
    productName: "SmartPhone",
    price: 1200000
}

let tablet = {
    productName: "Tablet",
    price: 800000
}

let desktop = {
    productName: "Desktop",
    price: 2000000
}

db.set(1, notebook) // set: 키로 밸류를 찾을 수 있는 한 쌍을 저장
db.set(2, smartPhone)
db.set(3, tablet)
db.set(4, desktop)

// console.log(db.get(1)) // NoteBook
// console.log(db.get(2)) // SmartPhone
// console.log(db.get(3)) // Tablet
// console.log(db.get(4)) // Desktop

const express = require('express')
const app = express()
app.listen(3000)

app.get('/:id', function (req, res) {
    let {id} = req.params // const를 사용하면 id를 재할당할 수 없기 때문에 오류가 발생한다
    id = parseInt(id)

    if (db.get(id) === undefined) { // undefined를 "로 감싸면 블록 안이 실행되지 않는다: undefined는 문자열이 아니기 때문에
        res.json({
            message: '존재하지 않는 상품입니다.'
        })
        return
    }
    
    product = db.get(id)
    product.id = id // id를 추가해준다
    product["id"] = id // 위와 같은 방법

    res.json(product)
})