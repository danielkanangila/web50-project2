import React from "react";
import styled from "styled-components";

import ImageCircle from "./../ImageCircle";
import { getTimeFromStringDate } from "./../../utils";
import colors from "../../config/colors";

const MessageCard = ({ avatarUrl, username, message, createdAt }) => {
  return (
    <Wrapper>
      <ImageCircle url={avatarUrl} />
      <div className="card-content-right">
        <div className="card-header">
          <h5>{username}</h5>
          <span>{getTimeFromStringDate(createdAt)}</span>
        </div>
        <div className="card-text-box">
          <p>{message}</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  background-color: ${colors.white};
  margin-bottom: 15px;
  padding: 10px 15px;
  border-radius: 5px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.095);
  .card {
    &-content-right {
    }
    &-header {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      span {
        margin-left: 10px;
        font-size: 0.7rem;
        color: ${colors.gray};
      }
    }
  }
`;

export default MessageCard;
