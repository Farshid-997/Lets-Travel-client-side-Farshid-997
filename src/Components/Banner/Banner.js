import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "./nature-ge9be872df_1920.jpg";
import img2 from "./travel-gb850b0135_1920.jpg";
import img3 from "./road-g24480aaaa_1920.jpg";
import "./Banner.css";
//import { Link } from 'react-router-dom';
const Banner = () => {
  //const {_id } = props.service;
  return (
    <div>
      <Carousel fade>
        <Carousel.Item className="caro">
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption>
            <div style={{ marginBottom: "350px" }}>
              <h3> Want to Enjoy the WildLife in Africa?!!</h3>

              {/* <Link to={`/packages/${_id}`}> */}
              {/* <Button style={{color:'white'}} variant='outline-dark'>Book This Opportunity</Button> */}
              {/* </Link> */}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="caro">
          <img className="d-block w-100" src={img2} alt="Second slide" />

          <Carousel.Caption>
            <div style={{ marginBottom: "350px" }}>
              <h3> Want to see a night view in Italy?!!</h3>
              {/* <Button style={{color:'white'}} variant='outline-dark'>Book This Opportunity</Button> */}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="caro">
          <img className="d-block w-100" src={img3} alt="Third slide" />

          <Carousel.Caption>
            <div style={{ marginBottom: "350px" }}>
              <h3 style={{ color: "black" }}> Want a road trip in Brazil?!!</h3>
              {/* <Button style={{color:'white'}} variant='outline-dark'>Book This Opportunity</Button> */}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
