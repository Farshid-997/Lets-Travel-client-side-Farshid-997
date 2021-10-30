import axios from 'axios';
import React from 'react';

import { useForm } from "react-hook-form";
import './AddService.css'
const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        console.log(data);
        axios.post('http://localhost:5000/services',data)
  .then(res=>{
            console.log(res)

            if(res.data.insertedId){
alert('addedd succefully')
reset()
            }
        })
    } 
    return (
        <div className="add-service">
            <h2>Add a Service!!</h2>
             <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Name")} placeholder="PlaceName"/>
      <textarea {...register("description")} placeholder="Description"/>
      <input type="number" {...register("price")} placeholder="TourPrice" />
      <input {...register("img")} placeholder="image url"/>
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddService;