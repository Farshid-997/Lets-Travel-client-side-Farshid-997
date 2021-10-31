import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
//import { Card, Button } from 'react-bootstrap';
const Packages = () => {
    const { id } = useParams();
    const [bookings, setBooking] = useState({})
    useEffect(() => {

        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setBooking(data))


    }, [])

  // const bookingInfo = bookings?.find(booking => booking._id === parseInt(id))
    return (
       <div>

         <h1>Details of Country:{bookings.Name}</h1> 

<h1>Image:</h1><img src={bookings.img} alt="" /> <br />
<h1>Price:</h1><p style={{color:'orange',fontWeight:'bold'}}>{bookings.price}</p>
        </div>
    );
};

export default Packages;