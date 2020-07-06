import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import { useToolbar } from "../hooks/useToolbar";
import { Logo, ImageCircle } from "../components";
// To be removed
import { messages } from "./../devData.js";
import ListItem from "../components/lists/ListItem";

const Messages = () => {
  const toolbar = useToolbar();

  useEffect(() => {
    toolbar.setContent({
      title: "Messages",
      subTitle: "You have 300 messages",
      Image: () => <Logo />,
    });
  }, []);

  return (
    <Wrapper className="section">
      <h2>Direct Messages</h2>
      {messages.map((message) => (
        <ListItem
          title={message.from}
          to={`/user/messages/${message.id}`}
          highlight={message.read}
          Image={<ImageCircle />}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .list-item {
    &--middle {
      margin-left: 2px;
    }
  }
`;

export default Messages;
