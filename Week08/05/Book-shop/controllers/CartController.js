const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');

// 장바구니 담기 = 추가
const addCartItems = (req, res) => {
    const { book_id, quantity, user_id } = req.body;
    const sql = `INSERT INTO cartItems (book_id, quantity, user_id) VALUES (?, ?, ?)`;
    const values = [book_id, quantity, user_id];

    conn.query(sql, values, (err, result) => {
        if (err) {
            return res.status(StatusCodes.BAD_REQUEST).json(result).end();
        }

        return res.status(StatusCodes.CREATED).json(result).end();
    });
};

// 장바구니 아이템 목록 조회
const getCartItems = (req, res) => {
    const { user_id, selected } = req.body; // selected = [1, 3, ...]
    const sql = `SELECT cartItems.id, book_id, title, summary, quantity, price 
    FROM cartItems LEFT JOIN books 
    ON cartItems.book_id = books.id
    WHERE user_id = ?
    AND cartItems.id IN (?);`;
    const values = [user_id, selected];

    conn.query(sql, values, (err, result) => {
        if (err) {
            return res.status(StatusCodes.BAD_REQUEST).json(result).end();
        }

        return res.status(StatusCodes.OK).json(result).end();
    });
};

// 장바구니 아이템 삭제
const removeCartItems = (req, res) => {
    const { id } = req.params; // cartItemsId
    const sql = `DELETE FROM cartItems WHERE id = ?`;
    const values = [id];

    conn.query(sql, values, (err, result) => {
        if (err) {
            return res.status(StatusCodes.BAD_REQUEST).json(result).end();
        }

        return res.status(StatusCodes.NO_CONTENT).end();
    });
};

module.exports = { addCartItems, getCartItems, removeCartItems };