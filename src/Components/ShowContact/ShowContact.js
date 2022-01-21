import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';


const ShowContact = () => {
    const[contacts,setContacts]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/contact')
        .then(res=>res.json())
        .then(data=>setContacts(data))
    },[])
    return (
        <table className="table table-striped" style={{color:'white',width:'40%', marginRight: "auto",marginLeft:'auto'}}>
  <thead>
    <tr>
    
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Description</th>
      <th scope="col">Action</th>
    </tr>
  </thead>


              {
 contacts.map(contacts=> <tbody >
    <tr>
     
      <td style={{color:'white'}}>{contacts.Name}</td>
      <td style={{color:'white'}}>{contacts.Email}</td>
    <td style={{color:'white'}}> {contacts.description}</td>
   
  
    <td><Button variant='danger'>Delete</Button></td>
    </tr>

    </tbody>
    )
            }
        
        </table>
    );
};

export default ShowContact;