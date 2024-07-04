import React from "react";
import { ReactTyped } from 'react-typed';
import ScrollDown from "./scrollDown";
import background from "../assets/background.jpg";

const Homepage = () => {
    return (
        <div className="h-screen bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${background})` }}>
            <ReactTyped
                strings={[
                    "OKA Meubles",
                ]}
                typeSpeed={80}
                backSpeed={50}
                loop
            >
            </ReactTyped>

            <h1>Ce qu'on fait :</h1>
            <p>ici un paragraphe d'introduction</p>

            <ScrollDown />
        </div>
    );
};

export default Homepage;
