import React from "react";

const InputField = ({ label, name, ...otherProps }) => {
  return (
    <div id={name} className="field">
      <input name={name} {...otherProps} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default InputField;
