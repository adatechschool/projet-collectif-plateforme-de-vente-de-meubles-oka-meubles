// server/index.js

const express = require("express");
const cors = require('cors');
const sequelize = require('./config/sequelize');
const User = require('./models/user.model');
const Item = require('./models/item.model'); 
const Basket = require('./models/basket.model');
const userRoutes = require('./routes/user.routes');
const itemRoutes = require('./routes/item.routes');
const basketRoutes = require('./routes/basket.routes');


const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.use(express.json());
app.use(cors());
app.use('/api', itemRoutes);
app.use('/api', userRoutes);
app.use('/api', basketRoutes);

sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server listening on ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

