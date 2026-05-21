const jwt = require("jsonwebtoken");

const generateToken = (user) => {
    return jwt.sign({ id: user._id }, "jwtsecret", { expiresIn: "7d" });
};

module.exports = generateToken;