import React from 'react';
import './Offer.css'
import img1 from './view-london-city-sunset.jpg'
import img2 from './island-symbol-storm-architecture-manhattan.jpg'
import img3 from './sydney-opera-house-near-beautiful-sea-clear-blue-sky.jpg'


const Offer = () => {
    return (
      <div style={{marginTop:'70px'}}>

 <h2 className="mt-5">Our New Offers</h2>
     

        <div className="coupon-Container">
        <div className="coupon">
  <div className="container">
    <h3 style={{color:'black'}}>New Travel Package In  London</h3>
  </div>
 
  <img src={img1} alt="Avatar" style={{width:'500px'}}/>
      
 
  <div className="container" style={{backgroundColor:'white'}}>
    <h2 style={{color:'black'}}><b>20% OFF YOUR PURCHASE</b></h2> 
    <p style={{color:'black'}}>Get this booking offer and you will get the opportunity to visit  London.</p>
  </div>

  <div className="container">
    <p style={{color:'black'}}>Use Promo Code: <span class="promo">BOH232</span></p>
    <p style={{color:'red'}} className="expire">Expires Soon</p>


  </div>
  
</div>   

{/* 2ND  */}

<div className="coupon">
  <div className="container">
    <h3  style={{color:'black'}}>New Travel Package In USA</h3>
  </div>

  <img src={img2} alt="Avatar" style={{width:'500px'}}/>
     
 
  
  <div className="container" style={{backgroundColor:'white'}}>
    <h2 style={{color:'black'}}><b>20% OFF YOUR PURCHASE</b></h2> 
    <p  style={{color:'black'}}>Get this booking offer and you will get the opportunity to visit USA.</p>
  </div>

  <div className="container">
    <p  style={{color:'black'}} >Use Promo Code: <span class="promo">BOH232</span></p>
    <p className="expire"  style={{color:'red'}}>Expires soon</p>

    
  </div>
  
</div>    

{/* 3RD */}

<div className="coupon">
  <div className="container">
    <h3 style={{color:'black'}} >New Travel Package In Australia</h3>
  </div>

  <img src={img3} alt="Avatar" style={{width:'500px'}}/>
     
  <div className="container" style={{backgroundColor:'white'}}>
    <h2 style={{color:'black'}}><b>20% OFF YOUR PURCHASE</b></h2> 
    <p style={{color:'black'}}>Get this booking offer and you will get the opportunity to visit Australia.</p>
  </div>

  <div className="container">
    <p style={{color:'black'}}>Use Promo Code: <span class="promo">BOH232</span></p>
    <p style={{color:'red'}} className="expire">Expires soon</p>

    
  </div>
  
</div>   
        </div>
      </div>
    );
};

export default Offer;