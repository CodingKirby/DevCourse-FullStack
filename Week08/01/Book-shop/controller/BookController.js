const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');

// 전체 도서 목록 조회 + 카테고리 필터 + 신간 필터
const getAllBooks = (req, res) => {
    const { category_id, news } = req.query;
    let sql = `SELECT * FROM books`;
    let conditions = [];
    let values = [];

    // 카테고리 필터 추가
    if (category_id) {
        conditions.push(`category_id = ?`);
        values.push(category_id);
    }

    // 신간 필터 추가 (최근 한 달)
    if (news) {
        conditions.push(`pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW()`);
    }

    // 조건이 있으면 WHERE 절 추가
    if (conditions.length > 0) {
        sql += ` WHERE ` + conditions.join(' AND ');
    }

    conn.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }
        res.status(StatusCodes.OK).json(result);
    });
};

const getBookDetail = (req, res) => {
    // 도서 상세 정보 조회
    const { id } = req.params;
    const sql = `SELECT books.*, category.name AS category_name
                FROM Bookshop.books
                LEFT JOIN category ON books.category_id = category.id WHERE books.id = ?;`;
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