import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../config/colors";
import MessageInputBox from "./MessageInputBox";
import MessageCard from "./MessageCard";

const MessageContainer = ({ messages }) => {
  const [messageInputBoxHeight, setMessageInputBoxHeight] = useState();

  return (
    <Wrapper
      paddingBottom={messageInputBoxHeight}
      className="message-container"
    >
      <div className="messages">
        {messages.map((message) => (
          <MessageCard
            key={message.id}
            message={message.body}
            createdAt={message.created_at}
          />
        ))}
      </div>
      <MessageInputBox sendWrapperHeight={setMessageInputBoxHeight} />
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
  .messages {
    position: absolute;
    ${({ paddingBottom }) =>
      !paddingBottom ? `bottom: ${100}px` : `bottom: ${paddingBottom}px`};
    padding: 30px 0;
  }
`;

export default MessageContainer;
