const express = require('express');
const app = express();

const userRouter = require("./Router/userRouter");

app.use(express.json());

app.use("/api/user", userRouter);

app.listen("8000", function () {
    console.log('server started at port 8000');
})
