
import React from 'react';
import { Link } from 'react-router-dom';

const ShowService = ({ service }) => {
    const {_id, Name, price, description, img } = service;
    return (
        <div>
        
           <img src={img} alt="" />
            <h3>{Name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning">Book {Name.toLowerCase()}</button>
            </Link>  
        </div>
    );
};

export default ShowService;