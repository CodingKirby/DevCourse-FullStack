const express = require('express');
const router = express.Router();

// 장바구니 담기
router.post('/', (req, res) => {
    res.send('장바구니 담기')
});

// 장바구니 목록 조회
router.get('/', (req, res) => {
    res.send('장바구니 목록 조회')
});

// 장바구니 상품 삭제
router.delete('/:id', (req, res) => {
    res.send('장바구니 상품 삭제')
});

// 장바구니에서 선택한 상품 목룍 조회 (=주문 예정 상품)
// 아직 고안 중
// router.get('/selected', (req, res) => {
//     res.send('장바구니에서 선택한 상품 목록 조회')
// });

module.exports = router;