import React from "react";
import styled from "styled-components";

import colors from "./../config/colors";
import Icon from "./Icon";

const ImageCircle = ({
  url,
  theme = { background: colors.lightgray, color: colors.gray },
  iconName = "person",
}) => {
  return (
    <Wrapper theme={theme}>
      {url && (
        <div className="avatar">
          <img src={url} alt="avatar" />
        </div>
      )}
      {!url && (
        <div className="icon">
          <Icon name={iconName} />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-right: 10px;
  .avatar,
  .icon {
    width: 35px;
    height: 35px;
    border-radius: 50%50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ theme }) => `
      background-color: ${theme.background};
      i {
        color: ${theme.color};
      }
    `}
  }

  img {
    width: 100%;
  }
`;

export default ImageCircle;
