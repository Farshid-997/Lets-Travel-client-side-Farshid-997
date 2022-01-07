import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './Blog.css'
const AddBlogs = () => {
    const { register, handleSubmit,reset } = useForm();
  
    const onSubmit = data =>{
        console.log(data);
        axios.post('https://chilling-moonlight-57105.herokuapp.com/services',data)
  .then(res=>{
            console.log(res)

            if(res.data.insertedId){
alert('addedd succefully')
reset()
            }
        })
    } 
    return (
   
          <div className='add-blog'>
           <h2>Write Your Blog</h2> 

           <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Name")} placeholder="PlaceName"/>
      <textarea {...register("description")} placeholder="Description"/>
   
      <input {...register("img")} placeholder="image url"/>
      <input type="submit" />
    </form>   
        </div>
    );
};

export default AddBlogs;