import React from "react";
import styled from "styled-components";

import colors from "./../config/colors";

const Hamburger = ({ open, setOpen }) => {
  return (
    <Wrapper onClick={() => setOpen(!open)} className="hamburger" open={open}>
      <span></span>
      <span></span>
      <span></span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 2rem;
  height: 1.2rem;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  z-index: 705;
  span {
    display: block;
    position: absolute;
    width: 2rem;
    height: 0.2rem;
    background: ${colors.dark};
    border-radius: 10px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;

    &:nth-child(2) {
      top: 8px;
    }
    &:nth-child(3) {
      top: 16px;
      width: 70%;
    }
  }

  ${({ open }) =>
    open
      ? `
    height: 1.7rem;
    span {
      &:nth-child(1) {
        top: 12px;
        -webkit-transform: rotate(135deg);
        -moz-transform: rotate(135deg);
        -o-transform: rotate(135deg);
        transform: rotate(135deg);
      }
      &:nth-child(2) {
        opacity: 0;
        left: -60px;
      }
      &:nth-child(3) {
        top: 12px;
        width: 100%;
        -webkit-transform: rotate(-135deg);
        -moz-transform: rotate(-135deg);
        -o-transform: rotate(-135deg);
        transform: rotate(-135deg);
      }
    }
  `
      : ""}
`;

export default Hamburger;
