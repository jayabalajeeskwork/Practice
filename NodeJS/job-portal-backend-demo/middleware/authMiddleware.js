const jwt = require("jsonwebtoken");

const checkJWT = (req, res, next) => {
    const header = req.headers.authorization;

    if (!header) {
        return res.status(401).json({ msg: "Token Required" });
    }

    try {
        const token = header.split(" ")[1];
        jwt.verify(token, "jwtsecret");
        next();
    } catch {
        res.status(401).json({ msg: "Invalid Token" });
    }
};

module.exports = checkJWT;