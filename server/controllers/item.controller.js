// server/controllers/item.controller.js

const Item = require('../models/items.model');

const createItem = async (req, res) => {
    const { name, category, description, dimension, price, condition, image } = req.body;

    try {
        const newItem = await Item.create({
            name,
            category,
            description,
            dimension,
            price,
            condition,
            image
        });

        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    createItem,
};
