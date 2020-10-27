import React from "react";
import { Link } from "react-router-dom";

function Nav(){
    return(
        <nav className="nav">
            <Link className="linkLogin" to="/login">Login</Link>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to ="/projects">Support Projects</Link>
            <Link className="link" to ="/new-project">Raise Funds</Link>
        </nav>
    );
}

export default Nav;

