import React, { useState,useEffect } from 'react';
import ShowService from '../ShowService/ShowService'
import './service.css';
const Service = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://chilling-moonlight-57105.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div >
              <h1>Choose Your Package</h1>
          <p>Select Your Best Package For Your Travel</p> 
<div className="service-container">
{
                       services.map(service=> <ShowService
                        key={service.id}
                        service={service}
                    ></ShowService>)
                }

</div>
           

        </div>
    );
};

export default Service;