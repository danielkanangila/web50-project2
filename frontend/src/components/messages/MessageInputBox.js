import React, { useState } from "react";
import styled from "styled-components";

import colors from "../../config/colors";
import Icon from "../Icon";
import Textarea from "../Textarea";

const MessageInputBox = () => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <Wrapper>
      <Textarea
        value={message}
        setValue={handleChange}
        placeholder="Type a message"
      />
      <button onClick={() => console.log("it work")}>
        <Icon name="paper-plane" />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  background-color: ${colors.lightgray1};
  -webkit-box-shadow: 2px -1px 5px 0px rgba(184, 184, 184, 1);
  -moz-box-shadow: 2px -1px 5px 0px rgba(184, 184, 184, 1);
  box-shadow: 2px -1px 5px 0px rgba(184, 184, 184, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  .textarea {
    width: 94%;
  }
  textarea {
    padding: 10px 20px;
    border: 1px solid ${colors.lightgray};
    border-radius: 25px;
    width: 94%;
    background-color: ${colors.white};
    font-size: 100%;
  }
  button {
    width: fit-content;
    height: fit-content;
    .icon {
      color: ${colors.primary};
      font-size: 2rem;
    }
    :hover {
      .icon {
        color: ${colors.pink400};
      }
    }
  }
  .hiddenText {
    position: absolute;
    left: 0;
    top: 0;
    visibility: hidden;
    height: 0;
    background: none;
    color: transparent;
  }
`;

export default MessageInputBox;
