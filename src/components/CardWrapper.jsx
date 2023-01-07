import React from "react";
import Card from "./Card";
const CardWrapper = (props) => {
  const arr = [];
  Object.entries(props).map((entry) => arr.push(<Card {...entry[1]} />));
  return <div className="cardWrapper">{arr}</div>;
};

export default CardWrapper;
