// server/controllers/item.controller.js

const Item = require('../models/item.model');

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

const getAllItem = async (req, res) => {
    try {
        const Items = await Item.findAll();

        res.status(200).json(Items);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getItemById = async (req, res) => {
    const itemId = req.params.id ;
    try {
        const item = await Item.findByPk(itemId);
     
            if (!item) {
                return res.status(404).json({error: "item not found ! "})
            } 
        
        res.status(200).json(item);

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deleteById = async (req, res) => {
    const itemId = req.params.id ;
    try{
        await Item.destroy({
            where: { id : parseInt(itemId) }
        });
        res.status(204).json({ message: "item deleted successfully" });
    
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

module.exports = {
    createItem,
    getAllItem,
    getItemById,
    deleteById
};

