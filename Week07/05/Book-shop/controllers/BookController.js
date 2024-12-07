const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');

const getAllBooks = (req, res) => {
    const { category_id } = req.query;

    // 카테고리별 도서 리스트
    if (category_id) {
        const sql = `SELECT * FROM books WHERE category_id = ?`;
        const values = [category_id];
        conn.query(sql, values
            , (err, result) => {
            if (err) {
                console.log(err);
                return res.status(StatusCodes.BAD_REQUEST).end();
            }
            res.status(StatusCodes.OK).json(result);
        });
        return;
    }

    // (요약된) 전체 도서 리스트 -> 프론트엔드에서 알아서 필요한 데이터만 사용
    const sql = `SELECT * FROM books`;
    conn.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }
        res.status(StatusCodes.OK).json(result);
    });
};

const getBookDetail = (req, res) => {
    // 도서 상세 정보 조회
    const { id } = req.params;
    const sql = `SELECT * FROM books WHERE id = ?`;
    const values = [id];
    conn.query(sql, values, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }
        
        if (result.length === 0) {
            return res.status(StatusCodes.NOT_FOUND).end();
        }
        res.status(StatusCodes.OK).json(result);
    });
};

module.exports = { getAllBooks, getBookDetail };