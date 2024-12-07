const express = require('express');
const { getAllCategories } = require('../controllers/CategoryController');
const router = express.Router();

router.get('/', getAllCategories); // 전체 카테고리 목록 조회

module.exports = router;