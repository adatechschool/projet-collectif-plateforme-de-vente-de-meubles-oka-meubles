
const bcrypt = require("bcrypt");
const User = require("../models/user.model");

// Create User
const createUser = async (req, res) => {
    const { email, password, isAdmin } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    try {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: "User with this email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            email,
            password: hashedPassword,
            isAdmin,
        });

        // Set session for the newly created user
        req.session.user = {
            id: newUser.id,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
        };

        res.status(201).json({ message: "User created successfully", user: req.session.user });

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ error: "Incorrect password" });
        }

        req.session.user = {
            id: user.id,
            email: user.email,
            isAdmin: user.isAdmin,
        };

        res.status(200).json({ message: "Login successful", user: req.session.user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Logout User
const logout = (req, res) => {
    if (req.session.user) {
        req.session.destroy(err => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json({ message: "Logout successful" });
        });
    } else {
        res.status(401).json({ error: "You are not logged in" });
    }
};

// Check session
const checkSession = (req, res) => {
    if (req.session.user) {
        res.status(200).json({ user: req.session.user });
    } else {
        res.status(401).json({ error: "Not authenticated" });
    }
};

module.exports = {
    createUser,
    login,
    logout,
    checkSession,
};
