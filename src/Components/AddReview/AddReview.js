import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddReview.css";
const AddReview = () => {
  const { reset } = useForm();
  const [name, setName] = useState("");
  const [reviewstar, setReviewStar] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("reviewstar", reviewstar);
    formData.append("description", description);
    formData.append("image", image);

    fetch("https://branch-boggy-backbone.glitch.me/addreview", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.insertedId) {
          reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="add-review">
      <h2>Write Your Review</h2>

      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Your Name"
        />
        <input
          onChange={(e) => setReviewStar(e.target.value)}
          type="text"
          placeholder="Your Review Star"
        />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Write here.."
        ></textarea>

        <input
          style={{ width: "40%" }}
          type="file"
          placeholder="Choose Image"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddReview;
