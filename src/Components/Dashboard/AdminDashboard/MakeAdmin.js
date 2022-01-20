import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email,setEmail]=useState('')
    const [success,setSuccess]=useState(false)
    const handleOnBlur=e=>{
        setEmail(e.target.value)
    }
    const handleAdminSubmit=e=>{
        e.preventDefault()
        const user={email}
        fetch('http://localhost:5000/users/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
              },
              body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount)
            console.log(data)
            setSuccess(true)
        })
    }
    return (
        <div>
             <form onSubmit={handleAdminSubmit}>
       <input style={{margin:'30px',padding:'10px',width:'40%'}} onBlur={handleOnBlur} type='email' placeholder='Enter your Email'></input> <br />
         <Button style={{width:'40%',marginBottom:'20px'}}type="submit" variant="success">Make Admin</Button>
         </form>

         {success&&<Alert style={{width:'20%',marginLeft:'750px'}}>Made Admin Successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;