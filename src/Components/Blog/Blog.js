import React from 'react';
import { Card } from 'react-bootstrap';
import img1 from './david-marcu-78A265wPiO4-unsplash (1).jpg'
const Blog = () => {
    return (
        <div>
            <Card className="bg-dark text-white">
  <Card.Img src={img1} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Write Travel Blog With Our Pages</Card.Title>
    <Card.Text>
    <h2>LETS WRITE SOMETHING ABOUT YOUR BEST EXPERIENCE WITH US AND WRITE THIS INTO OUR BLOG.</h2>
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
        </div>
    );
};

export default Blog;