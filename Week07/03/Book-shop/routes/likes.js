const express = require('express');
const router = express.Router();

// 좋아요 표시 = 추가
router.post('/:id', (req, res) => {
    res.send('좋아요 표시')
});

// 좋아요 취소 = 삭제
router.delete('/:id', (req, res) => {
    res.send('좋아요 취소')
});

module.exports = router;