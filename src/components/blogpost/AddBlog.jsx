import React, { useEffect, useState } from "react";
import { useAddBlogMutation } from "../../feature/blog/blogApi";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

function AddBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [addBlog, { data, isLoading, error }] = useAddBlogMutation();
  const [responseError, setResponseError] = useState(undefined);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error?.data) {
      setResponseError(error.data);
    }
    if (data) {
      navigate("/blogs");
    }
  }, [navigate, setResponseError, error, data]);

  const handlePost = (e) => {
    e.preventDefault();

    let date = new Date().toLocaleDateString("en-GB");
    addBlog({
      title,
      description,
      thumbnail,
      date,
      author: user,
    });
  };

  return (
    <div>
      <h1>ADD Blog Information</h1>

      <form onSubmit={handlePost}>
        <input type="text" placeholder="Blog Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Thumbnail Link"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        />
        <br />
        <button type="submit" disabled={isLoading}>
          Post
        </button>
      </form>
      <div>{responseError}</div>
    </div>
  );
}

export default AddBlog;
