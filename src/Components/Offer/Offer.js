import React from 'react';
// import './Offer.css'
import img1 from './view-london-city-sunset.jpg'
import img2 from './island-symbol-storm-architecture-manhattan.jpg'
import img3 from './sydney-opera-house-near-beautiful-sea-clear-blue-sky.jpg'
import { Card, CardGroup } from 'react-bootstrap';
const Offer = () => {
    return (
      <div style={{marginTop:'70px'}}>
        <h2 className="mt-5">Our New Offers</h2>
<CardGroup >
  <Card style={{backgroundColor:'skyblue',margin:'15px'}}>
    <Card.Img variant="top" src={img1} />
    <Card.Body>
      <Card.Title style={{color:'black',fontWeight:'bold'}}>New Travel Package In  London</Card.Title>
      <Card.Text style={{color:'black'}}>
      Get this booking offer and you will get the opportunity to visit  London.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted" style={{color:'black',fontWeight:'bold'}}>20% OFF YOUR PURCHASE</small> <br/>
      <small className="text-muted" style={{color:'black',fontWeight:'bold'}}>Use Promo Code:BOH232</small>  <br/>
      <small className="text-muted" style={{color:'red',fontWeight:'bold'}}>Expires Soon</small>
    </Card.Footer>
  </Card>
  <Card style={{backgroundColor:'skyblue',margin:'15px'}}>
    <Card.Img variant="top" src={img2} />
    <Card.Body>
      <Card.Title style={{color:'black',fontWeight:'bold'}}>New Travel Package In  USA</Card.Title>
      <Card.Text style={{color:'black'}}>
      Get this booking offer and you will get the opportunity to visit  USA.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted" style={{color:'black',fontWeight:'bold'}}>20% OFF YOUR PURCHASE</small> <br/>
      <small className="text-muted" style={{color:'black',fontWeight:'bold'}}>Use Promo Code:BOH232</small>  <br/>
      <small className="text-muted" style={{color:'red',fontWeight:'bold'}}>Expires Soon</small>
    </Card.Footer>
  </Card>
  <Card style={{backgroundColor:'skyblue',margin:'15px'}}>
    <Card.Img variant="top" src={img3} />
    <Card.Body>
      <Card.Title style={{color:'black',fontWeight:'bold'}}>New Travel Package In  Australia</Card.Title>
      <Card.Text style={{color:'black'}}>
      Get this booking offer and you will get the opportunity to visit Australia
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted" style={{color:'black',fontWeight:'bold'}}>20% OFF YOUR PURCHASE</small> <br/>
      <small className="text-muted" style={{color:'black',fontWeight:'bold'}}>Use Promo Code:BOH232</small>  <br/>
      <small className="text-muted" style={{color:'red',fontWeight:'bold'}}>Expires Soon</small>
    </Card.Footer>
  </Card>
</CardGroup>
      </div>
    );
};

export default Offer;