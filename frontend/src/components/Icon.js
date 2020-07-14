import React from "react";

const Icon = ({ name, position = "left", ...otherProps }) => {
  return (
    <span className={"material-icons" + " icon " + position} {...otherProps}>
      {name}
    </span>
  );
};

export default Icon;
