import React from "react";

const InputField = ({ Icon, label, name, ...otherProps }) => {
  return (
    <div id={name} className="field">
      <input name={name} {...otherProps} />
      <label htmlFor={name}>{label}</label>
      {Icon}
    </div>
  );
};

export default InputField;
