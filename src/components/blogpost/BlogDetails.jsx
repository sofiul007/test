import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useParams } from "react-router";
import { useGetBlogDetailsQuery } from "../../feature/blog/blogApi";


function BlogDetails() {
  const {blogId}=useParams()
  const {data:blog,isLoading,isError} =useGetBlogDetailsQuery(blogId)

  let content = null;

  if (isLoading) {
    content = <li className="m-2 text-center">Loading...</li>;
  } else if (!isLoading && isError) {
    content = <div>There was an error!!!</div>;
  } else if (!isLoading && !isError && blog) {
    const {title,description,thumbnail,author,date} =blog || {}

    content = ( <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
    <img className="w-full" src={thumbnail} alt={blog.title} />
    <div className="p-4">
    <div className="text-lg font-bold mb-2">{title}</div>
      <div className="text-gray-500 mb-2">{date}</div>
      <div className="text-lg font-bold mb-2">{author.name}</div>
      <div className="text-gray-700 mb-4">{description}</div>
    </div>
  </div>)
  } 



  return (
    <>
       <Header />
      <div className="max-w-4xl mx-auto">
       {content}
      </div>
      <Footer />
    </>
   

  );
}

export default BlogDetails;
