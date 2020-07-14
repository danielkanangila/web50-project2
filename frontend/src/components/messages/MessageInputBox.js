import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import colors from "../../config/colors";
import Icon from "../Icon";
import Textarea from "../Textarea";

const MessageInputBox = ({ sendWrapperHeight }) => {
  const wrapperRef = useRef();
  const [message, setMessage] = useState("");

  useEffect(() => {
    // send wrapper box height to parent
    sendWrapperHeight(wrapperRef.current?.offsetHeight);
  }, []);

  const handleChange = (e) => {
    setMessage(e.target.value);
    // send wrapper box height to parent when input change
    sendWrapperHeight(wrapperRef.current?.offsetHeight);
  };

  return (
    <Wrapper ref={wrapperRef}>
      <Textarea
        value={message}
        setValue={handleChange}
        placeholder="Type a message"
      />
      <button onClick={() => console.log("it work")}>
        <Icon name="send" />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
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
    width: 92%;
    background-color: ${colors.white};
    font-size: 100%;
    transition: 0.3s ease;
    &:focus {
      border-color: #2196f3;
    }
    @media (min-width: 850px) {
      width: 92%;
    }
  }
  button {
    width: fit-content;
    height: fit-content;
    margin-left: 10px;
    @media (min-width: 850px) {
      margin-left: 0%;
      margin-right: 10px;
    }
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
  @media (min-width: 850px) {
    width: 73%;
    left: 27%;
  }
`;

export default MessageInputBox;
