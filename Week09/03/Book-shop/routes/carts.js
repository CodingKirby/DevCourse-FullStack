const express = require('express');
const router = express.Router();
const { addCartItems, getCartItems, removeCartItems } = require('../controllers/CartController');

// 장바구니 담기
router.post('/', addCartItems);

// 장바구니 목록 조회
router.get('/', getCartItems);

// 장바구니 상품 삭제
router.delete('/:id', removeCartItems);

// 장바구니에서 선택한 상품 목룍 조회 (=주문 예정 상품)
// 아직 고안 중
// router.get('/selected', (req, res) => {
//     res.send('장바구니에서 선택한 상품 목록 조회')
// });

module.exports = router;