import React from 'react';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import img1 from './image1_200x200.png'
import img2 from './image2_200x200.png'
import img3 from './image3.png'
import img4 from './night-gaac9cc245_1920.jpg'
const Review = () => {
    const url={
        background:`url(${img4})`
    }
    return (
        <div style={url}>
            <h1>Users Review</h1>
            <Container style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div >
                <Image src={img1} ></Image> 
                <div style={{border:'1px solid green',margin:'10px',padding:'10px'}}>
                <p style={{overflowX:'hidden'}}>"Their Service is very good and they trip management is also very good.You will get the whole idea if you want to go with them."</p>  

                </div>
               
                </div>
           <div>
           <Image src={img2} ></Image> 
           <div style={{border:'1px solid green',margin:'10px',padding:'10px'}}>
                <p style={{overflowX:'hidden'}}>"Their Service is very good and they trip management is also very good.You will get the whole idea if you want to go with them."</p>    
                </div>
           </div>

          <div>

          <Image src={img3} ></Image> 
          <div style={{border:'1px solid green',margin:'10px',padding:'10px'}}>
                <p style={{overflowX:'hidden'}}>"Their Service is very good and they trip management is also very good.You will get the whole idea if you want to go with them."</p>    
                </div>
          </div>
         
            </Container>
        
        </div>
    );
};

export default Review;