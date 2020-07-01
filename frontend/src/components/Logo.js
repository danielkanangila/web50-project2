import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  width: fit-content;
  margin: 0 auto;
  font-family: "Pacifico";
  background-color: #fe346e;
  color: #ffffff;
  padding: 15px 20px;
  text-align: center;
  border-top-left-radius: 35px;
  border-bottom-right-radius: 35px;
`;

const Logo = () => {
  return <H1 className="logo">my</H1>;
};

export default Logo;
