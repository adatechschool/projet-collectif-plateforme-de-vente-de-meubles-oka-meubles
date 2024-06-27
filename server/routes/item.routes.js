// server/routes/item.routes.js

const express = require('express');
const router = express.Router();
const ItemController = require('../controllers/item.controller');

//the route for vreating a new user
router.post('/items', ItemController.createItem);

module.exports = router;