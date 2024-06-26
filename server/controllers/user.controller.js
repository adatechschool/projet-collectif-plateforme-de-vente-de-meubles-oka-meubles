// server/controllers/user.controller.js

const User = require('../models/user.model');

const createUser = async (req, res) => {
    const { email, password, isAdmin } = req.body;

    try {
        const newUser = await User.create({
            email,
            password,
            isAdmin,
        });

        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    createUser,
};
