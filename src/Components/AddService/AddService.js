import React from 'react';
import axios from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'
const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        console.log(data);
        axios.post('http://localhost:5000/services',data)
        .then(res=>{
            console.log(res)
        })
    } 
    return (
        <div className="add-service">
            <h2>Add a Service!!</h2>
             <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Name")} placeholder="PlaceName"/>
      <textarea {...register("description")} placeholder="Description"/>
      <input type="number" {...register("age")} placeholder="TourPrice" />
      <input {...register("img")} placeholder="image url"/>
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddService;