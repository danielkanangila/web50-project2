import React, { useState, useRef } from "react";
import styled from "styled-components";

const Textarea = ({ value, setValue, getHeight, ...otherProps }) => {
  const [rows, setRows] = useState(1);
  const [hiddenText, setHiddenText] = useState("");
  const textareaRef = useRef();
  const hiddenSpanRef = useRef();

  const handleChange = (e) => {
    setValue(e);
    const spanWidth = hiddenSpanRef.current.clientWidth + 40;
    const textareaWidth = textareaRef.current.clientWidth;
    console.log(spanWidth, textareaWidth);
    if (spanWidth >= textareaWidth) {
      setRows(rows + 1);
      setHiddenText("");
      console.log("it work");
    } else {
      setHiddenText(e.target.value);
    }
  };

  return (
    <Wrapper className="textarea">
      <textarea
        ref={textareaRef}
        rows={rows}
        value={value}
        {...otherProps}
        onChange={handleChange}
      ></textarea>
      <span ref={hiddenSpanRef}>{hiddenText}</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  span {
    visibility: hidden;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -5;
  }
`;

export default Textarea;
