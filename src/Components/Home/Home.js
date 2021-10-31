import React from 'react';
import Banner from '../Banner/Banner'
import Service from '../Services/Service';
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'
import Blog from '../Blog/Blog'
const Home = () => {
    return (
        <div>
           <Banner></Banner> 
         <Service></Service>
         <Blog></Blog>
         <Contact></Contact>
       <Footer></Footer>
        </div>
    );
};

export default Home;