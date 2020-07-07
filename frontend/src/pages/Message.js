import React, { useEffect } from "react";
import styled from "styled-components";

import { ImageCircle } from "../components";
import { useToolbar } from "../hooks/useToolbar";
import { messages } from "./../devData.js";
import { useParams } from "react-router-dom";

const Message = () => {
  const toolbar = useToolbar();
  const params = useParams();

  useEffect(() => {
    console.log(params);
    const message = messages;
  }, []);

  const setToolbar = (info) => {
    toolbar.setContent({
      title: info.from,
      subTitle: "online",
      Image: () => <ImageCircle />,
      shownBackNav:
        window.location.pathname !== "/user/messages" ? true : false,
    });
  };
  return (
    <Wrapper className="container">
      <h1>Message</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Message;
