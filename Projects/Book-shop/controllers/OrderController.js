const mariadb = require("mysql2/promise");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const ensureAuthorization = require("../auth");

// 주문하기
const order = async (req, res) => {
  const conn = await mariadb.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "Bookshop",
    dateStrings: true,
  });

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

  const { cartItems, delivery, titleBook, totalQuantity, totalPrice } =
    req.body;

  // 1. delivery 테이블에 주문 정보 저장
  let sql = `INSERT INTO delivery (address, receiver, contact) VALUES (?, ?, ?)`;
  let values = [delivery.address, delivery.receiver, delivery.contact];
  let [results] = await conn.execute(sql, values);
  const deliveryId = results.insertId;

  // 2. orders 테이블에 주문 정보 저장
  sql = `INSERT INTO orders (user_id, delivery_id, title_book, total_quantity, total_price)
            VALUES (?, ?, ?, ?, ?)`;
  values = [
    authorization.userId,
    deliveryId,
    titleBook,
    totalQuantity,
    totalPrice,
  ];
  [results] = await conn.execute(sql, values);
  let orderId = results.insertId;

  // cartItemId로 book_id와 quantity 가져오기
  sql = `SELECT book_id, quantity FROM cartItems WHERE id IN (?)`;
  let [orderItems, fields] = await conn.query(sql, [cartItems]);

  // 3. ordered 테이블에 주문 상세 정보 저장
  sql = `INSERT INTO ordered (order_id, book_id, quantity) VALUES ?`;
  values = [];
  // cartItems 배열 : 요소들을 하나씩 꺼내서(foreach문 돌려서) > values 배열에 넣기
  orderItems.forEach((item) => {
    values.push([orderId, item.book_id, item.quantity]);
  });
  [results] = await conn.query(sql, [values]); // 여러 개의 데이터를 한 번에 넣을 때는 query 사용

  // 4. 주문한 상품 장바구니에서 삭제
  results = await deleteCartItems(conn, cartItems);

  return res.status(StatusCodes.CREATED).json({ results });
};

// 장바구니 아이템 삭제
const deleteCartItems = async (conn, cartItems) => {
  let sql = `DELETE FROM cartItems WHERE id IN (?)`;
  let results = await conn.query(sql, [cartItems]);
  return results;
};

// 주문 목록 조회
const getOrders = async (req, res) => {
  const conn = await mariadb.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "Bookshop",
    dateStrings: true,
  });

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

  let sql = `SELECT * FROM orders LEFT JOIN delivery ON orders.delivery_id = delivery.id WHERE user_id = ?`;
  let values = [authorization.userId];
  let [results, fields] = await conn.query(sql, values);

  if (results.length) {
    results.map(function (result) {
      result.userId = result.user_id;
      result.deliveryId = result.delivery_id;
      result.titleBook = result.title_book;
      result.totalQuantity = result.total_quantity;
      result.totalPrice = result.total_price;
      result.createdAt = result.created_at;

      delete result.user_id;
      delete result.delivery_id;
      delete result.title_book;
      delete result.total_quantity;
      delete result.total_price;
      delete result.created_at;
    });
  }

  return res.status(StatusCodes.OK).json(results);
};

// 주문 상세 조회
const getOrdersDetail = async (req, res) => {
  const conn = await mariadb.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "Bookshop",
    dateStrings: true,
  });

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

  const orderId = req.params.id;
  let sql = `SELECT * FROM ordered
            LEFT JOIN books ON ordered.book_id = books.id
            LEFT JOIN orders ON ordered.order_id = orders.id
            WHERE order_id = ? AND user_id = ?`;
  let values = [orderId, authorization.userId];
  let [results, fields] = await conn.query(sql, values);

  if (results.length) {
    results = results.map(({ book_id, title, author, price, quantity }) => ({
      book_id,
      title,
      author,
      price,
      quantity,
    }));
  }

  return res.status(StatusCodes.OK).json(results);
};

module.exports = { order, getOrders, getOrdersDetail };
