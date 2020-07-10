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
        <div className="messages-clearfix">
          {messages.map((message) => (
            <MessageCard
              key={message.id}
              username={message.from}
              message={message.body}
              createdAt={message.created_at}
            />
          ))}
        </div>
      </div>
      <MessageInputBox sendWrapperHeight={setMessageInputBoxHeight} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 57px);
  margin-top: 57px;
  background-color: ${colors.lightgray1};
  position: relative;

  .messages {
    position: relative;
    left: 0%;
    width: 100%;
    height: 100%;
    ${({ paddingBottom }) =>
      !paddingBottom ? `bottom: ${70}px` : `bottom: ${paddingBottom}px`};
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    &-clearfix {
      width: 100%;
      padding: 100px 25px 15px;
      overflow-y: scroll;
    }
  }
`;

export default MessageContainer;
