// server/routes/basket.routes.js

const express = require('express');
const router = express.Router();
const BasketController = require('../controllers/basket.controller');

//the route for vreating a new user
router.post('/baskets', BasketController.createBasket);

module.exports = router;