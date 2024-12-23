const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');

// 좋아요 표시 = 추가
const addLikes = (req, res) => {
    const book_id = req.params.id;
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

    const sql = 'INSERT INTO likes (user_id, book_id) VALUES (?, ?)';
    let values = [authorization.user_id, book_id];

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
    const book_id = req.params.id;
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
    
    const sql = 'DELETE FROM likes WHERE user_id = ? AND book_id = ?';
    let values = [authorization.user_id, book_id];

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

function ensureAuthorization(req, res) {
    try {
        const receivedJwt = req.headers['authorization'];
        const decodedJwt = jwt.verify(receivedJwt, process.env.PRIVATE_KEY);
        // console.log("receivedJwt: ", receivedJwt);
        // console.log("decodedJwt: ", decodedJwt);
        return decodedJwt;
    } catch (error) {
        console.error("JWT 검증 오류:", error.name, error.message);
        return error;
    }
}

module.exports = { addLikes, removeLikes };