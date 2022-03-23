import React from "react";
import { NavLink } from "react-router-dom";
import './NavLinks.css'

const NavLinks = props => {
    return (
        <li className="nav-links">
            <NavLink to="/Add">Add</NavLink>
        </li>
        
    )
}



export default NavLinks;