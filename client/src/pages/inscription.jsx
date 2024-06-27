import React from "react";
import Navbar from "../components/navbar";
import {useState } from "react";
import Footer from "../components/footer";

const Inscription=()=>{
        const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(new FormData(e.target))
    }

    const [checked,setChecked]=useState(true)
    const toggleCheck=()=>{
        setChecked(!checked)
    }
    return (
        <>
        <Navbar/>
        <div className="mt-10">
        <h1 className="mb-5">JE SUIS NOUVEAU CLIENT</h1>
        <p className="mb-5">Merci de bien renseigner tous les champs de saisie.</p>
        <h2 className="mb-5">INFORMATIONS PERSONNELLES</h2>
        <form action="/App.js" onSubmit={handleSubmit} className="border border-black w-[700px] p-2 rounded-md">
            <label for="fprenom" className="ml-[138px]">* Prénom:</label>
            <input type="text" id="fprenom" name="fprenom" placeholder="Prénom" required className="border border-black ml-2 mb-2 w-[220px]"></input><br></br>
            <label for="fnom" className="ml-[158px]">* Nom:</label>
            <input type="text" id="fnom" name="fnom" placeholder="Nom" required className="border border-black ml-2 mb-2 w-[220px]"></input><br></br>
            <label for="fadresse" className="ml-[138px]">* Adresse:</label>
            <input type="text" id="fadresse" name="fadresse" placeholder="Adresse" required className="border border-black ml-2 mb-2 w-[220px]"></input><br></br>
            <label for="fcodepostal" className="ml-[105px]">* Code postal: </label>
            <input type="tel" id="fcodepostal" name="fcodepostal" placeholder="Code postal" required className="border border-black ml-2 mb-2 w-[220px]"></input><br></br>
            <label for="fville" className="ml-[165px]">* Ville:</label>
            <input type="text" id="fville" name="fville" placeholder="Ville" required className="border border-black ml-2 mb-2 w-[220px]"></input><br></br>
            <label for="fmail" className="ml-40">* Mail: </label>
            <input type="email" id="fmail" name="fmail" placeholder="Mail" required className="border border-black ml-2 mb-2 w-[220px]"></input><br></br>
            <label for="fpassword1" className="ml-9">* Créer un mot de passe:</label>
            <input type="password" id="fpassword1" name="fpassword1" placeholder="Entrez un mot de passe" required className="border border-black ml-2 mb-2 w-[220px]" ></input><br></br>
            <label for="fpassword2">* Répéter votre mot de passe:</label>
            <input type="password" id="fpassword2" name="fpassword2" placeholder="Répéter votre mot de passe" required className="border border-black ml-2 mb-2 w-[220px]"></input><br></br>
            <input type="checkbox" checked={checked} onChange={toggleCheck}/>
            <label for="fcgu">Je déclare avoir lu et accepté les conditions générales d'utilisation du site</label><br></br>
            <button disabled={!checked} className="ml-60 mt-4 bg-[#CED6C1] p-2 rounded-md hover:border border-[#242A21]">Envoyer</button>
        </form>
        </div>
        <Footer/>
        </>
    )
}

export default Inscription