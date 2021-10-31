const express = require('express');
const cookieParser = require("cookie-parser");
const app = express();

const PORT = process.env.PORT || 8000;

const userRouter = require("./Router/userRouter");
const authRouter = require("./Router/authRouter");

app.use(express.json());
app.use(cookieParser());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(PORT, function () {
    console.log(`server started at port ${PORT}`);
})
