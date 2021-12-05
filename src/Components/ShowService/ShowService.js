import React from 'react';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Fade';
// import Zoom from 'react-reveal/Zoom';
import { Col, Container, Row } from 'react-bootstrap';
const ShowService = ({ service }) => {
    const {_id, Name, price, description, img } = service;
    return (
        <div >
        <Row>

    <Col xs={{ order: 12 }} md={{order:2}}>

    <h3>{Name}</h3>

    <Slide  right >
       
       <img src={img} alt="" />

      
         
       </Slide>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
            <Link to={`/packages/${_id}`}>
                <button className="btn btn-warning">Book {Name.toLowerCase()}</button>
            </Link>  
    </Col>
    
  </Row>

        </div>
    );
};

export default ShowService;