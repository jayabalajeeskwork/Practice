0. .env
MONGO_URI=mongodb://localhost:27017/jayajobportaldemo

1. config - db.js
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Connected")
        
    } catch (err) {
        console.log(err)
    }
};

module.exports = connectDB;

2. models - user.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {type: String, unique: true,  required: true},
    email: {type: String, unique: true,  required: true},
    password: { type: String, required: true}
});

module.exports = mongoose.model("User", userSchema);

3. server.js
const express = require("express");
const app = express();

require("dotenv").config();

const connectDB = require("./config/db");

connectDB();

app.listen(3000, "localhost", () => console.log("sev statrted at3000"));

4. utils - jwt.js
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
    return jwt.sign({ id: user._id }, "jwtsecret", { expiresIn: "7d" });
};

module.exports = generateToken;

4. middleware - authMiddleware.js
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


5. controller - authController.js
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

6. server.js:
const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/db");

const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo").default;;
const cookieParser = require("cookie-parser");


connectDB();
app.use(express.json());
app.use(cookieParser());


app.use(session({
    secret: "jb",
    resave: false,
    saveUninitialized: false,

    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI,
        collectionName: "sessions"
    }),

    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // 1 day
    }
}));

app.use("/api/accounts", require("./routes/authRoutes"));

app.listen(3000, () => {
  console.log("Server running on 3000");
});


7. routes - authRoutes.js
const router = require("express").Router();
const { register, login, checkSession } = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.get("/check-session", checkSession);
module.exports = router;

8. server.js:
const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/db");

const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo").default;;
const cookieParser = require("cookie-parser");


connectDB();
app.use(express.json());
app.use(cookieParser());


app.use(session({
    secret: "jb",
    resave: false,
    saveUninitialized: false,

    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI,
        collectionName: "sessions"
    }),

    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // 1 day
    }
}));

app.use("/api/accounts", require("./routes/authRoutes"));

app.listen(3000, () => {
  console.log("Server running on 3000");
});

9. 

http://127.0.0.1:3000/api/accounts/register/
{
  "username": "seetha",
  "email": "seetha@gmail.com",
  "password": "seetha"
}

http://127.0.0.1:3000/api/accounts/login/
{
  "username": "seetha",
  "password": "seetha"
}
--------------------------------------------------------------
