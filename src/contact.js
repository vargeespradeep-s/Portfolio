import React from "react";
import { Container ,Col, Row,Form,Button  } from "react-bootstrap";
import { FiMapPin } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";


export default function Project(){

        
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
              <Form>
                {/* ----------------name--------------------------------------- */}
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Enter Your Name</Form.Label>
                       <Form.Control type="text" placeholder="Enter Your Name" />
                      </Form.Group>
                      {/* ----------------------------email----------------------------- */}
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Email address</Form.Label>
                       <Form.Control type="email" placeholder="Enter Your Email Address" />
                      </Form.Group>
                    {/* --------------------------phone number------------------------- */}
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Phone Number</Form.Label>
                       <Form.Control type="tel" placeholder="Enter Your Number" />
                      </Form.Group>
                      {/* -----------------------------------message-------------------------------- */}
                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                         <Form.Label> Message </Form.Label>
                          <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                  {/*-----------------------button------------------------------------  */}
                    <div className="d-flex justify-content-evenly align-items-center p-3" >
                     <Button as="input" type="submit" value="Submit" />
                     <Button as="input" type="reset" value="Reset" />

                    </div>
                 </Form>     

              </Col>
          </Row>
      </Container>
    </section>
  );
}
