import React from 'react';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
const ShowService = ({ service }) => {
    const {_id, Name, price, description, img } = service;
    return (
        <div>
        <div>
        <Slide  right >
        <Zoom>
        <img src={img} alt="" />
</Zoom>
       
            <h3>{Name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
            <Link to={`/packages/${_id}`}>
                <button className="btn btn-warning">Book {Name.toLowerCase()}</button>
            </Link>  
        </Slide>
     
        </div>
          
        </div>
    );
};

export default ShowService;