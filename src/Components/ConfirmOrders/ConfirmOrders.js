import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';


const ConfirmOrders = () => {
    const[orders,setOrders]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])
    return (
     
     
      <table className="table table-striped" style={{color:'white',width:'40%', marginRight: "auto",marginLeft:'auto'}}>
  <thead>
    <tr>
    
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Country</th>
      <th scope="col">Package Name</th>
      <th scope="col">Mobile Number</th>
      <th scope="col">NID or Passport</th>
      <th scope="col">Payment Method</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
      {
          orders.map(orders=>
     <tbody >
    <tr>
     
      <td style={{color:'white'}}>{orders.Name}</td>
    <td style={{color:'white'}}> {orders.description}</td>
    <td style={{color:'white'}}>{orders.country}</td>
    <td style={{color:'white'}}>{orders.packageName}</td>
    <td style={{color:'white'}}>{orders.MobileNumber}</td>
    <td style={{color:'white'}}>{orders.NiDorPassport}</td>
    <td style={{color:'white'}}>{orders.paymentMethod}</td>
    <td><Button variant='danger'>Delete</Button></td>
    </tr>

    </tbody>
            
            )
      }
  
     </table>  
       
    );
};

export default ConfirmOrders;