import React from 'react';
import './Footer.css'
 import img1 from './23322.jpg'
import { MdOutlineFacebook } from "react-icons/md";
import { IoLogoTwitter,IoLogoLinkedin,IoMailOpenOutline} from "react-icons/io5";
import { LinkContainer } from 'react-router-bootstrap';
const Footer = () => {
    return (
        <div className="footer" style={{marginTop:'50px'}}>
        {/* <h2 style={{ color: 'orange', fontWeight: 'bold', padding: '5px' }}>This is Footer</h2> */}

        <div className="footer">
            <div className="contain">

                <div className="col">
                    <h1 style={{color:'rgba(76, 223, 223, 0.925)'}}>Resources</h1>
                    <ul>
                      
                        <LinkContainer to='/contact'>
                        <li>Contact With Us</li>
                        </LinkContainer>
                       <LinkContainer to='/blog'>
                       <li>Blog</li>
                       </LinkContainer>
                       

                    </ul>
                </div>
                <div className="col">
                    <h1 style={{color:'rgba(76, 223, 223, 0.925)'}}>Support</h1>
                    <ul>
                        <li>Contact us</li>
                       
                        <li>Appointment</li>
                    </ul>
                </div>
                <div className="col social">
                    <h1 style={{color:'rgba(76, 223, 223, 0.925)'}}>Social</h1>
                    <ul>
                        <li style={{color:'rgba(76, 223, 223, 0.925)'}}><MdOutlineFacebook/></li>
                        <li style={{color:'rgba(76, 223, 223, 0.925)',marginLeft:'5px'}}><IoLogoTwitter/></li>
                        <li style={{color:'rgba(76, 223, 223, 0.925)'}}><IoLogoLinkedin/></li>
                        <li style={{color:'rgba(76, 223, 223, 0.925)'}}><IoMailOpenOutline/></li>
                        <img src={img1}  style={{width:'200px'}} alt="" />
                    </ul>
                </div>

              
                <div className="clearfix"></div>
            </div>

           
        </div>
    </div>
    );
};

export default Footer;