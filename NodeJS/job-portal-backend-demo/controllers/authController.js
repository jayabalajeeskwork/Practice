const User = require("../models/User");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/jwt");


exports.register = async (req, res) => {
    const { username, email, password } = req.body;

    const hashed = await bcrypt.hash(password, 10);

    await User.create({ username, email, password: hashed });

    res.json({ msg: "User Registered" });
};


exports.login = async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne(
    {
        $or: [{ username }, { email: username }]
    });

    if (!user) return res.json({ msg: "Invalid Credentials" });

    const match = await bcrypt.compare(password, user.password);

    if (!match) return res.json({ msg: "Invalid Credentials" });

    // SESSION
    req.session.user_id = user._id;
    req.session.username = user.username;



    const token = generateToken(user);

    res.json({
        msg: "Login Success",
        access_token: token,
        user_id: user._id,
        username: user.username
    });
};



exports.checkSession = (req, res) => {
    if (req.session.user_id) {
        return res.json({
            logged_in: true,
            user_id: req.session.user_id,
            username: req.session.username // optional
        });
    }

    res.json({
        logged_in: false
    });
};