import React, { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { BsBookmarkHeartFill } from "react-icons/bs";
import "./Blog.css";

const Blog = ({ blog, handleMarkedBlog, handleReadingMinit }) => {
  const [isMarked, setIsMarked] = useState(false);

  const handleClick = () => {
    setIsMarked(!isMarked);
    handleMarkedBlog(blog, isMarked); // Call the function passed from parent
    console.log(isMarked);
  };

  return (
    <div className="border-bottom mb-5 pb-3">
      <div className="mb-4">
        <img
          className="img-fluid"
          src={blog.cover_img}
          alt="Blog Cover Photo"
        />
      </div>
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <div className="">
              <img
                className="rounded-circle me-4"
                width="80"
                src={blog.author.img}
                alt=""
              />
            </div>
            <div>
              <h2>{blog.author.name}</h2>
              <p>{blog.created_at}</p>
            </div>
          </div>
          <div>
            <span>{blog.reading_time} min read</span>
            <button
              className="ms-2 btn btn-mark p-0 border-0 bg-transparent"
              onClick={handleClick}
            >
              {isMarked ? <BsBookmarkHeartFill /> : <CiBookmark />}
            </button>
          </div>
        </div>
        <div>
          <h1>{blog.title}</h1>
          {blog.tags.map((tag, index) => (
            <span key={index} className="me-2">
              {tag}
            </span>
          ))}
          <br />
          <button
            className="btn btn-link p-0 text-primary"
            onClick={() => handleReadingMinit(blog.reading_time)}
          >
            Mark as Read
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
