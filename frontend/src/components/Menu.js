import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import colors from "./../config/colors";
import Icon from "./Icon";

const Menu = ({ items }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <Wrapper>
      <Icon onClick={() => setToggle(!toggle)} name="ellipsis-v" />
      {toggle && (
        <div
          className={`menu-items animate__animated  ${
            toggle
              ? "animate__fadeInDown"
              : "animate__fadeOutUp" + "animate__delay-2s"
          }`}
        >
          {items.map((item) => (
            <MenuItem key={item.name} {...item} />
          ))}
        </div>
      )}
    </Wrapper>
  );
};

const MenuItem = ({ name, path, icon }) => {
  return (
    <Link to={path} className="menu-item" path={path}>
      {icon && <Icon name={icon} />}
      <span>{name}</span>
    </Link>
  );
};

const Wrapper = styled.div`
  position: relative;
  .menu {
    &-items {
      position: absolute;
      right: 0;
      top: 30px;
      width: 180px;
      height: fit-content;
      background-color: ${colors.white};
      display: flex;
      flex-direction: column;
      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      border-radius: 4px;
      overflow: hidden;
      transition: 0.3s;
    }
    &-item {
      padding: 15px;
      border-bottom: 1px solid ${colors.lightgray};
      font-size: 0.85rem;
      transition: all 0.3s;
      display: flex;
      align-items: center;

      &:hover {
        background-color: ${colors.primary};

        span,
        .icon {
          color: ${colors.white};
        }
      }

      &:last-child {
        border-bottom: 0;
      }

      .icon {
        margin-right: 8px;
        color: ${colors.gray};
      }
    }
  }
`;

export default Menu;
