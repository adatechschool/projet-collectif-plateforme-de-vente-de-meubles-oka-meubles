// server/index.js

const express = require("express");
const sequelize = require('./config/sequelize');
const User = require('./models/user.model'); // Adjust the path as necessary
const Item = require('./models/items.model'); // Adjust the path as necessary
const Basket = require('./models/basket.model'); // Adjust the path as necessary
const userRoutes = require('./routes/user.routes')

const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.use(express.json());
app.use('/api', userRoutes);

sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server listening on ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

