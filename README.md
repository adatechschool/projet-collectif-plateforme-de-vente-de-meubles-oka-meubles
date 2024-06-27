# projet-collectif-plateforme-de-vente-de-meubles-oka-meubles
projet-collectif-plateforme-de-vente-de-meubles-oka-meubles created by GitHub Classroom

Repo officiel de la team Front (React) de la première semaine.
On  mettra à jour le fichier readme si possible !

LANCER PROJET REACT/NODE :

1. Créer le dossier mère du projet (projet-collectif-plateforme-oka-meuble pour nous).


2. Créer la partie Node back-end :
    a. Créer les premiers packages à la racine du dossier mère avec la commande : npm init -y.

    b. Créer un dossier server à l'intérieur duquel on créer un fichier main.js.
        -à l'intérieur du fichier server/main.js, y ajouter le code suivant :
            
            const express = require("express");

            const PORT = process.env.PORT || 3001;

            const app = express();

            app.listen(PORT, () => {
            console.log(`Server listening on ${PORT}`);
            });

    c. Dans le fichier package.json à la racine de notre de notre dossier mère, y ajouter le code suivant :

          "scripts": {
            "start": "node server/main.js"
        },
    
    d. Toujours à la racine de notre dossier mère, écrire dans le terminal la ligne de commande : npm i express. 
       Le package.json lié à express.js est désormais installé.

    e. Enfin, entrer en ligne de commande dans le dossier server la ligne : npm start.
       Vérifier qu'en sortie de terminal nous obtenons : 

        > projet-collectif-plateforme-de-vente-de-meubles-oka-meubles@1.0.0 start
        > node server/main.js

        Server listening on 3001

        Accès au server via : http://localhost:3001


3. Créer un point de terminaison API :
    Le but est d'utiliser notre serveur Node et Express comme une API, afin qu'il puisse fournir des données à notre application React.

    a.  Envoyer à notre app React un message qui affiche simplement "Hello from the server" dans un format json.
        -pour cela, ajouter dans le fichier server/main.js le code suivant :

            app.get("/api", (req, res) => {
            res.json({ message: "Hello from server!" });
            });

            ATTENTION : mettre ce bout de code au-dessus de app.listen
    
    b. Enfin, mettre fin au server actuellement en route avec command/ctrl + c dans le terminal et le relancer aver npm start.
       
       Accès au server via : http://localhost:3001/api

       ATTENTION : bien rajouter le chemin /api.

       Vérifier que la page affiche bien : {"message":"Hello from server!"}.


4. Créer la partie React front-end :
    Ouvrir un deuxieme terminal pour faciliter les choses.

    a. Entrez dans le terminal à la racine du dossier mère la ligne de commande : npx create-react-app client.
    Cela va créer un nouveau dossier client qui comportera les sous-dossier, les fichiers et les packages pour React.

    b. Dans le fichier client/package.json, ajouter la ligne de code :

        "proxy": "http://localhost:3001",
    
    c. Dans le dossier client, entrer dans le terminal la ligne npm start.

        ATTENTION : vérifier que les deux servers sont en routes, d'où l'intérêt d'avoir deux terminals ouverts.
    
5. Faire des requêtes http de React à Node :
    Maintenant que nous avons une application React fonctionnelle, nous voulons l'utiliser pour interagir avec notre API. Voyons comment récupérer des données à partir du point de terminaison /api que nous avons créé plus tôt.

    a. Entrer le code suivant dans le fichier client/src/App.js :

        import React from "react";
        import logo from "./logo.svg";
        import "./App.css";

        function App() {
        const [data, setData] = React.useState(null);

        React.useEffect(() => {
            fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
        }, []);

        return (
            <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>{!data ? "Loading..." : data}</p>
            </header>
            </div>
        );
        }

        export default App;

Actualisé notre page internet et vérifier que nous avons bien le logo de React avec "Hello from server".


CREATION DE L'API ET COMMUNICATION AVEC LA BASE DE DONNEES

Outils utilisés : postgre.sql, sequilize, méthode MVC (Modèle, Vue, Contrôleur), node.js.

Intro. :
Pour créer la base de données ainsi que pour établir la communication avec elle, nous avons utilisé la méthode MVC pour l'architecture des dossiers et de la création de l'API. 
Interaction des contrôleurs, des routes et des modèles entre eux :
    -La route dirige la requête vers le bon contrôleur en fonction de l'URL et de la méthode http.
    -Le contrôleur utilise les méthodes définies dans les modèèles pour intéragir avec les données.
    -une fois les données traitées (par ex. récupérées depuis la base de données), le contrôleur retourne une réponse http appropriée (comme du json pour une API REST).

Cette structure permet une séparation des tâches, rend le code plus facile à maintenir et à tester.

1. Installation des logiciels et des packages : 
    a. logiciels : pour la base de données si vous utilisez postgre.sql, installer postgre (mémoriser le mot de passe qui sera demander ultérieurement), et installer insomnia ou postman... 
    (clients qui permettent l'envoie de requêtes http).

    b. packages : 
        -npm i sequelize (librairie qui fait le Object Relational Maping vers une base de données relationnelle)
        -npm install
        -npm dotenv (créer des variables d'environnement dans un fichier .env permettant de ne pas changer les port et les mots de passe a chaque commit, car chaque personne dispose de mdp différents)

2. lancer l'appli :
Pour la plupart, ouvrez pgAdmin qui s'installe en même temps que postgre. C'est ici que vous entrerez votre mot de passe. 
Lancer le serveur dans le terminal (chemin projet_okameuble/server) avec la commande npm start. Si tout se passe bien, le terminal affiche server listening on 3001.

        




       


    
    
                


