import React from "react"
import compte from '../assets/compte.png';
import meubles from '../assets/meubles.png';
import panier from '../assets/panier.png'

const Navbar = () => {
    return (
            <div className="flex justify-between items-center bg-[#CED6C1] gap-90 content-end ">
                <img src={meubles} className="lmj-meubles flex justify-start" />
            <div className="flex justify-end bg-[#CED6C1]">
                <ul className="flex">
                    <li className="p-4">Accueil</li>
                    <li className="p-4"><img src={panier} className="lmj-panier"/>Panier</li>
                    <li className="p-4 "><img src={compte} className="lmj-compte"/>Compte</li>
                </ul>
            </div>
        </div>
    )
}



export default Navbar