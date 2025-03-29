import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleMarkedBlog, handleReadingMinit }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      {/* <h1>Marked Blog Length : {markedBlog.length}</h1> */}
      {blogs.map((blog, idx) => (
        <Blog
          key={idx}
          blog={blog}
          handleMarkedBlog={handleMarkedBlog}
          handleReadingMinit={handleReadingMinit}
        />
      ))}
    </div>
  );
};

export default Blogs;
