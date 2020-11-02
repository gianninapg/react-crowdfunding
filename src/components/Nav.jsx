import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo/Logo.png";

function Nav(){
    return(
        <nav className="nav">
            <img src={Logo} className="Logo" />
            <Link className="linkLogin" to="/login">Login</Link>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to ="/pledges">Support Projects</Link>
            <Link className="link" to ="/projects">Raise Funds</Link>
        </nav>
    );
}

export default Nav;

