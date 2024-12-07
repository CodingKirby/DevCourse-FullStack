const express = require('express');
const router = express.Router();
const { addLikes, removeLikes } = require('../controllers/LikeController');

// 좋아요 표시 = 추가
router.post('/:id', addLikes);

// 좋아요 취소 = 삭제
router.delete('/:id', removeLikes);

module.exports = router;