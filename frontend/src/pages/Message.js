import React, { useEffect } from "react";
import styled from "styled-components";

import { ImageCircle } from "../components";
import { useToolbar } from "../hooks/useToolbar";
import { messages } from "./../devData.js";
import { useParams, useLocation } from "react-router-dom";

const Message = () => {
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
    <Wrapper className="container">
      <h1>Message #{params.user_id}</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Message;
