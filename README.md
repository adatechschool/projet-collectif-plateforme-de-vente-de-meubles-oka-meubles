# projet-collectif-plateforme-de-vente-de-meubles-oka-meubles
projet-collectif-plateforme-de-vente-de-meubles-oka-meubles created by GitHub Classroom

Repo officiel de la team Front (React) de la première semaine.
On  mettra à jour le fichier readme si possible !

LANCER PROJET REACT/NODE :

1. Créer le dossier mère du projet (projet-collectif-plateforme-oka-meuble pour nous).


2. Créer la partie Node back-end :
    a. Créer les premiers packages à la racine du dossier mère avec la commande : npm init -y.

    b. Créer un dossier server à l'intérieur duquel on créer un fichier index.js.
        -à l'intérieur du fichier server/index.js, y ajouter le code suivant :
            
            const express = require("express");

            const PORT = process.env.PORT || 3001;

            const app = express();

            app.listen(PORT, () => {
            console.log(`Server listening on ${PORT}`);
            });

    c. Dans le fichier package.json à la racine de notre de notre dossier mère, y ajouter le code suivant :

          "scripts": {
            "start": "node server/index.js"
        },
    
    d. Toujours à la racine de notre dossier mère, écrire dans le terminal la ligne de commande : npm i express. 
       Le package.json lié à express.js est désormais installé.

    e. Enfin, entrer en ligne de commande dans le dossier server la ligne : npm start.
       Vérifier qu'en sortie de terminal nous obtenons : 

        > projet-collectif-plateforme-de-vente-de-meubles-oka-meubles@1.0.0 start
        > node server/index.js

        Server listening on 3001

        Accès au server via : http://localhost:3001


3. Créer un point de terminaison API :
    Le but est d'utiliser notre serveur Node et Express comme une API, afin qu'il puisse fournir des données à notre application React.

    a.  Envoyer à notre app React un message qui affiche simplement "Hello from the server" dans un format json.
        -pour cela, ajouter dans le fichier server/index.js le code suivant :

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




       


    
    
                


