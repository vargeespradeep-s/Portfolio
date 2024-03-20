import React from "react";
import imeHtml from "./Assests/html.png";
import imeCss from "./Assests/css.png";
import imeBoot from "./Assests/bootstrap.png";
import imeJava from './Assests/javascript.png';
import imeReact from './Assests/react.png';
import Resume from './Assests/Resume.pdf';
import { IoMdDownload } from "react-icons/io";

export default class About extends React.Component{
    render(){
        return(
            <section className="snd-lk dis-fl" id="about">
                    <h1>ABOUT ME</h1>
                    <div className="org dis-fl">
                        {/* about */}
                        <div className="pnl-info dis-fl">
                           <h1> A FRONT-END DEVELOPER <span className="wd-clr"> AND WEB DEVELOPER </span></h1>
                            <p> A frontend developer is responsible for creating the user interface and user experience of a website or web application. 
                                They work on the client side, which means their code runs in the user’s browser. And an unquenchable thirst in coding the user
                                interface and make the user to feel love to use a website , experience a lots of admired beauty on the website interface.
                            </p>
                            <a href={Resume} download={Resume} target="_blank" rel="noreferrer noopener">Download CV <IoMdDownload /> </a>

                        </div>
                        {/* skills */}
                        <div className="skill-set">
                            <h1> MY<span className="splNa"> SKILLS</span></h1>
                            {/* html */}
                            <div className="sk-tag dis-fl">
                                <img src={imeHtml} alt="HTML" className="imageSize"/>
                                <div className="container-sk">
                                     <div className="skills html">75%</div>
                                </div>
                            </div>
                            {/* css */}
                            <div className="sk-tag dis-fl">
                                <img src={imeCss} alt="CSS" className="imageSize"/>
                                <div className="container-sk">
                                     <div className="skills css">75%</div>
                                </div>
                            </div>
                            {/* bootstrap */}
                            <div className="sk-tag dis-fl">
                                <img src={imeBoot} alt="BOOTSTRAP" className="imageSize"/>
                                <div className="container-sk">
                                     <div className="skills boot">70%</div>
                                </div>
                            </div>
                            {/* javascript */}
                            <div className="sk-tag dis-fl">
                                <img src={imeJava} alt="JAVASCRIPT" className="imageSize"/>
                                <div className="container-sk">
                                     <div className="skills js">65%</div>
                                </div>
                            </div>
                            {/* react js */}
                            <div className="sk-tag dis-fl">
                                <img src={imeReact} alt="REACT.JS" className="imageSize"/>
                                <div className="container-sk">
                                     <div className="skills react">50%</div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        )
    };
};