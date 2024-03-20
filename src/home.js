import React from "react";
import myImage from './Assests/MyImage.png';
import { FaArrowRight } from "react-icons/fa";

export default class Home extends React.Component{
    render(){
        return(
            <section className="fst-lk dis-fl" id="home">
            <div className="name-style dis-fl">
                <h2>Hi, I'm </h2>
                <h1 className="name-anime">S.Vargees Pradeep</h1>
                <h3>I'm a Front-End Developer.</h3>
                <div className="abt-acn dis-fl">
                <a href="#about" className="abt-clr"> About me </a> 
                <FaArrowRight className="icn-clr"/>
                </div>
                
            </div>
            <div className="image-top ">
                <img src={myImage} alt="My_image"/>
            </div>
        </section>
        )
    };
};