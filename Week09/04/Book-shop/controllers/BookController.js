const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const ensureAuthorization = require('../auth');

// 전체 도서 목록 조회 + 카테고리 필터 + 신간 필터
const getAllBooks = (req, res) => {
    const { categoryId, news, limit, currentPage } = req.query;

    // limit: page 당 도서 수   ex. 10
    // currentPage: 현재 페이지  ex. 1, 2, 3, ...
    // offset: 시작 index      ex. 0, 10, 20, ...
    //                        (currentPage - 1) * limit
    
    let offset = (currentPage - 1) * limit;
    let sql = `SELECT *,
    (SELECT COUNT(*) FROM likes WHERE likes.book_id = books.id) AS likes
    FROM books`;
    let conditions = [];
    let values = [];

    // 카테고리 필터 추가
    if (categoryId) {
        conditions.push(`category_id = ?`);
        values.push(categoryId);
    }

    // 신간 필터 추가 (최근 한 달)
    if (news) {
        conditions.push(`pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW()`);
    }

    // 조건이 있으면 WHERE 절 추가
    if (conditions.length > 0) {
        sql += ` WHERE ` + conditions.join(' AND ');
    }

    // LIMIT와 OFFSET 추가
    sql += ` LIMIT ? OFFSET ?`;
    values.push(parseInt(limit), offset);

    conn.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }
        res.status(StatusCodes.OK).json(result);
    });
};

// 도서 상세 정보 조회
const getBookDetail = (req, res) => {
    const authorization = ensureAuthorization(req, res);
    const bookId = req.params.id;
    let sql, values;
    
    if (
        authorization instanceof jwt.TokenExpiredError ||
        authorization instanceof jwt.JsonWebTokenError ||
        authorization instanceof ReferenceError
    ) { // 로그인 상태가 아니거나 토큰이 만료/잘못된 경우 => liked 빼고 보내기
        sql = `SELECT books.*,
            (SELECT COUNT(*) FROM likes WHERE likes.book_id = books.id) AS likes,
            category.name AS category_name
        FROM books
        LEFT JOIN category ON books.category_id = category.id
        WHERE books.id = ?;`;
        values = [ bookId ];
    } else { // 로그인 상태면 => liked 추가해서 보내기
        sql = `SELECT books.*,
            (SELECT COUNT(*) FROM likes WHERE likes.book_id = books.id) AS likes,
            (SELECT EXISTS (
                SELECT * FROM likes WHERE user_id = ? AND book_id = books.id)
            ) AS liked, category.name AS category_name
        FROM books
        LEFT JOIN category ON books.category_id = category.id
        WHERE books.id = ?;`;
        values = [ authorization.userId, bookId ];
    }

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