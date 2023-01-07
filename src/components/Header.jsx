import React from "react";

const Header = (props) => {
  return (
    <div className="header">
      <img src={`/src/assets/${props.image}`} alt="logo" />
    </div>
  );
};

export default Header;
