const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const join = (req, res) => {
    const { email, password } = req.body;

    const salt = crypto.randomBytes(10).toString('base64');
    const hashedPassword = crypto.pbkdf2Sync(password, salt, 100000, 10, 'sha512').toString('base64');

    const sql = `INSERT INTO users (email, password, salt) VALUES (?, ?, ?)`;
    const values = [email, hashedPassword, salt];
    
    conn.query(sql, values, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }
        res.status(StatusCodes.CREATED).json(result);
    });
};

const login = (req, res) => {
    const { email, password } = req.body;
    const sql = `SELECT * FROM users WHERE email = ?`;
    const values = [ email ];

    conn.query(sql, values, (err, result) => {
        if (err) { // 로그인 실패: 사용자 입력값이 부적절한 경우
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }

        const loginUser = result[0];
        
        // salt 값 가져와 rawPassword를 암호화한 후
        const salt = loginUser.salt
        const hashedPassword = crypto.pbkdf2Sync(password, salt, 100000, 10, 'sha512').toString('base64');

        // (새로 암호화된 해시와) db에 저장된 암호화된 비밀번호를 비교
        if (!loginUser || loginUser.password !== hashedPassword) { // 로그인 실패: 사용자가 존재하지 않거나 비밀번호가 일치하지 않는 경우
            return res.status(StatusCodes.UNAUTHORIZED).end();
        }
        
        const token = jwt.sign({
            userId: loginUser.id,
            email: loginUser.email
        }, process.env.PRIVATE_KEY, {
            expiresIn: '1h',
            issuer: 'kirby'
        });

        res.cookie('token', token, {
            httpOnly: true
        });
        // console.log('token: ', token);

        return res.status(StatusCodes.OK).json(result);
    });
}

const resetPasswordRequest = (req, res) => {
    const { email } = req.body;
    const sql = `SELECT * FROM users WHERE email = ?`;
    const values = [ email ];

    conn.query(sql, values, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }

        const user = result[0];
        if (!user) {
            return res.status(StatusCodes.UNAUTHORIZED).end();
        }

        return res.status(StatusCodes.OK).json({
            email: user.email
        });
    });
}

const resetPassword = (req, res) => {
    const { email, password } = req.body;
    
    const salt = crypto.randomBytes(10).toString('base64');
    const hashedPassword = crypto.pbkdf2Sync(password, salt, 100000, 10, 'sha512').toString('base64');
    
    const sql = `UPDATE users SET password = ?, salt = ? WHERE email = ?`;
    const values = [ hashedPassword, salt, email ];

    conn.query(sql, values, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }

        if (result.affectedRows === 0) {
            return res.status(StatusCodes.BAD_REQUEST).end();
        }

        return res.status(StatusCodes.OK).json(result);
    });
}

module.exports = { join, login, resetPasswordRequest, resetPassword };