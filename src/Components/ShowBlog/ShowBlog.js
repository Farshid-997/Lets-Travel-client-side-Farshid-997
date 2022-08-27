import React from "react";
import { Card } from "react-bootstrap";

const ShowBlog = (props) => {
  const { name, place, description, image } = props.blogs;
  return (
    <div>
      <Card style={{ width: "18rem", border: 0 }}>
        <Card.Img
          variant="bottom"
          style={{
            padding: "5px",
            borderRadius: "50%",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          }}
          src={`data:image/png;base64,${image}`}
        />
        <Card.Body style={{ backgroundColor: "black" }}>
          <Card.Title style={{ color: "rgba(76, 223, 223, 0.925)" }}>
            "The Place {place} I Never Forgot"- {name}
          </Card.Title>
          <Card.Text style={{ color: "rgba(76, 223, 223, 0.925)" }}>
            {description}..
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ShowBlog;
