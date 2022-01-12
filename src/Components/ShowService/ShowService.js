import React from 'react';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Fade';
import './ShowService.css'
import {  Button, Card } from 'react-bootstrap';
const ShowService = ({ service }) => {
    const {_id, Name, price, description, image } = service;
    return (
        <div >
<Slide  right>

<Card style={{ width: '18rem', backgroundColor:'#FAFAD2'}}>
   

<Card.Img className='card-img'  variant="top" src={`data:image/png;base64,${image}`}  />
 <Card.Body>
    <Card.Title style={{ color:'black'  }}>{Name}</Card.Title>
    <Card.Text style={{ color:'black',fontWeight:'bold'  }}>
    Tour Price is {price}BDT
    </Card.Text>
    <Card.Text style={{ color:'black',fontWeight:'bold'  }}>
    {description}
    </Card.Text>

    <Link to={`/packages/${_id}`}>
    <Button variant="success">Want to Go?Click Here.</Button>
    </Link>
  
  </Card.Body>
</Card>  

</Slide>
 

        </div>
    );
};

export default ShowService;