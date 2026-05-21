const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo").default;;
const cookieParser = require("cookie-parser");
require("dotenv").config();

const connectDB = require("./config/db");

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
