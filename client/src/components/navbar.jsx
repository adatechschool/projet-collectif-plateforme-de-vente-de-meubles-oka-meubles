import React ,{useState} from "react"
import compte from '../assets/compte.png';
import meubles from '../assets/meubles.png';
import panier from '../assets/panier.png';
import Formco from "./formco";
import {Link} from "react-router-dom";



const Navbar = () => {
     const [seen, setSeen] = useState(false)

    function togglePop () {
        setSeen(!seen);}
    return (
            <div className="flex justify-between items-center bg-[#CED6C1] gap-90 content-end ">
                <img src={meubles} className="lmj-meubles flex justify-start" alt="meuble" />
            <div className="flex justify-end bg-[#CED6C1]">
                <ul className="flex">

                    <li className="p-4"><Link to='/panier'><img src={panier} className="lmj-panier" alt="panier"/>Panier </Link></li>
                    <li className="p-4"><img src={compte} className="lmj-compte" alt="compte"/><button onClick={togglePop}>Compte</button>
                    {seen ? <Formco toggle={togglePop} /> : null}</li>

                </ul>
            </div>
        </div>
    )
}

export default Navbar