import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navdiv">
                <div className="logo">
                    <Link to="/">Famished</Link>
                </div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <button>
                        <Link to="/signin">SignIn</Link>
                    </button>
                    <button>
                        <Link to="/signup">SignUp</Link>
                    </button>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
