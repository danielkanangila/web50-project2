import React, { useEffect } from "react";
import styled from "styled-components";

import { useToolbar } from "../hooks/useToolbar";
import { Logo, ImageCircle } from "../components";
import ListItem from "../components/lists/ListItem";
// To be removed
import { messages } from "./../devData.js";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useLocation, useRouteMatch } from "react-router-dom";

const Messages = () => {
  const [dMessage, setDMessage] = useLocalStorage("dMessage");
  const toolbar = useToolbar();
  const match = useRouteMatch();

  useEffect(() => {
    toolbar.setContent({
      title: "Messages",
      subTitle: "You have 300 messages",
      Image: () => <Logo />,
    });
  }, []);

  const setToolbar = (info) => {
    console.log(match);
    setDMessage(info);
    toolbar.setContent({
      title: info.from,
      subTitle: "online",
      Image: () => <ImageCircle />,
      shownBackNav:
        window.location.pathname !== "/user/messages" ? true : false,
    });
  };

  return (
    <Wrapper className="section">
      <h2>Direct Messages</h2>
      {messages.map((message) => (
        <ListItem
          key={message.id}
          title={message.from}
          to={`/user/messages/${message.id}`}
          highlight={!message.read}
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
