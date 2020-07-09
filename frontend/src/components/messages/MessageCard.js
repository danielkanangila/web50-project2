import React from "react";
import styled from "styled-components";

import ImageCircle from "./../ImageCircle";
import { getTimeFromStringDate } from "./../../utils";

const MessageCard = ({ avatarUrl, message, createdAt }) => {
  return (
    <Wrapper>
      <ImageCircle url={avatarUrl} />
      <div className="text-box">
        <p>{message}</p>
        <span>{getTimeFromStringDate(createdAt)}</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default MessageCard;
