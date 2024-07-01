import React from "react";
import {Link  } from "react-router-dom";

const Footer = () => {
  return (
<div className="footer">
    <footer className="bg-[#CED6C1] position relative bottom-0 w-full">
    
        <div className= "font-bold">Informations légales</div>
    <ul>
        <li><Link to = "/mentions-legales" className="hover:underline">Mentions légales</Link></li>
        <li><Link to = "/cgv" className="hover:underline">CGV</Link></li>
        <li><Link to = "/contact" className="hover:underline"
        >Contact</Link></li>

        </ul>
        
        
        </footer>
        </div>
    
    
  );
};




 
export default Footer