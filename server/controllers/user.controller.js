// server/controllers/user.controller.js

const User = require("../models/user.model");

const createUser = async (req, res) => {
  const { email, password, isAdmin } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email: email } });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
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

const getUser = async (req, res) => {
  const userId = req.body.id;
  const userEmail = req.body.email;
  if (userId !== undefined) {
    // Si c'est pas undefined, on va chercher via l'id
    try {
      const user = await User.findByPk(userId);

      if (!user) {
        return res.status(404).json({ error: "user not found ! " });
      }

      res.status(200).json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  } else if (userEmail !== undefined) {
    try {
      const user = await User.findOne({ where: { email: userEmail } });

      if (!user) {
        return res.status(404).json({ error: "user not found ! " });
      }

      res.status(200).json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    } // Si c'est pas undefined, on va chercher via l'email
  }
  res.status(200).json("ERROR");
};

// const getUserById = async (req, res) => {
//   const usersId = req.params.id;
//   try {
//     const user = await User.findByPk(usersId);

//     if (!user) {
//       return res.status(404).json({ error: "user not found ! " });
//     }

//     res.status(200).json(user);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// const getUserByEmail = async (req, res) => {
//   const usersEmail = req.params.email;
//   try {
//     const user = await User.findOne({ usersEmail });

//     if (!user) {
//       return res.status(404).json({ error: "user not found ! " });
//     }

//     res.status(200).json(user);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

module.exports = {
  createUser,
  // getUserByEmail,
  // getUserById,
  getUser,
};
