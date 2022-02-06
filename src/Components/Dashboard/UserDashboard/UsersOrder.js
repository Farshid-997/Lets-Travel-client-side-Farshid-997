import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import {  useParams } from 'react-router-dom';

const UsersOrder = () => {

    const {id}=useParams();
    const [userOrder,setUserOrder]=useState({});

    useEffect(()=>{

        fetch(`http://localhost:5000/orders/${id}`)
        .then(res=>res.json())
        .then(data=>setUserOrder(data))
    },[id])


    const handleDeleteOrder=(id)=>{

    }
    return (
        <div>
            <table id='table'  className="table table-striped" style={{color:'white',width:'40%', marginRight: "auto",marginLeft:'auto'}}>
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
          userOrder.map(userOrder=>
     <tbody >
    <tr>
     
      <td style={{color:'white'}}>{userOrder.Name}</td>
    <td style={{color:'white'}}> {userOrder.description}</td>
    <td style={{color:'white'}}>{userOrder.country}</td>
    <td style={{color:'white'}}>{userOrder.packageName}</td>
    <td style={{color:'white'}}>{userOrder.MobileNumber}</td>
    <td style={{color:'white'}}>{userOrder.NiDorPassport}</td>
    <td style={{color:'white'}}>{userOrder.paymentMethod}</td>
    <td><Button variant='danger' onClick={()=>handleDeleteOrder(userOrder._id)}>Delete</Button></td>
    </tr>

    </tbody>
            
            )
      }
  
     </table> 
        </div>
    );
};

export default UsersOrder;