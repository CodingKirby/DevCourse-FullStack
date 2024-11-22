const express = require('express');
const router = express.Router();
const { order, getOrders, getOrdersDetail } = require('../controller/OrderController');

// 주문하기
router.post('/', order);

// 주문 목록 조회
router.get('/', getOrders);

// 주문 상세 조회
router.get('/:id', getOrdersDetail);

module.exports = router;