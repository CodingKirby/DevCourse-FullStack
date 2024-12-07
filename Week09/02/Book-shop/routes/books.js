const express = require('express');
const { getAllBooks, getBookDetail } = require('../controllers/BookController');
const router = express.Router();

router.get('/', getAllBooks); // 전체 도서 목록 조회 
router.get('/:id', getBookDetail); // 개별 도서 조회

module.exports = router;