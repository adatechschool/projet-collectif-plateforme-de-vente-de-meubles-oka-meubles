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
        <div className="text-8xl pt-20 pl-10">
            <ReactTyped
                strings={[
                    "OKA Meubles",
                ]}
                typeSpeed={80}
                backSpeed={50}
                loop
            >
            </ReactTyped>
        </div>
    </div>
    </>
    )
};

export default Homepage 