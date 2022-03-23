import React from "react";
import './Navbar.css'

const Navbar = props =>{
    return(
        <header className="navbar-main">
            {props.children}
        </header>
    );
};




export default Navbar;