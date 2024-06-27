import React from "react";
import Navbar from './navbar.jsx'


const pagePanier = () => {
    return (
    
        <div className= 'bg-[#CED6C1]'>

            <div className='flex center'>
                <p>VOTRE PANIER</p>
            </div>
            
            <div className="flex">
                <ol>
                    <li>Article</li>
                    <li>Désignation</li>
                </ol>
                <ul>
                    <li>Qté</li>
                    <li>Unité</li>
                    <li>Total</li>
                </ul>
            </div>

            <div>
                <p>CODE PERSO</p>
                <p>Vous disposez d'un code promo?</p>
                <input placeholder="Tapez votre code perso ici!"></input>
                <button placeholder='Valider mon code'></button>
            </div>

            <div>
                <dt>NOMBRE D'ARTICLES :</dt>
                <dl>1</dl>
                <dt>PORT: FRANCE STANDARD</dt>
                <dl>GRATUIT</dl>
                <dt>TOTAL:</dt>
                <dl>2775.00€</dl>
            </div>

        </div>

    )
}


export default pagePanier