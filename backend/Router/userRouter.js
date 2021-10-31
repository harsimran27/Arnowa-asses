let express = require("express");
const userModel = require("../userModel");
let { bodyChecker } = require("../util_func");
let userRouter = express.Router();
const { createElement,
    getElement, deleteElement } = require("../helper/factory");

let createUser = createElement(userModel);
let getUser = getElement(userModel);
let deleteUser = deleteElement(userModel);

userRouter
    .route("/:id")
    .get(bodyChecker, getUser)
    .delete(bodyChecker, deleteUser)

userRouter
    .route("/")
    .post(bodyChecker, createUser);

module.exports = userRouter;