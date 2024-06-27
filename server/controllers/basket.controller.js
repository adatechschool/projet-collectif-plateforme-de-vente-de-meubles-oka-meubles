// server/controllers/basket.controller.js

const Item = require('../models/basket.model');

const createBasket = async (req, res) => {
    const {  } = req.body;

    try {
        const newBasket = await Item.create({
            
        });

        res.status(201).json(newBasket);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    createBasket,
};
