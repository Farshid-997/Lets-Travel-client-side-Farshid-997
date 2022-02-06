 import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import img1 from './world map.png'
import './Contact.css'

const Contact = () => {
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = data =>{
      console.log(data);
      axios.post('https://chilling-moonlight-57105.herokuapp.com/contact',data)
.then(res=>{
          console.log(res)

          if(res.data.insertedId){
alert('Contact addedd succefully')
reset()
          }
      })
  } 
    return (
        <div >
           
            <h2 style={{margin:'50px'}}>Contact With us!!</h2>

<div className='contact' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>

<img src={img1} alt="" />
<form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Email")} placeholder="Email"  style={{width:'70%',margin:'10px',padding:'10px'}}/>
     
      <input  {...register("Name")} placeholder="Name"  style={{width:'70%',margin:'10px',padding:'10px'}} />
      <textarea {...register("description")} placeholder="Write here.."  style={{width:'70%',margin:'10px',padding:'10px'}}/>
    
      <input type="submit" style={{width:'70%',margin:'10px',padding:'10px'}} />
    </form>
</div>
           
        </div>
    );
};

export default Contact;