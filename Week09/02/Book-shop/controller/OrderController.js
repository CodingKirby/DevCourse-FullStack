const mariadb = require('mysql2/promise');
const { StatusCodes } = require('http-status-codes');

// 주문하기
const order = async (req, res) => {
    const conn = await mariadb.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'Bookshop',
        dateStrings: true
    });

    const { userId, items, shipping, firstBookTitle, totalQuantity, totalPrice } = req.body;
    
    // 1. shipping 테이블에 주문 정보 저장
    let sql = 'INSERT INTO shipping (address, receiver, contact) VALUES (?, ?, ?)';
    let values = [shipping.address, shipping.receiver, shipping.contact];
    let [ result ] = await conn.execute(sql, values);
    let shipping_id = result.insertId;

    // 2. orders 테이블에 주문 정보 저장
    sql = 'INSERT INTO orders (user_id, shipping_id, main_book, total_quantity, total_price) VALUES (?, ?, ?, ?, ?)';
    values = [userId, shipping_id, firstBookTitle, totalQuantity, totalPrice];
    [ result ] = await conn.execute(sql, values);
    let order_id = result.insertId;

    // 3. ordered 테이블에 주문 상세 정보 저장
    sql = 'INSERT INTO ordered (order_id, book_id, quantity) VALUES ?';
    values = [];
    // items 배열 : 요소들을 하나씩 꺼내서(foreach문 돌려서) > values 배열에 넣기
    items.forEach((item) => {
        values.push([order_id, item.book_id, item.quantity]);
    });
    [ result ] = await conn.query(sql, [values]);
    return res.status(StatusCodes.CREATED).json({ result });
};

// 주문 목록 조회
const getOrders = (req, res) => {
    res.send('주문 목록 조회');
};

// 주문 상세 조회
const getOrdersDetail = (req, res) => {
    res.send('주문 상세 조회');
};

module.exports = { order, getOrders, getOrdersDetail };