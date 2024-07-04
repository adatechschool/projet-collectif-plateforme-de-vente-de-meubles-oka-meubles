var session = require("express-session");
var express = require("express");
const { getUser, createUser } = require("./user.controller");

var app = express();
// config du middleware de session
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.get("/", (req, res) => {
  // Définir une variable de session
  req.session.myVariable = "JESSSSS";
  console.log(req.session);
  res.send("Session démarrée !");
});

app.get("/session", (req, res) => {
  // Récupérer une variable de session
  const myVariable = req.session.myVariable;
  if (myVariable) {
    console.log(req.session);
  } else {
    console.log("not found broski");
  }
  res.send(`Ma variable de session vaut : ${req.session.myVariable}`);
});

app.listen(3002, () => {
  console.log("Serveur démarré sur le port 3002");
});

app.post("/createUser", (req, res) => {
  //   const user = request.body;
  //   console.log(newBusinessData); // Il est toujours bon de vérifier que vos données arrivent sous la forme souhaitée.
  createUser(req, res);
  req.session.myVariable = "JESSSSS";
  //   console.log(req.session);
  res.send("Session démarrée !");
  //   console.log(registerBusinessResult);
  //   rés
  //     .status(201) // ce code d'état HTTP est pour "créé" et est généralement envoyé en réponse à une requête POST, pour indiquer que la création de la ressource a réussi.
  //     .send(user);
});
