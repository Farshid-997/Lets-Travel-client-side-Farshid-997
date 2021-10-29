import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from './4349726.jpg'
import img2 from './5385415.jpg'
import img3  from './3576419.jpg'
const Banner = () => {
    return (
        <div>
          <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;
