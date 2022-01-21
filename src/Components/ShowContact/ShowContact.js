import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';


const ShowContact = () => {
    const[contacts,setContacts]=useState([])
    useEffect(()=>{
        fetch(' https://chilling-moonlight-57105.herokuapp.com/contact')
        .then(res=>res.json())
        .then(data=>setContacts(data))
    },[])

//delete contact

const  handleDeleteContact=(id)=>{
   
  fetch(` https://chilling-moonlight-57105.herokuapp.com/contact/${id}`,{
    method:'DELETE'
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.deletedCount>0){
  alert('Contact deleted successfully')
  
  const remainingContacts=contacts.filter(contact=>contact._id!==id)
  setContacts(remainingContacts)
    }
  })
  }

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
   
  
    <td><Button variant='danger' onClick={()=>handleDeleteContact(contacts._id)}>Delete</Button></td>
    </tr>

    </tbody>
    )
            }
        
        </table>
    );
};

export default ShowContact;