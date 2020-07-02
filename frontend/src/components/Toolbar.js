import React from "react";
import styled from "styled-components";
import colors from "../config/colors";

const Toolbar = ({ children }) => {
  return (
    <Wrapper className="toolbar">
      <div className="bar">{children}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  .bar {
    background-color: ${colors.white};
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 20px;
    width: 100%;
    height: 57px;
    border-bottom: 2px solid ${colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    -webkit-box-shadow: 1px 3px 11px -4px rgba(153, 153, 153, 1);
    -moz-box-shadow: 1px 3px 11px -4px rgba(153, 153, 153, 1);
    box-shadow: 1px 3px 11px -4px rgba(153, 153, 153, 1);
    z-index: 700;
  }
`;

export default Toolbar;
