// server/controllers/user.controller.js

const User = require('../models/user.model');

const createUser = async (req, res) => {
    const { email, password, isAdmin } = req.body;

    try {
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({error: "User with this email already exists"});
        }
        
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

const getUserById = async (req, res) => {
    const usersId = req.params.id ;
    try {
        const user = await User.findByPk(usersId);
     
            if (!user) {
                return res.status(404).json({error: "user not found ! "})
            } 
        
        res.status(200).json(user);

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    createUser,
    getUserById
};
