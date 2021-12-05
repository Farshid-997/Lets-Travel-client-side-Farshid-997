import React, { useState,useEffect } from 'react';
import ShowService from '../ShowService/ShowService'
import './service.css';
import { ReactTypical } from '@deadcoder0904/react-typical'
import Typical from 'react-typical'
const Service = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://chilling-moonlight-57105.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div  style={{marginTop:'100px'}}>
             <h2>Our Best Packages!</h2>
            
              <Typical
        steps={['Select Your Best Package', 1000,  'For Your Travel',2000]}
        loop={Infinity}
        wrapper="p"
      />
         
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