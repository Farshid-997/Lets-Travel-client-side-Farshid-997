import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

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
import ManageAllOrders from './AdminDashboard/ManageAllOrders';
import ShowContact from '../ShowContact/ShowContact';
const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const{admin,logOut,user}=useAuth();
    return (
        <div>
   <Container>
   <Row>
    <Col>
    <div className="sidenav">
      
      {
          user.email&&

          <div>
 <Link to={`${url}/confirmorders`}>User Confirm Orders</Link><br/>
  
  {/* <Link to={`${url}/usersreview`}>Users Review</Link><br/> */}

  <Link to={`${url}/payment`}>Payment</Link><br/>
  <Link to={`${url}/showcontact`}>User Contact</Link><br/>
  
  <Button variant='success'onClick={logOut}>Logout</Button>
          </div>
      }


{
    admin.email&& 
    <div>
         <Link to={`${url}/confirmorders`}>User Confirm Orders</Link><br/>
        <Link to={`${url}/makeadmin`}>Make Admin</Link><br/>
        <Link to={`${url}/showcontact`}>User Contact</Link><br/>
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

        <Route path={`${path}/manageallorders`}>
<ManageAllOrders></ManageAllOrders>
        </Route>

        {/* <Route path={`${path}/addproduct`}>
 <AddProduct></AddProduct>
        </Route> */}

        {/* <Route path={`${path}/manageProduct`}>
<ManageProduct></ManageProduct>
        </Route> */}

        


      </Switch>

        </div>
    );
};

export default Dashboard;