import React from "react";
import styled from "styled-components";

const Checkbox = ({ color = "black", children, value, onChecked }) => {
  return (
    <Wrapper color={color}>
      <div
        onClick={onChecked}
        className={value ? "checkbox checked" : "checkbox"}
      >
        {value && <span>&#x2714;</span>}
      </div>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: fit-content;

  .checkbox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    ${({ color }) => `border: 4px solid ${color}`};
    border-radius: 5px;
    transition: all 0.3s;
    margin-right: 10px;
    color: #fff;
    cursor: pointer;

    &.checked {
      ${({ color }) => `background-color: ${color}`};
      color: #fff;
    }
  }
`;

export default Checkbox;
