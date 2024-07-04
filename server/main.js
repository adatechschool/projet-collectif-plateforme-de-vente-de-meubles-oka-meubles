const express = require("express");
const session = require("express-session");
const sequelize = require('./config/sequelize');
const userRoutes = require('./routes/user.routes');
const itemRoutes = require('./routes/item.routes');
const basketRoutes = require('./routes/basket.routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());

// Configure session 
app.use(session({
    secret: ":Wh#0gapH50cb7h:U)D3",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Use true if HTTPS is enabled
}));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

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
