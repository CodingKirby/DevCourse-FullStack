// mysql 모듈 호출
const mysql = require('mysql2');

// DB 연결 정보
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Bookshop',
    dateStrings: true
});

module.exports = connection;