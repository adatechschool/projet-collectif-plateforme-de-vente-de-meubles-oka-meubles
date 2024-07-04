import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MeubleInscription from '../assets/meubleInscription1.jpg';

const Inscription = () => {
    const navigate = useNavigate();
    const [checked, setChecked] = useState(true);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get("fmail");
        const password1 = formData.get("fpassword1");
        const password2 = formData.get("fpassword2");

        if (password1 !== password2) {
            setError("Passwords don't match!");
            return;
        }

        const userData = {
            email: email,
            password: password1,
            isAdmin: false
        };

        try {
            const response = await fetch("/api/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });

            const result = await response.json();

            if (response.ok) {
                navigate("/");
            } else {
                setError(result.error);
            }
        } catch (error) {
            setError("An error occurred. Please try again later.");
        }
    };

    const toggleCheck = () => {
        setChecked(!checked);
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center">
                <h1 className="mt-10 mb-5 text-3xl font-bold">JE SUIS NOUVEAU CLIENT</h1>
                <p className="mb-5">Merci de bien renseigner tous les champs de saisie.</p>
                <div className="flex items-center mb-8">
                    <img src={MeubleInscription} alt="" className="w-[600px] ml-10 mt-7" />
                    <div className="ml-20">
                        <h2 className="mb-5 text-2xl">INFORMATIONS PERSONNELLES</h2>
                        <form onSubmit={handleSubmit} className="border border-black w-[700px] p-4 rounded-md">
                            <div className="mb-4 flex items-center">
                                <label htmlFor="fmail" className="w-[150px]">* Mail:</label>
                                <input type="email" id="fmail" name="fmail" placeholder="Mail" required className="border border-black ml-2 mb-2 w-[220px]" />
                            </div>
                            <div className="mb-4 flex items-center">
                                <label htmlFor="fpassword1" className="w-[150px]">* Créer un mot de passe:</label>
                                <input type="password" id="fpassword1" name="fpassword1" placeholder="Entrez un mot de passe" required className="border border-black ml-2 mb-2 w-[220px]" />
                            </div>
                            <div className="mb-4 flex items-center">
                                <label htmlFor="fpassword2" className="w-[150px]">* Répéter votre mot de passe:</label>
                                <input type="password" id="fpassword2" name="fpassword2" placeholder="Répéter votre mot de passe" required className="border border-black ml-2 mb-2 w-[220px]" />
                            </div>
                            <div className="mb-4 flex items-center">
                                <input type="checkbox" checked={checked} onChange={toggleCheck} />
                                <label htmlFor="fcgu" className="ml-2">Je déclare avoir lu et accepté les conditions générales d'utilisation du site</label>
                            </div>
                            <button type="submit" disabled={!checked} className="ml-auto mt-4 bg-[#CED6C1] p-2 rounded-md hover:border border-[#242A21] block mx-auto">Envoyer</button>
                        </form>
                        {error && <p className="error text-red-500 mt-2 ml-10">{error}</p>}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Inscription;
