import React from 'react';
import { Card } from 'react-bootstrap';

const ShowBlog = (props) => {
    const{name,place,description,image}=props.blogs
    return (
        <div>
         
        
           <Card  style={{ width: '18rem',backgroundColor:'#98BAE7' }}>
  <Card.Img variant="top" style={{padding:'5px'}} src={`data:image/png;base64,${image}`} />
  <Card.Body style={{backgroundColor:'black'}}>
    <Card.Title style={{color:'rgba(76, 223, 223, 0.925)'}} >"The Place {place} I Never Forgot"- {name}</Card.Title>
    <Card.Text style={{color:'rgba(76, 223, 223, 0.925)'}}>
    {description}..
    </Card.Text>
    
  </Card.Body>
</Card>
        </div>
    );
};

export default ShowBlog;