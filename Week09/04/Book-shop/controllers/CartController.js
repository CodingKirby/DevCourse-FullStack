const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');

// 장바구니 담기 = 추가
const addCartItems = (req, res) => {
    const { book_id, quantity } = req.body;
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

    const sql = `INSERT INTO cartItems (book_id, quantity, user_id) VALUES (?, ?, ?)`;
    const values = [book_id, quantity, authorization.user_id];

    conn.query(sql, values, (err, result) => {
        if (err) {
            return res.status(StatusCodes.BAD_REQUEST).json(result);
        }

        return res.status(StatusCodes.CREATED).json(result);
    });
};

// 장바구니 아이템 목록 조회
const getCartItems = (req, res) => {
    const { selected } = req.body; // selected = [cartItemId, cartItemId, ...]
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

    const sql = `SELECT cartItems.id, book_id, title, summary, quantity, price 
    FROM cartItems LEFT JOIN books 
    ON cartItems.book_id = books.id
    WHERE user_id = ? AND cartItems.id IN (?);`;
    const values = [authorization.user_id, selected];

    conn.query(sql, values, (err, result) => {
        if (err) {
            return res.status(StatusCodes.BAD_REQUEST).json(result);
        }

        return res.status(StatusCodes.OK).json(result);
    });
};

// 장바구니 아이템 삭제
const removeCartItems = (req, res) => {
    const cartItemId = req.params.id;
    const sql = `DELETE FROM cartItems WHERE id = ?`;
    const values = [cartItemId];

    conn.query(sql, values, (err, result) => {
        if (err) {
            return res.status(StatusCodes.BAD_REQUEST).json(result);
        }

        return res.status(StatusCodes.NO_CONTENT).end();
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

module.exports = { addCartItems, getCartItems, removeCartItems };