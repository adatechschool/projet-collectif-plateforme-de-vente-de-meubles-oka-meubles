import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Formco = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        // Check if user is already logged in when the component mounts
        const checkLoggedIn = async () => {
            try {
                const response = await fetch('/api/user/session');
                const result = await response.json();
                if (response.ok && result.user) {
                    setLoggedInUser(result.user);
                }
            } catch (error) {
                console.error("Error checking session:", error);
            }
        };

        checkLoggedIn();
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch("/api/user/connect", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            const result = await response.json();

            if (response.ok) {
                setLoggedInUser(result.user);
            } else {
                setError(result.error);
            }
        } catch (err) {
            setError("An error occurred. Please try again later.");
        }
    };

    const handleLogout = async () => {
        try {
            const response = await fetch("/api/user/logout", {
                method: "POST"
            });

            if (response.ok) {
                setLoggedInUser(null);
            }
        } catch (err) {
            setError("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="popup bg-[#CED6C1] mt-2 rounded-3xl text-1xl absolute right-2 top-20 p-2">
            <div className="popup-inner">
                {loggedInUser ? (
                    <>
                        <h2 className="text-2xl font-semibold">Welcome, {loggedInUser.email}</h2>
                        <button
                            className="text-red-300 mt-4"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <h2 className="text-2xl font-semibold">Login</h2>
                        <form className="mt-8" onSubmit={handleLogin}>
                            <label className="text-lg font-medium mr-3">
                                Email
                            </label>
                            <input
                                className="w-60 border-2 border-gray-600 rounded-xl p-1 mt-1 bg-transparent"
                                type="text"
                                value={email}
                                placeholder="Enter your Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <br />
                            <label className="text-lg font-medium mr-2">
                                Password
                            </label>
                            <input
                                className="w-60 border-2 border-gray-600 rounded-xl p-1 mt-2 bg-transparent mr-7"
                                type="password"
                                value={password}
                                placeholder="Enter your Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <br />
                            <button
                                className="active:scale-[.80] hover:scale-[1.05] ease-in-out text-2xl ml-7 font-semibold text-red-300 border-gray-600 bg-[#CED6C1] rounded-2xl mt-4 p-2"
                                type="submit"
                            >
                                Connexion
                            </button>
                        </form>
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                        <p>Vous n'avez pas de compte ? <button className=" text-red-300 mt-4"><Link to="/inscription">Inscrivez-Vous</Link></button></p>
                        <button className="text-red-300">Mot de passe oublié ?</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Formco;
