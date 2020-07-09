import React from "react";
import styled from "styled-components";

import ImageCircle from "./../ImageCircle";
import { getTimeFromStringDate } from "./../../utils";

const MessageCard = ({ avatarUrl, message, created_at }) => {
  return (
    <Wrapper>
      <ImageCircle url={avatarUrl} />
      <div className="text-box">
        <p>{message}</p>
        <span>{getTimeFromStringDate(created_at)}</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default MessageCard;
