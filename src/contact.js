import React ,{useState} from "react";
import { Container ,Col, Row  } from "react-bootstrap";
import { FiMapPin } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";



export default function Project(){
 
const [name,setName] =useState("");
const [email,setEmail]=useState("");
const [message,setMessage]=useState("");

const handleReset =()=>{
  setName("");
  setEmail("");
  setMessage("");
};

     
  return(
    <section className="d-flex justify-content-center align-items-center flex-column container-fluid fur-lk" id="contact">
          <h1>CONTACT ME</h1>
      <Container fluid className="p-3" gap={3} >
            <Row gap={3} className="g-5" >
                <Col xs={12} sm={11} md={6} lg={6} xl={5} xxl={5} >

                    <div className="gtTch">

                      <h1>Get In Touch</h1>
                      <p>"**Reach out and let's connect!** Whether you have questions, ideas, or just want to say hello,
                          I'm here. Drop me a message, and let's start a conversation!"</p>

                        {/*---------------- address =----------------------------*/}
                        <h3> <FiMapPin /> Address</h3>
                        <p>Chidambaram ,Cuddalore District  , TamilNadu -608001</p>
                          
                        {/*----------------- e-mail----------------------------------- */}
                        <h3> <CiMail /> E-mail</h3>
                        <p>vargees0608@gmail.com</p>
                        <h3> <IoCallOutline /> Phone </h3>
                        <p>+91 6382116164</p>

                </div>
              </Col>

              {/* ----------2nd ------------------- */}
              <Col xs={12} sm={11} md={6} lg={6} xl={6} xxl={6} className="bx-clr">
              <form id="form"   action="https://formspree.io/f/xzbnjkov" method="POST" >
                {/* name */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="name" name="name" className="form-control" id="name" placeholder="Enter your name" required onChange={(event)=>setName(event.target.value)} value={name}/>
              </div>
              {/* email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" id="email" placeholder="Enter your email-address" required onChange={(event)=>setEmail(event.target.value)} value={email}/>
              </div>
              {/* message */}
              <div className="mb-3">
                <label htmlFor="message" className="form-label">message</label>
                <textarea name="message" className="form-control" id="message" rows="3" placeholder="Enter your message" required onChange={(event)=>setMessage(event.target.value)} value={message}></textarea>
              </div>
              <div className="d-flex justify-content-between align-items-center gap-3">
                  <input className="btn btn-primary w-50" type="submit" value="Send"/>
                  <input className="btn btn-primary w-50" type="reset" value="Reset" onClick={handleReset}/>
              </div>
              </form>
              </Col>
          </Row>
      </Container>
    </section>
  );
}
