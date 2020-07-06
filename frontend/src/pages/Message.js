import React, { useEffect } from "react";
import styled from "styled-components";
// to be removed
import { messages } from "./../devData.js";
import { useToolbar } from "../hooks/useToolbar.js";
import { useParams } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage.js";
import { ImageCircle } from "../components/index.js";

const Message = () => {
  const [dMessage, setDMessage] = useLocalStorage("dMessage");
  const params = useParams();
  const toolbar = useToolbar();

  useEffect(() => {
    const dm = messages.filter(
      (message) => message.id === parseInt(params.user_id)
    )[0];
    toolbar.setContent({
      title: dm.from,
      subTitle: "online",
      Image: () => <ImageCircle />,
    });
  }, []);

  return (
    <Wrapper className="container">
      <h1>Message</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Message;
