import React,{useState} from 'react';
import { useForm } from "react-hook-form";

import './AddService.css'
const AddService = () => {
    const {reset} = useForm();
  
    const [place,setPlace]=useState('')
    const [description,setDescription]=useState('')
    const [price,setPrice]=useState('')
    const [image,setImage]=useState(null)


const handleSubmit=e=>{
    e.preventDefault()
    if(!image){
        return;
    }
    const formData=new FormData();
    formData.append('place', place);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('image', image);

fetch('https://chilling-moonlight-57105.herokuapp.com/services', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(result => {
  if(result.insertedId){

reset()
  }
})
.catch(error => {
  console.error('Error:', error);
});
}
    return (
        <div className="add-service">
         
            <h2>Add a Service!!</h2>
    

<form onSubmit={handleSubmit}>



<input onChange={e=>setPlace(e.target.value)} type="text" placeholder="Your Place Name"/>
<textarea onChange={e=>setDescription(e.target.value)} type='text'placeholder='Write here..'></textarea>
<input onChange={e=>setPrice(e.target.value)} type="text" placeholder="Tour Price"/>
<input style={{width:'40%'}} type="file" placeholder='Choose Image' accept='image/*' onChange={e=>setImage(e.target.files[0])}  />
<input type="submit" />
</form>
        </div>
    );
};

export default AddService;