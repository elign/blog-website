import React from "react";
import Blog from "./Blog";
const CardWrapper = (props) => {
  const arr = [];
  Object.entries(props).map((entry) => arr.push(<Blog {...entry[1]} />));
  return <div className="blog-wrapper">{arr}</div>;
};

export default CardWrapper;
