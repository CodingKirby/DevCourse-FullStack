const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const ensureAuthorization = require('../auth'); // 인증 모듈

// 좋아요 표시 = 추가
const addLikes = (req, res) => {
    const bookId = req.params.id;
    const authorization = ensureAuthorization(req, res);
    if (authorization instanceof jwt.TokenExpiredError) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message: "로그인 세션이 만료되었습니다. 다시 로그인해주세요."
        });
    } else if (authorization instanceof jwt.JsonWebTokenError) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "잘못된 토큰입니다."
        });
    }

    let sql = 'INSERT INTO likes (user_id, book_id) VALUES (?, ?)';
    let values = [authorization.userId, bookId];

    conn.query(sql, values, (err, result) => {
        if (err) {
            return res.status(StatusCodes.BAD_REQUEST).json(result).end();
        }

        if (result.affectedRows === 0) {
            return res.status(StatusCodes.NOT_FOUND).json(result).end();
        }
        
        return res.status(StatusCodes.CREATED).json(result).end();
    });
};

// 좋아요 취소 = 삭제
const removeLikes = (req, res) => {
    const bookId = req.params.id;
    const authorization = ensureAuthorization(req, res);
    if (authorization instanceof jwt.TokenExpiredError) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message: "로그인 세션이 만료되었습니다. 다시 로그인해주세요."
        });
    } else if (authorization instanceof jwt.JsonWebTokenError) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "잘못된 토큰입니다."
        });
    }
    
    let sql = 'DELETE FROM likes WHERE user_id = ? AND book_id = ?';
    let values = [authorization.userId, bookId];

    conn.query(sql, values, (err, result) => {
        if (err) {
            return res.status(StatusCodes.BAD_REQUEST).json(result).end();
        }
        
        if (result.affectedRows === 0) {
            return res.status(StatusCodes.NOT_FOUND).json(result).end();
        }

        return res.status(StatusCodes.OK).json(result).end();
    });
};

module.exports = { addLikes, removeLikes };