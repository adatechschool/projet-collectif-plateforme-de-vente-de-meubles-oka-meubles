
const express = require("express");
const router = express.Router();
const UserController = require('../controllers/user.controller');

// Route for creating a new user
router.post("/user", UserController.createUser);

// Route for logging in
router.post("/user/connect", UserController.login);

// Route for logging out
router.post("/user/logout", UserController.logout);

// Route for checking session
router.get("/user/session", UserController.checkSession);

module.exports = router;
