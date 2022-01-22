import React from 'react';
import {  Button, Col, Container, Row } from 'react-bootstrap';

import useAuth from '../../Hooks/useAuth';
import './Dashboard.css'
import {
  
    Switch,
    Route,
    Link,
    
    useRouteMatch
  } from "react-router-dom";
import ConfirmOrders from '../ConfirmOrders/ConfirmOrders';
import Payment from './UserDashboard/Payment';
import MakeAdmin from './AdminDashboard/MakeAdmin';

import ShowContact from '../ShowContact/ShowContact';
import AddBlogs from '../Blog/AddBlogs';
import AddService from '../AddService/AddService';
import AddReview from '../AddReview/AddReview';
import { LinkContainer } from 'react-router-bootstrap';
import { AiTwotoneHome } from "react-icons/ai";

const Dashboard = () => {
  const closeNav=()=>{
document.getElementById('sidenav').style.width='0px';
  }
  const openNav=()=>{
    document.getElementById('sidenav').style.width='250px';
    document.getElementById('main').style.marginLeft='250px';
      }
    let { path, url } = useRouteMatch();
    const{admin,user,logOut}=useAuth();
    return (
        <div id='main'>
          <Button style={{width:'',margin:'5px'}}onClick={openNav}>☰ Open </Button>
          <h2>Welcome to Dashboard</h2>
         
   <Container>
   <Row>
    <Col>
    <div id='sidenav' className="sidenav">
    <Button class="openbtn" onClick={closeNav}>X</Button> 
      {
          user.email&&

          <div>
            <LinkContainer to='/home'>
          
      <AiTwotoneHome style={{width:'50px'}}/> 
            </LinkContainer>
            <h4>User's Dashboard</h4>
<Link to={`${url}/payment`}>Payment</Link><br/>
<Link to={`${url}/addblog`}>Add Blogs</Link><br/>
<Link to={`${url}/addreview`}>Add Review</Link><br/>

<Button variant='danger' onClick={logOut}>LogOut</Button>
        </div>
      }


{

  admin&&
  <div>
    <h4>Admin Dashboard</h4>
    <Link to={`${url}/addservice`}>Add Service</Link><br/>
  <Link to={`${url}/confirmorders`}>User Confirm Orders</Link><br/>
 <Link to={`${url}/makeadmin`}>Make Admin</Link><br/>
 <Link to={`${url}/showcontact`}>User Contact</Link><br/>
 <Button variant='success' onClick={logOut}>LogOut</Button>
</div>

}
   
 

</div>
    </Col>
    <Col>
    <div className="main">
 
</div>
</Col>
    
  </Row>
</Container>

<Switch>
       



        <Route path={`${path}/confirmorders`}>
     <ConfirmOrders></ConfirmOrders>
        </Route>

        <Route path={`${path}/payment`}>
    <Payment></Payment>
        </Route>

        <Route path={`${path}/showcontact`}>
<ShowContact></ShowContact>
        </Route>

        <Route path={`${path}/makeadmin`}>
<MakeAdmin></MakeAdmin>
        </Route>

        <Route path={`${path}/addreview`}>
<AddReview></AddReview>
        </Route>

        <Route path={`${path}/addblog`}>
 <AddBlogs></AddBlogs>
        </Route>

        <Route path={`${path}/addservice`}>
<AddService></AddService>
        </Route>

        


      </Switch>

        </div>
    );
};

export default Dashboard;