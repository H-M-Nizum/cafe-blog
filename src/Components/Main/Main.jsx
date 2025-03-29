import React, { useState } from "react";
import Blogs from "../Blogs/Blogs";
import Bookmarks from "../Bookmarks/Bookmarks";

const Main = () => {
  const [markedBlog, setMarkedBlog] = useState([]);
  const [readingMinit, setreadingMinit] = useState(0);

  const handleMarkedBlog = (blog, isMarked) => {
    console.log("Handel Marked Blog", blog, isMarked);
    if (!isMarked) {
      setMarkedBlog([...markedBlog, blog]);
    } else {
      setMarkedBlog(markedBlog.filter((item) => item.id !== blog.id));
    }
  };
  const handleReadingMinit = (minit) => {
    console.log("minit");
    setreadingMinit(readingMinit + minit);
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-8">
          <Blogs
            handleMarkedBlog={handleMarkedBlog}
            handleReadingMinit={handleReadingMinit}
          />
        </div>
        <div className="col-md-4">
          <Bookmarks markedBlog={markedBlog} readingMinit={readingMinit} />
        </div>
      </div>
    </div>
  );
};

export default Main;
