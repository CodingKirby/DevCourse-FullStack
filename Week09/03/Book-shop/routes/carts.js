const express = require('express');
const router = express.Router();
const { addCartItems, getCartItems, removeCartItems } = require('../controllers/CartController');

// 장바구니 담기
router.post('/', addCartItems);

// 장바구니 목록 조회
router.get('/', getCartItems);

// 장바구니 상품 삭제
router.delete('/:id', removeCartItems);

module.exports = router;