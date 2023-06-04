import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import img1 from "../../assets/img_1.png";
import img2 from "../../assets/img_2.png";
import img3 from "../../assets/img_3.png";
import cox from "../../assets/coxbazar.jpg";
import sajek from "../../assets/sajek.jpg";
import saint from "../../assets/saint.jpg";
import moinamoti from "../../assets/moinamoti.jpg";
import "./blogpost.css";
import { Link } from "react-router-dom";
import { useGetBlogsQuery } from "../../feature/blog/blogApi";
import Blog from "./Blog";

import Slider from "./Slider";
const Blogpost = () => {
  const { data: blogs, isLoading, isError, error } = useGetBlogsQuery();
  let content = null;

  if (isLoading) {
    content = <li className="m-2 text-center">Loading...</li>;
  } else if (!isLoading && isError) {
    content = <div>There was an error!!!</div>;
  } else if (!isLoading && !isError && blogs?.length === 0) {
    content = <div>There was no BLog Available</div>;
  } else if (!isLoading && !isError && blogs?.length > 0) {
    content = blogs.map((blog) => <Blog blog={blog} />);
  }

  return (
    <>
      <Header />
    <Slider/>
      <div>
        <Link to="/addBlog">
          <button>Create Blog</button>
        </Link>
      </div>
      <div className="text-centers py-8">
        <h1 className="title text-[#2ED89B] text-center text-4xl font-semibold uppercase">Explore All Amazing Story</h1>
      </div>
      <div className="grid grid-cols-3 row-auto gap-y-12 justify-items-center w-10/12 m-auto py-20 bg-[#F5FFFC]">
        {content}
      </div>

      <Footer />
    </>
  );
};

export default Blogpost;
