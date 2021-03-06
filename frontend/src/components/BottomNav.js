import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import colors from "./../config/colors";
import Icon from "./Icon";

const BottomNav = ({ items, visible }) => {
  return (
    <Wrapper className="bottom-nav">
      {items.map((item) => (
        <NavItem key={item.name} {...item} />
      ))}
    </Wrapper>
  );
};

export const NavItem = ({ name, path, icon }) => {
  return (
    <NavLink to={path} activeClassName="active" className="nav-item">
      <Icon name={icon} />
      <span>{name}</span>
    </NavLink>
  );
};

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 57px;
  background-color: ${colors.primary};
  -webkit-box-shadow: 1px -5px 11px -4px rgba(153, 153, 153, 1);
  -moz-box-shadow: 1px -5px 11px -4px rgba(153, 153, 153, 1);
  box-shadow: 1px -5px 11px -4px rgba(153, 153, 153, 1);

  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${colors.white};
    transition: ease-in 0.7s;
    width: fit-content;
    padding: 0 15px;
    position: relative;

    &:hover::after,
    &.active::after {
      content: " ";
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: ${colors.white};
      margin-top: 3px;
    }

    span,
    .icon {
      color: ${colors.white};
      font-size: 1.4rem;
    }
    span {
      font-size: 0.8rem;
      margin-top: 3px;
    }
  }

  @media (min-width: 850px) {
    display: none;
  }
`;

export default BottomNav;
