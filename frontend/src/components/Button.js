import React from "react";

const Button = ({ children, color, type }) => {
  return (
    <button className={`btn btn-${color}`} type={type}>
      {children}
    </button>
  );
};

export default Button;
