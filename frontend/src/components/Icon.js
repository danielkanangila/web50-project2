import React from "react";

const Icon = ({ name, position = "left", ...otherProps }) => {
  return (
    <i className={"fas fa-" + name + " icon " + position} {...otherProps}></i>
  );
};

export default Icon;
