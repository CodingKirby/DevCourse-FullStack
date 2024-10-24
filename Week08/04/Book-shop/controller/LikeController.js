const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');

// 좋아요 표시 = 추가
const addLikes = (req, res) => {
    const book_id = req.params.id;
    const { user_id } = req.body;

    const sql = 'INSERT INTO likes (user_id, book_id) VALUES (?, ?)';
    let values = [user_id, book_id];

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
    const { user_id } = req.body;

    const sql = 'DELETE FROM likes WHERE user_id = ? AND book_id = ?';
    let values = [user_id, book_id];

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