const jwt = require('jsonwebtoken');

const ensureAuthorization = (req, res) => {
    try {
        const receivedJwt = req.headers['authorization'];
        // console.log("receivedJwt: ", receivedJwt);
        if (!receivedJwt) {
            throw new ReferenceError("JWT 토큰이 없습니다.");
        }

        const decodedJwt = jwt.verify(receivedJwt, process.env.PRIVATE_KEY);
        // console.log("decodedJwt: ", decodedJwt);        
        return decodedJwt;
    } catch (error) {
        console.error("JWT 검증 오류:", error.name, error.message);
        return error;
    }
}

module.exports = ensureAuthorization;