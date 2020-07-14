import React from "react";
import styled from "styled-components";

import ImageCircle from "./../ImageCircle";
import { getTimeFromStringDate } from "./../../utils";
import colors from "../../config/colors";

const MessageCard = ({ avatarUrl, username, message, createdAt, isDM }) => {
  const user = { displayName: "Daniel Kanan" };

  const getCardPosition = () => {
    if (!isDM) return "msg";
    return user.displayName === username ? "dm-left" : "dm-right";
  };

  return (
    <Wrapper className={`message-card ` + getCardPosition()} isDM={isDM}>
      {!isDM && <ImageCircle url={avatarUrl} />}
      <div className="card-content-right">
        <div className="card-header">
          {!isDM && <h5>{username}</h5>}
          <span className={isDM ? "dm-time" : "m-time"}>
            {getTimeFromStringDate(createdAt)}
          </span>
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
  padding: 15px;
  border-radius: 5px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.155);
  width: 98%;
  position: relative;
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

        &.dm-time {
          margin-left: 0px;
        }
      }
    }
  }

  ${({ isDM }) =>
    isDM
      ? `
    width: fit-content;
    max-width: 90%;
    border-radius: 20px;
  `
      : ``};
  ${({ className }) =>
    className.includes("dm-right")
      ? `
      float: right;
      border-bottom-right-radius: 0;
      background-color: ${colors.primary};
      div.card-header span,
      div.card-text-box p {
        color: ${colors.white};
      }
    `
      : null};
  ${({ className }) =>
    className.includes("dm-left")
      ? `
      left: 0;
      border-bottom-left-radius: 0;
    `
      : null};
`;

export default MessageCard;
