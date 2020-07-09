import React, { useEffect } from "react";
import styled from "styled-components";

import { ImageCircle } from "../components";
import { useToolbar } from "../hooks/useToolbar";
import { messages } from "./../devData.js";
import { useParams, useLocation } from "react-router-dom";
import { MessageContainer } from "../components/messages";
import { useBottomNav } from "../hooks/useBottomNav";

const Message = () => {
  // hide  bottom-nav
  useBottomNav().setVisibility(false);

  const toolbar = useToolbar();
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    const message = messages.filter(
      (message) => message.id === parseInt(params.user_id)
    )[0];
    setToolbar(message);
  }, [location]);

  const setToolbar = (info) => {
    toolbar.setContent({
      title: info.from,
      subTitle: "online",
      Image: () => <ImageCircle />,
      shownBackNav: true,
    });
  };
  return (
    <Wrapper>
      <MessageContainer></MessageContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Message;
