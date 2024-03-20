import React from "react";
import { MdSignalCellular1Bar } from "react-icons/md";
import { FaArrowCircleRight } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";
import { Container ,Col, Row, Card} from "react-bootstrap";
import autoMobile from './Assests/automobile.jpg';
import Code from './Assests/code.jpg';
import lapTop from './Assests/laptop.jpg';
import Night from './Assests/night.jpg';
import portFolio from './Assests/portfolio.jpg';
import Dog from './Assests/dog.jpg';


export default function Project(){
    
        return(
            <section className="d-flex justify-content-center align-items-center flex-column container-fluid trd-lk" id="project">
              <h1 className="pro-clr"> <BsBarChartFill className="lft" /> MY PROJECT <BsBarChartFill className="rgt" /> </h1>
       <Container className="d-grid justify-content-center align-content-center gap-4 ">    
              {/*--------------------------- row-1 --------------------*/}
      <Row className="g-4">
        {/*-------------- 1st card------------------------ */}
        <Col xs={12} sm={11} md={6} lg={6} xl={4} xxl={4} > 
        <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={autoMobile} />
      <Card.Body>
        <Card.Title>Luxury Travellers</Card.Title>
        <Card.Text>
            Languages used HTML ,CSS Only.
        </Card.Text>
        <Card.Link href="https://vargeespradeep-s.github.io/travels-website/" rel="noreferrer noopener" target="_blank" className="text-decoration-none p-1"> GO TO SITE <FaArrowCircleRight /> </Card.Link>
      </Card.Body>
    </Card>
        </Col>
        {/*-------------------- 2nd card--------------- */}
        <Col xs={12} sm={11} md={6} lg={6} xl={4} xxl={4}  >
        <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={Code} />
      <Card.Body>
      <Card.Title>Discord Clone</Card.Title>
        <Card.Text>
          Languages used HTML ,CSS Only.
        </Card.Text>
        <Card.Link href="https://team1000101.github.io/ovo/" rel="noreferrer noopener" target="_blank" className="text-decoration-none p-1">GO TO SITE <FaArrowCircleRight />  </Card.Link>
      </Card.Body>
    </Card>
        </Col>
        {/* ----------------3rd card--------------- */}
        <Col xs={12} sm={11} md={6} lg={6} xl={4} xxl={4}  >
        <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={portFolio} />
      <Card.Body>
        <Card.Title>Portfolio</Card.Title>
        <Card.Text>
        In Progress <MdSignalCellular1Bar />
        </Card.Text>
        <Card.Link href="#" rel="noreferrer noopener" target="_blank" className="text-decoration-none p-1">Site Link</Card.Link>
      </Card.Body>
    </Card>
        </Col>
      

      {/* ------------------2nd row---------------- */}
     
        {/*-------------- 4st card------------------------ */}
        <Col xs={12} sm={11} md={6} lg={6} xl={4} xxl={4}>
        <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={lapTop} />
      <Card.Body>
        <Card.Title>Project 4</Card.Title>
        <Card.Text>
        In Progress <MdSignalCellular1Bar />
        </Card.Text>
        <Card.Link href="#" rel="noreferrer noopener" target="_blank" className="text-decoration-none p-1">Site Link</Card.Link>
      </Card.Body>
    </Card>
        </Col>
        {/*-------------------- 5nd card--------------- */}
        <Col xs={12} sm={11} md={6} lg={6} xl={4} xxl={4}>
        <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={Night} />
      <Card.Body>
        <Card.Title>Project 5</Card.Title>
        <Card.Text>
        In Progress <MdSignalCellular1Bar />
        </Card.Text>
        <Card.Link href="#" rel="noreferrer noopener" target="_blank" className="text-decoration-none p-1">Site Link</Card.Link>
      </Card.Body>
    </Card>
        </Col>
        {/* ----------------6rd card--------------- */}
        <Col xs={12} sm={11} md={6} lg={6} xl={4} xxl={4}>
        <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={Dog} />
      <Card.Body>
        <Card.Title>Project 6</Card.Title>
        <Card.Text>
        In Progress <MdSignalCellular1Bar />
        </Card.Text>
        <Card.Link href="#" rel="noreferrer noopener" target="_blank" className="text-decoration-none p-1">Site Link</Card.Link>
      </Card.Body>
    </Card>
        </Col>
      </Row>

    </Container>
            </section>
  );
};
