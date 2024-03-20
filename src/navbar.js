import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome, FaFileCode ,FaPhoneAlt } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

export default class Navbar extends React.Component{
    render(){
        return(
            <header className="start">

                <h1>PORTFOLIO</h1>
            
                <label htmlFor="box" className="check-box">
                <GiHamburgerMenu />
                </label>
                <input type="checkbox" id="box" placeholder="none"/>

            <nav className="switch-page dis-fl">
                <a href="#home"> <FaHome /> Home</a>
                <a href="#about"> <IoMdContact /> About</a>
                <a href="#project"> <FaFileCode /> Project</a>
                <a href="#contact"> <FaPhoneAlt /> Contact</a>
            </nav>
        </header>
        )
    };
};