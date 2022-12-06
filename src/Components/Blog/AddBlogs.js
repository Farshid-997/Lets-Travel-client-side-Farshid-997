import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import "./Blog.css";
const AddBlogs = () => {
  const { reset } = useForm();
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("place", place);
    formData.append("description", description);
    formData.append("image", image);

    fetch("https://branch-boggy-backbone.glitch.me/blog", {
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

  const confirmUser = () => {
    toast.success("blog added successfully");
  };

  return (
    <div className="add-blog">
      <h2>Write Your Blog</h2>

      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Your Name"
        />
        <input
          onChange={(e) => setPlace(e.target.value)}
          type="text"
          placeholder="Your Place Name"
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
        <input type="submit" onClick={confirmUser} />
      </form>

      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default AddBlogs;
