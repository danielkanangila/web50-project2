import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Icon from "./Icon";
import colors from "./../config/colors";

const Sidenav = ({ items, open }) => {
  return (
    <Wrapper className={open ? "open" : ""}>
      {items.map(({ name, path, icon }) => (
        <NavItem to={path} activeClassName="active" key={name}>
          <Icon name={icon} />
          <span>{name}</span>
        </NavItem>
      ))}
    </Wrapper>
  );
};

const NavItem = styled(NavLink)`
  display: flex;
  font-size: 1.5rem;
  padding: 10px 20px;

  span,
  .icon {
    color: ${colors.primary};
  }
  .icon {
    margin-right: 15px;
  }

  &:hover {
    background-color: ${colors.primary};
    span,
    .icon {
      color: ${colors.white};
    }
  }
`;

const Wrapper = styled.div`
  position: absolute;
  left: -600px;
  top: 57px;
  width: 100%;
  height: calc(100vh - 57px);
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-box-shadow: 1px 3px 11px -4px rgba(153, 153, 153, 1);
  -moz-box-shadow: 1px 3px 11px -4px rgba(153, 153, 153, 1);
  box-shadow: 1px 3px 11px -4px rgba(153, 153, 153, 1);
  z-index: 704;
  transition: all 0.75s ease;
  ${({ className }) =>
    className === "open"
      ? `
        left: 0;
      `
      : `
      left: -600px;
      `}

  @-webkit-keyframes slide {
    100% {
      left: 0;
    }
  }

  @keyframes slide {
    100% {
      left: 0;
    }
  }

  @-webkit-keyframes slideRight {
    100% {
      left: -600px;
    }
  }

  @keyframes slideRight {
    100% {
      left: -600px;
    }
  }
`;

export default Sidenav;
