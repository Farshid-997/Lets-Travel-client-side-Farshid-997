import React from 'react';
import { Card,Button } from 'react-bootstrap';
import img1 from './Wavy_Bus-10_Single-12.jpg';
import img2 from './rm373batch12-029.jpg';
import img3  from './PngItem_1466916.png';
import './Contact.css'
const Contact = () => {
    return (
        <div>
            <h3>Contact With Us!!</h3>
       
  <div className="contact">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img1} style={{width:'250px',height:'250px'}} />
  <Card.Body>
    <Card.Title>Our Office</Card.Title>
    <Card.Text>
    <p>Addess:1/2-5,dhaka-Bangladesh</p>
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>


<Card style={{ width: '18rem',height:'100%' }}>
  <Card.Img variant="top" src={img2} style={{width:'250px',height:'250px'}} />
  <Card.Body>
    <Card.Title>Our Phone</Card.Title>
    <Card.Text>
    <p>Phone:01148111103,484511854</p>
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

  
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img3} style={{width:'250px',height:'250px'}} />
  <Card.Body>
    <Card.Title>Email</Card.Title>
    <Card.Text>
    <p>Email:arnnbo@gmail.com,absab@yahoo.com</p>
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  </div>

  

        </div>
    );
};

export default Contact;