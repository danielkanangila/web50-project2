import React from "react";
import styled from "styled-components";
import colors from "./../config/colors";

const InputField = ({
  Icon,
  label,
  name,
  style = "default",
  ...otherProps
}) => {
  return (
    <Wrapper _style={style} id={name} className="field">
      <input name={name} {...otherProps} />
      <label htmlFor={name}>{label}</label>
      {Icon}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ _style }) =>
    _style === "rounded"
      ? `
      input {

        border: none;
        border: 1px solid ${colors.lightgray};
        border-radius: 25px;
      }
  `
      : ``}
`;

export default InputField;
