import React from "react";
import styled from "styled-components";
import colors from "../config/colors";

const Toolbar = ({ children }) => {
  return <Wrapper className="toolbar">{children}</Wrapper>;
};

const Wrapper = styled.div`
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
`;

export default Toolbar;
