import React, { useState, useRef } from "react";
import styled from "styled-components";

import colors from "../../config/colors";
import Icon from "../Icon";

const MessageInputBox = () => {
  const [message, setMessage] = useState("");
  const [textRows, setTextRows] = useState(1);
  const ref = useRef();

  const handleChange = (e) => {
    setMessage(e.target.value);
    console.log(ref.current.offsetWidth);
  };

  return (
    <Wrapper>
      <textarea
        ref={ref}
        onChange={handleChange}
        rows={textRows}
        placeholder="Type a message"
        required
        value={message}
      ></textarea>
      <button>
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
  height: 70px;
  background-color: ${colors.lightgray1};
  -webkit-box-shadow: 2px -1px 5px 0px rgba(184, 184, 184, 1);
  -moz-box-shadow: 2px -1px 5px 0px rgba(184, 184, 184, 1);
  box-shadow: 2px -1px 5px 0px rgba(184, 184, 184, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  textarea {
    padding: 10px 20px;
    border: 1px solid ${colors.lightgray};
    border-radius: 25px;
    width: 94%;
    background-color: ${colors.white};
    font-size: 100%;
  }
  button {
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
`;

export default MessageInputBox;
