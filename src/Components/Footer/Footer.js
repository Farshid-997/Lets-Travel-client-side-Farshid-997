import React from 'react';
import './Footer.css'
// import img1 from './23322.jpg'
const Footer = () => {
    return (
        <div className="footer" style={{marginTop:'50px'}}>
        {/* <h2 style={{ color: 'orange', fontWeight: 'bold', padding: '5px' }}>This is Footer</h2> */}

        <div className="footer">
            <div className="contain">

                <div className="col">
                    <h1>Resources</h1>
                    <ul>
                        <li>About Us</li>
                        <li>Contact With us</li>
                        <li>Blog</li>

                    </ul>
                </div>
                <div className="col">
                    <h1>Support</h1>
                    <ul>
                        <li>Contact us</li>
                        <li>Web chat</li>
                        <li>Appointment</li>
                    </ul>
                </div>
                <div className="col social">
                    <h1>Social</h1>
                    <ul>
                        <li><img src="https://svgshare.com/i/5fq.svg" alt='' width="32" style={{ width: '32px' }}></img></li>
                        <li><img src="https://svgshare.com/i/5eA.svg" alt='' width="32" style={{ width: '32px' }}></img></li>
                        <li><img src="https://svgshare.com/i/5f_.svg" alt='' width="32" style={{ width: '32px' }}></img></li>
                    </ul>
                </div>
                <div className="clearfix"></div>
            </div>

            {/* <div>
                <img src={img1} style={{width:'150px'}}alt="" />
            </div> */}
        </div>
    </div>
    );
};

export default Footer;