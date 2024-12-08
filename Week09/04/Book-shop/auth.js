const jwt = require('jsonwebtoken');

const ensureAuthorization = (req, res) => {
    try {
        const receivedJwt = req.headers['authorization'];
        const decodedJwt = jwt.verify(receivedJwt, process.env.PRIVATE_KEY);
        // console.log("receivedJwt: ", receivedJwt);
        // console.log("decodedJwt: ", decodedJwt);
        return decodedJwt;
    } catch (error) {
        console.error("JWT 검증 오류:", error.name, error.message);
        return error;
    }
}

module.exports = ensureAuthorization;