import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
//import { Card, Button } from 'react-bootstrap';
const Packages = () => {
    const { id } = useParams();
    const [bookings, setBooking] = useState([])
    useEffect(() => {

        fetch(`http://localhost:5000/${id}`)
            .then(res => res.json())
            .then(data => setBooking(data))


    }, [])

   //const bookingInfo = bookings.find(booking => booking._id === parseInt(id))
    return (
        // <div>
        //     <Card style={{ width: '18rem' }}>
        //         <Card.Img variant="top" src={bookingInfo?.img} />
        //         <Card.Body>
        //             <Card.Title>{bookingInfo?.Name}</Card.Title>
        //             <Card.Text>
        //                 {bookingInfo?.description}
        //             </Card.Text>
        //             <Button variant="primary">Go somewhere</Button>
        //         </Card.Body>
        //     </Card> 
        // </div>

        <div>
         <h1>Details of:{bookings.Name}</h1>
<h2>This is booking:{id}</h2>
Image:<img src={bookings.img} alt="" />
Price<p>{bookings.price}</p>
        </div>
    );
};

export default Packages;