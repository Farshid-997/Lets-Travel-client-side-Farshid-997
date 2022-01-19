import React from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import useAuth from '../../Hooks/useAuth';
import './Dashboard.css'
const Dashboard = () => {
    const{admin,logOut,user}=useAuth();
    return (
        <div>
   <Container>
   <Row>
    <Col>
    <div className="sidenav">
      
 <LinkContainer to='/confirmOrders'>
 <a href="#news">My Orders</a>
 </LinkContainer>
  
  <a href="#contact">Payment</a>
  <a href="#about">About</a>
 <Button variant='success'onClick={logOut}>Logout</Button>
</div>
    </Col>
    <Col>
    <div className="main">
 
</div>
</Col>
    
  </Row>
</Container>
        </div>
    );
};

export default Dashboard;