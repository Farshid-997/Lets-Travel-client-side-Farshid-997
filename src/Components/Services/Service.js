import React, { useState,useEffect } from 'react';
import ShowService from '../ShowService/ShowService'
import './service.css';

import Typical from 'react-typical'
import { Container, Row } from 'react-bootstrap';
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
         
<div >
    <Container className="service-container">
<Row xs={1} sm={1} md={2} lg={3} className="g-5" style={{marginLeft:'5px',paddingLeft:'5px'}}>
{
                       services.map(service=> <ShowService
                        key={service.id}
                        service={service}
                    ></ShowService>)
                }

</Row>
    </Container>

</div>
           

        </div>
    );
};

export default Service;