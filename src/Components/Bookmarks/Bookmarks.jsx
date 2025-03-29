import React from "react";

const Bookmarks = ({ markedBlog, readingMinit }) => {
  return (
    <div>
      <div
        className="p-3 rounded-2 mb-3"
        style={{ backgroundColor: "rgba(17, 17, 17, 0.05)", color: "#6047EC" }}
      >
        <h5>Spent time on read : {readingMinit} min</h5>
      </div>
      <div
        className="p-3"
        style={{ backgroundColor: "rgba(17, 17, 17, 0.05)" }}
      >
        <h5>Bookmarked Blogs : {markedBlog.length} </h5>
        {markedBlog.map((marked, idx) => (
          <p
            key={idx}
            className="p-4 rounded-2"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            {marked.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
