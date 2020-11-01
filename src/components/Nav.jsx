import React from "react";
import { Link } from "react-router-dom";

function Nav(){
    return(
        <nav className="nav">
            <Link className="linkLogin" to="/login">Login</Link>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to ="/pledges">Support Projects</Link>
            <Link className="link" to ="/projects">Raise Funds</Link>
        </nav>
    );
}

export default Nav;

