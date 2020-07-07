import React, { useState, useRef } from "react";
import { getTextWidth } from "../utils";

const Textarea = ({ value, setValue, getHeight, ...otherProps }) => {
  const [rows, setRows] = useState(1);
  const textareaRef = useRef();

  const handleChange = (e) => {
    // External handle change function
    setValue(e);
    // Textarea content width computation for updating textarea rows dynamically.
    const textareaWidth = textareaRef.current.clientWidth;
    const r = Math.ceil((getTextWidth(e.target.value) + 42) / textareaWidth);
    setRows(r);
  };

  return (
    <textarea
      ref={textareaRef}
      rows={rows}
      value={value}
      {...otherProps}
      onChange={handleChange}
    ></textarea>
  );
};

export default Textarea;
