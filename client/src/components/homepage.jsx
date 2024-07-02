import React from "react";
import Navbar from "./navbar";
import {useState } from "react";
import Footer from "./footer";
import { ReactTyped } from 'react-typed';
import background from "../assets/background.jpg";

const Homepage = () => {
    return (
    <>
    <div className="h-screen bg-center bg-cover  bg-no-repeat "style={{backgroundImage: `url(${background})`}}>
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
    
    </div>
    </>
    )
};

export default Homepage 