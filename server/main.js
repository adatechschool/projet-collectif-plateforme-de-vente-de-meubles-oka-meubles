const express = require("express");
const session = require("express-session");
const sequelize = require('./config/sequelize');
const userRoutes = require('./routes/user.routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

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
