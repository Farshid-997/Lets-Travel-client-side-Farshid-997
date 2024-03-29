import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./Package.css";

const Packages = () => {
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const [bookings, setBooking] = useState({});
  useEffect(() => {
    fetch(`https://branch-boggy-backbone.glitch.me/services/${id}`)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [id]);

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://branch-boggy-backbone.glitch.me/orders", data)
      .then((res) => {
        console.log(res);

        if (res.data.insertedId) {
          alert("addedd succefully");
          reset();
        }
      });
  };
  return (
    <div className="package">
      <h1>{bookings.place}</h1>

      <img src={`data:image/png;base64,${bookings.image}`} alt="" />

      <h3>Now Enter Your details!!!</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("Name")} placeholder="Place Your Name" />
        <textarea {...register("description")} placeholder="Description" />
        <input
          type="text"
          {...register("country")}
          placeholder="Country Name"
        />
        <input
          type="text"
          {...register("packageName")}
          placeholder="Package Name"
        />
        <input
          type="text"
          {...register("MobileNumber")}
          placeholder="MobileNumber"
        />
        <input
          type="text"
          {...register("NiDorPassport")}
          placeholder="Nid Or PassPort"
        />
        <input {...register("paymentMethod")} placeholder="Payment Option" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Packages;
