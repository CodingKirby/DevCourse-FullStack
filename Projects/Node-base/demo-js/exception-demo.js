const express = require('express')
const app = express()
app.listen(3000)

const fruits = [
    {id: 1, name: 'banana'},
    {id: 2, name: 'apple'},
    {id: 3, name: 'kiwi'},
    {id: 4, name: 'orange'}
]

// 과일 전체 조회
app.get('/fruits', (req, res) => {
    res.json(fruits)
})

// 과일 개별 조회
app.get('/fruits/:id', (req, res) => {
    let id = parseInt(req.params.id)
    // let findFruit = fruits[id-1] // 방법 1: 배열 인덱스로 조회

    // fruits.forEach(function (fruit) { // 방법 2: forEach() 메소드 사용
    //     if (fruit.id === id) {
    //         findFruit = fruit
    //     }
    // })

    // 방법 3: find() 메소드 사용
    // fruits 배열 안에 있는 객체 중, id 값이 params.id와 같은 객체를 찾아서 반환
    let findFruit = fruits.find(fruit => fruit.id === id) 

    // 예외 처리
    if (findFruit) {
        res.json(findFruit)
    }
    else { // 예외를 터뜨린다 = http status code로 성공이 아닌 실패 상태를 전달한다
        res.status(404).send(
            "전달주신 ID에 해당하는 과일이 없습니다."
        )
    }
})