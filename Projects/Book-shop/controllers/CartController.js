const conn = require("../mariadb");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const ensureAuthorization = require("../auth"); // 인증 모듈

// 장바구니 담기 = 추가
const addCartItems = (req, res) => {
  const authorization = ensureAuthorization(req, res);
  if (authorization instanceof jwt.TokenExpiredError) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: "로그인 세션이 만료되었습니다. 다시 로그인해주세요.",
    });
  } else if (authorization instanceof jwt.JsonWebTokenError) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "잘못된 토큰입니다.",
    });
  } else if (authorization instanceof ReferenceError) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "토큰이 필요합니다.",
    });
  }

  const { bookId, quantity } = req.body;
  let sql = `INSERT INTO cartItems (book_id, quantity, user_id) VALUES (?, ?, ?)`;
  let values = [bookId, quantity, authorization.userId];

  conn.query(sql, values, (err, results) => {
    if (err) {
      return res.status(StatusCodes.BAD_REQUEST).json(results);
    }

    return res.status(StatusCodes.CREATED).json(results);
  });
};

// 장바구니 아이템 목록 조회
const getCartItems = (req, res) => {
  const authorization = ensureAuthorization(req, res);
  if (authorization instanceof jwt.TokenExpiredError) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: "로그인 세션이 만료되었습니다. 다시 로그인해주세요.",
    });
  } else if (authorization instanceof jwt.JsonWebTokenError) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "잘못된 토큰입니다.",
    });
  } else if (authorization instanceof ReferenceError) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "토큰이 필요합니다.",
    });
  }

  const { selected } = req.body; // selected = [cartItemId, cartItemId, ...]
  // 해당 회원의 전체 장바구니 목록 조회
  let sql = `SELECT cartItems.id, book_id, title, summary, quantity, price 
        FROM cartItems LEFT JOIN books 
        ON cartItems.book_id = books.id
        WHERE user_id = ?`;
  let values = [authorization.userId];

  if (selected) {
    // 주문서 작성 시 '선택한 장바구니 목록 조회'
    sql += ` AND cartItems.id IN (?)`;
    values.push(selected);
  }

  conn.query(sql, values, (err, results) => {
    if (err) {
      return res.status(StatusCodes.BAD_REQUEST).json(results);
    }

    if (results.length) {
      results.map(function (result) {
        result.bookId = result.book_id;
        delete result.book_id;
      });
    }

    return res.status(StatusCodes.OK).json(results);
  });
};

// 장바구니 아이템 삭제
const removeCartItems = (req, res) => {
  const authorization = ensureAuthorization(req, res);
  if (authorization instanceof jwt.TokenExpiredError) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: "로그인 세션이 만료되었습니다. 다시 로그인해주세요.",
    });
  } else if (authorization instanceof jwt.JsonWebTokenError) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "잘못된 토큰입니다.",
    });
  } else if (authorization instanceof ReferenceError) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "토큰이 필요합니다.",
    });
  }

  const cartItemId = req.params.id;
  let sql = `DELETE FROM cartItems WHERE id = ?`;
  let values = [cartItemId];
  conn.query(sql, values, (err, results) => {
    if (err) {
      return res.status(StatusCodes.BAD_REQUEST).json(results);
    }

    return res.status(StatusCodes.NO_CONTENT).end();
  });
};

module.exports = { addCartItems, getCartItems, removeCartItems };
