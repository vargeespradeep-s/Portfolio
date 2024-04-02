import React from 'react';
import { FaGithub , FaLinkedin, FaFacebook , FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="end dis-fl">
    <div className="shape-rc wish"></div>
    <div className="shape-t tcr"></div>
    <div className="shape-c crt"></div>
     <h1> PORTFOLIO</h1>
     <div className="icons">
        <a target="_blank" rel='noreferrer noopener' title='Github' className='github' href="https://github.com/vargeespradeep-s"> <FaGithub/> </a>
        <a target="_blank" rel='noreferrer noopener' title='Linkedin' className='linkedin' href="https://www.linkedin.com/in/vargees-pradeep-s-0a97a62b1/"> <FaLinkedin/> </a>
        <a target="_blank" rel='noreferrer noopener' title='Email' className='mail' href="https://mail.google.com/mail/u/1/#inbox?compose=new"> <CiMail/> </a>
        <a target="_blank" rel='noreferrer noopener' title='Facebook' className='facebook' href="https://www.facebook.com/vargees.pradeep">  <FaFacebook/>  </a>
        <a target="_blank" rel='noreferrer noopener' title='Instagram' className='instagram' href="https://www.instagram.com/lone_badboyvp/?hl=en"> <FaInstagram/> </a>
       </div> 
     <h2> &copy; Copyright And Owned By S.Vargees Pradeep.</h2>
     <h2> &reg; All Rights Reserved 2024.</h2>
     <div className="shape-cl wish"></div>
     <div className="shape-f tcr"></div>
     <div className="shape-cr crt"></div>
   </footer>
  );
};


