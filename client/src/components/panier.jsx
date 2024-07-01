import React from "react";
import Navbar from './navbar.jsx';
import meubleTest from "../assets/meubleTest.png"


const PagePanier = () => {
    return (
        
        <div className= 'bg-[#CED6C1]'>
   

            <div >
                <p className="text-center">VOTRE PANIER</p>
            </div>
            <br/>
            <br/>
            <div className="flex justify-between gap-20">
                <ol className="flex">
                    <div className="grid-cols-4">
                        <li><u>Article</u></li>
                        <img src={meubleTest} className='lmj-meubleTest'></img>
                    </div>

                    <div className="flex-col ml-40 ">
                        <li className=""><u>Désignation</u></li>
                        <p className="">Merci de rajouter le descriptif de l'article!</p>
                    </div>
                    
                </ol>
                <ul className="flex ">

                    <div className="mr-20">
                        <li className=''><u>Qté</u></li>
                        <p>1</p>
                    </div>
                    
                    <div className='mr-20'>
                        <li className=''><u>Unité</u></li>
                        <p>Prix de l'article seul à récupérer et afficher</p>
                    </div>
                    
                </ul>
            </div>

            <div className="mr-20">
                <li><u>Total</u></li>
                <p>Prix total à afficher</p>
            </div>

            <div>
                <br/>
                <p>CODE PROMO</p>
                <br/>
                <p>Vous disposez d'un code promo?</p>
                <br/>
                <input placeholder="Tapez votre code perso ici!"></input>
                <br/>
                <button type="button" placeholder='Valider mon code'></button>
            </div>

            <div>
                <p><u>NOMBRE D'ARTICLES </u> :<span className="">1</span> </p>
                <br/>
                <p><u>PORT: FRANCE STANDARD</u> :  <span className=''>GRATUIT</span></p>
                <br/>
                <p><u>TOTAL</u>: <span>2775.00€</span></p>
            </div>

        </div>

    )
}


export default PagePanier