// server/routes/user.routes.js

const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");

//the route for vreating a new user
router.post("/user", UserController.createUser);
//router.get("/user/:email", UserController.getUserByEmail);
//router.get("/user/:id", UserController.getUserById);
router.post("/user/connect", UserController.getUser);
module.exports = router;
