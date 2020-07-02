import React from "react";
import styled from "styled-components";

import colors from "./../config/colors";
import Icon from "./Icon";

const ProfileCircle = ({ url }) => {
  return (
    <Wrapper>
      {url && (
        <div className="user-avatar">
          <img src={url} alt="Profile" />
        </div>
      )}
      {!url && (
        <div className="user-icon">
          <Icon name="user" />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-right: 10px;
  .user-avatar,
  .user-icon {
    width: 35px;
    height: 35px;
    border-radius: 50%50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.lightgray};
    color: ${colors.gray};
  }

  img {
    width: 100%;
  }
`;

export default ProfileCircle;
