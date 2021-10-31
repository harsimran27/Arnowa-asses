let express = require("express");
const userModel = require("../userModel");
let { bodyChecker, protectRoute } = require("../util_func");
let userRouter = express.Router();
const { createElement,
    getElement, deleteElement,
    updateElement } = require("../helper/factory");

let createUser = createElement(userModel);
let getUser = getElement(userModel);
let deleteUser = deleteElement(userModel);
let updateUser = updateElement(userModel);

userRouter.use(protectRoute);

userRouter
    .route("/:id")
    .get(bodyChecker, getUser)
    .patch(bodyChecker, updateUser)
    .delete(bodyChecker, deleteUser)

userRouter
    .route("/")
    .post(bodyChecker, createUser);

module.exports = userRouter;