import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";

const Formco = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin(e) {
        e.preventDefault()
        // Code to handle login goes here
        props.toggle()
    }
    return ( 
        <div className="popup bg-[#CED6C1] mt-2 rounded-3xl text-1xl absolute right-2 top-20 p-2">
            <div className="popup-inner">
                <h2 className="text-2xl font-semibold ">Login</h2>
                <form className="mt-8" onSubmit={handleLogin}>
                    <label className="text-lg font-medium mr-3">
                        Email
                        </label>
                        <input 
                        className="w-60 border-2 border-gray-600 rounded-xl p-1 mt-1 bg-transparent"
                        type="text"
                         value={email} 
                         placeholder="Entre ton Email chien"
                         onChange={e => setEmail(e.target.value)} />
                   <br></br>
                    <label className="text-lg font-medium mr-2">
                        Password
                        </label>
                        <input 
                        className="w-60 border-2 border-gray-600 rounded-xl p-1 mt-2 bg-transparent mr-7"
                        type="password" 
                        value={password} 
                        placeholder="Entre ton password Maggle" 
                        onChange={e => setPassword(e.target.value)} />
                   <br></br>
                    <button className="active:scale-[.80] hover:scale-[1.05] ease-in-out text-2xl ml-7 font-semibold text-red-300 border-gray-600 bg-[#CED6C1] rounded-2xl mt-4 p-2" type="submit">Connexion</button>
                </form>
                <p>Vous n'avez pas de compte ? <button className=" text-red-300 mt-4"><Link to ="/inscription">Inscrivez-Vous</Link></button></p>
                <button className="text-red-300">Mot de passe oublié ?</button>
               
            </div>
        </div>

    )
}


export default Formco