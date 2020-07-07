import React from "react";
import styled from "styled-components";
import colors from "../../config/colors";
import MessageInputBox from "./MessageInputBox";

const MessageContainer = ({ messages }) => {
  return (
    <Wrapper className="message-container">
      <MessageInputBox />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 57px);
  margin-top: 57px;
  padding: 20px;
  background-color: ${colors.lightgray1};
  position: relative;
`;

export default MessageContainer;
