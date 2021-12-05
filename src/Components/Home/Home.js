import React from 'react';
import Banner from '../Banner/Banner'
import Service from '../Services/Service';
import Footer from '../Footer/Footer'

import Offer from '../Offer/Offer'

import Places from '../Places/Places';
const Home = () => {
    return (
        <div>
           <Banner></Banner> 
         <Service></Service>
         <Offer></Offer>
         <Places/>
       
       <Footer></Footer>
        </div>
    );
};

export default Home;