const express = require('express');
const router = express.Router();
const conn = require('../mariadb');
const { join, login, resetPasswordRequest, resetPassword } = require('../controllers/UserController');

router.post('/join', join); // 회원가입
router.post('/login', login); // 로그인
router.post('/reset', resetPasswordRequest); // 비밀번호 초기화 요청
router.put('/reset', resetPassword); // 비밀번호 초기화

module.exports = router;