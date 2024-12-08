const express = require('express');
const router = express.Router();
const { getAllCategories } = require('../controllers/CategoryController');

router.get('/', getAllCategories); // 전체 카테고리 목록 조회

module.exports = router;