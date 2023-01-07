import React from "react";
const Blog = (props) => {
  console.log(props);
  const { title, description, date, coverImg, location, URL } = props;
  return (
    <div className="blog">
      <div className="image">
        <img src={`/src/images/${coverImg}`} />
      </div>
      <div className="text">

        <div className="location-line">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm4 14.5c0 .828-1.79 1.5-4 1.5s-4-.672-4-1.5 1.79-1.5 4-1.5 4 .672 4 1.5z"/></svg>
            <span className="location">{location}</span>
            <a href={URL}>Location</a>
        </div>
        <h2>{title}</h2>
        <span className="date">{date}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Blog;
