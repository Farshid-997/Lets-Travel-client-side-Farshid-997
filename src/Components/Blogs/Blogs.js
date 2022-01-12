import React,{useEffect,useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ShowBlog from '../ShowBlog/ShowBlog';


const Blogs = () => {
    const[blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/blog')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div>
            <h2 style={{margin:'18px'}}>Blog of Our Travellers</h2>
            <Container className='cnt' >
           <Row xs={1} md={3} className="g-5" style={{marginLeft:'5px',paddingLeft:'5px'}}>
                {
blogs.map(blogs=><ShowBlog
key={blogs._id}
    blogs={blogs}
 >
   </ShowBlog>)
                }
            </Row>
           </Container>       
        </div>
    );
};

export default Blogs;