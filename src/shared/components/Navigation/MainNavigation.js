import React from "react";
import Navbar from "./Navbar";
import './MainNavigation.css';
import { Link } from "react-router-dom";
import './MainNavigation.css'
import NavLinks from "./NavLinks";

const MainNavigation = props =>{

    return (
        <Navbar>

            <h1 className="main-navigation__title">
                <Link className="main-navigation__title" to="/">Dictate</Link>
            </h1>
            <nav>
                <NavLinks/>
            </nav>
        </Navbar>
    )

};


export default MainNavigation;