const express = require('express');
const router = express.Router();

// 주문하기
router.post('/', (req, res) => {
    res.send('주문하기')
});

// 주문 목록 조회
router.get('/', (req, res) => {
    res.send('주문 목록 조회')
});

// 주문 상세 조회
router.get('/:id', (req, res) => {
    res.send('주문 상세 조회')
});

module.exports = router;