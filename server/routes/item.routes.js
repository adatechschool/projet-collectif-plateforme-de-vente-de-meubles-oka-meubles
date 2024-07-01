// server/routes/item.routes.js

const express = require('express');
const router = express.Router();
const ItemController = require('../controllers/item.controller');

//the route for vreating a new item
router.post('/item', ItemController.createItem);
router.get('/items', ItemController.getAllItem);
router.get('/item/:id', ItemController.getItemById);
router.delete('/item/:id', ItemController.deleteById);

module.exports = router;