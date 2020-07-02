import React, { useState } from "react";
import InputField from "./InputField";
import Icon from "./Icon";

const PasswordField = (props) => {
  const [type, setType] = useState("password");
  const getType = () => {
    return type === "password" ? "text" : "password";
  };
  return (
    <div className="field-password">
      <InputField {...props} type={type} />
      <Icon
        onClick={() => setType(getType())}
        name={type === "password" ? "eye-slash" : "eye"}
        position="right"
      />
    </div>
  );
};

export default PasswordField;
