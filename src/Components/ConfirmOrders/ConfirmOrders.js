import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

import './ConfirmOrders.css'
const ConfirmOrders = () => {
    const[orders,setOrders]=useState([])
   
  
    useEffect(()=>{
        fetch(' https://chilling-moonlight-57105.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])

  const  handleDeleteOrder=(id)=>{
   
fetch(` https://chilling-moonlight-57105.herokuapp.com/orders/${id}`,{
  method:'DELETE'
})
.then(res=>res.json())
.then(data=>{
  if(data.deletedCount>0){
alert('order deleted successfully')

const remainingOrders=orders.filter(order=>order._id!==id)
setOrders(remainingOrders)
  }
})
}
    return (
      <div>


<table id='table'  className="tables table table-striped" style={{color:'white',width:'40%', marginRight: "auto",marginLeft:'auto'}}>
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
    <td><Button variant='danger' onClick={()=>handleDeleteOrder(orders._id)}>Delete</Button></td>
    </tr>

    </tbody>
            
            )
      }
  
     </table> 
      </div>
     
     
     
     
    
    );
};

export default ConfirmOrders;