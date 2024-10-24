const express = require('express');
const { addCartItems, getCartItems, removeCartItems } = require('../../../04/Book-shop/controller/CartController');
const router = express.Router();

// 장바구니 담기
router.post('/', addCartItems);

// 장바구니 목록 조회
// 장바구니에서 선택한 상품 목룍 조회 (=주문 예정 상품)
router.get('/', getCartItems);

// 장바구니 상품 삭제
router.delete('/:id', removeCartItems);

module.exports = router;