import React from "react";

function SingleBlog({ blog }) {
  const { title, thumbnail, description, date } = blog || {};
  return (
    <>
      <div className="w-2/3 shadow-lg">
        <div className="mb-4">
          <img className="object-cover h-48 w-96" src={thumbnail} alt="SYLHET" />
        </div>
        <div>
          <div className="flex justify-between mx-3">
            <h2 className="text-[#2ED89B] text-2xl font-semibold">{title} </h2>
          </div>

          <p className="w-10/12 h-24 text-[#6F6F6F] text-xs mx-3 overflow-hidden my-3">{description}</p>
        </div>
        <div className="flex justify-start gap-11 mt-11 mb-5">
          <div className="ml-5">
            <p>
              <b>{date}</b>
            </p>
          </div>
          <div>
            <p>
              <b>0 comments</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleBlog;
