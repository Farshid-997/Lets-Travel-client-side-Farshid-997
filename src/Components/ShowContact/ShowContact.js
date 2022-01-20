import React, { useEffect, useState } from 'react';
import ShowUserContact from './ShowUserContact';

const ShowContact = () => {
    const[contacts,setContacts]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/contact')
        .then(res=>res.json())
        .then(data=>setContacts(data))
    },[])
    return (
        <div>
              {
 contacts.map(contacts=><ShowUserContact
  key={contacts._id}
  contacts={contacts}
  
  >


  </ShowUserContact>)
            }
        
        </div>
    );
};

export default ShowContact;