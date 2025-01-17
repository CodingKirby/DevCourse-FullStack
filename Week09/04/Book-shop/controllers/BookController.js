const conn = require("../mariadb");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const ensureAuthorization = require("../auth");

// 전체 도서 목록 조회 + 카테고리 필터 + 신간 필터
const getAllBooks = (req, res) => {
  let response = {};
  const { categoryId, news, limit, currentPage } = req.query;

  // limit: page 당 도서 수   ex. 10
  // currentPage: 현재 페이지  ex. 1, 2, 3, ...
  // offset: 시작 index      ex. 0, 10, 20, ...
  //                        (currentPage - 1) * limit

  let offset = (currentPage - 1) * limit;
  let sql = `SELECT SQL_CALC_FOUND_ROWS *,
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
    conditions.push(
      `pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW()`
    );
  }

  // 조건이 있으면 WHERE 절 추가
  if (conditions.length > 0) {
    sql += ` WHERE ` + conditions.join(" AND ");
  }

  // LIMIT와 OFFSET 추가
  sql += ` LIMIT ? OFFSET ?`;
  values.push(parseInt(limit), offset);

  conn.query(sql, values, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
    if (results.length === 0) {
      return res.status(StatusCodes.NOT_FOUND).end();
    }

    // 데이터 가공
    if (results.length) {
      results.map(function (result) {
        result.categoryId = result.category_id;
        result.pubDate = result.pub_date;

        delete result.category_id;
        delete result.pub_date;
      });
    }

    response.books = results;

    sql = `SELECT found_rows()`;
    conn.query(sql, (err, results) => {
      if (err) {
        console.error(err);
        return res.status(StatusCodes.BAD_REQUEST).end();
      }

      // 페이지네이션 정보 추가
      let pagenation = {
        currentPage: parseInt(currentPage),
        totalCount: results[0]["found_rows()"],
      };
      response.pagenation = pagenation;

      return res.status(StatusCodes.OK).json(response);
    });
  });
};

// 도서 상세 정보 조회
const getBookDetail = (req, res) => {
  const authorization = ensureAuthorization(req, res);
  const isAuthorized = !(
    authorization instanceof jwt.TokenExpiredError ||
    authorization instanceof jwt.JsonWebTokenError ||
    authorization instanceof ReferenceError
  );
  const bookId = req.params.id;

  // 로그인 상태가 아니거나 토큰이 만료/잘못된 경우 => liked 빼고 보내기
  let sql = `
        SELECT books.*, 
               (SELECT COUNT(*) FROM likes WHERE likes.book_id = books.id) AS likes,
               category.name AS category_name
    `;
  if (isAuthorized) {
    // 로그인 상태면 => liked 추가해서 보내기
    sql += `,
               (SELECT EXISTS (
                   SELECT * FROM likes WHERE user_id = ? AND book_id = books.id)
               ) AS liked`;
  }
  sql += `
        FROM books
        LEFT JOIN category ON books.category_id = category.id
        WHERE books.id = ?;
    `;
  let values = isAuthorized ? [authorization.userId, bookId] : [bookId];

  conn.query(sql, values, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }

    if (results.length === 0) {
      return res.status(StatusCodes.NOT_FOUND).end();
    }

    if (results.length) {
      results.map(function (result) {
        result.categoryId = result.category_id;
        result.categoryName = result.category_name;
        delete result.category_id;
        delete result.category_name;
      });
    }

    res.status(StatusCodes.OK).json(results);
  });
};

module.exports = { getAllBooks, getBookDetail };
