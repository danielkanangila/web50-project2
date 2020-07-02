import React from "react";
import styled from "styled-components";

import colors from "../config/colors";

const ToolbarTitle = ({ title, subTitle, Image }) => {
  return (
    <Wrapper>
      {Image && Image}
      <div>
        <h1>{title}</h1>
        <h3>{subTitle}</h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  h1 {
    font-size: 1rem;
  }
  h3 {
    font-size: 0.65rem;
    color: ${colors.gray};
  }
  .logo {
    width: 35px;
    height: 35px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 10px;
    padding: 0;
    margin-right: 10px;
  }
`;

export default ToolbarTitle;
